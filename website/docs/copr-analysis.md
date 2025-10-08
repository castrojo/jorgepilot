---
sidebar_position: 3
---

# COPR Usage Analysis for ublue-os

## Executive Summary

Analysis of COPR repositories across the [@ublue-os](https://github.com/ublue-os) ecosystem reveals 14 total repositories: 4 first-party (ublue-os controlled) and 10 third-party. The project maintains good control over critical packages through first-party COPRs while using third-party repos for specialized tools (fonts, virtualization, container tools).

## Overview

This report examines COPR (Cool Other Package Repositories) usage across [@ublue-os/bluefin](https://github.com/ublue-os/bluefin), [@ublue-os/bluefin-lts](https://github.com/ublue-os/bluefin-lts), [@ublue-os/main](https://github.com/ublue-os/main), [@ublue-os/akmods](https://github.com/ublue-os/akmods), and [@ublue-os/packages](https://github.com/ublue-os/packages). COPRs extend Fedora's package ecosystem, similar to Ubuntu's PPA system.

## Key Findings

| Metric | Value | Notes |
|--------|-------|-------|
| Total COPR Repositories | 14 | Mix of first and third-party |
| First-Party COPRs | 4 | ublue-os maintained |
| Third-Party COPRs | 10 | External maintainers |
| High-Risk Packages | 1 | Kernel module from third-party |
| Additional External Repos | 2 | Terra, negativo17 multimedia |

## First-Party COPR Repositories

These are maintained by ublue-os with full control and consistent maintenance.

### ublue-os/staging

Staging ground for packages being tested before promotion to main.

- **Used in:** bluefin, bluefin-lts, main
- **URL:** [https://copr.fedorainfracloud.org/coprs/ublue-os/staging/](https://copr.fedorainfracloud.org/coprs/ublue-os/staging/)

### ublue-os/packages

Main package repository with ublue-os-specific utilities.

- **Used in:** bluefin, bluefin-lts, main
- **URL:** [https://copr.fedorainfracloud.org/coprs/ublue-os/packages/](https://copr.fedorainfracloud.org/coprs/ublue-os/packages/)

### ublue-os/akmods

Pre-built kernel modules for various hardware and drivers. Includes Framework laptops, gaming controllers, display drivers, network adapters, and more.

- **Used in:** akmods build infrastructure
- **URL:** [https://copr.fedorainfracloud.org/coprs/ublue-os/akmods/](https://copr.fedorainfracloud.org/coprs/ublue-os/akmods/)
- **Key packages:** Framework drivers, VirtualBox, xone, openrazer, v4l2loopback, kvmfr, evdi, ZFS, network drivers

## Third-Party COPR Repositories

External repos require more attention due to varying maintenance and security postures.

### By Risk Level

| Repository | Purpose | Risk | Notes |
|------------|---------|------|-------|
| hikariknight/looking-glass-kvmfr | GPU passthrough kernel module | **High** | Runs in kernel space |
| gmaglione/podman-bootc | Container boot integration | Medium-High | Affects boot process |
| ganto/lxc4 | LXC containers v4 | Medium | Container runtime |
| ganto/umoci | OCI image manipulation | Medium | Container tooling |
| karmab/kcli | KVM VM management | Medium | Hypervisor interaction |
| che/nerd-fonts | Developer fonts | Low-Medium | Popular, aesthetic only |
| atim/ubuntu-fonts | Ubuntu font family | Low | Aesthetic only |

### Third-Party by Purpose

- **Fonts:** che/nerd-fonts, atim/ubuntu-fonts
- **Virtualization:** ganto/lxc4, karmab/kcli, hikariknight/looking-glass-kvmfr
- **Container Tools:** ganto/umoci, gmaglione/podman-bootc

### External Repositories (Non-COPR)

Two additional external repos are used:

1. **Terra (Fyra Labs)** - Additional package repository, disabled by default
   - URL: [https://repos.fyralabs.com/terra](https://repos.fyralabs.com/terra)

2. **negativo17 Multimedia** - Less-restricted multimedia packages
   - URL: [https://negativo17.org/repos/fedora-multimedia.repo](https://negativo17.org/repos/fedora-multimedia.repo)
   - Provides: mesa, intel media SDK, libva, multimedia codecs
   - Priority: 90 (high)

## Analysis

:::tip Philosophy
The ublue-os COPR strategy is pragmatic and measured. First-party repos handle the heavy lifting (staging, packages, akmods), while third-party COPRs fill gaps for niche use cases.
:::

**Strengths:**
- Well-organized first-party infrastructure with clear staging/production separation
- Comprehensive akmod support for diverse hardware
- Most critical components under ublue-os control

:::warning Concerns
- Kernel module (looking-glass-kvmfr) from third-party source
- Boot integration (podman-bootc) not under direct control
- negativo17 repo overrides core system packages (mesa, graphics stack)
:::

**Usage Philosophy:**
1. Provide packages unavailable in Fedora repos
2. Ship newer versions than Fedora stable
3. Enable hardware-specific drivers
4. Support developer experience enhancements

## Recommendations

### Immediate Actions

1. **Document negativo17 usage** - Specify exactly which packages are needed and why
2. **Review Terra necessity** - Currently disabled by default, evaluate removal
3. **Security audit looking-glass-kvmfr** - Kernel module from third-party needs scrutiny

### Short-term (1-3 months)

1. **Vendor looking-glass-kvmfr** - Move to ublue-os/akmods for full control
2. **Evaluate umoci vendoring** - If widely used, consider moving to ublue-os/packages
3. **Monitor third-party repos** - Set up health/availability monitoring

### Long-term (3-6 months)

1. **Upstream integration** - Work with podman-bootc upstream to integrate features
2. **Font consolidation** - Consider ublue-os/fonts COPR for consolidated font packages
3. **Contribute to Fedora** - Submit heavily-used packages to Fedora proper

### Vendoring Strategy

For critical packages, consider:

1. **Move to ublue-os/packages** - Full control, consistent maintenance
2. **Build in-project** - No external deps, higher build complexity
3. **Submit to Fedora** - Official support, wider review

Recommended for vendoring: looking-glass-kvmfr, podman-bootc

## Related Work

- [ublue-os/bluefin](https://github.com/ublue-os/bluefin) - Main Bluefin workstation image
- [ublue-os/bluefin-lts](https://github.com/ublue-os/bluefin-lts) - Long-term support builds
- [ublue-os/main](https://github.com/ublue-os/main) - Base Universal Blue images
- [ublue-os/akmods](https://github.com/ublue-os/akmods) - Kernel module infrastructure
- [ublue-os/packages](https://github.com/ublue-os/packages) - Package specifications

## References

- [Fedora COPR](https://copr.fedorainfracloud.org/) - Official COPR service
- [Fedora Repository Documentation](https://docs.fedoraproject.org/en-US/quick-docs/repositories/)
- [Issue #2](https://github.com/castrojo/copilot-scratchpad/issues/2) - This analysis request

## Associated Issues

| Issue | Status | Priority | Link |
|-------|--------|----------|------|
| Add COPR analysis | Open | High | [Issue #2](https://github.com/castrojo/copilot-scratchpad/issues/2) |

---

**Report Generated:** 2025-10-07 21:50:00 UTC

**Methodology:** Analyzed build scripts, Containerfiles, and repository configurations across ublue-os projects. Searched for `dnf copr enable`, `dnf5 copr enable` patterns and COPR URLs. Categorized by maintainer and assessed risk based on package type, system impact, and maintainer reputation.
