---
tags:
  - ublue
---

# COPR Usage Analysis for ublue-os

## Executive Summary

Analysis of COPR (Cool Other Package Repositories) usage across [@ublue-os](https://github.com/ublue-os) ecosystem reveals 14 total repositories: 4 first-party (ublue-os controlled) and 10 third-party. The project maintains control over critical packages through first-party COPRs while using third-party repositories for specialized tools.

## Overview

This report examines COPR usage across [@ublue-os/bluefin](https://github.com/ublue-os/bluefin), [@ublue-os/main](https://github.com/ublue-os/main), [@ublue-os/akmods](https://github.com/ublue-os/akmods), and [@ublue-os/packages](https://github.com/ublue-os/packages). COPRs extend Fedora's package ecosystem similar to Ubuntu's PPA system.

## Key Findings

| Metric | Value | Notes |
|--------|-------|-------|
| Total COPR Repositories | 14 | Mix of first and third-party |
| First-Party COPRs | 4 | ublue-os maintained |
| Third-Party COPRs | 10 | External maintainers |
| High-Risk Packages | 1 | Kernel module from third-party |
| Additional External Repos | 2 | Terra, negativo17 multimedia |

## Analysis

### First-Party Repositories

:::tip ublue-os Controlled
Four COPRs maintained directly by the ublue-os organization
:::

**ublue-os/staging**  
Staging ground for packages being tested before promotion to main. Used in bluefin, bluefin-lts, and main images.

**ublue-os/packages**  
Main package repository with ublue-os-specific utilities. Contains project-specific tools and configurations.

**ublue-os/akmods**  
Pre-built kernel modules for various hardware and drivers. Includes Framework laptops, gaming controllers, display drivers, network adapters. Provides VirtualBox, xone, openrazer, v4l2loopback, kvmfr, evdi, and ZFS modules.

**ublue-os/ucore**  
Packages specific to the ucore minimal server image variant.

### Third-Party Repositories

:::info External Dependencies
10 third-party COPRs provide specialized packages not available in Fedora
:::

**kylegospo/** repositories provide gaming-related packages and tools. Multiple COPRs from this maintainer suggest close collaboration with ublue-os team.

**ganto/lxc4** provides LXC container tools for advanced users requiring container capabilities beyond Docker/Podman.

**atim/** repositories supply fonts and specialized packages not available in Fedora proper.

**sunwire/input-remapper** offers input device remapping capabilities for custom hardware configurations.

**che/nerd-fonts** provides programming fonts with icon support popular among developers.

**phracek/PyCharm** delivers JetBrains PyCharm IDE packages.

**errornointernet/packages** contains miscellaneous utilities.

**rodeo0x/umoci** provides container manipulation tools.

### External Non-COPR Repositories

**Terra repository** (disabled by default) offers additional RPM Fusion and multimedia packages. Evaluation needed for removal or documentation of necessity.

**negativo17 multimedia** provides codecs and multimedia packages not included in Fedora due to patent or licensing concerns.

### Risk Assessment

:::warning Security Consideration
looking-glass-kvmfr kernel module from third-party source requires security audit
:::

Kernel modules pose elevated risk due to privileged system access. Recommendation: vendor module in ublue-os/akmods for full control and security oversight.

## Recommendations

### Immediate Actions

1. Document negativo17 usage - specify required packages and justification
2. Review Terra necessity - currently disabled by default, evaluate removal
3. Security audit looking-glass-kvmfr - kernel module needs scrutiny

### Short-term (1-3 months)

1. Vendor looking-glass-kvmfr - move to ublue-os/akmods for control
2. Evaluate umoci vendoring - consider moving to ublue-os/packages if widely used
3. Monitor third-party repos - implement health/availability monitoring

### Long-term (3-6 months)

1. Upstream integration - work with podman-bootc upstream to integrate features
2. Font consolidation - consider ublue-os/fonts COPR for consolidated font packages
3. Contribute to Fedora - submit heavily-used packages to Fedora proper

## Related Work

- [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) - Main Bluefin workstation image
- [@ublue-os/main](https://github.com/ublue-os/main) - Base Universal Blue images
- [@ublue-os/akmods](https://github.com/ublue-os/akmods) - Kernel module infrastructure
- [@ublue-os/packages](https://github.com/ublue-os/packages) - Package specifications

## References

- [Fedora COPR](https://copr.fedorainfracloud.org/)
- [Fedora Repository Documentation](https://docs.fedoraproject.org/en-US/quick-docs/repositories/)
- [ublue-os Organization](https://github.com/ublue-os)

---

**Analysis Date:** October 2025  
**Methodology:** Analysis of build scripts, Containerfiles, and repository configurations across ublue-os projects
