# Camilo Sánchez — UEFN Portfolio

A focused portfolio for Technical Artist, UEFN Developer, and Gameplay Programmer roles. The site highlights Fortune City, Battle Academy, No Safe Zone, and Griefville, and includes the résumé prepared for the Pandvil application.

## Preview locally

1. Install Node.js 20.
2. Run `npm install`.
3. Run `$env:NODE_OPTIONS='--openssl-legacy-provider'` in Windows PowerShell.
4. Run `npm run serve`.
5. Open the local address shown in the terminal.

## Publish to GitHub Pages

This project includes an automatic GitHub Pages workflow. Every change pushed to `main` or `master` is built and published.

1. Copy this project's contents into the `cmilo1357.github.io` repository.
2. Commit and push the changes to GitHub.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Open the repository's **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to finish.
6. Visit `https://cmilo1357.github.io/` and refresh the page.

The workflow builds the site automatically, so the generated `dist` folder does not need to be committed.

## Main content locations

- Project copy and metrics: `src/data/GameProjectsData.ts`
- Home/about page: `src/views/About.vue`
- Résumé page: `src/views/Resume.vue`
- Contact details: `src/views/Contact.vue`
- Project images: `public/img/projects`
- Downloadable résumé: `public/d/Camilo_Sanchez_Resume.pdf`

## Commands

- `npm run serve` — local development preview
- `npm run build` — production build
- `npm run lint` — code checks
