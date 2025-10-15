#!/usr/bin/env node

/**
 * Test script for update-bluefin-drivers.js
 * Tests the parsing and formatting logic with mock data
 */

const fs = require('fs');
const path = require('path');

// Mock release data based on actual GitHub API responses
const mockReleases = {
  stable: {
    tag_name: 'stable-20251019',
    html_url: 'https://github.com/ublue-os/bluefin/releases/tag/stable-20251019',
    body: `This is an automatically generated changelog for release \`stable-20251019\`.

### Major packages
| Name | Version |
| --- | --- |
| **Kernel** | 6.17.1-200 |
| **Gnome** | 48.6-1 |
| **Mesa** | 25.2.0-1 |
| **Podman** | 5.7.0-1 |
| **Nvidia** | 580.100.10-1 |

Some other content...
[580.100.10-1](https://www.nvidia.com/en-us/drivers/details/255000/)
`,
  },
  gts: {
    tag_name: 'gts-20251019',
    html_url: 'https://github.com/ublue-os/bluefin/releases/tag/gts-20251019',
    body: `This is an automatically generated changelog for release \`gts-20251019\`.

### Major packages
| Name | Version |
| --- | --- |
| **Kernel** | 6.17.1-100 |
| **Gnome** | 47.6-1 |
| **Mesa** | 25.1.0-1 |
| **Podman** | 5.7.0-1 |
| **Nvidia** | 580.100.10-1 |

[580.100.10-1](https://www.nvidia.com/en-us/drivers/details/255000/)
`,
  },
  lts: {
    tag_name: 'lts.20251019',
    html_url: 'https://github.com/ublue-os/bluefin-lts/releases/tag/lts.20251019',
    body: `This is an automatically generated changelog for release \`lts.20251019\`.

### Major packages
| Name | Version |
| --- | --- |
| **Kernel** | 6.12.0-140 |
| **HWE Kernel** | 6.17.1-1 |
| **GNOME** | 48.5-1 |
| **Mesa** | 25.1.0-1 |
| **Podman** | 5.7.0-1 |

### Major GDX packages
| Name | Version |
| --- | --- |
| **Nvidia** | 580.100.10-1 |

[580.100.10-1](https://www.nvidia.com/en-us/drivers/details/255000/)
`,
  },
};

