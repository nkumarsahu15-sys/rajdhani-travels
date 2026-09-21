# Rajdhani Travels website

Next.js (App Router) + React + TypeScript + Tailwind CSS + Framer Motion + Lucide icons.
Showcase site: customers contact Rajdhani Travels by Call, WhatsApp, social media or the enquiry form.
There is no seat-booking or payment system.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the live domain (used for SEO, sitemap, Open Graph).

## Where to edit things

| What | File |
| --- | --- |
| Phone numbers, address, WhatsApp number, social URLs, Google Maps link, About story | `src/config/site.ts` |
| Photos and gallery | `src/config/media.ts` (+ files in `public/images`) |
| Service text, facilities, seat options, booking options | `src/data/services.ts` |
| Colours and fonts | `tailwind.config.ts`, `src/app/layout.tsx` |

## Still needed from Rajdhani Travels

- Real photos (currently neutral illustrations). Put files in `public/images`, set `src` in `src/config/media.ts`, update `alt`. Set `showPlaceholderNote` to `false` when done.
- Official Instagram, Facebook and YouTube URLs (`social` in `site.ts`). Until added, those buttons show as disabled.
- Google Maps link and/or embed URL (`map` in `site.ts`). Until added, the map card is a placeholder.
- Confirm the WhatsApp number (`primaryWhatsapp`) and that both numbers use +91.
- Optional: About story, logo file, Open Graph image.

## Notes

- "BOOK NOW" opens an enquiry dialog; submitting opens WhatsApp with the details pre-filled.
- Nothing has been invented: no prices, reviews, routes, experience, emails or awards.
- Animations respect the visitor's "reduce motion" setting.
