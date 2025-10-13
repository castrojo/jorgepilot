# Hugo to Docusaurus Section Index Implementation Guide

## Overview

This guide documents how to replicate Hugo's `section-index` partial functionality in Docusaurus, specifically for the CNCF contribute site. The Hugo section-index displays a list of child pages with titles and descriptions, commonly used on index pages to guide users to subsections.

## Hugo Section Index Behavior

In Hugo (used by kubernetes/contributor-site), the `section-index.html` partial:

1. Lists all child pages in the current section
2. Displays each page's title as a clickable link
3. Shows the page description below the title
4. Adds horizontal separators between entries
5. Provides a clean, simple layout

**Example from Kubernetes contributor site:**
```markdown
---
title: "Documentation"
description: "Kubernetes Contributor Documentation"
type: docs
---
```

The layout template automatically calls `{{ partial "section-index.html" . }}` which renders child pages.

## Docusaurus Implementation

### Step 1: Create the SectionIndex Component

Create `src/components/SectionIndex.tsx`:

```typescript
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './SectionIndex.module.css';

interface SectionItem {
  title: string;
  path: string;
  description?: string;
}

interface SectionIndexProps {
  sections: SectionItem[];
}

export default function SectionIndex({ sections }: SectionIndexProps): React.JSX.Element {
  if (sections.length === 0) {
    return <></>;
  }

  return (
    <div className={styles.sectionIndex}>
      <hr className={styles.panelLine} />
      {sections.map((section, index) => (
        <div key={index} className={styles.entry}>
          <h5>
            <Link to={section.path}>{section.title}</Link>
          </h5>
          {section.description && <p>{section.description}</p>}
        </div>
      ))}
    </div>
  );
}
```

### Step 2: Create the CSS Module

Create `src/components/SectionIndex.module.css`:

```css
.sectionIndex {
  margin: 2rem 0;
}

.panelLine {
  border: 0;
  height: 1px;
  background: var(--ifm-color-emphasis-300);
  margin: 2rem 0 1.5rem 0;
}

.entry {
  margin-bottom: 2rem;
}

.entry h5 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.entry h5 a {
  color: var(--ifm-heading-color);
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

.entry h5 a:hover {
  color: var(--ifm-color-primary);
  text-decoration: none;
}

.entry p {
  margin: 0;
  color: var(--ifm-color-emphasis-700);
  line-height: 1.6;
}

/* Dark mode support */
[data-theme='dark'] .panelLine {
  background: var(--ifm-color-emphasis-300);
}
```

### Step 3: Use in Index Pages

Update your index page (e.g., `docs/_index.md` or `docs/index.md`):

```markdown
---
title: Documentation
description: Kubernetes Contributor Documentation
---

import SectionIndex from '@site/src/components/SectionIndex';

# Kubernetes Contributor Documentation

Welcome to the Kubernetes contributor documentation.

<SectionIndex sections={[
  {
    title: "Getting Started",
    path: "/docs/guide/getting-started",
    description: "Learn how to get started contributing to Kubernetes"
  },
  {
    title: "Community",
    path: "/docs/community",
    description: "Learn about the Kubernetes contributor community"
  },
  {
    title: "Development Guide",
    path: "/docs/guide",
    description: "Technical guides for developing Kubernetes"
  }
]} />
```

### Step 4: Create Category Index Pages

For each category directory, create an `index.md`:

```markdown
---
title: Category Name
description: Description of this category
---

import SectionIndex from '@site/src/components/SectionIndex';

# Category Name

Introduction text here.

<SectionIndex sections={[
  {
    title: "Page 1",
    path: "/category/page1",
    description: "Description of page 1"
  },
  {
    title: "Page 2",
    path: "/category/page2",
    description: "Description of page 2"
  }
]} />
```

## Key Differences from Hugo

| Aspect | Hugo | Docusaurus |
|--------|------|------------|
| **Automation** | Automatic - reads file system | Manual - define sections in component |
| **Configuration** | Frontmatter + templates | React component props |
| **Styling** | CSS in theme | CSS modules |
| **Flexibility** | Limited to file structure | Full programmatic control |

## Advantages of the Docusaurus Approach

1. **Explicit Control**: You explicitly define what appears in the section index
2. **Flexibility**: Can reorder, hide, or customize any section
3. **Type Safety**: TypeScript ensures correct prop types
4. **Consistent Styling**: Uses Docusaurus theme variables for dark mode support
5. **Easy to Extend**: Can add icons, badges, or other metadata easily

## Migration Checklist for CNCF Contribute Site

- [ ] Create `SectionIndex.tsx` component
- [ ] Create `SectionIndex.module.css` styles
- [ ] Create `docs/index.md` with main section index
- [ ] Identify all category directories needing index pages
- [ ] Create `index.md` for each category
- [ ] Update each index page with appropriate sections
- [ ] Test build: `npm run build`
- [ ] Test locally: `npm start`
- [ ] Verify all links work correctly
- [ ] Check responsive design on mobile
- [ ] Verify dark mode styling

## Testing

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Serve production build
npm run serve
```

## Screenshots

### Homepage with Section Index
![Index Page](https://github.com/user-attachments/assets/e6b03e5f-4896-49cd-859f-6adb2397ae9b)

The section index displays after the main content, showing two sections with titles, links, and descriptions.

### Category Page with Section Index
The same component works for category pages, showing subsections within that category.

## Example Implementation

See the working implementation in this repository:
- Component: `website/src/components/SectionIndex.tsx`
- Styles: `website/src/components/SectionIndex.module.css`
- Usage: `website/docs/intro.md` and `website/docs/reports/index.md`

## Additional Notes

- **Docusaurus Configuration**: Ensure `routeBasePath: '/'` is set in `docusaurus.config.ts` to serve docs at root
- **Link Paths**: Use relative paths starting with `/` for proper routing
- **Descriptions**: Keep descriptions concise (1-2 sentences)
- **Order**: Sections appear in the order defined in the array

## Support

For questions or issues implementing this in the CNCF contribute site:
1. Review the working example in this repository
2. Check Docusaurus documentation: https://docusaurus.io
3. Reference Hugo section-index behavior: https://github.com/google/docsy

## Related Resources

- [Docusaurus Markdown Features](https://docusaurus.io/docs/markdown-features)
- [Docusaurus React Components](https://docusaurus.io/docs/markdown-features/react)
- [Hugo Docsy Section Index](https://github.com/google/docsy/blob/main/layouts/_partials/section-index.html)
- [Kubernetes Contributor Site](https://github.com/kubernetes/contributor-site)
