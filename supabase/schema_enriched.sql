-- =====================================================
-- SCHÉMA ENRICHI POUR RÉSONANCE CITOYENNE
-- Expérience de vote quadratique à grande échelle
-- =====================================================

-- ============ TABLES DE BASE ============

-- Table des utilisateurs (anonymes)
CREATE TABLE IF NOT EXISTS public.sim_users (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ, -- Quand ont-ils fini les 52 semaines
  total_credits_spent INTEGER DEFAULT 0,
  weeks_completed INTEGER DEFAULT 0, -- Progression (0-52)

  -- Données démographiques (optionnelles, pour analyses)
  age_range TEXT, -- '18-25', '26-35', '36-50', '51-65', '66+'
  education_level TEXT, -- 'bac-', 'bac', 'bac+2', 'bac+3+'
  political_interest INTEGER, -- 1-5 (échelle Likert)

  CONSTRAINT sim_users_pkey PRIMARY KEY (id)
);

-- Table des propositions de loi
CREATE TABLE IF NOT EXISTS public.sim_bills (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,

  week INTEGER NOT NULL, -- 1 à 52 (au lieu de month)
  category TEXT NOT NULL, -- 'économie', 'sociétal', 'environnement', etc.

  -- Données réelles pour comparaison
  ppl_number TEXT, -- Numéro PPL officiel (ex: "PPL-2024-123")
  assembly_result TEXT, -- 'for' ou 'against' (résultat réel Assemblée Nationale)
  assembly_for_count INTEGER, -- Nombre députés POUR
  assembly_against_count INTEGER, -- Nombre députés CONTRE

  source_url TEXT, -- Lien vers texte officiel
  key_points TEXT[], -- Points clés (array)

  CONSTRAINT sim_bills_pkey PRIMARY KEY (id),
  CONSTRAINT week_range CHECK (week >= 1 AND week <= 52)
);

-- Table des votes
CREATE TABLE IF NOT EXISTS public.sim_votes (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  user_id UUID NOT NULL REFERENCES public.sim_users(id) ON DELETE CASCADE,
  bill_id UUID NOT NULL REFERENCES public.sim_bills(id) ON DELETE CASCADE,

  credits INTEGER NOT NULL, -- Coût en crédits (intensité²)
  vote_count INTEGER NOT NULL, -- Intensité (1-10)
  direction TEXT NOT NULL, -- 'for', 'against', ou 'abstain'

  -- Données comportementales
  time_spent_seconds INTEGER DEFAULT 0, -- Temps passé sur la proposition
  source_clicked BOOLEAN DEFAULT FALSE, -- A consulté le texte officiel
  revisions_count INTEGER DEFAULT 0, -- Nombre de fois qu'ils ont changé d'avis

  CONSTRAINT sim_votes_pkey PRIMARY KEY (id),
  CONSTRAINT unique_user_bill UNIQUE (user_id, bill_id), -- Un seul vote par user/bill
  CONSTRAINT direction_check CHECK (direction IN ('for', 'against', 'abstain'))
);

-- ============ INDEX POUR PERFORMANCE ============

CREATE INDEX IF NOT EXISTS idx_votes_user ON sim_votes(user_id);
CREATE INDEX IF NOT EXISTS idx_votes_bill ON sim_votes(bill_id);
CREATE INDEX IF NOT EXISTS idx_votes_created ON sim_votes(created_at);
CREATE INDEX IF NOT EXISTS idx_bills_week ON sim_bills(week);
CREATE INDEX IF NOT EXISTS idx_bills_category ON sim_bills(category);

-- ============ VUES MATÉRIALISÉES POUR STATISTIQUES ============

-- VUE 1: Divergence QV vs Vote Majoritaire
CREATE MATERIALIZED VIEW IF NOT EXISTS live_divergence AS
SELECT
  b.id AS bill_id,
  b.title,
  b.category,
  b.week,

  -- Vote majoritaire classique
  COUNT(CASE WHEN v.direction = 'for' THEN 1 END) AS majority_for_count,
  COUNT(CASE WHEN v.direction = 'against' THEN 1 END) AS majority_against_count,
  CASE
    WHEN COUNT(CASE WHEN v.direction = 'for' THEN 1 END) >
         COUNT(CASE WHEN v.direction = 'against' THEN 1 END)
    THEN 'for'
    ELSE 'against'
  END AS majority_result,

  -- Vote quadratique
  SUM(CASE WHEN v.direction = 'for' THEN v.credits ELSE 0 END) AS qv_for_credits,
  SUM(CASE WHEN v.direction = 'against' THEN v.credits ELSE 0 END) AS qv_against_credits,
  CASE
    WHEN SUM(CASE WHEN v.direction = 'for' THEN v.credits ELSE -v.credits END) > 0
    THEN 'for'
    ELSE 'against'
  END AS qv_result,

  -- Divergence
  CASE
    WHEN (COUNT(CASE WHEN v.direction = 'for' THEN 1 END) >
          COUNT(CASE WHEN v.direction = 'against' THEN 1 END)) !=
         (SUM(CASE WHEN v.direction = 'for' THEN v.credits ELSE -v.credits END) > 0)
    THEN TRUE
    ELSE FALSE
  END AS is_divergent,

  -- Comparaison avec Assemblée Nationale
  b.assembly_result,
  CASE
    WHEN b.assembly_result IS NOT NULL AND
         b.assembly_result != (
           CASE
             WHEN SUM(CASE WHEN v.direction = 'for' THEN v.credits ELSE -v.credits END) > 0
             THEN 'for'
             ELSE 'against'
           END
         )
    THEN TRUE
    ELSE FALSE
  END AS differs_from_assembly,

  -- Stats descriptives
  COUNT(*) AS total_votes,
  ROUND(AVG(v.vote_count), 2) AS avg_intensity,
  ROUND(AVG(v.time_spent_seconds), 0) AS avg_time_spent

