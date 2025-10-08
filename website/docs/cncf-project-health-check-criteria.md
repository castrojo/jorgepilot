---
sidebar_position: 9
tags:
  - cncf
  - project-health
---

# CNCF Project Health Check Criteria Guide

## Executive Summary

This guide consolidates the CNCF Technical Oversight Committee's comprehensive criteria for evaluating project health across all maturity levels. It synthesizes health review processes, due diligence requirements, and technical assessment frameworks to provide a single reference for conducting thorough project evaluations. Projects at different maturity levels (Sandbox, Incubating, Graduated) have increasingly rigorous requirements aligned with production-readiness expectations.

## Overview

The CNCF TOC performs project health reviews when concerns arise or as part of the due diligence process for projects moving between maturity levels. This guide combines criteria from multiple authoritative sources:

- TOC project health review process
- Due diligence templates for incubation and graduation
- General Technical Review questions
- TAG Contributor Strategy recommendations

Health checks serve dual purposes: ensuring projects maintain CNCF standards and providing adopters with confidence in project maturity and sustainability.

## Health Check Assessment Structure

A comprehensive health check should evaluate projects across these dimensions:

1. **Application Process & Alignment** - TAG engagement, vendor neutrality, CNCF expectations
2. **Governance & Maintainers** - Documentation, lifecycle, diversity, vendor neutrality
3. **Contributors & Community** - Activity, growth, communication, inclusivity
4. **Engineering Principles** - Architecture, roadmap, releases, documentation
5. **Security** - Reporting processes, access controls, assessments, best practices
6. **Ecosystem & Adoption** - Adopter base, integrations, production usage
7. **Day 0 Planning** - Design, scope, usability (Sandbox focus)
8. **Day 1 Deployment** - Installation, rollout, configuration (Incubation focus)
9. **Day 2 Operations** - Observability, scalability, troubleshooting (Graduation focus)

## Sandbox Project Health Criteria

Sandbox projects are experimental and early-stage. Health checks focus on viability and alignment with cloud-native principles.

### Scope & Goals

- [ ] **Clear project goals and objectives** - Defines what problem the project solves
- [ ] **Target persona identified** - Knows who will use the project
- [ ] **Primary use cases documented** - Explains viable cloud-native use cases
- [ ] **Unsupported use cases identified** - Honest about limitations
- [ ] **Target organizations defined** - Knows who benefits from adoption
- [ ] **Differentiation articulated** - Explains how it differs from alternatives

### Design & Architecture

- [ ] **Design principles documented** - Follows established best practices
- [ ] **Architecture requirements outlined** - Specifies deployment considerations
- [ ] **Service dependencies defined** - Lists cluster requirements
- [ ] **API design documented** - Topology, conventions, defaults described
- [ ] **Identity and Access Management addressed** - Security model defined
- [ ] **Resource requirements specified** - CPU, memory, network, storage needs

### Community Foundation

- [ ] **Communication channels established** - At least one public channel exists
- [ ] **Contributing process documented** - Clear path to submit changes
- [ ] **Maintainer list published** - Names, contacts, affiliations listed
- [ ] **Code of Conduct adopted** - CNCF CoC or compatible alternative
- [ ] **Initial governance defined** - Basic decision-making process documented

### Installation & Security Basics

- [ ] **Installation process documented** - How to get started
- [ ] **Installation validation described** - How adopters test it works
- [ ] **Security reporting process** - How to report vulnerabilities
- [ ] **Basic access controls** - 2FA, repository protections
- [ ] **License compliance** - Apache 2.0 or CNCF-approved license

## Incubating Project Health Criteria

Incubating projects demonstrate proven concepts with growing adoption. All Sandbox criteria remain required, plus:

### Enhanced Governance

