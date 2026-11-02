export const site = {
  name: "Crestview Baptist Church",
  shortName: "Crestview",
  tagline: "A welcoming, Christ-centered community in Canton, NC",
  url: "https://crestviewcanton.com",
  description:
    "Crestview Baptist Church — a welcoming, Christ-centered community in Canton, NC, dedicated to worship, discipleship, and service.",
  address: {
    street: "3258 Pisgah Drive",
    city: "Canton",
    region: "NC",
    postalCode: "28716",
    full: "3258 Pisgah Drive, Canton, NC 28716",
  },
  phone: "(828) 648-1110",
  phoneTel: "+18286481110",
  email: "crestviewcanton@gmail.com",
  pastorEmail: "pagebypage8@gmail.com",
  giveUrl: "https://secure.myvanco.com/L-ZB2Z/home",
  textToGive: "18285374412",
  textToGiveDisplay: "1 828 537 4412",
  schedule: {
    sunday: [
      { label: "Life Groups (Sunday School)", time: "9:30 AM" },
      { label: "Morning Worship", time: "10:45 AM" },
      { label: "SFU Groups for All Ages", time: "6:00 PM" },
    ],
    wednesday: [
      { label: "Midweek Prayer", time: "7:00 PM" },
      { label: "God’s Kidz", time: "7:00 PM" },
      { label: "Youth", time: "7:00 PM" },
    ],
  },
  social: {
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/",
  },
  officeHours: "Monday–Friday, 9:00 AM – 6:00 PM",
} as const;

/** Primary nav — labels from Elementor reference IA */
export const primaryNav = [
  { href: "/our-beliefs", label: "Our Beliefs" },
  { href: "/sermons-media", label: "Sermons & Media" },
  { href: "/give-online", label: "Give Online" },
  { href: "/resources", label: "Resources" },
  { href: "/frequently-asked-questions", label: "FAQ" },
] as const;

export const secondaryNav = [
  { href: "/plan-your-visit", label: "Plan Your Visit" },
  { href: "/about", label: "About" },
  { href: "/our-staff", label: "Our Staff" },
  { href: "/contact", label: "Contact" },
] as const;

export const staff = [
  {
    slug: "daniel-page",
    name: "Dr. Daniel Page",
    role: "Senior Pastor",
    photo: "/staff/daniel-page.jpg",
    bio: "Dr. Daniel Page has developed a growing love for God’s Word through years of preaching and teaching. His goal is to communicate God’s powerful Word with relevant application for today’s world. Crestview called him in 2009; he and his family relocated from Raleigh to begin as Senior Pastor in June 2009.",
  },
  {
    slug: "jarred-rathbone",
    name: "Jarred Rathbone",
    role: "Youth Pastor",
    photo: "/staff/jarred-rathbone.jpg",
    bio: "Jarred Rathbone is the Youth Pastor at Crestview Baptist Church. He is married to Amanda, and they have two sons, Jackson and Levi.",
    contact: "crestviewyouth3258@gmail.com · 828-371-1235",
  },
  {
    slug: "angie-watkins",
    name: "Angie Watkins",
    role: "Children’s Ministry Director",
    photo: "/staff/angie-watkins.jpg",
    bio: "Angie Watkins has a big heart for children. She volunteered in Crestview’s Children’s Ministry and directed VBS for more than 20 years before becoming Children’s Ministry Director in August 2021.",
    contact: "crestview4kidz@gmail.com",
  },
  {
    slug: "anita-diaz",
    name: "Anita Diaz",
    role: "Music Director / Worship Leader",
    photo: "/staff/anita-diaz.jpg",
    bio: "Anita Diaz is a native of Balsam, N.C., and a Western Carolina University music graduate. She has served as worship leader, music director, and pianist in Haywood County churches for many years.",
    contact: "crestviewworship2@gmail.com",
  },
  {
    slug: "sharon-bryson",
    name: "Sharon Bryson",
    role: "Administrative Assistant",
    photo: "/staff/sharon-bryson.jpg",
    bio: "Sharon Bryson serves as Crestview’s Administrative Assistant. A Haywood County native and long-term church member, she was called to serve at Crestview in 2011 after 20 years as an Application Developer.",
  },
  {
    slug: "tammie-beck",
    name: "Tammie Beck",
    role: "Custodian",
    photo: "/staff/tammie-beck.jpg",
    bio: "Tammie Beck serves as Crestview Baptist Church’s Custodian, keeping our facilities welcoming and ready for worship and ministry.",
  },
  {
    slug: "eddie-beck",
    name: "Eddie Beck",
    role: "Lawn Management",
    photo: "/staff/eddie-beck.jpg",
    bio: "Eddie Beck cares for the Crestview Baptist Church grounds — helping our property reflect the care we want for everyone who visits.",
  },
] as const;
