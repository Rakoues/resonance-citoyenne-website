'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Waves } from 'lucide-react';
import Button from './Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Nous connaître', href: '/nous-connaitre' },
    { name: 'Le constat', href: '/le-constat' },
    { name: 'Expérimentations', href: '/experimentations' },
    { name: 'Recherche', href: '/recherche' },
    { name: 'Participer', href: '/participer' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <nav className="w-full flex items-center justify-between h-[72px]" aria-label="Navigation principale">
        {/* Logo - with left padding */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0 pl-4 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-16 2xl:pl-24">
          <Waves className="text-orange" size={32} strokeWidth={2.5} />
          <span className="font-display font-bold text-h4 text-charcoal">
            Résonance Citoyenne
          </span>
        </Link>

        {/* Desktop Navigation - with right padding */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 2xl:gap-6 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-24">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-body font-semibold text-sm lg:text-body text-charcoal hover:text-orange transition-colors relative group whitespace-nowrap"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange group-hover:w-full transition-all duration-[250ms]" />
            </Link>
          ))}
          <Link href="/participer">
            <Button variant="primary">
              Rejoindre
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button - with right padding */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-sm rounded-button hover:bg-orange/10 transition-colors mr-4 sm:mr-6 md:mr-8"
          aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-charcoal" />
          ) : (
            <Menu size={24} className="text-charcoal" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-light">
          <div className="container py-lg flex flex-col gap-md">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-body font-semibold text-body-lg text-charcoal hover:text-orange transition-colors py-sm"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/participer">
              <Button variant="primary" className="mt-md w-full">
                Rejoindre
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
