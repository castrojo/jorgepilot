# Algolia Search Setup

This site has been successfully migrated from local search to Algolia DocSearch.

## What Was Changed

### Removed
1. **Local search plugin**: `@easyops-cn/docusaurus-search-local` package removed
2. **Local search configuration**: Removed the entire `themes` section from `docusaurus.config.ts`
3. **Search documentation**: Removed `SEARCH_DOCUMENTATION.md` (was specific to local search)

### Added
1. **Algolia configuration** in `docusaurus.config.ts`:
   ```typescript
   algolia: {
     appId: 'ID78S355M6',
     apiKey: 'YOUR_SEARCH_API_KEY', // Replace with actual API key
     indexName: 'jorgepilot',
   }
   ```

### Updated
1. **README.md**: Updated to reflect Algolia integration

## Next Steps to Complete Setup

### 1. Get Your Algolia API Key

You need to obtain a search-only API key from Algolia:

1. Go to [Algolia Dashboard](https://www.algolia.com/dashboard)
2. Navigate to **API Keys** section
3. Copy your **Search-Only API Key** (safe to commit to public repos)

### 2. Update the Configuration

Replace `YOUR_SEARCH_API_KEY` in `website/docusaurus.config.ts` with your actual API key:

```typescript
algolia: {
  appId: 'ID78S355M6',
  apiKey: 'abc123your-actual-search-api-key', // Your actual key here
  indexName: 'jorgepilot',
}
```

### 3. Configure Algolia Crawler

To index your documentation:

1. **Option A: DocSearch Program** (Free for open source)
   - Apply at [DocSearch](https://docsearch.algolia.com/apply/)
   - Algolia will set up and maintain the crawler for you

2. **Option B: Manual Crawler Setup**
   - Create a crawler in Algolia Dashboard
   - Configure it to crawl `https://castrojo.github.io/jorgepilot`
   - Set up appropriate selectors for documentation content

### 4. Test Search Functionality

Once indexing is complete:
1. Open your site
2. Click the search button or press `Ctrl+K` (or `Cmd+K` on Mac)
3. Try searching for content from your documentation

## Features

The Algolia search integration provides:
- ⌨️ Keyboard shortcuts (`Ctrl+K` or `Cmd+K`)
- 🔍 Real-time search as you type
- 📱 Mobile-friendly search interface
- 🎨 Automatic dark/light mode support
- ⚡ Fast, cloud-powered search
- 🔐 Secure search-only API key (safe to commit)

## Troubleshooting

### Search returns no results
- Verify your API key is correct
- Ensure the Algolia crawler has indexed your site
- Check that the `indexName` matches your Algolia index

### Search button doesn't appear
- Clear browser cache and reload
- Check browser console for errors
- Verify the build completed successfully

### Styling issues
- Algolia search inherits Docusaurus theme styles
- Dark mode is automatically supported

## Documentation

- [Docusaurus Algolia Documentation](https://docusaurus.io/docs/search#using-algolia-docsearch)
- [Algolia DocSearch Documentation](https://docsearch.algolia.com/docs/what-is-docsearch)

## For Template Users

If you're using this repository as a template (creating "alicepilot" or "bobpilot"):

1. You'll need your own Algolia account and API key
2. Update the `appId` and `indexName` to match your setup
3. The search will need to be configured for your custom domain/URL
