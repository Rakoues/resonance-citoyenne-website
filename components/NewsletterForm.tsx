'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import Button from './Button';

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading' });

    try {
      const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

      if (!googleSheetsUrl) {
        // Fallback: Show instructions to manually add to list
        console.log('Newsletter signup:', email);

        setStatus({
          type: 'success',
          message: `Merci ! Pour l'instant, envoie un email à contact.resonancecitoyenne@gmail.com avec comme objet "Newsletter" pour t'inscrire. On automatise bientôt !`,
        });
      } else {
        // Send to Google Sheets via Google Apps Script Web App
        await fetch(googleSheetsUrl, {
          method: 'POST',
          mode: 'no-cors', // Google Scripts doesn't support CORS
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            date: new Date().toISOString(),
            source: 'website',
          }),
        });

        // With no-cors, we can't read the response, so we assume success
        setStatus({
          type: 'success',
          message: 'Merci ! Tu es inscrit·e à notre newsletter. Check tes emails ! 📬',
        });
      }

      // Reset form
      setEmail('');

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle' });
      }, 5000);
    } catch {
      setStatus({
        type: 'error',
        message: 'Oups, une erreur s\'est produite. Réessaie dans quelques instants.',
      });
    }
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="space-y-md">
        <div className="flex flex-col sm:flex-row gap-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="ton-email@exemple.fr"
            className="flex-1 h-[48px] px-md border-2 border-gray-light rounded-button
                     focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20
                     transition-all text-body text-charcoal"
          />
          <Button
            type="submit"
            variant="primary"
            icon={Mail}
            iconPosition="right"
            disabled={status.type === 'loading'}
            className="sm:w-auto"
          >
            {status.type === 'loading' ? 'Inscription...' : 'S\'inscrire'}
          </Button>
        </div>

        {/* Status Messages */}
        {status.type === 'success' && (
          <div className="flex items-start gap-sm p-md bg-forest/10 border-l-4 border-forest rounded-button">
            <CheckCircle className="text-forest flex-shrink-0 mt-0.5" size={20} />
            <p className="text-body-sm text-forest">{status.message}</p>
          </div>
        )}

        {status.type === 'error' && (
          <div className="flex items-start gap-sm p-md bg-error/10 border-l-4 border-error rounded-button">
            <AlertCircle className="text-error flex-shrink-0 mt-0.5" size={20} />
            <p className="text-body-sm text-error">{status.message}</p>
          </div>
        )}
      </form>
    </div>
  );
}
