export const site = {
  name: "Crestview Baptist Church",
  shortName: "Crestview",
  tagline: "A welcoming, Christ-centered community in Canton, NC",
  url: "https://crestviewcanton.com",
  description:
    "Crestview Baptist Church in Canton, NC. Sunday worship at 10:45 AM on Pisgah Drive, with Life Groups, kids and student ministry, and a welcoming church family.",
  address: {
    street: "3258 Pisgah Drive",
    city: "Canton",
    region: "NC",
    postalCode: "28716",
    full: "3258 Pisgah Drive, Canton, NC 28716",
  },
  /** Campus pin used for map embed + Church JSON-LD */
  geo: {
    latitude: 35.5242342,
    longitude: -82.8372875,
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=3258+Pisgah+Drive,+Canton,+NC+28716",
  phone: "(828) 648-1110",
  phoneTel: "+18286481110",
  /** Shared church inbox for website / office / social access */
  email: "CrestviewBaptistChurchNC@gmail.com",
  pastorEmail: "pagebypage8@gmail.com",
  /** From Wayback Machine archives of crestviewcanton.com (analytics.js). No G- ID found. */
  googleAnalyticsId: "UA-166605328-1",
  pastorWebsite: {
    href: "https://danielmpage.com",
    label: "Pastor Dan’s site",
  },
  giveUrl: "https://secure.myvanco.com/L-ZB2Z/home",
  textToGive: "18285374412",
  textToGiveDisplay: "1 828 537 4412",
  churchCenterRegistrations:
    "https://crestviewbaptist.churchcenter.com/registrations",
  bfmUrl: "https://bfm.sbc.net/",
  bfmPdf:
    "https://bfm.sbc.net/wp-content/uploads/2024/08/BFM2000.pdf",
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
    /** Verified: facebook.com/crestviewcanton, address/phone match church NAP */
    facebook: "https://www.facebook.com/crestviewcanton/",
    /** Verified: live crestviewcanton.com embeds use this channel (@CrestviewCanton) */
    youtube: "https://www.youtube.com/@CrestviewCanton",
    youtubeChannelId: "UC_ohIdzlSH3I7DOdcUpqAEQ",
    /** Verified kids ministry page */
    facebookKids: "https://www.facebook.com/crestviewcantonkids/",
    /** Verified: Instagram @crestviewcanton */
    instagram: "https://www.instagram.com/crestviewcanton/",
  },
  officeHours: "Monday–Friday, 9:00 AM – 5:00 PM",
} as const;

