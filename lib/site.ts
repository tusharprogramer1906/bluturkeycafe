/** Canonical production origin — use for JSON-LD and absolute URLs */
export const SITE_URL = 'https://bluturkeycafe.com' as const;

export const DEFAULT_OG_IMAGE_PATH = '/images/blu-turkey-cafe-seating-area-delhi.webp' as const;
export const LOGO_PATH = '/images/blu-turkey-logo.png' as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

/** Prevent `</script>` injection when embedding JSON-LD */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
