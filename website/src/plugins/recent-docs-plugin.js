const fs = require('fs');
const path = require('path');

/**
 * Custom Docusaurus plugin to generate recent docs data
 * This plugin runs after all content is loaded from all plugins,
 * allowing us to access the docs metadata with proper lastUpdatedAt timestamps
 */
module.exports = function recentDocsPlugin(context, options) {
  return {
    name: 'recent-docs-plugin',
    
    async allContentLoaded({ allContent, actions }) {
      // Access the docs plugin content from allContent
      const docsData = allContent['docusaurus-plugin-content-docs'];
      
      if (!docsData) {
        console.warn('⚠️  No docs plugin data found in allContent');
        return;
      }

      // Get the default docs instance
      const defaultDocs = docsData.default;
      
      if (!defaultDocs) {
        console.warn('⚠️  No default docs instance found');
        return;
      }

      const { loadedVersions } = defaultDocs;
      
      if (!loadedVersions || loadedVersions.length === 0) {
        console.warn('⚠️  No loaded versions found');
        return;
      }
      
      const currentVersion = loadedVersions.find(v => v.versionName === 'current');
      
      if (!currentVersion) {
        console.warn('⚠️  No current version found');
        return;
      }

      // Helper function to extract description from markdown content
      const extractDescription = (filePath) => {
        try {
          const content = fs.readFileSync(filePath, 'utf-8');
          const lines = content.split('\n');
          let inFrontmatter = false;
          let frontmatterEnded = false;
          let foundTitle = false;
          
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
              foundTitle = true;
              continue;
            }
            
            if (foundTitle && line.startsWith('## ') && line.includes('Executive Summary')) {
              // Get the next non-empty line as description
              for (let j = i + 1; j < lines.length; j++) {
                const descLine = lines[j].trim();
                if (descLine && !descLine.startsWith('#') && !descLine.startsWith(':::')) {
                  return descLine.substring(0, 150); // Limit description length
                }
              }
            }
          }
          return '';
        } catch (e) {
          return '';
        }
      };

      // Get all docs and extract relevant data
      const docs = currentVersion.docs
        .filter(doc => {
          // Exclude intro.md and CUSTOMIZATION.md
          return doc.id !== 'intro' && doc.id !== 'CUSTOMIZATION';
        })
        .map(doc => {
          // Extract description from the markdown file directly
          const filePath = path.join(context.siteDir, doc.source.replace('@site/', ''));
          let description = extractDescription(filePath);
          
          // If no description found, use fallback
          if (!description) {
            description = `Documentation for ${doc.title}`;
          }
          
          return {
            id: doc.id,
            title: doc.title,
            description: description,
            path: doc.permalink.replace(context.baseUrl, '/'),
            lastUpdatedAt: doc.lastUpdatedAt || Date.now()
          };
        })
        // Sort by last updated (most recent first) and take top 9
        .sort((a, b) => b.lastUpdatedAt - a.lastUpdatedAt)
        .slice(0, 9);

      // Write to JSON file
      const outputFile = path.join(context.siteDir, 'src/data/recentDocs.json');
      const outputDir = path.dirname(outputFile);
      
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      fs.writeFileSync(outputFile, JSON.stringify(docs, null, 2));
      
      console.log(`✅ Generated recent docs list with ${docs.length} items (from plugin)`);
    },
  };
};
