# copilot-scratchpad

Things I make copilot do for me

## Documentation

This repository includes a Docusaurus documentation site that is automatically deployed to GitHub Pages.

**Live Site:** https://castrojo.github.io/copilot-scratchpad/

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
