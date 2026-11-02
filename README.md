# Crestview Baptist Church

Custom website for **Crestview Baptist Church** (Canton, NC) — built outside WordPress/Elementor.

**Stack** (matched to today’s sibling builds — especially [Paul’s Pallet Walls](https://github.com/bearpixelmedia/pauls-pallet-walls)):

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Deploy target: Vercel (`crestviewcanton-com` on Bear Pixel Media / `byronmccluney`)

**Copy source:** `Website/_new_sitemap/pages/*/CONTENT.docx` + Elementor reference for some home marketing lines. Layout and visual design are original (not a recreation of the Elementor look).

## Local preview

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the next free port printed by `next dev`).

## Forms (env vars Byron must set)

Contact, Plan Your Visit, Prayer Requests, Serve interest, and home newsletter share `src/components/ContactForm.tsx`.

| Variable | Required? | Purpose |
|----------|-----------|---------|
| `NEXT_PUBLIC_FORMSPREE_ID` | Optional | Formspree form ID (`https://formspree.io/f/<ID>`). When set, submissions POST to Formspree. |

**Without Formspree:** forms still work via a prefilled `mailto:crestviewcanton@gmail.com` (no secrets needed for local/preview).

See `.env.example`.

## Pages

| Path | Purpose |
|------|---------|
| `/` | Home |
| `/ministries` | Ministries hub |
| `/childrens-ministry` | Crestview Kids |
| `/student-ministry` | Crestview Youth |
| `/adult-ministry` | Life Groups, SFU, Men/Women/Seniors |
| `/missions` | Missions & Outreach |
| `/sermons-media` | Sermons & Media |
| `/livestream` | Facebook Live + YouTube |
| `/events` | Events calendar / weekly rhythm |
| `/serve` | Serve / Volunteer |
| `/prayer-requests` | Prayer requests |
| `/give-online` | Give Online (MyVanco) |
| `/resources` | Resources |
| `/news` | News & Announcements |
| `/membership` | Membership & Next Steps |
| `/baptism` | Baptism |
| `/photo-gallery` | Photo Gallery |
| `/frequently-asked-questions` | FAQ |
| `/plan-your-visit` | Plan Your Visit |
| `/about` | About Crestview |
| `/our-beliefs` | Our Beliefs |
| `/our-staff` | Our Staff |
| `/contact` | Contact |

## Socials (verified)

- Facebook: https://www.facebook.com/crestviewcanton/
- YouTube: https://www.youtube.com/@CrestviewCanton
- Kids Facebook: https://www.facebook.com/crestviewcantonkids/

## Deploy

```bash
vercel --scope byronmccluney link   # once
# Prefer git push to trigger deploy (CLI file upload can fail on large uploads)
git push origin cursor/crestview-baptist-site-c141
```

Set `NEXT_PUBLIC_FORMSPREE_ID` in the Vercel project env before relying on Formspree in production.

## Notes

- Giving: `https://secure.myvanco.com/L-ZB2Z/home`
- Office: 3258 Pisgah Drive, Canton, NC 28716 · (828) 648-1110
- Reference content in `Website/` (gitignored)
- Tammie / Eddie Beck: longer bios still pending church office
- Dated news campaigns intentionally omitted until the office supplies current copy
