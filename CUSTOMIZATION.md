# Customization Guide

This guide explains how to customize your jorgepilot site to create your own branded version (e.g., "Jeefypilot", "MrBobbypilot").

## Quick Start

To personalize your pilot, edit the top of `website/docusaurus.config.ts`:

```typescript
// ============================================================================
// CUSTOMIZATION: Change these values to personalize your pilot
// ============================================================================
const GITHUB_USERNAME = 'castrojo'; // Your GitHub username
const DISPLAY_NAME = 'Jorge'; // Your name (e.g., 'Jorge', 'Jeefy', 'MrBobby')
const TAGLINE = 'Metallica in your brain, all the time.'; // Your custom tagline
```

## What Gets Customized

When you change these values, the following will automatically update:

### 1. Site Title
- Page title becomes `{DISPLAY_NAME}pilot` (e.g., "Jeefypilot")
- Navbar title updates to match

### 2. Icons & Avatars
- **Favicon**: Uses your GitHub avatar (automatically fetched from `https://avatars.githubusercontent.com/{GITHUB_USERNAME}`)
- **Logo**: Navbar logo uses your GitHub avatar
- No need to create or manage icon files manually!

### 3. GitHub Links
- All GitHub links point to your repository
- Edit links point to your repo
- Footer GitHub link updates

### 4. Site URL
- Production URL becomes `https://{GITHUB_USERNAME}.github.io/jorgepilot`

## Example Customization

If Jeefy wanted to create "Jeefypilot":

```typescript
const GITHUB_USERNAME = 'jeefy';
const DISPLAY_NAME = 'Jeefy';
const TAGLINE = 'Building the future, one commit at a time.';
```

Result:
- Site title: "Jeefypilot"
- Favicon & Logo: Jeefy's GitHub avatar
- URL: https://jeefy.github.io/jorgepilot

## Why GitHub Avatars?

Using GitHub avatars has several advantages:
- **No file management**: No need to create or update favicon/logo files
- **Always current**: Avatar automatically updates when you change it on GitHub
- **Consistent branding**: Your recognizable GitHub identity across the site
- **Zero configuration**: Works out of the box for anyone who forks

## Advanced Customization

If you want more control beyond the basic settings:

### Change the Tagline
The tagline appears as the site subtitle. Make it your own!

### Repository Name
If you fork this with a different repo name, update line 33:
```typescript
baseUrl: '/your-repo-name',
```

### Theme Colors
Edit `website/src/css/custom.css` to customize colors and styling.

## Template Use Case

This setup makes jorgepilot perfect as a **template repository**. Anyone can:
1. Fork the repo
2. Edit 3 lines in `docusaurus.config.ts`
3. Get a fully branded documentation site with their GitHub avatar

No design skills or icon creation needed!
