# Bluefin Driver Versions Automation

This directory contains automation for updating the [Bluefin Driver Versions Report](../docs/reports/ublue/bluefin-driver-versions.md).

## Overview

The automation keeps the driver versions report up to date by fetching the latest releases from GitHub and extracting driver information from the release notes.

## Files

- **`update-bluefin-drivers.js`** - Main update script that fetches releases and updates the document
- **`test-bluefin-update.js`** - Test script to validate parsing logic with mock data
- **`../../.github/workflows/update-bluefin-drivers.yml`** - GitHub Action workflow

## How It Works

1. **Fetch Latest Releases**: Script fetches the latest releases from:
   - [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) - Stable and GTS streams
   - [@ublue-os/bluefin-lts](https://github.com/ublue-os/bluefin-lts) - LTS stream

2. **Extract Driver Information**: Parses release notes to extract:
   - Kernel version
   - NVIDIA driver version (with links)
   - Mesa driver version (with links)

3. **Update Tables**: Adds new releases to the top of each table:
   - Bluefin (stable stream)
   - Bluefin GTS (GTS stream)
   - Bluefin LTS (LTS stream)

4. **Update Metadata**: Updates the `last_updated` field in the document front matter

## Schedule

The automation runs:

- **Weekly**: Every Wednesday at 10:00 AM UTC
- **Manual**: Can be triggered manually via GitHub Actions UI

## Manual Execution

### Run Locally

```bash
cd website
node scripts/update-bluefin-drivers.js
```

Note: Requires `GITHUB_TOKEN` environment variable for higher API rate limits.

### Run Tests

```bash
cd website
node scripts/test-bluefin-update.js
```

### Trigger GitHub Action

1. Go to the [Actions tab](https://github.com/castrojo/jorgepilot/actions/workflows/update-bluefin-drivers.yml)
2. Click "Run workflow"
3. Select the branch and click "Run workflow"

## Implementation Details

### Release Detection

- **Stable**: Looks for tags starting with `stable-`
- **GTS**: Looks for tags starting with `gts-`
- **LTS**: All releases from bluefin-lts (tags start with `lts.`)

### Data Extraction

The script parses the "Major packages" table in release notes:

```markdown
### Major packages
| Name | Version |
| --- | --- |
| **Kernel** | 6.16.7-200 |
| **Mesa** | 25.1.9-1 |
| **Nvidia** | 580.95.05-1 |
```

For LTS releases, it also combines the base kernel with HWE kernel:

```
6.12.0-134 (HWE: 6.16.7-1)
```

### Link Generation

- **NVIDIA**: Extracts URL from markdown links in release body
- **Mesa**: Generates link to Mesa release notes using version number

## Behavior

### Duplicate Prevention

The script checks if the latest release already exists at the top of each table. If it does, no changes are made.

### Error Handling

- Validates all three releases (stable, GTS, LTS) were found
- Exits with error if any release is missing
- GitHub Action only commits if changes were made

## Customization

To adapt this for other similar reports:

1. Update `DOC_PATH` to point to your document
2. Modify `REPOS` object with your repositories
3. Adjust `extractDriverInfo()` to match your release note format
4. Update `formatTableRow()` to match your table structure
5. Modify section headers in `updateDocument()` to match your document

## Troubleshooting

### No changes committed

This is normal if the latest releases are already in the document.

### API rate limit errors

The script uses `GITHUB_TOKEN` for authentication. In GitHub Actions, this is automatically provided. For local testing, set the environment variable:

```bash
export GITHUB_TOKEN=your_token_here
```

### Extraction errors

Run the test script to validate parsing logic:

```bash
node scripts/test-bluefin-update.js
```

If tests fail, check that the mock data in the test script matches the actual release note format.

## Contributing

When modifying the automation:

1. Update the test script with representative examples
2. Run tests to validate changes
3. Test locally if possible (requires GitHub token)
4. Verify the document structure is preserved
5. Check the build still passes: `npm run build`
