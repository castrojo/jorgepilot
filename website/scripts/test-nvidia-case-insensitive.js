#!/usr/bin/env node

/**
 * Test script to verify NVIDIA URL matching is case-insensitive
 */

// Mock release with mixed case NVIDIA URL
const mockRelease = {
  tag_name: 'test-20251019',
  html_url: 'https://github.com/test/test/releases/tag/test-20251019',
  body: `This is a test release.

### Major packages
| Name | Version |
| --- | --- |
| **Kernel** | 6.17.1-200 |
| **Mesa** | 25.2.0-1 |
| **Nvidia** | 580.100.10-1 |

[580.100.10-1](https://www.NVIDIA.com/en-us/drivers/details/255000/)
`,
};

function extractDriverInfo(releaseBody) {
  const info = {
    kernel: 'N/A',
    nvidia: 'N/A',
    mesa: 'N/A',
  };

  const majorPackagesMatch = releaseBody.match(/### Major packages\s*\|[^\n]+\n\|[^\n]+\n((?:\|[^\n]+\n)*)/);
  if (majorPackagesMatch) {
    const tableRows = majorPackagesMatch[1];
    const nvidiaMatch = tableRows.match(/\|\s*\*\*Nvidia\*\*\s*\|\s*([^\|\s]+)(?:\s*➡️\s*([^\|\s]+))?\s*\|/);
    if (nvidiaMatch) {
      info.nvidia = nvidiaMatch[2] || nvidiaMatch[1];
    }
  }
  return info;
}

function formatTableRow(release) {
  const drivers = extractDriverInfo(release.body);
  const tag = release.tag_name;
  const releaseUrl = release.html_url;

  // Create NVIDIA driver link with case-insensitive matching
  let nvidiaLink = drivers.nvidia;
  if (drivers.nvidia !== 'N/A') {
    const escapedVersion = drivers.nvidia.replace(/\./g, '\\.');
    const nvidiaUrlMatch = release.body.match(
      new RegExp(`\\[${escapedVersion}\\]\\((https:\\/\\/www\\.nvidia\\.com[^\\)]+)\\)`, 'i')
    );
    if (nvidiaUrlMatch) {
      nvidiaLink = `[${drivers.nvidia}](${nvidiaUrlMatch[1]})`;
    } else {
      nvidiaLink = drivers.nvidia;
    }
  }

  return nvidiaLink;
}

console.log('Testing NVIDIA URL case-insensitive matching...\n');

const result = formatTableRow(mockRelease);
console.log('Result:', result);

// Validate
if (result.includes('https://www.NVIDIA.com/en-us/drivers/details/255000/')) {
  console.log('\n✅ Case-insensitive matching works! URL with "NVIDIA" (uppercase) was matched.');
  process.exit(0);
} else {
  console.error('\n❌ Case-insensitive matching failed!');
  console.error('Expected URL with "NVIDIA" in uppercase to be matched.');
  process.exit(1);
}
