# jorgepilot

Things I make copilot do for me.

## Customization

Want to create your own branded version? (e.g., "Jeefypilot", "MrBobbypilot")

See the **[Customization Guide](CUSTOMIZATION.md)** for instructions on personalizing the site with your name and GitHub avatar.

**TL;DR**: Edit 4 lines at the top of `website/docusaurus.config.ts` to set your GitHub username, repository name, display name, and tagline. Your GitHub avatar will automatically become the favicon and logo!

## Documentation

This repository includes a Docusaurus documentation site that is automatically deployed to GitHub Pages.

**Live Site:** https://castrojo.github.io/jorgepilot

### Features

- 🔍 **Site-wide search** - Press `Ctrl+K` (or `Cmd+K` on Mac) to search all documentation
- 📱 **Responsive design** - Works on mobile, tablet, and desktop
- 🌙 **Dark mode support** - Automatic theme switching
- 🚀 **Fast & offline** - Client-side search with no external dependencies

See [SEARCH_DOCUMENTATION.md](SEARCH_DOCUMENTATION.md) for detailed search documentation.

## Local Development

To run the documentation site locally:

```bash
cd website
npm install
npm start
```

This will start a local development server at http://localhost:3000/

## Deployment

The documentation site is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The deployment is handled by GitHub Actions (see `.github/workflows/deploy.yml`).

### Setup Requirements

To enable GitHub Pages deployment:

1. Go to your repository Settings → Pages
2. Under "Build and deployment", set:
   - **Source:** GitHub Actions
3. The workflow will automatically deploy on the next push to `main`

## Building for Production

To build the site for production:

```bash
cd website
npm run build
```

The static files will be generated in `website/build/`.

## Documentation Content

The documentation includes:
- Getting started guide
- GitHub Copilot onboarding documentation
- Tutorial content and examples
