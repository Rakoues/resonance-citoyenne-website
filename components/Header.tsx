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
  ];

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between h-[72px]" aria-label="Navigation principale">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Waves className="text-orange" size={32} strokeWidth={2.5} />
          <span className="font-display font-bold text-h4 text-charcoal">
            Résonance Citoyenne
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-xl">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-body font-semibold text-body text-charcoal hover:text-orange transition-colors relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange group-hover:w-full transition-all duration-250" />
            </Link>
          ))}
          <Button variant="primary" className="ml-md">
            Rejoindre
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-sm rounded-button hover:bg-orange/10 transition-colors"
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
        <div className="md:hidden bg-white border-t border-gray-light">
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
            <Button variant="primary" className="mt-md w-full">
              Rejoindre
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
