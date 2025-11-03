import React from 'react';
import { Shield, Eye, Lock, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Politique de Confidentialité | Résonance Citoyenne',
  description: 'Politique de confidentialité et protection des données personnelles - RGPD',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        <section className="py-3xl bg-white">
          <div className="container max-w-4xl">
            <div className="mb-xl">
              <div className="inline-flex items-center gap-2 bg-forest/10 px-md py-xs rounded-full mb-lg">
                <Shield className="text-forest" size={20} />
                <span className="text-body-sm font-semibold text-forest">
                  RGPD - Protection des données
                </span>
              </div>
              <h1 className="text-h1 font-display font-bold text-charcoal mb-md">
                Politique de Confidentialité
              </h1>
              <p className="text-body-lg text-gray-warm">
                Résonance Citoyenne s'engage à protéger ta vie privée et tes données personnelles
                conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
            </div>

            {/* Principles */}
            <div className="grid md:grid-cols-3 gap-lg mb-2xl">
              <div className="card border-l-4 border-forest text-center">
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-sm">
                  <Eye className="text-forest" size={24} />
                </div>
                <h3 className="text-h5 font-display font-semibold text-charcoal mb-xs">
                  Transparence
                </h3>
                <p className="text-body-sm text-gray-warm">
                  On te dit exactement ce qu'on collecte et pourquoi
                </p>
              </div>

              <div className="card border-l-4 border-orange text-center">
                <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-sm">
                  <Lock className="text-orange" size={24} />
                </div>
                <h3 className="text-h5 font-display font-semibold text-charcoal mb-xs">
                  Sécurité
                </h3>
                <p className="text-body-sm text-gray-warm">
                  Tes données sont protégées et anonymisées
                </p>
              </div>

              <div className="card border-l-4 border-sky text-center">
                <div className="w-12 h-12 rounded-full bg-sky/10 flex items-center justify-center mx-auto mb-sm">
                  <Mail className="text-sky" size={24} />
                </div>
                <h3 className="text-h5 font-display font-semibold text-charcoal mb-xs">
                  Respect
                </h3>
                <p className="text-body-sm text-gray-warm">
                  Tu contrôles tes données à tout moment
                </p>
              </div>
            </div>

            <div className="space-y-xl text-body text-gray-warm">
              {/* Responsable du traitement */}
              <div>
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Responsable du traitement
                </h2>
                <p className="mb-sm">
                  Le responsable du traitement de tes données personnelles est :
                </p>
                <div className="pl-lg border-l-4 border-orange/20">
                  <p><strong className="text-charcoal">Association Résonance Citoyenne</strong></p>
                  <p>Association loi 1901</p>
                  <p>Email : <a href="mailto:contact@resonance-citoyenne.fr" className="text-orange hover:underline">contact@resonance-citoyenne.fr</a></p>
                </div>
              </div>

              {/* Données collectées */}
              <div>
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Quelles données sont collectées ?
                </h2>

                <div className="space-y-md">
                  <div className="card bg-cream">
                    <h3 className="text-h5 font-display font-semibold text-charcoal mb-sm">
                      📧 Formulaire de contact
                    </h3>
                    <p className="mb-xs"><strong className="text-charcoal">Données collectées :</strong> Prénom, adresse email, sujet, message</p>
                    <p className="mb-xs"><strong className="text-charcoal">Finalité :</strong> Répondre à ta demande</p>
                    <p className="mb-xs"><strong className="text-charcoal">Base légale :</strong> Consentement</p>
                    <p><strong className="text-charcoal">Durée de conservation :</strong> 3 ans après le dernier contact</p>
                  </div>

                  <div className="card bg-cream">
                    <h3 className="text-h5 font-display font-semibold text-charcoal mb-sm">
                      📨 Newsletter
                    </h3>
                    <p className="mb-xs"><strong className="text-charcoal">Données collectées :</strong> Adresse email</p>
                    <p className="mb-xs"><strong className="text-charcoal">Finalité :</strong> T'envoyer nos actualités et invitations aux expérimentations</p>
                    <p className="mb-xs"><strong className="text-charcoal">Base légale :</strong> Consentement</p>
                    <p><strong className="text-charcoal">Durée de conservation :</strong> Jusqu'à ta désinscription</p>
                  </div>

                  <div className="card bg-cream">
                    <h3 className="text-h5 font-display font-semibold text-charcoal mb-sm">
                      🗳️ Expérimentations (votes)
                    </h3>
                    <p className="mb-xs"><strong className="text-charcoal">Données collectées :</strong> Votes, temps de décision, feedback (toutes anonymisées)</p>
                    <p className="mb-xs"><strong className="text-charcoal">Finalité :</strong> Recherche scientifique sur les systèmes de décision collective</p>
                    <p className="mb-xs"><strong className="text-charcoal">Base légale :</strong> Consentement éclairé</p>
                    <p><strong className="text-charcoal">Durée de conservation :</strong> Anonymisées définitivement, conservées indéfiniment à des fins scientifiques</p>
                  </div>

                  <div className="card bg-cream">
                    <h3 className="text-h5 font-display font-semibold text-charcoal mb-sm">
                      🔧 Données techniques
                    </h3>
                    <p className="mb-xs"><strong className="text-charcoal">Données collectées :</strong> Adresse IP (anonymisée), navigateur, système d'exploitation</p>
                    <p className="mb-xs"><strong className="text-charcoal">Finalité :</strong> Fonctionnement technique du site, sécurité</p>
                    <p className="mb-xs"><strong className="text-charcoal">Base légale :</strong> Intérêt légitime</p>
                    <p><strong className="text-charcoal">Durée de conservation :</strong> 6 mois maximum</p>
                  </div>
                </div>
              </div>

              {/* Ce qu'on ne fait PAS */}
              <div className="card bg-forest/5 border-l-4 border-forest">
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  ✅ Ce qu'on ne fait PAS avec tes données
                </h2>
                <ul className="space-y-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold">•</span>
                    <span>On ne vend <strong className="text-charcoal">jamais</strong> tes données à des tiers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold">•</span>
                    <span>On n'utilise <strong className="text-charcoal">aucun</strong> tracker publicitaire (Google Analytics, Facebook Pixel, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold">•</span>
                    <span>On ne partage pas tes données avec des partenaires commerciaux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold">•</span>
                    <span>On ne crée <strong className="text-charcoal">aucun</strong> profil publicitaire</span>
                  </li>
                </ul>
              </div>

              {/* Tes droits */}
              <div>
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Tes droits (RGPD)
                </h2>
                <p className="mb-md">
                  Conformément au RGPD, tu disposes des droits suivants :
                </p>
                <div className="grid md:grid-cols-2 gap-md">
                  <div className="card bg-cream">
                    <h3 className="text-h5 font-display font-semibold text-charcoal mb-xs">
                      Droit d'accès
                    </h3>
                    <p className="text-body-sm">
                      Tu peux demander une copie de toutes les données que nous avons sur toi
                    </p>
                  </div>

                  <div className="card bg-cream">
                    <h3 className="text-h5 font-display font-semibold text-charcoal mb-xs">
                      Droit de rectification
                    </h3>
                    <p className="text-body-sm">
                      Tu peux corriger des données inexactes ou incomplètes
                    </p>
                  </div>

                  <div className="card bg-cream">
                    <h3 className="text-h5 font-display font-semibold text-charcoal mb-xs">
                      Droit à l'effacement
                    </h3>
                    <p className="text-body-sm">
                      Tu peux demander la suppression de tes données (sauf données anonymisées pour la recherche)
                    </p>
                  </div>

                  <div className="card bg-cream">
                    <h3 className="text-h5 font-display font-semibold text-charcoal mb-xs">
                      Droit à la portabilité
                    </h3>
                    <p className="text-body-sm">
                      Tu peux récupérer tes données dans un format structuré (CSV, JSON)
                    </p>
                  </div>

                  <div className="card bg-cream">
                    <h3 className="text-h5 font-display font-semibold text-charcoal mb-xs">
                      Droit d'opposition
                    </h3>
                    <p className="text-body-sm">
                      Tu peux t'opposer au traitement de tes données (sauf obligations légales)
                    </p>
                  </div>

                  <div className="card bg-cream">
                    <h3 className="text-h5 font-display font-semibold text-charcoal mb-xs">
                      Droit de limitation
                    </h3>
                    <p className="text-body-sm">
                      Tu peux demander de limiter l'utilisation de tes données dans certains cas
                    </p>
                  </div>
                </div>

                <div className="mt-lg card bg-orange/5 border-l-4 border-orange">
                  <p className="mb-sm">
                    <strong className="text-charcoal">Pour exercer tes droits :</strong>
                  </p>
                  <p>
                    Envoie un email à{' '}
                    <a href="mailto:contact@resonance-citoyenne.fr" className="text-orange hover:underline font-semibold">
                      contact@resonance-citoyenne.fr
                    </a>
                    {' '}avec l'objet "RGPD - [Ton droit]".
                  </p>
                  <p className="mt-sm text-body-sm">
                    Nous répondons sous <strong className="text-charcoal">1 mois maximum</strong> (délai légal).
                  </p>
                </div>
              </div>

              {/* Sécurité */}
              <div>
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Sécurité des données
                </h2>
                <p className="mb-md">
                  Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger tes données :
                </p>
                <ul className="space-y-sm pl-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-orange font-bold">•</span>
                    <span><strong className="text-charcoal">Chiffrement HTTPS</strong> : Toutes les communications sont chiffrées (certificat SSL)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange font-bold">•</span>
                    <span><strong className="text-charcoal">Anonymisation</strong> : Les votes sont anonymisés à la source (impossible de relier un vote à une personne)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange font-bold">•</span>
                    <span><strong className="text-charcoal">Minimisation</strong> : On ne collecte que le strict nécessaire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange font-bold">•</span>
                    <span><strong className="text-charcoal">Hébergement sécurisé</strong> : Vercel (conforme RGPD, certifié SOC 2)</span>
                  </li>
                </ul>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Cookies
                </h2>
                <p className="mb-md">
                  Ce site utilise <strong className="text-charcoal">uniquement des cookies techniques</strong> essentiels
                  au fonctionnement (session, préférences). Aucun cookie publicitaire ou de tracking.
                </p>
                <p>
                  Tu peux désactiver les cookies dans les paramètres de ton navigateur, mais cela peut affecter
                  le fonctionnement du site.
                </p>
              </div>

              {/* Transferts hors UE */}
              <div>
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Transferts de données hors UE
                </h2>
                <p className="mb-md">
                  Notre hébergeur (Vercel) a des serveurs situés hors de l'Union Européenne (États-Unis).
                  Ces transferts sont encadrés par des clauses contractuelles types approuvées par la Commission Européenne.
                </p>
                <p>
                  Vercel est certifié SOC 2 et conforme au RGPD.
                </p>
              </div>

              {/* Modifications */}
              <div>
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Modifications de cette politique
                </h2>
                <p>
                  Nous pouvons modifier cette politique de confidentialité pour refléter les évolutions
                  de nos pratiques ou de la législation. En cas de modification substantielle, nous te
                  préviendrons par email (si tu es inscrit·e à la newsletter).
                </p>
              </div>

              {/* Réclamation CNIL */}
              <div className="card bg-sky/5 border-l-4 border-sky">
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Réclamation auprès de la CNIL
                </h2>
                <p className="mb-sm">
                  Si tu estimes que tes droits ne sont pas respectés, tu peux introduire une réclamation
                  auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
                </p>
                <p>
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-sky hover:underline font-semibold">
                    www.cnil.fr
                  </a>
                </p>
              </div>

              {/* Contact */}
              <div className="card bg-orange/5 border-l-4 border-orange">
                <h2 className="text-h3 font-display font-semibold text-charcoal mb-md">
                  Questions ?
                </h2>
                <p className="mb-sm">
                  Pour toute question concernant cette politique de confidentialité ou l'utilisation
                  de tes données personnelles :
                </p>
                <p>
                  Email :{' '}
                  <a href="mailto:contact@resonance-citoyenne.fr" className="text-orange hover:underline font-semibold">
                    contact@resonance-citoyenne.fr
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
