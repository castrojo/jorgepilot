---
tags:
  - ublue
  - bazzite
  - drivers
last_updated: 2025-10-14
---

# Bazzite Driver Versions Report

## Executive Summary

This report tracks major driver versions across the last 5 stable Bazzite releases to assist GamersNexus (GN) users in identifying and rebasing to specific driver versions. Each entry includes direct links to GitHub Packages and release pages for easy rebase operations.

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
2. **Rebase to the previous stable version** using `bazzite-rollback-helper`
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
**Scope:** Last 5 stable releases (September-October 2025)

**Note on Data:** This report focuses on stable (non-testing) releases only. Testing releases are published more frequently but are intended for early testing. Only stable releases with `prerelease: false` are included in this analysis.

## Changelog

| Date | Changes | Commit |
|------|---------|--------|
| 2025-10-14 | Initial report created with last 5 stable releases | [c077a39](https://github.com/castrojo/jorgepilot/commit/c077a39) |
