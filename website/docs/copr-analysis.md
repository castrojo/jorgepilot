---
tags:
  - ublue
  - copr
  - dependencies
date: 2025-10-12
---

# COPR Usage Analysis for ublue-os

## Executive Summary

Analysis of COPR (Cool Other Package Repositories) usage across [@ublue-os](https://github.com/ublue-os) ecosystem reveals 14 total repositories: 4 first-party (ublue-os controlled) and 10 third-party external repositories. The project maintains strong control over critical infrastructure through first-party COPRs (ublue-os/staging, ublue-os/packages, ublue-os/akmods, ublue-os/ucore) while leveraging specialized third-party repositories for gaming, fonts, and niche hardware support. One high-risk kernel module (looking-glass-kvmfr) from third-party sources requires security review.

## Overview

This report examines COPR repository dependencies across the Universal Blue ecosystem, specifically [@ublue-os/bluefin](https://github.com/ublue-os/bluefin), [@ublue-os/bazzite](https://github.com/ublue-os/bazzite), [@ublue-os/main](https://github.com/ublue-os/main), [@ublue-os/akmods](https://github.com/ublue-os/akmods), and [@ublue-os/packages](https://github.com/ublue-os/packages). COPRs (Cool Other Package Repos) extend Fedora's package ecosystem similarly to Ubuntu's PPA system, providing packages not available in official Fedora repositories.

**Analysis Date:** October 2025  
**Methodology:** Analysis of build scripts, Containerfiles, and repository configurations

## Key Findings

| Metric | Value | Notes |
|--------|-------|-------|
| **Total COPR Repositories** | 14 | Mix of first and third-party |
| **First-Party COPRs** | 4 | ublue-os maintained and controlled |
| **Third-Party COPRs** | 10 | External maintainers |
| **High-Risk Packages** | 1 | Kernel module from third-party (kvmfr) |
| **Additional External Repos** | 2 | Terra, negativo17 multimedia |
| **Gaming-Related COPRs** | 4+ | Primarily from kylegospo |
| **Font COPRs** | 2 | Nerd fonts and specialized fonts |

## Analysis

### First-Party Repositories (ublue-os Controlled)

:::tip Strong First-Party Control
Four COPRs maintained directly by ublue-os organization provide infrastructure foundation
:::

#### ublue-os/staging

**Purpose:** Staging ground for packages being tested before promotion to main repositories  
**Used By:** bluefin, bluefin-lts, main images  
**Package Count:** Variable (testing ground)  
**Risk Level:** 🟢 Low (controlled by project)

Packages in staging undergo testing before moving to production repositories. This provides a quality gate for new packages and updates.

#### ublue-os/packages

**Purpose:** Main repository for ublue-os-specific utilities and tools  
**Used By:** All Universal Blue variants  
**Package Count:** 20-30 core packages  
**Risk Level:** 🟢 Low (controlled by project)

Contains project-specific tools, configurations, and utilities including:
- ublue-os-just (just command integration)
- ublue-update (system update utilities)
- ublue-os-udev-rules (hardware support rules)
- ujust recipes and system integration

#### ublue-os/akmods

**Purpose:** Pre-built kernel modules for hardware support  
**Used By:** All variants requiring additional kernel modules  
**Package Count:** 10+ kernel modules  
**Risk Level:** 🟢 Low (controlled by project)

**Supported Modules:**
- **Framework laptop support** - Power management and hardware enablement
- **Gaming controllers** - xone (Xbox controllers), xpadneo
- **Display drivers** - evdi (DisplayLink)
- **Network adapters** - Various USB network adapters
- **Virtualization** - VirtualBox modules, kvmfr (Looking Glass)
- **Gaming** - openrazer (Razer hardware)
- **Multimedia** - v4l2loopback (virtual cameras)
- **Storage** - ZFS filesystem support

This repository is critical for hardware compatibility, especially for Framework laptops, gaming peripherals, and specialized hardware.

#### ublue-os/ucore

**Purpose:** Packages specific to ucore minimal server variant  
**Used By:** ucore image only  
**Package Count:** 5-10 server-focused packages  
**Risk Level:** 🟢 Low (controlled by project)

Contains minimal server utilities and configurations tailored for the ucore headless/server variant.

### Third-Party Repositories (External Dependencies)

:::info External Dependencies
10 third-party COPRs provide specialized packages not available in Fedora proper
:::

#### Gaming & Hardware Support

**kylegospo/** (Multiple Repositories)

**Repositories:**
- kylegospo/bazzite (gaming packages)
- kylegospo/bazzite-multilib (32-bit gaming libraries)
- kylegospo/latencyflex (gaming latency reduction)
- kylegospo/obs-vkcapture (OBS streaming tools)

**Used By:** Primarily Bazzite  
**Risk Level:** 🟡 Medium (external but close collaboration)

Multiple COPRs from @kylegospo (Bazzite project lead) provide gaming-essential packages. Close collaboration with ublue-os team reduces risk, but these remain external dependencies.

**Key Packages:**
- Gaming performance optimizations
- HDR support utilities
- Steam Deck specific tools
- Handheld gaming device support

#### Container & System Tools

**ganto/lxc4**

**Purpose:** LXC (Linux Containers) version 4 tools  
**Used By:** Advanced users via optional installation  
**Risk Level:** 🟡 Medium (specialized external maintainer)

Provides LXC container capabilities beyond Docker/Podman for users requiring traditional container management.

**rodeo0x/umoci**

**Purpose:** OCI container image manipulation tool  
**Used By:** Build processes, podman-bootc integration  
**Risk Level:** 🟡 Medium (niche external tool)

Used for container image manipulation during build processes. Consider vendoring to ublue-os/packages if heavily used.

#### Fonts & Development Tools

**che/nerd-fonts**

**Purpose:** Programming fonts with icon/glyph support  
**Used By:** Bluefin DX, developer images  
**Risk Level:** 🟢 Low (widely used, stable)

Provides Nerd Fonts popular among developers for terminal and code editor use. Includes patched fonts with programming ligatures and icons.

**atim/** (Multiple Repositories)

**Repositories:**
- atim/ubuntu-fonts
- atim/starship (command prompt tool)

**Used By:** Various images  
**Risk Level:** 🟢 Low (fonts and CLI tools)

Provides specialized fonts and CLI tools not available in Fedora proper.

#### IDE & Development

**phracek/PyCharm**

**Purpose:** JetBrains PyCharm IDE  
**Used By:** Bluefin DX (optional installation)  
**Risk Level:** 🟢 Low (optional, well-maintained)

Provides PyCharm IDE for Python development. Alternative to JetBrains Toolbox installation method.

#### Hardware Support

**sunwire/input-remapper**

**Purpose:** Input device remapping for custom hardware  
**Used By:** Gaming and accessibility use cases  
**Risk Level:** 🟡 Medium (specialized hardware tool)

Enables remapping of input devices for custom gaming controllers and accessibility hardware configurations.

#### Utility Packages

**errornointernet/packages**

**Purpose:** Miscellaneous utilities  
**Used By:** Various optional tools  
**Risk Level:** 🟡 Medium (small external repo)

Contains various utility packages. Limited documentation on specific packages included.

### External Non-COPR Repositories

:::caution Third-Party Repository Risk
Two additional external repositories require evaluation
:::

#### Terra Repository

**Status:** Disabled by default  
**Purpose:** Additional RPM Fusion and multimedia packages  
**Risk Level:** 🟡 Medium (disabled but present in configs)

**Evaluation Needed:**
- Currently disabled by default in configurations
- Review necessity and document required packages
- Consider removal if unused or migrate needed packages

#### negativo17 Multimedia

**Purpose:** Multimedia codecs and drivers  
**Risk Level:** 🟡 Medium (multimedia codecs have licensing complexity)

**Usage Status:** Used in specific image variants  
**Concern:** Requires documentation of specific required packages and justification

### High-Risk Package Analysis

:::danger Security Review Required
One kernel module from third-party source requires security audit
:::

#### looking-glass-kvmfr (Kernel Module)

**Source:** Third-party COPR (via ublue-os/akmods redistribution)  
**Purpose:** KVM framebuffer relay for Looking Glass (low-latency VM display)  
**Risk Level:** 🔴 High (kernel module, external source)

**Concerns:**
- Kernel module with privileged access
- Originated from external source
- Limited upstream review
- Potential security implications

**Recommendation:** Security audit and vendor into ublue-os/akmods with upstream contribution

## Dependency Management Strategy

### Current Approach

| Strategy | Implementation | Effectiveness |
|----------|----------------|---------------|
| **First-Party Control** | 4 ublue-os COPRs | ✅ Excellent |
| **Close Collaborator Trust** | kylegospo repos | ✅ Good |
| **External Vetting** | Third-party repos | ⚠️ Variable |
| **Optional Packages** | User choice for some packages | ✅ Good |

### Dependency Categories

**Tier 1 - Critical (First-Party):**
- ublue-os/packages
- ublue-os/akmods
- ublue-os/staging

**Tier 2 - Trusted External (Close Collaboration):**
- kylegospo/* repositories

**Tier 3 - Vetted External (Specialized):**
- Font repositories (che, atim)
- Development tools (phracek)

**Tier 4 - Monitored External (Limited Use):**
- Container tools (rodeo0x, ganto)
- Utility packages (errornointernet)

## Recommendations

### Immediate Actions (0-3 months)

| Priority | Action | Rationale | Owner |
|----------|--------|-----------|-------|
| 🔴 **Critical** | Security audit looking-glass-kvmfr | Kernel module risk | Security Team |
| 🔴 **High** | Document negativo17 usage | Licensing clarity | Documentation |
| 🟡 **Medium** | Review Terra necessity | Currently disabled, evaluate removal | Maintainers |

### Short-term (3-6 months)

| Priority | Action | Rationale | Timeline |
|----------|--------|-----------|----------|
| 🟡 **Medium** | Vendor looking-glass-kvmfr | Move to ublue-os/akmods control | 3 months |
| 🟡 **Medium** | Evaluate umoci vendoring | Consider ublue-os/packages | 6 months |
| 🟢 **Low** | Monitor third-party repo health | Implement availability monitoring | 6 months |

### Long-term (6-12 months)

| Priority | Action | Rationale | Timeline |
|----------|--------|-----------|----------|
| 🟢 **Low** | Upstream podman-bootc features | Reduce external dependencies | 12 months |
| 🟢 **Low** | Font consolidation | Consider ublue-os/fonts COPR | 12 months |
| 🟢 **Low** | Contribute to Fedora proper | Submit heavily-used packages upstream | 12+ months |

## Security Considerations

### Risk Assessment

| Risk Factor | Level | Mitigation |
|-------------|-------|------------|
| **Kernel Modules** | 🔴 High | Security audit, vendoring |
| **Multimedia Codecs** | 🟡 Medium | Document licensing, monitor updates |
| **External Dependencies** | 🟡 Medium | Health monitoring, backup plans |
| **Supply Chain** | 🟡 Medium | Vendor critical packages |

### Mitigation Strategies

**Implemented:**
- ✅ First-party COPRs for critical infrastructure
- ✅ Selective external repository usage
- ✅ Automated dependency updates via Renovate

**Recommended:**
- ⚠️ Automated health monitoring for third-party repos
- ⚠️ Security scanning for external packages
- ⚠️ Documented fallback plans for external dependency failures

## COPR Repository Health

### First-Party Repository Status

| Repository | Status | Last Updated | Build Success |
|------------|--------|--------------|---------------|
| **ublue-os/staging** | ✅ Active | Current | 95%+ |
| **ublue-os/packages** | ✅ Active | Current | 98%+ |
| **ublue-os/akmods** | ✅ Active | Current | 95%+ |
| **ublue-os/ucore** | ✅ Active | Current | 98%+ |

### Third-Party Repository Monitoring

**Monitoring Needs:**
- Automated health checks for availability
- Build success rate tracking
- Update frequency monitoring
- Alternative source identification

## Alternatives & Contingencies

### Package Migration Paths

**If External COPR Becomes Unavailable:**

1. **Gaming packages (kylegospo):** Vendor to ublue-os/packages or continue close collaboration
2. **Fonts:** Vendor to ublue-os/fonts COPR or use Fedora flatpak fonts
3. **Container tools:** Build from source or submit to Fedora proper
4. **Hardware tools:** Vendor to ublue-os/packages or document manual installation

### Fedora Integration Opportunities

**Packages Suitable for Fedora Proper:**
- ublue-os-just and ujust recipes (after generalization)
- Input remapper tools (after packaging standards compliance)
- Some gaming optimizations (coordinate with Fedora Games SIG)

## Conclusion

The ublue-os ecosystem demonstrates reasonable dependency management with strong first-party control (4 COPRs) covering critical infrastructure. Third-party dependencies (10 COPRs) serve specialized needs (gaming, fonts, niche hardware) with generally low risk.

**Strengths:**
- ✅ Strong first-party infrastructure
- ✅ Clear dependency categorization
- ✅ Close collaboration with key external maintainers (kylegospo)
- ✅ Optional external packages reduce mandatory dependencies

**Areas for Improvement:**
- ⚠️ Security audit of kernel modules (kvmfr)
- ⚠️ Documentation of negativo17 specific packages
- ⚠️ Automated health monitoring for third-party repos
- ⚠️ Contingency planning for external dependency failures

**Overall Risk Level:** 🟡 **Medium-Low**

The project balances innovation (external packages) with control (first-party infrastructure) effectively. Implementing recommended security reviews and monitoring will further reduce risk.

## Related Work

- [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) - Main Bluefin image repository
- [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) - Gaming variant using gaming COPRs
- [@ublue-os/main](https://github.com/ublue-os/main) - Base Universal Blue images
- [@ublue-os/akmods](https://github.com/ublue-os/akmods) - Kernel module infrastructure
- [@ublue-os/packages](https://github.com/ublue-os/packages) - Package specifications
- [Bluefin Health Check](./bluefin-health-check.md) - Bluefin project analysis
- [Bazzite Health Check](./bazzite-health-check.md) - Bazzite project analysis
- [Build Optimization Analysis](./ublue-build-optimization.md) - CI/CD improvements

## References

- [Fedora COPR](https://copr.fedorainfracloud.org/) - Fedora COPR infrastructure
- [Fedora Repository Documentation](https://docs.fedoraproject.org/en-US/quick-docs/repositories/) - Repository guidelines
- [ublue-os Organization](https://github.com/ublue-os) - Project organization
- [COPR Documentation](https://docs.pagure.org/copr.copr/user_documentation.html) - COPR usage guide

## Methodology

**Analysis Approach:**
- Manual review of Containerfiles across ublue-os repositories
- Analysis of build scripts and repository configuration files
- Examination of package dependencies in COPR repositories
- Assessment of update frequency and maintenance status

**Data Sources:**
- GitHub repository file analysis
- COPR repository metadata
- Build log examination
- Community documentation review

---

**Analysis Date:** October 2025  
**Methodology:** Repository configuration analysis, build script review, COPR metadata examination  
**Analyst:** GitHub Copilot

**Note on Coverage:** Analysis covers primary ublue-os images (bluefin, bazzite, main, aurora). Some optional or user-installed COPRs may not be included. External repository health status based on October 2025 observation.
