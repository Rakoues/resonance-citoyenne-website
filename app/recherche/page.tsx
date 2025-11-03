import React from 'react';
import { Microscope, Shield, Eye, BookOpen, Database, Github, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export const metadata = {
  title: 'Recherche | Résonance Citoyenne',
  description: 'Notre démarche scientifique : méthodologie rigoureuse, transparence totale, publications ouvertes. Découvre les fondements théoriques de nos expérimentations.',
};

export default function RecherchePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-orange/10 to-honey/5 py-3xl">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-sky/10 px-md py-xs rounded-full mb-lg">
                <Microscope className="text-sky" size={20} />
                <span className="text-body-sm font-semibold text-sky">
                  Démarche scientifique
                </span>
              </div>
              <h1 className="text-h1 font-display font-bold text-charcoal mb-md">
                Notre recherche
              </h1>
              <p className="text-body-lg text-gray-warm max-w-2xl mx-auto">
                Résonance Citoyenne applique une méthodologie scientifique rigoureuse
                pour tester des systèmes de décision collective. Pas de certitudes,
                juste des hypothèses à vérifier.
              </p>
            </div>
          </div>
        </section>

        {/* Scientific Pillars */}
        <section className="py-3xl bg-white">
          <div className="container max-w-5xl">
            <h2 className="text-h2 font-display font-bold text-charcoal text-center mb-2xl">
              Les 3 piliers de notre démarche
            </h2>

            <div className="grid md:grid-cols-3 gap-xl">
              {/* Rigor */}
              <div className="card border-l-4 border-sky text-center">
                <div className="w-20 h-20 rounded-full bg-sky/10 flex items-center justify-center mx-auto mb-lg">
                  <Microscope className="text-sky" size={40} />
                </div>
                <h3 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Rigueur scientifique
                </h3>
                <p className="text-body text-gray-warm">
                  Protocoles expérimentaux validés, hypothèses falsifiables,
                  analyse statistique rigoureuse, peer review.
                </p>
              </div>

              {/* Transparency */}
              <div className="card border-l-4 border-orange text-center">
                <div className="w-20 h-20 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-lg">
                  <Eye className="text-orange" size={40} />
                </div>
                <h3 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Transparence radicale
                </h3>
                <p className="text-body text-gray-warm">
                  Méthodologie publique, données ouvertes, code open-source,
                  publication des succès ET des échecs.
                </p>
              </div>

              {/* Ethics */}
              <div className="card border-l-4 border-forest text-center">
                <div className="w-20 h-20 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-lg">
                  <Shield className="text-forest" size={40} />
                </div>
                <h3 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Éthique & respect
                </h3>
                <p className="text-body text-gray-warm">
                  Anonymisation des données, consentement éclairé, protection
                  de la vie privée, pas de manipulation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-3xl bg-cream">
          <div className="container max-w-4xl">
            <h2 className="text-h2 font-display font-bold text-charcoal mb-xl">
              Notre méthodologie
            </h2>

            <div className="space-y-xl">
              {/* Step 1 */}
              <div className="card">
                <div className="flex items-start gap-lg">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange flex items-center justify-center">
                    <span className="text-h4 font-display font-bold text-white">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                      Revue de littérature
                    </h3>
                    <p className="text-body text-gray-warm">
                      Avant de lancer une expérimentation, nous étudions les travaux académiques
                      existants (vote quadratique, démocratie liquide, sortition). Nous identifions
                      les questions non résolues et les hypothèses à tester.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="card">
                <div className="flex items-start gap-lg">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest flex items-center justify-center">
                    <span className="text-h4 font-display font-bold text-white">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                      Design expérimental
                    </h3>
                    <p className="text-body text-gray-warm mb-md">
                      Nous définissons un protocole précis : variables mesurées, taille d'échantillon,
                      groupes de contrôle, méthodes d'analyse statistique. Le protocole est publié
                      avant le lancement de l'expérience.
                    </p>
                    <div className="bg-forest/10 border-l-4 border-forest p-md rounded-button">
                      <p className="text-body-sm text-charcoal">
                        <strong>Exemple :</strong> Pour le vote quadratique, nous comparerons
                        les résultats avec un vote classique (groupe contrôle) pour mesurer
                        l'impact réel de la méthode.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="card">
                <div className="flex items-start gap-lg">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky flex items-center justify-center">
                    <span className="text-h4 font-display font-bold text-white">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                      Collecte de données
                    </h3>
                    <p className="text-body text-gray-warm">
                      Les citoyens participent aux expérimentations via notre plateforme.
                      Toutes les données sont anonymisées à la source. Nous collectons uniquement
                      ce qui est nécessaire à l'analyse scientifique (votes, temps de décision,
                      feedback qualitatif).
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="card">
                <div className="flex items-start gap-lg">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-honey flex items-center justify-center">
                    <span className="text-h4 font-display font-bold text-white">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                      Analyse & publication
                    </h3>
                    <p className="text-body text-gray-warm">
                      Nous analysons les données avec des méthodes statistiques appropriées,
                      rédigeons un rapport de recherche, et publions les résultats (même si
                      l'expérimentation est un échec). Les données brutes anonymisées sont
                      mises à disposition en open data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Theoretical Foundations */}
        <section className="py-3xl bg-white">
          <div className="container max-w-5xl">
            <h2 className="text-h2 font-display font-bold text-charcoal mb-xl">
              Fondements théoriques
            </h2>

            <div className="space-y-lg">
              {/* Quadratic Voting */}
              <div className="card border-l-4 border-orange">
                <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                  Vote Quadratique
                </h3>
                <p className="text-body text-gray-warm mb-md">
                  Développé par E. Glen Weyl et Steven Lalley, le vote quadratique vise à résoudre
                  le problème de la "tyrannie de la majorité" en permettant aux minorités d'exprimer
                  l'intensité de leurs préférences. Le coût quadratique (n²) empêche les individus
                  de monopoliser le vote tout en leur permettant de crier fort sur ce qui compte vraiment.
                </p>
                <div className="flex flex-wrap gap-sm">
                  <a
                    href="https://www.radicalxchange.org/concepts/quadratic-voting/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange hover:underline text-body-sm font-semibold"
                  >
                    RadicalxChange →
                  </a>
                  <span className="text-gray-warm">·</span>
                  <a
                    href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2003531"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange hover:underline text-body-sm font-semibold"
                  >
                    Paper Weyl & Lalley →
                  </a>
                </div>
              </div>

              {/* Liquid Democracy */}
              <div className="card border-l-4 border-forest">
                <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                  Démocratie Liquide
                </h3>
                <p className="text-body text-gray-warm mb-md">
                  La démocratie liquide hybride entre démocratie directe et représentative.
                  Chaque citoyen peut voter directement sur les sujets qu'il maîtrise, ou déléguer
                  son vote à une personne de confiance. La délégation est révocable à tout moment
                  et peut être transitive (A délègue à B, qui délègue à C).
                </p>
                <div className="flex flex-wrap gap-sm">
                  <a
                    href="https://liquidfeedback.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest hover:underline text-body-sm font-semibold"
                  >
                    LiquidFeedback →
                  </a>
                  <span className="text-gray-warm">·</span>
                  <span className="text-body-sm text-gray-warm">
                    Utilisé par le Parti Pirate (Allemagne, Islande)
                  </span>
                </div>
              </div>

              {/* Sortition */}
              <div className="card border-l-4 border-sky">
                <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                  Tirage au Sort (Sortition)
                </h3>
                <p className="text-body text-gray-warm mb-md">
                  Le tirage au sort était la méthode principale de sélection des magistrats
                  dans la démocratie athénienne. Avantages : évite les biais de campagne électorale,
                  garantit la représentativité statistique, empêche la formation d'une classe politique
                  professionnelle. Utilisé récemment dans les Conventions Citoyennes.
                </p>
                <div className="flex flex-wrap gap-sm">
                  <span className="text-body-sm text-gray-warm">
                    Convention Citoyenne pour le Climat (France, 2020)
                  </span>
                  <span className="text-gray-warm">·</span>
                  <span className="text-body-sm text-gray-warm">
                    Citizens' Assembly (Irlande, 2016)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="py-3xl bg-cream">
          <div className="container max-w-4xl">
            <div className="text-center mb-xl">
              <h2 className="text-h2 font-display font-bold text-charcoal mb-md">
                Publications & Résultats
              </h2>
              <p className="text-body-lg text-gray-warm max-w-2xl mx-auto">
                Nos premières publications seront disponibles après le lancement
                des expérimentations. En attendant, voici où tu peux suivre notre travail.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-lg">
              {/* GitHub */}
              <div className="card hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-lg">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-charcoal flex items-center justify-center">
                    <Github className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                      Code Open-Source
                    </h3>
                    <p className="text-body-sm text-gray-warm mb-md">
                      Tout le code de nos expérimentations est disponible sur GitHub.
                      Tu peux le consulter, le forker, contribuer.
                    </p>
                    <a
                      href="https://github.com/Rakoues/resonance-citoyenne-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal hover:underline text-body-sm font-semibold"
                    >
                      Voir sur GitHub →
                    </a>
                  </div>
                </div>
              </div>

              {/* Open Data */}
              <div className="card hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-lg">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-sky/10 flex items-center justify-center">
                    <Database className="text-sky" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                      Données Ouvertes
                    </h3>
                    <p className="text-body-sm text-gray-warm mb-md">
                      Les données anonymisées de nos expérimentations seront publiées
                      en format CSV pour permettre des analyses indépendantes.
                    </p>
                    <span className="text-sky text-body-sm font-semibold">
                      Bientôt disponible
                    </span>
                  </div>
                </div>
              </div>

              {/* Research Papers */}
              <div className="card hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-lg">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center">
                    <BookOpen className="text-orange" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                      Publications Scientifiques
                    </h3>
                    <p className="text-body-sm text-gray-warm mb-md">
                      Nos résultats seront publiés sous forme de rapports de recherche
                      accessibles à tous (pas derrière un paywall).
                    </p>
                    <span className="text-orange text-body-sm font-semibold">
                      Premiers résultats en 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-3xl bg-white">
          <div className="container max-w-4xl">
            <div className="text-center mb-xl">
              <h2 className="text-h2 font-display font-bold text-charcoal mb-md">
                Qui sommes-nous ?
              </h2>
              <p className="text-body-lg text-gray-warm max-w-2xl mx-auto">
                Résonance Citoyenne est portée par une équipe de citoyens engagés,
                chercheurs en sciences sociales, développeurs, et passionnés de démocratie participative.
              </p>
            </div>

            <div className="card">
              <p className="text-body text-gray-warm text-center mb-lg">
                Nous sommes une association loi 1901, indépendante de tout parti politique.
                Notre seul objectif : faire avancer la recherche sur les systèmes de décision
                collective et contribuer au renouveau démocratique.
              </p>
              <div className="text-center">
                <Button variant="secondary" icon={ArrowRight} iconPosition="right">
                  <a href="/nous-connaitre">En savoir plus sur l'association</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-3xl bg-gradient-to-br from-orange via-terracotta to-honey text-white">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-h2 font-display font-bold mb-md text-shadow-strong">
              Contribue à la recherche
            </h2>
            <p className="text-body-lg mb-2xl opacity-90">
              Participe aux expérimentations, partage ton feedback, aide-nous à faire avancer
              la compréhension des systèmes démocratiques.
            </p>
            <Button
              variant="secondary"
              className="bg-white text-orange border-white hover:bg-cream"
            >
              <a href="/participer">Participer</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
