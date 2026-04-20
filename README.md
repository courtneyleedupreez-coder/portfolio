# Courtney du Preez — Portfolio

Personal portfolio site for Courtney du Preez — graphic and social media designer based in Buenos Aires.

Built with React (Create React App). Deployed on Vercel.

## Live site

[courtneydupreez.vercel.app](https://courtneydupreez.vercel.app)

## Local development

```bash
npm install
npm start
```

Opens at `http://localhost:3000`.

## Build

```bash
npm run build
```

Outputs a production build to `/build`.

## Structure

- `src/App.js` — root component
- `src/index.css` — design system (colors, typography, layout)
- `src/components/` — section components (Hero, Featured, Work, About, Contact, etc.)
- `src/components/projectsData.js` — single source of truth for all projects
- `src/assets/` — project images (photography and design work)
- `public/media/` — video and animated GIF assets

## Design

- **Typography**: Fraunces (display serif) + Inter (UI) + JetBrains Mono (labels)
- **Palette**: Off-black canvas (`#0E0E0C`), cream text (`#F2EDE4`), vermilion accent (`#FF3D00`)
