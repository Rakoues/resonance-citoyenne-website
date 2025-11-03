import React from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact | Résonance Citoyenne',
  description: 'Une question ? Une idée ? Contacte l\'équipe de Résonance Citoyenne. On te répond sous 48h.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-orange/10 to-honey/5 py-2xl">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-h1 font-display font-bold text-charcoal mb-md">
                Une question ? Une idée ?
              </h1>
              <p className="text-body-lg text-gray-warm">
                Résonance Citoyenne est un projet collectif. Ta voix compte.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-3xl bg-white">
          <div className="container max-w-2xl">
            {/* Icons Row */}
            <div className="flex justify-center gap-xl mb-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mb-sm">
                  <MessageCircle className="text-orange" size={32} />
                </div>
                <p className="text-body-sm text-gray-warm">Discussion</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mb-sm">
                  <Mail className="text-forest" size={32} />
                </div>
                <p className="text-body-sm text-gray-warm">Réponse rapide</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-honey/10 flex items-center justify-center mb-sm">
                  <Send className="text-honey" size={32} />
                </div>
                <p className="text-body-sm text-gray-warm">En 48h</p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />

            {/* Footer Note */}
            <div className="mt-xl text-center">
              <p className="text-body text-gray-warm">
                Ou écris-nous directement à{' '}
                <a
                  href="mailto:contact@resonance-citoyenne.fr"
                  className="text-orange hover:underline font-semibold"
                >
                  contact@resonance-citoyenne.fr
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Alternative Contact Methods */}
        <section className="py-3xl bg-cream">
          <div className="container max-w-4xl">
            <h2 className="text-h3 font-display font-bold text-charcoal text-center mb-xl">
              Autres moyens de nous rejoindre
            </h2>

            <div className="grid md:grid-cols-3 gap-lg">
              {/* Newsletter */}
              <div className="card text-center">
                <div className="w-12 h-12 rounded-full bg-sky/10 flex items-center justify-center mx-auto mb-md">
                  <Mail className="text-sky" size={24} />
                </div>
                <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                  Newsletter
                </h3>
                <p className="text-body-sm text-gray-warm mb-md">
                  Reçois nos actualités et participe aux expérimentations
                </p>
                <a
                  href="/participer#newsletter"
                  className="text-sky hover:underline font-semibold text-body-sm"
                >
                  S'inscrire →
                </a>
              </div>

              {/* Social Media */}
              <div className="card text-center">
                <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-md">
                  <MessageCircle className="text-orange" size={24} />
                </div>
                <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                  Réseaux sociaux
                </h3>
                <p className="text-body-sm text-gray-warm mb-md">
                  Suis-nous et participe aux discussions
                </p>
                <div className="flex gap-sm justify-center">
                  <a
                    href="#"
                    className="text-sky hover:underline font-semibold text-body-sm"
                  >
                    Twitter
                  </a>
                  <span className="text-gray-warm">·</span>
                  <a
                    href="#"
                    className="text-sky hover:underline font-semibold text-body-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Community */}
              <div className="card text-center">
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-md">
                  <MessageCircle className="text-forest" size={24} />
                </div>
                <h3 className="text-h4 font-display font-semibold text-charcoal mb-sm">
                  Rejoindre
                </h3>
                <p className="text-body-sm text-gray-warm mb-md">
                  Deviens membre actif de l'association
                </p>
                <a
                  href="/participer"
                  className="text-forest hover:underline font-semibold text-body-sm"
                >
                  En savoir plus →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
