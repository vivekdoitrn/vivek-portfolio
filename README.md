# Vivek Ranjan Upadhyay — Portfolio

A warm, espresso-toned developer portfolio built with **React 19, TypeScript and Vite**. Plain CSS (no UI framework), inline SVG icons, and a single content file per concern, so there are only two runtime dependencies: `react` and `react-dom`.

## Run it

Requires Node.js **20.19+** (or 22.12+).

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:5173
npm run typecheck  # TypeScript check only
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

Run `npm install` once and commit the generated `package-lock.json`.

## Where to edit things

| What | File |
| --- | --- |
| Email, GitHub, LinkedIn, resume link | `src/data/site.ts` |
| Projects (text, repo URL, live demo URL, screenshot, status, order) | `src/data/projects.ts` |
| Per-feature status of an unfinished project (PulseForge) | `roadmap` in `src/data/projects.ts` |
| Skills and which ones are marked "used most" | `src/data/skills.ts` |
| About text, education and certifications | `src/components/About.tsx` |
| Hero text | `src/components/Hero.tsx` |
| Colors, fonts, spacing | top of `src/styles.css` (`:root` tokens: `--bg`, `--surface`, `--text`, `--accent` bronze, `--sand`, `--clay`) |
| Page title, description, social tags | `index.html` |

### Project links and screenshots

- **Repository button** appears only when `repoUrl` is set. **Live Demo** appears only when `liveUrl` is set. Add `liveUrl` only for a real, deployed demo.
- The project visuals are schematic illustrations (no numbers, no results). To show a real screenshot instead, copy the image into `public/projects/`, then set `image: '/projects/your-file.png'` and `imageAlt` on the project.
- The Financial Analytics Dashboard has no link yet. Uncomment and fill `repoUrl` / `liveUrl` in `src/data/projects.ts` when you publish it.
- PulseForge is the first card in the Projects grid, labelled **In Progress**. Each feature in its `roadmap` is `'implemented'`, `'in-development'` or `'planned'`; change one to `'implemented'` only when it is built and verified.

## Deploy

### Option A — Vercel (simplest)

1. Push this project to a GitHub repository.
2. Go to <https://vercel.com/new>, sign in with GitHub and **Import** the repository.
3. Vercel detects Vite automatically (Build command `npm run build`, Output directory `dist`). Click **Deploy**.
4. After the first deploy, open **Settings → Environment Variables** and add `VITE_SITE_URL` = your site URL with no trailing slash (e.g. `https://your-name.vercel.app`), then redeploy. This makes the social-preview image URL absolute.

### Option B — GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.

1. Push this project to GitHub (branch `main`). To replace your existing `vivekdoitrn/portfolio` repository, copy these files into it and commit.
2. In the repository open **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Push (or run the workflow from the **Actions** tab). The site is published at `https://vivekdoitrn.github.io/<repository-name>/`. For a repository named `vivekdoitrn.github.io` it is published at the root.

The workflow sets `VITE_BASE` and `VITE_SITE_URL` for you. For a local build that mimics Pages: `VITE_BASE=/portfolio/ npm run build`.

## Notes

- The page is fully functional without JavaScript-driven animation: reveal animations respect `prefers-reduced-motion`.
- Fonts (Fraunces for headlines, Manrope for text, JetBrains Mono for labels) load from Google Fonts; the site falls back to system fonts if they are blocked.
- The resume button in the header opens the Drive preview; **Download Resume** in the contact section uses a direct-download link derived from the same file. The Drive file must be shared as "Anyone with the link".
