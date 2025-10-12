import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import fs from 'fs';
import path from 'path';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Autogenerate sidebar based on document tags.
 * Documents are categorized into sections based on their frontmatter tags.
 */

interface DocsByCategory {
  cncf: string[];
  ublue: string[];
  other: string[];
}

function parseDocumentTags(): DocsByCategory {
  const docsDir = path.join(__dirname, 'docs');
  const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.md'));
  
  const docsByCategory: DocsByCategory = {
    cncf: [],
    ublue: [],
    other: []
  };
  
  files.forEach(file => {
    const content = fs.readFileSync(path.join(docsDir, file), 'utf-8');
    const lines = content.split('\n');
    
    let inFrontmatter = false;
    let inTags = false;
    let tags: string[] = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (i === 0 && line === '---') {
        inFrontmatter = true;
        continue;
      }
      
      if (inFrontmatter && line === '---') {
        break;
      }
      
      if (inFrontmatter && line === 'tags:') {
        inTags = true;
        continue;
      }
      
      if (inTags && line.startsWith('- ')) {
        tags.push(line.substring(2));
      } else if (inTags && !line.startsWith('-')) {
        inTags = false;
      }
    }
    
    const id = file.replace('.md', '');
    
    // Skip intro and CUSTOMIZATION from categorization
    if (id === 'intro' || id === 'CUSTOMIZATION') {
      return;
    }
    
    // Categorize based on tags
    if (tags.includes('cncf')) {
      docsByCategory.cncf.push(id);
    } else if (tags.includes('ublue')) {
      docsByCategory.ublue.push(id);
    } else {
      docsByCategory.other.push(id);
    }
  });
  
  // Sort alphabetically within each category
  docsByCategory.cncf.sort();
  docsByCategory.ublue.sort();
  docsByCategory.other.sort();
  
  return docsByCategory;
}

const docsByCategory = parseDocumentTags();

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'CUSTOMIZATION',
    {
      type: 'category',
      label: 'Universal Blue',
      collapsed: false,
      items: docsByCategory.ublue,
    },
    {
      type: 'category',
      label: 'CNCF',
      collapsed: false,
      items: docsByCategory.cncf,
    },
    {
      type: 'category',
      label: 'Other',
      collapsed: false,
      items: docsByCategory.other,
    },
  ],
};

export default sidebars;
