---
title: CNCF Technical Oversight Committee (TOC) Governance
description: Comprehensive guide to the CNCF TOC governance structure, processes, and how policies are applied
tags:
  - cncf
  - governance
  - toc
---

# CNCF Technical Oversight Committee (TOC) Governance

## Executive Summary

The CNCF Technical Oversight Committee (TOC) serves as the technical governing body of the Cloud Native Computing Foundation. This document provides a comprehensive overview of the TOC's structure, responsibilities, and governance processes, designed to help agents and contributors understand how technical decisions are made, how projects are managed, and how policies are applied across the CNCF ecosystem.

## Overview

**Repository:** [@cncf/toc](https://github.com/cncf/toc)

The TOC is responsible for:
- Defining and maintaining the technical vision for cloud native computing
- Admitting, overseeing, and managing all CNCF projects
- Accepting feedback from the end user community
- Aligning project interfaces and defining common practices
- Facilitating driving neutral consensus on technical matters

## TOC Structure and Composition

### Members

The TOC consists of 11 voting members with 2-year terms:

**Current Composition (as of March 2025):**
- **Karena Angell** - TOC Chair (GB-appointed)
- 4 GB-appointed members (Governing Board)
- 3 TOC-appointed members
- 2 EndUser-appointed members
- 1 Maintainer-appointed member
- 1 TOC Shadow (non-voting, 1-year term)

**Appointment Types:**
- **GB-appointed:** Selected by the CNCF Governing Board
- **TOC-appointed:** Selected by existing TOC members
- **EndUser-appointed:** Represents end user perspectives
- **Maintainer-appointed:** Represents project maintainers
- **TOC Shadows:** Training role for future TOC members

### Meetings and Communication

**Regular Meetings:**
- **Schedule:** 1st and 3rd Tuesday of every month at 8AM PT
- **Format:** Public meetings, recorded and uploaded to YouTube
- **Agenda:** Tracked via GitHub issues with label `kind/meeting`

**Communication Channels:**
- **Public Mailing List:** cncf-toc@lists.cncf.io
- **Private Mailing List:** cncf-private-toc@lists.cncf.io (sensitive matters)
- **Slack:** #toc channel on [CNCF Slack](https://slack.cncf.io/)
- **Meeting Minutes:** [GitHub Issues](https://github.com/cncf/toc/issues?q=is%3Aissue+label%3Akind%2Fmeeting)

## Technical Groups Structure

The TOC oversees several types of technical groups with distinct purposes:

### 1. Technical Advisory Groups (TAGs)

**Purpose:** Long-lived groups aligned with industry problem domains or serving common needs across CNCF projects.

**Current TAGs (2025 Structure):**
- TAG Developer Experience
- TAG Infrastructure
- TAG Operational Resilience
- TAG Security and Compliance
- TAG Workloads Foundation

**Legacy TAGs (Being Phased Out in 2025):**
- TAG Security, Storage, App Delivery, Network, Runtime
- TAG Contributor Strategy, Observability, Environmental Sustainability

**Requirements:**
- MUST have a charter defining scope and responsibilities
- MUST maintain TAG metadata (leads, subprojects, initiatives)
- MUST hold at least one public monthly meeting (recorded)
- MUST provide periodic updates to TOC
- SHOULD participate in project reviews
- SHOULD produce technical white papers and best practices

**Leadership Roles:**
- **Chair:** Administrative leadership, meeting facilitation, TOC liaison (2-year term, 10-20% time commitment)
- **Tech Lead:** Subject matter expertise, technical direction, quality oversight (2-year term, 10-20% time commitment)

### 2. TOC Subprojects

**Purpose:** Ongoing work efforts that support TOC functions and operate directly under TOC oversight.

**Current TOC Subprojects:**
- Artificial Intelligence SubProject
- Contributor Strategy and Advocacy SubProject
- Mentoring SubProject
- Project Reviews SubProject

**Requirements:**
- MUST be documented with purpose, scope, roles, and deliverables
- MUST remain actively in use (reviewed if 6+ months inactive)
- MUST report status quarterly
- SHOULD have at least 2 subproject leads

**Leadership:**
- **Subproject Leads:** 1-year terms, nominated by TOC, organize and shepherd execution

### 3. Initiatives

**Purpose:** Short-term, time-bound work with pre-defined objectives and exit criteria.

**Types:**
- **TAG Initiatives:** Work within a TAG's scope (e.g., white papers, reports)
- **Subproject Initiatives:** Defined by subproject charter
- **TOC Initiatives:** TOC-owned work spanning multiple TAGs

**Requirements:**
- MUST be documented with goals, milestones, deliverables, exit criteria
- MUST have 2+ participants beyond assigned lead
- SHOULD not exceed 2 quarters (may request extension)
- MUST check in at least monthly

### 4. Technical Community Groups (TCGs)

**Purpose:** Lightweight topic/domain-focused groups for discussion, knowledge sharing, and coordination.

**Requirements:**
- Minimal governance requirements
- MUST have TOC approval to form
- Follow [CNCF Community Groups Program](https://github.com/cncf/communitygroups)
- Led by Organizers (2-year terms)

## Project Lifecycle Management

The TOC manages projects through three maturity levels with increasing requirements:

### Project Maturity Levels

#### 1. Sandbox Projects

**Purpose:** Early-stage experimental projects

**Requirements:**
- Basic Code of Conduct
- Initial governance documentation
- Contributing process documented
- At least one maintainer listed
- Security reporting process

**Evaluation Focus:**
- Alignment with cloud native principles
- Potential for growth
- Initial community engagement

#### 2. Incubating Projects

**Purpose:** Proven concept with growing adoption

**Requirements:**
- Multiple organizational contributors
- Growing contributor base
- Regular release history
- Public roadmap
- Security self-assessment completed
- OpenSSF Best Practices badge (passing level)
- 3+ verified adopters
- Documented architecture

**Evaluation Focus:**
- Production viability
- Community sustainability
- Security posture
- Ecosystem integration

#### 3. Graduated Projects

**Purpose:** Production-ready, widely adopted projects

**Requirements:**
- All Incubating requirements PLUS:
- Significant production usage
- Security audit completed (critical/high findings resolved)
- OpenSSF badge (silver/gold level)
- Stable release cadence
- Comprehensive documentation
- Day 2 operations capabilities (monitoring, scaling, troubleshooting)

**Evaluation Focus:**
- Production maturity
- Security excellence
- Operational excellence
- Long-term sustainability

### Moving Between Levels (Due Diligence Process)

**Process Overview:**
1. **Pre-Assignment Triage** - Verify all required documentation
2. **Assignment** - TOC members assign themselves (check for conflicts)
3. **Due Diligence Execution:**
   - Evaluate against criteria
   - Document deviations
   - Conduct 3+ adopter interviews
   - Complete assessment
4. **Review & Approval:**
   - TOC internal review (1 week)
   - Public comment period (2 weeks)
   - TOC vote
   - Merge and announce

**Required Documentation:**
- Adopters file with interview candidates
- TAG presentation or General Technical Review (GTR)
- Vendor neutrality assertion
- Governance documentation
- Maintainers list with affiliations
- Code of Conduct
- Contributing guide
- Security self-assessment
- OpenSSF badge
- Release process documentation

### Project Health Reviews

**When Conducted:**
- When concerns are raised about project health
- Part of due diligence for level changes
- Periodic reviews for graduated projects

**Health Indicators Evaluated:**
- PR response time (< 24-48 hours healthy)
- Issue triage (< 72 hours healthy)
- Commit velocity (3-10+/day healthy)
- Release cadence (monthly-quarterly healthy)
- Active contributors (10+/month healthy)
- Maintainer count (5+ healthy)
- Organization diversity (3+ orgs healthy)

**Health Review Process:**
1. Issue filed in TOC and project repos
2. Outreach to project (2-month response deadline)
3. Assessment if no response or disputed response
4. Documentation and follow-up
5. Potential archival if unresponsive

### Archiving Projects

**Criteria for Archiving:**
- Project no longer actively maintained
- No response to health review outreach
- Community consensus that project should be archived
- Project requests archival

**Process:**
- TOC vote required
- Project marked as archived in landscape
- Repository archived on GitHub
- Documentation updated

## TOC Operating Principles

### Core Principles

**1. Project-Centric Approach**
- Projects are the primary unit of organization
- "If it can be on GitHub, it can be a project"
- Support open source software, specifications, and reference materials

**2. Minimal Viable Governance**
- Projects are self-governing
- TOC provides support but doesn't micromanage
- Intervention only when necessary

**3. No Kingmakers & One Size Does Not Fit All**
- Multiple solutions to problems are acceptable
- Competitive/overlapping projects not excluded
- No single "winning stack"
- Market and users drive interoperability

**4. Not a Standards Body**
- Promote interfaces and implementations over formal standards
- Specifications evolve as "living documents"
- Focus on real-world use and adoption

**5. Comprehensive Toolchain**
- Users shouldn't need to look beyond CNCF for cloud native tooling
- Identify and fill gaps in project portfolio
- Complete coverage of cloud native needs

**6. Help Projects Succeed**
- Provide test automation, CI/CD support
- Offer marketing and evangelism
- Technical expertise and guidance
- Governance and scalability advice

### Technical Leadership Principles

All TOC members and leaders must adhere to these principles:

**1. Be Welcoming**
- Consciously welcoming in interactions
- Create space for new and existing contributors

**2. Provide Feedback Appropriately**
- Public praise and recognition
- Private, constructive feedback with neutral third-party
- Gracious and kind in giving/receiving feedback

**3. Always Do Better**
- Identify opportunities for improvement
- Model desired behavior changes
- Continuous self-improvement

**4. Lead Inclusively**
- Seek diverse voices and opinions
- Balance discussions so no single voice dominates
- Invite shy/underrepresented groups to participate
- Enable asynchronous feedback

**5. Foster Respectful Resolution**
- Handle disagreements respectfully
- Show empathy and concern
- De-escalate conflicts
- Pursue consensus within governance scope

**6. Facilitate Transparent Decision-Making**
- Open and transparent processes
- Document reasoning for decisions
- Follow body's governance rules
- Allow others to understand the "why"

## Voting and Decision Making

**TOC Voting:**
- Only TOC members cast binding votes (+1 Binding)
- Voting policy documented in [voting.md](https://github.com/cncf/toc/blob/main/docs/voting.md)
- Super-majority required for significant decisions
- Public voting via GitHub for transparency

**GitVote:**
- Automated voting system via `.gitvote.yml`
- Used for project admission and level changes
- Transparent vote tracking

## Applying TOC Governance in Practice

### For Projects Seeking Admission

**Step 1: Determine Maturity Level**
- Evaluate against Sandbox/Incubating/Graduated criteria
- Be realistic about current state
- Start at appropriate level

**Step 2: Prepare Required Documentation**
- Review maturity level requirements
- Complete all required governance docs
- Gather adopter information (if Incubating/Graduated)
- Obtain security assessments

**Step 3: Engage with Appropriate TAG**
- Identify relevant TAG for your domain
- Present to TAG or complete GTR/DTR
- Receive feedback and iterate

**Step 4: Submit Application**
- Use project proposal template
- Include all required documentation
- Link to TAG presentation/GTR

**Step 5: Due Diligence**
- TOC assigns reviewers
- Respond to questions promptly
- Participate in adopter interviews
- Address feedback

### For Existing Projects Moving Levels

**Step 1: Self-Assessment**
- Review next level criteria
- Identify gaps
- Develop plan to address gaps

**Step 2: Complete Requirements**
- Security assessments
- OpenSSF badge
- Governance documentation
- Adopter cultivation

**Step 3: Engage TOC**
- Discuss readiness with TOC liaison
- Present progress at TOC meeting
- Receive guidance on gaps

**Step 4: Formal Application**
- Submit when all requirements met
- Include adopter interview candidates
- Provide all required documentation

### For TAG Chairs and Tech Leads

**Charter Management:**
- Review charter annually
- Propose updates to TOC
- Ensure scope remains relevant

**Subproject Oversight:**
- Approve new subprojects
- Monitor subproject health
- Decommission inactive subprojects

**Initiative Management:**
- Sponsor TAG initiatives
- Ensure timely completion
- Report status to TOC

**TOC Communication:**
- Provide quarterly updates
- Raise concerns proactively
- Request support when needed

**Project Review Participation:**
- Provide technical evaluation for projects in TAG domain
- Conduct due diligence reviews
- Interview adopters

### For Project Maintainers

**Governance Compliance:**
- Maintain required governance documents
- Follow Code of Conduct
- Implement contributing guidelines
- Document security processes

**Community Health:**
- Grow diverse contributor base
- Respond to PRs and issues promptly
- Hold regular community meetings
- Mentor new contributors

**Release Management:**
- Maintain consistent release cadence
- Document release process
- Follow semantic versioning
- Provide upgrade documentation

**Security:**
- Obtain OpenSSF badge
- Complete security assessments
- Respond to vulnerabilities promptly
- Implement security best practices

**TOC Engagement:**
- Report issues proactively
- Participate in health reviews
- Request support when needed
- Attend relevant TAG meetings

## Key Documents and Resources

### Core TOC Documents

- **[TOC README](https://github.com/cncf/toc/blob/main/README.md)** - Main entry point
- **[PRINCIPLES.md](https://github.com/cncf/toc/blob/main/PRINCIPLES.md)** - TOC Operating and Technical Leadership Principles
- **[DEFINITION.md](https://github.com/cncf/toc/blob/main/DEFINITION.md)** - Cloud Native Definition
- **[FAQ.md](https://github.com/cncf/toc/blob/main/FAQ.md)** - Frequently Asked Questions

### Governance Documents

- **[TAG Governance](https://github.com/cncf/toc/blob/main/governance/tag-governance.md)** - Complete TAG structure and requirements
- **[Project Lifecycle Process](https://github.com/cncf/toc/blob/main/process/README.md)** - How projects move through stages
- **[Graduation Criteria](https://github.com/cncf/toc/blob/main/process/graduation_criteria.md)** - Requirements for each level
- **[Archiving Process](https://github.com/cncf/toc/blob/main/process/archiving.md)** - How projects are archived

### Operational Resources

- **[tags.yaml](https://github.com/cncf/toc/blob/main/tags.yaml)** - Single source of truth for TAG/subproject metadata
- **[TOC Meeting Minutes](https://github.com/cncf/toc/issues?q=is%3Aissue+label%3Akind%2Fmeeting)** - Historical decisions and discussions
- **[CNCF Project List](https://www.cncf.io/projects/)** - All current projects with maturity levels
- **[CNCF Landscape](https://landscape.cncf.io/)** - Visual representation of ecosystem

### Supporting Policies

- **[CNCF Charter](https://github.com/cncf/foundation/blob/master/charter.md)** - Foundation charter
- **[Code of Conduct](https://github.com/cncf/foundation/blob/master/code-of-conduct.md)** - Community standards
- **[IP Policy](https://github.com/cncf/foundation/blob/master/policies-guidance/allowed-third-party-license-policy.md)** - Licensing requirements
- **[Services for Projects](https://www.cncf.io/services-for-projects/)** - Support available to projects

## Decision Trees for Common Scenarios

### "Should I Form a New TAG?"

```
Is there a documented gap in current TAG coverage?
├─ No → Use existing TAG or form Community Group
└─ Yes → Has community demonstrated need via initiatives?
    ├─ No → Form Community Group first
    └─ Yes → Draft charter and engage TOC
        └─ TOC votes on charter
            ├─ Approved → TAG formed
            └─ Rejected → Refine or form Community Group
```

### "Which Maturity Level Should We Apply For?"

```
Do we have production adopters?
├─ No → Are we actively seeking production use?
│   ├─ Yes → Sandbox (build community first)
│   └─ No → May not be ready for CNCF
└─ Yes → Do we have 3+ verified production adopters?
    ├─ No → Incubating (if 1-2 adopters)
    └─ Yes → Do we have security audit and Day 2 ops?
        ├─ No → Incubating (complete requirements first)
        └─ Yes → Graduated
```

### "How Do I Get My Project Unstuck?"

```
Identify the issue
├─ Governance → Engage TAG Contributor Strategy or TOC
├─ Technical Direction → Engage relevant TAG Tech Leads
├─ Security Concerns → Engage TAG Security and Compliance
├─ Community Health → Engage TAG Contributor Strategy
├─ Funding/Resources → Engage TOC or CNCF Staff
└─ Conflict → Follow Code of Conduct escalation path
```

## Glossary

**Cloud Native:** Technologies that empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds.

**Due Diligence (DD):** Comprehensive evaluation process for projects moving between maturity levels.

**General Technical Review (GTR):** Presentation format for projects to introduce themselves to TAGs or TOC.

**Graduated:** Highest maturity level indicating production-ready, widely-adopted projects.

**Incubating:** Mid-level maturity indicating proven concept with growing adoption.

**Initiative:** Short-term, time-bound work with specific deliverables.

**Sandbox:** Entry-level maturity for early-stage experimental projects.

**Subproject:** Ongoing work effort within a TAG or under TOC.

**TAG (Technical Advisory Group):** Long-lived group overseeing a logical domain.

**TCG (Technical Community Group):** Lightweight discussion and coordination group.

**TOC Liaison:** TOC member assigned to maintain communication with specific TAG.

**Vendor Neutral:** Not controlled by any single vendor or organization.

## Change Log

| Date | Changes |
|------|---------|
| 2025-10-16 | Initial governance summary created for jorgepilot documentation |

---

**Document Purpose:** This governance summary is designed to serve as a prompt for AI agents and a reference for CNCF community members to understand how the TOC operates, how decisions are made, and how policies are applied across the CNCF ecosystem.

**Last Updated:** 2025-10-16  
**Source:** [@cncf/toc](https://github.com/cncf/toc) repository (main branch as of October 2025)
