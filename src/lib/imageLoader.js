const ALLOWED_IMAGE_DOMAINS = [
  'media.base44.com',
  'ui-avatars.com',
];

const IMAGE_CACHE = new Map();

export const isValidImageUrl = (url) => {
  try {
    const urlObj = new URL(url);
    return ALLOWED_IMAGE_DOMAINS.some(domain => urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`));
  } catch {
    return false;
  }
};

export const getSecureImageUrl = (url, fallback = null) => {
  if (!url || typeof url !== 'string') {
    return fallback;
  }

  if (IMAGE_CACHE.has(url)) {
    return IMAGE_CACHE.get(url);
  }

  if (!isValidImageUrl(url)) {
    console.warn(`Blocked image from untrusted domain: ${url}`);
    return fallback;
  }

  IMAGE_CACHE.set(url, url);
  return url;
};

export const createFallbackImageUrl = (text = 'No Image', width = 400, height = 400) => {
  const encoded = encodeURIComponent(text);
  return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"%3E%3Crect fill="%23f0f0f0" width="${width}" height="${height}"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E${encoded}%3C/text%3E%3C/svg%3E`;
};

export const handleImageError = (e, fallbackText = 'Image Error') => {
  if (e.target.dataset.errorHandled) return;
  e.target.dataset.errorHandled = 'true';
  e.target.onerror = null;
  e.target.src = createFallbackImageUrl(fallbackText);
};
