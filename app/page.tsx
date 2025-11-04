import React from 'react';
import Link from 'next/link';
import { Heart, Users, Target, ArrowRight, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange/10 via-honey/5 to-cream py-3xl md:py-4xl overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-orange/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-honey/5 rounded-full blur-3xl" />

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-hero md:text-h1 font-display font-bold text-charcoal mb-lg">
                La démocratie représentative traverse une crise.
              </h1>
              <p className="text-h3 md:text-h2 font-display font-semibold text-orange mb-xl">
                Et si on explorait ensemble de nouvelles façons de décider ?
              </p>
              <p className="text-body-lg text-gray-warm max-w-2xl mx-auto mb-2xl">
                Résonance Citoyenne est une association de recherche citoyenne.
                Nous expérimentons des méthodes participatives innovantes pour restaurer
                la confiance démocratique. Pas de certitudes, juste des hypothèses à tester ensemble.
              </p>

              <div className="flex flex-col sm:flex-row gap-md justify-center">
                <Link href="/participer">
                  <Button variant="primary" icon={Heart}>
                    Participer à l&apos;expérience
                  </Button>
                </Link>
                <Link href="/nous-connaitre">
                  <Button variant="secondary" icon={Users}>
                    Nous connaître
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Le Constat en bref */}
        <section className="py-3xl bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-2xl">
              <h2 className="text-h2 font-display font-bold text-charcoal mb-md">
                Le constat
              </h2>
              <p className="text-body-lg text-gray-warm">
                La crise démocratique n&apos;est plus une hypothèse, c&apos;est un fait observable.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-xl max-w-5xl mx-auto">
              {/* Stat 1 */}
              <div className="card text-center border-l-4 border-orange">
                <div className="text-hero font-display font-bold text-orange mb-md">5</div>
                <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                  Gouvernements en un an
                </h3>
                <p className="text-body-sm text-gray-warm">
                  Instabilité politique sans précédent depuis juin 2024
                </p>
              </div>

              {/* Stat 2 */}
              <div className="card text-center border-l-4 border-forest">
                <div className="text-hero font-display font-bold text-forest mb-md">71%</div>
                <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                  Abstention des jeunes
                </h3>
                <p className="text-body-sm text-gray-warm">
                  Les 18-24 ans ne se sentent plus représentés
                </p>
              </div>

              {/* Stat 3 */}
              <div className="card text-center border-l-4 border-sky">
                <div className="text-hero font-display font-bold text-sky mb-md">74%</div>
                <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                  Veulent une réforme
                </h3>
                <p className="text-body-sm text-gray-warm">
                  Des Français favorables à changer le mode de scrutin
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-2xl">
              <Link href="/le-constat" className="inline-block">
                <Button variant="ghost" icon={ArrowRight} iconPosition="right">
                  Comprendre la crise en profondeur
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Notre Approche */}
        <section className="py-3xl bg-cream">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-2xl">
              <h2 className="text-h2 font-display font-bold text-charcoal mb-md">
                Notre approche : l&apos;expérimentation scientifique
              </h2>
              <p className="text-body-lg text-gray-warm">
                Nous ne vendons pas une solution. Nous invitons à l&apos;expérimentation collective.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-xl">
              {/* Étape 1 */}
              <div className="flex gap-lg items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange flex items-center justify-center text-white font-display font-bold text-h4">
                  1
                </div>
                <div>
                  <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                    Nous testons différentes méthodes
                  </h3>
                  <p className="text-body text-gray-warm">
                    Vote quadratique, démocratie liquide, tirage au sort... Nous explorons
                    plusieurs systèmes de décision collective avec rigueur scientifique.
                  </p>
                </div>
              </div>

              {/* Étape 2 */}
              <div className="flex gap-lg items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest flex items-center justify-center text-white font-display font-bold text-h4">
                  2
                </div>
                <div>
                  <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                    Tu participes à la recherche
                  </h3>
                  <p className="text-body text-gray-warm">
                    Rejoins les expériences, teste les interfaces, partage ton ressenti.
                    Chaque participation aide à construire des données scientifiques solides.
                  </p>
                </div>
              </div>

              {/* Étape 3 */}
              <div className="flex gap-lg items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky flex items-center justify-center text-white font-display font-bold text-h4">
                  3
                </div>
                <div>
                  <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                    Nous publions tout (succès & échecs)
                  </h3>
                  <p className="text-body text-gray-warm">
                    Transparence radicale : données ouvertes, méthodologie publique,
                    code open-source. La science avance par l&apos;honnêteté.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-2xl">
              <Link href="/experimentations" className="inline-block">
                <Button variant="primary" icon={Target}>
                  Découvrir nos expérimentations
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-3xl bg-gradient-to-br from-orange via-terracotta to-honey text-white">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-h2 font-display font-bold mb-md text-shadow-strong">
              Une question ? Une idée ? Discutons ensemble
            </h2>
            <p className="text-body-lg mb-2xl opacity-90">
              Résonance Citoyenne est un projet collectif. Ta voix compte.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="inline-block">
                <Button
                  variant="secondary"
                  icon={Mail}
                  className="bg-white text-orange border-white hover:bg-cream"
                >
                  Nous contacter
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
