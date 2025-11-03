import React from 'react';
import { Vote, Users2, Shuffle, Calculator, ArrowRight, Beaker } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export const metadata = {
  title: 'Expérimentations | Résonance Citoyenne',
  description: 'Nos expérimentations démocratiques : vote quadratique, démocratie liquide, tirage au sort. Teste de nouvelles formes de décision collective.',
};

export default function ExperimentationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-orange/10 to-honey/5 py-3xl">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-orange/10 px-md py-xs rounded-full mb-lg">
                <Beaker className="text-orange" size={20} />
                <span className="text-body-sm font-semibold text-orange">
                  Laboratoire citoyen
                </span>
              </div>
              <h1 className="text-h1 font-display font-bold text-charcoal mb-md">
                Nos expérimentations démocratiques
              </h1>
              <p className="text-body-lg text-gray-warm max-w-2xl mx-auto">
                Nous testons différentes méthodes de décision collective avec rigueur scientifique.
                Pas de dogme, juste des hypothèses à vérifier par l'expérience.
              </p>
            </div>
          </div>
        </section>

        {/* Scientific Approach */}
        <section className="py-3xl bg-white">
          <div className="container max-w-4xl">
            <div className="text-center mb-2xl">
              <h2 className="text-h2 font-display font-bold text-charcoal mb-md">
                Notre démarche
              </h2>
              <p className="text-body-lg text-gray-warm max-w-2xl mx-auto">
                Chaque expérimentation suit un protocole rigoureux pour produire
                des résultats scientifiquement valides.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-lg">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-md">
                  <span className="text-h3 font-display font-bold text-orange">1</span>
                </div>
                <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                  Hypothèse
                </h3>
                <p className="text-body-sm text-gray-warm">
                  Formuler une question précise basée sur la recherche académique
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-md">
                  <span className="text-h3 font-display font-bold text-forest">2</span>
                </div>
                <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                  Test
                </h3>
                <p className="text-body-sm text-gray-warm">
                  Créer une interface, inviter des citoyens, collecter des données
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sky/10 flex items-center justify-center mx-auto mb-md">
                  <span className="text-h3 font-display font-bold text-sky">3</span>
                </div>
                <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                  Publier
                </h3>
                <p className="text-body-sm text-gray-warm">
                  Partager résultats, méthodologie et code (succès ET échecs)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Experiment: Quadratic Voting */}
        <section className="py-3xl bg-cream">
          <div className="container max-w-5xl">
            <div className="card border-l-4 border-orange p-2xl">
              <div className="grid md:grid-cols-2 gap-2xl items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-orange/10 px-md py-xs rounded-full mb-md">
                    <Calculator className="text-orange" size={16} />
                    <span className="text-body-sm font-semibold text-orange">
                      En développement
                    </span>
                  </div>
                  <h2 className="text-h2 font-display font-bold text-charcoal mb-md">
                    Vote Quadratique
                  </h2>
                  <p className="text-body text-gray-warm mb-lg">
                    Le vote quadratique permet d'exprimer l'<strong>intensité</strong> de tes préférences,
                    pas juste "oui" ou "non". Tu reçois 100 crédits à distribuer sur plusieurs propositions.
                    Le coût ? n² crédits (1 vote = 1 crédit, 2 votes = 4 crédits, 3 votes = 9 crédits...).
                  </p>
                  <div className="bg-honey/10 border-l-4 border-honey p-md rounded-button mb-lg">
                    <p className="text-body-sm text-charcoal">
                      <strong>Pourquoi ?</strong> Le vote classique traite toutes les préférences également.
                      Avec le vote quadratique, tu peux crier fort sur ce qui compte vraiment pour toi,
                      tout en gardant une voix sur le reste.
                    </p>
                  </div>
                  <Button variant="primary" icon={ArrowRight} iconPosition="right">
                    Bientôt disponible
                  </Button>
                </div>

                <div className="bg-white p-xl rounded-card shadow-soft">
                  <h3 className="text-h4 font-display font-semibold text-charcoal mb-md">
                    Exemple : Crèche vs Skatepark
                  </h3>
                  <div className="space-y-md">
                    <div>
                      <div className="flex justify-between text-body-sm mb-xs">
                        <span className="text-charcoal">🏫 Crèche municipale</span>
                        <span className="text-orange font-semibold">5 votes (25 crédits)</span>
                      </div>
                      <div className="h-2 bg-gray-light rounded-full overflow-hidden">
                        <div className="h-full bg-orange w-[50%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-body-sm mb-xs">
                        <span className="text-charcoal">🛹 Skatepark</span>
                        <span className="text-forest font-semibold">3 votes (9 crédits)</span>
                      </div>
                      <div className="h-2 bg-gray-light rounded-full overflow-hidden">
                        <div className="h-full bg-forest w-[30%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-body-sm mb-xs">
                        <span className="text-charcoal">🌳 Parc urbain</span>
                        <span className="text-sky font-semibold">2 votes (4 crédits)</span>
                      </div>
                      <div className="h-2 bg-gray-light rounded-full overflow-hidden">
                        <div className="h-full bg-sky w-[20%]"></div>
                      </div>
                    </div>

                    <div className="pt-md border-t border-gray-light">
                      <div className="flex justify-between text-body font-semibold">
                        <span className="text-charcoal">Crédits utilisés</span>
                        <span className="text-orange">38 / 100</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Experiments */}
        <section className="py-3xl bg-white">
          <div className="container max-w-5xl">
            <h2 className="text-h2 font-display font-bold text-charcoal text-center mb-2xl">
              Prochaines expérimentations
            </h2>

            <div className="grid md:grid-cols-2 gap-xl">
              {/* Liquid Democracy */}
              <div className="card border-l-4 border-forest">
                <div className="flex items-start gap-lg">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center">
                    <Users2 className="text-forest" size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 bg-forest/10 px-sm py-xxs rounded-full mb-sm">
                      <span className="text-body-sm font-semibold text-forest">
                        À venir en 2026
                      </span>
                    </div>
                    <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                      Démocratie Liquide
                    </h3>
                    <p className="text-body text-gray-warm mb-md">
                      Mélange entre démocratie directe et représentative. Tu votes directement
                      sur les sujets que tu maîtrises, et tu délègues ton vote à des expert·e·s
                      pour les autres. Ta délégation est révocable à tout moment.
                    </p>
                    <p className="text-body-sm text-charcoal font-semibold">
                      Inspiré par : LiquidFeedback, Parti Pirate allemand
                    </p>
                  </div>
                </div>
              </div>

              {/* Sortition */}
              <div className="card border-l-4 border-sky">
                <div className="flex items-start gap-lg">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-sky/10 flex items-center justify-center">
                    <Shuffle className="text-sky" size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 bg-sky/10 px-sm py-xxs rounded-full mb-sm">
                      <span className="text-body-sm font-semibold text-sky">
                        À venir
                      </span>
                    </div>
                    <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                      Tirage au Sort Citoyen
                    </h3>
                    <p className="text-body text-gray-warm mb-md">
                      Le tirage au sort était utilisé dans la démocratie athénienne. L'idée :
                      sélectionner aléatoirement des citoyens pour former une assemblée délibérative.
                      Évite les biais de campagne électorale et garantit la représentativité statistique.
                    </p>
                    <p className="text-body-sm text-charcoal font-semibold">
                      Inspiré par : Convention Citoyenne pour le Climat (France, 2020)
                    </p>
                  </div>
                </div>
              </div>

              {/* Participatory Budgeting */}
              <div className="card border-l-4 border-honey">
                <div className="flex items-start gap-lg">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-honey/10 flex items-center justify-center">
                    <Vote className="text-honey" size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 bg-honey/10 px-sm py-xxs rounded-full mb-sm">
                      <span className="text-body-sm font-semibold text-honey">
                        En réflexion
                      </span>
                    </div>
                    <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                      Budget Participatif
                    </h3>
                    <p className="text-body text-gray-warm mb-md">
                      Les citoyens décident directement de l'allocation d'une partie du budget public.
                      Nous voulons tester différentes méthodes de vote (classique vs quadratique)
                      pour voir laquelle produit les décisions les plus satisfaisantes.
                    </p>
                    <p className="text-body-sm text-charcoal font-semibold">
                      Inspiré par : Porto Alegre (Brésil), Paris (Budget participatif)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="py-3xl bg-cream">
          <div className="container max-w-4xl">
            <div className="text-center mb-xl">
              <h2 className="text-h2 font-display font-bold text-charcoal mb-md">
                Transparence radicale
              </h2>
              <p className="text-body-lg text-gray-warm max-w-2xl mx-auto mb-2xl">
                Toutes nos expérimentations sont open-source. Le code, les données,
                la méthodologie, et les résultats (succès ET échecs) sont publics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-lg">
              <div className="card">
                <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                  📊 Données ouvertes
                </h3>
                <p className="text-body text-gray-warm">
                  Toutes les données collectées (anonymisées) seront publiées en format CSV
                  pour que d'autres chercheurs puissent les analyser.
                </p>
              </div>

              <div className="card">
                <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                  💻 Code open-source
                </h3>
                <p className="text-body text-gray-warm">
                  Le code source de chaque expérimentation est disponible sur GitHub
                  sous licence libre. Tu peux le copier, le modifier, l'améliorer.
                </p>
              </div>

              <div className="card">
                <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                  📝 Méthodologie publique
                </h3>
                <p className="text-body text-gray-warm">
                  Le protocole scientifique de chaque expérimentation est publié avant
                  le lancement, pour garantir la rigueur et permettre la réplication.
                </p>
              </div>

              <div className="card">
                <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                  ❌ Échecs documentés
                </h3>
                <p className="text-body text-gray-warm">
                  Si une expérimentation ne fonctionne pas, on le dit. La science
                  avance autant par les échecs que par les succès.
                </p>
              </div>
            </div>

            <div className="text-center mt-xl">
              <Button variant="secondary" icon={ArrowRight} iconPosition="right">
                <a href="/recherche">Voir notre méthodologie</a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-3xl bg-gradient-to-br from-orange via-terracotta to-honey text-white">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-h2 font-display font-bold mb-md text-shadow-strong">
              Prêt·e à expérimenter ?
            </h2>
            <p className="text-body-lg mb-2xl opacity-90">
              Inscris-toi pour être prévenu·e dès qu'une nouvelle expérimentation est lancée.
            </p>
            <Button
              variant="secondary"
              className="bg-white text-orange border-white hover:bg-cream"
            >
              <a href="/participer">Participer aux expérimentations</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
