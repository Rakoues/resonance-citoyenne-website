'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from './Button';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading' });

    // TODO: Integrate with email service (Resend, EmailJS, etc.)
    // For now, simulate API call
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // TODO: Replace with actual email sending logic
      console.log('Form submitted:', formData);

      setStatus({
        type: 'success',
        message: 'Message envoyé ! On te répond sous 48h maximum.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle' });
      }, 5000);
    } catch {
      setStatus({
        type: 'error',
        message: 'Oups, une erreur s\'est produite. Réessaie ou écris-nous directement à contact@resonance-citoyenne.fr',
      });
    }
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="space-y-lg">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-body font-semibold text-charcoal mb-sm"
          >
            Ton prénom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full h-[48px] px-md border-2 border-gray-light rounded-button
                     focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20
                     transition-all text-body text-charcoal"
            placeholder="Marie"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-body font-semibold text-charcoal mb-sm"
          >
            Ton email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full h-[48px] px-md border-2 border-gray-light rounded-button
                     focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20
                     transition-all text-body text-charcoal"
            placeholder="marie@exemple.fr"
          />
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-body font-semibold text-charcoal mb-sm"
          >
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full h-[48px] px-md border-2 border-gray-light rounded-button
                     focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20
                     transition-all text-body text-charcoal"
            placeholder="Question sur le vote quadratique"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-body font-semibold text-charcoal mb-sm"
          >
            Ton message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-md py-sm border-2 border-gray-light rounded-button
                     focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20
                     transition-all text-body text-charcoal resize-none"
            placeholder="Partage tes idées, questions, ou propositions..."
          />
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

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          icon={Send}
          iconPosition="right"
          disabled={status.type === 'loading'}
          className="w-full"
        >
          {status.type === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
        </Button>

        <p className="text-body-sm text-gray-warm text-center">
          On te répond sous 48h, promis ! ✨
        </p>
      </form>
    </div>
  );
}