- [ ] **Governance evolution demonstrated** - History shows maturity progression
- [ ] **Governance matches activities** - Documents reflect actual practices
- [ ] **Vendor-neutral direction** - No single vendor controls project
- [ ] **Decision-making documented** - Leadership, PRs, CNCF requests, goal changes
- [ ] **Role-based team management** - Assignment, onboarding, removal processes
- [ ] **Complete maintainer lifecycle** - Roles, onboarding, offboarding, emeritus
- [ ] **Maintainer lifecycle exercised** - Evidence of adding/replacing maintainers
- [ ] **Multiple organizations represented** - At least 2 organizations contribute maintainers
- [ ] **CoC cross-linked** - Referenced in governance documents
- [ ] **Subprojects listed** - All subprojects documented if applicable
- [ ] **Subproject governance defined** - Leadership, maturity, add/remove process

### Active Community Growth

- [ ] **Contributor ladder exists** - Multiple contribution roles defined
- [ ] **Multiple communication channels** - Documented and accessible
- [ ] **Public meeting schedule** - Integrated with CNCF calendar
- [ ] **Detailed contributing guide** - Increasing detail as project matures
- [ ] **Demonstrated contributor recruitment** - Active efforts to grow community
- [ ] **Growing contributor base** - Increasing unique contributors
- [ ] **Contributor diversity** - Multiple organizations contributing

### Engineering Maturity

- [ ] **Public roadmap maintained** - Forward-looking planning visible
- [ ] **Project goals documented** - Differentiation and positioning clear
- [ ] **Architecture documentation** - Design demonstrates cloud-native viability
- [ ] **Release process documented** - Expectations and procedures defined
- [ ] **Regular release history** - Demonstrates consistent delivery

### Security Hardening

- [ ] **Security self-assessment completed** - TAG Security assessment done
- [ ] **Security response roles assigned** - Team and process documented
- [ ] **OpenSSF Best Practices badge** - Passing level achieved
- [ ] **Repository hardening** - Branch protection, SAST, CI best practices
- [ ] **Access control enforcement** - Demonstrated security hygiene

### Validated Adoption

- [ ] **Public adopter list** - With adoption levels (dev/test/prod)
- [ ] **Three verified adopters** - Appropriate usage level confirmed
- [ ] **Adopter interviews completed** - TOC verification conducted
- [ ] **Integrations documented** - Compatibility with CNCF and other projects

### Day 1 Deployment Capabilities

- [ ] **Enablement process documented** - How to enable in live cluster
- [ ] **Impact on defaults understood** - Changes to cluster behavior documented
- [ ] **Enablement testing demonstrated** - Tests verify enable/disable works
- [ ] **Cleanup procedures defined** - Resource removal including CRDs
- [ ] **Rollback procedures documented** - How to revert if needed
- [ ] **Upgrade path tested** - Upgrade->downgrade->upgrade verified
- [ ] **Deprecation communication** - Process for informing users of changes
- [ ] **Alpha/beta feature handling** - Controlled rollout capabilities

## Graduated Project Health Criteria

Graduated projects are production-ready and highly mature. All Incubating criteria remain required, plus:

### Governance Excellence

- [ ] **Continuous governance iteration** - History shows ongoing refinement
- [ ] **Comprehensive governance** - Meets all requirements for maturity level

### Engineering Excellence

- [ ] **Roadmap change process** - Documented and followed
- [ ] **Consistent release cadence** - History of regular, quality releases
- [ ] **Comprehensive release documentation** - Expectations, branching, support, artifacts
- [ ] **Semantic versioning** - Proper version management
- [ ] **Stable release availability** - LTS and stable versions accessible

### Security Excellence

- [ ] **OpenSSF silver/gold badge** - Advanced security practices
- [ ] **Third-party security audit** - Completed with findings addressed
- [ ] **Critical/high findings resolved** - All major vulnerabilities fixed
- [ ] **Security team diversity** - Representative of community
- [ ] **Security team rotation** - Invitation and rotation process
- [ ] **Moderate/low findings tracked** - Plan for ongoing resolution

### Production Adoption

- [ ] **Significant production usage** - Multiple organizations in production
- [ ] **Mature adopter base** - Growing list of production users
- [ ] **Refreshed adopter interviews** - Recent verification of usage

### Day 2 Operations Capabilities

#### Scalability & Reliability

