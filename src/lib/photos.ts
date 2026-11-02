/**
 * Unique photo registry for Crestview.
 * Rule: each `src` appears on exactly one page/placement. Never reuse.
 * Prefer a non-photo PageHero over repeating an asset.
 */

export type PhotoAsset = {
  src: string;
  alt: string;
  /** Single owner page path or placement id */
  owner: string;
};

export const photos = {
  /** Home hero only */
  campus: {
    src: "/images/social/campus-entrance.jpg",
    alt: "Crestview Baptist Church entrance and sign on Pisgah Drive",
    owner: "home-hero",
  },
  /** Home welcome section */
  fellowship: {
    src: "/images/social/fb-serve-5.jpg",
    alt: "Crestview church family gathered in fellowship",
    owner: "home-welcome",
  },
  /** Home life grid */
  breakfast: {
    src: "/images/social/fb-serve-2.jpg",
    alt: "Fellowship breakfast at Crestview Baptist Church",
    owner: "home-life-1",
  },
  buffet: {
    src: "/images/social/fb-serve-3.jpg",
    alt: "Breakfast buffet prepared for a Crestview gathering",
    owner: "home-life-2",
  },
  kitchen: {
    src: "/images/social/fb-serve-4.jpg",
    alt: "Volunteers preparing food in the Crestview kitchen",
    owner: "home-life-3",
  },
  /** Serve page */
  community: {
    src: "/images/social/fb-serve-1.jpg",
    alt: "Crestview members connecting in the community",
    owner: "serve",
  },
  /** Sermons & Media */
  worship: {
    src: "/images/gallery/worship.jpg",
    alt: "Sunday worship at Crestview Baptist Church",
    owner: "sermons-media",
  },
  /** Student ministry */
  youthHeritage: {
    src: "/images/gallery/youth-1965.jpg",
    alt: "Crestview youth through the years",
    owner: "student-ministry",
  },
  /** Children’s ministry */
  kidsHeritage: {
    src: "/images/gallery/vbs-1967.jpg",
    alt: "Crestview children’s ministry heritage",
    owner: "childrens-ministry",
  },
  /** Adult ministry */
  seniors: {
    src: "/images/ministries/senior-adults.jpg",
    alt: "Joyful Hearts senior adults at Crestview",
    owner: "adult-ministry-1",
  },
  seniors2: {
    src: "/images/ministries/senior-adults-2.jpg",
    alt: "Senior adult fellowship at Crestview",
    owner: "adult-ministry-2",
  },
  /** About */
  history: {
    src: "/images/gallery/first-building.jpg",
    alt: "Crestview’s first church building",
    owner: "about",
  },
  /** Missions */
  mission: {
    src: "/images/mission.jpg",
    alt: "Crestview missions and outreach",
    owner: "missions",
  },
} as const satisfies Record<string, PhotoAsset>;

export type PhotoKey = keyof typeof photos;

/** Historical frames reserved for the Photo Gallery page only. */
export const galleryOnly = [
  {
    src: "/images/gallery/march-1962.jpg",
    alt: "Crestview congregation march, 1962",
    caption: "March 1962",
  },
  {
    src: "/images/gallery/groundbreaking-1963.jpg",
    alt: "Groundbreaking for Crestview’s building, 1963",
    caption: "Groundbreaking, 1963",
  },
  {
    src: "/images/gallery/sanctuary-1964.jpg",
    alt: "Crestview sanctuary, 1964",
    caption: "Sanctuary, 1964",
  },
  {
    src: "/images/gallery/first-pastor.jpg",
    alt: "Crestview’s first pastor",
    caption: "First pastor",
  },
  {
    src: "/images/gallery/martha-viola.jpg",
    alt: "Martha and Viola",
    caption: "Martha & Viola",
  },
  {
    src: "/images/gallery/osborne-farm-1946.jpg",
    alt: "Osborne farm, 1946",
    caption: "Osborne farm, 1946",
  },
] as const;
