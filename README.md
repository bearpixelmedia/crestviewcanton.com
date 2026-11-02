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

Open [http://localhost:3000](http://localhost:3000).

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

## Notes

- Giving link: `https://secure.myvanco.com/L-ZB2Z/home`
- Office: 3258 Pisgah Drive, Canton, NC 28716 · (828) 648-1110
- Reference content retained in `Website/` and `CONTENT.docx` (gitignored from the app package)
