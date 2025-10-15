---
tags:
  - ublue
  - bluefin
  - drivers
last_updated: 2025-10-15
---

# Bluefin Driver Versions Report

## Executive Summary

This report tracks major driver versions across the last 13 stable Bluefin releases to help users identify and switch to specific driver versions. Each entry includes direct links to GitHub Packages and release pages for reference.

## Overview

[@ublue-os/bluefin](https://github.com/ublue-os/bluefin) publishes detailed changelogs with every release that include kernel versions, Mesa driver versions, and NVIDIA driver versions. This report consolidates that information for the most recent stable releases to help users troubleshoot driver-specific issues or test specific configurations.

**Purpose:** Help users switch to specific driver combinations for testing or troubleshooting.

**Data Source:** [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) release changelogs

**Analysis Period:** Past 13 stable releases (August-October 2025)

## Latest Stable Releases (Last 13)

| Image Tag | Kernel Version | NVIDIA Driver | Mesa Version | GitHub Packages | Release Link |
|-----------|----------------|---------------|--------------|-----------------|--------------|
| **stable-20251012** | 6.16.7-200 | [580.95.05-1](https://www.nvidia.com/en-us/drivers/details/254665/) | [25.1.9](https://docs.mesa3d.org/relnotes/25.1.9.html) | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bluefin&tag=stable-20251012) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20251012) |
| **stable-20251005** | 6.16.7-200 | [580.95.05-1](https://www.nvidia.com/en-us/drivers/details/254665/) | [25.1.9](https://docs.mesa3d.org/relnotes/25.1.9.html) | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bluefin&tag=stable-20251005) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20251005) |
| **stable-20250928** | 6.15.10-200 | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.1.9](https://docs.mesa3d.org/relnotes/25.1.9.html) | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bluefin&tag=stable-20250928) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20250928) |
| **stable-20250921** | 6.15.10-200 | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.1.9](https://docs.mesa3d.org/relnotes/25.1.9.html) | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bluefin&tag=stable-20250921) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20250921) |
| **stable-20250914** | 6.15.9-201 | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.1.7](https://docs.mesa3d.org/relnotes/25.1.7.html) | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bluefin&tag=stable-20250914) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20250914) |
| **stable-20250907** | 6.15.9-201 | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.1.7](https://docs.mesa3d.org/relnotes/25.1.7.html) | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bluefin&tag=stable-20250907) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20250907) |
| **stable-20250831** | 6.14.11-300 | [580.76.05-2](https://www.nvidia.com/en-us/drivers/details/252613/) | [25.1.7](https://docs.mesa3d.org/relnotes/25.1.7.html) | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bluefin&tag=stable-20250831) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20250831) |
| **stable-20250824** | 6.14.11-300 | [580.76.05-2](https://www.nvidia.com/en-us/drivers/details/252613/) | [25.1.7](https://docs.mesa3d.org/relnotes/25.1.7.html) | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bluefin&tag=stable-20250824) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20250824) |
| **stable-20250819** | 6.14.11-300 | [580.76.05-1](https://www.nvidia.com/en-us/drivers/details/252613/) | [25.1.4](https://docs.mesa3d.org/relnotes/25.1.4.html) | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bluefin&tag=stable-20250819) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20250819) |
| **stable-20250817** | 6.14.11-300 | [580.76.05-1](https://www.nvidia.com/en-us/drivers/details/252613/) | [25.1.4](https://docs.mesa3d.org/relnotes/25.1.4.html) | [Packages](https://github.com/orgs/ublue-os/packages?repo_name=bluefin&tag=stable-20250817) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20250817) |

:::info NVIDIA Availability
NVIDIA driver versions are only listed in NVIDIA-specific image variants. Non-NVIDIA images do not include kmod-nvidia packages. The most recent stable release **stable-20251012** includes NVIDIA driver **[580.95.05-1](https://www.nvidia.com/en-us/drivers/details/254665/)**.
:::

## How to Switch to a Specific Version

To switch to any of these versions, use the `bootc switch` command with signature enforcement based on [@bootc-dev/bootc](https://github.com/containers/bootc):

```bash
# Get your current image name
IMAGE_NAME=$(jq -r '."image-name"' < /usr/share/ublue-os/image-info.json)

# Switch to latest stable (currently stable-20251012)
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/$IMAGE_NAME:stable

# Switch to a specific image tag
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/$IMAGE_NAME:stable-20251012

# Switch to an older version (e.g., stable-20250928)
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/$IMAGE_NAME:stable-20250928

# Reboot to apply changes
sudo systemctl reboot
```

:::tip Finding Your Current Version
Check your current Bluefin version with:
```bash
rpm-ostree status
```
:::

:::info Signature Enforcement
The `--enforce-container-sigpolicy` flag ensures you're always running a signed image, maintaining security and integrity of your system.
:::

## Testing & Rollback Strategy

### For Users Testing Driver Issues

1. **Identify the suspected problematic version** from the table above
2. **Switch to the previous stable version** using `bootc switch`
3. **Test your specific use case** (desktop performance, hardware compatibility, etc.)
4. **Report findings** in the [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) issue tracker with specific version numbers

## References

- [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) - Main repository
- [Bluefin Releases](https://github.com/ublue-os/bluefin/releases) - All releases
- [GitHub Packages](https://github.com/orgs/ublue-os/packages?repo_name=bluefin) - Container images
- [Bluefin Documentation](https://docs.projectbluefin.io/) - Official docs
- [@bootc-dev/bootc](https://github.com/containers/bootc) - Bootc reference

---

**Report Generated:** 2025-10-15  
**Data Source:** [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) GitHub Releases API  
**Scope:** Last 13 stable releases (August-October 2025)

**Note on Data:** This report focuses on stable releases only. Stable releases are published weekly and include thoroughly tested driver combinations.

## Changelog

| Date | Changes | Commit |
|------|---------|--------|
| 2025-10-15 | Initial report created based on Bazzite template | (current) |
