# Madhur Kardam — Personal Portfolio

A production-ready personal portfolio built with **React (Vite)**, **JavaScript**, **Tailwind CSS**, and **shadcn/ui**-style components. No animation libraries, no TypeScript — every transition is plain CSS/Tailwind.

---

## Tech Stack

- React 18 (Vite)
- JavaScript (no TypeScript)
- Tailwind CSS
- shadcn/ui-style components (hand-built, Tailwind-only — `src/components/ui`)
- `clsx` for class merging (the same utility shadcn/ui itself relies on)

No icon libraries, no Framer Motion/GSAP, no UI frameworks (Bootstrap/MUI/Chakra/DaisyUI) — all icons are hand-written inline SVGs in `src/components/Icons.jsx`, and all motion is CSS/Tailwind transitions + keyframes.

---

## 1. Project Setup From Scratch

These are the exact commands used to scaffold this project. Run them only if you want to rebuild it from zero — if you already have this folder, skip to step 2.

```bash
# 1. Create the Vite + React project
npm create vite@latest portfolio -- --template react
cd portfolio

# 2. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Install the one small utility shadcn/ui-style components rely on
npm install clsx
```

After this, the `tailwind.config.js`, `postcss.config.js`, and `src/styles/index.css` files in this repo replace the default generated ones, and the `src/components/ui/*` files are the shadcn/ui-style primitives (Button, Card, Badge, Input, Textarea) used throughout the site.

---

## 2. Run the Project

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

```bash
npm run build      # production build -> /dist
npm run preview    # preview the production build locally
```

---

## 3. Folder Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/                 # shadcn/ui-style primitives
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Textarea.jsx
│   │   │   └── utils.js
│   │   ├── Icons.jsx            # hand-written inline SVG icons
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── SectionHeading.jsx
│   │   └── FadeSection.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── education.js
│   │   └── links.js
│   ├── hooks/
│   │   ├── useTheme.jsx
│   │   ├── useActiveSection.jsx
│   │   ├── useScrollFade.jsx
│   │   └── useTypingEffect.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── netlify.toml
└── package.json
```

---

## 4. Adding Your Real Assets

Two placeholders need real files before deploying:

1. **Profile photo** — `src/sections/Hero.jsx` has `<img src="" .../>` inside the CSS blob shape. Drop your photo in `src/assets/` (e.g. `profile.jpg`), import it, and set the `src`.
2. **Resume** — the "Download Resume" button in `Hero.jsx` points to `/resume.pdf`. Add your résumé file to the `public/` folder as `resume.pdf`.
3. **Project screenshots** — `src/data/projects.js` has an `image: ""` field per project. Add screenshots to `src/assets/` and import them there.
4. **Social links** — update `src/data/links.js` with your real GitHub, LinkedIn, email, and phone number.
5. **Open Graph image** — `index.html` references `/og-image.png`; add a real social preview image to `public/`.

---

## 5. Theme System

Three themes — **System** (default), **Light**, and **Dark** — implemented with plain CSS variables + Tailwind's `darkMode: "class"`, no third-party theme library. The chosen theme is persisted in `localStorage` under the `portfolio-theme` key (`src/hooks/useTheme.jsx`).

---

## 6. Deploying to Netlify

1. Push this project to a GitHub repository.
2. In Netlify: **New site from Git** → select the repo.
3. Build command: `npm run build`
4. Publish directory: `dist`

The included `netlify.toml` already configures this, plus an SPA redirect rule, so the site deploys correctly with zero extra configuration.

---

## 7. Deploying via GitHub

```bash
git init
git add .
git commit -m "Initial commit: personal portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```
