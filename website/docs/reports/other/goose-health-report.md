---
tags:
  - other
  - project-health
  - goose
  - work-in-progress
last_updated: 2025-10-13
completion_status: "Session 1 of 4 complete"
next_steps: |
  - Session 2: Activity analysis (commits, PRs, contributors)
  - Session 3: Community & security assessment
  - Session 4: Finalization & recommendations
---

# Goose Project Health Report

:::caution Work in Progress
This health check is being generated incrementally due to project size. 
Current completion: Session 1 of 4 complete.

**Completed Sections:**
- [x] Overview
- [x] Release Activity
- [x] Governance & Maintainership

**Remaining Sections:**
- [ ] Responsiveness
- [ ] Contributor Activity
- [ ] Contributor Risk
- [ ] Project Velocity
- [ ] Inclusivity Indicators
- [ ] Security Practices
- [ ] Adoption & Ecosystem
- [ ] Risks & Recommendations
- [ ] Executive Summary

Last updated: October 13, 2025
:::

## Overview

Goose is a local, extensible, open source AI agent that automates engineering tasks. Built with Rust for the backend and Electron for the GUI, it provides developers with an on-machine AI assistant capable of executing complex development workflows autonomously.

**Repository:** [@block/goose](https://github.com/block/goose)  
**Created:** 2024 (exact date pending)  
**Stars:** TBD (pending repository API)  
**Forks:** TBD (pending repository API)  
**Open Issues:** TBD (pending repository API)  
**License:** Apache 2.0

**Analysis Period:** October 13, 2024 - October 13, 2025 (Past 365 days)

**Key Capabilities:**
- Autonomous code generation and execution
- Multi-model LLM support with flexible configuration
- MCP (Model Context Protocol) server integration
- Available as desktop app and CLI
- Local-first architecture with extensibility

## Release Activity

:::tip Excellent Cadence
Extremely active release schedule with 10 releases in past 2 months demonstrating strong project momentum
:::

### Recent Releases (Past 12 Months)

| Version | Release Date | Days Since Previous | Type | Highlights |
|---------|--------------|---------------------|------|-----------|
| **v1.9.3** | Oct 10, 2025 | 1 | Patch | Subagents bug fixes |
| **v1.9.2** | Oct 9, 2025 | 9 | Minor | Auto-scroll fixes, Claude Sonnet 4.5 support |
| **v1.9.1** | Sep 30, 2025 | 7 | Patch | Token counter panic fix, pricing updates |
| **v1.9.0** | Sep 24, 2025 | 13 | Minor | ACP support, message queue with interruption |
| **v1.8.0** | Sep 11, 2025 | 18 | Minor | Agent Client Protocol, multi-model switching |
| **v1.7.0** | Aug 29, 2025 | 11 | Minor | Linux Android support, session sharing |
| **v1.6.0** | Aug 22, 2025 | 4 | Minor | Message queue system, fast model support |
| **v1.5.0** | Aug 19, 2025 | 3 | Minor | Recipe config, token counting improvements |
| **v1.4.1** | Aug 18, 2025 | 2 | Patch | TODO tool disable, summarization improvements |
| **v1.4.0** | Aug 16, 2025 | N/A | Minor | Token counting reliability |

### Release Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| **Release Cadence** | ~6 days average | Very Frequent |
| **Release Consistency** | Highly regular | Excellent |
| **Version Strategy** | Semantic Versioning | Standard |
| **Pre-release Testing** | Multiple platform builds | Comprehensive |

**Notable Patterns:**
- Rapid iteration cycle with frequent minor releases
- Quick patch releases for bug fixes (often within 1-2 days)
- Comprehensive multi-platform builds (macOS ARM/Intel, Linux, Windows)
- Consistent release notes with detailed changelogs
- Active Hacktoberfest 2025 participation

## Governance & Maintainership

:::info Strong Governance
Well-documented two-tier governance model with clear values and fast-track decision process
:::

### Governance Structure

| Indicator | Status | Evidence |
|-----------|--------|----------|
| **Code of Conduct** | ✅ | Block Open Source CoC referenced |
| **Contributing Guide** | ✅ | Comprehensive 13KB guide with Hacktoberfest details |
| **Security Policy** | ✅ | Detailed SECURITY.md with caution notices |
| **License** | ✅ | Apache 2.0 |
| **Governance Documentation** | ✅ | Detailed 7.6KB GOVERNANCE.md |
| **Decision-Making Transparency** | ✅ | Fast-track process with public PRs/discussions |

**Governance Model:**
- **Two-tier structure**: Core Maintainers + Maintainers
- **Core Values**: Open, Flexible, Choice
- **Decision Process**: Fast-track with informal consensus
- **Recognition**: Individual merit-based, no term limits
- **Communication**: GitHub (primary), Discord (real-time)

### Maintainer Structure

**Core Maintainers: 7**

| Maintainer | Role | Organization |
|------------|------|-------------|
| Bradley Axen | Core Maintainer | Block |
| Douwe Osinga | Core Maintainer | Block |
| David Katz | Core Maintainer | Block |
| Mic Neale | Core Maintainer | Block |
| Alex Hancock | Core Maintainer | Block |
| Zane Staggs | Core Maintainer | Block |
| Jack Amadeo | Core Maintainer | Block |

**Maintainers: 0** (Section exists but currently unpopulated)

### Organizational Diversity

**Organizations Represented: 1**

Currently all core maintainers are affiliated with Block. The governance document emphasizes that membership is for individuals (not employers), but there is currently no representation from other organizations in the Core Maintainer tier.

### Contributing Requirements

**Technical Prerequisites:**
- Rust + Cargo (backend development)
- Node.js + npm (GUI development)
- Just command runner (recommended)

**Process Requirements:**
- Conventional Commits specification for PR titles
- Developer Certificate of Origin (DCO) sign-offs on all commits
- Code review by maintainers
- Fork-based contribution workflow

**Hacktoberfest 2025 Integration:**
- Active participation with dedicated issue tracking
- Point-based leaderboard (Small: 5pts, Medium: 10pts, Large: 15pts)
- Prizes for top 20 contributors (swag shop gift cards + LLM credits)
- Dedicated Discord channel for support

## Methodology

**Data Sources:**
- GitHub REST API v3 (releases, repository metadata)
- Repository file analysis (governance docs, security policies)
- Release notes and changelogs

**Analysis Period:** October 13, 2024 - October 13, 2025 (365 days)

**Scope:** Session 1 focuses on foundational project information including release patterns, governance structure, and contributing processes. Subsequent sessions will analyze contributor activity, community health, security practices, and provide final recommendations.

**Metrics Collection:**
- Release data: GitHub Releases API
- Governance: Direct repository file review
- Contributing: CONTRIBUTING.md, GOVERNANCE.md analysis

**API Call Budget:** 8 calls used in Session 1

---

**Report Generated**: October 13, 2025  
**Analyst**: GitHub Copilot  
**Data Source**: [@block/goose](https://github.com/block/goose) repository (GitHub API)

**Note on Session 1:** This report is being generated incrementally across multiple sessions to respect API rate limits and token budgets. Session 1 establishes the foundational understanding of the project's structure, release cadence, and governance model.

## Changelog

- **2025-10-13**: Session 1 complete - Foundation & metadata established
