import { site } from "@/lib/site";

/** Shared FAQ copy for the FAQ page and FAQPage JSON-LD. */
export const faqs = [
  {
    q: "When do you meet, and where are you located?",
    a: `Sundays: Life Groups 9:30 AM · Morning Worship 10:45 AM · SFU Groups 6:00 PM. Wednesdays: Prayer, God’s Kidz, and Youth at 7:00 PM. Address: ${site.address.full}. Phone: ${site.phone}.`,
  },
  {
    q: "What about my children?",
    a: "Nursery (Birth–2) is available Sunday mornings. Crestview Kids classes meet at 9:30 AM, and Children’s Church classes, Nursery, PreK – 1st Grade, and 2nd–3rd Grade, meet during Morning Worship. Check in at the welcome center, tell us about allergies or special needs.",
  },
  {
    q: "What should I wear? What do you believe?",
    a: "Come as you are. We hold to the Baptist Faith and Message, 2000, see Our Beliefs for a summary.",
  },
  {
    q: "How do I get connected?",
    a: `Start with a Sunday Life Group at 9:30 AM, explore ministries, or call ${site.phone}. For membership and next steps, visit Plan Your Visit or Contact Us.`,
  },
] as const;
