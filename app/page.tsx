import { HeroVideo } from '@/components/HeroVideo';
import { CTAButtons } from '@/components/CTAButtons';
import { MapEmbed } from '@/components/MapEmbed';
import { Gallery } from '@/components/Gallery';
import { GoogleReviewsCTA, GoogleReviewsButton } from '@/components/GoogleReviewsCTA';
import { SITE } from '@/data/site';
import Link from 'next/link';

export default async function HomePage() {
  return (
    <>
      <HeroVideo />

      <section id="destacados" className="section-padding bg-cream">
        <div className="container-narrow">
          <h2 className="heading-section text-center mb-4">Por qué Las Tejas</h2>
          <p className="text-center text-ink/80 mb-12 max-w-xl mx-auto">
            Tradición, producto y cercanía en cada plato.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {SITE.highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl bg-white p-6 shadow-lg border border-teja-100/80 hover:shadow-xl hover:border-teja-200/80 transition-all duration-300"
              >
                <span className="text-3xl mb-3 block" aria-hidden>{h.icon}</span>
                <h3 className="font-display text-xl text-ink mb-2">{h.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre-nosotros" className="section-padding bg-teja-50/80">
        <div className="container-narrow max-w-3xl text-center">
          <h2 className="heading-section mb-6">Nuestra historia</h2>
          <p className="text-ink/80 text-lg leading-relaxed mb-6">
            Las Tejas abrió sus puertas en Alcorcón en 1978. Desde entonces, hemos mantenido la misma esencia:
            cocina tradicional, producto de calidad y un trato familiar que hace que cada comida sea especial.
          </p>
          <p className="text-ink/70 leading-relaxed">
            Nuestro cachopo, nuestros pescados a la plancha y nuestros asados siguen siendo la seña de identidad
            de una casa que ya cumple más de cuatro décadas contigo.
          </p>
          <div className="mt-10">
            <CTAButtons primaryLabel="Reservar" secondaryLabel="Ver carta" />
          </div>
        </div>
      </section>

      <Gallery />

      <MapEmbed />

      {/* Reseñas en Google */}
      <section id="reseñas" className="section-padding bg-cream">
        <div className="container-narrow">
          <h2 className="heading-section text-center mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-center text-ink/80 mb-10 max-w-xl mx-auto">
            Nuestras reseñas y valoraciones en Google. Experiencias reales de quien nos visita.
          </p>
          <div className="flex flex-col items-center gap-6 mb-10">
            <GoogleReviewsCTA />
            <p className="text-sm text-ink/60">
              También puedes dejarnos tu opinión en la web.{' '}
              <Link href="/resena" className="text-teja-600 hover:underline font-medium">
                Dejar una reseña aquí
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-cream border-t border-teja-200/50">
        <div className="container-narrow max-w-2xl mx-auto">
          <h2 className="heading-section text-center mb-10">Preguntas frecuentes</h2>
          <ul className="space-y-6">
            {SITE.faq.map((item, i) => (
              <li key={i} className="border-b border-teja-100 pb-6 last:border-0">
                <h3 className="font-display text-lg text-ink mb-2">{item.question}</h3>
                <p className="text-ink/70 text-sm">{item.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