// Import extraction functions (simplified for testing)
function extractDriverInfo(releaseBody, stream) {
  const info = {
    kernel: 'N/A',
    nvidia: 'N/A',
    mesa: 'N/A',
  };

  const majorPackagesMatch = releaseBody.match(/### Major packages\s*\|[^\n]+\n\|[^\n]+\n((?:\|[^\n]+\n)*)/);

  if (majorPackagesMatch) {
    const tableRows = majorPackagesMatch[1];

    const kernelMatch = tableRows.match(/\|\s*\*\*Kernel\*\*\s*\|\s*([^\|\s]+)(?:\s*➡️\s*([^\|\s]+))?\s*\|/);
    if (kernelMatch) {
      info.kernel = kernelMatch[2] || kernelMatch[1];
    }

    const mesaMatch = tableRows.match(/\|\s*\*\*Mesa\*\*\s*\|\s*([^\|\s]+)(?:\s*➡️\s*([^\|\s]+))?\s*\|/);
    if (mesaMatch) {
      info.mesa = mesaMatch[2] || mesaMatch[1];
    }

    if (stream === 'lts') {
      const hweMatch = tableRows.match(/\|\s*\*\*HWE Kernel\*\*\s*\|\s*([^\|\s]+)(?:\s*➡️\s*([^\|\s]+))?\s*\|/);
      if (hweMatch) {
        const hweKernel = hweMatch[2] || hweMatch[1];
        const baseKernel = info.kernel;
        info.kernel = `${baseKernel} (HWE: ${hweKernel})`;
      }
    }
  }

  const gdxMatch = releaseBody.match(/### Major GDX packages\s*\|[^\n]+\n\|[^\n]+\n((?:\|[^\n]+\n)*)/);
  if (gdxMatch) {
    const tableRows = gdxMatch[1];
    const nvidiaMatch = tableRows.match(/\|\s*\*\*Nvidia\*\*\s*\|\s*([^\|\s]+)(?:\s*➡️\s*([^\|\s]+))?\s*\|/);
    if (nvidiaMatch) {
      info.nvidia = nvidiaMatch[2] || nvidiaMatch[1];
    }
  } else {
    if (majorPackagesMatch) {
      const tableRows = majorPackagesMatch[1];
      const nvidiaMatch = tableRows.match(/\|\s*\*\*Nvidia\*\*\s*\|\s*([^\|\s]+)(?:\s*➡️\s*([^\|\s]+))?\s*\|/);
      if (nvidiaMatch) {
        info.nvidia = nvidiaMatch[2] || nvidiaMatch[1];
      }
    }
  }

  return info;
}

function formatTableRow(release, stream) {
  const drivers = extractDriverInfo(release.body, stream);

  const tag = release.tag_name;
  const releaseUrl = release.html_url;

  let nvidiaLink = drivers.nvidia;
  if (drivers.nvidia !== 'N/A') {
    const escapedVersion = drivers.nvidia.replace(/\./g, '\\.');
    const nvidiaUrlMatch = release.body.match(
      new RegExp(`\\[${escapedVersion}\\]\\((https:\\/\\/www\\.nvidia\\.com[^\\)]+)\\)`)
    );
    if (nvidiaUrlMatch) {
      nvidiaLink = `[${drivers.nvidia}](${nvidiaUrlMatch[1]})`;
    } else {
      nvidiaLink = drivers.nvidia;
    }
  }

  let mesaLink = drivers.mesa;
  if (drivers.mesa !== 'N/A') {
    const mesaVersion = drivers.mesa.replace(/-\d+$/, '');
    mesaLink = `[${drivers.mesa}](https://docs.mesa3d.org/relnotes/${mesaVersion}.html)`;
  }

  return `| **${tag}** | ${drivers.kernel} | ${nvidiaLink} | ${mesaLink} | [Release](${releaseUrl}) |`;
}

// Run tests
console.log('Testing driver extraction and formatting...\n');

console.log('=== STABLE ===');
const stableDrivers = extractDriverInfo(mockReleases.stable.body, 'stable');
console.log('Extracted:', stableDrivers);
console.log('Formatted:', formatTableRow(mockReleases.stable, 'stable'));

console.log('\n=== GTS ===');
const gtsDrivers = extractDriverInfo(mockReleases.gts.body, 'gts');
console.log('Extracted:', gtsDrivers);
console.log('Formatted:', formatTableRow(mockReleases.gts, 'gts'));

console.log('\n=== LTS ===');
const ltsDrivers = extractDriverInfo(mockReleases.lts.body, 'lts');
console.log('Extracted:', ltsDrivers);
console.log('Formatted:', formatTableRow(mockReleases.lts, 'lts'));

// Validate results
console.log('\n=== VALIDATION ===');
let allPassed = true;

if (stableDrivers.kernel !== '6.17.1-200') {
  console.error('❌ Stable kernel extraction failed');
  allPassed = false;
} else {
  console.log('✅ Stable kernel extracted correctly');
}

if (stableDrivers.nvidia !== '580.100.10-1') {
  console.error('❌ Stable NVIDIA extraction failed');
  allPassed = false;
} else {
  console.log('✅ Stable NVIDIA extracted correctly');
}

if (stableDrivers.mesa !== '25.2.0-1') {
  console.error('❌ Stable Mesa extraction failed');
  allPassed = false;
} else {
  console.log('✅ Stable Mesa extracted correctly');
}

if (!ltsDrivers.kernel.includes('6.12.0-140') || !ltsDrivers.kernel.includes('6.17.1-1')) {
  console.error('❌ LTS kernel extraction failed (expected base + HWE)');
  allPassed = false;
} else {
  console.log('✅ LTS kernel extracted correctly');
}

if (allPassed) {
  console.log('\n✅ All tests passed!');
  process.exit(0);
} else {
  console.log('\n❌ Some tests failed!');
  process.exit(1);
}
