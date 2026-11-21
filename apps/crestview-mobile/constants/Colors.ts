/**
 * Crestview brand tokens mirrored from the website globals.css
 * (pine / paper evergreen palette).
 */
export const brand = {
  forest: '#071510',
  pine: '#0f2a20',
  canopy: '#1a4634',
  leaf: '#2f6b4f',
  mist: '#b7c9bf',
  fog: '#e7eef0',
  paper: '#f2f6f7',
  ink: '#0d1713',
  dawn: '#e28b6d',
  dawnDeep: '#c96a4c',
  gold: '#c9a85a',
  goldSoft: '#dfc88a',
  white: '#ffffff',
} as const;

const Colors = {
  light: {
    text: brand.ink,
    background: brand.paper,
    tint: brand.canopy,
    tabIconDefault: brand.mist,
    tabIconSelected: brand.canopy,
    card: brand.white,
    border: brand.fog,
    muted: '#4a5c54',
  },
  dark: {
    text: brand.fog,
    background: brand.forest,
    tint: brand.goldSoft,
    tabIconDefault: brand.mist,
    tabIconSelected: brand.goldSoft,
    card: brand.pine,
    border: brand.canopy,
    muted: brand.mist,
  },
} as const;

export default Colors;
