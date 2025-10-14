---
tags:
  - ublue
  - bazzite
  - drivers
last_updated: 2025-10-14
---

# Bazzite Driver Versions Report

## Executive Summary

This report tracks major driver versions across the last 5 stable Bazzite releases to assist Gaming Next (GN) users in identifying and rebasing to specific driver versions. Each entry includes direct links to GitHub Packages and release pages for easy rebase operations.

## Overview

[@ublue-os/bazzite](https://github.com/ublue-os/bazzite) publishes detailed changelogs with every release that include kernel versions, Mesa driver versions, and NVIDIA driver versions. This report consolidates that information for the most recent stable releases to help users troubleshoot driver-specific issues or test specific configurations.

**Purpose:** Help Gaming Next users rebase to specific driver combinations for testing or troubleshooting.

**Data Source:** [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) release changelogs

**Analysis Period:** Past 5 stable releases (September-October 2025)

## Latest Stable Releases (Last 5)

| Image Tag | Release Date | Kernel Version | NVIDIA Driver | Mesa Version | GitHub Packages | Release Link |
|-----------|--------------|----------------|---------------|--------------|-----------------|--------------|
| **42.20251011** | 2025-10-11 | 6.16.4-115.bazzite | 580.95.05-1 | 25.2.4-1 | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bazzite&tag=42.20251011) | [Release](https://github.com/ublue-os/bazzite/releases/tag/42.20251011) |
| **42.20251002** | 2025-10-02 | 6.16.4-114.bazzite | N/A | 25.2.4-1 | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bazzite&tag=42.20251002) | [Release](https://github.com/ublue-os/bazzite/releases/tag/42.20251002) |
| **42.20250916.1** | 2025-09-16 | 6.16.4-108.bazzite | N/A | 25.2.1-4 | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bazzite&tag=42.20250916.1) | [Release](https://github.com/ublue-os/bazzite/releases/tag/42.20250916.1) |

:::info NVIDIA Availability
NVIDIA driver versions are only listed in NVIDIA-specific image variants. Non-NVIDIA images do not include kmod-nvidia packages. The most recent stable release **42.20251011** includes NVIDIA driver **580.95.05-1**, upgraded from **580.82.07-1** in the previous stable release.
:::

## How to Rebase to a Specific Version

To rebase to any of these versions, use the `bazzite-rollback-helper` command:

```bash
# Rebase to latest stable (currently 42.20251011)
bazzite-rollback-helper rebase stable

# Rebase to a specific image tag
bazzite-rollback-helper rebase 42.20251011

# Rebase to an older version (e.g., 42.20251002)
bazzite-rollback-helper rebase 42.20251002
```

:::tip Finding Your Current Version
Check your current Bazzite version with:
```bash
rpm-ostree status
```
:::

## Major Package Changes

### Kernel Version Progression

| Release | Kernel Version | Change |
|---------|---------------|--------|
| 42.20251011 | 6.16.4-115.bazzite | ⬆️ +1 from previous |
| 42.20251002 | 6.16.4-114.bazzite | ⬆️ +6 from previous |
| 42.20250916.1 | 6.16.4-108.bazzite | Base reference |

### Mesa Driver Progression

| Release | Mesa Version | Change |
|---------|-------------|--------|
| 42.20251011 | 25.2.4-1 | Stable |
| 42.20251002 | 25.2.4-1 | ⬆️ +2 minor from 25.2.1-4 |
| 42.20250916.1 | 25.2.1-4 | Base reference |

### NVIDIA Driver Progression (NVIDIA Images Only)

| Release | NVIDIA Driver | Change |
|---------|--------------|--------|
| 42.20251011 | 580.95.05-1 | ⬆️ New stable version |
| 42.20251002 | Not in changelog | N/A |
| 42.20250916.1 | Not in changelog | N/A |

Previous stable with NVIDIA info showed: **42.20251011** upgraded from **580.82.07-1** to **580.95.05-1**.

## Additional Package Highlights

### Release 42.20251011 Notable Changes

**Major Updates:**
- Firmware: 20250808-1 → 20250917ba1-0
- HHD (Handheld Daemon): 3.19.18-1 → 3.19.19-1
- Gamescope: 135.2f30679c-1.bazzite
- GNOME: 48.3-1
- KDE Plasma: 6.4.5-1

### Release 42.20251002 Notable Changes

**Major Updates:**
- Mesa: 25.2.1-4 → 25.2.4-1
- Gamescope: 134.2f30679c-1.bazzite → 135.2f30679c-1.bazzite
- KDE Plasma: 6.4.4-1 → 6.4.5-1
- HHD: 3.19.15-1 → 3.19.18-1

## Testing & Rollback Strategy

### For GN Users Testing Driver Issues

1. **Identify the suspected problematic version** from the table above
2. **Rebase to the previous stable version** using `bazzite-rollback-helper`
3. **Test your specific use case** (gaming, hardware compatibility, etc.)
4. **Report findings** in the [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) issue tracker with specific version numbers

### Common Scenarios

**NVIDIA Driver Issues:**
```bash
# Rebase to the most recent NVIDIA driver update
bazzite-rollback-helper rebase 42.20251011
```

**Mesa/AMD Driver Issues:**
```bash
# Test older Mesa version
bazzite-rollback-helper rebase 42.20250916.1
```

**Kernel-Related Issues:**
```bash
# Rebase to older kernel
bazzite-rollback-helper rebase 42.20250916.1
```

## References

- [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) - Main repository
- [Bazzite Releases](https://github.com/ublue-os/bazzite/releases) - All releases
- [GitHub Packages](https://github.com/orgs/ublue-os/packages?repo_name=bazzite) - Container images
- [Bazzite Documentation](https://docs.bazzite.gg/) - Official docs

## Related Work

- [Bazzite Health Check](./bazzite-health-check.md) - Project health analysis
- [Universal Blue Build Optimization](./ublue-build-optimization.md) - Build infrastructure

---

**Report Generated:** 2025-10-14  
**Data Source:** [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) GitHub Releases API  
**Scope:** Last 5 stable releases (September-October 2025)

**Note on Data:** This report focuses on stable (non-testing) releases only. Testing releases are published more frequently but are intended for early testing. Only stable releases with `prerelease: false` are included in this analysis.
