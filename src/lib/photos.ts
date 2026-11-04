/**
 * Unique photo registry for Crestview.
 * Rule: each `src` appears on exactly one page/placement. Never reuse.
 * Prefer a non-photo treatment over repeating an asset.
 * Home pathways grid uses social assets only (FB / campus scrapes).
 */

export type PhotoAsset = {
  src: string;
  alt: string;
  /** Single owner page path or placement id */
  owner: string;
  /** Optional Tailwind object-position class when object-cover would crop the subject */
  objectClass?: string;
};

export const photos = {
  /** Home hero only (YouTube campus exterior still, full-bleed) */
  campus: {
    src: "/images/social/campus-hero.jpg",
    alt: "Crestview Baptist Church entrance and sign on Pisgah Drive",
    owner: "home-hero",
  },
  /** Home welcome section */
  fellowship: {
    src: "/images/ministries/senior-adults.jpg",
    alt: "Adults gathered in fellowship at Crestview",
    owner: "home-welcome",
  },
  /** Home pathways grid (unique cells; social preferred) */
  pathwayWorship: {
    src: "/images/gallery/worship.jpg",
    alt: "Sunday worship at Crestview Baptist Church",
    owner: "home-pathway-worship",
    // Tall portrait; keep the pastor’s head in the 16/10 card crop
    objectClass: "object-top origin-top",
  },
  pathwayLifeGroups: {
    src: "/images/social/fb-serve-5.jpg",
    alt: "Crestview church family gathered in fellowship",
    owner: "home-pathway-life-groups",
  },
  pathwayEvents: {
    src: "/images/social/fb-serve-2.jpg",
    alt: "Fellowship breakfast during a Crestview gathering",
    owner: "home-pathway-events",
  },
  pathwayServe: {
    src: "/images/social/fb-serve-1.jpg",
    alt: "Crestview members serving in the community",
    owner: "home-pathway-serve",
  },
  pathwayStudent: {
    src: "/images/social/fb-serve-4.jpg",
    alt: "Volunteers preparing food in the Crestview kitchen",
    owner: "home-pathway-student",
  },
  pathwayPrayer: {
    src: "/images/social/fb-serve-3.jpg",
    alt: "Shared table fellowship at Crestview",
    owner: "home-pathway-prayer",
  },
  /** Adult ministry */
  seniors2: {
    src: "/images/ministries/senior-adults-2.jpg",
    alt: "Senior adult fellowship at Crestview",
    owner: "adult-ministry",
  },
  /** Children’s ministry */
  kidsHeritage: {
    src: "/images/gallery/vbs-1967.jpg",
    alt: "Crestview children’s ministry heritage",
    owner: "childrens-ministry",
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
  {
    src: "/images/gallery/youth-1965.jpg",
    alt: "Crestview youth through the years",
    caption: "Youth, 1965",
  },
] as const;