- [ ] **SLO/SLI definitions** - Service levels documented
- [ ] **Resource usage documented** - CPU, memory, storage, throughput
- [ ] **Resource exhaustion scenarios** - Conditions identified
- [ ] **Load testing performed** - Results documented
- [ ] **Recommended limits defined** - User, request, resource limits
- [ ] **Resilience patterns implemented** - Circuit breakers, etc.

#### Observability

- [ ] **Signals documented** - Logs, metrics, profiles, traces
- [ ] **Supported formats specified** - Collection and storage guidance
- [ ] **Audit logging** - Security event capture
- [ ] **Dashboards provided** - Monitoring interfaces available
- [ ] **Cost visibility** - FinOps considerations addressed
- [ ] **Health monitoring** - Parameters for service health
- [ ] **Usage detection** - Operators can verify project is in use
- [ ] **Instance health verification** - Users can confirm functionality

#### Dependencies & Supply Chain

- [ ] **Service dependencies listed** - Required cluster services
- [ ] **Dependency lifecycle policy** - How dependencies are managed
- [ ] **Source composition analysis** - SCA integrated in development
- [ ] **SCA tracking implemented** - Ongoing monitoring
- [ ] **Timely SCA response** - Changes implemented promptly

#### Troubleshooting

- [ ] **Failure recovery documented** - Component unavailability scenarios
- [ ] **Known failure modes listed** - Common issues documented
- [ ] **Diagnostic procedures** - Troubleshooting guides available

#### Compliance

- [ ] **Third-party attribution complete** - All code properly attributed
- [ ] **CNCF attribution alignment** - Follows CNCF recommendations
- [ ] **Source file notices** - Incorporated third-party code marked
- [ ] **Component notices retained** - Unmodified components attributed
- [ ] **Build artifact notices** - Dependencies in binaries/images noted

## Continuous Health Monitoring

Projects should proactively monitor these indicators between formal reviews:

### Technical Health Indicators

| Indicator | Healthy | Caution | Concern |
|-----------|---------|---------|---------|
| **PR Response Time** | < 24-48 hours | 3-7 days | > 1 week |
| **Issue Triage** | < 72 hours | 1-2 weeks | > 2 weeks |
| **Commit Velocity** | 3-10+/day | 1-3/day | < 1/day |
| **Release Cadence** | Monthly-Quarterly | Semi-annual | Annual+ |
| **Active Contributors** | 10+/month | 5-10/month | < 5/month |
| **Maintainer Count** | 5+ | 3-4 | < 3 |
| **Organization Diversity** | 3+ orgs | 2 orgs | 1 org |
| **Open PR Age** | < 30 days avg | 30-60 days | > 60 days |

### Community Health Indicators

- **Contributor growth trend** - Increasing, stable, or declining
- **First-time contributor success** - PRs from new contributors merged
- **Maintainer response quality** - Constructive, detailed feedback
- **Documentation completeness** - All required docs present and current
- **Community meeting attendance** - Regular participation
- **Issue resolution rate** - Backlog growing or shrinking

### Governance Health Indicators

- **Governance last updated** - Within 12 months
- **Maintainer list accuracy** - Reflects current reality
- **Decision-making transparency** - Public records of major decisions
- **Conflict resolution** - Process exists and is followed
- **Role transitions** - Smooth onboarding/offboarding

## Health Check Report Structure

When conducting a formal health check, structure the report as follows:

### 1. Executive Summary
2-3 sentences on overall project health, maturity level assessment, and key findings.

### 2. Overview
Brief project context: what it does, maturity level, scope of review.

### 3. Criteria Evaluation by Section
For each section (Governance, Community, Engineering, Security, Ecosystem):
- **Status indicator** (✅ Excellent, ✅ Good, ⚠️ Moderate, ❌ Concern)
- **Evidence** - Specific observations and metrics
- **Notable implementations** - Exemplary practices
- **Recommendations** - Suggestions for improvement

### 4. Adoption Analysis
If adopter interviews conducted:
- Summary of each interview
- Common themes across adopters
- Usage patterns and maturity levels
- Adopter concerns or praise

