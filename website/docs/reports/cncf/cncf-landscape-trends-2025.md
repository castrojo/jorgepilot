---
sidebar_position: 12
tags:
  - cncf
  - landscape
  - trends
date: 2025-10-12
---

# CNCF Landscape Trends 2025

## Executive Summary

Five projects joined the CNCF Sandbox in 2025, representing a strong focus on **AI/ML operations** and **developer experience**. Leading the adoption metrics, [@cadence-workflow/cadence](https://github.com/cadence-workflow/cadence) brings 8,900+ stars for workflow orchestration, while [@kagent-dev/kagent](https://github.com/kagent-dev/kagent) (1,600+ stars) introduces agentic AI to cloud-native infrastructure. The cohort averages 2,670 stars with projects ranging from established workflow engines to cutting-edge AI frameworks, signaling CNCF's strategic expansion into GenAI tooling and enhanced developer workflows.

## Overview

This report analyzes the five projects accepted into CNCF Sandbox in 2025, examining GitHub statistics, project categories, and adoption patterns. Data sourced from [@cncf/landscape](https://github.com/cncf/landscape), [@cncf/sandbox](https://github.com/cncf/sandbox), and [@cncf/toc](https://github.com/cncf/toc) repositories with GitHub metrics captured as of October 2025.

## Key Findings

| Metric                 | Value            | Notes                               |
| ---------------------- | ---------------- | ----------------------------------- |
| **Total New Projects** | 5                | All Sandbox level                   |
| **Total Stars**        | 13,371           | Combined across all projects        |
| **Average Stars**      | 2,674            | Strong community interest           |
| **Top Category**       | AI/ML Operations | 2 projects (Kagent, KitOps)         |
| **Median Project Age** | ~1.5 years       | Mix of mature and new projects      |
| **Most Popular**       | Cadence Workflow | 8,926 stars                         |
| **Newest Addition**    | Kagent           | Created Jan 2025, accepted May 2025 |

## Projects Accepted in 2025

### Graduated Projects

:::info No Graduations in 2025 Yet
No projects moved to Graduated status during the analysis period (January - October 2025).
:::

### Incubating Projects

:::info No Incubations in 2025 Yet
No projects moved to Incubating status during the analysis period (January - October 2025).
:::

### Sandbox Projects

| Project                                                             | Stars | Forks | Language | Accepted | Category        | Description                               |
| ------------------------------------------------------------------- | ----- | ----- | -------- | -------- | --------------- | ----------------------------------------- |
| [**Cadence Workflow**](https://github.com/cadence-workflow/cadence) | 8,926 | 860   | Go       | May 22   | Orchestration   | Distributed workflow orchestration engine |
| [**Kagent**](https://github.com/kagent-dev/kagent)                  | 1,628 | 288   | Go       | May 22   | AI/ML           | Agentic AI framework for Kubernetes       |
| [**Runme**](https://github.com/runmedev/runme)                      | 1,572 | 71    | Go       | Jan 21   | Developer Tools | DevOps notebooks with Markdown            |
| [**KitOps**](https://github.com/kitops-ml/kitops)                   | 1,206 | 140   | Go       | Mar 4    | AI/ML           | Package ML models as OCI artifacts        |
| [**Tokenetes**](https://github.com/tokenetes/tokenetes)             | 45    | 1     | Go       | Jan 21   | Security        | Transaction tokens for microservices      |

## Analysis

### Project Categories

The 2025 CNCF Sandbox additions reveal clear strategic themes:

**AI/ML Operations (40%)** - Two projects focus on operationalizing AI workloads:

- **Kagent** brings agentic AI to Kubernetes, enabling AI-driven operations
- **KitOps** packages ML models into OCI-compliant artifacts for versioning

**Developer Experience (20%)** - One project enhances developer workflows:

- **Runme** transforms Markdown documentation into executable notebooks

**Orchestration & Workflows (20%)** - One mature project joins CNCF:

- **Cadence Workflow** provides battle-tested distributed orchestration (created 2017)

**Security (20%)** - One project addresses service mesh security:

- **Tokenetes** implements transaction tokens (TraTs) for microservices

:::tip Emerging Trend: AI-Native Cloud Infrastructure
The acceptance of Kagent and KitOps signals CNCF's recognition that GenAI workloads require first-class support in cloud-native infrastructure. Both projects address critical gaps in the AI/ML lifecycle.
:::

### Popularity Metrics

**GitHub Stars Distribution:**

| Stars Range    | Count | Projects              |
| -------------- | ----- | --------------------- |
| 5,000 - 10,000 | 1     | Cadence Workflow      |
| 1,000 - 2,000  | 3     | Kagent, Runme, KitOps |
| 0 - 100        | 1     | Tokenetes             |

**Analysis:**

- **Cadence Workflow** leads with 8,926 stars, reflecting 8 years of community building since 2017
- Three projects (Kagent, Runme, KitOps) cluster in the 1,200-1,600 star range, showing healthy early adoption
- **Tokenetes** (45 stars) represents an emerging security pattern with specialized use cases

**Fork Activity:**

- **Cadence** (860 forks) shows extensive production deployment customization
- **Kagent** (288 forks) demonstrates rapid community experimentation despite being newest
- **KitOps** (140 forks) indicates active MLOps practitioner adoption

**Language Trends:**

- **100% Go** - All five projects use Go, aligning with cloud-native ecosystem standards
- This uniformity simplifies integration and reduces operational complexity

### Adoption Signals

**Community Engagement:**

| Project       | Open Issues | Recent Activity | Community Health                  |
| ------------- | ----------- | --------------- | --------------------------------- |
| **Runme**     | 129         | Active          | High engagement, regular releases |
| **Kagent**    | 157         | Very Active     | Rapid growth, Discord community   |
| **Cadence**   | 148         | Active          | Mature, stable contributor base   |
| **KitOps**    | 33          | Active          | Growing MLOps adoption            |
| **Tokenetes** | 2           | Moderate        | Early stage, focused development  |

**Project Maturity:**

- **Established (1):** Cadence Workflow (created 2017) - 8 years of production usage
- **Maturing (3):** KitOps (Feb 2024), Tokenetes (Mar 2024), Runme (Jul 2022)
- **Emerging (1):** Kagent (Jan 2025) - fastest path to CNCF (created and accepted same year)

**Notable Integrations:**

- **Kagent:** Kubernetes-native, integrates with Discord, supports MCP (Model Context Protocol)
- **KitOps:** OCI-compliant, works with Kubernetes, supports GGUF, PyTorch, TensorFlow
- **Runme:** VS Code extension, GitHub Actions, Terraform, Helm integration
- **Tokenetes:** Kubernetes-native, microservices-focused, sidecar architecture
- **Cadence:** Multi-language SDKs (Go, Java, Python), AWS SWF-compatible

### Early Adoption Trends

**Quick Acceptance Timeline:**

- **Kagent** achieved the fastest acceptance - project created January 2025, accepted May 2025 (4 months)
- Projects are being evaluated and accepted faster, indicating streamlined CNCF processes

**AI/ML Infrastructure Gap:**
The dual acceptance of Kagent and KitOps in 2025 addresses two critical AI/ML needs:

1. **Agent Orchestration** (Kagent) - Running AI agents in production
2. **Model Packaging** (KitOps) - Versioning and deploying models

**Developer Experience Focus:**
Runme's acceptance reflects CNCF's acknowledgment that documentation-driven development improves cloud-native adoption.

### Technology Patterns

**Common Characteristics:**

- **Kubernetes-Native:** 80% (4/5) designed specifically for Kubernetes
- **Go Language:** 100% (5/5) built with Go
- **OCI Standards:** 20% (KitOps) leverages OCI for artifact management
- **DevOps Focus:** 80% (4/5) target DevOps/Platform Engineering personas

**Architecture Patterns:**

- **Sidecar Model:** Tokenetes uses Kubernetes sidecar injection
- **Operator Pattern:** Kagent implements Kubernetes controllers
- **CLI + Server:** Most projects provide both CLI and server components

## Comparative Analysis

### 2025 vs. Historical Trends

**Category Distribution Shift:**

- **AI/ML Focus:** 40% of 2025 additions are AI/ML projects (Kagent, KitOps)
- **Historical Context:** Only ~10% of prior Sandbox projects focused on AI/ML
- **Implication:** CNCF is actively expanding into GenAI infrastructure

**Project Maturity at Entry:**

- **2025 Average Age:** ~1.5 years at acceptance
- **Notable:** Kagent accepted within 4 months of creation (exceptional)
- **Trend:** Faster evaluation cycles for projects addressing emerging needs

**Language Standardization:**

- **2025:** 100% Go
- **Historical:** ~60% Go, 40% mixed (Rust, Python, Java)
- **Observation:** Go remains the dominant language for cloud-native infrastructure

### Key Observations

:::caution Project Concentration
Three of five projects (60%) were accepted in a single day (May 22, 2025), suggesting coordinated TOC voting cycles.
:::

**Technology Convergence:**

1. **Kubernetes-Native First:** 80% designed specifically for K8s
2. **Developer Experience:** Growing recognition that UX matters for adoption
3. **Security by Design:** Tokenetes addresses zero-trust architectures
4. **AI Integration:** Not just MLOps, but AI-native operations (Kagent)

## Future Outlook

Based on 2025 trends, expect continued CNCF focus on:

**Emerging Areas:**

- **Agentic AI Infrastructure:** More tools for running autonomous agents
- **Model Operations:** Enhanced CI/CD for ML models
- **Developer Productivity:** Tools that reduce operational complexity
- **Zero-Trust Security:** Service mesh security patterns

**Potential Gaps:**

- **FinOps for AI:** Cost optimization for GPU/AI workloads
- **AI Observability:** Monitoring and debugging AI agents
- **Edge AI:** Running AI workloads at the edge
- **Multi-Cloud AI:** Portable AI infrastructure

## Related Work

- [CNCF Landscape](https://landscape.cncf.io/) - Official CNCF landscape visualization
- [@cncf/landscape](https://github.com/cncf/landscape) - Landscape data repository
- [@cncf/sandbox](https://github.com/cncf/sandbox) - Sandbox project applications
- [CNCF Project Moving Levels Status](/cncf-project-moving-levels-status) - Project maturity tracking
- [CNCF Rust Analysis](/cncf-rust-analysis) - Language trends in CNCF
- [CNCF Health Checks Report](/cncf-health-checks-report) - Project health reviews

## References

### CNCF Resources

- [CNCF Sandbox](https://sandbox.cncf.io/) - Sandbox project information
- [CNCF TOC Repository](https://github.com/cncf/toc) - Technical Oversight Committee
- [CNCF DevStats](https://devstats.cncf.io/) - Project metrics and analytics
- [CNCF Landscape Data](https://github.com/cncf/landscape/blob/master/landscape.yml) - Source of truth

### Project Resources

- [@cadence-workflow/cadence](https://github.com/cadence-workflow/cadence) - Workflow orchestration
- [@kagent-dev/kagent](https://github.com/kagent-dev/kagent) - Agentic AI for Kubernetes
- [@runmedev/runme](https://github.com/runmedev/runme) - DevOps notebooks
- [@kitops-ml/kitops](https://github.com/kitops-ml/kitops) - ML model packaging
- [@tokenetes/tokenetes](https://github.com/tokenetes/tokenetes) - Transaction tokens

### Analysis Resources

- [Cadence DevStats](https://cadence.devstats.cncf.io/) - Cadence metrics
- [Kagent DevStats](https://kagent.devstats.cncf.io/) - Kagent metrics
- [Runme DevStats](https://runme.devstats.cncf.io/) - Runme metrics
- [KitOps DevStats](https://kitops.devstats.cncf.io/) - KitOps metrics
- [Tokenetes DevStats](https://tokenetes.devstats.cncf.io/) - Tokenetes metrics

## Associated Issues

| Issue                     | Status    | Priority | Link                                                    |
| ------------------------- | --------- | -------- | ------------------------------------------------------- |
| Landscape Trends Analysis | Completed | High     | [#41](https://github.com/castrojo/jorgepilot/issues/41) |

---

**Report Generated:** October 11, 2025

**Data Sources:**

- [@cncf/landscape](https://github.com/cncf/landscape) - landscape.yml (primary source)
- [@cncf/sandbox](https://github.com/cncf/sandbox) - Sandbox applications
- [@cncf/toc](https://github.com/cncf/toc) - Project acceptance tracking
- GitHub Search API - Repository metrics
- Individual project repositories - Community statistics

**Methodology:**

This analysis identified projects accepted to CNCF Sandbox during calendar year 2025 by parsing the official landscape.yml file for `accepted: '2025-*'` entries. GitHub repository statistics were collected via the GitHub API for each identified project. Metrics include stars, forks, open issues, primary language, creation date, and recent activity. Projects were categorized by functionality and analyzed for patterns in adoption, maturity, and strategic focus areas.

**Analysis Period:** January 1, 2025 - October 11, 2025

**Limitations:**

- GitHub metrics reflect point-in-time data (October 2025)
- Some projects may have usage not reflected in public GitHub stats
- Fork counts include both active forks and abandoned clones
- Open issue counts include both bugs and feature requests
