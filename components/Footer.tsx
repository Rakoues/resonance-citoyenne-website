import React from 'react';
import Link from 'next/link';
import { Waves, Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks: Record<string, Array<{ name: string; href: string; external?: boolean }>> = {
    'À propos': [
      { name: 'Nous connaître', href: '/nous-connaitre' },
      { name: 'Le constat', href: '/le-constat' },
      { name: 'Recherche', href: '/recherche' },
    ],
    'Participer': [
      { name: 'Expérimentations', href: '/experimentations' },
      { name: 'Rejoindre', href: '/participer' },
      { name: 'Nous contacter', href: '/contact' },
    ],
    'Suivre': [
      { name: 'Newsletter', href: '/participer#newsletter' },
      { name: 'Twitter', href: '#', external: true }, // TODO: Add real Twitter URL when available
      { name: 'GitHub', href: 'https://github.com/Rakoues/resonance-citoyenne-website', external: true },
    ],
    'Légal': [
      { name: 'Mentions légales', href: '/mentions-legales' },
      { name: 'Confidentialité', href: '/politique-de-confidentialite' },
    ],
  };

  return (
    <footer className="bg-charcoal text-cream mt-auto">
      <div className="container py-3xl">
        {/* Logo & Mission */}
        <div className="mb-2xl">
          <div className="flex items-center gap-2 mb-md">
            <Waves className="text-orange" size={40} strokeWidth={2.5} />
            <span className="font-display font-bold text-h3 text-white">
              Résonance Citoyenne
            </span>
          </div>
          <p className="text-body-lg text-cream/80 max-w-2xl">
            Association de recherche citoyenne explorant de nouvelles formes de décision collective.
            Participez à l&apos;expérience de la démocratie directe.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-xl mb-2xl">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-body font-bold text-body text-white mb-md">
                {category}
              </h3>
              <ul className="space-y-sm">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-cream/70 hover:text-orange transition-colors"
                      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-lg mb-xl border-t border-cream/20 pt-xl">
          <a
            href="mailto:contact@resonance-citoyenne.fr"
            className="text-cream/70 hover:text-orange transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="#"
            className="text-cream/70 hover:text-orange transition-colors"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://github.com/Rakoues/resonance-citoyenne-website"
            className="text-cream/70 hover:text-orange transition-colors"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-body-sm text-cream/50">
          © {new Date().getFullYear()} Résonance Citoyenne - Association loi 1901
        </div>
      </div>
    </footer>
  );
}
