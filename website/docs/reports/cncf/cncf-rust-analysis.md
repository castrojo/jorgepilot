---
tags:
  - cncf
  - rust
  - programming-languages
last_updated: 2025-12-10
---

# CNCF Rust Projects Analysis

## Executive Summary

The CNCF ecosystem has embraced Rust for its performance, memory safety, and reliability characteristics. Currently, there are **2 graduated projects** (Linkerd and TiKV), and **7 sandbox projects** written in or significantly utilizing Rust. This report focuses exclusively on official CNCF projects, demonstrating Rust's proven viability for production-grade cloud native infrastructure.

## Overview

This report analyzes Rust adoption within the Cloud Native Computing Foundation (CNCF) landscape. Data is sourced from the official [@cncf/landscape](https://github.com/cncf/landscape) repository, which serves as the single source of truth for CNCF projects. The analysis categorizes projects by their CNCF maturity level: Graduated, Incubating, and Sandbox.

:::info Data Source
All project data sourced from [@cncf/landscape](https://github.com/cncf/landscape) - landscape.yml (December 2025)
:::

## Key Findings

| Metric              | Value      | Notes                        |
| ------------------- | ---------- | ---------------------------- |
| Total CNCF Rust Projects | 9     | Official CNCF projects only  |
| Graduated           | 2          | Linkerd, TiKV                |
| Incubating          | 0          | None currently               |
| Sandbox             | 7          | Active development stage     |
| First Accepted      | 2017-01-23 | Linkerd                      |
| Most Recent         | 2024-10-22 | Youki                        |

## Graduated Projects

### Linkerd

**Status:** [Graduated](https://landscape.cncf.io/?selected=linkerd) (2021-07-28) | **Accepted:** 2017-01-23

Linkerd is a service mesh that provides security, observability, and reliability to Kubernetes applications without code changes. It's built with both Go and Rust components, with the data plane (linkerd2-proxy) written entirely in Rust for maximum performance and safety.

| Property         | Details                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| **Description**  | Ultra light, ultra simple, ultra powerful service mesh                                          |
| **Repository**   | [linkerd/linkerd2](https://github.com/linkerd/linkerd2)                                         |
| **Homepage**     | [linkerd.io](https://linkerd.io/)                                                               |
| **Languages**    | Go, Rust                                                                                        |
| **Key Features** | mTLS, observability, multi-cluster, load balancing, traffic authorization, security, zero trust |
| **Target Users** | SREs, DevOps Engineers, Architects                                                              |
| **Dev Stats**    | [linkerd.devstats.cncf.io](https://linkerd.devstats.cncf.io/)                                   |
| **Last Activity**| December 2025 (Active)                                                                          |

**Security Audits:**

- **2019-06-01**: Security audit by Cure53
- **2020-06-05**: Rustls TLS library audit by Cure53
- **2022-06-28**: Security audit by Trail of Bits

**Why Rust?** Linkerd's data plane proxy (linkerd2-proxy) is written in Rust to achieve ultra-low overhead, memory safety without garbage collection, and blazing fast performance critical for service mesh operations.

**Recent Activity (December 2025):**
- Native sidecar container support improvements
- Active dependency updates and maintenance
- Regular release cadence maintained

---

### TiKV

**Status:** [Graduated](https://landscape.cncf.io/?selected=tikv) (2020-09-02) | **Accepted:** 2018-08-28

TiKV is a distributed transactional key-value database, originally created to complement TiDB. It is written entirely in Rust and represents one of the largest Rust codebases in production.

| Property         | Details                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| **Description**  | Distributed transactional key-value database                                                    |
| **Repository**   | [tikv/tikv](https://github.com/tikv/tikv)                                                       |
| **Homepage**     | [tikv.org](https://tikv.org/)                                                                   |
| **Languages**    | Rust (100% core)                                                                                |
| **Key Features** | ACID transactions, horizontal scalability, Raft consensus, RocksDB storage engine               |
| **Stars**        | 16,355+                                                                                         |
| **Dev Stats**    | [tikv.devstats.cncf.io](https://tikv.devstats.cncf.io/)                                         |
| **Last Activity**| December 2025 (Active)                                                                          |

**Why Rust?** TiKV chose Rust for its memory safety guarantees without garbage collection, critical for a database where predictable latency and data integrity are paramount. The language's zero-cost abstractions allow high-level code without runtime overhead.

## Sandbox Projects

### Akri

**Status:** [Sandbox](https://landscape.cncf.io/?selected=akri) | **Accepted:** 2021-09-14

Akri is a Kubernetes Resource Interface for the Edge, enabling Kubernetes to discover and utilize IoT devices as resources. Written entirely in Rust.

| Property          | Details                                                                                                               |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Repository**    | [project-akri/akri](https://github.com/project-akri/akri)                                                             |
| **Homepage**      | [docs.akri.sh](https://docs.akri.sh)                                                                                  |
| **Dev Stats**     | [akri.devstats.cncf.io](https://akri.devstats.cncf.io/)                                                               |
| **Slack**         | [#akri](https://kubernetes.slack.com/messages/C01D9L7QE8Z)                                                            |
| **Annual Review** | [2023-06-13](https://github.com/cncf/toc/pull/1080)                                                                   |
| **Last Activity** | November 2025 (Active)                                                                                                |

**Pure Rust:** Core agent and controller components written entirely in Rust for edge device discovery and management.

---

### Confidential Containers

**Status:** [Sandbox](https://landscape.cncf.io/?selected=confidential-containers) | **Accepted:** 2022-03-08

Enables cloud native confidential computing by leveraging Trusted Execution Environments (TEEs) to protect containers and data.

| Property          | Details                                                                                                               |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Repository**    | [confidential-containers/confidential-containers](https://github.com/confidential-containers/confidential-containers) |
| **Homepage**      | [confidentialcontainers.org](https://confidentialcontainers.org/)                                                     |
| **Dev Stats**     | [confidentialcontainers.devstats.cncf.io](https://confidentialcontainers.devstats.cncf.io/)                           |
| **Slack**         | [#confidential-containers](https://cloud-native.slack.com/)                                                           |
| **Annual Review** | [2023-06-15](https://github.com/cncf/toc/pull/1084)                                                                   |
| **Last Activity** | December 2025 (Active)                                                                                                |

**Rust Components:** Uses Rust for security-critical components interfacing with TEE technologies. Recent maintainer updates show active governance (December 2025).

---

### Keylime

**Status:** [Sandbox](https://landscape.cncf.io/?selected=keylime) | **Accepted:** 2020-09-22

Bootstrap and maintain trust on the Edge, Cloud, and IoT devices using remote attestation.

| Property          | Details                                                       |
| ----------------- | ------------------------------------------------------------- |
| **Repository**    | [keylime/keylime](https://github.com/keylime/keylime)         |
| **Homepage**      | [keylime.dev](https://keylime.dev/)                           |
| **Dev Stats**     | [keylime.devstats.cncf.io](https://keylime.devstats.cncf.io/) |
| **Slack**         | [#Keylime](https://cloud-native.slack.com/messages/keylime)   |
| **Annual Review** | [2022-11-10](https://github.com/cncf/toc/pull/959)            |
| **Last Activity** | December 2025 (Active)                                        |

**Rust Components:** Keylime has Rust components (keylime-agent) for secure, low-level system interactions and cryptographic operations. Recent security fixes include UUID vulnerability patches (December 2025).

---

### kube-rs

**Status:** [Sandbox](https://landscape.cncf.io/?selected=kube) | **Accepted:** 2021-11-16

The core Rust ecosystem for building Kubernetes applications, providing idiomatic Rust interfaces for Kubernetes APIs.

| Property       | Details                                                 |
| -------------- | ------------------------------------------------------- |
| **Repository** | [kube-rs/kube](https://github.com/kube-rs/kube)         |
| **Homepage**   | [kube.rs](https://kube.rs)                              |
| **Dev Stats**  | [kube.devstats.cncf.io](https://kube.devstats.cncf.io/) |
| **Slack**      | [#kube-rs](https://kubernetes.slack.com/)               |
| **Last Activity** | December 2025 (Active)                               |

**Pure Rust:** Complete Rust client library for Kubernetes, enabling developers to build controllers, operators, and tools entirely in Rust. Recently updated to rustfmt 2024 edition (December 2025).

---

### Kubewarden

**Status:** [Sandbox](https://landscape.cncf.io/?selected=kubewarden) | **Accepted:** 2022-06-17

WebAssembly-powered Kubernetes policy engine supporting policies written in multiple languages including Rust, Go, CEL, Rego, and YAML.

| Property          | Details                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------- |
| **Repository**    | [kubewarden/kubewarden-controller](https://github.com/kubewarden/kubewarden-controller) |
| **Homepage**      | [kubewarden.io](https://www.kubewarden.io)                                              |
| **Dev Stats**     | [kubewarden.devstats.cncf.io](https://kubewarden.devstats.cncf.io/)                     |
| **Slack**         | [#kubewarden](https://kubernetes.slack.com/)                                            |
| **Annual Review** | [2023-10-10](https://github.com/cncf/toc/pull/1162)                                     |
| **Last Activity** | December 2025 (Active)                                                                  |

**Rust Usage:** Core runtime written in Rust; supports policy development in Rust for maximum performance and safety. Active dependency updates as of December 2025.

---

### Paralus

**Status:** [Sandbox](https://landscape.cncf.io/?selected=paralus) | **Accepted:** 2022-12-14

Free, open source tool enabling controlled, audited access to Kubernetes infrastructure with zero trust security model.

| Property       | Details                                                       |
| -------------- | ------------------------------------------------------------- |
| **Repository** | [paralus/paralus](https://github.com/paralus/paralus)         |
| **Homepage**   | [paralus.io](https://www.paralus.io/)                         |
| **Dev Stats**  | [paralus.devstats.cncf.io](https://paralus.devstats.cncf.io/) |
| **Slack**      | [#paralus](https://paralus.io/slack)                          |
| **Last Activity** | August 2025 (Maintenance mode)                             |

**Note:** Paralus shows reduced activity in 2025, with primarily automated dependency updates. The project may benefit from additional community engagement.

---

### Youki

**Status:** [Sandbox](https://landscape.cncf.io/?selected=youki) | **Accepted:** 2024-10-22

Youki is an OCI-compliant low-level container runtime written entirely in Rust. It serves as an alternative to runc, offering improved performance and memory safety.

| Property          | Details                                                       |
| ----------------- | ------------------------------------------------------------- |
| **Repository**    | [youki-dev/youki](https://github.com/youki-dev/youki)         |
| **Homepage**      | [youki.dev](https://containers.github.io/youki/)              |
| **Dev Stats**     | [youki.devstats.cncf.io](https://youki.devstats.cncf.io/)     |
| **Slack**         | [#youki](https://cloud-native.slack.com/)                     |
| **Stars**         | 7,100+                                                        |
| **Last Activity** | December 2025 (Active)                                        |

**Pure Rust:** Complete OCI container runtime implementation in Rust. Youki is approximately 2x faster than runc in container creation benchmarks due to Rust's performance characteristics and lack of garbage collection overhead.

**Key Adopters:**
- Azure Kubernetes Service (for Wasm workloads)
- containerd/runwasi
- Docker

**Why Rust?** Youki demonstrates that Rust can deliver the same functionality as Go-based runtimes while eliminating certain security vulnerabilities inherent to mixed C/Go implementations. The language choice enables a pure Rust implementation without the constraints faced by Go's runtime.

## Analysis

:::info Key Insight
Rust's adoption in CNCF projects centers on security-critical and performance-sensitive workloads, with two graduated projects (Linkerd, TiKV) proving Rust's viability at the highest maturity level.
:::

### CNCF Rust Projects by Maturity

| Project | Maturity | Accepted | Focus Area | Activity (Dec 2025) |
|---------|----------|----------|------------|---------------------|
| **Linkerd** | Graduated | 2017-01-23 | Service Mesh | Active |
| **TiKV** | Graduated | 2018-08-28 | Database | Active |
| **Keylime** | Sandbox | 2020-09-22 | Security/TPM | Active |
| **Akri** | Sandbox | 2021-09-14 | IoT/Edge | Active |
| **kube-rs** | Sandbox | 2021-11-16 | Kubernetes SDK | Active |
| **Confidential Containers** | Sandbox | 2022-03-08 | Security/TEE | Active |
| **Kubewarden** | Sandbox | 2022-06-17 | Policy Engine | Active |
| **Paralus** | Sandbox | 2022-12-14 | Zero Trust Access | Maintenance |
| **Youki** | Sandbox | 2024-10-22 | Container Runtime | Active |

### Adoption Trends

- **Database Leadership**: TiKV proves Rust's viability for large-scale distributed databases with 16,000+ stars
- **Service Mesh Pioneer**: Linkerd, the only graduated service mesh in CNCF using Rust, demonstrates production-grade performance
- **Container Runtime Innovation**: Youki brings pure Rust to OCI container runtimes, demonstrating 2x performance over runc
- **Security Focus**: 5 of 9 CNCF Rust projects focus on security (Confidential Containers, Keylime, Kubewarden, Paralus, TiKV)
- **Zero Trust**: Multiple projects leverage Rust for implementing zero trust security architectures
- **Performance Critical**: Projects choosing Rust cite performance, memory safety, and reliability as key factors

### Why Rust for Cloud Native?

1. **Memory Safety**: No garbage collection, preventing unpredictable latencies
2. **Performance**: Near C/C++ performance without memory safety trade-offs
3. **Concurrency**: Safe, efficient concurrent programming models
4. **WebAssembly**: First-class Wasm support for portable, sandboxed execution
5. **Type Safety**: Strong type system catches errors at compile time
6. **Zero-Cost Abstractions**: High-level ergonomics with no runtime overhead

### Growth Trajectory

```
2017: Linkerd accepted (first CNCF Rust project)
2018: TiKV accepted
2020: Keylime accepted, TiKV graduates
2021: Akri, kube-rs accepted; Linkerd graduates
2022: Confidential Containers, Kubewarden, Paralus accepted
2023-2024: Continued focus on security and performance-critical components
2024: Youki accepted (first pure Rust OCI runtime in CNCF)
```

## Project Health Summary

| Project | Commits (2025) | Contributors | Release Cadence | Health |
|---------|----------------|--------------|-----------------|--------|
| Linkerd | High | Multi-org | Regular | ✅ Excellent |
| TiKV | High | Multi-org | Regular | ✅ Excellent |
| Youki | High | Multi-org | Regular | ✅ Excellent |
| kube-rs | High | Multi-org | Regular | ✅ Good |
| Keylime | High | Multi-org | Regular | ✅ Good |
| Confidential Containers | Moderate | Multi-org | Regular | ✅ Good |
| Kubewarden | Moderate | SUSE-led | Regular | ✅ Good |
| Akri | Low | Microsoft-led | Infrequent | ⚠️ Moderate |
| Paralus | Low | Single-org | Infrequent | ⚠️ Needs attention |

## Related Work

- [CNCF Landscape](https://github.com/cncf/landscape) - Official CNCF projects and landscape data
- [CNCF Projects](https://www.cncf.io/projects/) - Official CNCF project directory
- [Linkerd](https://linkerd.io/) - Graduated service mesh
- [TiKV](https://tikv.org/) - Graduated distributed database
- [Youki](https://containers.github.io/youki/) - Sandbox container runtime
- [Rust Programming Language](https://www.rust-lang.org/) - Official Rust website

## References

- [CNCF Landscape Data](https://github.com/cncf/landscape/blob/main/landscape.yml) - Source of truth for CNCF projects
- [Linkerd Graduation Announcement](https://www.cncf.io/announcements/2021/07/28/cloud-native-computing-foundation-announces-linkerd-graduation/)
- [TiKV Graduation Announcement](https://www.cncf.io/announcements/2020/09/02/cloud-native-computing-foundation-announces-tikv-graduation/)
- [CNCF Technical Oversight Committee](https://github.com/cncf/toc)

## Changelog

| Date | Change |
|------|--------|
| 2025-12-10 | Added Youki as newly accepted sandbox project; updated project count to 9; refreshed all activity data |
| 2025-12-10 | Updated with fresh project activity data; added TiKV as second graduated project; removed non-CNCF projects per scope requirements; added health summary table |
| 2025-10-12 | Initial report |

---

**Report Generated:** 2025-12-10

**Data Source:** CNCF Landscape (landscape.yml), GitHub API

**Methodology:** Analyzed the official CNCF landscape repository to identify all projects with Rust components or implementations. Projects were categorized by CNCF maturity level (Graduated, Incubating, Sandbox). Activity data collected from GitHub repository commits and releases.

**Note on Data:** This report focuses exclusively on official CNCF projects. Many additional cloud native projects use Rust but are not included unless they are part of the CNCF.
