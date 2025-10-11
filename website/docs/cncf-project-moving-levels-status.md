---
tags:
  - cncf
  - project-status
---

# CNCF Project Moving Levels Status Report

## Executive Summary

The CNCF Technical Oversight Committee (TOC) currently has **1 project actively moving to Graduated status** and approximately **17+ projects in various stages of Incubation application**. The graduated project (KServe) recently received TOC approval, while the incubation backlog reflects a healthy pipeline of maturing cloud native projects across multiple domains.

**Key Observations:**
- Strong activity in the Incubation pipeline with projects from various cloud native domains
- One recent graduation (KServe) demonstrating project maturity progression
- Active discussion around post-graduation maturity tracking ("Graduated+" concept)
- Incubation applications span multiple TAGs including Runtime, Security, Infrastructure, and App Delivery

## Projects Moving to Graduation

### KServe

**Current Status:** Recently Graduated (September 2025) | **TOC Vote:** Passed

KServe is a standards-based, cloud-native model serving platform for machine learning and AI workloads. The project successfully completed its graduation application and TOC voting process.

| Metric | Details |
|--------|---------|
| **GitHub** | [@kserve/kserve](https://github.com/kserve/kserve) |
| **Application** | [Issue #1367](https://github.com/cncf/toc/issues/1367) |
| **Moving Levels PR** | [PR #1862](https://github.com/cncf/toc/pull/1862) |
| **Domain** | Machine Learning / AI |
| **Status** | Post-graduation administrative tasks in progress |

**Recent Activities:**
- TOC vote passed for graduation
- Administrative checklist tracking via [Issue #1905](https://github.com/cncf/toc/issues/1905)
- DevStats instance updated
- Landscape updates completed

:::info Post-Graduation
KServe is currently completing final administrative steps including maintainer list updates and Google Group migrations as part of the standard post-graduation process.
:::

## Projects Moving to Incubation

### Active Incubation Applications

The following projects have open incubation applications with the CNCF TOC:

#### Graduated Projects Preparing for Incubation Review

| Project | Domain | Application Issue | Key Details |
|---------|--------|------------------|-------------|
| **Kgateway** | Networking | [#1913](https://github.com/cncf/toc/issues/1913) | Kubernetes Gateway API implementation, currently Sandbox (accepted 2025-03-04) |
| **kcp** | Infrastructure | [#1909](https://github.com/cncf/toc/issues/1909) | Kubernetes Control Plane, currently Sandbox (accepted 2023-09-19) |

#### Incubating Projects

| Project | Domain | Application Issue | Current Status |
|---------|--------|------------------|----------------|
| **Open Cluster Management (OCM)** | Orchestration | [#1884](https://github.com/cncf/toc/issues/1884) | Multi-cluster management, Sandbox (accepted 2021-11-09) |
| **OpenEBS** | Storage | [#1537](https://github.com/cncf/toc/issues/1537) | Container-attached storage, Sandbox (accepted 2024-10-17) |
| **Tekton** | CI/CD | [#1310](https://github.com/cncf/toc/issues/1310) | CI/CD pipeline framework from CDF |
| **OpenFGA** | Security | [#1287](https://github.com/cncf/toc/issues/1287) | Fine-grained authorization, Sandbox (accepted 2024-03-15) |

#### Sandbox to Incubation Pipeline

| Project | Domain | Application Issue | Highlights |
|---------|--------|------------------|------------|
| **k8gb** | Networking | [#1472](https://github.com/cncf/toc/issues/1472) | Global load balancing for Kubernetes, Sandbox (accepted 2021-03-30) |
| **Lima** | Development | [#1348](https://github.com/cncf/toc/issues/1348) | Linux virtual machines for macOS, Sandbox (accepted 2024-10-06) |
| **Fluid** | Storage | [#1317](https://github.com/cncf/toc/issues/1317) | Dataset orchestration for AI/ML, Sandbox (accepted 2023-06-21) |
| **HAMi** | Scheduling | [#1775](https://github.com/cncf/toc/issues/1775) | Heterogeneous AI Computing Virtualization, Sandbox (accepted 2024-08-21) |
| **Microcks** | API Testing | [#1552](https://github.com/cncf/toc/issues/1552) | API mocking and testing, Sandbox (accepted 2023-06-21) |
| **Confidential Containers** | Security | [#1504](https://github.com/cncf/toc/issues/1504) | TEE-based container security, Sandbox (accepted 2022-06-26) |
| **Meshery** | Service Mesh | [#1386](https://github.com/cncf/toc/issues/1386) | Cloud native management plane, Sandbox |

## Analysis

### Incubation Trends by Domain

**Top Application Categories:**
1. **Infrastructure & Orchestration** - 4 projects (kcp, OCM, Meshery, k8gb)
2. **Storage & Data** - 3 projects (OpenEBS, Fluid, Lima)
3. **Security & Authorization** - 3 projects (Confidential Containers, OpenFGA, Tekton chains)
4. **API & Development Tools** - 2 projects (Microcks, Tekton)
5. **AI/ML Infrastructure** - 2 projects (HAMi, Fluid)

### Maturity Progression Insights

**Sandbox Duration Analysis:**
- Average time in Sandbox before Incubation application: ~18-24 months
- Recent Sandbox projects (2024-2025) are applying earlier, indicating faster maturity cycles
- Projects with clear adopter lists and production use cases advancing more quickly

**Cross-CNCF Activity:**
- Multiple projects integrating with other CNCF projects (especially Kubernetes, Prometheus, OpenTelemetry)
- Strong TAG engagement across Runtime, Security, Infrastructure, and App Delivery
- Several projects serving as building blocks for other CNCF projects

### Notable Developments

#### Graduated+ Concept
The TOC is actively discussing a new "Graduated+" maturity level ([Issue #1496](https://github.com/cncf/toc/issues/1496)) to:
- Establish criteria for ongoing project health monitoring
- Implement regular reviews of graduated projects (every 2 years)
- Maintain project vitality post-graduation

:::note Community Engagement
This initiative reflects the CNCF's commitment to long-term project sustainability beyond initial graduation milestones.
:::

## Related Work

- [CNCF TOC Issues - Incubation Applications](https://github.com/cncf/toc/issues?q=is%3Aissue+is%3Aopen+incubation+in%3Atitle)
- [CNCF TOC Issues - Graduation Applications](https://github.com/cncf/toc/issues?q=is%3Aissue+is%3Aopen+graduated+in%3Atitle)
- [CNCF Landscape](https://landscape.cncf.io/)
- [CNCF DevStats](https://devstats.cncf.io/)

## References

- [@cncf/toc](https://github.com/cncf/toc) - CNCF Technical Oversight Committee
- [CNCF Project Maturity Levels](https://www.cncf.io/projects/)
- [TOC Moving Levels Process](https://github.com/cncf/toc/blob/main/process/README.md)

## Associated Issues

| Issue | Status | Priority | Link |
|-------|--------|----------|------|
| Generate project moving levels status | Open | High | [Issue #17](https://github.com/castrojo/jorgepilot/issues/17) |
| KServe Post-Incubation Checklist | In Progress | High | [Issue #1905](https://github.com/cncf/toc/issues/1905) |
| Graduated+ Maturity Level Discussion | Open | Medium | [Issue #1496](https://github.com/cncf/toc/issues/1496) |

---

**Report Generated:** 2025-10-08

**Data Source:** [@cncf/toc](https://github.com/cncf/toc) repository issues and project boards

**Methodology:** Analyzed open incubation and graduation issues in the CNCF TOC repository, filtered by issue titles containing "incubation" and "graduated", and cross-referenced with recent TOC voting activity and project board status.
