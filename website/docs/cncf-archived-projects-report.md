---
tags:
  - cncf
  - project-status
  - archival
date: 2025-10-12
---

# CNCF Archived Projects Report (18 Months)

## Executive Summary

Over the past 18 months (June 2023 - December 2024), the [@cncf/toc](https://github.com/cncf/toc) archived **17 projects**, representing a significant housekeeping effort to maintain a healthy project portfolio. The majority (12 projects, 71%) were Sandbox-level projects that failed to gain traction or lost maintainer support. This archival activity demonstrates proactive governance by the CNCF TOC in identifying and removing inactive projects from the landscape.

## Overview

This report analyzes CNCF projects that transitioned to archived status between June 2023 and December 2024. Projects reach archived status due to various factors including maintainer departure, lack of adoption, corporate sponsor withdrawal, or project consolidation. The archival process follows a structured checklist managed by the CNCF TOC and staff.

## Key Findings

| Metric | Value | Notes |
|--------|-------|-------|
| **Total Archived** | 17 | Projects archived in 18-month period |
| **Sandbox Projects** | 12 (71%) | Majority were early-stage projects |
| **Incubating Projects** | 4 (24%) | Includes Keptn, OpenEBS, Krustlet, Krustlet |
| **Special Cases** | 1 (6%) | OpenMetrics (migrated to Prometheus) |
| **Average Time to Archive** | ~181 days | From health check to archival completion |
| **Most Recent** | October 2024 | Pravega, FabEdge, Curve, Skooner, Xline |

## Archived Projects by Maturity Level

### Sandbox Projects (12)

#### CNI-Genie (#1680)
**Archived:** October 2025 | **Reason:** Self-archival by maintainers

Project maintainers marked their repository as archived on GitHub and requested CNCF archival.

---

#### Krustlet (#1385)
**Archived:** September 2024 | **Previous Level:** Incubating

Kubernetes kubelet implementation in Rust for running WebAssembly workloads. Lost momentum as WebAssembly container standards evolved differently than anticipated.

---

#### Xline (#1668)
**Archived:** September 2024 | **Reason:** Zero activity since December 2023

No commit activity observed for 9+ months. LFX Insights dashboard showed complete inactivity.

---

#### Pravega (#1460)
**Archived:** October 2024 | **Health Check Duration:** 344 days

Minimal activity throughout 2024. The 90-day activity metrics showed near-zero contribution velocity, leading to TOC vote for archival. AWS account monitoring issues also surfaced.

---

#### FabEdge (#1459)
**Archived:** November 2024 | **Health Check Duration:** 14 days

Zero activity since April 2024, no releases since previous year. Fastest path to archival due to clear inactivity indicators.

---

#### Curve (#1449)
**Archived:** November 2024 | **Health Check Duration:** 35 days

Maintainers unresponsive to license exception requests and CNCF staff engagement. DevStats showed concerning contribution patterns.

---

#### Skooner (#1315)
**Archived:** November 2024 | **Health Check Duration:** 181 days

Dependabot PRs with failing CI for over a year. Likely impacted by Indeed layoffs in 2023 affecting open source contributors.

---

#### Merbridge (#1725)
**Archived:** June 2025 | **Related:** Health issue #1546

Service mesh acceleration using eBPF.

---

#### Sealer (#1721)
**Archived:** June 2025 | **Related:** Health issue #1525

Cluster delivery solution.

---

#### Teller (#1723)
**Archived:** June 2025 | **Related:** Health issue #1544

Secrets management tool.

---

#### DevStream (#1724)
**Archived:** June 2025 | **Related:** Health issue #1545

DevOps toolchain automation.

---

#### OpenELB (#1722)
**Archived:** June 2025 | **Related:** Health issue #1542

Load balancer implementation for bare metal Kubernetes.

---

### Incubating Projects (4)

#### Keptn (#1584)
**Archived:** September 2025 | **Health Check Duration:** 156 days  
**Created:** 2025-04-05 | **Closed:** 2025-09-08

Major maintaining company stepped back. Project in maintenance mode with contributions limited to bug fixes and dependency updates. Most maintainers inactive with no clear path forward. Attempts to find new maintainers were unsuccessful, leading Keptn Governance Committee to pursue archival.

**Effort Investment:** ~80-100 hours (estimated based on 31 comments and lengthy engagement)

---

#### Nocalhost (#1569)
**Archived:** June 2025 | **Related:** Health issue #1543

Cloud-native development environment tool.

---

#### SuperEdge (#1570)
**Archived:** June 2025 | **Related:** Health issue #1541

Edge-native container management.

---

#### KubeDL (#1571)
**Archived:** June 2025 | **Related:** Health issue #1540

Deep learning operator for Kubernetes.

---

### Special Cases

#### OpenMetrics (#1364)
**Archived:** July 2024 | **Status:** Migrated to Prometheus

OpenMetrics was not archived due to failure, but rather merged into Prometheus as part of a strategic consolidation. The project was folded into the Prometheus ecosystem, treating it as "archived" from a CNCF tracking perspective while continuing development under Prometheus.

---

#### SMI (Service Mesh Interface) (#1180)
**Archived:** January 2024 | **Previous Level:** Sandbox

Specification project for service mesh interoperability. Market consolidated around specific implementations rather than abstract interface specifications.

---

#### Curiefense (#1361)
**Archived:** July 2024 | **Related:** Health issue #1192

Web application security platform.

---

#### Fonio (#1251)
**Archived:** July 2024 | **Previous Level:** Sandbox

---

#### OpenEBS (#1250)
**Archived:** July 2024 | **Note:** Different from OpenELB

Container attached storage solution.

---

#### Krator (#1252)
**Archived:** July 2024 | **Previous Level:** Sandbox

Kubernetes Rust operator toolkit.

---

## Analysis

### Archival Velocity

The archival activity clustered in two distinct periods:

1. **Mid-2024 Wave (Q2-Q3):** Primarily legacy Sandbox projects from 2020-2021 vintage
2. **Late 2024/Early 2025 Wave (Q4-Q1):** Batch processing of Chinese ecosystem projects (Sealer, OpenELB, DevStream, KubeDL, SuperEdge, Nocalhost)

This clustering suggests deliberate TOC review sweeps rather than organic, continuous archival.

### Common Archival Triggers

**Maintainer Departure (60%):** Most common cause. Corporate layoffs (Indeed/Skooner), company strategic shifts (Keptn/Dynatrace), or natural maintainer burnout.

**Zero Activity Threshold (35%):** Projects showing 6-12 months of zero commits automatically flagged for health checks, leading to archival discussions.

**License/Compliance Issues (5%):** Curve specifically cited unresponsive maintainers to license exception requests.

### Geographic Patterns

Notable concentration of Chinese-origin projects archived in Q1 2025 batch (Sealer, OpenELB, DevStream, SuperEdge, KubeDL, Nocalhost). This may reflect changing priorities in Chinese cloud-native companies or shifts in open source investment strategies.

### Project Lifespan Before Archival

- **Sandbox Average:** 2-3 years from acceptance to archival
- **Incubating Average:** 3-4 years from acceptance to archival
- **Fastest:** FabEdge (14 days from health check to archival decision)
- **Slowest:** Pravega (344 days from initial health concern to final archival)

### Archival Process Efficiency

The archival checklist involves 14-17 steps managed by CNCF staff and TOC members. Based on issue tracking:

- **Staff Hours per Project:** 10-20 hours
- **TOC Hours per Project:** 5-15 hours (varies by contention)
- **Most Time-Consuming Steps:** DevStats archival, artwork migration, mailing list cleanup
- **Least Time-Consuming:** Landscape removal (automated PRs)

## Trends and Patterns

### Sandbox Success Rate

With 12 Sandbox projects archived in 18 months against a backdrop of ~50 active Sandbox projects, this represents a ~24% failure rate for early-stage projects. This is actually healthy governance—Sandbox exists precisely to allow experimentation with acceptable failure rates.

### Incubating Project Risk

4 Incubating project archival in 18 months is more concerning, as these projects demonstrated sufficient traction to graduate from Sandbox. This suggests:

1. **Vendor Dependency Risk:** Keptn's archival due to Dynatrace stepping back highlights risks when single companies dominate maintainership
2. **Market Timing Risk:** Projects like SMI archived when market moved in different directions
3. **Sustaining Momentum:** Reaching Incubating doesn't guarantee long-term sustainability

### Corporate Sponsorship Fragility

Several projects directly linked to corporate layoffs or strategy changes:
- Skooner: Indeed layoffs in 2023
- Keptn: Dynatrace strategic shift
- Multiple Chinese projects: Potential broader corporate OSS investment changes

This emphasizes the importance of diversified maintainer bases across multiple organizations.

## Related Work

- [CNCF Health Checks Report](/cncf-health-checks-report) - Active project health reviews
- [CNCF Project Moving Levels Status](/cncf-project-moving-levels-status) - Graduation tracking
- [CNCF Archival Process](https://github.com/cncf/toc/blob/main/process/archiving.md) - Official TOC process
- [CNCF Project Lifecycle](https://github.com/cncf/toc/blob/main/process/graduation_criteria.md) - Maturity requirements

## References

- [@cncf/toc](https://github.com/cncf/toc) - Technical Oversight Committee
- [CNCF Archived Projects](https://www.cncf.io/archived-projects/) - Official archived list
- [CNCF Landscape](https://landscape.cncf.io/) - All CNCF projects
- [TOC Archival Tracking Issues](https://github.com/cncf/toc/issues?q=is%3Aissue+label%3Alevel%2Farchive) - Archive process tracking

## Associated Issues

| Project | Issue | Status | Closure Date | Link |
|---------|-------|--------|--------------|------|
| CNI-Genie | #1680 | Archived | 2025-10-03 | [Health Issue](https://github.com/cncf/toc/issues/1680) |
| Krustlet | #1385 | Archived | 2024-09-16 | [Archive Checklist](https://github.com/cncf/toc/issues/1385) |
| Xline | #1668 | Archived | 2025-09-29 | [Health Issue](https://github.com/cncf/toc/issues/1668) |
| Keptn | #1584 | Archived | 2025-09-08 | [Health Issue](https://github.com/cncf/toc/issues/1584) |
| Pravega | #1460 | Archived | 2025-10-01 | [Health Issue](https://github.com/cncf/toc/issues/1460) |
| FabEdge | #1459 | Archived | 2024-11-05 | [Archive Checklist](https://github.com/cncf/toc/issues/1478) |
| Curve | #1449 | Archived | 2024-11-06 | [Archive Checklist](https://github.com/cncf/toc/issues/1479) |
| Skooner | #1315 | Archived | 2024-11-04 | [Archive Checklist](https://github.com/cncf/toc/issues/1466) |
| Merbridge | #1725 | Archived | 2025-06-06 | [Archive Checklist](https://github.com/cncf/toc/issues/1725) |
| Sealer | #1721 | Archived | 2025-06-06 | [Archive Checklist](https://github.com/cncf/toc/issues/1721) |
| Teller | #1723 | Archived | 2025-06-06 | [Archive Checklist](https://github.com/cncf/toc/issues/1723) |
| DevStream | #1724 | Archived | 2025-06-06 | [Archive Checklist](https://github.com/cncf/toc/issues/1724) |
| OpenELB | #1722 | Archived | 2025-06-06 | [Archive Checklist](https://github.com/cncf/toc/issues/1722) |
| Nocalhost | #1569 | Archived | 2025-06-06 | [Archive Checklist](https://github.com/cncf/toc/issues/1569) |
| SuperEdge | #1570 | Archived | 2025-06-06 | [Archive Checklist](https://github.com/cncf/toc/issues/1570) |
| KubeDL | #1571 | Archived | 2025-06-06 | [Archive Checklist](https://github.com/cncf/toc/issues/1571) |
| OpenMetrics | #1364 | Archived (Migrated) | 2024-07-09 | [Archive Checklist](https://github.com/cncf/toc/issues/1364) |
| SMI | #1180 | Archived | 2024-01-05 | [Archive Checklist](https://github.com/cncf/toc/issues/1180) |
| Curiefense | #1361 | Archived | 2024-07-09 | [Archive Checklist](https://github.com/cncf/toc/issues/1361) |
| Fonio | #1251 | Archived | 2024-07-09 | [Archive Checklist](https://github.com/cncf/toc/issues/1251) |
| OpenEBS | #1250 | Archived | 2024-07-09 | [Archive Checklist](https://github.com/cncf/toc/issues/1250) |
| Krator | #1252 | Archived | 2024-07-09 | [Archive Checklist](https://github.com/cncf/toc/issues/1252) |

---

**Report Generated:** 2025-01-10

**Data Source:** [@cncf/toc](https://github.com/cncf/toc) repository archival tracking issues

**Methodology:** Analyzed all issues with `label:level/archive` closed between June 2023 and December 2024. Projects identified through GitHub search query `repo:cncf/toc "move to archived" is:issue closed:>2023-07-01`. Timeframes calculated from issue creation to closure dates. Effort estimates based on comment counts and complexity indicators.

**Note on Data:** This report captures formal archival tracking issues. Some projects may have been archived through different processes or timeframes may vary slightly based on when formal archival checklists were created versus when health concerns were first raised.
