'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SITE } from '@/data/site';
import { CTAButtons } from './CTAButtons';

// Póster del mismo video del filete (Mixkit); nunca imagen genérica de restaurante
const VIDEO_POSTER = 'https://assets.mixkit.co/videos/45719/45719-thumb-720-2.jpg';

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasVideo = SITE.heroVideo && !SITE.heroVideo.startsWith('TODO');

  useEffect(() => {
    if (!hasVideo) return;
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, [hasVideo]);

  return (
    <section
      className="relative flex flex-col overflow-hidden bg-ink"
      aria-label="Bienvenida"
    >
      {/* Bloque de texto y enlaces arriba */}
      <div className="container-narrow text-center text-white px-4 py-12 sm:py-16 md:py-20">
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {SITE.name}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-white/90 max-w-xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          {SITE.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <CTAButtons primaryLabel="Reservar mesa" secondaryLabel="Ver carta" />
        </motion.div>
      </div>

      {/* Siempre video del filete (o póster del filete si no hay video configurado) */}
      <div className="relative w-full bg-ink min-h-[40vh] flex items-center justify-center">
        {hasVideo ? (
          <video
            ref={videoRef}
            src={SITE.heroVideo!}
            className="w-full max-h-[70vh] object-contain object-center"
            muted
            loop
            playsInline
            poster={VIDEO_POSTER}
            aria-hidden
          />
        ) : (
          <div className="relative w-full max-h-[70vh] aspect-video">
            <Image
              src={VIDEO_POSTER}
              alt=""
              fill
              className="object-contain object-center"
              sizes="100vw"
            />
          </div>
        )}
      </div>

      <a
        href="#destacados"
        className="flex flex-col items-center gap-1 py-6 text-white/80 hover:text-white transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
        aria-label="Bajar a la sección siguiente"
      >
        <span className="sr-only">Ver más</span>
        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}
