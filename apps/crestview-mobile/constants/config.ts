/**
 * Church Center / website URLs for the Crestview mobile shell.
 *
 * Backend is Planning Center Church Center (not a custom API).
 * Set EXPO_PUBLIC_CHURCH_CENTER_URL to the Canton org root.
 *
 * IMPORTANT, CONFIRM BEFORE SHIPPING:
 * https://crestviewbaptist.churchcenter.com currently belongs to a different
 * church: Crestview Baptist Church in Griffin, GA (1670 North Expressway).
 * The Canton, NC church does not have a publicly discoverable Church Center
 * site yet. Point EXPO_PUBLIC_CHURCH_CENTER_URL at the Canton org once the
 * church office confirms the Planning Center organization.
 */
const DEFAULT_CHURCH_CENTER_URL =
  'https://crestviewbaptist.churchcenter.com';

function trimSlash(url: string): string {
  return url.replace(/\/+$/, '');
}

const churchCenterRoot = trimSlash(
  process.env.EXPO_PUBLIC_CHURCH_CENTER_URL?.trim() ||
    DEFAULT_CHURCH_CENTER_URL,
);

export const config = {
  churchName: 'Crestview Baptist Church',
  shortName: 'Crestview',
  tagline: 'A welcoming, Christ-centered community in Canton, NC',
  websiteUrl: 'https://crestviewcanton.com',
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
  /**
   * Paths are the ones Church Center serves for this org. `/registrations`
   * redirects to `/registrations/events`, so link the final path directly.
   */
  churchCenter: {
    home: `${churchCenterRoot}/home`,
    calendar: `${churchCenterRoot}/calendar`,
    groups: `${churchCenterRoot}/groups`,
    registrations: `${churchCenterRoot}/registrations/events`,
    directory: `${churchCenterRoot}/directory`,
    login: `${churchCenterRoot}/login`,
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
