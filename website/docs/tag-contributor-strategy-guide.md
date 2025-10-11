---
tags:
  - cncf
  - project-health
  - tag-contributor-strategy
---

# TAG Contributor Strategy Health Check Guide

## Executive Summary

This guide documents the CNCF TAG Contributor Strategy project health criteria used for conducting health checks on CNCF projects. It serves as a reference for future health check reports, ensuring consistency and enabling updates as the TAG Contributor Strategy evolves their recommendations.

## Overview

The [CNCF TAG Contributor Strategy](https://github.com/cncf/tag-contributor-strategy) provides frameworks and best practices for evaluating the health and sustainability of cloud-native open source projects. This guide consolidates the key criteria used in health check assessments.

## Core Health Check Criteria

### 1. Responsiveness

**Definition:** How quickly maintainers respond to and process contributions.

**Key Metrics:**
- Pull request response time (initial review)
- Issue triage time
- Time to merge accepted PRs
- Response quality and depth

**Healthy Indicators:**
- PR initial response: < 24-48 hours
- Issue triage: < 48-72 hours
- Regular, constructive feedback
- Clear communication on delays

**Assessment Questions:**
- Are PRs reviewed promptly?
- Do issues receive timely acknowledgment?
- Is feedback constructive and actionable?

**Data Sources:**
- GitHub PR timestamps
- Issue creation vs. first response
- PR approval to merge duration

---

### 2. Contributor Growth

**Definition:** The project's ability to attract and retain new contributors.

**Key Metrics:**
- Unique contributors per quarter/year
- New contributor growth rate
- Contributor retention rate
- Geographic/organizational diversity

**Healthy Indicators:**
- 30-50+ unique contributors per quarter
- Positive growth trend year-over-year
- Contributors from multiple organizations
- International contributor base

**Assessment Questions:**
- Is the contributor base growing or stable?
- Are new contributors successfully onboarded?
- Is there organizational diversity?

**Data Sources:**
- GitHub contributor statistics
- Commit author analysis
- Email domain analysis for affiliations

---

### 3. PR Author Diversity

**Definition:** Distribution of code contributions across contributors.

**Key Metrics:**
- Number of active PR authors per month/quarter
- Contribution concentration (top contributors %)
- First-time vs. repeat contributors
- Corporate affiliation diversity

**Healthy Indicators:**
- 10+ active contributors per month
- Top 5 contributors < 60% of commits
- Regular first-time contributors
- Multiple corporate sponsors

**Assessment Questions:**
- Is the workload distributed?
- Are contributions concentrated in few individuals?
- Do first-time contributors succeed?

**Data Sources:**
- PR author analysis
- Commit statistics by author
- Contributor affiliation data

---

### 4. Contributor Risk (Bus Factor)

**Definition:** Risk assessment of project sustainability if key contributors leave.

**Key Metrics:**
- Maintainer concentration percentage
- Single points of failure
- Knowledge distribution
- Succession planning evidence

**Healthy Indicators:**
- Top 3 maintainers < 50% of activity
- Multiple active reviewers
- Documented knowledge areas
- Co-maintainership practices

**Risk Levels:**
- **Low Risk:** Well-distributed, documented succession
- **Moderate Risk:** 3-5 active maintainers, some concentration
- **High Risk:** 1-2 key maintainers, no succession plan

**Assessment Questions:**
- What happens if the top maintainer leaves?
- Is knowledge documented and shared?
- Are there co-maintainers for critical areas?

**Data Sources:**
- Commit/review concentration analysis
- Maintainer file and documentation
- Review approval patterns

---

### 5. Commit Velocity

**Definition:** Sustained development activity and code contribution rate.

**Key Metrics:**
- Commits per day/week/month
- Commit frequency trends
- Code churn rate
- Development consistency

**Healthy Indicators:**
- Steady commit rate (3-10+ per day for active projects)
- Consistent activity across months
- Balanced feature vs. maintenance commits
- Regular weekday activity

**Assessment Questions:**
- Is development activity sustained?
- Are there long periods of inactivity?
- Is the trend growing, stable, or declining?

**Data Sources:**
- GitHub commit history
- Commit frequency analysis
- Contributor activity patterns

---

### 6. Issue Resolution

**Definition:** How effectively the project manages and resolves reported issues.

**Key Metrics:**
- Issues opened vs. closed per period
- Net issue growth rate
- Issue age distribution
- Issue type breakdown (bug/feature/question)

**Healthy Indicators:**
- Net issue growth: 0 to +10% per quarter (manageable)
- Regular issue closure
- Few very old unresolved issues
- Clear issue categorization

**Assessment Questions:**
- Is the issue backlog manageable?
- Are issues being resolved or accumulating?
- Is there effective triage?

**Data Sources:**
- GitHub issue statistics
- Issue open/close timeline analysis
- Issue label and type analysis

---

### 7. Release Cadence

**Definition:** Consistency and predictability of software releases.

**Key Metrics:**
- Time between releases
- Release schedule adherence
- Semantic versioning compliance
- Release note quality

**Healthy Indicators:**
- Predictable release schedule (monthly, quarterly, etc.)
- Semantic versioning followed
- Comprehensive release notes
- Regular security/dependency updates

**Assessment Questions:**
- Are releases predictable?
- Is there a documented release process?
- Are releases coordinated and announced?

**Data Sources:**
- GitHub releases/tags
- Release date analysis
- Changelog quality review

---

### 8. Governance

**Definition:** Documented processes, policies, and decision-making structures.

**Key Metrics:**
- Presence of governance documents
- Code of Conduct
- Contributing guidelines
- Decision-making transparency
- License clarity

**Healthy Indicators:**
- ✅ Code of Conduct (CoC)
- ✅ Contributing guide (CONTRIBUTING.md)
- ✅ Security policy (SECURITY.md)
- ✅ Clear license (LICENSE file)
- ✅ Maintainer/governance documentation

**Assessment Questions:**
- Are governance policies documented?
- Is decision-making transparent?
- Are contribution expectations clear?

**Data Sources:**
- Repository documentation files
- GitHub community health indicators
- CNCF project maturity requirements

---

### 9. Inclusivity

**Definition:** Evidence of welcoming, inclusive community practices.

**Key Metrics:**
- First-time contributor success rate
- Maintainer tone and feedback quality
- Communication channel accessibility
- Diversity of contributors

**Healthy Indicators:**
- Welcoming maintainer responses
- Detailed, constructive code reviews
- Multiple communication channels
- Support for new contributors
- Evidence of inclusive language

**Assessment Questions:**
- Do first-time contributors feel welcome?
- Is feedback constructive and supportive?
- Are there barriers to participation?

**Data Sources:**
- PR/issue comment analysis
- First-time contributor outcomes
- Community feedback and discussions

---

## Additional Assessment Areas

### Community Support Channels

**Evaluation Points:**
- GitHub Discussions activity
- Issue template quality
- PR template usage
- External communication (Slack, Discord, etc.)

### Documentation Quality

**Evaluation Points:**
- Setup/installation guides
- API/usage documentation
- Architecture documentation
- Troubleshooting resources

### Security Practices

**Evaluation Points:**
- Security policy presence
- Vulnerability disclosure process
- Dependency update frequency
- Security audit history

---

## Health Check Report Structure

Based on TAG Contributor Strategy criteria, a comprehensive health check should include:

1. **Executive Summary** - 2-3 sentence overview of project health
2. **Overview** - Brief project context and scope
3. **Responsiveness** - PR and issue response analysis
4. **Contributor Activity** - Growth, diversity, and onboarding
5. **Contributor Risk** - Bus factor and concentration analysis
6. **Project Velocity** - Commit activity and development pace
7. **Release Activity** - Release cadence and dependency management
8. **Inclusivity Indicators** - Governance and community support
9. **Risks & Recommendations** - Identified concerns and actionable advice
10. **CNCF Standards Comparison** - Alignment table with criteria
11. **CNCF Blog Posts** - Recent relevant communications
12. **Associated Issues** - Links to tracked concerns
13. **Methodology** - Data sources and analysis approach

---

## Status Indicators

Use consistent status indicators across health checks:

- ✅ **Excellent/Strong** - Exceeds expectations, exemplary
- ✅ **Good/Healthy** - Meets expectations, no concerns
- ⚠️ **Moderate/Caution** - Meets minimum requirements, monitor
- ❌ **Concern/Risk** - Below expectations, needs attention

---

## Related Work

- [CNCF TAG Contributor Strategy](https://github.com/cncf/tag-contributor-strategy)
- [Project Health Measurement Guide](https://contribute.cncf.io/maintainers/community/project-health/)
- [CNCF Project Maturity Levels](https://github.com/cncf/toc/blob/main/process/graduation_criteria.md)
- [CNCF TOC Health Check Process](https://github.com/cncf/toc/blob/main/process/health_checks.md)

## References

- [TAG Contributor Strategy GitHub](https://github.com/cncf/tag-contributor-strategy)
- [CNCF Contributors Guide](https://contribute.cncf.io/)
- [TAG Contributor Strategy Project Health Criteria](https://github.com/cncf/tag-contributor-strategy/blob/main/website/content/maintainers/community/project-health.md)
- [CNCF DevStats](https://devstats.cncf.io/) - Project activity metrics

---

## Updating This Guide

This guide should be updated when:

- TAG Contributor Strategy publishes new criteria
- CNCF TOC updates health check requirements
- New best practices emerge from completed health checks
- Feedback indicates criteria need clarification

**Last Updated:** January 2025

**Revision History:**
- v1.0 (January 2025) - Initial guide based on Cloud Custodian health check

---

**Note:** This guide is a living document. Always cross-reference with the official [TAG Contributor Strategy documentation](https://github.com/cncf/tag-contributor-strategy) for the most current criteria and recommendations.
