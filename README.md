# Logos Logistics Distribution — Website

Marketing website for **Logos Logistics Distribution**, a 3PL warehouse and distribution company based in Ontario, CA. The site presents the company's third‑party logistics (3PL) services: warehousing, e‑commerce fulfillment, cross docking, transloading, yard management, value‑added services, and EDI/API integrations.

## Tech stack

This is a **static website** — no framework, no build dependencies required to view it.

- Plain **HTML** (one page per service + homepage)
- A single **CSS** stylesheet (`styles.css`)
- A small amount of vanilla **JavaScript** (`app.js`) for the mobile menu, scroll reveal, and form behavior
- `build-site.mjs` is an optional **Node.js** generator script (uses only Node built‑ins) that regenerates the HTML pages

## Project structure

```
.
├── index.html                     # Homepage
├── 3pl-solutions.html             # Services hub
├── e-commerce-fulfillment.html    # Service pages
├── warehousing-distribution.html
├── inbound-outbound.html
├── cross-docking.html
├── transloading.html
├── yard-management.html
├── value-added-services.html
├── edi-api-integrations.html
├── styles.css                     # All styling
├── app.js                         # Interactions
├── build-site.mjs                 # Optional HTML generator (Node)
├── assets/                        # Images and logos
└── implementation-notes.md        # Build/design notes
```

## Run it locally

No installation needed. From the project folder, start any static server:

```bash
# Python (built in on most systems)
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

Or with Node:

```bash
npx serve .
```

To regenerate the HTML pages after editing content (optional):

```bash
node build-site.mjs
```

## Deploy

Because it's fully static, it can be hosted free on **GitHub Pages**, Netlify, Vercel, or Cloudflare Pages.

**GitHub Pages:** push this repo, then go to **Settings → Pages → Source: `main` branch / root**. Your site goes live at `https://<username>.github.io/<repo>/`.

## License

See [LICENSE](LICENSE).
