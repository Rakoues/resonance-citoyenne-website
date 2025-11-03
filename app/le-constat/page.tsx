import React from 'react';
import { AlertCircle, TrendingDown, Users2, Scale } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export const metadata = {
  title: 'Le constat | Résonance Citoyenne',
  description: 'La crise de la démocratie représentative en France : chiffres, analyse et pourquoi il est temps d\'expérimenter.',
};

export default function LeConstatPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-orange/10 to-honey/5 py-2xl">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-h1 font-display font-bold text-charcoal mb-md">
                Le constat
              </h1>
              <p className="text-body-lg text-gray-warm">
                La crise démocratique n&apos;est plus une hypothèse, c&apos;est un fait observable et quantifiable.
              </p>
            </div>
          </div>
        </section>

        {/* La crise politique française */}
        <section className="py-3xl bg-white">
          <div className="container max-w-4xl">
            <div className="flex items-start gap-lg mb-2xl">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-error/10 flex items-center justify-center">
                <AlertCircle className="text-error" size={32} />
              </div>
              <div>
                <h2 className="text-h2 font-display font-bold text-charcoal mb-md">
                  La crise politique française
                </h2>
                <p className="text-body-lg text-gray-warm mb-xl">
                  Depuis les élections législatives de juin-juillet 2024, la France connaît
                  une période d&apos;instabilité politique sans précédent.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-xl mb-2xl">
              <div className="card border-l-4 border-error">
                <div className="text-hero font-display font-bold text-error mb-md">5</div>
                <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                  Gouvernements en un an
                </h3>
                <ul className="space-y-sm text-body-sm text-gray-warm">
                  <li>• Gouvernement Barnier (sept-déc 2024) : censuré après 3 mois</li>
                  <li>• Gouvernement Bayrou (déc 2024-sept 2025) : renversé après 9 mois</li>
                  <li>• Gouvernement Lecornu (oct 2025) : démission après 14 heures, record historique</li>
                </ul>
              </div>

              <div className="card border-l-4 border-warning">
                <div className="text-hero font-display font-bold text-warning mb-md">3000</div>
                <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                  Milliards € de dette publique
                </h3>
                <p className="text-body-sm text-gray-warm">
                  Déficit de 170 milliards d&apos;euros en 2024. Impossibilité d&apos;adopter un budget
                  dans un contexte de paralysie institutionnelle.
                </p>
              </div>

              <div className="card border-l-4 border-sky">
                <div className="text-hero font-display font-bold text-sky mb-md">3</div>
                <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                  Blocs politiques inconciliables
                </h3>
                <ul className="space-y-sm text-body-sm text-gray-warm">
                  <li>• Nouveau Front Populaire : ~180 députés</li>
                  <li>• Ensemble pour la République : ~160 députés</li>
                  <li>• Rassemblement National : ~143 députés</li>
                  <li className="font-semibold text-charcoal">→ Aucun n&apos;atteint les 289 nécessaires</li>
                </ul>
              </div>

              <div className="card border-l-4 border-forest">
                <div className="text-hero font-display font-bold text-forest mb-md">49.3</div>
                <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                  Utilisation répétée de l&apos;article
                </h3>
                <p className="text-body-sm text-gray-warm">
                  Pour faire passer des textes sans vote. Symbole d&apos;un système à bout de souffle,
                  incapable de générer des majorités stables.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* La défiance citoyenne */}
        <section className="py-3xl bg-cream">
          <div className="container max-w-4xl">
            <div className="flex items-start gap-lg mb-2xl">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center">
                <TrendingDown className="text-orange" size={32} />
              </div>
              <div>
                <h2 className="text-h2 font-display font-bold text-charcoal mb-md">
                  La défiance citoyenne
                </h2>
                <p className="text-body-lg text-gray-warm mb-xl">
                  L&apos;abstention massive et le sentiment d&apos;impuissance révèlent une crise de confiance profonde.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-xl">
              <div className="card text-center border-l-4 border-orange">
                <div className="text-hero font-display font-bold text-orange mb-md">71%</div>
                <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                  Abstention des 18-24 ans
                </h3>
                <p className="text-body-sm text-gray-warm">
                  Aux élections législatives de 2022, les jeunes boudent massivement les urnes
                </p>
              </div>

              <div className="card text-center border-l-4 border-forest">
                <div className="text-hero font-display font-bold text-forest mb-md">74%</div>
                <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                  Veulent une réforme du scrutin
                </h3>
                <p className="text-body-sm text-gray-warm">
                  Des Français favorables à un changement du mode de scrutin (2024)
                </p>
              </div>

              <div className="card text-center border-l-4 border-sky">
                <div className="text-hero font-display font-bold text-sky mb-md">60%</div>
                <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                  Sentiment de ne pas être représentés
                </h3>
                <p className="text-body-sm text-gray-warm">
                  Des citoyens estiment que leur voix ne compte pas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Le problème structurel */}
        <section className="py-3xl bg-white">
          <div className="container max-w-4xl">
            <div className="flex items-start gap-lg mb-xl">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-charcoal/10 flex items-center justify-center">
                <Scale className="text-charcoal" size={32} />
              </div>
              <div>
                <h2 className="text-h2 font-display font-bold text-charcoal mb-md">
                  Un problème structurel, pas conjoncturel
                </h2>
                <div className="space-y-md text-body text-gray-warm">
                  <p>
                    La question centrale est : le problème réside-t-il dans les{' '}
                    <strong className="text-charcoal">idées opposées</strong> des différents courants politiques,
                    ou dans le <strong className="text-charcoal">système institutionnel</strong> lui-même ?
                  </p>
                  <p className="text-body-lg text-orange font-semibold">
                    Notre analyse : c&apos;est un problème hybride.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-lg mt-xl">
              <div className="card border-l-4 border-orange">
                <h3 className="text-h4 font-display font-semibold text-charcoal mb-md">
                  1. Logique majoritaire inadaptée
                </h3>
                <p className="text-body text-gray-warm mb-md">
                  La Ve République a été conçue pour produire des majorités stables. Le système électoral
                  majoritaire à deux tours favorise historiquement la bipolarisation.
                </p>
                <p className="text-body text-charcoal font-semibold">
                  Mais la recomposition politique actuelle (tripolarisation) rend ce modèle dysfonctionnel.
                </p>
              </div>

              <div className="card border-l-4 border-forest">
                <h3 className="text-h4 font-display font-semibold text-charcoal mb-md">
                  2. Culture du compromis absente
                </h3>
                <p className="text-body text-gray-warm">
                  Contrairement aux démocraties parlementaires comme l&apos;Allemagne ou les Pays-Bas,
                  les institutions françaises n&apos;ont pas développé de culture de coalition et de compromis.
                  Chaque bloc refuse de céder sur ses positions.
                </p>
              </div>

              <div className="card border-l-4 border-sky">
                <h3 className="text-h4 font-display font-semibold text-charcoal mb-md">
                  3. Divergences idéologiques réelles
                </h3>
                <p className="text-body text-gray-warm mb-md">
                  Il existe aussi des positions inconciliables sur des questions fondamentales :
                </p>
                <ul className="space-y-xs text-body-sm text-gray-warm">
                  <li>• Fiscalité : Taxer les grandes fortunes vs réduire les dépenses publiques</li>
                  <li>• Retraites : Maintien vs abrogation de la réforme</li>
                  <li>• Immigration : Positions diamétralement opposées</li>
                  <li>• Politique économique : Interventionnisme vs libéralisme</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi expérimenter */}
        <section className="py-3xl bg-cream">
          <div className="container max-w-4xl">
            <div className="flex items-start gap-lg">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-honey/20 flex items-center justify-center">
                <Users2 className="text-orange" size={32} />
              </div>
              <div>
                <h2 className="text-h2 font-display font-bold text-charcoal mb-md">
                  Pourquoi expérimenter de nouvelles formes de démocratie
                </h2>
                <div className="space-y-md text-body text-gray-warm">
                  <p className="text-body-lg text-charcoal font-semibold">
                    La question n&apos;est donc pas seulement de résoudre les désaccords politiques,
                    mais de repenser le système de décision collective lui-même.
                  </p>
                  <p>
                    Le système de représentation par députés ne fonctionne plus dans un contexte
                    de fragmentation politique. Les institutions du XXe siècle ne sont pas adaptées
                    à la complexité du XXIe.
                  </p>
                  <p className="text-orange font-semibold text-body-lg">
                    La représentation a échoué. Il est temps de restaurer l&apos;autonomie citoyenne.
                  </p>
                  <p>
                    Au lieu d&apos;attendre qu&apos;un énième gouvernement tombe ou qu&apos;une réforme impossible
                    soit votée, explorons ensemble des alternatives : vote quadratique, démocratie liquide,
                    tirage au sort, budgets participatifs...
                  </p>
                  <p className="text-charcoal font-semibold">
                    Les institutions ne sont pas éternelles. Elles peuvent et doivent évoluer.
                  </p>
                </div>

                <div className="mt-xl">
                  <Button variant="primary">
                    Découvrir nos expérimentations
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
