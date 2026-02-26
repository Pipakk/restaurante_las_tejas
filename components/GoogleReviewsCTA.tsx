import Link from 'next/link';
import { SITE } from '@/data/site';

const GOOGLE_REVIEWS_URL = SITE.googleMapsUrl;

export function GoogleReviewsCTA() {
  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-2xl bg-white border border-teja-200 p-6 shadow-md hover:shadow-lg hover:border-teja-300 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teja-600 w-full sm:w-auto"
    >
      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600" aria-hidden>
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </span>
      <div className="text-left">
        <p className="font-semibold text-ink">Reseñas en Google</p>
        <p className="text-sm text-ink/70">Ver valoraciones y opiniones de clientes</p>
      </div>
      <span className="ml-auto text-teja-600 shrink-0" aria-hidden>→</span>
    </a>
  );
}

export function GoogleReviewsButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-white border-2 border-teja-600 px-6 py-3 text-teja-700 font-semibold hover:bg-teja-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teja-600 ${className}`}
    >
      <span aria-hidden>★</span>
      Ver reseñas en Google
    </a>
  );
}
