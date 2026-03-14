# Portfolio — Personal Website

A single-page portfolio site built with **React**, **Vite**, and **Tailwind CSS**. It showcases profile info, education, experience, skills, featured projects, GitHub activity widgets, and contact links. The app is responsive, uses smooth scroll and viewport-based animations (Framer Motion), and includes an optional particle background on larger screens.

---

## Purpose

This repository is the source code for **Pradeep Rajput’s** personal portfolio, intended to be deployed (e.g. Netlify, Vercel) and linked from the GitHub profile. Content is driven by local data files so name, links, projects, education, and skills can be updated without changing component logic.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Runtime** | Node.js (development/build) |
| **Framework** | React 18 |
| **Build** | Vite 5 (ESM) |
| **Styling** | Tailwind CSS 3, PostCSS, Autoprefixer |
| **Animations** | Framer Motion 10 |
| **Icons** | Lucide React |
| **Particles** | @tsparticles/react + @tsparticles/slim |

- **Language:** JavaScript (JSX). No TypeScript.
- **Package manager:** npm (`package.json` uses `"type": "module"`).

---

## Repository Structure

```
portfolio/
├── index.html              # Entry HTML; root div #root; Inter font from Google Fonts
├── package.json             # Scripts: dev, build, preview; dependencies listed above
├── vite.config.js           # Vite + React plugin only; no base path or env vars
├── tailwind.config.js       # content: index.html + src/**/*.{js,jsx}; theme: primary #22c55e, dark #0f172a; font Inter
├── postcss.config.js        # tailwindcss + autoprefixer
├── README.md                # This file
├── public/                  # Static assets served at /
│   ├── profile-pic.png      # Used in About section
│   └── resume.pdf           # Used in Hero (Download Resume) and ResumeModal (preview + download)
├── src/
│   ├── main.jsx             # ReactDOM.createRoot(#root); renders <App />; imports globals.css
│   ├── App.jsx              # Composes all sections in order: Navbar, Hero, About, Experience, Skills, Projects, GitHubActivity, Contact, Footer, BackToTop
│   ├── styles/
│   │   └── globals.css      # Tailwind directives; smooth scroll; scroll-margin-top for section ids; focus-visible ring; bg-dark
│   ├── data/                # Content only; no UI
│   │   ├── profile.js       # resumeUrl, socialLinks (github, linkedin, email), contact.email, githubUsername
│   │   ├── projects.js      # Array of { title, description, techStack, details, link, icon, metric }; optional github
│   │   ├── skills.js        # skillCategories: [{ id, label, icon, skills[] }]; icon names match Lucide components in Skills.jsx
│   │   └── education.js     # Array of { degree, specialization, institution, period }
│   ├── config/
│   │   └── particlesConfig.js  # tsparticles options: no fullScreen; particle count/size/opacity/speed; no links; no interactivity
│   └── components/          # All functional components; default exports
│       ├── Navbar.jsx       # Fixed top nav; section links from SECTIONS; IntersectionObserver for active section; mobile menu (Menu/X)
│       ├── Hero.jsx         # Full-viewport hero; ParticlesBackground; title + tagline; Download Resume button opens ResumeModal
│       ├── About.jsx        # Section id="about"; profile image from /profile-pic.png; education list from data/education.js
│       ├── Experience.jsx   # Section id="experience"; single hardcoded role (Full-Stack Engineer — PREPZR) with bullet list
│       ├── Skills.jsx       # Section id="skills"; grid of skill categories from data/skills.js; iconMap: Code2, Layout, Server, Database, Brain, GitBranch, Cloud
│       ├── Projects.jsx     # Section id="projects"; ParticlesBackground; grid of ProjectCard from data/projects.js
│       ├── ProjectCard.jsx   # Receives project + index; icon from iconMap (Smile, Image, Activity, etc.); techStack tags; Live demo / GitHub links
│       ├── GitHubActivity.jsx # Section id="github-activity"; embeds external images: activity graph (github-readme-activity-graph.vercel.app), streak (streak-stats.demolab.com); username from profile.githubUsername
│       ├── Contact.jsx       # Section id="contact"; GitHub, LinkedIn, Email from profile.socialLinks; displays profile.contact.email
│       ├── Footer.jsx        # Copyright + same social links as icons
│       ├── BackToTop.jsx     # Fixed button after scroll > 400px; smooth scroll to top; AnimatePresence
│       ├── ResumeModal.jsx   # Modal: backdrop + iframe /resume.pdf + Download PDF (triggers download of resume.pdf as Pradeep_Rajput_Resume.pdf); Escape to close; body scroll lock when open
│       └── ParticlesBackground.jsx # Optional: disabled for viewport width < 640px; uses particlesConfig; pointer-events-none; accepts id and className
```

