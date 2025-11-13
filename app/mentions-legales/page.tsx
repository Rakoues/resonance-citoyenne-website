import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Mentions Légales | Résonance Citoyenne',
  description: 'Mentions légales du site Résonance Citoyenne - Association loi 1901',
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        <section className="py-3xl bg-white">
          <div className="container max-w-4xl">
            <h1 className="text-h1 font-display font-bold text-charcoal mb-xl">
              Mentions Légales
            </h1>

            <div className="space-y-xl text-body text-gray-warm">
              {/* Éditeur */}
              <div>
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Éditeur du site
                </h2>
                <p className="mb-sm">
                  Le site <strong className="text-charcoal">resonance-citoyenne.fr</strong> est édité par :
                </p>
                <div className="pl-lg border-l-4 border-orange/20">
                  <p><strong className="text-charcoal">Association Résonance Citoyenne</strong></p>
                  <p>Association loi 1901</p>
                  <p>RNA : W751281338</p>
                  <p>Siège social : Paris (75)</p>
                  <p>Email : <a href="mailto:contact.resonancecitoyenne@gmail.com" className="text-orange hover:underline">contact.resonancecitoyenne@gmail.com</a></p>
                </div>
              </div>

              {/* Directeur de publication */}
              <div>
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Directeur de la publication
                </h2>
                <p>Jacques de Laitre, Président de l'association</p>
              </div>

              {/* Hébergement */}
              <div>
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Hébergement
                </h2>
                <p className="mb-sm">Le site est hébergé par :</p>
                <div className="pl-lg border-l-4 border-orange/20">
                  <p><strong className="text-charcoal">Vercel Inc.</strong></p>
                  <p>340 S Lemon Ave #4133</p>
                  <p>Walnut, CA 91789, États-Unis</p>
                  <p>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">vercel.com</a></p>
                </div>
              </div>

              {/* Propriété intellectuelle */}
              <div>
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Propriété intellectuelle
                </h2>
                <p className="mb-md">
                  L'ensemble du contenu de ce site (textes, images, vidéos, code source) est la propriété
                  de l'Association Résonance Citoyenne, sauf mention contraire.
                </p>
                <p className="mb-md">
                  Le code source du site est publié sous licence open-source sur{' '}
                  <a href="https://github.com/Rakoues/resonance-citoyenne-website" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                    GitHub
                  </a>.
                </p>
                <p>
                  Les contenus de ce site peuvent être réutilisés dans le respect de la licence applicable,
                  sous réserve de mentionner la source et l'auteur.
                </p>
              </div>

              {/* Données personnelles */}
              <div>
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Données personnelles
                </h2>
                <p>
                  Pour toute information concernant le traitement de vos données personnelles, veuillez consulter
                  notre{' '}
                  <a href="/politique-de-confidentialite" className="text-orange hover:underline">
                    politique de confidentialité
                  </a>.
                </p>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Cookies
                </h2>
                <p>
                  Ce site n'utilise pas de cookies publicitaires ou de tracking. Seuls des cookies techniques
                  essentiels au fonctionnement du site peuvent être utilisés (session, préférences).
                </p>
              </div>

              {/* Responsabilité */}
              <div>
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Responsabilité
                </h2>
                <p className="mb-md">
                  L'Association Résonance Citoyenne s'efforce d'assurer l'exactitude et la mise à jour
                  des informations diffusées sur ce site. Toutefois, elle ne peut garantir l'exactitude,
                  la précision ou l'exhaustivité des informations mises à disposition.
                </p>
                <p>
                  L'Association Résonance Citoyenne ne saurait être tenue responsable des dommages directs
                  ou indirects résultant de l'accès au site ou de l'utilisation de ce dernier.
                </p>
              </div>

              {/* Liens externes */}
              <div>
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Liens externes
                </h2>
                <p>
                  Ce site peut contenir des liens vers des sites externes. L'Association Résonance Citoyenne
                  n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>
              </div>

              {/* Droit applicable */}
              <div>
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Droit applicable
                </h2>
                <p>
                  Les présentes mentions légales sont soumises au droit français. En cas de litige,
                  et à défaut d'accord amiable, le litige sera porté devant les tribunaux français compétents.
                </p>
              </div>

              {/* Contact */}
              <div className="card bg-cream border-l-4 border-orange">
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Contact
                </h2>
                <p className="mb-sm">
                  Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
                </p>
                <p>
                  Email :{' '}
                  <a href="mailto:contact.resonancecitoyenne@gmail.com" className="text-orange hover:underline font-semibold">
                    contact.resonancecitoyenne@gmail.com
                  </a>
                </p>
                <p className="mt-md">
                  <a href="/contact" className="text-orange hover:underline font-semibold">
                    Formulaire de contact →
                  </a>
                </p>
              </div>

              <p className="text-body-sm text-gray-warm italic">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
