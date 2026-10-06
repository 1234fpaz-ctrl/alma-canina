import settings from '../data/settings.json';

export { settings };

export const NAV = [
  { label: 'Inicio', href: '/' },
  { label: 'Alma Canina', href: '/alma-canina/' },
  { label: 'Experiencias', href: '/experiencias/' },
  { label: 'Aprende', href: '/aprende/' },
  { label: 'Legislación', href: '/legislacion/' },
  { label: 'Comunidad', href: '/comunidad/' },
  { label: 'Contáctanos', href: '/contacto/' },
] as const;

export const EXPERIENCE_CATEGORIES: Record<string, { label: string; color: string; icon: string }> = {
  educacion: { label: 'Educación', color: 'bg-salvia-200 text-bosque-900', icon: 'spark' },
  'tutor-perro': { label: 'Tutor + perro', color: 'bg-arena-200 text-bosque-900', icon: 'heart' },
  cursos: { label: 'Formación', color: 'bg-cielo-200 text-bosque-900', icon: 'book' },
  spa: { label: 'Spa & Grooming', color: 'bg-terracota-300/50 text-bosque-900', icon: 'drop' },
  bienestar: { label: 'Bienestar', color: 'bg-salvia-100 text-bosque-900', icon: 'leaf' },
  eventos: { label: 'Comunidad', color: 'bg-crema text-bosque-900', icon: 'sun' },
};

export const ARTICLE_CATEGORIES: Record<string, string> = {
  bienestar: 'Bienestar animal',
  comportamiento: 'Comportamiento',
  'primeros-auxilios': 'Primeros auxilios',
  convivencia: 'Convivencia',
  'educacion-positiva': 'Educación positiva',
  cuidados: 'Cuidados',
  'tenencia-responsable': 'Tenencia responsable',
  legislacion: 'Legislación animal',
  actividades: 'Actividades con tu perro',
};

export const LAW_TAGS: Record<string, string> = {
  'animales-de-compania': 'Animales de compañía',
  'maltrato-animal': 'Maltrato animal',
  educacion: 'Educación',
  'fauna-silvestre': 'Fauna silvestre',
  'servicios-para-animales': 'Servicios para animales',
  esterilizacion: 'Esterilización',
  bienestar: 'Bienestar',
  'propiedad-horizontal': 'Propiedad horizontal',
  'familia-multiespecie': 'Familia multiespecie',
  espectaculos: 'Espectáculos',
  proteccionistas: 'Proteccionistas',
};

export const BILL_STAGE_LABELS: Record<string, string> = {
  radicacion: 'Radicación',
  comision: 'Comisión',
  plenaria: 'Plenaria',
  'otra-camara': 'Otra Cámara',
  conciliacion: 'Conciliación',
  sancion: 'Sanción',
};

export const EVENT_STATUS: Record<string, { label: string; cls: string }> = {
  proximamente: { label: 'Próximamente', cls: 'bg-cielo-200 text-cielo-700' },
  abiertas: { label: 'Inscripciones abiertas', cls: 'bg-salvia-200 text-bosque-900' },
  agotado: { label: 'Cupos agotados', cls: 'bg-terracota-300/60 text-terracota-700' },
  finalizado: { label: 'Finalizado', cls: 'bg-arena-200 text-tinta-suave' },
};

export const LEGAL_DISCLAIMER =
  'Este contenido tiene fines pedagógicos e informativos y no sustituye asesoría jurídica profesional.';

export function formatDate(d: Date, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }) {
  return new Intl.DateTimeFormat('es-CO', { timeZone: 'UTC', ...opts }).format(d);
}

export function whatsappLink(message?: string) {
  const n = (settings.contact.whatsapp || '').replace(/[^\d]/g, '');
  if (!n) return '';
  const text = encodeURIComponent(message ?? settings.contact.whatsappMessage ?? '');
  return `https://wa.me/${n}${text ? `?text=${text}` : ''}`;
}

export const SOCIAL_LABELS: Record<string, string> = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  tiktok: 'TikTok',
  youtube: 'YouTube',
  linkedin: 'LinkedIn',
};

export function socialLinks() {
  return Object.entries(settings.social)
    .filter(([, url]) => typeof url === 'string' && url.trim() !== '')
    .map(([key, url]) => ({ key, label: SOCIAL_LABELS[key] ?? key, url: url as string }));
}

/**
 * Imágenes: las fotos se suben desde /admin a /public/images/uploads.
 * En producción se sirven optimizadas con Netlify Image CDN (WebP/AVIF, tamaños responsivos).
 */
const isUnsplash = (src: string) => /^https:\/\/(images|plus)\.unsplash\.com\//.test(src);
const unsplashUrl = (src: string, width: number) => {
  const base = src.split('?')[0];
  return `${base}?auto=format&fit=crop&w=${width}&q=75`;
};

export function imgSrc(src: string, width: number) {
  if (!src) return '';
  if (isUnsplash(src)) return unsplashUrl(src, width);
  if (import.meta.env.PROD && src.startsWith('/')) {
    return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&q=78`;
  }
  return src;
}

export function imgSrcSet(src: string, widths = [480, 768, 1100, 1600, 2200]) {
  if (!src) return undefined;
  if (isUnsplash(src)) return widths.map((w) => `${unsplashUrl(src, w)} ${w}w`).join(', ');
  if (!import.meta.env.PROD || !src.startsWith('/')) return undefined;
  return widths.map((w) => `${imgSrc(src, w)} ${w}w`).join(', ');
}

/** Número de WhatsApp en formato legible: 573001234567 → +57 300 123 4567 */
export function whatsappDisplay() {
  const n = (settings.contact.whatsapp || '').replace(/[^\d]/g, '');
  if (!n) return '';
  const m = n.match(/^57(\d{3})(\d{3})(\d{4})$/);
  return m ? `+57 ${m[1]} ${m[2]} ${m[3]}` : `+${n}`;
}
