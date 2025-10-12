const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Path to docs directory
const docsDir = path.join(__dirname, '../docs');

// Get all markdown files in docs
const files = fs.readdirSync(docsDir)
  .filter(file => file.endsWith('.md') && file !== 'intro.md' && file !== 'CUSTOMIZATION.md');

console.log(`Found ${files.length} documents to process`);

files.forEach(file => {
  const filePath = path.join(docsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Get git last modified date (excluding frontmatter edits)
  // Using %as format for YYYY-MM-DD format
  let lastModifiedDate;
  try {
    lastModifiedDate = execSync(
      `git log -1 --format=%as -- "${filePath}"`,
      { encoding: 'utf-8', cwd: path.join(__dirname, '..', '..') }
    ).trim();
  } catch (e) {
    console.warn(`⚠️  Could not get git date for ${file}, skipping`);
    return;
  }
  
  const lines = content.split('\n');
  
  // Check if file has frontmatter
  if (lines[0] === '---') {
    let frontmatterEndIndex = -1;
    let hasDateField = false;
    
    // Find end of frontmatter and check if date field exists
    for (let i = 1; i < lines.length; i++) {
      if (lines[i] === '---') {
        frontmatterEndIndex = i;
        break;
      }
      if (lines[i].startsWith('date:')) {
        hasDateField = true;
      }
    }
    
    if (frontmatterEndIndex === -1) {
      console.warn(`⚠️  Malformed frontmatter in ${file}, skipping`);
      return;
    }
    
    if (hasDateField) {
      console.log(`⏭️  ${file} already has date field, skipping`);
      return;
    }
    
    // Insert date field before closing frontmatter
    lines.splice(frontmatterEndIndex, 0, `date: ${lastModifiedDate}`);
    
  } else {
    // No frontmatter, create one with just the date
    lines.unshift('---');
    lines.unshift(`date: ${lastModifiedDate}`);
    lines.unshift('---');
  }
  
  // Write back to file
  fs.writeFileSync(filePath, lines.join('\n'));
  console.log(`✅ Added date ${lastModifiedDate} to ${file}`);
});

console.log(`\n✅ Completed processing ${files.length} documents`);
