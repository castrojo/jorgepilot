# CNCF Contribute Site: Section Index Implementation

## Quick Start Guide

This guide shows how to implement the section index component on the CNCF contribute site to replicate the Kubernetes contributor site's index page layout.

## Prerequisites

- CNCF contribute site using Docusaurus
- Access to the repository
- Node.js and npm installed

## Implementation Steps

### Step 1: Copy Component Files (2 minutes)

Copy these two files to your CNCF contribute site repository:

**From**: `website/src/components/SectionIndex.tsx`  
**To**: `[contribute-site]/src/components/SectionIndex.tsx`

**From**: `website/src/components/SectionIndex.module.css`  
**To**: `[contribute-site]/src/components/SectionIndex.module.css`

```bash
# From this repository root
cd /path/to/jorgepilot
cp website/src/components/SectionIndex.tsx /path/to/contribute-site/src/components/
cp website/src/components/SectionIndex.module.css /path/to/contribute-site/src/components/
```

### Step 2: Identify Existing Index Page (1 minute)

Find the main documentation index page. It's likely one of:
- `docs/index.md`
- `docs/_index.md`
- `content/en/docs/_index.md` (if migrating from Hugo)

### Step 3: Update Main Index Page (5 minutes)

Replace or update the main index page content:

```markdown
---
title: Documentation
description: CNCF Contributor Documentation
---

import SectionIndex from '@site/src/components/SectionIndex';

# CNCF Contributor Documentation

Welcome to the CNCF contributor documentation. Here you'll find everything you need to contribute to Cloud Native Computing Foundation projects.

<SectionIndex sections={[
  {
    title: "Getting Started",
    path: "/docs/guide/getting-started",
    description: "New to CNCF? Start here to learn how to make your first contribution to CNCF projects"
  },
  {
    title: "Community",
    path: "/docs/community",
    description: "Learn about the CNCF community, special interest groups, and how to get involved"
  },
  {
    title: "Contributor Guide",
    path: "/docs/guide",
    description: "Detailed guides for contributing code, documentation, and other resources"
  },
  {
    title: "Governance",
    path: "/docs/governance",
    description: "Understand CNCF governance structure, voting, and decision-making processes"
  }
]} />
```

**Customize the sections array** to match your actual documentation structure.

### Step 4: Create Category Index Pages (Optional, 5 minutes each)

For each major category, create an `index.md`:

**Example**: `docs/guide/index.md`

```markdown
---
title: Contributor Guide
description: Guides for contributing to CNCF projects
---

import SectionIndex from '@site/src/components/SectionIndex';

# Contributor Guide

Comprehensive guides for contributing to CNCF projects.

<SectionIndex sections={[
  {
    title: "Development Setup",
    path: "/docs/guide/setup",
    description: "Set up your local development environment"
  },
  {
    title: "Pull Request Process",
    path: "/docs/guide/pull-requests",
    description: "How to submit and review pull requests"
  },
  {
    title: "Testing",
    path: "/docs/guide/testing",
    description: "Test your changes before submitting"
  },
  {
    title: "Documentation",
    path: "/docs/guide/documentation",
    description: "Contribute to project documentation"
  }
]} />
```

### Step 5: Test Locally (5 minutes)

```bash
cd /path/to/contribute-site

# Install dependencies if needed
npm install

# Start development server
npm start

# Build for production
npm run build
```

**Verify**:
- All links work correctly
- Section index displays properly
- Dark mode looks good
- Mobile responsive

### Step 6: Commit and Create PR (5 minutes)

```bash
git checkout -b feat/add-section-index
git add src/components/SectionIndex.tsx
git add src/components/SectionIndex.module.css
git add docs/index.md
git commit -m "feat(docs): add section index component for improved navigation"
git push origin feat/add-section-index
```

## Example Mappings from Kubernetes Site

If you're replicating the Kubernetes contributor site structure:

| Kubernetes Section | Path | Description |
|-------------------|------|-------------|
| Guide | `/docs/guide/` | Contributor guide and best practices |
| Resources | `/docs/resources/` | Additional resources for contributors |
| Community | `/docs/community/` | Community resources and communication |
| Events | `/docs/events/` | Contributor events and summits |

**Example for CNCF**:

```tsx
<SectionIndex sections={[
  {
    title: "Contributor Guide",
    path: "/docs/guide",
    description: "Learn how to contribute to CNCF projects"
  },
  {
    title: "Resources",
    path: "/docs/resources",
    description: "Additional resources for CNCF contributors"
  },
  {
    title: "Community",
    path: "/docs/community",
    description: "Connect with the CNCF contributor community"
  },
  {
    title: "Events",
    path: "/docs/events",
    description: "CNCF contributor summits and events"
  }
]} />
```

