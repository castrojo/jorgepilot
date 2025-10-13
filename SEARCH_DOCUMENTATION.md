# Site-Wide Search Documentation

This site uses [@easyops-cn/docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local) for client-side, self-hosted search functionality.

## Features

- **🔍 Site-wide search** - Automatically indexes all documentation pages
- **⚡ Fast & offline** - Client-side search using Lunr.js, works without internet
- **🎯 Smart highlighting** - Highlights search terms on result pages
- **⌨️ Keyboard shortcut** - Press `Ctrl+K` (or `Cmd+K` on Mac) to focus search
- **📱 Responsive** - Works on mobile, tablet, and desktop
- **🌙 Theme-aware** - Automatically adapts to light/dark mode
- **🆓 No external dependencies** - No Algolia account or API keys required

## How It Works

### Search Index Generation

The search index is automatically generated during the build process:

```bash
npm run build
```

This creates a search index that includes:
- Page titles
- Headings (h1-h6)
- Paragraph text
- Code block content

### Using Search

**Method 1: Click the search box**
- Click the search box in the top navigation bar
- Type your query
- Results appear instantly as you type

**Method 2: Keyboard shortcut**
- Press `Ctrl+K` (Windows/Linux) or `Cmd+K` (Mac)
- Type your search query
- Navigate results with arrow keys
- Press `Enter` to visit the selected page

### Configuration

Search is configured in `website/docusaurus.config.ts`:

```typescript
themes: [
  [
    require.resolve('@easyops-cn/docusaurus-search-local'),
    ({
      hashed: true,                           // Enable cache-busting
      language: ['en'],                       // Search language
      highlightSearchTermsOnTargetPage: true, // Highlight on result pages
      explicitSearchResultPath: true,         // Show full paths
    }),
  ],
],
```

## Customization Options

You can customize search behavior by modifying the plugin options:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `hashed` | boolean | `false` | Enable hashed search index for cache-busting |
| `language` | string[] | `['en']` | Languages to index (e.g., `['en', 'zh']`) |
| `highlightSearchTermsOnTargetPage` | boolean | `false` | Highlight search terms on result pages |
| `explicitSearchResultPath` | boolean | `false` | Show full document paths in results |
| `searchResultLimits` | number | `8` | Maximum number of search results to show |
| `searchResultContextMaxLength` | number | `50` | Maximum length of result context snippet |

See the [full plugin documentation](https://github.com/easyops-cn/docusaurus-search-local#theme-options) for more options.

## Troubleshooting

### Search returns no results

**Issue**: Searching returns "No results found" even though content exists.

**Solution**: Rebuild the site to regenerate the search index:
```bash
cd website
npm run build
```

### Search index is outdated

**Issue**: New pages don't appear in search results.

**Solution**: The search index is generated at build time. After adding new content:
1. Rebuild the site: `npm run build`
2. Deploy the updated build

### Dev mode shows warning

**Issue**: In development mode (`npm start`), search shows a warning about the index.

**Solution**: This is expected behavior. The search index is only generated during production builds (`npm run build`). For full search functionality, test with:
```bash
npm run build
npm run serve
```

## Deployment

The search functionality works automatically with GitHub Pages deployment. The search index is included in the built static files and requires no server-side components.

### GitHub Actions

The existing `.github/workflows/deploy.yml` workflow automatically builds the site (including search index) and deploys to GitHub Pages.

## For Template Users

If you're using this repository as a template (e.g., creating "alicepilot" or "bobpilot"):

1. ✅ Search is already configured - no changes needed
2. ✅ Search will automatically index your content
3. ✅ Keyboard shortcuts work out of the box
4. ✅ No API keys or external services required

The search plugin will work with your customized content automatically!

## Performance

- **Index size**: Typically 50-200KB for small to medium sites
- **Search speed**: Sub-100ms for most queries
- **Build time**: Adds ~1-5 seconds to build time
- **Browser compatibility**: All modern browsers (Chrome, Firefox, Safari, Edge)

## Credits

- Plugin: [@easyops-cn/docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local)
- Search engine: [Lunr.js](https://lunrjs.com/)
- Platform: [Docusaurus](https://docusaurus.io/)
