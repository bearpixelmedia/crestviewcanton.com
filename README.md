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
| `NEXT_PUBLIC_FORMSPREE_ID` | **Required for forms** | Formspree form ID (`https://formspree.io/f/<ID>`). Contact, prayer, visit, newsletter, and serve forms POST here. |
| `YOUTUBE_API_KEY` | Optional (recommended) | YouTube Data API v3 key so the home-page live banner can detect streams reliably. |

**Without Formspree:** forms show a clear error asking for `NEXT_PUBLIC_FORMSPREE_ID` on Vercel (no mailto to Bear Pixel). Visitors can still call the office.

**Without YouTube key:** `/api/youtube-live` still tries an HTML check (less reliable). Banner only appears above the hero when the channel is actually live.

See `.env.example`.

### Formspree setup (exact click-path)

Agent CLI/browser cannot finish OAuth for Formspree. Byron creates the form once and points notifications to **Sharon / church office**:

1. Open [https://formspree.io/login](https://formspree.io/login) and sign in (Google is fine).
2. Click **New Form**.
3. Name it `Crestview Baptist website`.
4. Set the notification / recipient email to **`crestviewcanton@gmail.com`** (Sharon Bryson, Administrative Assistant; same address on Contact and Our Staff).
5. Create the form, then open it and copy the Form ID from the endpoint URL: `https://formspree.io/f/XXXXXXX` → copy **`XXXXXXX`** only.
6. Confirm Formspree email verification for `crestviewcanton@gmail.com` if prompted.
7. Local: add to `.env.local`  
   `NEXT_PUBLIC_FORMSPREE_ID=XXXXXXX`  
   then restart `npm run dev`.
8. Vercel: Project **crestviewcanton-com** → **Settings** → **Environment Variables** → add `NEXT_PUBLIC_FORMSPREE_ID` = `XXXXXXX` for **Production**, **Preview**, and **Development** → **Save** → redeploy (or push again).

After the ID is set and redeployed, contact forms submit to Formspree and deliver to Sharon’s church office inbox. There is no `leads@bearpixelmedia.com` fallback.

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

Set `NEXT_PUBLIC_FORMSPREE_ID` in the Vercel project env (recipient: crestviewcanton@gmail.com / Sharon) before relying on forms in production.

## Mobile app (Expo)

Staff-first + class signup shell lives in **`apps/crestview-mobile/`**. The Calendar / Groups / Classes tabs load the church’s Church Center pages in WebViews; there is no custom app API. Website `npm` scripts are unchanged.

```bash
cd apps/crestview-mobile
npm install
cp .env.example .env
npx expo start
```

See [`apps/crestview-mobile/README.md`](apps/crestview-mobile/README.md).

## Notes

- Giving: `https://secure.myvanco.com/L-ZB2Z/home`
- App tabs (Church Center): `https://crestviewbaptistchurch.churchcenter.com/calendar`, `/groups`, `/registrations`
- Office: 3258 Pisgah Drive, Canton, NC 28716 · (828) 648-1110
- Reference content in `Website/` (gitignored)
- Tammie / Eddie Beck: longer bios still pending church office
- Dated news campaigns intentionally omitted until the office supplies current copy

