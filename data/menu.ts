/**
 * Carta del Restaurante Las Tejas
 * Estructura por categorías con platos, alérgenos y precios (placeholder).
 * Fuente: carta actualizada con información de alérgenos.
 */

export type AllergenId =
  | 'pescado'
  | 'crustaceos'
  | 'moluscos'
  | 'frutos_secos'
  | 'lacteos'
  | 'huevo'
  | 'gluten'
  | 'mostaza'
  | 'soja'
  | 'sulfitos';

export interface Dish {
  id: string;
  name: string;
  description?: string;
  allergens: AllergenId[];
  price?: number; // TODO: rellenar precios si se desea mostrar
}

export interface MenuCategory {
  id: string;
  name: string;
  dishes: Dish[];
}

const allergenList: AllergenId[] = [
  'pescado',
  'crustaceos',
  'moluscos',
  'frutos_secos',
  'lacteos',
  'huevo',
  'gluten',
  'mostaza',
  'soja',
  'sulfitos',
];

export const ALLERGEN_LABELS: Record<AllergenId, string> = {
  pescado: 'Pescado',
  crustaceos: 'Crustáceos',
  moluscos: 'Moluscos',
  frutos_secos: 'Frutos secos',
  lacteos: 'Lácteos',
  huevo: 'Huevo',
  gluten: 'Gluten',
  mostaza: 'Mostaza',
  soja: 'Soja',
  sulfitos: 'Sulfitos',
};

function dish(id: string, name: string, allergens: AllergenId[] = [], description?: string, price?: number): Dish {
  return { id, name, allergens, description, price };
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'para-comenzar',
    name: 'Para Comenzar',
    dishes: [
      dish('gambas-plancha', 'Gambas a la Plancha', ['crustaceos']),
      dish('gambas-ajillo', 'Gambas al ajillo', ['crustaceos']),
      dish('gulas-ajillo', 'Gulas al ajillo', ['pescado', 'moluscos', 'crustaceos', 'frutos_secos', 'lacteos', 'huevo', 'gluten']),
      dish('almejas-marinera', 'Almejas a la marinera', ['moluscos']),
      dish('ventresca-piquillo', 'Ventresca de Bonito y pimientos del piquillo', ['pescado']),
      dish('pulpo-gallega', 'Pulpo a la Gallega', ['pescado']),
      dish('sepia-plancha', 'Sepia a la Plancha', ['moluscos']),
      dish('calamares-romana', 'Calamares a la romana', ['moluscos', 'frutos_secos', 'huevo', 'gluten']),
      dish('combinado-ibericos', 'Combinado de Ibéricos', ['frutos_secos']),
      dish('jamon-iberico', 'Jamón Ibérico', []),
      dish('lomo-iberico', 'Lomo Ibérico', []),
      dish('cecina-asturiana', 'Cecina Asturiana', []),
      dish('queso-curado', 'Queso curado', ['frutos_secos', 'lacteos']),
      dish('lacon-gallega', 'Lacón a la Gallega', []),
      dish('mollejas-plancha', 'Mollejas a la Plancha', []),
      dish('croquetas-jamon', 'Croquetas caseras "de Jamón"', ['frutos_secos', 'lacteos', 'huevo', 'gluten']),
      dish('boquerones-fritos', 'Boquerones fritos', ['pescado', 'gluten']),
      dish('huevos-rotos-jamon', 'Huevos rotos con Jamón', ['frutos_secos', 'huevo']),
      dish('oreja-plancha', 'Oreja a la Plancha', []),
      dish('chorizo-plancha', 'Chorizo a la plancha', []),
      dish('morcilla-plancha', 'Morcilla a la plancha', []),
      dish('revuelto-morcilla', 'Revuelto de morcilla', ['huevo']),
      dish('revuelto-setas-gambas', 'Revuelto de setas y gambas', ['crustaceos', 'huevo']),
      dish('revuelto-ajetes-gambas', 'Revuelto de ajetes y gambas', ['crustaceos', 'huevo']),
      dish('revuelto-gulas', 'Revuelto de gulas', ['pescado', 'moluscos', 'huevo', 'gluten']),
      dish('ensaladilla-rusa', 'Ensaladilla Rusa', ['pescado', 'frutos_secos', 'huevo']),
      dish('patatas-bravas', 'Patatas (Bravas o Ali-oli o Bravioli)', ['frutos_secos', 'huevo', 'mostaza']),
      dish('patatas-cabrales', 'Patatas al Cabrales', ['frutos_secos', 'lacteos']),
    ],
  },
  {
    id: 'sopas-verduras',
    name: 'Sopas y verduras',
    dishes: [
      dish('sopa-fideos', 'Sopa de fideos', ['pescado', 'frutos_secos', 'lacteos', 'huevo', 'gluten']),
      dish('judias-jamon', 'Judías verdes con Jamón', []),
      dish('alcachofas-jamon', 'Alcachofas con Jamón', []),
      dish('ensalada-mixta', 'Ensalada Mixta (1 persona)', []),
      dish('esparragos-mayonesa', 'Espárragos con Mayonesa', ['frutos_secos', 'huevo']),
    ],
  },
  {
    id: 'pescados',
    name: 'Pescados',
    dishes: [
      dish('bacalao-ajillo', 'Lomos de Bacalao al ajillo', ['pescado']),
      dish('merluza-plancha', 'Merluza a la plancha', ['pescado']),
      dish('merluza-romana', 'Merluza a la Romana', ['pescado', 'frutos_secos', 'huevo', 'gluten']),
      dish('merluza-vasca', 'Merluza a la Vasca', ['pescado', 'moluscos', 'frutos_secos']),
      dish('emperador-plancha', 'Emperador a la plancha', ['pescado']),
      dish('salmon-plancha', 'Salmón a la plancha', ['pescado']),
      dish('lubina-espalda', 'Lubina a la espalda', ['pescado']),
      dish('bonito-tomate', 'Bonito con tomate', ['pescado', 'frutos_secos', 'huevo']),
    ],
  },
  {
    id: 'carnes-asados',
    name: 'Carnes y Asados',
    dishes: [
      dish('cachopo-las-tejas', 'Cachopo de ternera "Las Tejas"', ['frutos_secos', 'lacteos', 'soja']),
      dish('solomillo-plancha', 'Solomillo de ternera a la Plancha', []),
      dish('chuleton-las-tejas', 'Chuletón de ternera "Las Tejas"', []),
      dish('pierna-lechal', 'Pierna o paletilla de lechal asada', []),
      dish('chuletillas-lechal', 'Chuletillas de lechal', []),
      dish('entrecot', 'Entrecot de ternera', []),
      dish('bistec', 'Bistec de ternera', []),
      dish('escalope-ternera', 'Escalope de ternera', ['frutos_secos', 'huevo', 'gluten']),
      dish('jamon-asado', 'Jamón asado', []),
      dish('medio-pollo-asado', '1/2 Pollo asado', ['frutos_secos', 'sulfitos']),
    ],
  },
];

export const MENU_NOTE = 'No se sirven medias raciones. Disculpen las molestias.';

export const ALLERGEN_IDS = allergenList;
