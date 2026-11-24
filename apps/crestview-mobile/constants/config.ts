/**
 * Site and contact URLs for the Crestview mobile app.
 *
 * The app has no backend of its own: the Calendar, Groups, and Classes tabs
 * load the church's Church Center pages in an in-app WebView.
 */
const DEFAULT_SITE_URL = 'https://crestviewcanton.com';
const DEFAULT_CHURCH_CENTER_URL =
  'https://crestviewbaptistchurch.churchcenter.com';

function trimSlash(url: string): string {
  return url.replace(/\/+$/, '');
}

const siteUrl = trimSlash(
  process.env.EXPO_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL,
);

const churchCenterUrl = trimSlash(
  process.env.EXPO_PUBLIC_CHURCH_CENTER_URL?.trim() ||
    DEFAULT_CHURCH_CENTER_URL,
);

export const config = {
  churchName: 'Crestview Baptist Church',
  shortName: 'Crestview',
  tagline: 'A welcoming, Christ-centered community in Canton, NC',
  websiteUrl: siteUrl,
  /**
   * The church's Church Center org, where staff publish the calendar, groups,
   * and registrations the app tabs open.
   */
  churchCenterUrl,
  pages: {
    calendar: `${churchCenterUrl}/calendar`,
    groups: `${churchCenterUrl}/groups`,
    classes: `${churchCenterUrl}/registrations`,
  },
  giveUrl:
    process.env.EXPO_PUBLIC_GIVE_URL?.trim() ||
    'https://secure.myvanco.com/L-ZB2Z/home',
  liveUrl:
    process.env.EXPO_PUBLIC_LIVE_URL?.trim() || `${siteUrl}/livestream`,
  staffUrl:
    process.env.EXPO_PUBLIC_STAFF_URL?.trim() || `${siteUrl}/our-staff`,
  bearPixel: {
    name: 'Bear Pixel Media',
    url: 'https://bearpixelmedia.com',
  },
  address: '3258 Pisgah Drive, Canton, NC 28716',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=3258+Pisgah+Drive,+Canton,+NC+28716',
  phone: '(828) 648-1110',
  phoneTel: '+18286481110',
  email: 'crestviewcanton@gmail.com',
  schedule: [
    {
      day: 'Sunday',
      items: [
        { label: 'Life Groups', time: '9:30 AM' },
        { label: 'Morning Worship', time: '10:45 AM' },
        { label: 'SFU Groups', time: '6:00 PM' },
      ],
    },
    {
      day: 'Wednesday',
      items: [
        { label: 'Midweek Prayer', time: '7:00 PM' },
        { label: 'God’s Kidz', time: '7:00 PM' },
        { label: 'Youth', time: '7:00 PM' },
      ],
    },
  ],
  social: {
    facebook: 'https://www.facebook.com/crestviewcanton/',
    instagram: 'https://www.instagram.com/crestviewcanton/',
    youtube: 'https://www.youtube.com/@CrestviewCanton',
  },
} as const;

export type Config = typeof config;