## Customization Options

### Adding More Metadata

Extend the component to support icons or badges:

```tsx
// In SectionIndex.tsx, add to interface:
interface SectionItem {
  title: string;
  path: string;
  description?: string;
  icon?: string;  // Add this
  badge?: string; // Add this
}

// Then render in component:
<div className={styles.entry}>
  <h5>
    {section.icon && <span>{section.icon}</span>}
    <Link to={section.path}>{section.title}</Link>
    {section.badge && <span className={styles.badge}>{section.badge}</span>}
  </h5>
  {section.description && <p>{section.description}</p>}
</div>
```

### Customizing Styles

Edit `SectionIndex.module.css` to match your branding:

```css
/* Change link color */
.entry h5 a {
  color: var(--ifm-color-primary); /* Your brand color */
}

/* Change separator style */
.panelLine {
  height: 2px; /* Thicker line */
  background: linear-gradient(...); /* Gradient */
}

/* Add card style */
.entry {
  padding: 1rem;
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 8px;
}
```

## Troubleshooting

### Links Don't Work

**Problem**: Clicking links doesn't navigate  
**Solution**: Check that paths start with `/` and match your `routeBasePath` in `docusaurus.config.js`

```javascript
// In docusaurus.config.js
docs: {
  routeBasePath: '/', // or '/docs/'
}
```

### Component Not Found

**Problem**: `Module not found: '@site/src/components/SectionIndex'`  
**Solution**: Ensure files are in correct location: `src/components/`

### Build Fails with Broken Links

**Problem**: `Broken link on source page path = /docs/: -> linking to /docs/section`  
**Solution**: Create the target page or update the path in the sections array

### Styling Looks Wrong

**Problem**: Styles don't apply or look different  
**Solution**: Check that CSS module is imported correctly:
```tsx
import styles from './SectionIndex.module.css';
```

## Testing Checklist

Before submitting your PR:

- [ ] Component files copied correctly
- [ ] Index page(s) updated with SectionIndex
- [ ] All section paths are valid
- [ ] Links navigate correctly
- [ ] `npm run build` succeeds
- [ ] `npm start` works locally
- [ ] Dark mode tested
- [ ] Light mode tested
- [ ] Mobile responsive checked
- [ ] All descriptions are clear and helpful
- [ ] No console errors
- [ ] No broken links warnings

## PR Template

Use this template for your pull request:

```markdown
## Summary

Add SectionIndex component to improve documentation navigation, matching the Kubernetes contributor site layout.

## Changes

- Add `SectionIndex.tsx` component for displaying section lists
- Add `SectionIndex.module.css` for styling
- Update `docs/index.md` with section navigation
- [List other index pages updated]

## Screenshots

### Homepage
[Screenshot showing section index]

### Dark Mode
[Screenshot showing dark mode]

## Testing

- [x] Build succeeds
- [x] All links work
- [x] Dark mode verified
- [x] Mobile responsive
- [x] No console errors

## References

- Reference implementation: https://github.com/castrojo/jorgepilot
- Kubernetes contributor site: https://www.kubernetes.dev/docs/
```

## Getting Help

If you need assistance:

1. **Review examples** in this repository:
   - `website/docs/intro.md`
   - `website/docs/reports/index.md`

2. **Check the guides**:
   - `HUGO_TO_DOCUSAURUS_GUIDE.md` - Detailed implementation
   - `CNCF_CONTRIBUTE_PR_PLAN.md` - PR structure

3. **Test locally** before submitting:
   - Run `npm start` to see changes
   - Run `npm run build` to verify

4. **Ask for review**:
   - Tag CNCF documentation maintainers
   - Reference this implementation

## Timeline Estimate

| Task | Time | Cumulative |
|------|------|------------|
| Copy component files | 2 min | 2 min |
| Update main index | 5 min | 7 min |
| Create category indexes | 5 min × N | 7 min + (5×N) |
| Test locally | 5 min | 12 min + (5×N) |
| Create PR | 5 min | 17 min + (5×N) |

**Example**: For 3 category index pages = **32 minutes total**

## Benefits

After implementation, your CNCF contribute site will have:

✅ **Better Navigation** - Clear section listings on index pages  
✅ **Consistent Layout** - Matches Kubernetes contributor site  
✅ **Improved UX** - Users find content faster  
✅ **Maintainable** - Easy to update sections  
✅ **Professional** - Clean, polished appearance  
✅ **Accessible** - Keyboard and screen reader friendly

## Complete Example

See the working implementation:
- **Live site**: https://castrojo.github.io/jorgepilot/
- **Source code**: https://github.com/castrojo/jorgepilot
- **Component**: `website/src/components/SectionIndex.tsx`

This serves as a reference you can copy and adapt for the CNCF contribute site.
