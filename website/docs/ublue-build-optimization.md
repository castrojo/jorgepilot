---
sidebar_position: 5
---

# ublue-os Build Pipeline Optimization Opportunities

## Executive Summary

Analysis of container build pipelines across [@ublue-os](https://github.com/ublue-os) reveals several low-hanging fruit opportunities to reduce build times. Key repositories (bazzite, bluefin, aurora, main, akmods) already use modern caching and parallelization, but builds still take 30-45 minutes. Quick wins include layer caching improvements, dependency pre-fetching, matrix optimization, and workflow consolidation.

## Overview

This analysis focuses on GitHub Actions workflows that build OCI container images across the ublue-os ecosystem. Major image-building repositories examined:

- [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) - Gaming-focused desktop (6,405 stars)
- [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) - Developer workstation (1,990 stars)
- [@ublue-os/aurora](https://github.com/ublue-os/aurora) - KDE productivity desktop (369 stars)
- [@ublue-os/main](https://github.com/ublue-os/main) - Base Fedora images (616 stars)
- [@ublue-os/akmods](https://github.com/ublue-os/akmods) - Kernel module infrastructure (69 stars)

## Key Findings

| Metric | Value | Notes |
|--------|-------|-------|
| Average Build Time | 30-45 min | Successful full matrix builds |
| Matrix Size (Bazzite) | ~20-30 jobs | Multiple flavors × base types × streams |
| Matrix Size (Bluefin/Aurora) | ~6-12 jobs | Flavors × base types |
| Storage Action Usage | ✅ Used | container-storage-action for space |
| Kernel Cache | ✅ Used | GitHub Actions cache for RPMs |
| Rechunking Enabled | ✅ Yes | Reduces layer sizes post-build |
| SBOM Generation | ❌ Disabled | Currently commented out |

## Low-Hanging Fruit Optimizations

### 1. **Smarter Matrix Scheduling**

:::tip Quick Win
Build only changed variants on PRs instead of the full matrix.
:::

**Current State:**
- Full matrix builds on every push to main/testing branches
- All image flavors rebuild even when only one changes
- No path-based filtering for variants

**Optimization:**
```yaml
# Add conditional matrix based on changed files
strategy:
  matrix:
    image_flavor: ${{ fromJson(needs.detect-changes.outputs.flavors) }}
```

**Expected Savings:** 50-70% reduction in PR build times when changes affect specific flavors

**Implementation Effort:** Low - Add a pre-job that detects changed files and outputs affected variants

---

### 2. **Parallel COPR Repository Enablement**

:::warning Current Bottleneck
Sequential `dnf copr enable` commands slow down dependency installation.
:::

**Current State:**
- COPR repos enabled one at a time in Containerfiles
- Each enable fetches repo metadata serially
- 10-14 COPR repos used across projects (see [COPR Analysis](./copr-analysis.md))

**Optimization:**
```dockerfile
# Instead of sequential:
# RUN dnf copr enable -y ublue-os/staging
# RUN dnf copr enable -y ublue-os/packages
# RUN dnf copr enable -y che/nerd-fonts

# Use parallel with dnf5 or pre-create combined repofile:
COPY <<EOF /etc/yum.repos.d/ublue-copr.repo
[copr:copr.fedorainfracloud.org:ublue-os:staging]
# ... all repos in single file
EOF
RUN dnf makecache --refresh
```

**Expected Savings:** 2-4 minutes per build

**Implementation Effort:** Low - Create consolidated repo files, test thoroughly

---

### 3. **Base Image Layer Caching**

**Current State:**
- Each repository builds from Fedora base images
- Common dependencies reinstalled across variants
- `ublue-os/main` serves as base but could be leveraged more

**Optimization:**
- Create intermediate "builder" images with common dependencies pre-installed
- Use `ublue-os/main` images more consistently as base
- Enable Docker layer caching in GitHub Actions (already partially done)

**Expected Savings:** 5-8 minutes on cache hits

**Implementation Effort:** Medium - Requires coordinating base image updates across repos

---

### 4. **Pre-fetch Large Dependencies**

:::tip Low Effort
Download large files before package installation to reduce transaction time.
:::

**Current State:**
- Large packages (Steam, codecs, fonts) downloaded during dnf transaction
- Network latency affects transaction lock time
- Fonts from COPR particularly slow

**Optimization:**
```dockerfile
# Pre-fetch large packages to cache layer
RUN dnf download --downloadonly \
    steam \
    google-noto-* \
    nerd-fonts-* && \
    dnf install -y /var/cache/dnf/*/packages/*.rpm
```

**Expected Savings:** 3-5 minutes per build

**Implementation Effort:** Low - Test download-first approach

---

### 5. **Optimize Rechunking Process**

**Current State:**
- Rechunking happens after full build completes
- Uses sequential processing
- Required for all production images

**Optimization:**
- Investigate parallel rechunking if multiple images built
- Consider rechunking only for release builds, not PR testing
- Evaluate alternative chunking strategies

**Expected Savings:** Skip rechunking on PRs could save 3-4 minutes

**Implementation Effort:** Low - Add conditional `if: github.event_name != 'pull_request'`

---

### 6. **Eliminate Redundant Builds**

**Current State:**
- ublue-os/main has smart change detection (`check-build-required` job)
- Other repos don't use this pattern
- Duplicate work when base images unchanged

**Optimization:**
```yaml
jobs:
  check-changes:
    # Compare base image digest, skip if unchanged
  
  build:
    needs: check-changes
    if: needs.check-changes.outputs.build_required == 'true'
```

**Expected Savings:** Skip entire builds when only docs/CI changes

**Implementation Effort:** Medium - Port change detection logic from `main` repo

---

### 7. **Consolidate Workflow Files**

**Current State:**
- Multiple workflow files per repo (build-latest, build-stable, build-gts, build-beta)
- Each calls reusable workflow with different parameters
- Duplication in trigger configuration

**Optimization:**
- Single workflow file with matrix for streams
- Reduces maintenance burden
- Already using reusable workflows, just needs consolidation

**Expected Savings:** No direct time savings, but easier to optimize centrally

**Implementation Effort:** Low - Refactor existing workflows

---

### 8. **Kernel Cache Strategy (akmods)**

:::tip Already Optimized
The akmods repository uses kernel caching effectively.
:::

**Current State:**
- ✅ Kernel RPMs cached using `actions/cache`
- ✅ Fails fast if kernel cache missing
- ✅ Separate caching workflow (`reusable-cache-kernel.yml`)

**Potential Optimization:**
- Pre-populate kernel cache on schedule for upcoming kernel versions
- Use longer retention periods for stable kernels

**Expected Savings:** 1-2 minutes on cache misses (rare)

**Implementation Effort:** Low - Adjust cache strategy

---

### 9. **SBOM Generation Performance**

**Current State:**
- SBOM generation disabled (commented out) in workflows
- Was using syft with parallelism settings
- Adds 3-5 minutes when enabled

**Recommendation:**
- Generate SBOMs only for releases, not every build
- Use faster SBOM tools (trivy vs syft benchmarking)
- Generate asynchronously after push

**Expected Savings:** 3-5 minutes per build (if re-enabled)

**Implementation Effort:** Low - Add conditionals for release-only

---

### 10. **Reduce Matrix Permutations**

**Current State:**
- Bazzite builds ~20-30 variants (deck, desktop, gnome, handheld, htpc × nvidia/main × stable/testing)
- Many combinations rarely used

**Optimization:**
- Build only popular variants on PR/testing
- Build full matrix on release or schedule
- Use download stats to identify infrequently used variants

**Expected Savings:** 40-60% fewer builds on testing branches

**Implementation Effort:** Medium - Requires usage analytics and policy decisions

---

## Not Recommended (Already Optimized)

These patterns are already well-implemented:

1. ✅ **Concurrency Controls** - `cancel-in-progress: true` prevents redundant builds
2. ✅ **Storage Optimization** - `container-storage-action` maximizes build space
3. ✅ **Parallel Jobs** - Matrix strategies run variants in parallel
4. ✅ **Reusable Workflows** - Central workflow definitions reduce duplication
5. ✅ **Fail-Fast Disabled** - `fail-fast: false` allows full matrix completion for diagnostics

## Build Time Breakdown

Typical successful bazzite build (45 minutes total):

| Phase | Duration | % of Total |
|-------|----------|------------|
| Checkout & Setup | 1-2 min | 3% |
| Storage Setup | 1-2 min | 3% |
| Image Build (buildah) | 20-25 min | 55% |
| Rechunking | 3-4 min | 8% |
| Security Checks | 2-3 min | 6% |
| Push & Sign | 8-10 min | 22% |
| SBOM (if enabled) | 3-5 min | - |

**Primary bottleneck:** Base image building (package installation)

## Recommendations Summary

### Immediate Actions (< 1 week)

1. **Add path-based matrix filtering for PRs** - Target specific flavors that changed
2. **Skip rechunking on PR builds** - Save 3-4 minutes per variant
3. **Consolidate COPR repo files** - Parallel metadata fetching

### Short-term (1-4 weeks)

1. **Port change detection to all repos** - Skip unnecessary rebuilds
2. **Pre-fetch large dependencies** - Reduce dnf transaction time
3. **Consolidate workflow files** - Single entry point per repo
4. **Optimize matrix for testing vs release** - Fewer variants on PRs

### Long-term (1-3 months)

1. **Create shared builder images** - Common dependency layers
2. **Implement pre-population of kernel cache** - Proactive caching
3. **Analyze variant usage** - Data-driven matrix optimization
4. **Evaluate alternative base images** - Consider Fedora CoreOS patterns

## Related Work

- [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) - Gaming desktop builds
- [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) - Developer workstation builds
- [@ublue-os/aurora](https://github.com/ublue-os/aurora) - KDE desktop builds
- [@ublue-os/main](https://github.com/ublue-os/main) - Base image builds (already optimized)
- [@ublue-os/akmods](https://github.com/ublue-os/akmods) - Kernel module builds
- [COPR Analysis](./copr-analysis.md) - External repository dependencies

## References

- [GitHub Actions: Caching dependencies](https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows)
- [Buildah: Best practices](https://github.com/containers/buildah/blob/main/docs/tutorials/05-includes-in-your-build-tool.md)
- [container-storage-action](https://github.com/ublue-os/container-storage-action)
- [ublue-os build workflows](https://github.com/ublue-os/bluefin/tree/main/.github/workflows)

## Associated Issues

| Issue | Status | Priority | Link |
|-------|--------|----------|------|
| Build time optimization analysis | Open | Medium | N/A |

---

**Report Generated:** 2025-10-08

**Methodology:** Analyzed GitHub Actions workflows across major container-building repositories in [@ublue-os](https://github.com/ublue-os). Examined workflow YAML files, recent build runs, caching strategies, and matrix configurations. Focused on low-hanging fruit optimizations rather than deep architectural changes.

**Scope:** Analysis limited to container build pipelines. Did not examine ISO builds, package COPRs, or deployment workflows. Recommendations prioritize build time reduction while maintaining existing functionality and reliability.
