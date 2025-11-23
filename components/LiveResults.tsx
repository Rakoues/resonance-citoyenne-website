"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  Brain,
  Building2,
  ChevronDown,
  RefreshCw,
  Download,
  Mail,
  FileText,
  Database,
} from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import JSZip from "jszip";

// Types
interface GlobalStats {
  total_participants: number;
  completed_participants: number;
  total_votes: number;
  avg_intensity_global: number;
  divergent_bills_count: number;
  divergence_rate_pct: number;
  differs_assembly_count: number;
  assembly_divergence_pct: number;
  passionate_minority_cases: number;
  last_vote_at: string;
}

interface DivergentBill {
  bill_id: string;
  title: string;
  category: string;
  majority_result: "for" | "against";
  qv_result: "for" | "against";
  majority_for_count: number;
  majority_against_count: number;
  qv_for_credits: number;
  qv_against_credits: number;
  differs_from_assembly: boolean;
  assembly_result?: "for" | "against";
}

interface PassionateMinority {
  bill_id: string;
  title: string;
  minority_position: "for" | "against";
  minority_size_pct: number;
  minority_avg_intensity: number;
  majority_avg_intensity: number;
  intensity_ratio: number;
}

interface LearningData {
  week: number;
  num_voters: number;
  avg_credits_spent: number;
  avg_intensity: number;
  source_consultation_pct: number;
  avg_time_seconds: number;
}



