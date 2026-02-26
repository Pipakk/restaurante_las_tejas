/**
 * Información del restaurante para la web
 * TODO: completar dirección exacta, horarios, email y link de reservas si existen.
 */

export interface SocialLink {
  name: string;
  url: string;
  icon: 'instagram' | 'facebook' | 'tiktok' | 'google';
}

export const SITE = {
  name: 'Restaurante Las Tejas',
  tagline: 'En Alcorcón desde 1978. Familiar y acogedor.',
  description: 'Restaurante de cocina tradicional en Alcorcón. Cachopo, pescados, carnes a la brasa y ambiente familiar desde 1978.',
  phone: '916108007',
  whatsapp: '34916108007', // sin + para enlace wa.me
  email: 'TODO@ejemplo.com', // TODO: reemplazar por email real
  address: 'Alcorcón (ver mapa)',
  googleMapsUrl: 'https://www.google.com/maps/place/Meson+Restaurante+Las+Tejas,+desde+1978/@40.3494991,-3.8169708,16z/data=!4m12!1m2!2m1!1sRestaurantes!3m8!1s0xd418937bb91f4bd:0xc9cbb38e603e65fe!8m2!3d40.3494752!4d-3.8169365!9m1!1b1!15sCgxSZXN0YXVyYW50ZXNaDiIMcmVzdGF1cmFudGVzkgEKcmVzdGF1cmFudJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOU2FuQnRUMmhSUlJBQuABAPoBBAgAEDc!16s%2Fg%2F1tdh54y2?entry=ttu',
  // Coordenadas para el iframe del mapa
  googleMapsCoords: { lat: 40.3494752, lng: -3.8169365 },
  // Horarios: TODO reemplazar por horarios reales
  schedule: {
    weekdays: 'TODO: ej. Lunes a Domingo 13:00 - 16:30, 20:30 - 23:30',
    closed: 'TODO: ej. Cerrado los martes (opcional)',
  },
  // Link a plataforma de reservas; si no hay, se usará teléfono/WhatsApp
  reservationUrl: null as string | null, // ej. 'https://...' o null
  reservationPhone: '916108007',
  logo: '/logo.png', // colocar logo en public/logo.png
  social: [
    { name: 'Instagram', url: 'https://www.instagram.com/lastejasalcorcon/?hl=es', icon: 'instagram' as const },
    { name: 'Facebook', url: 'https://www.facebook.com/p/Restaurante-Las-Tejas-Alcorcon-100063497410945/?locale=es_ES', icon: 'facebook' as const },
  ] as SocialLink[],
  // Galería: fotos propias del restaurante (optimizadas para HD)
  galleryImages: [
    { src: '/images/galeria-mejillones.png', alt: 'Mejillones al vapor con limón' },
    { src: '/images/galeria-cachopo.png', alt: 'Cachopo de ternera Las Tejas con pimientos y patatas' },
    { src: '/images/galeria-interior.png', alt: 'Interior del Mesón Las Tejas, barra y mesas' },
    { src: '/images/galeria-croquetas.png', alt: 'Croquetas caseras de jamón' },
    { src: '/images/galeria-flan.png', alt: 'Flan de caramelo casero' },
  ],
  // Hero: video del filete sazonándose al fuego (horizontal, se muestra entero).
  heroVideo: 'https://assets.mixkit.co/videos/45719/45719-720.mp4' as string | null,
  // Poster/fallback cuando no hay video o si el video no carga
  heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=90',
  heroImageFallback: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=90',
  highlights: [
    { title: 'Cachopo "Las Tejas"', description: 'Nuestro plato estrella, elaborado con ternera y queso de la casa.', icon: '🍽️' },
    { title: 'Producto fresco', description: 'Pescados y carnes de primera calidad, cocinados a la plancha y al horno.', icon: '🥩' },
    { title: 'Desde 1978', description: 'Más de cuatro décadas ofreciendo cocina tradicional y trato familiar.', icon: '🏠' },
    { title: 'Reservas', description: 'Llama o escríbenos por WhatsApp para asegurar tu mesa.', icon: '📞' },
  ],
  faq: [
    { question: '¿Puedo reservar mesa?', answer: 'Sí. Puedes llamarnos al 916 108 007 o enviarnos un mensaje por WhatsApp para reservar.' },
    { question: '¿Tenéis información de alérgenos?', answer: 'Sí. Nuestra carta incluye los alérgenos de cada plato. Si tienes alguna alergia, avisa al camarero.' },
    { question: '¿Servís medias raciones?', answer: 'No servimos medias raciones. Disculpen las molestias.' },
    { question: '¿Dónde estáis?', answer: 'Estamos en Alcorcón. Puedes ver la ubicación exacta en la sección de contacto y abrir Google Maps.' },
    { question: '¿Qué horario tenéis?', answer: 'Consulte la sección de ubicación y horarios en esta web o llámanos para confirmar.' },
  ],
};
