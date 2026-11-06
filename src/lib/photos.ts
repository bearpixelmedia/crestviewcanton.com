/**
 * Unique photo registry for Crestview.
 * Rule: each `src` appears on exactly one page/placement. Never reuse.
 * Prefer a non-photo treatment over repeating an asset.
 * Home pathways grid uses ministry / campus photos from Downloads.
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
  /** Home welcome / mission section */
  fellowship: {
    src: "/images/general/mission-values.jpg",
    alt: "Crestview congregation gathered in the sanctuary",
    owner: "home-welcome",
  },
  /** Home pathways grid (unique cells) */
  pathwayWorship: {
    src: "/images/worship/worship-team.jpg",
    alt: "Crestview worship team singing together on Sunday",
    owner: "home-pathway-worship",
    objectClass: "object-center",
  },
  pathwayLifeGroups: {
    src: "/images/general/sanctuary-fellowship.jpg",
    alt: "Crestview congregation gathered in the sanctuary before worship",
    owner: "home-pathway-life-groups",
    objectClass: "",
  },
  pathwayEvents: {
    src: "/images/general/kids-event.jpg",
    alt: "Families gathered for a kids event in the Crestview sanctuary",
    owner: "home-pathway-events",
    objectClass: "",
  },
  pathwayServe: {
    src: "/images/general/labor-day-float.jpg",
    alt: "Crestview Baptist Church Labor Day parade float with kids and leaders",
    owner: "home-pathway-serve",
    objectClass: "object-center",
  },
  pathwayStudent: {
    src: "/images/student/youth-group-neon.jpg",
    alt: "Crestview Youth group together on stage in neon event shirts",
    owner: "home-pathway-student",
    objectClass: "",
  },
  pathwayPrayer: {
    src: "/images/worship/worship-prayer-circle.jpg",
    alt: "Crestview people praying together in a circle",
    owner: "home-pathway-prayer",
    objectClass: "",
  },
  /** Worship ministry feature (paper section side photo) */
  worshipFeature: {
    src: "/images/worship/worship-congregation.jpg",
    alt: "Crestview Worship leading Sunday morning from the stage",
    owner: "worship-ministry-feature",
    objectClass: "object-center",
  },
  /**
   * Worship leadership (Anita).
   * Intentional reuse of her Our Staff headshot so her identity matches /our-staff.
   */
  anitaLeading: {
    src: "/staff/anita-diaz.jpg",
    alt: "Anita Diaz, Music Director / Worship Leader",
    owner: "worship-ministry-leadership",
    objectClass: "object-top",
  },
  /** Student ministry gallery */
  studentColorRun: {
    src: "/images/student/youth-color-run.jpg",
    alt: "Crestview Youth at a color run event",
    owner: "student-ministry-gallery-1",
  },
  studentWorship: {
    src: "/images/student/youth-worship.jpg",
    alt: "Crestview Youth worshiping together",
    owner: "student-ministry-gallery-2",
  },
  studentBibleStudy: {
    src: "/images/student/youth-bible-study.jpg",
    alt: "Crestview Youth gathered for Bible study",
    owner: "student-ministry-gallery-3",
  },
  studentFriends: {
    src: "/images/student/youth-friends.jpg",
    alt: "Crestview Youth friends hanging out together",
    owner: "student-ministry-gallery-4",
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
