'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { submitReview } from '@/app/actions/reviews';
import type { ReviewFormData } from '@/lib/reviewSchema';
import { hasSupabase } from '@/lib/supabase';

type ReviewFormState = Omit<ReviewFormData, 'consent'> & { consent: boolean };

const defaultValues: ReviewFormState = {
  name: '',
  rating: 0,
  comment: '',
  consent: false,
};

export function ReviewForm() {
  const [form, setForm] = useState<ReviewFormState>(defaultValues);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const result = await submitReview(form as ReviewFormData);

    if (result.success) {
      setStatus('success');
      setForm(defaultValues);
      return;
    }

    if (result.error?.includes('Modo demo') && typeof window !== 'undefined') {
      try {
        const key = 'las-tejas-reviews-demo';
        const stored = JSON.parse(localStorage.getItem(key) ?? '[]');
        stored.push({
          id: crypto.randomUUID(),
          name: form.name,
          rating: form.rating,
          comment: form.comment,
          created_at: new Date().toISOString(),
        });
        localStorage.setItem(key, JSON.stringify(stored));
        setStatus('success');
        setForm(defaultValues);
        setErrorMessage('');
        return;
      } catch {
        setStatus('error');
        setErrorMessage('No se pudo guardar en modo demo.');
        return;
      }
    }

    setStatus('error');
    setErrorMessage(result.error ?? 'Error al enviar.');
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!hasSupabase && (
        <p className="text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 text-sm">
          Modo demo: las reseñas se guardan solo en este dispositivo (localStorage). Configura Supabase para guardarlas en servidor.
        </p>
      )}

      <div>
        <label htmlFor="review-name" className="block text-sm font-medium text-ink mb-1">
          Nombre <span className="text-teja-600">*</span>
        </label>
        <input
          id="review-name"
          type="text"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className="w-full rounded-lg border border-teja-200 px-4 py-3 text-ink focus:border-teja-500 focus:ring-2 focus:ring-teja-500/20 focus:outline-none"
          placeholder="Tu nombre"
          required
          aria-required
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <span className="block text-sm font-medium text-ink mb-2">
          Puntuación <span className="text-teja-600">*</span>
        </span>
        <div className="flex gap-2" role="group" aria-label="Puntuación de 1 a 5">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setForm((f) => ({ ...f, rating: n }))}
              className={`w-12 h-12 rounded-full border-2 text-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teja-600 ${
                form.rating >= n
                  ? 'bg-teja-600 border-teja-600 text-white'
                  : 'border-teja-200 text-ink/70 hover:border-teja-400'
              }`}
              aria-pressed={form.rating === n}
              aria-label={`${n} estrella${n > 1 ? 's' : ''}`}
              disabled={status === 'loading'}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="review-comment" className="block text-sm font-medium text-ink mb-1">
          Comentario <span className="text-teja-600">*</span>
        </label>
        <textarea
          id="review-comment"
          value={form.comment}
          onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
          rows={4}
          className="w-full rounded-lg border border-teja-200 px-4 py-3 text-ink focus:border-teja-500 focus:ring-2 focus:ring-teja-500/20 focus:outline-none resize-y"
          placeholder="Cuéntanos tu experiencia..."
          required
          aria-required
          disabled={status === 'loading'}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="review-consent"
          type="checkbox"
          checked={form.consent}
          onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
          className="mt-1 h-4 w-4 rounded border-teja-300 text-teja-600 focus:ring-teja-500"
          disabled={status === 'loading'}
          aria-describedby="consent-desc"
        />
        <label id="consent-desc" htmlFor="review-consent" className="text-sm text-ink/80">
          Acepto que mi nombre y comentario se muestren públicamente en la web y que se guarden para este fin.
        </label>
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm" role="alert">
          {errorMessage}
        </p>
      )}
      {status === 'success' && (
        <p className="text-teja-700 text-sm bg-teja-50 rounded-lg px-4 py-2" role="status">
          {hasSupabase
            ? 'Gracias por tu reseña. La publicaremos tras revisarla.'
            : 'Modo demo: tu reseña se ha guardado localmente. Gracias.'}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading' || form.rating === 0}
        className="w-full rounded-full bg-teja-600 py-4 text-white font-semibold hover:bg-teja-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-teja-600 focus-visible:ring-offset-2 transition-colors"
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar reseña'}
      </button>
    </motion.form>
  );
}
