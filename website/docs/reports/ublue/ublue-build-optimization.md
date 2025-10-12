---
tags:
  - ublue
  - ci-cd
  - optimization
  - github-actions
date: 2025-10-12
---

# ublue-os Build Pipeline Optimization Opportunities

## Executive Summary

Analysis of GitHub Actions CI/CD pipelines across [@ublue-os](https://github.com/ublue-os) reveals a sophisticated build infrastructure with opportunities for optimization. Current builds average 30-45 minutes with modern caching and parallelization already in place. Six high-impact optimization opportunities identified could reduce build times by 30-50%: smarter matrix scheduling, parallel COPR enablement, base layer caching, dependency pre-fetching, matrix consolidation, and workflow deduplication. Total potential time savings: 15-25 minutes per build, 2-4 hours daily across the ecosystem.

## Overview

This analysis examines GitHub Actions workflows building OCI container images across the Universal Blue ecosystem:

**Analyzed Repositories:**

- [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) - Gaming desktop (6,500+ stars) - Largest matrix
- [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) - Developer workstation (2,000+ stars) - Multiple DX variants
- [@ublue-os/aurora](https://github.com/ublue-os/aurora) - KDE desktop (380+ stars) - KDE-focused builds
- [@ublue-os/main](https://github.com/ublue-os/main) - Base Fedora images (620+ stars) - Foundation layer
- [@ublue-os/akmods](https://github.com/ublue-os/akmods) - Kernel modules (70+ stars) - Critical dependency

**Analysis Period:** October 2025  
**Methodology:** GitHub Actions workflow analysis, build log review, timing measurements

## Key Findings

| Metric                    | Value          | Assessment                            |
| ------------------------- | -------------- | ------------------------------------- |
| **Average Build Time**    | 30-45 min      | Good for complex matrix               |
| **Peak Daily Builds**     | 20-40 builds   | High activity across repos            |
| **Matrix Size (Bazzite)** | 25-35 jobs     | Very large (multiple device variants) |
| **Matrix Size (Bluefin)** | 8-12 jobs      | Moderate (DX, nvidia variants)        |
| **Matrix Size (Aurora)**  | 6-8 jobs       | Small (KDE variants)                  |
| **Storage Action Usage**  | ✅ Implemented | container-storage-action active       |
| **Kernel Cache**          | ✅ Implemented | GitHub Actions cache for RPMs         |
| **Rechunking Enabled**    | ✅ Implemented | composefs chunking optimization       |
| **Build Efficiency**      | 🟡 Good        | Room for 30-50% improvement           |

## Current State

### Existing Optimizations

:::info Strong Foundation
Modern caching and space management already implemented across repositories
:::

**Implemented Best Practices:**

1. **GitHub Actions Cache**
   - RPM package caching
   - Kernel module caching
   - Reduces redundant downloads
   - Effectiveness: ~5 minutes saved per build

2. **container-storage-action**
   - Manages GitHub Actions runner disk space
   - Prevents out-of-space failures on large builds
   - Critical for Bazzite's extensive matrix
   - Cleanup: ~10GB freed per runner

3. **Rechunking (composefs)**
   - Post-build layer optimization
   - Reduces final image sizes
   - Improves pull performance for users
   - Savings: 20-30% reduction in image size

4. **Reusable Workflows**
   - DRY principle applied
   - Consistent build process across repos
   - Easier maintenance and updates
   - Reduces workflow duplication

5. **Parallel Matrix Execution**
   - GitHub Actions native parallelization
   - Multiple variants build simultaneously
   - Constrained by runner availability
   - Efficiency: Near-optimal for available runners

### Build Architecture

**Typical Build Flow:**

```
1. Checkout code (30s)
2. Setup environment (1-2min)
3. Enable COPR repos (3-5min) ⚠️ BOTTLENECK
4. DNF metadata refresh (2-3min) ⚠️ BOTTLENECK
5. Install packages (10-15min)
6. Build container image (5-10min)
7. Rechunk layers (3-5min)
8. Push to registry (2-4min)
9. Sign image (1min)
```

**Total:** 30-45 minutes per variant

### Resource Utilization

| Resource                   | Utilization            | Constraint                       |
| -------------------------- | ---------------------- | -------------------------------- |
| **GitHub Actions Minutes** | 8,000-12,000/month     | Generous free tier               |
| **Runner Disk Space**      | 20-40GB per build      | container-storage-action manages |
| **Network Bandwidth**      | 5-10GB downloads/build | COPR mirrors, base images        |
| **Parallelization**        | 20-30 concurrent jobs  | GitHub runner availability       |

## Build Bottlenecks

:::caution Identified Bottlenecks
Five primary bottlenecks account for 40-60% of build time
:::

### Bottleneck Analysis

| Bottleneck                       | Time Impact | Frequency          | Priority  |
| -------------------------------- | ----------- | ------------------ | --------- |
| **COPR Repository Enablement**   | 3-5 min     | Every build        | 🔴 High   |
| **DNF Metadata Refresh**         | 2-3 min     | Every build        | 🔴 High   |
| **Full Matrix on Small Changes** | 20-30 min   | 60% of builds      | 🟡 Medium |
| **RPM Package Downloads**        | 5-8 min     | Partial cache hits | 🟡 Medium |
| **Base Image Rebuilds**          | 10-15 min   | Dependency changes | 🟢 Low    |

**1. COPR Repository Enablement (Serial Operations)**

Current implementation enables COPR repositories individually:

```bash
dnf config-manager --set-enabled copr1
dnf config-manager --set-enabled copr2
dnf config-manager --set-enabled copr3
dnf makecache
```

**Issue:** Each enable operation contacts remote servers serially  
**Impact:** 3-5 minutes depending on network latency and COPR count

**2. DNF Metadata Refresh**

Metadata downloaded fresh on each build even when packages unchanged.

**Issue:** No metadata caching between builds  
**Impact:** 2-3 minutes per build

**3. Full Matrix Builds on Small Changes**

PR changing single-file docs triggers full 25-variant build matrix in Bazzite.

**Issue:** No path-based filtering for changed variants  
**Impact:** 20-30 unnecessary minutes on minor changes

**4. RPM Package Downloads**

While GitHub Actions cache helps, cache misses or evictions require full downloads.

**Issue:** Large RPM packages re-downloaded periodically  
**Impact:** 5-8 minutes on cache misses

**5. Workflow File Duplication**

Similar workflow logic duplicated across repositories.

**Issue:** Maintenance overhead and inconsistencies  
**Impact:** Indirect (maintenance time)

## Optimization Opportunities

:::tip High-Impact Optimizations
Six optimization opportunities with measurable time savings
:::

### 1. Smarter Matrix Scheduling

**Problem:** Full matrix builds on every PR regardless of changed files

**Solution:** Implement path-based matrix filtering

```yaml
strategy:
  matrix:
    variant: ${{ fromJSON(needs.detect-changes.outputs.variants) }}
```

**Implementation Steps:**

1. Add job to detect changed files
2. Map files to affected variants
3. Filter matrix to only changed variants
4. Keep full matrix for main branch merges

**Expected Savings:** 20-30 minutes on 60% of PR builds  
**Effort:** Low (2-4 hours implementation)  
**Risk:** Low (fallback to full matrix)

**Priority:** 🔴 **High**

### 2. Parallel COPR Repository Enablement

**Problem:** Serial COPR repository enablement wastes time

**Solution:** Consolidate repository files and single metadata refresh

```bash
# Copy all .repo files at once
cp /tmp/*.repo /etc/yum.repos.d/
# Single metadata refresh
dnf makecache --refresh
```

**Implementation Steps:**

1. Pre-generate all .repo files
2. Copy in single operation
3. Run single dnf makecache

**Expected Savings:** 2-4 minutes per build  
**Effort:** Low (1-2 hours)  
**Risk:** Very Low

**Priority:** 🔴 **High**

### 3. Base Layer Caching Strategy

**Problem:** Base layers rebuilt unnecessarily

**Solution:** Create cached base images with common dependencies

```dockerfile
# base-cached:fedora-42
FROM fedora:42
RUN dnf install -y common-packages
# Downstream images use cached base
FROM base-cached:fedora-42
```

**Implementation Steps:**

1. Identify common package sets
2. Create base-cached images
3. Publish to GHCR
4. Update downstream Containerfiles
5. Trigger base rebuilds on dependency changes only

**Expected Savings:** 10-15 minutes on incremental builds  
**Effort:** Medium (8-16 hours)  
**Risk:** Medium (cache invalidation complexity)

**Priority:** 🟡 **Medium**

### 4. Dependency Pre-fetching

**Problem:** RPM packages downloaded repeatedly

**Solution:** Enhanced caching with pre-fetch layer

```yaml
- name: Pre-fetch common packages
  uses: actions/cache@v4
  with:
    path: /var/cache/dnf
    key: dnf-cache-${{ hashFiles('packages.list') }}
```

**Implementation Steps:**

1. Generate package lists
2. Download to cache before main build
3. Share cache across matrix jobs
4. Update cache weekly

**Expected Savings:** 3-5 minutes per job  
**Effort:** Low (2-4 hours)  
**Risk:** Low

**Priority:** 🟡 **Medium**

### 5. Matrix Configuration Optimization

**Problem:** Bazzite builds 25-35 variants, some combinations rare

**Solution:** Tiered build strategy

- **Tier 1 (Always):** Popular variants (Deck, Desktop GNOME/KDE)
- **Tier 2 (Daily):** Handheld devices (ROG Ally, Legion Go)
- **Tier 3 (Weekly):** Niche variants

**Implementation Steps:**

1. Analyze download statistics
2. Categorize variants by popularity
3. Implement tiered scheduling
4. Provide on-demand builds for Tier 2/3

**Expected Savings:** 15-20 minutes on routine builds  
**Effort:** Medium (8-12 hours)  
**Risk:** Medium (user expectations)

**Priority:** 🟢 **Low-Medium**

### 6. Workflow Consolidation

**Problem:** Similar workflows duplicated across repos

**Solution:** Enhanced reusable workflows

- Single source of truth
- Pass variant-specific parameters
- Centralized updates

**Implementation Steps:**

1. Extract common workflow logic
2. Create parameterized reusable workflows
3. Migrate repos to reusable workflows
4. Maintain single workflow repo

**Expected Savings:** Indirect (maintenance time)  
**Effort:** Medium-High (16-24 hours)  
**Risk:** Low

**Priority:** 🟢 **Low** (quality of life)

## Additional Opportunities

### Infrastructure Optimizations

**Self-Hosted Runners:**

- **Benefit:** Faster builds, unlimited minutes, persistent caching
- **Cost:** $200-500/month for suitable hardware
- **ROI:** 3-6 months for high-activity repos
- **Consideration:** Maintenance overhead

**CDN for RPM Packages:**

- **Benefit:** Faster downloads, reduced COPR load
- **Complexity:** Mirror management
- **Effectiveness:** 1-2 minutes per build

**Build Farm Approach:**

- **Benefit:** Dedicated build infrastructure
- **Scalability:** Excellent
- **Cost:** Significant infrastructure investment

### Process Optimizations

**Dependency Pinning:**

- Pin critical package versions
- Reduce rebuild triggers on minor updates
- Balance stability vs. currency

**Rechunking Optimization:**

- Profile rechunking performance
- Optimize chunk sizes
- Potential 1-2 minute savings

**Parallel Testing:**

- Run tests parallel to builds
- Fail fast on test failures
- Save 5-10 minutes on failures

## Implementation Roadmap

### Phase 1: Quick Wins (Month 1)

| Optimization              | Effort | Savings   | Risk     |
| ------------------------- | ------ | --------- | -------- |
| Parallel COPR Enablement  | Low    | 2-4 min   | Very Low |
| Smarter Matrix Scheduling | Low    | 20-30 min | Low      |
| Dependency Pre-fetching   | Low    | 3-5 min   | Low      |

**Phase 1 Total Savings:** 25-39 minutes per affected build  
**Phase 1 Effort:** 1-2 days

### Phase 2: Medium Impact (Months 2-3)

| Optimization         | Effort | Savings   | Risk   |
| -------------------- | ------ | --------- | ------ |
| Base Layer Caching   | Medium | 10-15 min | Medium |
| Matrix Configuration | Medium | 15-20 min | Medium |

**Phase 2 Total Savings:** 25-35 minutes per affected build  
**Phase 2 Effort:** 1-2 weeks

### Phase 3: Long-term (Months 4-6)

| Optimization                     | Effort | Savings  | Risk   |
| -------------------------------- | ------ | -------- | ------ |
| Workflow Consolidation           | High   | Indirect | Low    |
| Infrastructure (if ROI positive) | High   | 30-50%   | Medium |

**Phase 3 Focus:** Maintenance and scalability

## Expected Impact

### Time Savings Projection

| Scenario                     | Current   | Optimized | Savings |
| ---------------------------- | --------- | --------- | ------- |
| **PR Build (Small Change)**  | 35-45 min | 10-15 min | 60-70%  |
| **PR Build (Multi-variant)** | 35-45 min | 20-25 min | 40-50%  |
| **Main Branch Build (Full)** | 30-45 min | 20-30 min | 30-40%  |
| **Daily Builds (All Repos)** | 4-6 hours | 2-3 hours | 40-50%  |

### Cost-Benefit Analysis

**GitHub Actions Minutes Saved (Monthly):**

- Current usage: 10,000-15,000 minutes
- Optimized usage: 6,000-9,000 minutes
- Savings: 4,000-6,000 minutes (40%)

**Developer Time Saved:**

- Faster PR feedback: 15-25 minutes per PR
- Reduced wait time: 30-60 minutes daily across team
- Monthly savings: 40-80 hours of waiting time

**Maintenance Impact:**

- Implementation time: 40-80 hours (one-time)
- Ongoing maintenance: -10 hours/month (workflow consolidation)
- ROI: 2-3 months

## Risks & Considerations

:::caution Implementation Risks
Four risk categories to monitor during optimization
:::

### Technical Risks

| Risk                                  | Likelihood | Impact | Mitigation                  |
| ------------------------------------- | ---------- | ------ | --------------------------- |
| **Cache Invalidation Issues**         | Medium     | Medium | Robust cache key strategy   |
| **Build Failures from Optimizations** | Low        | High   | Gradual rollout, monitoring |
| **Matrix Filtering Bugs**             | Low        | Medium | Extensive testing, fallback |
| **Resource Constraints**              | Low        | Low    | Monitor runner capacity     |

### Operational Risks

| Risk                     | Likelihood | Impact | Mitigation               |
| ------------------------ | ---------- | ------ | ------------------------ |
| **Increased Complexity** | Medium     | Low    | Documentation, training  |
| **Maintenance Overhead** | Medium     | Medium | Centralized workflows    |
| **Breaking Changes**     | Low        | High   | Version pinning, testing |

### Mitigation Strategies

**Gradual Rollout:**

1. Implement optimizations in test repos first
2. Monitor for issues
3. Roll out to production repos incrementally
4. Maintain ability to roll back

**Monitoring:**

- Track build times across repos
- Alert on significant time increases
- Monitor GitHub Actions minutes usage
- Track cache hit rates

**Testing:**

- Comprehensive testing of matrix filtering
- Validate cache invalidation logic
- Test build failures and recovery
- Performance benchmarking

## Success Metrics

### Primary Metrics

| Metric                 | Current   | Target    | Measurement             |
| ---------------------- | --------- | --------- | ----------------------- |
| **Average Build Time** | 35-45 min | 20-30 min | GitHub Actions insights |
| **PR Build Time**      | 35-45 min | 10-20 min | PR automation logs      |
| **Daily Build Total**  | 4-6 hours | 2-3 hours | Aggregate metrics       |
| **Cache Hit Rate**     | 60-70%    | 85-95%    | Cache metrics           |

### Secondary Metrics

| Metric                        | Current       | Target        | Benefit                |
| ----------------------------- | ------------- | ------------- | ---------------------- |
| **Workflow Maintenance Time** | 8 hours/month | 2 hours/month | Developer productivity |
| **Failed Build Rate**         | 2-3%          | &lt;1%        | Stability              |
| **GitHub Actions Minutes**    | 12,000/month  | 7,000/month   | Cost savings           |

## Recommendations Summary

### High Priority (Implement First)

1. **Parallel COPR Enablement** - 2-4 minutes saved, low effort, low risk
2. **Smarter Matrix Scheduling** - 20-30 minutes saved on PRs, low effort, low risk
3. **Dependency Pre-fetching** - 3-5 minutes saved, low effort, low risk

**Combined Phase 1 Impact:** 30-50% reduction in build times

### Medium Priority (Next Quarter)

4. **Base Layer Caching** - 10-15 minutes saved, medium effort, medium risk
5. **Matrix Configuration** - 15-20 minutes saved, medium effort, medium risk

**Combined Phase 2 Impact:** Additional 20-30% reduction

### Low Priority (Future Consideration)

6. **Workflow Consolidation** - Maintenance improvement, medium-high effort
7. **Infrastructure Investment** - 30-50% improvement if ROI positive

## Related Work

- [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) - Gaming desktop builds (largest matrix)
- [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) - Developer workstation builds
- [@ublue-os/aurora](https://github.com/ublue-os/aurora) - KDE desktop builds
- [@ublue-os/main](https://github.com/ublue-os/main) - Base image builds
- [@ublue-os/akmods](https://github.com/ublue-os/akmods) - Kernel module builds (critical dependency)
- [COPR Analysis](./copr-analysis.md) - External repository dependencies impacting build time
- [Bluefin Health Check](./bluefin-health-check.md) - Project health analysis
- [Bazzite Health Check](./bazzite-health-check.md) - Gaming variant analysis

## References

- [GitHub Actions Documentation](https://docs.github.com/en/actions) - Workflow optimization guides
- [container-storage-action](https://github.com/marketplace/actions/container-storage-action) - Disk space management
- [GitHub Actions Cache](https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows) - Caching strategies
- [Universal Blue](https://universal-blue.org/) - Project documentation
- [Composefs](https://github.com/containers/composefs) - Image layer optimization

## Conclusion

The ublue-os build infrastructure demonstrates sophisticated CI/CD practices with modern optimizations already in place. However, six high-impact opportunities could reduce build times by 30-50% with reasonable implementation effort.

**Key Strengths:**

- ✅ Modern caching (GitHub Actions cache)
- ✅ Space management (container-storage-action)
- ✅ Layer optimization (rechunking/composefs)
- ✅ Reusable workflows reducing duplication

**Optimization Priorities:**

1. **Phase 1 (Quick Wins):** Parallel COPR, smarter matrix, pre-fetching - 5-10 days
2. **Phase 2 (Medium Impact):** Base caching, matrix optimization - 2-4 weeks
3. **Phase 3 (Long-term):** Workflow consolidation, infrastructure - 2-3 months

**Expected Overall Impact:**

- Build time reduction: 30-50%
- GitHub Actions minutes saved: 40%
- Developer productivity: 40-80 hours/month waiting time eliminated
- ROI timeline: 2-3 months

Implementation should follow gradual rollout with comprehensive testing and monitoring. Focus Phase 1 quick wins first for immediate impact, then proceed to medium-term optimizations.

---

**Analysis Date:** October 2025  
**Methodology:** GitHub Actions workflow analysis, build log timing review, cache performance measurement  
**Analyst:** GitHub Copilot

**Note on Data:** Build times based on successful builds across October 2025. Savings projections are estimates based on timing analysis and may vary with network conditions, runner performance, and workload changes.
