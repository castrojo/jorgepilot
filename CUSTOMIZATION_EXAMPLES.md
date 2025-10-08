# Customization Examples

Here are some real-world examples of how to customize your pilot site.

## Example 1: Jeefypilot

```typescript
const GITHUB_USERNAME = 'jeefy';
const REPO_NAME = 'jorgepilot';
const DISPLAY_NAME = 'Jeefy';
const TAGLINE = 'Building the future, one commit at a time.';
```

**Result:**
- Site title: Jeefypilot
- URL: https://jeefy.github.io/jorgepilot
- Favicon/Logo: Jeefy's GitHub avatar

---

## Example 2: MrBobbypilot

```typescript
const GITHUB_USERNAME = 'mrbobby';
const REPO_NAME = 'jorgepilot';
const DISPLAY_NAME = 'MrBobby';
const TAGLINE = 'Automating all the things!';
```

**Result:**
- Site title: MrBobbypilot
- URL: https://mrbobby.github.io/jorgepilot
- Favicon/Logo: MrBobby's GitHub avatar

---

## Example 3: Sarahpilot

```typescript
const GITHUB_USERNAME = 'sarahdev';
const REPO_NAME = 'jorgepilot';
const DISPLAY_NAME = 'Sarah';
const TAGLINE = 'Code, coffee, and cloud native tech.';
```

**Result:**
- Site title: Sarahpilot
- URL: https://sarahdev.github.io/jorgepilot
- Favicon/Logo: Sarah's GitHub avatar

---

## Example 4: K8spilot (Using an Org)

```typescript
const GITHUB_USERNAME = 'kubernetes';
const REPO_NAME = 'jorgepilot';
const DISPLAY_NAME = 'K8s';
const TAGLINE = 'Kubernetes insights and analysis.';
```

**Result:**
- Site title: K8spilot
- URL: https://kubernetes.github.io/jorgepilot
- Favicon/Logo: Kubernetes org avatar

---

## Testing Your Changes

After editing the configuration:

1. Build the site:
   ```bash
   cd website
   npm run build
   ```

2. Test locally:
   ```bash
   npm start
   ```

3. Visit http://localhost:3000/jorgepilot/ to see your changes

---

## Notes

- The DISPLAY_NAME can be anything - it doesn't have to match your GitHub username
- The tagline is optional but adds personality to your site
- Your GitHub avatar updates automatically when you change it on GitHub
- All GitHub links automatically point to your repos