### 5. Overall Assessment
- Criteria completion summary
- Blocking vs. non-blocking issues
- Recommendations (blocking and non-blocking)
- Final determination for level/health

### 6. References & Context
- Links to source documents
- Related health checks
- TAG assessments
- Security audits

## Status Indicators

Use consistent indicators across all evaluations:

- ✅ **Excellent/Strong** - Exceeds expectations, exemplary implementation
- ✅ **Good/Healthy** - Meets expectations, no concerns
- ⚠️ **Moderate/Caution** - Meets minimum, monitor for regression
- ❌ **Concern/Risk** - Below expectations, needs attention

## Initial Health Review Process

When a health concern is raised:

### Step 1: Issue Creation & Assignment (Week 1)

- [ ] Project health issue filed in TOC repo
- [ ] TOC member assigned to coordinate
- [ ] Issue filed in project repo with link to TOC issue
- [ ] Initial outreach to project with 2-month response deadline

### Step 2: Assess Response (Weeks 1-8)

**If no response after 2 months:**
- [ ] Conduct health and alignment review
- [ ] Evaluate: scope consistency, community growth, governance, planning, development, adoption, self-awareness
- [ ] Document findings on TOC issue
- [ ] Allow 30-60 additional days for response
- [ ] If still unresponsive, propose archival

**If project responds - undisputed:**
- [ ] Track commitment dates
- [ ] Follow up to ensure resolution
- [ ] Close issue when resolved

**If project responds - disputed:**
- [ ] Engage directly to resolve concerns
- [ ] May involve TAG for support
- [ ] Document resolution path
- [ ] Ensure closure with specific commitments

### Step 3: Documentation & Follow-up

- [ ] Maintain notes of all communications
- [ ] Document dates and decisions
- [ ] Update both TOC and project issues
- [ ] Archive documentation for future reference

## Moving Levels Due Diligence Process

For projects applying to move maturity levels:

### Pre-Assignment Triage

- [ ] Verify adopters file and 5-7 interview candidates provided
- [ ] Confirm TAG presentation or GTR/DTR completed
- [ ] Check vendor neutrality assertion
- [ ] Verify governance documentation linked
- [ ] Confirm maintainers list with affiliations
- [ ] Validate Code of Conduct links
- [ ] Check contributing documentation
- [ ] Verify community meeting information
- [ ] Confirm roadmap/planning documentation
- [ ] Check architecture diagram availability
- [ ] Verify release process documentation
- [ ] Validate security self-assessment (or in progress)
- [ ] Check OpenSSF badge status
- [ ] Confirm adopters file exists
- [ ] Verify integration/compatibility documentation

**If incomplete:** Label "not-ready", close issue, require reapplication when complete.

### Assignment & Kickoff

- [ ] TOC member(s) assign themselves
- [ ] Check for conflicts of interest
- [ ] Add second sponsor if conflicts exist
- [ ] Schedule kickoff meeting
- [ ] Create kickoff document
- [ ] Inform project of licensing policy compliance requirement
- [ ] Set timeline expectations

### Due Diligence Execution

- [ ] Create DD PR using appropriate template (incubation/graduation)
- [ ] Evaluate each criterion independently
- [ ] Document deviations and compensating mechanisms
- [ ] Record recommendations (blocking and non-blocking)
- [ ] Schedule 3+ adopter interviews
- [ ] Conduct interviews (60 minutes each)
- [ ] Summarize interview responses
- [ ] Obtain adopter approval of summaries
- [ ] Add summaries to DD PR
- [ ] Complete overall evaluation summary
- [ ] For graduation: verify security audit findings resolved

### Review & Approval

- [ ] TOC internal review (1 week)
- [ ] Address TOC feedback
- [ ] Public comment period (2 weeks)
- [ ] Address public comments
- [ ] Initiate TOC vote
- [ ] Merge upon approval
- [ ] CNCF staff coordinates press

## Special Considerations

### Specification Projects

- [ ] At least one reference implementation required
- [ ] Implementation need not be part of project under review
- [ ] Multiple implementations indicate mature specification
- [ ] Individual implementations may have limited diversity (acceptable)

### Sub-projects

