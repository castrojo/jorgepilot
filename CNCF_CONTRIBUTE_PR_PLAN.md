# CNCF Contribute Site Pull Request Plan

## Overview

This document outlines the complete plan for implementing a Hugo-like section index on the CNCF contribute site using Docusaurus.

## Background

The CNCF contribute site currently uses Hugo with the Docsy theme. The Kubernetes contributor site (also Hugo/Docsy) uses a section-index partial that automatically displays child pages on index pages. We want to replicate this functionality in Docusaurus for the CNCF contribute site.

## Implementation Components

### 1. SectionIndex React Component

**File**: `src/components/SectionIndex.tsx`

A reusable React component that displays a list of sections with:
- Title (as clickable link)
- Description
- Horizontal separator
- Hover effects
- Dark mode support

### 2. CSS Module for Styling

**File**: `src/components/SectionIndex.module.css`

Provides styling that matches Hugo's section-index appearance:
- Simple, clean layout
- Proper spacing
- Theme-aware colors (uses Docusaurus CSS variables)
- Responsive design
- Dark mode compatibility

### 3. Index Pages

Create or update index pages to use the component:
- Main documentation index (`docs/index.md` or `docs/_index.md`)
- Category index pages (one per category)

## Files to Create/Modify

### New Files

1. `src/components/SectionIndex.tsx` - React component
2. `src/components/SectionIndex.module.css` - Component styles

### Modified Files

1. `docs/index.md` (or `docs/_index.md`) - Main documentation index
2. `docs/[category]/index.md` - One per category that needs an index

## Pull Request Structure

### Commit 1: Add SectionIndex Component

```bash
git add src/components/SectionIndex.tsx
git add src/components/SectionIndex.module.css
git commit -m "feat(docs): add SectionIndex component for Hugo-like page listing"
```

**Commit Message Details:**
```
feat(docs): add SectionIndex component for Hugo-like page listing

Add a reusable React component that replicates Hugo's section-index
partial functionality. This component displays a list of child pages
with titles, descriptions, and links in a clean, simple layout.

Features:
- Title and description display
- Clickable links with hover effects
- Horizontal separator between entries
- Dark mode support using Docusaurus theme variables
- TypeScript type safety
- Responsive design

This component allows documentation maintainers to create index pages
that guide users to subsections, matching the behavior of the
Kubernetes contributor site.
```

### Commit 2: Add Main Documentation Index

```bash
git add docs/index.md
git commit -m "docs: add main documentation index with section listing"
```

**Commit Message Details:**
```
docs: add main documentation index with section listing

Create the main documentation index page that uses the SectionIndex
component to display top-level documentation sections. This replaces
the auto-generated index with a curated list of main sections.

The index page provides:
- Welcome message
- Overview of documentation structure
- Links to main sections with descriptions
```

### Commit 3: Add Category Index Pages

```bash
git add docs/[category1]/index.md
git add docs/[category2]/index.md
# ... for each category
git commit -m "docs: add category index pages for better navigation"
```

**Commit Message Details:**
```
docs: add category index pages for better navigation

Add index pages for each documentation category to improve navigation
and help users find relevant content. Each index page lists the
subsections within that category with descriptions.

Categories updated:
- [List categories here]
```

## Testing Checklist

- [ ] Component renders correctly on index pages
- [ ] Links navigate to correct destinations
- [ ] Descriptions display properly
- [ ] Hover effects work on links
- [ ] Dark mode styling looks good
- [ ] Light mode styling looks good
- [ ] Responsive design works on mobile
- [ ] Build succeeds without errors
- [ ] TypeScript type checking passes
- [ ] No broken links detected
- [ ] Accessibility: keyboard navigation works
- [ ] Accessibility: screen reader friendly

## Example Index Page Content

```markdown
---
title: Contributing
description: Learn how to contribute to CNCF projects
---

import SectionIndex from '@site/src/components/SectionIndex';

# Contributing to CNCF

Welcome to the CNCF contributor guide. This documentation helps you
get started contributing to Cloud Native Computing Foundation projects.

<SectionIndex sections={[
  {
    title: "Getting Started",
    path: "/contributing/getting-started",
    description: "New to CNCF? Start here to learn how to make your first contribution"
  },
  {
    title: "Governance",
    path: "/contributing/governance",
    description: "Understand CNCF governance structure and decision-making processes"
  },
  {
    title: "Community",
    path: "/contributing/community",
    description: "Connect with the CNCF community through meetings, chat, and events"
  },
  {
    title: "Development Guide",
    path: "/contributing/development",
    description: "Technical guides for developing and testing CNCF projects"
  }
]} />
```

## Pull Request Description Template

```markdown
## Summary

This PR implements a Hugo-like section index component for Docusaurus,
replicating the functionality of the section-index partial used in the
Kubernetes contributor site.

## Problem

The CNCF contribute site needs better navigation on index pages to help
users discover relevant documentation sections. Hugo's section-index
partial automatically displays child pages, but Docusaurus doesn't have
a direct equivalent.

## Solution

Created a reusable `SectionIndex` React component that:
- Displays sections with titles and descriptions
- Provides clickable links to documentation pages
- Matches the visual style of Hugo's section-index
- Supports dark mode
- Uses TypeScript for type safety

## Implementation

1. **SectionIndex Component** (`src/components/SectionIndex.tsx`)
   - TypeScript React component
   - Accepts array of sections with title, path, and description
   - Renders formatted list with links

2. **Styling** (`src/components/SectionIndex.module.css`)
   - CSS module for scoped styles
   - Uses Docusaurus theme variables
   - Dark mode compatible
   - Responsive design

3. **Index Pages** (`docs/*/index.md`)
   - Main documentation index
   - Category index pages
   - Each uses SectionIndex component

## Screenshots

### Main Index Page
![Screenshot](URL)

### Category Index Page
![Screenshot](URL)

## Testing

- [x] Component renders correctly
- [x] Links work properly
- [x] Dark mode styling verified
- [x] Build succeeds
- [x] TypeScript checks pass
- [x] No broken links

## Documentation

See `HUGO_TO_DOCUSAURUS_GUIDE.md` for complete implementation guide.

## Breaking Changes

None. This is a new feature that doesn't modify existing functionality.

## References

- Hugo section-index: https://github.com/google/docsy/blob/main/layouts/_partials/section-index.html
- Kubernetes contributor site: https://github.com/kubernetes/contributor-site
```

## Rollout Plan

1. **Phase 1**: Merge component (non-breaking)
2. **Phase 2**: Update main index page
3. **Phase 3**: Gradually add category index pages
4. **Phase 4**: Gather feedback and iterate

## Maintenance

- Component is simple and self-contained
- No external dependencies beyond Docusaurus
- Easy to modify styling or behavior
- TypeScript provides compile-time safety

## Future Enhancements

Possible future improvements:
- Auto-generate section list from sidebar config
- Add icons for each section
- Add badges (new, updated, etc.)
- Support for nested sections
- Filtering/search within sections

## Support

For questions or assistance:
1. Review the implementation guide: `HUGO_TO_DOCUSAURUS_GUIDE.md`
2. Check the working example in this repository
3. Reference Docusaurus documentation
4. Ask in CNCF Slack or contributor channels