---

## Data Contracts

### `src/data/profile.js`

- **profile.resumeUrl** — URL for “view resume” (e.g. Google Drive). Not used by ResumeModal; modal uses `/resume.pdf` and `profile-pic.png` is from `public/`.
- **profile.socialLinks** — `{ github, linkedin, email }`. Used by Contact, Footer, and any link that needs the profile’s social URLs.
- **profile.contact.email** — Shown in Contact section.
- **profile.githubUsername** — Used by `GitHubActivity.jsx` to build URLs for activity graph and streak images.

### `src/data/projects.js`

Each project: `title`, `description`, `techStack` (array of strings), `details` (longer text, currently unused in UI), `link` (live demo URL), `icon` (Lucide icon name used in `ProjectCard` iconMap), `metric` (short highlight line). Optional: `github` (repo URL) for “GitHub” button in `ProjectCard`.

### `src/data/skills.js`

**skillCategories:** each `{ id, label, icon, skills }`. `icon` must match a key in `Skills.jsx` iconMap (Code2, Layout, Server, Database, Brain, GitBranch, Cloud).

### `src/data/education.js`

Array of `{ degree, specialization, institution, period }`. Rendered in About as a vertical timeline with left border.

---

## Section IDs and Navigation

These IDs are used for in-page navigation and scroll-margin (see `globals.css`):

- `#about`
- `#experience`
- `#skills`
- `#projects`
- `#github-activity`
- `#contact`

`Navbar.jsx` defines `SECTIONS` with these ids and labels; it uses IntersectionObserver to set the “active” section for styling. Clicking a nav link scrolls to the corresponding section (smooth scroll via CSS).

---

## Styling and Theming

- **Tailwind:** Content paths are `./index.html` and `./src/**/*.{js,jsx}`. Custom theme: `primary: "#22c55e"`, `dark: "#0f172a"`, `fontFamily.sans: ["Inter", ...]`, `boxShadow.glow` for primary glow.
- **globals.css:** `html` smooth scroll; `body` uses `bg-dark` and `text-white`; section IDs get `scroll-margin-top: 5rem`; focus-visible ring for a11y.

---

## External Dependencies (Third-Party Services)

- **GitHub Activity:** `GitHubActivity.jsx` loads two images by username from `profile.githubUsername`:
  - Activity graph: `https://github-readme-activity-graph.vercel.app/graph?username=...&theme=react-dark&hide_border=true`
  - Streak: `https://streak-stats.demolab.com/?user=...&theme=react`
- **Fonts:** Inter from Google Fonts (link in `index.html`).

No API keys or environment variables are required for the app to run.

---

## Scripts

- **`npm run dev`** — Start Vite dev server (default port, e.g. 5173).
- **`npm run build`** — Production build (output typically `dist/`).
- **`npm run preview`** — Serve the production build locally.

---

## Static Assets

- **public/profile-pic.png** — Referenced in About as `src="/profile-pic.png"`.
- **public/resume.pdf** — Referenced in ResumeModal as `PDF_URL = "/resume.pdf"`; download filename is `Pradeep_Rajput_Resume.pdf`.

Vite serves `public/` at the root, so no `import` is needed for these.

---

## Deployment

The app is a static SPA. After `npm run build`, deploy the contents of `dist/` to any static host (e.g. Netlify, Vercel). No server-side code or env configuration is required. The live portfolio URL is currently referenced in the owner’s GitHub profile README (e.g. pradeeprajput-portfolio.netlify.app).

---

## Summary for AI / Claude

- **What it is:** A single-page React portfolio for Pradeep Rajput, content-driven by `src/data/*.js` (profile, projects, skills, education). Experience is hardcoded in `Experience.jsx`.
- **Stack:** React 18, Vite 5, Tailwind CSS, Framer Motion, Lucide, tsparticles. No backend, no env vars.
- **Entry:** `index.html` → `src/main.jsx` → `App.jsx` → sections in order; `App.jsx` is the single source of section order.
- **Content changes:** Edit `src/data/profile.js`, `projects.js`, `skills.js`, `education.js`; add/replace `public/profile-pic.png` and `public/resume.pdf` as needed.
- **Behavior:** Fixed navbar with section highlighting; hero with resume modal; About (photo + education); Experience (one role); Skills grid; Projects grid (each card from `projects.js`); GitHub activity iframe images; Contact links; Footer; Back to top. Particles only on viewport width ≥ 640px.
