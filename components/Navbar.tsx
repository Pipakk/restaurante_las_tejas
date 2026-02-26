'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE } from '@/data/site';

function LogoImage() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <span className="font-display text-xl sm:text-2xl font-semibold text-teja-700">Las Tejas</span>;
  }
  return (
    <Image
      src={SITE.logo}
      alt=""
      width={112}
      height={48}
      className="object-contain object-left"
      priority
      unoptimized={SITE.logo.startsWith('/')}
      onError={() => setFailed(true)}
    />
  );
}

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/#sobre-nosotros', label: 'Nosotros' },
  { href: '/carta', label: 'Carta' },
  { href: '/#galeria', label: 'Galería' },
  { href: '/#ubicacion', label: 'Contacto' },
  { href: '/resena', label: 'Reseñas' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 glass border-b border-teja-200/50 shadow-sm"
      role="banner"
    >
      <div className="container-narrow flex h-16 sm:h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-teja-600 focus-visible:ring-offset-2 rounded"
          aria-label={`${SITE.name} - Inicio`}
        >
          <span className="relative h-10 w-24 sm:h-12 sm:w-28 flex items-center justify-start">
            <LogoImage />
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink/90 hover:text-teja-600 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teja-600 focus-visible:ring-offset-2 rounded px-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-teja-600 px-4 py-2 text-sm font-medium text-white hover:bg-teja-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teja-600 focus-visible:ring-offset-2"
            aria-label="Reservar o contactar por WhatsApp"
          >
            Reservar
          </a>
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-ink hover:bg-teja-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teja-600"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-teja-200/50 bg-white/95 backdrop-blur-md"
            aria-label="Menú móvil"
          >
            <ul className="container-narrow py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-3 text-ink font-medium hover:text-teja-600 hover:bg-teja-50 rounded-lg px-3 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-3 rounded-lg px-3 bg-teja-600 text-white font-medium text-center hover:bg-teja-700"
                  onClick={() => setOpen(false)}
                >
                  Reservar por WhatsApp
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
