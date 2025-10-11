---
tags:
  - ublue
---

# ublue-os Build Pipeline Optimization Opportunities

## Executive Summary

Analysis of container build pipelines across [@ublue-os](https://github.com/ublue-os) reveals opportunities to reduce build times. Key repositories already use modern caching and parallelization, with builds averaging 30-45 minutes. Quick wins include layer caching improvements, dependency pre-fetching, matrix optimization, and workflow consolidation.

## Overview

This analysis examines GitHub Actions workflows building OCI container images across the ublue-os ecosystem:

- [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) - Gaming desktop (6,429 stars)
- [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) - Developer workstation (2,000 stars)
- [@ublue-os/aurora](https://github.com/ublue-os/aurora) - KDE desktop (375 stars)
- [@ublue-os/main](https://github.com/ublue-os/main) - Base Fedora images (618 stars)
- [@ublue-os/akmods](https://github.com/ublue-os/akmods) - Kernel module infrastructure (69 stars)

## Key Findings

| Metric | Value | Notes |
|--------|-------|-------|
| Average Build Time | 30-45 min | Successful full matrix builds |
| Matrix Size (Bazzite) | 20-30 jobs | Multiple flavors × base types × streams |
| Matrix Size (Bluefin/Aurora) | 6-12 jobs | Flavors × base types |
| Storage Action Usage | ✅ Used | container-storage-action for space |
| Kernel Cache | ✅ Used | GitHub Actions cache for RPMs |
| Rechunking Enabled | ✅ Yes | Reduces layer sizes post-build |

## Analysis

### Current State

**Existing Optimizations:**
- GitHub Actions cache for RPM downloads
- container-storage-action for disk space management
- Rechunking to reduce layer sizes
- Reusable workflows reduce duplication

**Build Bottlenecks:**
- COPR repository enablement (serial operations)
- DNF metadata refresh on each build
- Full matrix builds even for small changes
- RPM package downloads without pre-fetching

### Optimization Opportunities

**1. Smarter Matrix Scheduling**

Build only changed variants on PRs instead of full matrix. Use path-based filtering to detect which image flavors require rebuilding. Potential savings: 20-30 minutes on PR builds.

**2. Parallel COPR Repository Enablement**

Current implementation enables COPR repos serially. Consolidate repo files and run single `dnf makecache` operation. Expected savings: 2-4 minutes per build.

**3. Base Layer Caching**

Create pre-built base layer images with common dependencies. Downstream images pull cached base instead of rebuilding. Savings: 10-15 minutes on incremental builds.

**4. Dependency Pre-fetching**

Download common RPM packages to GitHub Actions cache before build. Avoids repeated downloads across matrix jobs. Savings: 3-5 minutes per job.

**5. Matrix Optimization**

Reduce matrix size by consolidating similar variants. Use build-time arguments instead of separate jobs where possible. Savings: Reduces total CI time but not individual job time.

**6. Workflow Consolidation**

Single workflow file with matrix for streams instead of multiple files per repo. Reduces maintenance burden and enables centralized optimization. Savings: No direct time savings but easier optimization.

### Not Recommended

**Parallel Job Multiplication:** GitHub Actions has concurrency limits. Excessive parallelization risks job queuing.

**SBOM Re-enabling:** Currently disabled. Would add 5-10 minutes to build time without clear benefit for image-based distribution.

**External Registry Caching:** Complexity and cost outweigh benefits for current scale.

## Recommendations

### High Priority

1. Implement smarter matrix scheduling for PR builds
2. Consolidate COPR repository enablement
3. Create base layer caching strategy

### Medium Priority

1. Add dependency pre-fetching
2. Optimize matrix configurations
3. Consolidate workflow files

### Low Priority

1. Investigate rechunking optimization
2. Profile build steps for additional bottlenecks

## Related Work

- [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) - Gaming desktop builds
- [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) - Developer workstation builds
- [@ublue-os/aurora](https://github.com/ublue-os/aurora) - KDE desktop builds
- [@ublue-os/main](https://github.com/ublue-os/main) - Base image builds
- [@ublue-os/akmods](https://github.com/ublue-os/akmods) - Kernel module builds
- [COPR Analysis](./copr-analysis.md) - External repository dependencies

## References

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [container-storage-action](https://github.com/marketplace/actions/container-storage-action)
- [Universal Blue](https://universal-blue.org/)

---

**Analysis Date:** October 2025  
**Methodology:** GitHub Actions workflow analysis, build log review, and timing measurements
