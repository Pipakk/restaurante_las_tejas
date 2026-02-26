'use client';

import { SITE } from '@/data/site';

export function MapEmbed() {
  const { lat, lng } = SITE.googleMapsCoords ?? { lat: 40.3494752, lng: -3.8169365 };
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&output=embed`;

  return (
    <section id="ubicacion" className="section-padding bg-white/70">
      <div className="container-narrow">
        <h2 className="heading-section text-center mb-4">Ubicación y horarios</h2>
        <p className="text-center text-ink/80 mb-8 max-w-xl mx-auto">
          Ven a visitarnos. Si tienes alguna duda, llámanos o escríbenos por WhatsApp.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-teja-100 aspect-[4/3] min-h-[280px] bg-teja-50">
            <iframe
              title="Ubicación Restaurante Las Tejas en Google Maps"
              src={embedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[280px]"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl text-ink mb-2">Dirección</h3>
              <p className="text-ink/80">
                <a href={SITE.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-teja-600 hover:underline">
                  {SITE.address}
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-ink mb-2">Horarios</h3>
              <ul className="text-ink/80 text-sm space-y-1 list-none p-0 m-0">
                <li><strong>Lunes:</strong> Cerrado</li>
                <li><strong>Martes:</strong> 7:00–24:00</li>
                <li><strong>Miércoles:</strong> 7:00–24:00</li>
                <li><strong>Jueves:</strong> 7:00–24:00</li>
                <li><strong>Viernes:</strong> 7:00–24:00</li>
                <li><strong>Sábado:</strong> 7:00–24:00</li>
                <li><strong>Domingo:</strong> 7:00–24:00</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-5 py-3 font-medium hover:bg-ink/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teja-600"
              >
                <span aria-hidden>📞</span> Llamar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
