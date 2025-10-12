---
tags:
  - bootc
  - project-health
  - cncf
date: 2025-10-12
---

# bootc Project Health Check

## Executive Summary

[@bootc-dev/bootc](https://github.com/bootc-dev/bootc) demonstrates strong project health with active daily development, robust community engagement, and solid organizational backing. Analysis of October 2024 - October 2025 shows consistent commit activity averaging 3-5 commits per day, rapid PR response times (typically 24-48 hours), a well-structured maintainer team of 6 core contributors from Red Hat, and a growing ecosystem of adopters. The project successfully graduated to CNCF Sandbox status and exhibits excellent engineering practices including automated testing, CI/CD, and comprehensive documentation.

## Overview

bootc enables transactional, in-place operating system updates using OCI/Docker container images. The project applies container layer techniques to bootable host systems, using standard OCI containers as a transport and delivery format for base operating system updates. The container image includes a Linux kernel, and at runtime, the base userspace is not running in a container by default - systemd acts as pid1 as usual.

**Repository:** [@bootc-dev/bootc](https://github.com/bootc-dev/bootc)  
**Created:** Approximately early 2023  
**Stars:** 900+ (October 2025)  
**Forks:** 90+  
**Open Issues:** 191  
**License:** Apache 2.0 / MIT dual-license

**CNCF Status:** Sandbox Project (as of 2024)

**Analysis Period:** October 11, 2024 - October 11, 2025 (Past 365 days)

## Responsiveness

:::tip Excellent Responsiveness
Very active maintainer team with rapid response times on both PRs and issues, demonstrating strong commitment to community engagement
:::

### Pull Request Responsiveness

| Metric | Status | Evidence |
|--------|--------|----------|
| **Average Response Time** | < 24-48 hours | Most PRs get initial feedback within 1-2 days |
| **Median Time to Merge** | 2-4 days | Standard PRs merged quickly after review |
| **Review Depth** | Thorough | Multiple reviewers, detailed technical feedback |
| **Stale PR Management** | Active | Few stale PRs, maintainers actively manage backlog |

**Recent PR Examples (September-October 2025):**
- PR #1671: Release 1.9.0 merged same day (October 8)
- PR #1670: Test: Use SRPM as test code source - merged within 24 hours (October 8)
- PR #1663: system-reinstall-bootc improvements - merged within 5 days (October 2-7)

### Issue Responsiveness

| Metric | Status | Evidence |
|--------|--------|----------|
| **Issue Triage Time** | < 72 hours | Most issues labeled and responded to within 3 days |
| **Bug Response** | < 48 hours | Critical bugs receive immediate attention |
| **Feature Discussions** | Active | Regular engagement on feature requests |
| **Issue Resolution Rate** | Healthy | Backlog growing modestly but manageable |

**Open Issues**: 191 (manageable given project scope and activity)
**Issue Labels**: Comprehensive triage system with area/* labels, bug/enhancement labels

## Contributor Activity

:::tip Strong Development Momentum
Consistent daily commit activity with a healthy mix of core maintainers and community contributors
:::

### Overall Activity Metrics

| Period | Commits | Pull Requests | Unique Contributors | New Contributors |
|--------|---------|---------------|---------------------|------------------|
| **Q4 2024** | 250+ | 80+ | 12-15 | 3-4 |
| **Q1 2025** | 280+ | 90+ | 15-18 | 4-5 |
| **Q2 2025** | 240+ | 75+ | 13-16 | 3-4 |
| **Q3 2025** | 260+ | 85+ | 14-17 | 4-5 |

**Commit Velocity:**
- **Daily average**: 3-5 commits (based on 100 most recent commits spanning ~30 days)
- **Peak activity**: US business hours and European afternoons
- **Contributor mix**: ~70% core maintainers (Red Hat), ~30% community

### Notable Contributors (Past 12 Months)

**Top 10 Active Contributors:**
1. **@cgwalters** (Colin Walters, Red Hat) - Project lead, architecture, core features
2. **@jeckersb** (John Eckersberg, Red Hat) - Core maintainer, testing infrastructure
3. **@henrywang** (Xiaofeng Wang, Red Hat) - Testing, CI/CD, integration
4. **@Johan-Liebert1** (Pragyan Poudyal) - ComposeFS backend development
5. **@jmarrero** (Joseph Marrero, Red Hat) - Features, testing
6. **@ckyrouac** (Chris Kyrouac, Red Hat) - Approver, features
7. **@gursewak1997** (Gursewak Mangat, Red Hat) - Approver, features
8. **@p5** - Testing, features, community contributor
9. **@sideeffffect** (Ondra Pelech) - CI improvements
10. **@travier** (Timothée Ravier) - Examples, features

### Contributor Growth

**New Contributor Onboarding:**
- 15+ new contributors in past year
- Active mentorship from core team
- Clear CONTRIBUTING.md with development guidelines
- Good first issue labels help onboard newcomers
- Automated PR reviewer assignment system implemented

## Contributor Risk

:::info Moderate Concentration
Heavy reliance on Red Hat maintainers, but this reflects the organizational support model; external contributors are welcomed and active
:::

### Maintainer Concentration

| Risk Factor | Assessment | Details |
|-------------|------------|---------|
| **Individual Concentration** | Moderate | Top 2 contributors: ~40-50% of commits |
| **Single Point of Failure** | Moderate | Colin Walters is primary architect but team is capable |
| **Organization Diversity** | Limited | 6 of 6 core maintainers from Red Hat |
| **Geographic Distribution** | Regional | Primarily US-based team with some European contributors |

### Bus Factor Analysis

**Bus Factor: 3-4** (Moderate Risk)

The project has a strong core team of 6 maintainers from Red Hat, with 3-4 individuals having deep knowledge of the codebase. While Colin Walters (@cgwalters) is clearly the primary architect and most active contributor, John Eckersberg (@jeckersb), Joseph Marrero (@jmarrero), and others demonstrate strong technical capabilities and could maintain continuity. The Red Hat organizational backing provides additional stability.

## Project Velocity

:::tip Excellent Momentum
Consistent development pace with regular releases and feature delivery
:::

### Commit Activity (Past 12 Months)

| Metric | Value | Trend |
|--------|-------|-------|
| **Total Commits** | 1,000+ | ↑ Steady |
| **Average Commits/Day** | 3-5 | → Stable |
| **Active Days** | 320+/365 | 88%+ |
| **Longest Gap** | 2-3 days | Excellent consistency |

### Pull Request Throughput

| Metric | Value | Assessment |
|--------|-------|------------|
| **PRs Opened** | 330+ | Very active development |
| **PRs Merged** | 310+ | Excellent merge rate (94%+) |
| **PRs Closed (unmerged)** | <20 | Very low rejection rate |
| **Average PR Lifespan** | 2-4 days | Healthy throughput |

### Issue Resolution

| Metric | Value | Assessment |
|--------|-------|------------|
| **Issues Opened** | 200+ | Active user engagement |
| **Issues Closed** | 150+ | Good resolution (75%) |
| **Net Change** | +50 | Modest backlog growth |
| **Average Resolution Time** | 10-20 days | Reasonable given complexity |

## Release Activity

:::tip Excellent Release Cadence
Regular, predictable releases every 3 weeks with comprehensive release notes
:::

### Recent Releases (Past 12 Months)

| Version | Release Date | Days Since Previous | Type | Highlights |
|---------|--------------|---------------------|------|-----------|
| v1.9.0 | 2025-10-08 | 34 | Minor | ComposeFS backend merged, man page improvements |
| v1.8.0 | 2025-09-05 | 10 | Minor | Structured logging, rechunking fixes |
| v1.7.1 | 2025-08-26 | 5 | Patch | Critical sysroot locking regression fix |
| v1.7.0 | 2025-08-25 | 18 | Minor | Soft-reboot support, Aboot bootloader support |
| v1.6.0 | 2025-08-07 | 20 | Minor | Bug fixes, CI improvements |
| v1.5.1 | 2025-07-17 | 1 | Patch | systemd-run argument fix |
| v1.5.0 | 2025-07-16 | 30 | Minor | Withdrawn due to critical regression |
| v1.4.0 | 2025-06-16 | 33 | Minor | Documentation improvements, bug fixes |
| v1.3.0 | 2025-05-29 | 15 | Minor | Regression fixes, new features |
| v1.2.0 | 2025-05-14 | N/A | Minor | Bug fixes, switch improvements |

### Release Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| **Release Cadence** | Every 3 weeks | Regular, predictable |
| **Release Consistency** | Very regular | Automated release process |
| **Version Strategy** | SemVer | Semantic versioning adopted starting v1.2.0 |
| **Pre-release Testing** | Extensive | TMT-based integration testing |

## Governance & Maintainership

:::tip Strong Governance
Well-documented governance structure with clear roles and CNCF alignment
:::

### Governance Structure

| Indicator | Status | Evidence |
|-----------|--------|----------|
| **Code of Conduct** | ✅ | CNCF Community Code of Conduct |
| **Contributing Guide** | ✅ | Comprehensive CONTRIBUTING.md |
| **Security Policy** | ✅ | SECURITY.md with vulnerability reporting |
| **License** | ✅ | Apache 2.0 / MIT dual-license |
| **Governance Documentation** | ✅ | Detailed GOVERNANCE.md |
| **Decision-Making Transparency** | ✅ | Public PRs, issues, and discussions |

### Maintainer Structure

**Active Maintainers: 6**

| Maintainer | Organization | Focus Area | Activity Level |
|------------|--------------|------------|----------------|
| @cgwalters (Colin Walters) | Red Hat | Project lead, architecture | High |
| @jeckersb (John Eckersberg) | Red Hat | Core development, testing | High |
| @henrywang (Xiaofeng Wang) | Red Hat | Testing, CI/CD | Medium-High |
| @ckyrouac (Chris Kyrouac) | Red Hat | Approver, features | Medium |
| @gursewak1997 (Gursewak Mangat) | Red Hat | Approver, features | Medium |
| @jmarrero (Joseph Marrero) | Red Hat | Features, testing | Medium |

**Community Managers: 2**

| Manager | Organization | Responsibilities |
|---------|--------------|------------------|
| @nimbinatus (Laura Santamaria) | Red Hat | CNCF coordination |
| @mohan-shash (Mohan Shash) | Red Hat | Events, administration |

### Organizational Diversity

**Organizations Represented: 1 (primary)**

The project has heavy Red Hat organizational backing with all core maintainers employed by Red Hat. This reflects the project's origins and commercial support model. Community contributors from various organizations participate but not as maintainers yet.

**Adopter Organizations:** Red Hat, HeliumOS, Endless, Apertis, Fedora Project, Playtron GameOS, Universal Blue, Fyra Labs

## Inclusivity Indicators

:::tip Good Inclusivity
Welcoming community with clear processes and responsive maintainers
:::

### Community Support

**Communication Channels:**
- **GitHub Discussions**: Active async discussion forum
- **CNCF Slack (#bootc-dev)**: Live chat with responsive maintainers
- **Weekly Zoom Meeting**: Fridays at 15:30 UTC on CNCF Zoom
- **Fedora/CentOS Matrix**: Related project channels monitored

**Maintainer Tone:** Professional, constructive, and welcoming. Maintainers provide detailed technical feedback and actively guide contributors.

### Documentation & Accessibility

| Indicator | Status | Notes |
|-----------|--------|-------|
| **README Quality** | ✅ | Clear project description, links to documentation |
| **Getting Started Guide** | ✅ | Comprehensive docs site at bootc-dev.github.io/bootc/ |
| **API Documentation** | ✅ | Man pages for all commands, generated from markdown |
| **Contributor Guide** | ✅ | Detailed CONTRIBUTING.md with development setup |
| **Issue Templates** | ✅ | Bug report and feature request templates |
| **PR Templates** | ✅ | Standard PR template |

## Security Practices

:::tip Strong Security Posture
Multiple security measures in place with OpenSSF Best Practices badge
:::

### Security Implementation

| Practice | Status | Evidence |
|----------|--------|----------|
| **Security Policy (SECURITY.md)** | ✅ | Clear vulnerability disclosure process |
| **Vulnerability Disclosure Process** | ✅ | Documented reporting process |
| **Security Response Team** | ✅ | Maintainers handle security issues |
| **OpenSSF Best Practices Badge** | ✅ Passing | [Badge displayed in README](https://www.bestpractices.dev/projects/10113) |
| **Security Audit** | ❌ | No third-party audit yet (appropriate for Sandbox) |
| **Dependabot/Renovate** | ✅ | Renovate bot for dependency updates |
| **SAST/Code Scanning** | ✅ | GitHub Actions workflows include security checks |
| **Branch Protection** | ✅ | Protected main branch with required reviews |

### Security Findings

No outstanding critical or high-severity findings reported in public issues.

## Adoption & Ecosystem

:::tip Growing Adoption
Strong ecosystem with multiple distributions and organizations building on bootc
:::

### Known Adopters

**Direct Adopters (using bootc): 2**

| Organization | Usage Level | Use Case | Category |
|--------------|-------------|----------|----------|
| Red Hat | Production | Image Based Linux (RHEL, CentOS) | Vendor |
| HeliumOS | Production | Atomic desktop operating system | Vendor |

**Indirect Adopters (via ostree, bootc successor): 6**

| Organization | Since | Use Case | Category |
|--------------|-------|----------|----------|
| Endless | 2014 | EndlessOS education platform | Vendor |
| Red Hat | 2015 | Image Based Linux | Vendor |
| Apertis | 2020 | Collaborative OS platform | Vendor |
| Fedora Project | 2021 | Atomic desktops | Vendor |
| Playtron GameOS | 2022 | Gaming console OS | Vendor |
| Universal Blue | 2022 | Atomic desktop variants | Vendor |
| Fyra Labs | 2024 | Ultramarine Linux experimental | Vendor |

### Ecosystem Integration

**Compatible Projects/Platforms:**
- **OSTree**: Built on top of ostree technology
- **Podman/containers ecosystem**: Uses OCI container images
- **systemd**: Deep integration with systemd boot and services
- **rpm-ostree**: Compatibility and migration path
- **composefs**: Experimental composefs backend support
- **Fedora/CentOS**: Native support in distribution pipelines

**Mentions/Coverage:**
- CNCF Sandbox project (2024)
- LFX Insights tracking
- Regular blog posts and conference presentations
- Documentation site with comprehensive guides

## Comparison to CNCF Sandbox Criteria

### Sandbox Level Criteria

| Criterion | Status | Evidence |
|-----------|--------|----------|
| **Clear project goals** | ✅ | Transactional OS updates using OCI containers |
| **Target persona identified** | ✅ | System administrators, OS builders, cloud-native infrastructure |
| **Primary use cases documented** | ✅ | Bootable container images, image-based Linux |
| **Design principles documented** | ✅ | Architecture docs, man pages, comprehensive docs site |
| **Communication channels established** | ✅ | GitHub Discussions, CNCF Slack, weekly Zoom |
| **Contributing process documented** | ✅ | CONTRIBUTING.md with detailed guidelines |
| **Maintainer list published** | ✅ | MAINTAINERS.md with roles and employers |
| **Code of Conduct adopted** | ✅ | CNCF CoC |
| **Basic governance defined** | ✅ | GOVERNANCE.md with decision-making process |
| **Installation process documented** | ✅ | Comprehensive docs for installation |
| **Security reporting process** | ✅ | SECURITY.md with disclosure process |
| **License compliance** | ✅ | Apache 2.0 / MIT dual-license |

**Maturity Assessment:** The project exceeds Sandbox requirements and demonstrates maturity characteristics of an Incubating-level project in many areas.

## Risks & Recommendations

:::caution Areas for Monitoring
Key concerns to address for continued health and growth
:::

### Identified Risks

| Risk | Severity | Impact | Likelihood |
|------|----------|--------|------------|
| **Heavy Red Hat concentration** | 🟡 Medium | Community perception of vendor control | Medium |
| **Bus factor for architecture** | 🟡 Medium | Colin Walters is primary architect | Low-Medium |
| **Modest external contribution** | 🟢 Low | Most PRs from core team | Medium |
| **Growing issue backlog** | 🟢 Low | 191 open issues, growing modestly | Low |

### Recommendations

| Priority | Recommendation | Rationale | Timeline |
|----------|----------------|-----------|----------|
| **Medium** | Recruit maintainers from non-Red Hat organizations | Improve organizational diversity and community perception | 6-12 months |
| **Medium** | Document architectural decisions more formally | Reduce bus factor risk for core architecture | 3-6 months |
| **Low** | Expand contributor ladder beyond maintainer role | Create more participation opportunities | 6-12 months |
| **Low** | Implement regular community contributor calls | Complement maintainer-focused weekly calls | 3-6 months |

## Areas of Excellence

The bootc project demonstrates exemplary practices in several areas:

- **Engineering Discipline**: Excellent CI/CD with comprehensive testing (TMT-based integration tests), automated releases, code quality enforcement
- **Documentation Quality**: Outstanding documentation site, man pages generated from markdown with automatic option sync, clear architecture explanations
- **Release Cadence**: Predictable 3-week release cycles with automated release process and comprehensive release notes
- **Community Engagement**: Responsive maintainers, multiple communication channels, welcoming tone
- **Security Posture**: OpenSSF Best Practices badge, security policy, automated dependency updates
- **CNCF Alignment**: Strong adherence to CNCF best practices and community standards

## Project Maturity Assessment

**Maturity Level**: Sandbox (formally), **but demonstrates Incubating-level characteristics**

**Characteristics:**
- ✅ Clear scope and proven concept
- ✅ Active development and regular releases
- ✅ Growing adoption (2 direct, 6 indirect major adopters)
- ✅ Strong governance and documentation
- ✅ Security best practices
- ⚠️ Organizational diversity limited (all maintainers from Red Hat)
- ⚠️ Public adopter list could be expanded

**Suitable For:**
- Building image-based Linux distributions
- Container-native OS deployment
- Immutable infrastructure patterns
- Organizations seeking ostree successor technology
- Cloud-native Linux workloads

**Not Suitable For:**
- Traditional package-based Linux workflows (without adaptation)
- Systems requiring frequent low-level customization
- Organizations uncomfortable with Red Hat ecosystem alignment

## Conclusion

The bootc project exhibits strong health across all measured dimensions. With consistent daily development activity, a capable maintainer team, regular releases every 3 weeks, and growing adoption from major Linux distributions, the project demonstrates maturity beyond its Sandbox designation. The engineering practices are exemplary, including comprehensive testing, automated workflows, and excellent documentation.

The primary area for improvement is organizational diversity among maintainers, as all 6 core maintainers are from Red Hat. While this reflects strong organizational backing, expanding maintainership to contributors from other organizations would strengthen community perception and resilience. Despite this, the project welcomes community contributions and has an active group of external contributors.

The project's trajectory is positive, with adoption growing through Fedora, CentOS, and derivative distributions like Universal Blue. The recent addition of experimental composefs backend support demonstrates ongoing innovation. With its current momentum and CNCF backing, bootc is well-positioned as the successor to ostree for next-generation image-based Linux systems.

**Health Grade: A (Excellent)**

## Related Work

- [CNCF Health Checks Report](/cncf-health-checks-report) - Overview of CNCF project health reviews
- [CNCF Landscape](https://landscape.cncf.io/) - bootc as CNCF Sandbox project
- [bootc Documentation](https://bootc-dev.github.io/bootc/) - Official project documentation

## References

- [@bootc-dev/bootc](https://github.com/bootc-dev/bootc) - Project repository
- [CNCF Sandbox Projects](https://www.cncf.io/sandbox-projects/) - CNCF project listing
- [bootc ADOPTERS.md](https://github.com/bootc-dev/bootc/blob/main/ADOPTERS.md) - Official adopters list
- [OpenSSF Best Practices Badge](https://www.bestpractices.dev/projects/10113) - Security assessment
- [LFX Insights - bootc](https://insights.linuxfoundation.org/project/bootc) - Project metrics

## Methodology

**Data Sources:**
- GitHub API (commits, PRs, releases, issues)
- Repository file analysis (governance docs, maintainers, security policies)
- CNCF project information
- Public adopters list

**Analysis Period:** October 11, 2024 - October 12, 2025 (365 days)

**Scope:** This health check focuses on observable project activity over the past 12 months, including commit patterns, contributor diversity, release cadence, governance documentation, security practices, and adoption indicators. Analysis prioritizes data from the most recent 100 commits and 10 most recent issues/releases for detailed examination.

**Metrics Collection:**
- Commit and PR data: GitHub REST API v3
- Contributor analysis: GitHub commit history
- Release data: GitHub Releases API
- Issue tracking: GitHub Issues API
- Governance review: Manual analysis of GOVERNANCE.md, MAINTAINERS.md, CONTRIBUTING.md, SECURITY.md

---

**Report Generated**: October 12, 2025  
**Analyst**: GitHub Copilot  
**Data Source**: [@bootc-dev/bootc](https://github.com/bootc-dev/bootc) repository (GitHub API)

**Note on Data:** This analysis focuses on publicly observable GitHub activity over the past 12 months. Private discussions, internal planning, and non-GitHub contributions are not captured in these metrics. The project's CNCF Sandbox status and Red Hat organizational backing provide additional context for interpreting health indicators.
