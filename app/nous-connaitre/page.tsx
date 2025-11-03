import React from 'react';
import Link from 'next/link';
import { Users, Lightbulb, HeartHandshake, Eye, Github } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export const metadata = {
  title: 'Nous connaître | Résonance Citoyenne',
  description: 'Qui sommes-nous, pourquoi cette association, et notre engagement pour la transparence démocratique.',
};

export default function NousConnaitrePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-orange/10 to-honey/5 py-2xl">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-h1 font-display font-bold text-charcoal mb-md">
                Nous connaître
              </h1>
              <p className="text-body-lg text-gray-warm">
                Une association de recherche citoyenne pour expérimenter de nouvelles formes de démocratie.
              </p>
            </div>
          </div>
        </section>

        {/* Qui sommes-nous */}
        <section className="py-3xl bg-white">
          <div className="container max-w-4xl">
            <div className="flex items-start gap-lg mb-xl">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center">
                <Users className="text-orange" size={32} />
              </div>
              <div>
                <h2 className="text-h2 font-display font-bold text-charcoal mb-md">
                  Qui sommes-nous
                </h2>
                <div className="space-y-md text-body text-gray-warm">
                  <p>
                    <strong className="text-charcoal">Résonance Citoyenne</strong> est une association loi 1901
                    fondée en 2025 par des citoyens convaincus qu&apos;une autre démocratie est possible.
                  </p>
                  <p>
                    Nous ne sommes ni un parti politique, ni un think tank classique. Nous sommes un{' '}
                    <strong className="text-charcoal">laboratoire citoyen</strong> qui teste concrètement
                    des systèmes de décision collective innovants.
                  </p>
                  <p>
                    Notre équipe rassemble des citoyens engagés, des chercheurs en sciences sociales,
                    des développeurs, et des experts en démocratie participative. Mais surtout, nous sommes
                    une communauté ouverte à tous ceux qui veulent contribuer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi cette association */}
        <section className="py-3xl bg-cream">
          <div className="container max-w-4xl">
            <div className="flex items-start gap-lg mb-xl">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center">
                <Lightbulb className="text-forest" size={32} />
              </div>
              <div>
                <h2 className="text-h2 font-display font-bold text-charcoal mb-md">
                  Pourquoi cette association
                </h2>
                <div className="space-y-md text-body text-gray-warm">
                  <p>
                    La démocratie représentative traverse une crise profonde. En France comme ailleurs,
                    les citoyens ne se sentent plus représentés, l&apos;abstention explose, et les institutions
                    du XXe siècle ne parviennent plus à gérer la complexité du XXIe.
                  </p>
                  <p className="text-charcoal font-semibold text-body-lg">
                    Mais au lieu de se lamenter, nous avons décidé d&apos;agir.
                  </p>
                  <p>
                    Plutôt que d&apos;affirmer que telle ou telle solution est LA réponse, nous adoptons une{' '}
                    <strong className="text-charcoal">démarche scientifique</strong> : formuler des hypothèses,
                    les tester rigoureusement, publier les résultats (même les échecs), et apprendre collectivement.
                  </p>
                  <p>
                    Le vote quadratique, la démocratie liquide, le tirage au sort... ces méthodes ont
                    des fondements théoriques solides. Mais fonctionnent-elles vraiment ? Sont-elles comprises
                    par les citoyens ? Améliorent-elles la qualité des décisions collectives ?
                  </p>
                  <p className="text-orange font-semibold">
                    Nous ne savons pas encore. Et c&apos;est précisément pour ça que nous expérimentons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notre approche */}
        <section className="py-3xl bg-white">
          <div className="container max-w-4xl">
            <div className="flex items-start gap-lg mb-xl">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-sky/10 flex items-center justify-center">
                <HeartHandshake className="text-sky" size={32} />
              </div>
              <div>
                <h2 className="text-h2 font-display font-bold text-charcoal mb-md">
                  Notre approche
                </h2>
                <div className="space-y-lg">
                  <div className="card border-l-4 border-orange">
                    <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                      1. Rigueur scientifique
                    </h3>
                    <p className="text-body text-gray-warm">
                      Protocoles de recherche validés par des universitaires, collecte de données
                      anonymisées, analyse statistique rigoureuse. Nous travaillons avec des institutions
                      académiques pour garantir la qualité de nos expériences.
                    </p>
                  </div>

                  <div className="card border-l-4 border-forest">
                    <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                      2. Participation citoyenne
                    </h3>
                    <p className="text-body text-gray-warm">
                      Les citoyens ne sont pas des sujets d'étude passifs, mais des co-chercheurs actifs.
                      Chaque participant peut donner son feedback, suggérer des améliorations, et contribuer
                      à l&apos;analyse des résultats.
                    </p>
                  </div>

                  <div className="card border-l-4 border-sky">
                    <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                      3. Transparence radicale
                    </h3>
                    <p className="text-body text-gray-warm">
                      Tout est public : notre méthodologie, nos données (anonymisées), notre code source,
                      nos résultats (même les échecs). La transparence est la condition de la confiance démocratique.
                    </p>
                  </div>

                  <div className="card border-l-4 border-honey">
                    <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                      4. Open source et réplicabilité
                    </h3>
                    <p className="text-body text-gray-warm">
                      Tout notre code est sur GitHub sous licence MIT. N&apos;importe qui peut reproduire nos
                      expériences, les adapter à son contexte, et contribuer aux améliorations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparence */}
        <section id="transparence" className="py-3xl bg-cream">
          <div className="container max-w-4xl">
            <div className="flex items-start gap-lg mb-xl">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center">
                <Eye className="text-orange" size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-h2 font-display font-bold text-charcoal mb-md">
                  Transparence totale
                </h2>
                <div className="space-y-md text-body text-gray-warm mb-xl">
                  <p>
                    Nous pratiquons ce que nous prêchons. Les décisions de l&apos;association sont prises
                    en vote quadratique par les membres. Le dashboard est public et actualisé en temps réel.
                  </p>
                  <p className="text-charcoal font-semibold">
                    Nous sommes notre propre cobaye.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-lg">
                  <div className="card">
                    <h3 className="text-h4 font-body font-bold text-charcoal mb-sm">
                      Financement
                    </h3>
                    <p className="text-body-sm text-gray-warm mb-md">
                      Cotisations des membres, dons défiscalisés, et subventions publiques
                      pour la recherche. Aucun financement privé.
                    </p>
                    <p className="text-caption text-gray-warm">
                      Budget 2025 : À venir
                    </p>
                  </div>

                  <div className="card">
                    <h3 className="text-h4 font-body font-bold text-charcoal mb-sm">
                      Gouvernance
                    </h3>
                    <p className="text-body-sm text-gray-warm mb-md">
                      Toutes les décisions stratégiques passent par un vote quadratique des membres.
                      Assemblée générale annuelle obligatoire.
                    </p>
                    <p className="text-caption text-gray-warm">
                      RNA : À venir
                    </p>
                  </div>
                </div>

                <div className="mt-xl">
                  <Link href="https://github.com/Rakoues/resonance-citoyenne-website" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" icon={Github} iconPosition="left">
                      Voir notre code sur GitHub
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-3xl bg-white">
          <div className="container max-w-3xl text-center">
            <h2 className="text-h2 font-display font-bold text-charcoal mb-md">
              Rejoins l&apos;aventure
            </h2>
            <p className="text-body-lg text-gray-warm mb-2xl">
              Que tu sois citoyen curieux, chercheur, développeur ou militant associatif,
              il y a une place pour toi dans Résonance Citoyenne.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center">
              <Link href="/experimentations">
                <Button variant="primary">
                  Participer à une expérience
                </Button>
              </Link>
              <Link href="/participer">
                <Button variant="secondary">
                  Adhérer à l&apos;association
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