FROM sim_bills b
LEFT JOIN sim_votes v ON b.id = v.bill_id AND v.direction != 'abstain'
GROUP BY b.id, b.title, b.category, b.week, b.assembly_result;

-- VUE 2: Minorités passionnées (cas où minorité gagne avec QV)
CREATE MATERIALIZED VIEW IF NOT EXISTS live_passionate_minorities AS
SELECT
  bill_id,
  title,
  minority_position,
  minority_size_pct,
  minority_avg_intensity,
  majority_avg_intensity,
  intensity_ratio
FROM (
  SELECT
    d.bill_id,
    d.title,

    -- Position minoritaire (celle qui perd au vote majoritaire)
    CASE WHEN d.majority_result = 'for' THEN 'against' ELSE 'for' END AS minority_position,

    -- Taille de la minorité (%)
    ROUND(
      100.0 * LEAST(d.majority_for_count, d.majority_against_count) / d.total_votes,
      1
    ) AS minority_size_pct,

    -- Intensité moyenne minorité vs majorité
    (SELECT ROUND(AVG(vote_count), 2)
     FROM sim_votes
     WHERE bill_id = d.bill_id
       AND direction = CASE WHEN d.majority_result = 'for' THEN 'against' ELSE 'for' END
    ) AS minority_avg_intensity,

    (SELECT ROUND(AVG(vote_count), 2)
     FROM sim_votes
     WHERE bill_id = d.bill_id
       AND direction = d.majority_result
    ) AS majority_avg_intensity,

    -- Ratio intensité (minorité / majorité)
    ROUND(
      (SELECT AVG(vote_count) FROM sim_votes WHERE bill_id = d.bill_id AND direction != d.majority_result) /
      NULLIF((SELECT AVG(vote_count) FROM sim_votes WHERE bill_id = d.bill_id AND direction = d.majority_result), 0),
      2
    ) AS intensity_ratio,

    d.is_divergent

  FROM live_divergence d
  WHERE d.total_votes > 10 -- Minimum de votes pour être pertinent
) subq
WHERE is_divergent = TRUE -- Seulement les cas où QV ≠ vote majoritaire
  AND minority_size_pct < 45 -- Vraiment minoritaire
  AND intensity_ratio > 1.5; -- Minorité significativement plus intense

-- VUE 3: Apprentissage par semaine
CREATE MATERIALIZED VIEW IF NOT EXISTS live_learning_curve AS
SELECT
  b.week,
  COUNT(DISTINCT v.user_id) AS num_voters,
  ROUND(AVG(v.credits), 1) AS avg_credits_spent,
  ROUND(AVG(v.vote_count), 2) AS avg_intensity,
  ROUND(100.0 * SUM(CASE WHEN v.source_clicked THEN 1 ELSE 0 END) / COUNT(*), 1) AS source_consultation_pct,
  ROUND(AVG(v.time_spent_seconds), 0) AS avg_time_seconds,
  ROUND(AVG(v.revisions_count), 2) AS avg_revisions
FROM sim_bills b
JOIN sim_votes v ON b.id = v.bill_id
WHERE v.direction != 'abstain'
GROUP BY b.week
ORDER BY b.week;

