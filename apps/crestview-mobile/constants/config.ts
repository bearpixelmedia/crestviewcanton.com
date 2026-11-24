/**
 * Church Center / website URLs for the Crestview mobile shell.
 *
 * Backend is Planning Center Church Center (not a custom API).
 *
 * EXPO_PUBLIC_CHURCH_CENTER_URL is required on purpose and has no fallback.
 * The slug from the original brief, crestviewbaptist.churchcenter.com, belongs
 * to Crestview Baptist Church in Griffin, GA, so defaulting to it would quietly
 * show Canton members another church's events, groups, and directory. When the
 * variable is unset the app renders a setup screen instead of a WebView.
 */
const churchCenterRoot = (
  process.env.EXPO_PUBLIC_CHURCH_CENTER_URL?.trim() ?? ''
).replace(/\/+$/, '');

const churchCenterConfigured = churchCenterRoot.length > 0;

/** Absolute Church Center URL, or an empty string when the org is unset. */
function churchCenterUrl(path: string): string {
  return churchCenterConfigured ? `${churchCenterRoot}${path}` : '';
}

export const config = {
  churchName: 'Crestview Baptist Church',
  shortName: 'Crestview',
  tagline: 'A welcoming, Christ-centered community in Canton, NC',
  websiteUrl: 'https://crestviewcanton.com',
  privacyUrl: 'https://crestviewcanton.com/privacy',
  giveUrl:
    process.env.EXPO_PUBLIC_GIVE_URL?.trim() ||
    'https://secure.myvanco.com/L-ZB2Z/home',
  liveUrl:
    process.env.EXPO_PUBLIC_LIVE_URL?.trim() ||
    'https://crestviewcanton.com/livestream',
  staffUrl:
    process.env.EXPO_PUBLIC_STAFF_URL?.trim() ||
    'https://crestviewcanton.com/our-staff',
  churchCenterRoot,
  /** False when EXPO_PUBLIC_CHURCH_CENTER_URL is unset; screens show a setup message. */
  churchCenterConfigured,
  /**
   * Paths are the ones Church Center serves for this org. `/registrations`
   * redirects to `/registrations/events`, so link the final path directly.
   */
  churchCenter: {
    home: churchCenterUrl('/home'),
    calendar: churchCenterUrl('/calendar'),
    groups: churchCenterUrl('/groups'),
    registrations: churchCenterUrl('/registrations/events'),
    directory: churchCenterUrl('/directory'),
    login: churchCenterUrl('/login'),
  },
  bearPixel: {
    name: 'Bear Pixel Media',
    url: 'https://bearpixelmedia.com',
  },
  address: '3258 Pisgah Drive, Canton, NC 28716',
  phone: '(828) 648-1110',
  phoneTel: '+18286481110',
  email: 'CrestviewBaptistChurchNC@gmail.com',
} as const;

export type Config = typeof config;
