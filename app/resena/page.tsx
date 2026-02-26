import { ReviewForm } from '@/components/ReviewForm';
import { getApprovedReviews } from '@/app/actions/reviews';
import { GoogleReviewsButton } from '@/components/GoogleReviewsCTA';
import { SITE } from '@/data/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Reseñas | ${SITE.name}`,
  description: 'Reseñas en Google y deja tu opinión sobre Restaurante Las Tejas.',
};

export default async function ResenaPage() {
  const reviews = await getApprovedReviews();

  return (
    <div className="min-h-screen bg-cream">
      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="heading-display text-center mb-4">Reseñas</h1>
          <p className="text-center text-ink/80 max-w-xl mx-auto mb-10">
            Nuestras reseñas oficiales están en Google. También puedes dejarnos tu opinión aquí.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <GoogleReviewsButton />
          </div>

          <h2 className="heading-section text-center mb-6">Dejar reseña en la web</h2>
          <p className="text-center text-ink/70 text-sm mb-8 max-w-lg mx-auto">
            Si prefieres, cuéntanos tu experiencia aquí y la publicaremos tras revisarla.
          </p>
          <ReviewForm />

          <h2 className="heading-section text-center mt-16 mb-8">Últimas reseñas (web)</h2>
          {reviews.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-6">
              {reviews.map((r) => (
                <article
                  key={r.id}
                  className="rounded-2xl bg-white p-6 shadow-md border border-teja-100"
                >
                  <div className="flex gap-1 mb-2" aria-label={`${r.rating} de 5 estrellas`}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={i < r.rating ? 'text-amber-400' : 'text-gray-200'}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-ink/80 italic">&ldquo;{r.comment}&rdquo;</p>
                  <p className="text-teja-700 font-medium mt-2">{r.name}</p>
                  <time className="text-sm text-ink/50" dateTime={r.created_at}>
                    {new Date(r.created_at).toLocaleDateString('es-ES', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-white/60 p-10 text-center text-ink/70">
              <p>Aún no hay reseñas publicadas en la web. ¡Sé el primero!</p>
              <div className="mt-6">
                <GoogleReviewsButton className="mt-4" />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
