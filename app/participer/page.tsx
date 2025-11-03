import React from 'react';
import { Beaker, Users, Heart, Bell, Share2, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata = {
  title: 'Participer | Résonance Citoyenne',
  description: 'Rejoins l\'aventure citoyenne ! Participe aux expérimentations, adhère à l\'association, ou suis nos actualités.',
};

export default function ParticiperPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-orange/10 via-honey/5 to-cream py-3xl">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-h1 font-display font-bold text-charcoal mb-md">
                Rejoins l'aventure citoyenne
              </h1>
              <p className="text-body-lg text-gray-warm mb-xl">
                Résonance Citoyenne est un projet collectif. Plusieurs façons de contribuer,
                toutes aussi importantes les unes que les autres.
              </p>
            </div>
          </div>
        </section>

        {/* Ways to Participate */}
        <section className="py-3xl bg-white">
          <div className="container max-w-5xl">
            <h2 className="text-h2 font-display font-bold text-charcoal text-center mb-2xl">
              Comment participer ?
            </h2>

            <div className="grid md:grid-cols-2 gap-xl">
              {/* Participate in experiments */}
              <div className="card border-l-4 border-orange hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-lg">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center">
                    <Beaker className="text-orange" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                      Tester les expérimentations
                    </h3>
                    <p className="text-body text-gray-warm mb-md">
                      Participe aux votes quadratiques, essaie la démocratie liquide,
                      teste de nouvelles formes de décision collective. Ton retour
                      d'expérience est précieux pour la recherche.
                    </p>
                    <Button variant="ghost" icon={ArrowRight} iconPosition="right">
                      <a href="/experimentations">Voir les expérimentations</a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Join the association */}
              <div className="card border-l-4 border-forest hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-lg">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center">
                    <Users className="text-forest" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                      Adhérer à l'association
                    </h3>
                    <p className="text-body text-gray-warm mb-md">
                      Deviens membre actif de Résonance Citoyenne. Participe aux décisions
                      de l'association, propose de nouvelles expérimentations, contribue
                      à faire avancer la démocratie participative.
                    </p>
                    <Button variant="ghost" icon={ArrowRight} iconPosition="right">
                      <a href="/nous-connaitre">En savoir plus</a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contribute to research */}
              <div className="card border-l-4 border-sky hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-lg">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-sky/10 flex items-center justify-center">
                    <Heart className="text-sky" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                      Contribuer à la recherche
                    </h3>
                    <p className="text-body text-gray-warm mb-md">
                      Partage tes idées, donne ton feedback sur les expériences,
                      propose des améliorations. Chaque retour aide à affiner
                      notre compréhension des systèmes démocratiques.
                    </p>
                    <Button variant="ghost" icon={ArrowRight} iconPosition="right">
                      <a href="/recherche">Notre méthodologie</a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Follow updates */}
              <div className="card border-l-4 border-honey hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-lg">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-honey/10 flex items-center justify-center">
                    <Bell className="text-honey" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h3 font-display font-semibold text-charcoal mb-sm">
                      Suivre nos actualités
                    </h3>
                    <p className="text-body text-gray-warm mb-md">
                      Inscris-toi à notre newsletter pour recevoir les résultats
                      des expérimentations, les invitations aux nouveaux tests,
                      et nos réflexions sur la démocratie participative.
                    </p>
                    <a href="#newsletter" className="text-honey hover:underline font-semibold">
                      S'inscrire à la newsletter ↓
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Share Section */}
        <section className="py-3xl bg-cream">
          <div className="container max-w-4xl">
            <div className="card border-l-4 border-terracotta text-center">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-terracotta/10 flex items-center justify-center mb-lg">
                  <Share2 className="text-terracotta" size={40} />
                </div>
                <h3 className="text-h2 font-display font-semibold text-charcoal mb-md">
                  Faire connaître le projet
                </h3>
                <p className="text-body-lg text-gray-warm max-w-2xl mb-xl">
                  Plus nous serons nombreux à expérimenter, plus les résultats
                  seront significatifs. Parle de Résonance Citoyenne à tes ami·e·s,
                  sur les réseaux sociaux, dans tes cercles citoyens.
                </p>
                <div className="flex flex-wrap gap-md justify-center">
                  <Button variant="secondary">
                    Partager sur Twitter
                  </Button>
                  <Button variant="secondary">
                    Partager sur Facebook
                  </Button>
                  <Button variant="ghost">
                    Copier le lien
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-3xl bg-white">
          <div className="container max-w-2xl">
            <div className="text-center mb-xl">
              <h2 className="text-h2 font-display font-bold text-charcoal mb-md">
                Reste informé·e
              </h2>
              <p className="text-body-lg text-gray-warm">
                Inscris-toi à notre newsletter pour recevoir nos actualités,
                les invitations aux expérimentations, et les résultats de nos recherches.
              </p>
            </div>

            <NewsletterForm />

            <p className="text-body-sm text-gray-warm text-center mt-lg">
              Pas de spam, promis. Tu peux te désinscrire à tout moment.
              Consulte notre{' '}
              <a href="/politique-de-confidentialite" className="text-orange hover:underline">
                politique de confidentialité
              </a>
              .
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-3xl bg-gradient-to-br from-orange via-terracotta to-honey text-white">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-h2 font-display font-bold mb-md text-shadow-strong">
              Tu as d'autres idées pour participer ?
            </h2>
            <p className="text-body-lg mb-2xl opacity-90">
              Nous sommes ouverts à toutes les propositions. Contacte-nous !
            </p>
            <Button
              variant="secondary"
              className="bg-white text-orange border-white hover:bg-cream"
            >
              <a href="/contact">Nous contacter</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
