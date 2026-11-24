import { brand } from '@/constants/Colors';

/**
 * Crestview design tokens — kept in step with the website (`src/app/globals.css`).
 * Evergreen palette, Cormorant Garamond display, Manrope body, square-ish edges.
 */
export const colors = {
  ...brand,
  /** Body copy on paper */
  muted: '#4a5c54',
  /** Body copy on pine / forest */
  mutedOnDark: 'rgba(183, 201, 191, 0.84)',
  hairline: 'rgba(15, 42, 32, 0.12)',
  hairlineOnDark: 'rgba(183, 201, 191, 0.22)',
  scrim: 'rgba(7, 21, 16, 0.7)',
} as const;

export const fonts = {
  display: 'CormorantGaramond_600SemiBold',
  displayBold: 'CormorantGaramond_700Bold',
  body: 'Manrope_400Regular',
  medium: 'Manrope_500Medium',
  semibold: 'Manrope_600SemiBold',
} as const;

export const radius = {
  sm: 2,
  md: 4,
  pill: 999,
} as const;

export const layout = {
  gutter: 22,
  sectionY: 44,
  readingWidth: 560,
  /** Centered app column on tablets / web previews. */
  appWidth: 620,
} as const;

export const tracking = {
  eyebrow: 2.1,
  label: 1.2,
} as const;
