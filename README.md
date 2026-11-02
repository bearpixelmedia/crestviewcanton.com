# Crestview Baptist Church

Custom website for **Crestview Baptist Church** (Canton, NC) — built outside WordPress/Elementor.

**Stack** (matched to today’s sibling builds — especially [Paul’s Pallet Walls](https://github.com/bearpixelmedia/pauls-pallet-walls)):

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Deploy target: Vercel

**Copy source:** Elementor reference [ilwoltux.elementor.cloud](https://ilwoltux.elementor.cloud/) for headings, body, and nav labels. Layout and visual design are original (not a recreation of the Elementor look). Contact/schedule details use church content from `Website/`.

## Local preview

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the next free port printed by `next dev`).

## Forms (env vars Byron must set)

Contact, Plan Your Visit, and home newsletter share `src/components/ContactForm.tsx`.

| Variable | Required? | Purpose |
|----------|-----------|---------|
| `NEXT_PUBLIC_FORMSPREE_ID` | Optional | Formspree form ID (`https://formspree.io/f/<ID>`). When set, submissions POST to Formspree. |

**Without Formspree:** forms still work via a prefilled `mailto:crestviewcanton@gmail.com` (no secrets needed for local/preview).

Setup:

1. Create a form at [formspree.io](https://formspree.io) aimed at `crestviewcanton@gmail.com` (or Sharon’s preferred inbox once confirmed).
2. Copy the form ID into `.env.local` and Vercel → Project → Settings → Environment Variables.
3. Redeploy.

See `.env.example`. Resend / Next.js API route is documented there as a future option; not wired yet so we don’t invent API keys.

## Pages

| Path | Purpose |
|------|---------|
| `/` | Home |
| `/our-beliefs` | Our Beliefs |
| `/sermons-media` | Sermons & Media |
| `/give-online` | Give Online (MyVanco) |
| `/resources` | Resources |
| `/frequently-asked-questions` | FAQ |
| `/plan-your-visit` | Plan Your Visit |
| `/about` | About Crestview |
| `/our-staff` | Our Staff (incl. Dr. Daniel Page) |
| `/contact` | Contact |

## Socials (verified)

- Facebook: https://www.facebook.com/crestviewcanton/
- YouTube: https://www.youtube.com/@CrestviewCanton (`UC_ohIdzlSH3I7DOdcUpqAEQ`)
- Kids Facebook: https://www.facebook.com/crestviewcantonkids/

## Deploy (Vercel)

Team: **Bear Pixel Media** (`byronmccluney`).

```bash
# After the Vercel project exists and is linked to this repo:
vercel --scope byronmccluney link
vercel --scope byronmccluney deploy --prebuilt   # or push to trigger Git deploy
```

Or: Vercel Dashboard → Add New Project → Import `bearpixelmedia/crestviewcanton.com` → Framework Next.js → Deploy.

Set `NEXT_PUBLIC_FORMSPREE_ID` in the project env before relying on Formspree in production.

## Notes

- Giving link: `https://secure.myvanco.com/L-ZB2Z/home`
- Office: 3258 Pisgah Drive, Canton, NC 28716 · (828) 648-1110
- Reference content retained in `Website/` and `CONTENT.docx` (gitignored from the app package)
- **Tammie / Eddie Beck bios:** church `Website/_new_sitemap/NEW-STAFF-BIOS.md` still marks longer details as pending office input. Live Elementor and crestviewcanton.com were checked; no additional verified bio facts found — do not invent tenure/family details.
