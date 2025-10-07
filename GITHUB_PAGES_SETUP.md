# GitHub Pages Setup Instructions

This document provides step-by-step instructions for enabling GitHub Pages deployment for the Copilot Scratchpad documentation site.

## Prerequisites

The following has already been completed:
- ✅ Docusaurus site configured and built successfully
- ✅ GitHub Actions workflow created (`.github/workflows/deploy.yml`)
- ✅ Repository configured with correct base URL and organization name
- ✅ Documentation content created (including GitHub Copilot onboarding)

## Manual Setup Required

To enable automatic deployment to GitHub Pages, you need to configure the repository settings:

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/castrojo/copilot-scratchpad
2. Click on **Settings** (in the top navigation bar)
3. In the left sidebar, click on **Pages** (under "Code and automation")

### Step 2: Configure Build and Deployment

1. Under "Build and deployment" section:
   - **Source**: Select **"GitHub Actions"** from the dropdown
   - (The "Branch" dropdown will be disabled when using GitHub Actions)

2. Click **Save** if prompted

### Step 3: Trigger Deployment

The site will automatically deploy when:
- Any commit is pushed to the `main` branch
- The PR is merged to `main`

To manually trigger a deployment:
1. Go to **Actions** tab in your repository
2. Click on "Deploy to GitHub Pages" workflow
3. Click **Run workflow** button
4. Select `main` branch and click **Run workflow**

## Verification

After the workflow completes:

1. Go to **Settings** → **Pages**
2. You should see a green checkmark with the message: "Your site is live at https://castrojo.github.io/copilot-scratchpad/"
3. Click the link to visit your deployed site

## Troubleshooting

### Workflow Fails

If the GitHub Actions workflow fails:

1. Go to **Actions** tab
2. Click on the failed workflow run
3. Review the error logs
4. Common issues:
   - Missing permissions: Ensure "Read and write permissions" are enabled in **Settings** → **Actions** → **General** → **Workflow permissions**
   - Branch protection rules may need to be adjusted

### Site Shows 404

If the site shows a 404 error:

1. Verify the `baseUrl` in `website/docusaurus.config.ts` matches your repository name: `/copilot-scratchpad/`
2. Ensure GitHub Pages is enabled in repository settings
3. Wait a few minutes for DNS propagation

### Site Not Updating

If the site doesn't update after pushing changes:

1. Check the **Actions** tab to see if the workflow ran
2. Verify the workflow completed successfully
3. Clear your browser cache
4. Wait a few minutes for GitHub Pages to propagate changes

## Site URLs

- **Production URL**: https://castrojo.github.io/copilot-scratchpad/
- **Local Development**: http://localhost:3000/copilot-scratchpad/

## Additional Notes

- The workflow builds on every push to `main` and on pull requests
- Pull requests build the site for validation but don't deploy
- Only commits to `main` trigger actual deployment
- The site uses the static file approach with GitHub Actions for deployment (recommended by Docusaurus)