- [ ] Packaged sub-projects within scope of DD
- [ ] Independent sub-projects marked "un-evaluated" with reason
- [ ] Main project governance of sub-projects verified
- [ ] Sub-project stability/maturity documentation confirmed

### Licensing Exceptions

- [ ] Verify compliance with CNCF licensing policy
- [ ] File exception requests for non-compliant dependencies
- [ ] Block voting until exceptions approved
- [ ] May proceed with interviews and public comment during exception review

### Graduated Project Security Audits

- [ ] Review audit results thoroughly
- [ ] Confirm critical and high findings resolved
- [ ] Track moderate and low findings for future resolution
- [ ] Note operational security recommendations
- [ ] May engage TAG Security for guidance

## Key Differentiation by Level

### Sandbox → Incubation

**Focus:** Viability to proven concept

- Demonstrated production usage (dev/test minimum)
- Active community growth
- Governance iteration and enforcement
- Security hardening (self-assessment, OpenSSF badge)
- Maintainer diversity (2+ organizations)
- Regular releases

### Incubation → Graduation

**Focus:** Production-ready maturity

- Production adoption at scale (3+ adopters)
- Security audit completed and findings addressed
- Comprehensive operational documentation
- SLO/SLI definitions and monitoring
- Mature governance with history of evolution
- Advanced security practices (OpenSSF silver/gold)
- Complete Day 2 operations capabilities

## References

### CNCF TOC Official Documentation

- [Project Health Review Process](https://github.com/cncf/toc/blob/main/operations/project-health-review.md) - Health check procedures
- [TOC Due Diligence Guide](https://github.com/cncf/toc/blob/main/operations/dd-toc-guide.md) - Complete DD process
- [Graduation DD Template](https://github.com/cncf/toc/blob/main/operations/toc-templates/template-dd-pr-graduation.md) - Graduation criteria
- [Incubation DD Template](https://github.com/cncf/toc/blob/main/operations/toc-templates/template-dd-pr-incubation.md) - Incubation criteria
- [General Technical Questions](https://github.com/cncf/toc/blob/main/toc_subprojects/project-reviews-subproject/general-technical-questions.md) - GTR framework

### Related CNCF Resources

- [CNCF Graduation Criteria](https://github.com/cncf/toc/blob/main/process/graduation_criteria.md) - Official requirements
- [CNCF Archival Process](https://github.com/cncf/toc/blob/main/process/archiving.md) - When projects don't meet standards
- [TAG Contributor Strategy](https://github.com/cncf/tag-contributor-strategy) - Community best practices
- [TAG Security](https://github.com/cncf/tag-security) - Security assessments and guidance
- [CNCF DevStats](https://devstats.cncf.io/) - Project metrics and analytics

### Supporting Documentation

- [CNCF Licensing Policy](https://github.com/cncf/foundation/blob/main/allowed-third-party-license-policy.md) - Dependency licensing
- [OpenSSF Best Practices](https://bestpractices.coreinfrastructure.org/) - Security badge program
- [CNCF Code of Conduct](https://github.com/cncf/foundation/blob/main/code-of-conduct.md) - Community expectations
- [Vendor Neutrality Guide](https://contribute.cncf.io/maintainers/community/vendor-neutrality/) - Governance expectations

## Related Work

- [CNCF Health Checks Report](/cncf-health-checks-report) - 2024 health check analysis
- [Cloud Custodian Health Check](/cloud-custodian-health-check) - Example project health check
- [CNCF Project Moving Levels Status](/cncf-project-moving-levels-status) - Graduation/incubation tracking

## Maintaining This Guide

This guide should be updated when:

- CNCF TOC updates health check procedures
- New criteria are added to graduation/incubation requirements
- TAG guidance evolves (Security, Contributor Strategy, etc.)
- Feedback from completed health checks suggests improvements
- Process improvements are identified by TOC

**Last Updated:** January 2025

**Version:** 1.0

---

**Note:** This is a living document synthesizing authoritative CNCF sources. Always cross-reference with official [@cncf/toc](https://github.com/cncf/toc) documentation for the most current requirements and procedures.
