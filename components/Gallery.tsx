'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE } from '@/data/site';

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const images = SITE.galleryImages;

  return (
    <section id="galeria" className="section-padding bg-cream">
      <div className="container-narrow">
        <h2 className="heading-section text-center mb-4">Galería</h2>
        <p className="text-center text-ink/80 mb-10 max-w-xl mx-auto">
          Un vistazo a nuestro espacio y nuestros platos.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              type="button"
              className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-teja-600 focus-visible:ring-offset-2"
              onClick={() => setSelected(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                quality={90}
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selected].src}
                alt={images[selected].alt}
                fill
                className="object-contain"
                sizes="100vw"
                quality={90}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
