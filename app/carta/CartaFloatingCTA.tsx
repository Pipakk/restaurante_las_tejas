'use client';

import { SITE } from '@/data/site';

export default function CartaFloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden pointer-events-none">
      <div className="flex gap-3 justify-center pointer-events-auto">
        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-[200px] rounded-full bg-green-600 py-3 px-4 text-center text-white font-semibold text-sm shadow-lg hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
        >
          Reservar
        </a>
        <a
          href={`tel:${SITE.phone}`}
          className="flex-1 max-w-[200px] rounded-full bg-teja-600 py-3 px-4 text-center text-white font-semibold text-sm shadow-lg hover:bg-teja-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teja-500"
        >
          Llamar
        </a>
      </div>
    </div>
  );
}
