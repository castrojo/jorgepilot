---
tags:
  - ublue
  - bluefin
  - drivers
last_updated: 2025-10-15
---

# Bluefin Driver Versions Report

## Executive Summary

This report tracks major driver versions across Bluefin releases to help users identify and switch to specific driver versions. Each entry includes direct links to release pages for reference.

## Overview

[@ublue-os/bluefin](https://github.com/ublue-os/bluefin) and [@ublue-os/bluefin-lts](https://github.com/ublue-os/bluefin-lts) publish detailed changelogs with every release that include kernel versions, Mesa driver versions, and NVIDIA driver versions. This report consolidates that information for the most recent stable, GTS, and LTS releases to help users troubleshoot driver-specific issues or test specific configurations.

**Purpose:** Help users switch to specific driver combinations for testing or troubleshooting.

**Data Sources:** 
- [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) - Stable and GTS releases
- [@ublue-os/bluefin-lts](https://github.com/ublue-os/bluefin-lts) - LTS releases

## Bluefin
| Image Tag | Kernel Version | NVIDIA Driver | Mesa Version | Release Link |
|-----------|----------------|---------------|--------------|--------------|
| **stable-20251012** | 6.16.7-200 | [580.95.05-1](https://www.nvidia.com/en-us/drivers/details/254665/) | [25.1.9](https://docs.mesa3d.org/relnotes/25.1.9.html) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20251012) |
| **stable-20251005** | 6.16.7-200 | [580.95.05-1](https://www.nvidia.com/en-us/drivers/details/254665/) | [25.1.9](https://docs.mesa3d.org/relnotes/25.1.9.html) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20251005) |
| **stable-20250928** | 6.15.10-200 | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.1.9](https://docs.mesa3d.org/relnotes/25.1.9.html) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20250928) |
| **stable-20250921** | 6.15.10-200 | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.1.9](https://docs.mesa3d.org/relnotes/25.1.9.html) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20250921) |
| **stable-20250914** | 6.15.9-201 | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.1.7](https://docs.mesa3d.org/relnotes/25.1.7.html) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20250914) |
| **stable-20250907** | 6.15.9-201 | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.1.7](https://docs.mesa3d.org/relnotes/25.1.7.html) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20250907) |
| **stable-20250831** | 6.14.11-300 | [580.76.05-2](https://www.nvidia.com/en-us/drivers/details/252613/) | [25.1.7](https://docs.mesa3d.org/relnotes/25.1.7.html) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20250831) |
| **stable-20250824** | 6.14.11-300 | [580.76.05-2](https://www.nvidia.com/en-us/drivers/details/252613/) | [25.1.7](https://docs.mesa3d.org/relnotes/25.1.7.html) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20250824) |
| **stable-20250819** | 6.14.11-300 | [580.76.05-1](https://www.nvidia.com/en-us/drivers/details/252613/) | [25.1.4](https://docs.mesa3d.org/relnotes/25.1.4.html) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20250819) |
| **stable-20250817** | 6.14.11-300 | [580.76.05-1](https://www.nvidia.com/en-us/drivers/details/252613/) | [25.1.4](https://docs.mesa3d.org/relnotes/25.1.4.html) | [Release](https://github.com/ublue-os/bluefin/releases/tag/stable-20250817) |

## Bluefin GTS


| Image Tag | Kernel Version | NVIDIA Driver | Mesa Version | Release Link |
| **gts-20251012** | 6.16.7-100 | 580.95.05-1 | [25.0.7-1](https://docs.mesa3d.org/relnotes/25.0.7.html) | [Release](https://github.com/ublue-os/bluefin/releases/tag/gts-20251012) |
|-----------|----------------|---------------|--------------|--------------|
| **gts-20251012** | 6.16.7-100 | [580.95.05-1](https://www.nvidia.com/en-us/drivers/details/254665/) | [25.0.7](https://docs.mesa3d.org/relnotes/25.0.7.html) | [Release](https://github.com/ublue-os/bluefin/releases/tag/gts-20251012) |
| **gts-20251005** | 6.16.7-100 | [580.95.05-1](https://www.nvidia.com/en-us/drivers/details/254665/) | [25.0.7](https://docs.mesa3d.org/relnotes/25.0.7.html) | [Release](https://github.com/ublue-os/bluefin/releases/tag/gts-20251005) |
| **gts-20250928** | 6.15.10-100 | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.0.7](https://docs.mesa3d.org/relnotes/25.0.7.html) | [Release](https://github.com/ublue-os/bluefin/releases/tag/gts-20250928) |
| **gts-20250921** | 6.15.10-100 | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.0.7](https://docs.mesa3d.org/relnotes/25.0.7.html) | [Release](https://github.com/ublue-os/bluefin/releases/tag/gts-20250921) |
| **gts-20250914** | 6.15.9-101 | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.0.7](https://docs.mesa3d.org/relnotes/25.0.7.html) | [Release](https://github.com/ublue-os/bluefin/releases/tag/gts-20250914) |
| **gts-20250907** | 6.15.9-101 | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.0.7](https://docs.mesa3d.org/relnotes/25.0.7.html) | [Release](https://github.com/ublue-os/bluefin/releases/tag/gts-20250907) |
| **gts-20250831** | 6.14.11-200 | [580.76.05-2](https://www.nvidia.com/en-us/drivers/details/252613/) | [25.0.7](https://docs.mesa3d.org/relnotes/25.0.7.html) | [Release](https://github.com/ublue-os/bluefin/releases/tag/gts-20250831) |
| **gts-20250824** | 6.14.11-200 | [580.76.05-2](https://www.nvidia.com/en-us/drivers/details/252613/) | 25.0.7 | [Release](https://github.com/ublue-os/bluefin/releases/tag/gts-20250824) |
| **gts-20250819** | 6.14.11-200 | [580.76.05-1](https://www.nvidia.com/en-us/drivers/details/252613/) | 25.0.7 | [Release](https://github.com/ublue-os/bluefin/releases/tag/gts-20250819) |
| **gts-20250817** | 6.14.11-200 | [580.76.05-1](https://www.nvidia.com/en-us/drivers/details/252613/) | 25.0.7 | [Release](https://github.com/ublue-os/bluefin/releases/tag/gts-20250817) |

## Bluefin LTS


| Image Tag | Kernel Version | NVIDIA Driver | Mesa Version | Release Link |
| **lts.20251006** | 6.12.0-134 (HWE: 6.16.7-1) | 580.95.05-1 | [25.0.7-4](https://docs.mesa3d.org/relnotes/25.0.7.html) | [Release](https://github.com/ublue-os/bluefin-lts/releases/tag/lts.20251006) |
|-----------|----------------|---------------|--------------|--------------|
| **lts.20251006** | 6.12.0-134 (HWE: 6.16.7-1) | [580.95.05-1](https://www.nvidia.com/en-us/drivers/details/254665/) | [25.0.7](https://docs.mesa3d.org/relnotes/25.0.7.html) | [Release](https://github.com/ublue-os/bluefin-lts/releases/tag/lts.20251006) |
| **lts.20251003** | 6.12.0-134 (HWE: 6.16.7-1) | [580.95.05-1](https://www.nvidia.com/en-us/drivers/details/254665/) | [25.0.7](https://docs.mesa3d.org/relnotes/25.0.7.html) | [Release](https://github.com/ublue-os/bluefin-lts/releases/tag/lts.20251003) |
| **lts.20250930** | 6.12.0-134 (HWE: 6.15.10-1) | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.0.7](https://docs.mesa3d.org/relnotes/25.0.7.html) | [Release](https://github.com/ublue-os/bluefin-lts/releases/tag/lts.20250930) |
| **lts.20250916** | 6.12.0-128 (HWE: 6.15.10-1) | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.0.7](https://docs.mesa3d.org/relnotes/25.0.7.html) | [Release](https://github.com/ublue-os/bluefin-lts/releases/tag/lts.20250916) |
| **lts.20250910** | 6.12.0-126 (HWE: 6.15.9-1) | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.0.7](https://docs.mesa3d.org/relnotes/25.0.7.html) | [Release](https://github.com/ublue-os/bluefin-lts/releases/tag/lts.20250910) |
| **lts.20250909** | 6.12.0-126 (HWE: 6.15.11-1) | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.0.7](https://docs.mesa3d.org/relnotes/25.0.7.html) | [Release](https://github.com/ublue-os/bluefin-lts/releases/tag/lts.20250909) |
| **lts.20250908** | 6.12.0-126 (HWE: 6.15.11-1) | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.0.7](https://docs.mesa3d.org/relnotes/25.0.7.html) | [Release](https://github.com/ublue-os/bluefin-lts/releases/tag/lts.20250908) |
| **lts.20250907** | 6.12.0-126 (HWE: 6.15.11-1) | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.0.7](https://docs.mesa3d.org/relnotes/25.0.7.html) | [Release](https://github.com/ublue-os/bluefin-lts/releases/tag/lts.20250907) |
| **lts.20250905** | 6.12.0-126 (HWE: 6.15.11-1) | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.0.7](https://docs.mesa3d.org/relnotes/25.0.7.html) | [Release](https://github.com/ublue-os/bluefin-lts/releases/tag/lts.20250905) |
| **lts.20250903** | 6.12.0-124 (HWE: 6.15.11-1) | [580.82.07-2](https://www.nvidia.com/en-us/drivers/details/253003/) | [25.0.7](https://docs.mesa3d.org/relnotes/25.0.7.html) | [Release](https://github.com/ublue-os/bluefin-lts/releases/tag/lts.20250903) |

:::info NVIDIA Availability
NVIDIA driver versions are only listed in NVIDIA-specific image variants. Non-NVIDIA images do not include kmod-nvidia packages. The most recent releases include NVIDIA driver **[580.95.05-1](https://www.nvidia.com/en-us/drivers/details/254665/)** across all channels.
:::

## How to Switch to a Specific Version

To switch to any of these versions, use the `bootc switch` command with signature enforcement based on [@bootc-dev/bootc](https://github.com/containers/bootc):

### Bluefin Stream

```bash
# Get your current image name
IMAGE_NAME=$(jq -r '."image-name"' < /usr/share/ublue-os/image-info.json)

# Switch to latest stable (currently stable-20251012)
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/$IMAGE_NAME:stable

# Switch to a specific stable version
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/$IMAGE_NAME:stable-20251012

# Switch to an older stable version (e.g., stable-20250928)
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/$IMAGE_NAME:stable-20250928

# Reboot to apply changes
sudo systemctl reboot
```

### Bluefin GTS Stream 

```bash
# Get your current image name
IMAGE_NAME=$(jq -r '."image-name"' < /usr/share/ublue-os/image-info.json)

# Switch to latest GTS
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/$IMAGE_NAME:gts

# Switch to a specific GTS version
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/$IMAGE_NAME:gts-20251012

# Reboot to apply changes
sudo systemctl reboot
```

### Bluefin LTS Stream

```bash
# Get your current image name
IMAGE_NAME=$(jq -r '."image-name"' < /usr/share/ublue-os/image-info.json)

# Switch to latest LTS
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/$IMAGE_NAME:lts

# Switch to a specific LTS version
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/$IMAGE_NAME:lts.20251006

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

- [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) - Stable and GTS releases
- [@ublue-os/bluefin-lts](https://github.com/ublue-os/bluefin-lts) - LTS releases
- [Bluefin Releases](https://github.com/ublue-os/bluefin/releases) - Stable/GTS releases
- [Bluefin LTS Releases](https://github.com/ublue-os/bluefin-lts/releases) - LTS releases
- [Bluefin Documentation](https://docs.projectbluefin.io/) - Official docs
- [Bluefin LTS Documentation](https://docs.projectbluefin.io/lts) - LTS-specific docs
- [@bootc-dev/bootc](https://github.com/containers/bootc) - Bootc reference

---

**Report Generated:** 2025-10-15  
**Data Sources:** 
- [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) - Stable and GTS releases
- [@ublue-os/bluefin-lts](https://github.com/ublue-os/bluefin-lts) - LTS releases

All channels include thoroughly tested driver combinations with cosign-signed container images.

## Changelog

| Date | Changes | Commit |
|------|---------|--------|
| 2025-10-15 | Initial report created based on Bazzite template | (current) |


