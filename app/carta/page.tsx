import { MenuSection } from '@/components/MenuSection';
import { SITE } from '@/data/site';
import type { Metadata } from 'next';
import CartaFloatingCTA from './CartaFloatingCTA';

export const metadata: Metadata = {
  title: `Carta | ${SITE.name}`,
  description: 'Nuestra carta con platos tradicionales, información de alérgenos y sugerencias.',
};

export default function CartaPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="heading-display text-center mb-4">Carta</h1>
          <p className="text-center text-ink/80 max-w-xl mx-auto mb-10">
            Cocina tradicional con producto fresco. Consulta los alérgenos en cada plato y, si tienes dudas, avisa al camarero.
          </p>
          <MenuSection />
        </div>
      </section>
      <CartaFloatingCTA />
    </div>
  );
}
