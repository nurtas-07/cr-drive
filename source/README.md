# CR Drive

Professional responsive startup website, based on the supplied CR Drive pitch and the visual direction of ocuwave.health.

## Run

Node.js 20.19+ or 22.12+ recommended.

```sh
npm ci
npm run dev
```

## Build and host

```sh
npm run build
npm run preview
```

Deploy the `dist` directory to a static host, including Cloudflare Pages. The build pre-renders Russian page content; browser interactions and the RU/KZ/EN language selector are powered by React. Fonts and images are local assets.

The original cr-drive.pages.dev deployment is not modified by this project. The existing dispatcher workspace remains an external link.

## Content and functionality

- Russian, Kazakh and English, with browser-local language preference.
- Interactive browser-only dispatcher/driver demo: normal, alert and offline scenarios, device status, route and event views, acknowledgement and pause.
- Fleet audience selection, mobile menu, FAQ, native accessible contact dialog.
- Pricing calculator for 1–100 drivers using 45,000 KZT/device and 3,000 KZT/driver/month, based on the supplied pitch. Prices are explicitly indicative.
- Real contact links from the existing CR Drive website: Telegram @nu_wwx and Instagram @kr.drivee.
- No backend, lead database, real telemetry, medical analysis or fake form submissions are included.

## Main files

- `src/main.jsx`: landing page and shared interactions.
- `src/Dashboard.jsx`: isolated simulated workspace.
- `src/copy.js`: complete language dictionaries.
- `src/styles.css`: responsive layout, typography and visual styling.
- `public/assets`: optimized conceptual WebP artwork.
- `scripts/build.mjs`: Vite build and static pre-render.

## Design and sources

Pitch: `CR driv Pizza Pitch, копия.pdf` supplied by the user. It informs product structure, audiences and indicative pricing. Sensitive commercial internals and unsupported efficacy claims were not published. Extended metrics are described as planned, not as validated production capabilities.

The design takes inspiration from the reference’s product-led hero, restrained palette and editorial typography. It does not copy its brand, product, code or proprietary imagery.

The wearable and journey artwork was generated using the built-in ImageGen tool and is labeled as conceptual on the site. The wearable uses the pitch’s circular dark smartwatch as a visual reference. Generation prompts are documented in `ASSET-PROMPTS.md`.

## Verification

Browser checks covered desktop and 390px mobile layouts, all three languages, absence of horizontal overflow, images, alert/offline/acknowledgement states, driver mode, calculator boundaries, FAQ, dialog opening and Escape dismissal. Final production build is checked separately before packaging.
