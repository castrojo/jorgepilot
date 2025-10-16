---
title: CNCF End User Technical Advisory Board (TAB) Governance
description: Comprehensive guide to the CNCF TAB governance structure, processes, and how end user perspectives inform CNCF direction
tags:
  - cncf
  - governance
  - tab
  - end-user
---

# CNCF End User Technical Advisory Board (TAB) Governance

## Executive Summary

The CNCF End User Technical Advisory Board (TAB) serves as the voice of end users within the Cloud Native Computing Foundation. This document provides a comprehensive overview of the TAB's structure, responsibilities, and processes, designed to help agents and contributors understand how end user feedback influences CNCF project development, technical direction, and ecosystem priorities.

## Overview

**Repository:** [@cncf/tab](https://github.com/cncf/tab)

The TAB acts as the vital link between CNCF end users and the technical governance bodies. It represents organizations that deploy and operate cloud native technologies in production environments, providing real-world perspective on project usability, reliability, and adoption challenges.

**Key Responsibilities:**
- Facilitate communication between end user community and CNCF governing bodies
- Provide technical feedback and advice to the TOC
- Improve visibility into end user adoption patterns
- Review and approve reference architectures
- Oversee End User Groups and Special Interest Groups
- Advise on End User Radar tools and techniques

## TAB Structure and Composition

### Member Composition

The TAB consists of approximately 10 members with staggered 2-year terms:

**Current Composition (October 2025):**

**Leadership:**
- **Ricardo Rocha** (CERN) - Chair, TOC-appointed
- **Joseph Sandoval** (Adobe Inc) - Vice-Chair, At-large

**Platinum Member Seats (2):**
- Alolita Sharma (Apple)
- Chad Beaudin (Boeing)

**Gold Member Seats (2):**
- Henrik Blixt (Intuit)
- Amr Abdelhalem (Fidelity Investments)

**Silver Member Seats (1):**
- Ben Somogyi (Lockheed Martin)

**At-large Seats (3+):**
- Ahmed Bebars (The New York Times)
- Garry Cairns (JPMorgan)
- Joseph Sandoval (Adobe Inc) - Vice-Chair

**TOC Appointed Seats (2):**
- Ricardo Rocha (CERN) - Chair
- Katie Gamanji (Apple)

### Membership Types Explained

**Platinum/Gold/Silver Member Seats:**
- Representatives from organizations at corresponding CNCF membership tier
- Selected by their organizations
- Must be employed by End User Participant in good standing
- Represent operational experience deploying CNCF projects

**At-large Seats:**
- Elected by End User Participants community
- Open to any End User Participant employee
- Represent broader end user community perspectives

**TOC-Appointed Seats:**
- Selected by Technical Oversight Committee
- Must be employed by End User Participant
- Bridge between technical governance and end user needs
- Often includes TAB Chair

### Eligibility and Constraints

**Requirements:**
- MUST be employee of End User Participant in good standing
- MUST have operational/technical expertise in cloud native infrastructure
- MUST have experience with CNCF projects
- No more than 2 representatives from same organization simultaneously

**End User Participant Definition:**
- Organization using CNCF projects in production
- Not primarily selling cloud native services/products
- Focus on internal deployment and operations
- Member of CNCF End User Community

### Meetings and Communication

**Regular Meetings:**
- **Schedule:** 3rd Monday of every month at 8AM PT
- **Format:** Public meetings
- **Zoom:** https://zoom.us/j/96509520391 (Passcode: 407305)
- **Agenda/Minutes:** [GitHub Project Board](https://github.com/orgs/cncf/projects/60)

**Communication Channels:**
- **End User Mailing List:** cncf-enduser@lists.cncf.io ([public archive](https://lists.cncf.io/g/cncf-enduser))
- **Slack Channels:**
  - #tab - https://cloud-native.slack.com/archives/C05T9P1HXR6
  - #enduser - https://cloud-native.slack.com/archives/G95G3RZ25
- **Support Email:** enduser-support@cncf.io

**Additional Access:**
- Member organizations can request access via [CNCF Member Desk](https://helpcenter.linuxfoundation.org/)

## TAB Responsibilities and Functions

### 1. Communication Facilitation

**Bridge Between Communities:**
- End User Community ↔ TOC
- End User Community ↔ Project Maintainers
- End User Community ↔ TAGs
- End User Community ↔ Governing Board

**Methods:**
- Regular meeting participation
- Direct feedback channels
- Project presentations to TAB
- Surveys and feedback collection

### 2. Technical Advice and Feedback

**To the TOC:**
- Technical direction recommendations
- Project adoption challenges
- Gap analysis in project portfolio
- Real-world implementation patterns
- Operational pain points

**To Projects:**
- Usability feedback
- Reliability concerns
- Performance insights
- Feature requests from production use
- Integration challenges

### 3. Adoption Visibility

**Activities:**
- Maintain visibility into which projects are being adopted
- Track adoption patterns across industries
- Identify successful implementation patterns
- Document blockers to adoption
- Share adoption journey stories

**Tools:**
- [End User Tech Radar](https://github.com/cncf/tab/tree/main/end-user-tech-radar)
- Case studies
- Adoption surveys
- Community discussions

### 4. Reference Architecture Review

**Process:**
- Review proposed reference architectures
- Validate against real-world deployments
- Approve architectures for publication
- Provide feedback on practicality
- Ensure vendor neutrality

**Criteria:**
- Based on production experience
- Vendor-neutral approach
- Clear documentation
- Reproducible patterns
- Addresses common use cases

**Workflow:**
[Reference Architecture Process](https://github.com/cncf/tab/blob/main/process/reference-architectures.md)

### 5. End User Groups and SIG Oversight

**End User Groups (Active):**
- Developer Experience User Group
- [Research User Group](https://github.com/cncf/research-user-group)
- [Public Sector User Group](https://github.com/cncf/public-sector-user-group)

**TAB Oversight Responsibilities:**
- Approve formation of new groups
- Monitor group health and activity
- Provide resources and support
- Facilitate cross-group collaboration
- Report group activities to TOC

### 6. Tech Radar Advisory

**End User Tech Radar:**
- Tool for sharing end user technology assessments
- Categories: Adopt, Trial, Assess, Hold
- Based on real production experience
- Community-driven evaluations
- Regularly updated

**TAB Role:**
- Advise on radar methodology
- Review radar updates
- Ensure vendor neutrality
- Promote radar usage
- Interpret radar results for TOC

### 7. TOC Due Diligence Support

**Adopter Interviews for Project Level Changes:**

When projects apply to move from Sandbox→Incubating or Incubating→Graduated, the TOC requires verified adopter interviews. The TAB assists:

**TAB Responsibilities:**
- Help identify qualified end user adopters
- Facilitate connections between TOC and end users
- Provide context on adoption patterns
- Participate in interviews when appropriate
- Validate production usage claims

**Process:**
[TOC DD Adopter Interview Process](https://github.com/cncf/tab/blob/main/process/toc-dd-adopter-interviews.md)

**Criteria for Adopter Interviews:**
- Organization must be End User Participant
- Project must be in production use
- Usage must align with project's intended purpose
- Clear understanding of project benefits and challenges

## Terms, Vacancies, and Membership Changes

### Terms

**Standard Term:** 2 years

**Initial Terms (Staggered):**
- Some members appointed with 1-year terms initially
- Creates rotation ensuring continuity
- Prevents complete turnover at once

### Membership Termination

**Automatic Termination Occurs When:**
- Member resigns
- Member changes employment away from End User Participant
- Organization loses End User Participant status
- Super-majority vote for removal (not fulfilling duties)

**Removal Process:**
- Must be for cause (not fulfilling duties, policy violations)
- Requires super-majority TAB vote
- Member given opportunity to address concerns
- Appeals can be made to TOC or CoCC

### Vacancies

**Filled By:**
- **Member Seats (Platinum/Gold/Silver):** Organization appoints replacement
- **At-large Seats:** Special election by End User Participants
- **TOC-Appointed Seats:** TOC selects replacement

**Timing:**
- Replacement completes remainder of term
- New full term begins at next regular election

### Alternates

**Alternate Representatives:**
- End User Participants can designate alternates
- Alternates can attend and vote when primary unavailable
- Provides continuity when primary unable to participate
- Must meet same eligibility criteria

## End User Community Benefits

### For Organizations

**Technical Collaboration:**
- Collaborate with peer organizations
- Share best practices
- Overcome common challenges
- Learn from others' experiences

**Direct Influence:**
- Voice needs to projects and TOC
- Participate in shaping CNCF direction
- Early access to project roadmaps
- Influence feature priorities

**Visibility and Recognition:**
- Case study opportunities
- Speaking opportunities at events
- Panel participation
- Blog features
- Recognition as cloud native leader

**Events and Networking:**
- KubeCon + CloudNativeCon tickets
- End User Reception access
- Cloud Native Executive Summit invitation
- Private end user meetings

### For Engineering Teams

**Knowledge and Learning:**
- Access to end user-specific resources
- Learn from peers facing similar challenges
- Early insight into emerging technologies
- Technical deep-dives with project maintainers

**Recruiting:**
- End User Recruiting Booth at KubeCon
- Access to cloud native talent pool
- Visibility to job seekers
- Network with potential hires

**Technical Support:**
- Regular forums for technical questions
- Direct access to project maintainers
- Faster issue resolution
- Early warning of project changes

### For Leadership

**Open Source Culture:**
- [TODO Group](https://todogroup.org) participation
- Build open source program office (OSPO)
- Executive education programs
- [Leadership and Community Events](https://events.linuxfoundation.org/about/calendar/?_sft_lfevent-category=leadership-community-events)

**Strategic Alignment:**
- Understand cloud native ecosystem direction
- Align internal strategy with industry trends
- Risk mitigation through early insight
- Competitive intelligence

## Decision Making and Voting

### Voting Rights

**Who Can Vote:**
- All TAB members (primary representatives)
- Alternates when primary unavailable
- Equal vote regardless of seat type

**What Requires Votes:**
- Reference architecture approval
- New End User Group formation
- Removal of inactive members
- Changes to TAB processes
- Major TAB initiatives

### Consensus Model

**Preferred Approach:**
- Seek consensus where possible
- Encourage discussion and compromise
- Document dissenting opinions
- Minority views respected and recorded

**When Consensus Fails:**
- Fall back to voting
- Simple majority for most decisions
- Super-majority for member removal
- Transparent vote recording

### Decision Documentation

**All Decisions:**
- Documented in meeting minutes
- Tracked on GitHub project board
- Linked to relevant issues/PRs
- Accessible to community

## TAB Relationship with Other CNCF Bodies

### TAB ↔ TOC

**Regular Interactions:**
- TAB Chair attends TOC meetings
- Joint discussions on project direction
- Collaboration on project reviews
- Feedback loops on end user needs

**TAB Provides to TOC:**
- End user perspective on project adoption
- Real-world implementation feedback
- Gap analysis in project portfolio
- Validation of project value propositions

**TOC Provides to TAB:**
- Technical roadmap visibility
- Early project pipeline information
- Technical expertise and guidance
- Project health insights

### TAB ↔ Projects

**Engagement Methods:**
- Project presentations to TAB
- Direct feedback channels
- Adoption interviews for due diligence
- Case study collaboration

**TAB Provides to Projects:**
- Production usage feedback
- Usability insights
- Feature prioritization input
- Adoption blocker identification

**Projects Provide to TAB:**
- Roadmap presentations
- Feature demonstrations
- Early access to new capabilities
- Technical documentation

### TAB ↔ Governing Board

**Reporting:**
- Regular TAB updates to GB
- End user community health reports
- Adoption trend analysis
- Member organization feedback

**Advisory Role:**
- End user perspective on strategic decisions
- Market feedback on CNCF initiatives
- Member organization needs and concerns

### TAB ↔ TAGs

**Collaboration Areas:**
- Security: Production security concerns
- Contributor Strategy: End user contributor programs
- Observability: Operational monitoring needs
- Others: Domain-specific feedback

**Interaction Methods:**
- Joint meetings on specific topics
- TAG presentations to TAB
- TAB representation in TAG discussions
- Shared initiatives

## End User Groups (EUGs)

### Purpose

Focused communities within the End User Community for:
- Specific industry sectors (e.g., Public Sector)
- Common use cases (e.g., Research Computing)
- Shared challenges (e.g., Developer Experience)

### Formation Process

**Requirements:**
1. Documented need/gap in community
2. Critical mass of interested participants (10+ organizations)
3. Clear scope and charter
4. Committed facilitators/leaders
5. TAB approval

**Proposal Must Include:**
- Purpose and scope
- Initial participant list
- Meeting cadence plan
- Expected deliverables
- Resource requirements
- Success metrics

### TAB Oversight

**Responsibilities:**
- Approve new group formation
- Review group charters
- Monitor group health and activity
- Provide resources (CNCF staff support, meeting infrastructure)
- Facilitate collaboration between groups
- Report group activities to TOC

**Health Indicators:**
- Regular meeting attendance
- Active GitHub participation
- Deliverable completion
- Community engagement
- Member satisfaction

## Case Studies and Advocacy

### Case Study Program

**Purpose:**
- Share success stories
- Provide social proof for projects
- Educate potential adopters
- Recognize end user innovation

**Process:**
- End user proposes case study
- CNCF staff coordinates
- Draft created and reviewed
- End user approves final version
- Published on [CNCF website](https://www.cncf.io/case-studies)
- Promoted through CNCF channels

**Guidelines:**
- [CNCF End User Stories Guidelines](https://github.com/cncf/foundation/blob/master/case-study-guidelines.md)
- Focus on specific projects/technologies
- Quantifiable outcomes preferred
- Vendor-neutral approach
- Technical depth appropriate

### Advocacy Opportunities

**Speaking Engagements:**
- KubeCon + CloudNativeCon talks
- CNCF webinars
- Meetup presentations
- Podcast appearances

**Written Content:**
- Blog posts on CNCF blog
- Technical articles
- White papers
- Reference architectures

**Events:**
- Panel participation
- Workshop facilitation
- Booth staffing at KubeCon
- End user reception hosting

## Applying TAB Governance in Practice

### For Organizations Considering End User Membership

**Step 1: Assess Eligibility**
```
Are you primarily an end user (not vendor)?
├─ Yes → Do you use CNCF projects in production?
│   ├─ Yes → Do you want to influence cloud native direction?
│   │   └─ Yes → Good fit for End User Community
│   └─ No → Wait until production deployment
└─ No → Consider CNCF vendor/associate membership instead
```

**Step 2: Understand Benefits**
- Review benefits outlined in this document
- Identify specific value for your organization
- Determine resource commitment (TAB participation, group involvement)

**Step 3: Join Community**
- [Request to join](https://www.cncf.io/enduser) End User Community
- Attend public TAB meetings
- Participate in relevant End User Groups
- Connect with TAB members

**Step 4: Get Involved**
- Share your cloud native journey
- Participate in adopter interviews
- Consider case study
- Join End User Groups
- Contribute to Tech Radar

### For TAB Members

**Core Responsibilities:**

**Regular Participation:**
- Attend monthly TAB meetings (3rd Monday, 8AM PT)
- Participate in End User Group meetings
- Respond to TAB discussions on Slack/email
- Vote on TAB decisions

**Community Representation:**
- Share organization's perspective
- Represent broader end user community
- Balance specific needs with general community good
- Maintain vendor neutrality

**Active Contribution:**
- Provide feedback to projects and TOC
- Participate in adopter interviews
- Review reference architectures
- Contribute to End User Tech Radar
- Share experiences publicly (talks, blogs, case studies)

**Leadership (for Chair/Vice-Chair):**
- Facilitate TAB meetings
- Coordinate with TOC and GB
- Represent TAB in public forums
- Mentor new TAB members
- Guide TAB strategic direction

### For Projects Seeking End User Feedback

**Engaging TAB:**

**Step 1: Request Presentation Slot**
- Email TAB mailing list
- Propose specific topics/questions
- Provide advance materials
- Schedule for monthly meeting

**Step 2: Prepare for TAB Meeting**
- Focus on production use cases
- Address operational concerns
- Be honest about limitations
- Prepare for tough questions
- Bring specific questions

**Step 3: Follow Up**
- Document feedback received
- Share action items
- Report back on changes
- Maintain ongoing dialogue

**Gathering Adopter Feedback:**

**Informal Methods:**
- Attend End User Group meetings
- Join end user Slack channels
- Survey end user community
- Monitor case studies

**Formal Methods:**
- Request TAB assistance for due diligence interviews
- Propose reference architecture collaboration
- Conduct user research studies
- Participate in End User Tech Radar

### For End User Group Organizers

**Formation:**
1. Identify unmet need or gap
2. Recruit 10+ interested organizations
3. Draft charter and scope
4. Propose to TAB
5. Receive approval
6. Launch group

**Operation:**
- Hold regular meetings (monthly/quarterly)
- Maintain GitHub repository for documentation
- Report quarterly to TAB
- Collaborate with relevant TAGs
- Deliver on charter objectives

**Health Maintenance:**
- Monitor participation levels
- Survey member satisfaction
- Rotate facilitation responsibilities
- Refresh charter periodically
- Celebrate wins publicly

## Key Documents and Resources

### Core TAB Documents

- **[TAB README](https://github.com/cncf/tab/blob/main/README.md)** - Main entry point
- **[Reference Architecture Process](https://github.com/cncf/tab/blob/main/process/reference-architectures.md)** - How architectures are reviewed
- **[TOC DD Adopter Interviews](https://github.com/cncf/tab/blob/main/process/toc-dd-adopter-interviews.md)** - Interview process for project level changes

### End User Community Resources

- **[End User Community Page](https://www.cncf.io/enduser)** - Join and learn more
- **[Case Studies](https://www.cncf.io/case-studies)** - Published success stories
- **[Case Study Guidelines](https://github.com/cncf/foundation/blob/master/case-study-guidelines.md)** - How to contribute
- **[End User Tech Radar](https://github.com/cncf/tab/tree/main/end-user-tech-radar)** - Technology assessments

### End User Groups

- **[Research User Group](https://github.com/cncf/research-user-group)** - HPC and research computing
- **[Public Sector User Group](https://github.com/cncf/public-sector-user-group)** - Government and public sector
- Developer Experience User Group - DX focus

### Related Communities

- **[TODO Group](https://todogroup.org)** - Open source program offices
- **[CNCF Community Groups](https://community.cncf.io/)** - Broader community
- **[KubeCon + CloudNativeCon](https://events.linuxfoundation.org/kubecon-cloudnativecon/)** - Major events

## Decision Trees for Common Scenarios

### "Should Our Organization Join the End User Community?"

```
Are you primarily an end user (not vendor)?
├─ No → Consider other CNCF membership types
└─ Yes → Do you deploy CNCF projects in production?
    ├─ No → Wait until production use, attend public meetings
    └─ Yes → What are your goals?
        ├─ Influence direction → Full membership + TAB participation
        ├─ Learn from peers → Full membership + EUG participation
        ├─ Visibility/recruiting → Full membership + case studies
        └─ All of above → Full membership + active participation
```

### "How Can I Provide Feedback to a Project?"

```
Type of feedback?
├─ Critical issue/bug → Project GitHub issues + Slack
├─ Feature request → Project GitHub discussions + TAB meeting
├─ Adoption blocker → TAB meeting + email maintainers
├─ General feedback → End User Group discussion
└─ Production experience → Consider case study
```

### "Should We Form a New End User Group?"

```
Is there an unmet need?
├─ No → Join existing End User Group
└─ Yes → Can you recruit 10+ organizations?
    ├─ No → Raise in existing group, build interest
    └─ Yes → Can you commit to facilitation?
        ├─ No → Find co-facilitators first
        └─ Yes → Draft charter and propose to TAB
```

## Glossary

**At-large Seat:** TAB membership elected by End User Participants community.

**Case Study:** Published story of an organization's cloud native journey and CNCF project usage.

**Cloud Native Executive Summit:** Exclusive event for executive-level end user decision makers.

**End User:** Organization using CNCF projects internally, not primarily as vendor.

**End User Group (EUG):** Focused community within End User Community for specific sector or use case.

**End User Participant:** Organization that is member of CNCF End User Community.

**End User Tech Radar:** Community-driven assessment tool for cloud native technologies.

**Member Seat:** TAB membership tied to specific CNCF membership tier (Platinum/Gold/Silver).

**Reference Architecture:** Vetted architectural pattern for cloud native deployments.

**TAB (Technical Advisory Board):** Governing body representing end user perspectives.

**TOC-Appointed Seat:** TAB membership selected by Technical Oversight Committee.

**Vendor Neutral:** Not favoring or controlled by any single vendor.

## Change Log

| Date | Changes |
|------|---------|
| 2025-10-16 | Initial governance summary created for jorgepilot documentation |

---

**Document Purpose:** This governance summary is designed to serve as a prompt for AI agents and a reference for CNCF end users to understand how the TAB operates, how end user perspectives are represented, and how to engage with CNCF technical governance.

**Last Updated:** 2025-10-16  
**Source:** [@cncf/tab](https://github.com/cncf/tab) repository (main branch as of October 2025)
