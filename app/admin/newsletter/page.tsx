'use client';

import { useEffect, useState } from 'react';
import { getSupabase, NewsletterSubscription } from '@/lib/supabase';
import { Mail, Calendar, Globe, Download } from 'lucide-react';

export default function NewsletterAdminPage() {
  const [subscriptions, setSubscriptions] = useState<NewsletterSubscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const fetchSubscriptions = async () => {
    try {
      const supabase = getSupabase();
      if (!supabase) {
        throw new Error('Supabase not configured');
      }

      const { data, error } = await supabase
        .from('newsletter_subscriptions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setSubscriptions(data || []);
    } catch (err) {
      setError('Erreur lors du chargement des inscriptions');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const csv = [
      ['Email', 'Date', 'Source'],
      ...subscriptions.map((sub) => [
        sub.email,
        new Date(sub.created_at).toLocaleString('fr-FR'),
        sub.source,
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-cream py-section">
        <div className="container">
          <div className="text-center">
            <p className="text-h3 text-charcoal">Chargement...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-cream py-section">
        <div className="container">
          <div className="card bg-error/10 border-2 border-error">
            <p className="text-body text-error">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-section">
      <div className="container">
        {/* Header */}
        <div className="mb-xl">
          <h1 className="text-h1 text-charcoal mb-md">Newsletter Admin</h1>
          <div className="flex items-center gap-lg">
            <p className="text-body text-charcoal-light">
              <span className="font-semibold text-forest">{subscriptions.length}</span>{' '}
              inscription{subscriptions.length > 1 ? 's' : ''}
            </p>
            {subscriptions.length > 0 && (
              <button
                onClick={exportToCSV}
                className="flex items-center gap-sm px-md py-sm bg-orange text-white rounded-button hover:bg-orange-dark transition-colors"
              >
                <Download size={18} />
                Exporter en CSV
              </button>
            )}
          </div>
        </div>

        {/* Subscriptions List */}
        {subscriptions.length === 0 ? (
          <div className="card text-center">
            <Mail className="mx-auto mb-md text-charcoal-light" size={48} />
            <p className="text-body text-charcoal-light">
              Aucune inscription pour le moment
            </p>
          </div>
        ) : (
          <div className="space-y-md">
            {subscriptions.map((sub) => (
              <div
                key={sub.id}
                className="card hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md">
                  <div className="flex items-center gap-md">
                    <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-forest" size={20} />
                    </div>
                    <div>
                      <p className="text-body font-semibold text-charcoal">
                        {sub.email}
                      </p>
                      <div className="flex items-center gap-lg mt-xs">
                        <div className="flex items-center gap-xs text-body-sm text-charcoal-light">
                          <Calendar size={14} />
                          {new Date(sub.created_at).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                        <div className="flex items-center gap-xs text-body-sm text-charcoal-light">
                          <Globe size={14} />
                          {sub.source}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
