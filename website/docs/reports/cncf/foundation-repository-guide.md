---
tags:
  - cncf
  - foundation
  - reference-guide
last_updated: 2025-10-16
---

# CNCF Foundation Repository Guide

## Executive Summary

The [@cncf/foundation](https://github.com/cncf/foundation) repository serves as the central policy and governance hub for the Cloud Native Computing Foundation. This comprehensive guide documents the repository's structure, content organization, and the purpose of each policy document to enable effective agent-based analysis and content generation.

## Overview

**Repository:** [@cncf/foundation](https://github.com/cncf/foundation)  
**Purpose:** Central repository for CNCF policies, governance documents, legal guidelines, and community resources  
**Primary Users:** CNCF members, project maintainers, legal teams, community managers, and governance bodies

The repository contains the authoritative documentation for:
- Foundation governance and charter
- Legal policies and licensing guidance
- Community codes of conduct and procedures
- Marketing and branding guidelines
- Membership agreements and structures

## Repository Structure

### Top-Level Organization

The repository is organized into the following major sections:

```
cncf/foundation/
├── README.md                          # Repository overview and navigation
├── charter.md                         # CNCF Charter (foundational document)
├── code-of-conduct.md                 # Main Code of Conduct
├── agreements/                        # Legal agreements and templates
├── code-of-conduct/                   # CoC procedures and governance
├── code-of-conduct-languages/         # Translated versions of CoC
├── documents/                         # Strategy documents and templates
├── license-exceptions/                # License exception tracking
├── policies-guidance/                 # Operational policies and guidelines
├── project-maintainers.csv            # List of all project maintainers
└── [Additional top-level files]       # Specific policy documents
```

## Directory-by-Directory Breakdown

### Root Level Files

The root directory contains critical governance and policy documents that apply foundation-wide:

| File | Purpose | Key Content |
|------|---------|-------------|
| **charter.md** | CNCF Charter | Foundation mission, governance structure, TOC/Governing Board composition, membership tiers, IP policy, values and principles |
| **code-of-conduct.md** | Community Code of Conduct | Expected behaviors, reporting procedures, enforcement mechanisms |
| **README.md** | Navigation guide | Repository overview, links to major sections, how to request changes |
| **cncf-membership-agreement.pdf** | Legal membership agreement | Terms and conditions for CNCF membership |
| **cncf-membership-guide.md** | Membership information | Guide to joining CNCF, benefits, and member types |
| **project-maintainers.csv** | Maintainer registry | Comprehensive list of maintainers across all CNCF projects |
| **KubeWeekly.md** | Newsletter guidelines | Process for KubeWeekly newsletter submissions |
| **style-guide.md** | Terminology standards | Cloud native terminology recommendations |
| **translation.md** | Translation guidelines | Guidance for translating cloud native documentation |
| **copyright-notices.md** | Copyright guidance | Recommendations for copyright notices in projects |
| **license-notices.md** | License attribution | How to properly attribute licenses |
| **conformance-programs.md** | Conformance certification | Details on CNCF conformance programs |
| **journey-reports.md** | End user stories | Guidelines for publishing journey reports |
| **legal-committee-charter.md** | Legal Committee governance | Charter for the CNCF Legal Committee |
| **cncf-marketing-committee-chair.md** | Marketing leadership | Role and responsibilities of Marketing Committee chair |
| **travel_funding.md** | Travel assistance | Information on travel funding programs |
| **do-insurance.md** | Insurance guidance | Directors and Officers insurance information |
| **cncfgroups.md** | Community groups | Information about CNCF community groups |

### /agreements/

**Purpose:** Contains legal agreement templates for project contributions and transfers.

| File/Directory | Purpose |
|---------------|---------|
| **README.md** | Overview of agreement types |
| **Sample Contribution Agreement (2025).pdf** | Template for contributing projects to CNCF |
| **deprecated/** | Archived older versions of agreements |

**Use Case:** When projects join CNCF, these templates govern the legal transfer of trademarks, copyrights, and project assets.

### /code-of-conduct/

**Purpose:** Detailed procedures and governance for Code of Conduct enforcement.

| File | Purpose |
|------|---------|
| **coc-committee-charter.md** | Charter defining the CoC Committee's role, composition, and authority |
| **coc-committee-jurisdiction-policy.md** | Defines what falls under CoC Committee jurisdiction vs. project-level |
| **coc-incident-resolution-procedures.md** | Step-by-step procedures for reporting, investigating, and resolving CoC violations |

**Key Concepts:**
- **Committee Composition:** How the CoC Committee is formed
- **Jurisdiction:** Which incidents are handled at CNCF level vs. project level
- **Resolution Process:** Investigation stages, confidentiality, appeals, and sanctions

### /code-of-conduct-languages/

**Purpose:** Translations of the Code of Conduct into multiple languages.

**Languages Available:** Chinese, Japanese, Korean, Spanish, and others  
**Use Case:** Ensures global accessibility of community standards.

### /documents/

**Purpose:** Strategic planning documents and operational templates.

| File/Directory | Purpose |
|---------------|---------|
| **2021-2024 CNCF Strategy.pdf** | Annual strategic plans for CNCF |
| **creative_brief_template.md/.rtf** | Template for requesting creative work |
| **project-newsletter/** | Guidelines for project newsletters |
| **nats/** | Historical documents related to NATS project |

**Strategic Documents:** These PDFs outline CNCF's yearly priorities, goals, and focus areas. They provide context for understanding the foundation's direction.

### /license-exceptions/

**Purpose:** Tracks approved exceptions to CNCF's standard licensing policy.

| File | Purpose |
|------|---------|
| **README.md** | Overview of the licensing exception process |
| **CNCF-licensing-exceptions.csv** | Master list of all approved exceptions |
| **cncf-exceptions-[DATE].json** | Machine-readable exception lists by date |
| **cncf-exceptions-[DATE].spdx** | SPDX-formatted exception lists |

**Use Case:** When a CNCF project needs to depend on software with a non-standard license, it must request an exception. This directory tracks all approvals.

### /policies-guidance/

**Purpose:** The largest directory, containing operational policies and best practices for CNCF projects and members.

#### Major Policy Categories

**Licensing Policies:**

| File | Purpose |
|------|---------|
| **allowed-third-party-license-policy.md** | Allowlist of acceptable licenses for dependencies without board approval |
| **agpl-recommendations.md** | Guidance on AGPL-licensed software and compatibility considerations |
| **source-available-recommendations.md** | Policy on source-available (non-OSS) licenses and when they're acceptable |
| **dco-guidelines.md** | Developer Certificate of Origin (DCO) usage guidelines |
| **recommendations-for-attribution.md** | How to properly attribute third-party code in CNCF projects |

**Marketing & Content Guidelines:**

| File | Purpose |
|------|---------|
| **blog-guidelines.md** | Submission process, content guidelines, and approval for CNCF blog posts |
| **case-study-guidelines.md** | How to create and submit end-user case studies |
| **online-programs-guidelines.md** | Guidelines for webinars, virtual events, and online programs |
| **social-guidelines.md** | Social media best practices for CNCF and projects |
| **website-guidelines.md** | Vendor neutrality guidelines for project websites |
| **phippy-guidelines.md** | Usage guidelines for Phippy and Friends characters |

**Technical & Operational Guidance:**

| File | Purpose |
|------|---------|
| **container-image-guidance.md** | Best practices for container image hosting and distribution |
| **slack-guidelines.md** | Guidelines for CNCF Slack workspace usage |
| **slack-backup.md** | Slack data backup and retention policies |
| **sandbox-pr-guidelines.md** | PR template and requirements for projects applying to Sandbox |
| **proprietary-interactions-guidance.md** | How CNCF projects should interact with proprietary software and services |

**Governance Policies:**

| File | Purpose |
|------|---------|
| **maintainers-election-policy.md** | Process for electing maintainer representatives to TOC and Governing Board |

**Media Subdirectory:**

| Purpose |
|---------|
| Contains reference images and diagrams used in policy documents |

## Key Policy Documents Deep Dive

### Charter (charter.md)

**Critical for:** Understanding CNCF's governance structure, decision-making authority, and organizational hierarchy.

**Major Sections:**

1. **Mission** - Defines cloud native computing and CNCF's role
2. **Values** - Trusted, Open, Neutral, Platform agnostic, Accelerated adoption, Project diversity, Experimentation, Sustainability, Inclusive unity
3. **Membership Tiers** - Platinum, Gold, Silver, End User, Academic, Non-Profit
4. **Governing Board** - Business oversight, budget, marketing
5. **Technical Oversight Committee (TOC)** - Technical vision, project acceptance, alignment
6. **End User TAB** - Voice of end users, feedback to TOC
7. **Project Levels** - Sandbox, Incubating, Graduated criteria
8. **IP Policy** - Licensing requirements (Apache 2.0 default)
9. **Marketing Committee** - Marketing strategy and execution

**Key Facts:**
- TOC has 11 members (6 elected by GB, 2 by End Users, 1 by maintainers, 2 by TOC)
- Governing Board members must represent different Related Companies
- All code must use Apache 2.0 license (with exception process)
- Projects can be "Included," "Associated," or "Used by" CNCF

### Allowed Third-Party License Policy (policies-guidance/allowed-third-party-license-policy.md)

**Purpose:** Defines which licenses are automatically acceptable for dependencies without requiring Governing Board approval.

**Allowlisted Categories:**
1. OSI-approved open source licenses
2. FSF Free Software licenses
3. Specific permissive licenses (Apache, MIT, BSD variants, etc.)

**Not Automatically Allowed:**
- AGPL and GPL family (require exceptions)
- Source-available licenses (require exceptions)
- Proprietary licenses

**Process:** If a dependency uses a non-allowlisted license, maintainers must request an exception through the TOC, which then goes to the Governing Board for approval.

### Blog Guidelines (policies-guidance/blog-guidelines.md)

**Purpose:** Defines who can publish on the CNCF blog and what content is appropriate.

**Eligible Authors:**
- CNCF member companies
- CNCF project maintainers and contributors
- CNCF community members
- CNCF ambassadors and end users

**Content Categories:**
- Project updates and releases
- Technical deep dives
- End user case studies
- Ecosystem integrations
- Event recaps
- Community insights

**Submission Process:**
1. Submit via PR to cncf/blog repository
2. Include proposed publication date
3. Follow editorial guidelines
4. Undergo review and editing

**Restrictions:**
- No vendor pitches or sales content
- Must maintain vendor neutrality
- Cannot announce non-CNCF projects/products

### Maintainers Election Policy (policies-guidance/maintainers-election-policy.md)

**Purpose:** Governs how project maintainers elect representatives to CNCF governance bodies.

**Elected Positions:**
1. One TOC seat (elected by maintainers of non-Sandbox projects)
2. Two Governing Board seats (elected by all maintainers)

**Eligibility:**
- Only maintainers listed in official project documentation
- Must be actively contributing to the project
- Cannot be from same Related Company group

**Process:**
1. Nomination period (14+ days)
2. Qualification verification
3. Election via Condorcet-IRV voting method
4. Two-year terms with staggered rotation

### Website Guidelines (policies-guidance/website-guidelines.md)

**Purpose:** Ensures project websites maintain vendor neutrality while acknowledging corporate contributions.

**Key Principles:**
1. **Vendor Neutrality:** Project identity must not be tied to any single company
2. **Acknowledgment:** Companies can be acknowledged for contributions without dominance
3. **Design Balance:** Logos, colors, and branding should be project-focused

**Acceptable:**
- "Sponsored by" or "Founded by" company mentions
- Contributor logos in neutral arrangements
- Job boards linking to multiple companies

**Not Acceptable:**
- Company branding as primary project identity
- Exclusive sponsorship appearances
- Vendor-specific deployment instructions

### Container Image Guidance (policies-guidance/container-image-guidance.md)

**Purpose:** Provides best practices for hosting, distributing, and securing container images.

**Recommendations:**
1. **Hosting:** Use CNCF-provided infrastructure or neutral registries
2. **Naming:** Use project-specific naming conventions
3. **Security:** Sign images, scan for vulnerabilities, use minimal base images
4. **Multi-arch:** Support multiple architectures (amd64, arm64, etc.)
5. **Versioning:** Follow semantic versioning for tags
6. **Distribution:** Provide multiple distribution channels

### Code of Conduct Incident Resolution (code-of-conduct/coc-incident-resolution-procedures.md)

**Purpose:** Defines the end-to-end process for handling Code of Conduct violations.

**Stages:**

1. **Reporting:** How to report incidents (email to conduct@cncf.io)
2. **Initial Response:** Acknowledgment within 24-48 hours
3. **Investigation:** Committee reviews evidence, interviews parties
4. **Decision:** Committee determines if violation occurred
5. **Sanctions:** Range from warning to permanent ban
6. **Appeals:** Process for appealing decisions
7. **Transparency:** Public anonymized reports for serious violations

**Committee Powers:**
- Issue warnings
- Require mediation
- Temporary bans
- Permanent bans
- Referral to law enforcement

## Using This Guide for Agent Operations

### Repository Navigation Pattern

When analyzing CNCF foundation policies:

1. **Start with charter.md** - Understand governance structure and authority
2. **Check policies-guidance/** - Find operational policies
3. **Review license-exceptions/** - Verify licensing requirements
4. **Consult code-of-conduct/** - Understand community standards

### Common Agent Tasks

**Task: Verify Project Licensing Compliance**
- Primary: `policies-guidance/allowed-third-party-license-policy.md`
- Secondary: `license-exceptions/CNCF-licensing-exceptions.csv`
- Context: `charter.md` (Section 11 - IP Policy)

**Task: Understand Governance Structure**
- Primary: `charter.md`
- Secondary: `policies-guidance/maintainers-election-policy.md`
- Context: Check TOC and Governing Board sections

**Task: Review Content Guidelines**
- Marketing: `policies-guidance/blog-guidelines.md`
- Case Studies: `policies-guidance/case-study-guidelines.md`
- Social Media: `policies-guidance/social-guidelines.md`
- Websites: `policies-guidance/website-guidelines.md`

**Task: Investigate CoC Issues**
- Primary: `code-of-conduct.md`
- Procedures: `code-of-conduct/coc-incident-resolution-procedures.md`
- Jurisdiction: `code-of-conduct/coc-committee-jurisdiction-policy.md`

**Task: Project Contribution Analysis**
- Agreements: `agreements/Sample Contribution Agreement (2025).pdf`
- Process: `charter.md` (Section 9 - CNCF Projects)

### Data Files for Analysis

| File | Format | Use Case |
|------|--------|----------|
| **project-maintainers.csv** | CSV | Extract maintainer lists, organizational affiliations, contact info |
| **CNCF-licensing-exceptions.csv** | CSV | Analyze license exception patterns, project dependencies |
| **cncf-exceptions-[DATE].json** | JSON | Machine-readable exception data for automation |

### Policy Cross-References

Many policies reference each other. Key dependencies:

```
charter.md
├── Defines authority structure
│   ├── TOC → Project acceptance, technical direction
│   ├── Governing Board → Business, budget, marketing
│   └── End User TAB → User feedback, adoption
│
├── IP Policy (Section 11)
│   ├── allowed-third-party-license-policy.md
│   ├── license-exceptions/
│   └── recommendations-for-attribution.md
│
└── Code of Conduct (Section 13)
    ├── code-of-conduct.md
    └── code-of-conduct/ procedures
```

## Policy Update Cadence

Different policies have different update frequencies:

| Policy Type | Update Frequency | Approval Process |
|-------------|------------------|------------------|
| **Charter** | Rare (major governance changes) | 2/3 Governing Board vote |
| **Licensing Policies** | Quarterly to annually | TOC recommendation + GB approval |
| **Marketing Guidelines** | As needed | Marketing Committee + GB approval |
| **CoC Procedures** | Annually or as needed | CoC Committee + GB approval |
| **License Exceptions** | Continuous (per request) | TOC review + GB approval |

## Reference Links

### Primary Documentation
- [@cncf/foundation](https://github.com/cncf/foundation) - Main repository
- [CNCF Charter](https://github.com/cncf/foundation/blob/main/charter.md)
- [Code of Conduct](https://github.com/cncf/foundation/blob/main/code-of-conduct.md)
- [Allowed License Policy](https://github.com/cncf/foundation/blob/main/policies-guidance/allowed-third-party-license-policy.md)

### Related Repositories
- [@cncf/toc](https://github.com/cncf/toc) - TOC-specific governance and project processes
- [@cncf/landscape](https://github.com/cncf/landscape) - CNCF project landscape data
- [@cncf/devstats](https://github.com/cncf/devstats) - Project metrics and analytics

### External Resources
- [CNCF Website](https://cncf.io)
- [CNCF Blog](https://cncf.io/blog)
- [CNCF DevStats](https://devstats.cncf.io)
- [CNCF Landscape](https://landscape.cncf.io)

## Changelog

| Date | Change | Reason |
|------|--------|--------|
| 2025-10-16 | Initial document creation | Provide comprehensive foundation repository guide for agent operations |

---

**Document Version:** 1.0  
**Last Updated:** 2025-10-16  
**Maintained By:** GitHub Copilot  
**Data Source:** [@cncf/foundation](https://github.com/cncf/foundation) repository analysis

**Usage Note:** This document serves as a reference guide for AI agents and contributors working with CNCF policies. When policies change in the upstream repository, this guide should be updated to reflect the latest structure and content.
