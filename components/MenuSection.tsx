'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { MENU_CATEGORIES, MENU_NOTE, ALLERGEN_LABELS, type AllergenId } from '@/data/menu';
import type { Dish } from '@/data/menu';

function AllergenBadges({ allergens }: { allergens: AllergenId[] }) {
  if (allergens.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1 mt-1" aria-label="Alérgenos">
      {allergens.map((a) => (
        <span
          key={a}
          className="inline-block text-xs px-2 py-0.5 rounded-full bg-teja-100 text-teja-800"
          title={ALLERGEN_LABELS[a]}
        >
          {ALLERGEN_LABELS[a]}
        </span>
      ))}
    </div>
  );
}

function DishRow({ dish }: { dish: Dish }) {
  return (
    <div className="border-b border-teja-100 py-3 last:border-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="font-medium text-ink">{dish.name}</span>
        {dish.price != null && (
          <span className="text-teja-700 font-medium">{dish.price.toFixed(2)} €</span>
        )}
      </div>
      {dish.description && (
        <p className="text-sm text-ink/70 mt-0.5">{dish.description}</p>
      )}
      <AllergenBadges allergens={dish.allergens} />
    </div>
  );
}

export function MenuSection() {
  const [categoryId, setCategoryId] = useState<string>(MENU_CATEGORIES[0].id);
  const [search, setSearch] = useState('');

  const filteredCategories = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return MENU_CATEGORIES;

    return MENU_CATEGORIES.map((cat) => ({
      ...cat,
      dishes: cat.dishes.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.allergens.some((a) => ALLERGEN_LABELS[a].toLowerCase().includes(q))
      ),
    })).filter((cat) => cat.dishes.length > 0);
  }, [search]);

  const currentCategory = filteredCategories.find((c) => c.id === categoryId) ?? filteredCategories[0];

  return (
    <div className="space-y-6">
      <div className="sticky top-20 z-10 glass rounded-xl p-2 shadow-sm border border-teja-100">
        <input
          type="search"
          placeholder="Buscar plato o alérgeno..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-teja-200 px-4 py-3 mb-3 text-ink focus:border-teja-500 focus:ring-2 focus:ring-teja-500/20 focus:outline-none"
          aria-label="Buscar en la carta"
        />
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {filteredCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategoryId(cat.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teja-600 ${
                categoryId === cat.id
                  ? 'bg-teja-600 text-white'
                  : 'bg-teja-100 text-ink hover:bg-teja-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {currentCategory && (
        <motion.section
          key={currentCategory.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-white p-6 sm:p-8 shadow-md border border-teja-100"
        >
          <h2 className="font-display text-2xl text-teja-800 mb-6">{currentCategory.name}</h2>
          <div className="space-y-0">
            {currentCategory.dishes.map((d) => (
              <DishRow key={d.id} dish={d} />
            ))}
          </div>
        </motion.section>
      )}

      <p className="text-sm text-ink/60 italic">{MENU_NOTE}</p>
      <p className="text-sm text-ink/70">
        Carta actualizada con información sobre alérgenos. En caso de alergia, avise al camarero.
      </p>
    </div>
  );
}
