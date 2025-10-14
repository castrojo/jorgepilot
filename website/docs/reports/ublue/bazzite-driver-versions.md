---
tags:
  - ublue
  - bazzite
  - drivers
last_updated: 2025-10-14
---

# Bazzite Driver Versions Report

## Executive Summary

This report tracks major driver versions across the last 8 stable Bazzite releases to assist GamersNexus (GN) users in identifying and rebasing to specific driver versions. Each entry includes direct links to GitHub Packages and release pages for easy rebase operations.

## Overview

[@ublue-os/bazzite](https://github.com/ublue-os/bazzite) publishes detailed changelogs with every release that include kernel versions, Mesa driver versions, and NVIDIA driver versions. This report consolidates that information for the most recent stable releases to help users troubleshoot driver-specific issues or test specific configurations.

**Purpose:** Help Gaming Next users rebase to specific driver combinations for testing or troubleshooting.

**Data Source:** [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) release changelogs

**Analysis Period:** Past 8 stable releases (August-October 2025)

## Latest Stable Releases (Last 8)

| Image Tag | Kernel Version | NVIDIA Driver | Mesa Version | Rebase Command | GitHub Packages | Release Link |
|-----------|----------------|---------------|--------------|----------------|-----------------|--------------|
| **42.20251011** | [6.16.4-115.bazzite](https://github.com/bazzite-org/kernel-bazzite/releases/tag/6.16.4-115.bazzite) | [580.95.05-1](https://www.nvidia.com/en-us/drivers/details/254665/) | [25.2.4](https://docs.mesa3d.org/relnotes/25.2.4.html) | `brh rebase 42.20251011` | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bazzite&tag=42.20251011) | [Release](https://github.com/ublue-os/bazzite/releases/tag/42.20251011) |
| **42.20251002** | [6.16.4-114.bazzite](https://github.com/bazzite-org/kernel-bazzite/releases/tag/6.16.4-114.bazzite) | [580.82.07-1](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.2.4](https://docs.mesa3d.org/relnotes/25.2.4.html) | `brh rebase 42.20251002` | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bazzite&tag=42.20251002) | [Release](https://github.com/ublue-os/bazzite/releases/tag/42.20251002) |
| **42.20250916.1** | [6.16.4-108.bazzite](https://github.com/bazzite-org/kernel-bazzite/releases/tag/6.16.4-108.bazzite) | [580.82.07-1](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.2.1](https://docs.mesa3d.org/relnotes/25.2.1.html) | `brh rebase 42.20250916.1` | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bazzite&tag=42.20250916.1) | [Release](https://github.com/ublue-os/bazzite/releases/tag/42.20250916.1) |
| **42.20250911** | [6.16.4-107.bazzite](https://github.com/bazzite-org/kernel-bazzite/releases/tag/6.16.4-107.bazzite) | [580.82.07-1](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.2.1](https://docs.mesa3d.org/relnotes/25.2.1.html) | `brh rebase 42.20250911` | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bazzite&tag=42.20250911) | [Release](https://github.com/ublue-os/bazzite/releases/tag/42.20250911) |
| **42.20250908** | [6.16.4-107.bazzite](https://github.com/bazzite-org/kernel-bazzite/releases/tag/6.16.4-107.bazzite) | [580.82.07-1](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.2.1](https://docs.mesa3d.org/relnotes/25.2.1.html) | `brh rebase 42.20250908` | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bazzite&tag=42.20250908) | [Release](https://github.com/ublue-os/bazzite/releases/tag/42.20250908) |
| **42.20250903** | [6.16.4-104.bazzite](https://github.com/bazzite-org/kernel-bazzite/releases/tag/6.16.4-104.bazzite) | [580.82.07-1](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.2.1](https://docs.mesa3d.org/relnotes/25.2.1.html) | `brh rebase 42.20250903` | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bazzite&tag=42.20250903) | [Release](https://github.com/ublue-os/bazzite/releases/tag/42.20250903) |
| **42.20250901** | [6.16.4-103.bazzite](https://github.com/bazzite-org/kernel-bazzite/releases/tag/6.16.4-103.bazzite) | [580.76.05-1](https://www.nvidia.com/en-us/drivers/details/252613/) | [25.2.1](https://docs.mesa3d.org/relnotes/25.2.1.html) | `brh rebase 42.20250901` | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bazzite&tag=42.20250901) | [Release](https://github.com/ublue-os/bazzite/releases/tag/42.20250901) |
| **42.20250828.1** | [6.15.9-116.bazzite](https://github.com/bazzite-org/kernel-bazzite/releases/tag/6.15.9-116.bazzite) | [580.76.05-1](https://www.nvidia.com/en-us/drivers/details/252613/) | [25.2.1](https://docs.mesa3d.org/relnotes/25.2.1.html) | `brh rebase 42.20250828.1` | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bazzite&tag=42.20250828.1) | [Release](https://github.com/ublue-os/bazzite/releases/tag/42.20250828.1) |

:::info NVIDIA Availability
NVIDIA driver versions are only listed in NVIDIA-specific image variants. Non-NVIDIA images do not include kmod-nvidia packages. The most recent stable release **42.20251011** includes NVIDIA driver **[580.95.05-1](https://www.nvidia.com/en-us/drivers/details/254665/)**, upgraded from **[580.82.07-1](https://www.nvidia.com/en-us/drivers/details/253003/)** used in releases from 42.20251002 through 42.20250903.
:::

## How to Rebase to a Specific Version

To rebase to any of these versions, use the `brh` command (short for `bazzite-rollback-helper`):

```bash
# Rebase to latest stable (currently 42.20251011)
brh rebase stable

# Rebase to a specific image tag
brh rebase 42.20251011

# Rebase to an older version (e.g., 42.20251002)
brh rebase 42.20251002
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
| 42.20250916.1 | 6.16.4-108.bazzite | ⬆️ +1 from previous |
| 42.20250911 | 6.16.4-107.bazzite | ⬆️ +3 from previous |
| 42.20250908 | 6.16.4-107.bazzite | Stable (same as previous) |
| 42.20250903 | 6.16.4-104.bazzite | ⬆️ +1 from previous |
| 42.20250901 | 6.16.4-103.bazzite | ⬆️ Major upgrade from 6.15.x series |
| 42.20250828.1 | 6.15.9-116.bazzite | Base reference |

### Mesa Driver Progression

| Release | Mesa Version | Change |
|---------|-------------|--------|
| 42.20251011 | [25.2.4](https://docs.mesa3d.org/relnotes/25.2.4.html) | Stable (same as previous) |
| 42.20251002 | [25.2.4](https://docs.mesa3d.org/relnotes/25.2.4.html) | ⬆️ +2 minor from 25.2.1 |
| 42.20250916.1 | [25.2.1](https://docs.mesa3d.org/relnotes/25.2.1.html) | Stable (same as previous) |
| 42.20250911 | [25.2.1](https://docs.mesa3d.org/relnotes/25.2.1.html) | Stable (same as previous) |
| 42.20250908 | [25.2.1](https://docs.mesa3d.org/relnotes/25.2.1.html) | Stable (same as previous) |
| 42.20250903 | [25.2.1](https://docs.mesa3d.org/relnotes/25.2.1.html) | Stable (same as previous) |
| 42.20250901 | [25.2.1](https://docs.mesa3d.org/relnotes/25.2.1.html) | Stable (same as previous) |
| 42.20250828.1 | [25.2.1](https://docs.mesa3d.org/relnotes/25.2.1.html) | Base reference |

### NVIDIA Driver Progression (NVIDIA Images Only)

| Release | NVIDIA Driver | Change |
|---------|--------------|--------|
| 42.20251011 | [580.95.05-1](https://www.nvidia.com/en-us/drivers/details/254665/) | ⬆️ Upgraded from 580.82.07-1 |
| 42.20251002 | [580.82.07-1](https://www.nvidia.com/en-us/drivers/details/253003/) | ⬆️ Upgraded from 580.76.05-1 |
| 42.20250916.1 | [580.82.07-1](https://www.nvidia.com/en-us/drivers/details/253003/) | Stable (same as previous) |
| 42.20250911 | [580.82.07-1](https://www.nvidia.com/en-us/drivers/details/253003/) | Stable (same as previous) |
| 42.20250908 | [580.82.07-1](https://www.nvidia.com/en-us/drivers/details/253003/) | Stable (same as previous) |
| 42.20250903 | [580.82.07-1](https://www.nvidia.com/en-us/drivers/details/253003/) | ⬆️ Upgraded from 580.76.05-1 |
| 42.20250901 | [580.76.05-1](https://www.nvidia.com/en-us/drivers/details/252613/) | Stable (same as previous) |
| 42.20250828.1 | [580.76.05-1](https://www.nvidia.com/en-us/drivers/details/252613/) | Base reference |

**Key Updates:**
- **[580.95.05-1](https://www.nvidia.com/en-us/drivers/details/254665/)** (Oct 11): Latest NVIDIA driver version
- **[580.82.07-1](https://www.nvidia.com/en-us/drivers/details/253003/)** (Sep-Oct): Maintained across 5 releases (42.20251002 through 42.20250903)
- **[580.76.05-1](https://www.nvidia.com/en-us/drivers/details/252613/)** (Aug-Sep): Previous stable version

## Additional Package Highlights

| Release | Package | Change | Notes |
|---------|---------|--------|-------|
| **42.20251011** | Firmware | 20250808-1 → 20250917ba1-0 | Latest firmware |
| | HHD (Handheld Daemon) | 3.19.18-1 → 3.19.19-1 | Minor update |
| | Gamescope | 135.2f30679c-1.bazzite | Latest compositor |
| | GNOME | 48.3-1 | Desktop environment |
| | KDE Plasma | 6.4.5-1 | Desktop environment |
| **42.20251002** | Mesa | 25.2.1-4 → 25.2.4-1 | Graphics stack |
| | Gamescope | 134.2f30679c-1.bazzite → 135.2f30679c-1.bazzite | Compositor update |
| | KDE Plasma | 6.4.4-1 → 6.4.5-1 | Desktop update |
| | HHD | 3.19.15-1 → 3.19.18-1 | Handheld daemon |

## Testing & Rollback Strategy

### For GN Users Testing Driver Issues

1. **Identify the suspected problematic version** from the table above
2. **Rebase to the previous stable version** using `brh`
3. **Test your specific use case** (gaming, hardware compatibility, etc.)
4. **Report findings** in the [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) issue tracker with specific version numbers

## Latest Gaming Performance Issues

Recent bug reports from the Bazzite community with significant impact on gaming performance:

| Issue # | Title | Status | Impact | Workaround | Link |
|---------|-------|--------|--------|------------|------|
| #3123 | Steam Gaming Mode runs on low refresh rate | Open | Caps games at 48 FPS despite 144Hz monitor | Check refresh rate settings | [Issue #3123](https://github.com/ublue-os/bazzite/issues/3123) |
| #3120 | Gamepads lagging on gaming mode | Open | Controller input lag makes games unplayable | Switch to Desktop Mode or use specific controllers | [Issue #3120](https://github.com/ublue-os/bazzite/issues/3120) |
| #3092 | NVIDIA 580 driver causes Steam crashes and flickering | Open | Game mode flickers, Steam won't start in desktop | Rebase to older driver or use Flatpak Steam | [Issue #3092](https://github.com/ublue-os/bazzite/issues/3092) |
| #2862 | NVIDIA laptop uses integrated GPU by default | Open | Terrible performance until dGPU forced | Set NVIDIA environment variables | [Issue #2862](https://github.com/ublue-os/bazzite/issues/2862) |
| #2739 | VK_DRIVER_FILES improves NVIDIA performance | Open | Poor performance until Vulkan driver specified | Set VK_DRIVER_FILES env var | [Issue #2739](https://github.com/ublue-os/bazzite/issues/2739) |
| #2650 | System freezes completely during gaming | Open | Random freezes requiring hard reboot | No reliable workaround | [Issue #2650](https://github.com/ublue-os/bazzite/issues/2650) |
| #1070 | Performance drops 50% after sleep | Open | FPS halves after wake from sleep | Use hibernate instead of sleep | [Issue #1070](https://github.com/ublue-os/bazzite/issues/1070) |
| #3078 | Incorrect screen resolution in games (GNOME) | Open | Games detect wrong resolution with fractional scaling | Set scaling to 100% or 200% | [Issue #3078](https://github.com/ublue-os/bazzite/issues/3078) |
| #3079 | Allow Tearing does not work | Open | Screen tearing remains even when enabled | Gamescope flag workaround may help | [Issue #3079](https://github.com/ublue-os/bazzite/issues/3079) |
| #3117 | Screenshots fail or cause crashes with background recording | Open | Gaming Mode crashes when screenshot taken | Disable background recording | [Issue #3117](https://github.com/ublue-os/bazzite/issues/3117) |

:::info Community Support
For the latest status on these issues, click the issue links above. Many have active discussions with potential workarounds from the community.
:::

## References

- [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) - Main repository
- [Bazzite Releases](https://github.com/ublue-os/bazzite/releases) - All releases
- [GitHub Packages](https://github.com/orgs/ublue-os/packages?repo_name=bazzite) - Container images
- [Bazzite Documentation](https://docs.bazzite.gg/) - Official docs

---

**Report Generated:** 2025-10-14  
**Data Source:** [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) GitHub Releases API  
**Scope:** Last 8 stable releases (August-October 2025)

**Note on Data:** This report focuses on stable (non-testing) releases only. Testing releases are published more frequently but are intended for early testing. Only stable releases with `prerelease: false` are included in this analysis.

## Changelog

| Date | Changes | Commit |
|------|---------|--------|
| 2025-10-14 | Added Mesa version links to docs.mesa3d.org release notes | (current) |
| 2025-10-14 | Linked kernel versions to @bazzite-org/kernel-bazzite releases, removed redundant release date column, replaced command with `brh` alias | [d1c8f42](https://github.com/castrojo/jorgepilot/commit/d1c8f42) |
| 2025-10-14 | Linked all NVIDIA driver versions to nvidia.com release notes | [5aeb1f6](https://github.com/castrojo/jorgepilot/commit/5aeb1f6) |
| 2025-10-14 | Added rebase command column, expanded to 8 releases, populated NVIDIA driver versions | [82cc5ae](https://github.com/castrojo/jorgepilot/commit/82cc5ae) |
| 2025-10-14 | Initial report created with last 5 stable releases | [c077a39](https://github.com/castrojo/jorgepilot/commit/c077a39) |
