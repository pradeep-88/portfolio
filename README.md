<div align="center">

```
██████╗ ██████╗  █████╗ ██████╗ ███████╗███████╗██████╗
██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝██╔══██╗
██████╔╝██████╔╝███████║██║  ██║█████╗  █████╗  ██████╔╝
██╔═══╝ ██╔══██╗██╔══██║██║  ██║██╔══╝  ██╔══╝  ██╔═══╝
██║     ██║  ██║██║  ██║██████╔╝███████╗███████╗██║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚══════╝╚═╝
```

### Pradeep Rajput — Personal Portfolio

*The internet's version of me. Handcrafted. No templates. No compromises.*

[![Live](https://img.shields.io/badge/🌐_Live_Site-22c55e?style=for-the-badge&logoColor=white)](https://pradeeprajput-portfolio.netlify.app)
[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite_5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-0f172a?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)

</div>

---

## What's inside

Not your average portfolio. Every pixel is intentional.

- **Custom cursor** with a spotlight that follows your mouse inside cards — the same subtle glow effect you've seen on Linear and Vercel
- **⌘K Command Palette** — keyboard-first navigation, copy email, open resume, toggle theme, all without touching the mouse
- **Scroll progress bar** — a 2px accent line at the top of the viewport. Small. Tells you everything.
- **Card spotlight effect** — radial gradient that tracks your cursor inside every project and experience card
- **Light / dark mode** — persisted in `localStorage`, toggled from the navbar or the command palette
- **Typewriter hero** — role titles cycle with a blinking cursor, no library, just a `setInterval`
- **Animated stat counters** — numbers count up on scroll entry using `requestAnimationFrame` and an easing curve
- **Project case study modals** — click any project card for a deeper write-up. The `details` field in `projects.js` finally earns its keep.
- **Skill proficiency tooltips** — hover a skill tag to see a 5-dot proficiency bar and level label
- **"Currently" section** — what I'm building, learning, and reading. Updated manually. More honest than a skill percentage bar.
- **Lazy-loaded GitHub activity** — streaks and contribution graphs load only when you scroll near them, with graceful error fallbacks
- **Full Open Graph + Twitter Card meta** — looks good when shared on Slack, LinkedIn, or anywhere else
- **PWA manifest + custom favicon** — "PR" monogram in accent green, no more default Vite icon
- **Styled 404 page** — because someone always manages to find it

---

## Stack

| Concern | Choice | Why |
|---|---|---|
| Framework | React 18 | Concurrent features, mature ecosystem |
| Build | Vite 5 (ESM) | Sub-second HMR, no config needed |
| Styling | Tailwind CSS 3 + CSS custom properties | Utility-first with a real design token layer |
| Animation | Framer Motion 10 | `whileInView`, `AnimatePresence`, spring physics |
| Icons | Lucide React | Consistent stroke width, tree-shakeable |
| Particles | @tsparticles/slim | Disabled on mobile, low overhead |
| Language | JavaScript (JSX) | No TypeScript — fast to iterate, easy to read |

No backend. No environment variables. No build secrets. Just `npm run build` and deploy.

---

## Project structure

```
portfolio/
├── public/
│   ├── profile-pic.png        # Drop your photo here
│   ├── resume.pdf             # Your resume — downloaded as Pradeep_Rajput_Resume.pdf
│   ├── favicon.svg            # "PR" monogram in #22c55e on #0f172a
│   └── og-image.png           # 1200×630 — what appears when the URL is shared
│
├── src/
│   ├── data/                  # ← All content lives here. Touch nothing else to update copy.
│   │   ├── profile.js         # Name, email, socials, GitHub username
│   │   ├── projects.js        # Title, description, tech, details, link, metric
│   │   ├── skills.js          # Categories, icons, skill names, proficiency levels
│   │   ├── education.js       # Degree, institution, period
│   │   └── now.js             # What you're building / learning / reading right now
│   │
│   ├── components/            # One file per component. Default exports throughout.
│   │   ├── Navbar.jsx         # Frosted glass, sliding active indicator, scroll progress bar
│   │   ├── Hero.jsx           # Typewriter, fake VS Code editor, particles, CTA buttons
│   │   ├── About.jsx          # Photo with glow ring, bio, education timeline
│   │   ├── Experience.jsx     # Card with left accent border, checklist bullets, tech tags
│   │   ├── Skills.jsx         # Category grid, SkillTag with proficiency tooltips
│   │   ├── Projects.jsx       # Masonry-ish grid, case study modal trigger
│   │   ├── ProjectCard.jsx    # Gradient header, metric pill, spotlight effect
│   │   ├── GitHubActivity.jsx # Lazy-loaded streak + activity graph with error fallback
│   │   ├── Contact.jsx        # Three link cards, copy-email-to-clipboard
│   │   ├── Now.jsx            # Currently section — building / learning / reading
│   │   ├── Footer.jsx         # Three-column: brand | nav | socials
│   │   ├── BackToTop.jsx      # Fixed circle button, AnimatePresence fade
│   │   ├── CustomCursor.jsx   # Dot + lagging ring, scales on hover, hidden on touch
│   │   ├── CommandPalette.jsx # ⌘K palette, keyboard navigation, 10 commands
│   │   ├── CaseStudyModal.jsx # Full-screen project deep-dive, Escape to close
│   │   ├── SkillTag.jsx       # Pill with proficiency tooltip on hover
│   │   ├── ThemeToggle.jsx    # Sun/Moon with rotate+scale swap animation
│   │   ├── SectionHeading.jsx # Mono label + large heading, used across all sections
│   │   ├── Tag.jsx            # Reusable pill — default and accent variants
│   │   └── ParticlesBackground.jsx
│   │
│   ├── hooks/
│   │   ├── useCursor.js       # Tracks mouse, sets --cx/--cy on :root, detects hoverable elements
│   │   ├── useSpotlight.js    # Tracks mouse inside a card, sets --mx/--my for gradient
│   │   └── useCountUp.js      # requestAnimationFrame counter with easeOutQuart, fires once on inView
│   │
│   ├── context/
│   │   └── ThemeContext.jsx   # dark/light toggle, persisted in localStorage
│   │
│   ├── styles/
│   │   ├── globals.css        # Tailwind directives, scrollbar, selection color, cursor: none
│   │   └── tokens.css         # CSS custom properties — the single source of design truth
│   │
│   └── config/
│       └── particlesConfig.js
│
├── tailwind.config.js         # Extends theme with token-mapped colors + JetBrains Mono
├── vite.config.js
└── index.html                 # OG meta, Twitter Card, canonical, favicon, font preloads
```

---

## Getting started

```bash
# Clone
git clone https://github.com/pradeeprajput/portfolio.git
cd portfolio

# Install
npm install

# Dev server — http://localhost:5173
npm run dev

# Production build
npm run build

# Preview the build locally
npm run preview
```

Zero environment variables. Zero configuration. It just runs.

---

## Making it yours

Everything you need to change is in `src/data/`. The components are wired to read from these files — you never need to open a component to update content.

```
src/data/profile.js   → your name, email, GitHub username, social links
src/data/projects.js  → your projects (title, description, tech, details, live link, metric)
src/data/skills.js    → your skill categories and proficiency levels (1–5)
src/data/education.js → your degrees and institutions
src/data/now.js       → what you're working on right now
```

Then swap these two files in `public/`:
```
profile-pic.png  → your photo (any square-ish image works)
resume.pdf       → your resume (downloaded as YourName_Resume.pdf from the modal)
```

And update the download filename in `ResumeModal.jsx`:
```js
a.download = 'YourName_Resume.pdf';  // line ~12
```

That's it. Everything else — the cursor, the spotlight, the command palette, the animations — just works around your content.

---

## Deployment

The output of `npm run build` is a static folder (`dist/`). Drop it on any host.

**Netlify** — drag `dist/` into the Netlify dashboard, or connect the repo for auto-deploys. Add `public/_redirects`:
```
/* /index.html 200
```

**Vercel** — import the repo, framework preset is Vite, no configuration needed. The included `vercel.json` handles SPA routing:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

**GitHub Pages** — set base in `vite.config.js` to your repo name, then `npm run build` and push `dist/` to the `gh-pages` branch.

---

## Design decisions worth noting

**CSS custom properties over Tailwind tokens everywhere.** Tailwind is great for layout and spacing. But for a design that needs to respond to a theme toggle in real time, CSS variables win — no class swapping, no flash of unstyled content, just `:root` and `[data-theme="light"]` blocks.

**No routing library.** It's a single page. React Router would add ~50KB for zero benefit. Section IDs and `scrollIntoView` handle all navigation including the command palette.

**The `details` field in `projects.js` was always there but never used.** It now powers the case study modals. If you inherited this codebase, that's free depth waiting to be unlocked.

**Particles are disabled under 640px.** Not a performance shortcut — on mobile, particles behind text hurt readability and add visual noise with no gain.

**`useCountUp` uses `requestAnimationFrame`, not a library.** The whole hook is 25 lines. Adding a counter library for this would be like importing lodash for `array.map`.

---

<div align="center">

Built with too much attention to detail by **Pradeep Rajput**

[pradeeprajput-portfolio.netlify.app](https://pradeeprajput-portfolio.netlify.app) · [LinkedIn](https://linkedin.com/in/pradeeprajput) · [GitHub](https://github.com/pradeeprajput)

</div>
