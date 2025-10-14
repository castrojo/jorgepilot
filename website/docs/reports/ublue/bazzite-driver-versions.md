---
tags:
  - ublue
  - bazzite
  - drivers
last_updated: 2025-10-14
---

# Bazzite Driver Versions Report

## Executive Summary

This report tracks major driver versions across [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) stable releases over the past 2 months (August 14 - October 14, 2025). This information helps users identify specific image versions for troubleshooting hardware compatibility issues and assists the Gamers Nexus team in their testing.

## Driver Version Tracking (Past 2 Months)

| Image Tag | Release Date | Kernel | Firmware | Mesa | NVIDIA Driver | Release Link |
|-----------|--------------|--------|----------|------|---------------|--------------|
| 42.20251011 | 2025-10-11 | 6.16.4-114.bazzite → 6.16.4-115.bazzite | 20250808-1 → 20250917ba1-0 | 25.2.4-1 | 580.82.07-1 → 580.95.05-1 | [Release](https://github.com/ublue-os/bazzite/releases/tag/42.20251011) |
| 42.20251002 | 2025-10-02 | 6.16.4-108.bazzite → 6.16.4-114.bazzite | 20250808-1 | 25.2.1-4 → 25.2.4-1 | 580.82.07-1 → 580.95.05-1 | [Release](https://github.com/ublue-os/bazzite/releases/tag/42.20251002) |
| 42.20250916.1 | 2025-09-16 | 6.16.4-108.bazzite | 20250808-1 | 25.2.1-4 | N/A (stable) | [Release](https://github.com/ublue-os/bazzite/releases/tag/42.20250916.1) |
| 42.20250911 | 2025-09-11 | 6.16.4-107.bazzite | 20250808-1 | 25.2.1-4 | N/A | [Release](https://github.com/ublue-os/bazzite/releases/tag/42.20250911) |
| 42.20250908 | 2025-09-08 | 6.16.4-104.bazzite → 6.16.4-107.bazzite | 20250808-1 | 25.2.1-4 | 580.76.05-1 → 580.82.07-1 | [Release](https://github.com/ublue-os/bazzite/releases/tag/42.20250908) |
| 42.20250903 | 2025-09-03 | 6.16.4-103.bazzite → 6.16.4-104.bazzite | 20250808-1 | 25.2.1-4 | 580.76.05-1 → 580.82.07-1 | [Release](https://github.com/ublue-os/bazzite/releases/tag/42.20250903) |
| 42.20250901 | 2025-09-01 | 6.15.9-116.bazzite → 6.16.4-103.bazzite | 20250808-1 | 25.2.1-4 | N/A | [Release](https://github.com/ublue-os/bazzite/releases/tag/42.20250901) |
| 42.20250828.1 | 2025-08-28 | 6.15.9-116.bazzite | 20250808-1 | 25.2.1-4 | 580.76.05-1 | [Release](https://github.com/ublue-os/bazzite/releases/tag/42.20250916) |

## Version Analysis

### Kernel Updates
- **Latest**: 6.16.4-115.bazzite (October 11, 2025)
- **Notable Jump**: 6.15.9-116 → 6.16.4-103 (September 1)
- **Trend**: Regular micro-version bumps within 6.16.4 series

### Firmware
- **Latest**: 20250917ba1-0 (October 11, 2025)
- **Previous**: 20250808-1 (stable through most of September)
- **Trend**: Infrequent major updates

### Mesa (Open-Source Graphics)
- **Latest**: 25.2.4-1 (October 2025)
- **Previous**: 25.2.1-4 (stable through September)
- **Trend**: Regular updates within 25.2.x series

### NVIDIA Proprietary Driver
- **Latest**: 580.95.05-1 (October 11, 2025)
- **Previous**: 580.82.07-1 (September-October)
- **Earlier**: 580.76.05-1 (August)
- **Trend**: Regular updates within 580.x series

## GitHub Container Registry

All Bazzite images are published to GitHub Container Registry. To pull a specific version:

```bash
# Generic format
podman pull ghcr.io/ublue-os/bazzite:<tag>

# Examples
podman pull ghcr.io/ublue-os/bazzite:42.20251011
podman pull ghcr.io/ublue-os/bazzite:stable
podman pull ghcr.io/ublue-os/bazzite:latest
```

### Image Variants

Bazzite provides multiple image variants for different hardware:

- **Base**: `ghcr.io/ublue-os/bazzite`
- **NVIDIA (proprietary)**: `ghcr.io/ublue-os/bazzite-nvidia`
- **NVIDIA (open)**: `ghcr.io/ublue-os/bazzite-nvidia-open`
- **Steam Deck**: `ghcr.io/ublue-os/bazzite-deck`
- **Desktop Environments**: Available in both KDE Plasma and GNOME variants

View all available tags: [ghcr.io/ublue-os/bazzite/tags](https://github.com/ublue-os/bazzite/pkgs/container/bazzite)

## Rebasing to a Specific Version

Users experiencing hardware issues can rebase to a specific version using:

```bash
# Rebase to a specific stable version
bazzite-rollback-helper rebase 42.20251011

# Rebase to latest stable
bazzite-rollback-helper rebase stable

# Rebase to latest testing
bazzite-rollback-helper rebase testing
```

**Note**: The arrow notation (→) in the driver version columns indicates version transitions that occurred within that release, showing both the starting and ending versions.

## Data Source & Methodology

**Data Collection**: GitHub API querying [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) releases  
**Analysis Period**: August 14, 2025 - October 14, 2025 (60 days)  
**Release Cadence**: Stable releases typically published weekly  
**Version Format**: `42.YYYYMMDD[.build]` (Fedora.date.build)

Driver versions extracted from "Major packages" sections in release changelogs. NVIDIA driver versions are specific to NVIDIA image variants.

## References

- [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) - Main repository
- [Bazzite Releases](https://github.com/ublue-os/bazzite/releases) - All release notes
- [GitHub Container Registry](https://github.com/ublue-os/bazzite/pkgs/container/bazzite) - Image tags
- [Bazzite Documentation](https://docs.bazzite.gg/) - User guides
- [Universal Blue Discord](https://discord.gg/f8MUghG5PB) - Community support

---

**Report Generated**: 2025-10-14  
**Analyst**: GitHub Copilot  
**Data Source**: [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) GitHub Releases API