/** Full site map for header mega menu + mobile drawer (Give Online is CTA-only). */
export const navGroups = [
  {
    id: "about",
    label: "About",
    links: [
      { href: "/plan-your-visit", label: "Plan Your Visit" },
      { href: "/about", label: "About Crestview" },
      { href: "/our-staff", label: "Our Staff" },
      { href: "/our-beliefs", label: "Our Beliefs" },
      { href: "/frequently-asked-questions", label: "FAQ" },
    ],
  },
  {
    id: "ministries",
    label: "Ministries",
    links: [
      { href: "/ministries", label: "Ministries Overview" },
      { href: "/worship-ministry", label: "Worship Ministry" },
      { href: "/childrens-ministry", label: "Children’s Ministry" },
      { href: "/student-ministry", label: "Student Ministry" },
      { href: "/adult-ministry", label: "Adult Ministry & Small Groups" },
      { href: "/missions", label: "Missions & Outreach" },
      { href: "/serve", label: "Serve / Volunteer" },
    ],
  },
  {
    id: "connect",
    label: "Connect",
    links: [
      { href: "/events", label: "Events" },
      { href: "/prayer-requests", label: "Prayer Requests" },
      { href: "/membership", label: "Membership & Next Steps" },
      { href: "/baptism", label: "Baptism" },
      { href: "/give-online", label: "Ways to Give" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    id: "media",
    label: "Media & Resources",
    links: [
      { href: "/sermons-media", label: "Sermons & Media" },
      { href: "/livestream", label: "Livestream" },
      { href: "/news", label: "News & Announcements" },
      { href: "/photo-gallery", label: "Photo Gallery" },
      { href: "/resources", label: "Resources" },
    ],
  },
] as const;

export const ministryLinks = [
  {
    href: "/worship-ministry",
    title: "Worship Ministry",
    body: "Crestview Worship leads music, prayer, and production so the church can respond to God together.",
  },
  {
    href: "/childrens-ministry",
    title: "Children’s Ministry",
    body: "Planting seeds for Jesus, nursery through grade 5, VBS, God’s Kidz, and more.",
  },
  {
    href: "/student-ministry",
    title: "Student Ministry",
    body: "6th–12th grade worship, evangelism, missions, and fellowship in the Youth Center.",
  },
  {
    href: "/adult-ministry",
    title: "Adult Ministry & Small Groups",
    body: "Life Groups, SFU, Men’s Ministry, Revolve Women, and Joyful Hearts seniors.",
  },
  {
    href: "/missions",
    title: "Missions & Outreach",
    body: "Local compassion and partners across the nations, Reach, Equip, Send.",
  },
  {
    href: "/serve",
    title: "Serve / Volunteer",
    body: "Worship, kids, students, greeting, and more, find a place to use your gifts.",
  },
] as const;

export const staff = [
  {
    slug: "daniel-page",
    name: "Dr. Daniel Page",
    role: "Senior Pastor",
    team: "ministry" as const,
    photo: "/staff/daniel-page.jpg",
    bio: "Dr. Daniel Page has developed a growing love for God’s Word through years of preaching and teaching. His goal is to communicate God’s powerful Word with relevant application for today’s world. Dan grew up in Cherryville, NC, trusted Christ at age 10, and studied music at Appalachian State University (B.M.E. 1987, M.M.E. 1989). After serving churches in worship, youth, and children’s ministry, including a mission year in France, he entered pastoral ministry in 2001 and completed an M.Div. from Southeastern Baptist Theological Seminary. Crestview called him in 2009; he and his family relocated from Raleigh to begin as Senior Pastor in June 2009. He completed a D.Min. in Evangelism and Discipleship from North Greenville University in 2017.",
    contact: "pagebypage8@gmail.com",
    website: {
      href: "https://danielmpage.com",
      label: "Daniel M. Page",
    },
  },
  {
    slug: "jarred-rathbone",
    name: "Jarred Rathbone",
    role: "Youth Pastor",
    team: "ministry" as const,
    photo: "/staff/jarred-rathbone.jpg",
    bio: "Jarred Rathbone is the Youth Pastor at Crestview Baptist Church. He is married to Amanda, and they have two sons, Jackson and Levi.",
    contact: "crestviewyouth3258@gmail.com · 828-371-1235",
  },
  {
    slug: "angie-watkins",
    name: "Angie Watkins",
    role: "Children’s Ministry Director",
    team: "ministry" as const,
    photo: "/staff/angie-watkins.jpg",
    bio: "Angie Watkins has a big heart for children. She volunteered in Crestview’s Children’s Ministry and directed VBS for more than 20 years before becoming Children’s Ministry Director in August 2021. She leads a passionate team focused on sharing Christ’s love with children and families. Angie is married to Chris; they have two adult children, Samantha and Caleb. She is a 1991 graduate of Pisgah High School and a 1994 graduate of Cecil’s Business College.",
    contact: "crestview4kidz@gmail.com · 828-648-1110",
  },
  {
    slug: "anita-diaz",
    name: "Anita Diaz",
    role: "Music Director / Worship Leader",
    team: "ministry" as const,
    photo: "/staff/anita-diaz.jpg",
    bio: "Anita Diaz is a native of Balsam, N.C. She started playing piano and singing at age three and is a Western Carolina University graduate (Music major, Theatre minor). After performing as a jazz pianist/vocalist in Atlanta, she was selected for the United States Air Force Band program, serving at Robins AFB and later with The United States Air Force Band in Washington, D.C., including White House performances. She has performed with artists including Keiko Matsui and Randy Brecker, opened for Roy Clark, Restless Heart, Gary Morris, and Jamie O’Neal, and sung backup for CeCe Winans, Amy Grant, and Vince Gill. Anita has performed the National Anthem for major sports and NASCAR events. She has served as worship leader, music director, and pianist in Haywood County churches for many years (including worship teams at Biltmore Church). She and her husband Luis continue to look for ways to serve and reach people for Christ.",
    contact: "crestviewworship2@gmail.com",
  },
  {
    slug: "sharon-bryson",
    name: "Sharon Bryson",
    role: "Administrative Assistant",
    team: "ministry" as const,
    photo: "/staff/sharon-bryson.jpg",
    bio: "Sharon Bryson serves as Crestview’s Administrative Assistant. A Haywood County native and long-term church member, she earned degrees and certificates from A-B Tech, UNC Asheville, and Haywood Community College. After 20 years as an Application Developer with Duke Energy Business Services (Nantahala area), she was called to serve at Crestview in 2011. Her favorite life verse is Philippians 4:13, “I can do all things through Christ who strengthens me.”",
    contact: "CrestviewBaptistChurchNC@gmail.com · 828-648-1110",
  },
  {
    slug: "tammie-beck",
    name: "Tammie Beck",
    role: "Custodian",
    team: "facility" as const,
    photo: "/staff/tammie-beck.jpg",
    // Longer tenure/family details still pending church office (NEW-STAFF-BIOS.md).
    bio: "Tammie Beck of Canton serves as Crestview Baptist Church’s Custodian, keeping our facilities welcoming and ready for worship and ministry. She and her husband, Eddie, serve Crestview’s campus together, Tammie indoors and Eddie on the grounds.",
  },
  {
    slug: "eddie-beck",
    name: "Eddie Beck",
    role: "Lawn Management",
    team: "facility" as const,
    photo: "/staff/eddie-beck.jpg",
    // Longer tenure/family details still pending church office (NEW-STAFF-BIOS.md).
    bio: "Eddie Beck of Canton cares for the Crestview Baptist Church grounds as Lawn Management lead, helping our property reflect the care we want for everyone who visits. He serves alongside his wife, Tammie, who is Crestview’s Custodian.",
  },
] as const;

export const ministryStaff = staff.filter((person) => person.team === "ministry");
export const facilityStaff = staff.filter((person) => person.team === "facility");