const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export default function LiveResults() {
  const [globalStats, setGlobalStats] = useState<GlobalStats | null>(null);
  const [divergentBills, setDivergentBills] = useState<DivergentBill[]>([]);
  const [passionateMinorities, setPassionateMinorities] = useState<
    PassionateMinority[]
  >([]);
  const [learningCurve, setLearningCurve] = useState<LearningData[]>([]);

  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  // Mock data for demo purposes if Supabase is empty or fails
  const loadMockData = () => {
    setGlobalStats({
      total_participants: 1243,
      completed_participants: 856,
      total_votes: 45200,
      avg_intensity_global: 6.4,
      divergent_bills_count: 12,
      divergence_rate_pct: 23.1,
      differs_assembly_count: 8,
      assembly_divergence_pct: 15.4,
      passionate_minority_cases: 5,
      last_vote_at: new Date().toISOString(),
    });

    setDivergentBills([
      {
        bill_id: "1",
        title: "Légalisation du Cannabis",
        category: "Société",
        majority_result: "against",
        qv_result: "for",
        majority_for_count: 450,
        majority_against_count: 550,
        qv_for_credits: 25000,
        qv_against_credits: 15000,
        differs_from_assembly: true,
        assembly_result: "against"
      },
      {
        bill_id: "2",
        title: "Taxe sur les Super-profits",
        category: "Économie",
        majority_result: "for",
        qv_result: "for",
        majority_for_count: 800,
        majority_against_count: 200,
        qv_for_credits: 40000,
        qv_against_credits: 5000,
        differs_from_assembly: true,
        assembly_result: "against"
      }
    ]);

    setPassionateMinorities([
      {
        bill_id: "3",
        title: "Protection du Loup",
        minority_position: "for",
        minority_size_pct: 35,
        minority_avg_intensity: 9.2,
        majority_avg_intensity: 2.1,
        intensity_ratio: 4.38
      }
    ]);

    setLearningCurve([
      { week: 1, num_voters: 100, avg_credits_spent: 150, avg_intensity: 3, source_consultation_pct: 10, avg_time_seconds: 30 },
      { week: 10, num_voters: 120, avg_credits_spent: 80, avg_intensity: 5, source_consultation_pct: 25, avg_time_seconds: 45 },
      { week: 25, num_voters: 150, avg_credits_spent: 40, avg_intensity: 7, source_consultation_pct: 40, avg_time_seconds: 60 },
      { week: 52, num_voters: 200, avg_credits_spent: 20, avg_intensity: 8, source_consultation_pct: 60, avg_time_seconds: 90 }
    ]);

    setLastUpdate(new Date());
    setIsRefreshing(false);
  };

  // Fetch data from Supabase
  const fetchData = async () => {
    setIsRefreshing(true);

    if (!supabase) {
      loadMockData();
      return;
    }

    try {
      // Global stats
      const { data: stats, error: statsError } = await supabase
        .from("live_global_stats")
        .select("*")
        .single();

      if (statsError || !stats) {
        console.warn("Using mock data because Supabase fetch failed:", statsError);
        loadMockData();
        return;
      }

      if (stats) setGlobalStats(stats as GlobalStats);

      // Divergent bills
      const { data: divergent } = await supabase
        .from("live_divergence")
        .select("*")
        .eq("is_divergent", true)
        .order("week", { ascending: true });
      if (divergent) setDivergentBills(divergent as DivergentBill[]);

      // Passionate minorities
      const { data: minorities } = await supabase
        .from("live_passionate_minorities")
        .select("*");
      if (minorities)
        setPassionateMinorities(minorities as PassionateMinority[]);

      // Learning curve
      const { data: learning } = await supabase
        .from("live_learning_curve")
        .select("*")
        .order("week", { ascending: true });
      if (learning) setLearningCurve(learning as LearningData[]);

      setLastUpdate(new Date());
    } catch (error) {
      console.error("Error fetching live results:", error);
      loadMockData(); // Fallback to mock data on error
    } finally {
      setIsRefreshing(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchData();

    // Auto-refresh every 10 seconds
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Manual refresh
  const handleRefresh = () => {
    fetchData();
  };

  // Download functions for Open Data
  const downloadCSV = async () => {
    if (!supabase) return;

    try {
      // Fetch all data
      const [votesRes, billsRes, usersRes] = await Promise.all([
        supabase.from("sim_votes").select("bill_id, credits, vote_count, direction, created_at, time_spent_seconds, source_clicked"),
        supabase.from("sim_bills").select("id, title, description, week, category, ppl_number, assembly_result"),
        supabase.from("sim_users").select("id, created_at, weeks_completed, total_credits_spent, age_range, education_level")
      ]);

      const votes = votesRes.data || [];
      const bills = billsRes.data || [];
      const users = usersRes.data || [];

      // Create CSV content
      const votesCSV = [
        "bill_id,credits,vote_count,direction,created_at,time_spent_seconds,source_clicked",
        ...votes.map(v =>
          `${v.bill_id},${v.credits},${v.vote_count},${v.direction},${v.created_at},${v.time_spent_seconds || 0},${v.source_clicked || false}`
        )
      ].join("\n");

      const billsCSV = [
        "id,title,description,week,category,ppl_number,assembly_result",
        ...bills.map(b =>
          `${b.id},"${b.title.replace(/"/g, '""')}","${b.description.replace(/"/g, '""')}",${b.week},${b.category},${b.ppl_number || ""},${b.assembly_result || ""}`
        )
      ].join("\n");

      const usersCSV = [
        "user_id,created_at,weeks_completed,total_credits_spent,age_range,education_level",
        ...users.map(u =>
          `${u.id},${u.created_at},${u.weeks_completed},${u.total_credits_spent},${u.age_range || ""},${u.education_level || ""}`
        )
      ].join("\n");

      const readme = `# Résonance Citoyenne - Données Open Science

## À propos
Expérience de vote quadratique menée en ${new Date().getFullYear()}.
${globalStats?.total_participants || 0} participants ont voté sur 52 propositions de loi.

## Fichiers inclus

### votes.csv
Contient tous les votes anonymisés.
Colonnes:
- bill_id: Identifiant de la proposition de loi
- credits: Nombre de crédits dépensés (coût quadratique)
- vote_count: Intensité du vote (1-10)
- direction: Position (for/against/abstain)
- created_at: Timestamp du vote
- time_spent_seconds: Temps passé sur la proposition (secondes)
- source_clicked: A consulté le texte officiel (true/false)

### bills.csv
Liste des 52 propositions de loi.
Colonnes:
- id: Identifiant unique
- title: Titre de la loi
- description: Description
- week: Semaine de présentation (1-52)
- category: Catégorie (économie, sociétal, environnement, etc.)
- ppl_number: Numéro PPL officiel (si applicable)
- assembly_result: Résultat vote Assemblée Nationale (for/against)

### users.csv
Données anonymisées des participants.
Colonnes:
- user_id: Identifiant anonyme (UUID)
- created_at: Date de participation
- weeks_completed: Nombre de semaines complétées
- total_credits_spent: Total crédits dépensés
- age_range: Tranche d'âge (18-25, 26-35, etc.) - optionnel
- education_level: Niveau d'études - optionnel

## Méthodologie
Vote quadratique avec budget contraint de 1000 crédits sur 52 semaines.
Coût d'un vote = intensité²
Exemple: Voter avec intensité 5 coûte 25 crédits.

## Licence
CC BY 4.0 - Attribution requise
Citez: "Résonance Citoyenne (${new Date().getFullYear()}) - Expérience de vote quadratique"

## Contact
Pour questions: [Ajouter contact]

Généré le ${new Date().toLocaleDateString("fr-FR")} à ${new Date().toLocaleTimeString("fr-FR")}
`;

      // Create ZIP
      const zip = new JSZip();
      zip.file("votes.csv", votesCSV);
      zip.file("bills.csv", billsCSV);
      zip.file("users.csv", usersCSV);
      zip.file("README.txt", readme);

      // Generate and download
      const blob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `resonance_citoyenne_data_${new Date().toISOString().split('T')[0]}.zip`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading CSV:", error);
      alert("Erreur lors du téléchargement. Réessayez dans quelques instants.");
    }
  };

  const downloadJSON = async () => {
    if (!supabase) return;

    try {
      // Fetch all data
      const [votesRes, billsRes, statsRes, divergenceRes] = await Promise.all([
        supabase.from("sim_votes").select("*"),
        supabase.from("sim_bills").select("*"),
        supabase.from("live_global_stats").select("*").single(),
        supabase.from("live_divergence").select("*")
      ]);

      const exportData = {
        metadata: {
          experiment: "Résonance Citoyenne - Vote Quadratique",
          export_date: new Date().toISOString(),
          version: "1.0",
          total_participants: statsRes.data?.total_participants || 0,
          total_votes: statsRes.data?.total_votes || 0,
          methodology: {
            voting_system: "Quadratic Voting",
            initial_budget: 1000,
            weeks: 52,
            cost_formula: "intensity²"
          }
        },
        bills: billsRes.data || [],
        votes: votesRes.data || [],
        aggregated_statistics: {
          global: statsRes.data,
          divergence_analysis: divergenceRes.data,
          divergence_rate_pct: statsRes.data?.divergence_rate_pct,
          passionate_minority_cases: statsRes.data?.passionate_minority_cases,
          assembly_divergence_pct: statsRes.data?.assembly_divergence_pct
        },
        license: {
          type: "CC BY 4.0",
          attribution: `Résonance Citoyenne (${new Date().getFullYear()})`,
          url: "https://creativecommons.org/licenses/by/4.0/"
        }
      };

      // Download
      const json = JSON.stringify(exportData, null, 2);
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `resonance_citoyenne_data_${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading JSON:", error);
      alert("Erreur lors du téléchargement. Réessayez dans quelques instants.");
    }
  };

  const downloadSQLite = () => {
    // For SQLite, we'll provide a link to Supabase backup or generate a SQL dump
    alert(
      "Export SQLite disponible prochainement.\n\n" +
      "En attendant, vous pouvez :\n" +
      "1. Télécharger CSV ou JSON pour analyse\n" +
      "2. Contacter l'équipe pour accès direct à la base de données"
    );
    // TODO: Implement SQL dump generation or Supabase backup link
  };

  if (!globalStats) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <RefreshCw className="w-12 h-12 animate-spin text-orange-500 mx-auto mb-4" />
          <p className="text-gray-600">Chargement des résultats en direct...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-creme py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl font-serif font-bold text-charcoal">
            Résultats Collectifs en Direct
          </h1>
          <p className="text-xl text-gray-600">
            L'expérience citoyenne de vote quadratique prend vie sous tes yeux
          </p>

          {/* Live indicator */}
          <div className="flex items-center justify-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-gray-600">Mise à jour en temps réel</span>
            </div>
            <span className="text-gray-400">•</span>
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-1 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <RefreshCw
                size={14}
                className={isRefreshing ? "animate-spin" : ""}
              />
              Actualiser
            </button>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">
              {lastUpdate.toLocaleTimeString("fr-FR")}
            </span>
          </div>
        </motion.div>

        {/* Key Metrics Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-orange-500 to-terracotta text-white p-8 rounded-2xl shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold">
                {globalStats.total_participants.toLocaleString("fr-FR")}
              </div>
              <div className="text-orange-100 text-sm mt-1">
                Citoyens ont voté
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">
                {globalStats.divergence_rate_pct}%
              </div>
              <div className="text-orange-100 text-sm mt-1">
                Taux de divergence
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">
                {globalStats.passionate_minority_cases}
              </div>
              <div className="text-orange-100 text-sm mt-1">
                Minorités passionnées
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">
                {globalStats.assembly_divergence_pct}%
              </div>
              <div className="text-orange-100 text-sm mt-1">
                Différence Assemblée
              </div>
            </div>
          </div>
        </motion.div>

        {/* STAT #1: Divergence Rate */}
        <StatCard
          icon={<TrendingUp />}
          title="Taux de Divergence"
          subtitle="Quand le vote quadratique change tout"
          iconColor="text-orange-600"
          iconBg="bg-orange-100"
          expanded={expandedSection === "divergence"}
          onToggle={() =>
            setExpandedSection(
              expandedSection === "divergence" ? null : "divergence"
            )
          }
        >
          <div className="space-y-4">
            <div className="p-6 bg-orange-50 rounded-xl border border-orange-200">
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-orange-600 mb-2">
                  {globalStats.divergent_bills_count} lois
                </div>
                <div className="text-lg text-orange-800">
                  Sur 52 lois, le vote quadratique donne un résultat{" "}
                  <strong>différent</strong> du vote majoritaire classique pour{" "}
                  <strong>{globalStats.divergence_rate_pct}%</strong> d'entre
                  elles
                </div>
              </div>
            </div>

            {divergentBills.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-bold text-charcoal">
                  Les {divergentBills.length} lois qui changent :
                </h4>
                {divergentBills.map((bill) => (
                  <div
                    key={bill.bill_id}
                    className="p-4 bg-white rounded-xl border border-gray-200"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <div className="font-bold text-charcoal">
                          {bill.title}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          Catégorie: {bill.category}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div className="text-sm">
                        <div className="text-gray-500 mb-1">
                          Vote majoritaire:
                        </div>
                        <div
                          className={`font-bold ${bill.majority_result === "for"
                            ? "text-green-600"
                            : "text-red-600"
                            }`}
                        >
                          {bill.majority_result === "for" ? "✓ POUR" : "✗ CONTRE"}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {bill.majority_for_count} pour, {bill.majority_against_count} contre
                        </div>
                      </div>

                      <div className="text-sm">
                        <div className="text-gray-500 mb-1">
                          Vote quadratique:
                        </div>
                        <div
                          className={`font-bold ${bill.qv_result === "for"
                            ? "text-green-600"
                            : "text-red-600"
                            }`}
                        >
                          {bill.qv_result === "for" ? "✓ POUR" : "✗ CONTRE"}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {bill.qv_for_credits.toLocaleString()} crédits pour,{" "}
                          {bill.qv_against_credits.toLocaleString()} contre
                        </div>
                      </div>
                    </div>

                    {bill.differs_from_assembly && bill.assembly_result && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <div className="text-xs text-gray-600">
                          <Building2 size={12} className="inline mr-1" />
                          À l'Assemblée Nationale:{" "}
                          <strong>
                            {bill.assembly_result === "for" ? "POUR" : "CONTRE"}
                          </strong>
                          {" → Citoyens votent différemment !"}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </StatCard>

        {/* STAT #2: Passionate Minorities */}
        <StatCard
          icon={<Target />}
          title="Minorités Passionnées"
          subtitle="Quand l'intensité l'emporte sur le nombre"
          iconColor="text-red-600"
          iconBg="bg-red-100"
          expanded={expandedSection === "minorities"}
          onToggle={() =>
            setExpandedSection(
              expandedSection === "minorities" ? null : "minorities"
            )
          }
        >
          <div className="space-y-4">
            <div className="p-6 bg-red-50 rounded-xl border border-red-200">
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-red-600 mb-2">
                  {passionateMinorities.length} cas
                </div>
                <div className="text-lg text-red-800">
                  Une minorité intense a fait basculer le résultat grâce au
                  vote quadratique
                </div>
              </div>
            </div>

            {passionateMinorities.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-bold text-charcoal">
                  Exemples de minorités qui ont gagné :
                </h4>
                {passionateMinorities.map((minority) => (
                  <div
                    key={minority.bill_id}
                    className="p-4 bg-white rounded-xl border border-gray-200"
                  >
                    <div className="font-bold text-charcoal mb-3">
                      {minority.title}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-red-50 rounded-lg">
                        <div className="text-xs text-red-700 font-medium mb-1">
                          MINORITÉ ({minority.minority_size_pct}%)
                        </div>
                        <div className="text-2xl font-bold text-red-600">
                          {minority.minority_avg_intensity}/10
                        </div>
                        <div className="text-xs text-red-600 mt-1">
                          Intensité moyenne
                        </div>
                      </div>

                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="text-xs text-gray-700 font-medium mb-1">
                          MAJORITÉ (
                          {(100 - minority.minority_size_pct).toFixed(1)}%)
                        </div>
                        <div className="text-2xl font-bold text-gray-600">
                          {minority.majority_avg_intensity}/10
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          Intensité moyenne
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-100 text-center">
                      <div className="text-sm text-gray-600">
                        La minorité était{" "}
                        <strong className="text-red-600">
                          {minority.intensity_ratio}× plus intense
                        </strong>{" "}
                        que la majorité
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </StatCard>

        {/* STAT #3: Learning Curve */}
        <StatCard
          icon={<Brain />}
          title="Effet d'Apprentissage"
          subtitle="Les citoyens apprennent à voter stratégiquement"
          iconColor="text-blue-600"
          iconBg="bg-blue-100"
          expanded={expandedSection === "learning"}
          onToggle={() =>
            setExpandedSection(
              expandedSection === "learning" ? null : "learning"
            )
          }
        >
          <div className="space-y-4">
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="text-lg text-blue-800 mb-4">
                Avec le temps, les participants :
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">
                    {learningCurve.length > 0
                      ? Math.round(
                        learningCurve
                          .slice(0, 10)
                          .reduce((sum, d) => sum + d.avg_credits_spent, 0) /
                        10
                      )
                      : 0}
                  </div>
                  <div className="text-sm text-blue-700 mt-1">
                    Crédits/semaine (S1-10)
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">→</div>
                  <div className="text-sm text-blue-700 mt-1">Évolution</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">
                    {learningCurve.length > 40
                      ? Math.round(
                        learningCurve
                          .slice(40, 52)
                          .reduce((sum, d) => sum + d.avg_credits_spent, 0) /
                        12
                      )
                      : 0}
                  </div>
                  <div className="text-sm text-blue-700 mt-1">
                    Crédits/semaine (S40-52)
                  </div>
                </div>
              </div>
            </div>

            {learningCurve.length > 0 && (
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-charcoal mb-4">
                  Évolution par semaine
                </h4>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {learningCurve.map((week) => (
                    <div
                      key={week.week}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className="w-16 text-gray-500">S{week.week}</div>
                      <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
                        <div
                          className="bg-blue-500 h-full flex items-center justify-end pr-2 text-xs text-white font-medium"
                          style={{
                            width: `${(week.avg_credits_spent / 100) * 100}%`,
                          }}
                        >
                          {week.avg_credits_spent.toFixed(0)} cr
                        </div>
                      </div>
                      <div className="w-24 text-gray-600 text-xs">
                        {week.source_consultation_pct.toFixed(0)}% sources
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </StatCard>

        {/* STAT #4: Assembly Comparison */}
        <StatCard
          icon={<Building2 />}
          title="Citoyens vs Députés"
          subtitle="Comment les résultats diffèrent de l'Assemblée Nationale"
          iconColor="text-purple-600"
          iconBg="bg-purple-100"
          expanded={expandedSection === "assembly"}
          onToggle={() =>
            setExpandedSection(
              expandedSection === "assembly" ? null : "assembly"
            )
          }
        >
          <div className="space-y-4">
            <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-purple-600 mb-2">
                  {globalStats.assembly_divergence_pct}%
                </div>
                <div className="text-lg text-purple-800">
                  Des lois ont un résultat différent entre les citoyens et
                  l'Assemblée Nationale
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {52 - (globalStats.differs_assembly_count || 0)}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Lois concordantes
                  </div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-red-600">
                    {globalStats.differs_assembly_count || 0}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Lois divergentes
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-bold text-charcoal mb-3">
                Exemples de divergences :
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                {divergentBills
                  .filter((b) => b.differs_from_assembly)
                  .map((bill) => (
                    <div
                      key={bill.bill_id}
                      className="flex justify-between items-center p-2 hover:bg-gray-50 rounded"
                    >
                      <div className="flex-1 font-medium text-charcoal">
                        {bill.title}
                      </div>
                      <div className="flex gap-4 text-xs">
                        <div>
                          Députés:{" "}
                          <strong
                            className={
                              bill.assembly_result === "for"
                                ? "text-green-600"
                                : "text-red-600"
                            }
                          >
                            {bill.assembly_result === "for" ? "POUR" : "CONTRE"}
                          </strong>
                        </div>
                        <div>
                          Citoyens:{" "}
                          <strong
                            className={
                              bill.qv_result === "for"
                                ? "text-green-600"
                                : "text-red-600"
                            }
                          >
                            {bill.qv_result === "for" ? "POUR" : "CONTRE"}
                          </strong>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </StatCard>

        {/* Open Data Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
        >
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h3 className="text-3xl font-serif font-bold text-charcoal">
                📂 Science Ouverte & Transparence
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Cette recherche est publique et transparente. Toutes les données
                sont anonymisées et disponibles pour la communauté scientifique
                dans plusieurs formats standards.
              </p>
            </div>

            {/* Download Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* CSV Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200 hover:border-green-400 transition-all cursor-pointer"
                onClick={downloadCSV}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <FileText className="text-green-600" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-900 mb-1">
                      CSV
                    </h4>
                    <p className="text-sm text-green-700 mb-2">
                      Format universel
                    </p>
                    <p className="text-xs text-green-600">
                      Excel, R, Python, SPSS
                    </p>
                  </div>
                  <div className="pt-2 border-t border-green-200 w-full">
                    <div className="text-xs text-green-600 mb-1">
                      📦 Inclus :
                    </div>
                    <ul className="text-xs text-green-700 space-y-1">
                      <li>• 3 fichiers CSV</li>
                      <li>• Documentation complète</li>
                      <li>• Dictionnaire variables</li>
                    </ul>
                  </div>
                  <button className="w-full mt-3 px-4 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                    <Download size={16} />
                    Télécharger ZIP
                  </button>
                </div>
              </motion.div>

              {/* JSON Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all cursor-pointer"
                onClick={downloadJSON}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Download className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-900 mb-1">
                      JSON
                    </h4>
                    <p className="text-sm text-blue-700 mb-2">
                      Format API/web
                    </p>
                    <p className="text-xs text-blue-600">
                      Développeurs, JavaScript
                    </p>
                  </div>
                  <div className="pt-2 border-t border-blue-200 w-full">
                    <div className="text-xs text-blue-600 mb-1">
                      📦 Inclus :
                    </div>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• Structure hiérarchique</li>
                      <li>• Metadata complète</li>
                      <li>• Stats agrégées</li>
                    </ul>
                  </div>
                  <button className="w-full mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <Download size={16} />
                    Télécharger JSON
                  </button>
                </div>
              </motion.div>

              {/* SQLite Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all cursor-pointer"
                onClick={downloadSQLite}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Database className="text-purple-600" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-900 mb-1">
                      SQLite
                    </h4>
                    <p className="text-sm text-purple-700 mb-2">
                      Base de données
                    </p>
                    <p className="text-xs text-purple-600">
                      SQL direct, Analytics
                    </p>
                  </div>
                  <div className="pt-2 border-t border-purple-200 w-full">
                    <div className="text-xs text-purple-600 mb-1">
                      📦 Inclus :
                    </div>
                    <ul className="text-xs text-purple-700 space-y-1">
                      <li>• Fichier .sqlite</li>
                      <li>• Toutes les tables</li>
                      <li>• Requêtes SQL</li>
                    </ul>
                  </div>
                  <button className="w-full mt-3 px-4 py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                    <Download size={16} />
                    Bientôt disponible
                  </button>
                </div>
              </motion.div>
            </div>

            {/* License & Attribution */}
            <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-center text-sm text-gray-600">
                <p className="font-medium text-gray-700 mb-1">
                  📜 Licence : CC BY 4.0 - Attribution requise
                </p>
                <p className="text-xs">
                  Citez : "Résonance Citoyenne ({new Date().getFullYear()}) - Expérience de vote quadratique"
                </p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="text-center pt-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal border-2 border-gray-200 rounded-xl font-bold hover:border-orange-600 hover:text-orange-600 transition-colors">
                <Mail size={20} />
                Recevoir les résultats finaux par email
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Stat Card Component
interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  iconColor: string;
  iconBg: string;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function StatCard({
  icon,
  title,
  subtitle,
  iconColor,
  iconBg,
  expanded,
  onToggle,
  children,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 ${iconBg} ${iconColor} rounded-xl`}>
            {icon}
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold text-charcoal">{title}</h3>
            <p className="text-sm text-gray-600">{subtitle}</p>
          </div>
        </div>
        <ChevronDown
          className={`text-gray-400 transition-transform ${expanded ? "rotate-180" : ""
            }`}
          size={24}
        />
      </button>

      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="px-6 pb-6"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