-- VUE 4: Stats globales en temps réel
CREATE MATERIALIZED VIEW IF NOT EXISTS live_global_stats AS
SELECT
  -- Participants
  (SELECT COUNT(*) FROM sim_users WHERE weeks_completed > 0) AS total_participants,
  (SELECT COUNT(*) FROM sim_users WHERE weeks_completed = 52) AS completed_participants,

  -- Votes
  (SELECT COUNT(*) FROM sim_votes WHERE direction != 'abstain') AS total_votes,
  (SELECT ROUND(AVG(vote_count), 2) FROM sim_votes WHERE direction != 'abstain') AS avg_intensity_global,

  -- Divergences
  (SELECT COUNT(*) FROM live_divergence WHERE is_divergent = TRUE) AS divergent_bills_count,
  (SELECT ROUND(100.0 * COUNT(*) / 52, 1) FROM live_divergence WHERE is_divergent = TRUE) AS divergence_rate_pct,

  -- Comparaison Assemblée
  (SELECT COUNT(*) FROM live_divergence WHERE differs_from_assembly = TRUE AND assembly_result IS NOT NULL) AS differs_assembly_count,
  (SELECT ROUND(100.0 * COUNT(*) / NULLIF((SELECT COUNT(*) FROM sim_bills WHERE assembly_result IS NOT NULL), 0), 1)
   FROM live_divergence WHERE differs_from_assembly = TRUE) AS assembly_divergence_pct,

  -- Minorités passionnées
  (SELECT COUNT(*) FROM live_passionate_minorities) AS passionate_minority_cases,

  -- Temps
  (SELECT MAX(created_at) FROM sim_votes) AS last_vote_at;

-- ============ FONCTION DE RAFRAÎCHISSEMENT ============

-- Fonction pour rafraîchir toutes les vues matérialisées
CREATE OR REPLACE FUNCTION refresh_all_stats()
RETURNS void AS $$
BEGIN
  REFRESH MATERIALIZED VIEW live_divergence;
  REFRESH MATERIALIZED VIEW live_passionate_minorities;
  REFRESH MATERIALIZED VIEW live_learning_curve;
  REFRESH MATERIALIZED VIEW live_global_stats;
END;
$$ LANGUAGE plpgsql;

-- ============ POLICIES (RLS) ============

-- Enable RLS
ALTER TABLE public.sim_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sim_bills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sim_votes ENABLE ROW LEVEL SECURITY;

-- Policies pour lecture publique
CREATE POLICY "Enable read access for all" ON public.sim_bills FOR SELECT USING (true);
CREATE POLICY "Enable read stats for all" ON public.sim_votes FOR SELECT USING (true);

-- Policies pour insertion
CREATE POLICY "Enable insert for all users" ON public.sim_users FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insert for all users" ON public.sim_votes FOR INSERT WITH CHECK (true);

-- Users peuvent voir leurs propres données
CREATE POLICY "Users can view own data" ON public.sim_users FOR SELECT USING (true);
CREATE POLICY "Users can update own data" ON public.sim_users FOR UPDATE USING (id = auth.uid() OR auth.uid() IS NULL);

-- ============ TRIGGERS POUR AUTO-UPDATE ============

-- Trigger pour mettre à jour weeks_completed
CREATE OR REPLACE FUNCTION update_user_progress()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE sim_users
  SET weeks_completed = (
    SELECT COUNT(DISTINCT b.week)
    FROM sim_votes v
    JOIN sim_bills b ON v.bill_id = b.id
    WHERE v.user_id = NEW.user_id
  )
  WHERE id = NEW.user_id;

  -- Si 52 semaines complétées, marquer comme terminé
  UPDATE sim_users
  SET completed_at = NOW()
  WHERE id = NEW.user_id
    AND weeks_completed = 52
    AND completed_at IS NULL;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_user_progress
AFTER INSERT ON sim_votes
FOR EACH ROW
EXECUTE FUNCTION update_user_progress();

-- ============ FONCTION POUR RÉINITIALISER (DEV ONLY) ============

CREATE OR REPLACE FUNCTION reset_simulation()
RETURNS void AS $$
BEGIN
  TRUNCATE sim_votes CASCADE;
  TRUNCATE sim_users CASCADE;
  -- Ne pas truncate sim_bills (données de référence)

  -- Rafraîchir les vues
  PERFORM refresh_all_stats();
END;
$$ LANGUAGE plpgsql;

-- ============ COMMENTAIRES ============

COMMENT ON TABLE sim_users IS 'Utilisateurs anonymes participant à l''expérience de vote quadratique';
COMMENT ON TABLE sim_bills IS 'Propositions de loi (52 semaines = 52 lois)';
COMMENT ON TABLE sim_votes IS 'Votes avec intensité quadratique';
COMMENT ON MATERIALIZED VIEW live_divergence IS 'Comparaison QV vs vote majoritaire en temps réel';
COMMENT ON MATERIALIZED VIEW live_passionate_minorities IS 'Cas où minorité passionnée l''emporte';
COMMENT ON MATERIALIZED VIEW live_learning_curve IS 'Évolution apprentissage par semaine';
COMMENT ON MATERIALIZED VIEW live_global_stats IS 'Statistiques globales agrégées';
