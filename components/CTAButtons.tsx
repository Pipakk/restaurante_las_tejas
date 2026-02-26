import Link from 'next/link';
import { SITE } from '@/data/site';

interface CTAButtonsProps {
  primaryLabel?: string;
  secondaryLabel?: string;
  className?: string;
}

export function CTAButtons({
  primaryLabel = 'Reservar mesa',
  secondaryLabel = 'Ver carta',
  className = '',
}: CTAButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${className}`}>
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto inline-flex justify-center items-center rounded-full bg-teja-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-teja-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teja-500 focus-visible:ring-offset-2 transition-colors"
      >
        {primaryLabel}
      </a>
      <Link
        href="/carta"
        className="w-full sm:w-auto inline-flex justify-center items-center rounded-full border-2 border-teja-500 px-8 py-4 text-base font-semibold text-teja-700 bg-white/90 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teja-500 focus-visible:ring-offset-2 transition-colors"
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}
