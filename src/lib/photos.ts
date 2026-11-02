/** Shared photo paths for interior pages (prefer social + ministry assets). */
export const photos = {
  campus: {
    src: "/images/social/campus-entrance.jpg",
    alt: "Crestview Baptist Church entrance and sign on Pisgah Drive",
  },
  fellowship: {
    src: "/images/social/fb-serve-5.jpg",
    alt: "Crestview church family gathered in fellowship",
  },
  breakfast: {
    src: "/images/social/fb-serve-2.jpg",
    alt: "Fellowship breakfast at Crestview Baptist Church",
  },
  buffet: {
    src: "/images/social/fb-serve-3.jpg",
    alt: "Breakfast buffet prepared for a Crestview gathering",
  },
  kitchen: {
    src: "/images/social/fb-serve-4.jpg",
    alt: "Volunteers preparing food in the Crestview kitchen",
  },
  community: {
    src: "/images/social/fb-serve-1.jpg",
    alt: "Crestview members connecting in the community",
  },
  worship: {
    src: "/images/gallery/worship.jpg",
    alt: "Sunday worship at Crestview Baptist Church",
  },
  youthHeritage: {
    src: "/images/gallery/youth-1965.jpg",
    alt: "Crestview youth through the years",
  },
  kidsHeritage: {
    src: "/images/gallery/vbs-1967.jpg",
    alt: "Crestview children’s ministry heritage",
  },
  seniors: {
    src: "/images/ministries/senior-adults.jpg",
    alt: "Joyful Hearts senior adults at Crestview",
  },
  seniors2: {
    src: "/images/ministries/senior-adults-2.jpg",
    alt: "Senior adult fellowship at Crestview",
  },
  history: {
    src: "/images/gallery/first-building.jpg",
    alt: "Crestview’s first church building",
  },
  pastor: {
    src: "/staff/daniel-page.jpg",
    alt: "Dr. Daniel Page, Senior Pastor",
  },
} as const;

export type PhotoKey = keyof typeof photos;
