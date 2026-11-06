# Crestview Baptist Church

Custom website for **Crestview Baptist Church** (Canton, NC), built outside WordPress/Elementor.

**Stack** (matched to today’s sibling builds, especially [Paul’s Pallet Walls](https://github.com/bearpixelmedia/pauls-pallet-walls)):

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

## Env vars Byron must set

| Variable | Required? | Purpose |
|----------|-----------|---------|
| `NEXT_PUBLIC_FORMSPREE_ID` | Optional | Formspree form ID (`https://formspree.io/f/<ID>`). When set, form submissions POST to Formspree and the mailto notice hides. |
| `YOUTUBE_DATA_API_KEY` | Optional (recommended) | YouTube Data API v3 key so the home-page live banner can detect streams reliably. |

**Without Formspree:** forms still work via a prefilled `mailto:CrestviewBaptistChurchNC@gmail.com`.

**Without YouTube key:** `/api/youtube-live` still tries an HTML check (less reliable). Banner only appears above the hero when the channel is actually live.

See `.env.example`.

### Formspree setup (exact click-path)

Agent CLI/browser could not finish OAuth for Formspree. Byron must create the form once:

1. Open [https://formspree.io/login](https://formspree.io/login) and sign in (Google is fine; use an inbox you control).
2. Click **New Form**.
3. Name it `Crestview Baptist website`.
4. Set the recipient to **`CrestviewBaptistChurchNC@gmail.com`** (shared church contact).
5. Create the form, then open it and copy the Form ID from the endpoint URL: `https://formspree.io/f/XXXXXXX` → copy **`XXXXXXX`** only.
6. Local: add to `.env.local`  
   `NEXT_PUBLIC_FORMSPREE_ID=XXXXXXX`  
   then restart `npm run dev`.
7. Vercel: Project **crestviewcanton-com** → **Settings** → **Environment Variables** → add `NEXT_PUBLIC_FORMSPREE_ID` = `XXXXXXX` for Production, Preview, and Development → **Save** → redeploy (or push again).

After the ID is set, the developer mailto notice on forms disappears automatically.

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
