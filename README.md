# Coopfit Fitness — Website

Marketing site for Coopfit Fitness, a private personal-training studio in Tribeca, NYC. Built as a single-page site with React (via in-browser Babel) and plain CSS.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Entry point — loads React, Babel, and all component scripts |
| `styles.css` | Global styles, design tokens, buttons, responsive rules |
| `nav.jsx` | Top navigation + mobile menu |
| `hero.jsx` | Hero section (video / split / photo layouts) |
| `approach.jsx` | Method, services, and stats sections + marquee |
| `clients.jsx` | Client testimonials |
| `about.jsx` | About the coach |
| `contact.jsx` | Contact section + Calendly link + footer |
| `app.jsx` | Root component; composes sections and hosts design tweaks |
| `tweaks-panel.jsx` | Design-time tweak panel (dormant unless activated by a host) |
| `404.html` | Fallback page |
| `assets/` | Images and video |

## Running locally

No build step. Serve the folder over HTTP (required — `file://` blocks module/asset loading):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying

Static site — deploy the folder as-is to GitHub Pages, Netlify, Vercel, or any static host.

## Notes

- React and Babel are loaded from a CDN; components are transpiled in the browser. This keeps the project buildless but means Babel runs on first load. For a production build you may want to precompile the JSX.
- The tweaks panel only renders when a design host activates it and has no effect on the public site.
- No API keys, secrets, or backend credentials are used. The contact form is front-end only; wire it to a backend or form service before collecting real submissions.
