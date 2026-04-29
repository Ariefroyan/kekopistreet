// Application-wide constants
export const APP_CONFIG = {
  name: 'KE.KOPI STREET',
  tagline: 'Kopi Kami Digiling, Bukan Digunting',
  description: 'Kopi lokal berkualitas, harga merakyat mulai Rp 3.000',
  location: {
    address: 'Jl. Selaparang No.60, Mayura, Cakranegara',
    city: 'Kota Mataram',
    province: 'Nusa Tenggara Barat',
    postalCode: '83239',
    coordinates: {
      lat: -8.5823,
      lng: 116.1123,
    },
  },
  contact: {
    phone: '0877-6565-5654',
    email: 'kekopistreet@gmail.com',
  },
  social: {
    instagram: 'https://instagram.com/kekopi_street',
    tiktok: 'https://tiktok.com/@kekopi.street',
  },
  hours: {
    open: '08:00',
    close: '22:00',
    timezone: 'WITA',
    daysOpen: 'Setiap Hari',
  },
};

export const ROUTES = {
  HOME: '/',
  MENU: '/menu',
  BEANS: '/beans',
  BEAN_DETAIL: '/bean/:beanId',
};

export const ANIMATION_DELAYS = {
  FAST: 0.1,
  NORMAL: 0.3,
  SLOW: 0.5,
};

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
};

export const IMAGE_DOMAINS = {
  BASE44: 'media.base44.com',
  AVATARS: 'ui-avatars.com',
};
