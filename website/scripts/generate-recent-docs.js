const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Path to docs directory
const docsDir = path.join(__dirname, '../docs');
const outputFile = path.join(__dirname, '../src/data/recentDocs.json');

// Get all markdown files in docs
const files = fs
  .readdirSync(docsDir)
  .filter((file) => file.endsWith('.md') && file !== 'intro.md' && file !== 'CUSTOMIZATION.md');

// Get last updated time and frontmatter for each file
const docs = files.map((file) => {
  const filePath = path.join(docsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // Get git last modified timestamp
  let lastUpdatedAt;
  try {
    const timestamp = execSync(`git log -1 --format=%at -- "${filePath}"`, {
      encoding: 'utf-8',
      cwd: path.join(__dirname, '..'),
    }).trim();
    lastUpdatedAt = parseInt(timestamp) * 1000; // Convert to milliseconds
  } catch (e) {
    lastUpdatedAt = Date.now(); // Fallback to current time
  }

  // Extract title and description from markdown
  const lines = content.split('\n');
  let title = '';
  let description = '';
  let inFrontmatter = false;
  let frontmatterEnded = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (i === 0 && line === '---') {
      inFrontmatter = true;
      continue;
    }

    if (inFrontmatter && line === '---') {
      inFrontmatter = false;
      frontmatterEnded = true;
      continue;
    }

    if (inFrontmatter) {
      continue;
    }

    if (frontmatterEnded && line.startsWith('# ')) {
      title = line.replace(/^#\s+/, '');
      continue;
    }

    if (title && line.startsWith('## ') && line.includes('Executive Summary')) {
      // Get the next non-empty line as description
      for (let j = i + 1; j < lines.length; j++) {
        const descLine = lines[j].trim();
        if (descLine && !descLine.startsWith('#') && !descLine.startsWith('[') && !descLine.startsWith(':::')) {
          description = descLine.substring(0, 150); // Limit description length
          break;
        }
      }
      break;
    }
  }

  // Fallback title from filename
  if (!title) {
    title = file
      .replace('.md', '')
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  const id = file.replace('.md', '');

  return {
    id,
    title,
    description: description || `Documentation for ${title}`,
    path: `/${id}`,
    lastUpdatedAt,
  };
});

// Sort by last updated (most recent first) and take top 9
const recentDocs = docs.sort((a, b) => b.lastUpdatedAt - a.lastUpdatedAt).slice(0, 9);

// Ensure output directory exists
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write to JSON file
fs.writeFileSync(outputFile, JSON.stringify(recentDocs, null, 2));

console.log(`✅ Generated recent docs list with ${recentDocs.length} items`);
