---
tags:
  - cncf
  - rust
  - programming-languages
last_updated: 2025-12-10
---

# CNCF Rust Projects Analysis

## Executive Summary

The CNCF ecosystem has embraced Rust for its performance, memory safety, and reliability characteristics. This report identifies **20 CNCF projects** utilizing Rust, categorized by whether they are **pure Rust implementations** or projects with **Rust components**.

**Pure Rust Projects (7):**
- **Graduated:** TiKV (24.8M LOC)
- **Incubating:** wasmCloud (122 crates)
- **Sandbox:** Youki (OCI runtime), bootc (1.7M LOC), Akri, kube-rs, Kubewarden

**Projects with Rust Components (13):**
- **Graduated:** Linkerd, containerd, Dragonfly, Istio, Falco, TUF, in-toto
- **Incubating:** OpenTelemetry, Chaos Mesh
- **Sandbox:** Confidential Containers, Keylime, Kuasar, Paralus

## Overview

This report analyzes Rust adoption within the Cloud Native Computing Foundation (CNCF) landscape. Data is sourced from the official [@cncf/landscape](https://github.com/cncf/landscape) repository, which serves as the single source of truth for CNCF projects. The analysis categorizes projects by their CNCF maturity level: Graduated, Incubating, and Sandbox.

:::info Data Source
All project data sourced from [@cncf/landscape](https://github.com/cncf/landscape) - landscape.yml (December 2025)
:::

## Key Findings

| Metric                     | Value | Notes                                    |
| -------------------------- | ----- | ---------------------------------------- |
| **Total CNCF Rust Projects** | 20  | Official CNCF projects only              |
| **Pure Rust Projects**     | 7     | Core implementation entirely in Rust     |
| **Rust Component Projects**| 13    | Significant Rust components or SDKs      |
| Graduated                  | 8     | 1 pure Rust, 7 with Rust components      |
| Incubating                 | 3     | 1 pure Rust, 2 with Rust components      |
| Sandbox                    | 9     | 5 pure Rust, 4 with Rust components      |
| First Accepted             | 2017-01-23 | Linkerd                             |
| Most Recent                | 2025-01-21 | bootc                               |

### Rust Lines of Code Summary

| Project | Type | Rust LOC | Primary Language |
|---------|------|----------|------------------|
| **TiKV** | Pure Rust | 24,814,809 | Rust |
| **Dragonfly** (nydus+client) | Components | 3,941,080 | Go + Rust |
| **bootc** | Pure Rust | 1,694,355 | Rust |
| **Linkerd** (proxy) | Component | 1,485,071 | Go + Rust |
| **Istio** (ztunnel) | Component | 1,318,825 | Go + Rust |
| **containerd** (3 repos) | Components | 1,207,012 | Go + Rust |
| **Falco** (plugin-sdk) | Component | 1,271,214 | C++ + Rust |
| **TUF** (rust-tuf) | Implementation | 642,891 | Python/Go/Rust |
| **Youki** | Pure Rust | ~500,000 | Rust |
| **in-toto** (in-toto-rs) | Implementation | 299,757 | Python/Go/Rust |

## Graduated Projects

:::tip Pure Rust Graduated Project
**TiKV** is the only graduated CNCF project written entirely in Rust (24.8M LOC).
:::

### [TiKV](https://tikv.org/) ⭐ Pure Rust

- Status: [Graduated](https://landscape.cncf.io/?selected=tikv) (2020-09-02)
- Accepted: 2018-08-28

TiKV is a distributed transactional key-value database, originally created to complement TiDB. It is written entirely in Rust and represents one of the largest Rust codebases in production.

- Repository: [tikv/tikv](https://github.com/tikv/tikv)
- Languages: Rust (100% core)
- Rust LOC: 24,814

**Why Rust?** TiKV chose Rust for its memory safety guarantees without garbage collection, critical for a database where predictable latency and data integrity are paramount. The language's zero-cost abstractions allow high-level code without runtime overhead.

**Known Adopters:**
TiKV powers TiDB, used by organizations including PingCAP, ByteDance, and numerous enterprises running distributed SQL workloads. TiKV is a core component of the TiDB ecosystem serving production workloads globally.

---

### [Linkerd](https://linkerd.io/) (Rust Component)

- Status: [Graduated](https://landscape.cncf.io/?selected=linkerd) (2021-07-28)
- Accepted: 2017-01-23

Linkerd is a service mesh providing security, observability, and reliability. The data plane proxy (linkerd2-proxy) is written in Rust.

- Repository: [linkerd/linkerd2](https://github.com/linkerd/linkerd2)
- Languages: Go (control plane), Rust (data plane proxy)
- Rust LOC: 1,485,071 (linkerd2-proxy)

**Why Rust?** Linkerd's data plane proxy is written in Rust to achieve ultra-low overhead, memory safety without garbage collection, and blazing fast performance critical for service mesh operations.

**Known Adopters (100+):** Microsoft, Expedia, Nordstrom, HP Inc, AT&T, Adidas, M1 Finance, Docker, Buoyant, Giant Swarm. See [full adopters list](https://github.com/linkerd/linkerd2/blob/main/ADOPTERS.md).

---

### [containerd](https://containerd.io/) (Rust Components)

- Status: [Graduated](https://landscape.cncf.io/?selected=containerd) (2019-02-28)
- Accepted: 2017-03-29

containerd is an industry-standard container runtime. While the core is Go, it maintains significant Rust components for WebAssembly support and low-level interfaces.

- Repository: [containerd/containerd](https://github.com/containerd/containerd)
- Languages: Go (core), Rust (Wasm/ttrpc components)
- Rust LOC: 1,207,012 (across 3 repos)

**Rust Components:** [runwasi](https://github.com/containerd/runwasi) (335k), [ttrpc-rust](https://github.com/containerd/ttrpc-rust) (400k), [rust-extensions](https://github.com/containerd/rust-extensions) (471k)

**Why Rust?** containerd uses Rust for WebAssembly runtime support (runwasi) and low-level RPC protocols (ttrpc) where memory safety and performance are critical.

---

### [Dragonfly](https://d7y.io/) (Rust Components)

- Status: [Graduated](https://landscape.cncf.io/?selected=dragonfly) (2024-09-03)
- Accepted: 2018-10-25

Dragonfly is a P2P-based image and file distribution system. The project uses Rust extensively for its image service (nydus) and client.

- Repository: [dragonflyoss/Dragonfly2](https://github.com/dragonflyoss/Dragonfly2)
- Languages: Go (scheduler), Rust (nydus, client)
- Rust LOC: 3,941,080 (across 2 repos)

**Rust Components:** [nydus](https://github.com/dragonflyoss/nydus) (2.4M), [client](https://github.com/dragonflyoss/client) (1.5M)

**Why Rust?** Dragonfly chose Rust for nydus to achieve high-performance container image loading with memory safety.

---

### [Istio](https://istio.io/) (Rust Component)

- Status: [Graduated](https://landscape.cncf.io/?selected=istio) (2023-07-12)
- Accepted: 2020-03-03

Istio is a service mesh for microservices. The ztunnel component for ambient mesh is written entirely in Rust.

- Repository: [istio/istio](https://github.com/istio/istio)
- Languages: Go (control plane), Rust (ztunnel)
- Rust LOC: 1,318,825 ([ztunnel](https://github.com/istio/ztunnel))

**Why Rust?** Istio chose Rust for ztunnel to achieve the performance and security requirements of ambient mesh. The ztunnel proxy handles L4 traffic processing where Rust's memory safety and performance are critical.

---

### [Falco](https://falco.org/) (Rust Component)

- Status: [Graduated](https://landscape.cncf.io/?selected=falco) (2024-01-29)
- Accepted: 2018-10-10

Falco is a cloud-native runtime security project. The project provides Rust SDKs for plugin development.

- Repository: [falcosecurity/falco](https://github.com/falcosecurity/falco)
- Languages: C++ (core), Rust (plugin SDK)
- Rust LOC: 1,271,214 ([plugin-sdk-rs](https://github.com/falcosecurity/plugin-sdk-rs))

**Why Rust?** Falco provides Rust SDK support to enable plugin development with memory safety guarantees, important for security tooling.

---

### [TUF](https://theupdateframework.io/) (Rust Implementation)

- Status: [Graduated](https://landscape.cncf.io/?selected=the-update-framework-tuf) (2023-02-09)
- Accepted: 2017-10-24

TUF is a framework for securing software update systems. The project maintains an official Rust implementation.

- Repository: [theupdateframework/specification](https://github.com/theupdateframework/specification)
- Languages: Python (reference), Go, Rust
- Rust LOC: 642,891 ([rust-tuf](https://github.com/theupdateframework/rust-tuf))

**Why Rust?** TUF's Rust implementation provides memory-safe update verification critical for supply chain security.

---

### [in-toto](https://in-toto.io/) (Rust Implementation)

- Status: [Graduated](https://landscape.cncf.io/?selected=in-toto) (2023-07-12)
- Accepted: 2019-08-21

in-toto is a framework to secure the integrity of software supply chains. The project maintains a Rust implementation.

- Repository: [in-toto/in-toto](https://github.com/in-toto/in-toto)
- Languages: Python (reference), Go, Rust
- Rust LOC: 299,757 ([in-toto-rs](https://github.com/in-toto/in-toto-rs))

**Why Rust?** in-toto's Rust implementation ensures memory-safe handling of cryptographic attestations and supply chain metadata.

## Incubating Projects

:::tip Pure Rust Incubating Project
**wasmCloud** is the only incubating CNCF project written entirely in Rust (122 crates).
:::

### [wasmCloud](https://wasmcloud.com) ⭐ Pure Rust

- Status: [Incubating](https://landscape.cncf.io/?selected=wasmcloud)
- Accepted: 2021-07-13

wasmCloud is a platform for building distributed applications using WebAssembly components. The entire project is written in Rust.

- Repository: [wasmCloud/wasmCloud](https://github.com/wasmCloud/wasmCloud)
- Languages: Rust (100% core)
- Rust Crates: 122 Cargo.toml files

**Pure Rust Components:** Host runtime, CLI tools (wash), application deployment manager (wadm), Wasmtime integration.

**Why Rust?** wasmCloud chose Rust for its first-class WebAssembly support, memory safety, and performance.

**Known Adopters:** Cosmonic (Production), BMW AG, MachineMetrics, Orange, SigScale. See [full adopters list](https://github.com/wasmCloud/wasmCloud/blob/main/ADOPTERS.md).

---

### [OpenTelemetry](https://opentelemetry.io/) (Rust Components)

- Status: [Incubating](https://landscape.cncf.io/?selected=opentelemetry)
- Accepted: 2019-05-07

OpenTelemetry provides APIs, SDKs, and tools for telemetry data. The project maintains official Rust SDKs.

- Repository: [open-telemetry/opentelemetry-rust](https://github.com/open-telemetry/opentelemetry-rust)
- Languages: Go (collector), Rust (SDK)
- Rust Crates: 143 Cargo.toml files

**Rust Components:** opentelemetry-rust (core SDK), opentelemetry-rust-contrib, weaver (pure Rust CLI), opentelemetry-ebpf-profiler, opentelemetry-network.

**Why Rust?** OpenTelemetry chose Rust for its SDK to provide zero-overhead instrumentation, memory safety without garbage collection pauses, and excellent async support.

---

### [Chaos Mesh](https://chaos-mesh.org/) (Rust Components)

- Status: [Incubating](https://landscape.cncf.io/?selected=chaos-mesh)
- Accepted: 2020-07-15

Chaos Mesh is a Chaos Engineering platform. The project uses Rust for chaos injection components.

- Repository: [chaos-mesh/chaos-mesh](https://github.com/chaos-mesh/chaos-mesh)
- Languages: Go (controller), Rust (chaos injection)
- Rust LOC: ~200,000 (across 4 repos)

**Rust Components:** [toda](https://github.com/chaos-mesh/toda) (156k), chaos-tproxy (~20k), nsexec (~15k), iproute2-rs (~10k)

**Why Rust?** Chaos Mesh uses Rust for low-level system interactions where memory safety and performance are critical.

**Known Adopters (40+):** ByteDance, Tencent, PingCAP (TiDB), Microsoft Azure Chaos Studio, Percona, GreptimeDB. See [full adopters list](https://github.com/chaos-mesh/chaos-mesh/blob/master/ADOPTERS.md).

## Sandbox Projects

:::tip Pure Rust Sandbox Projects
**5 of 9 sandbox projects** are written entirely in Rust: Youki, bootc, Akri, kube-rs, and Kubewarden.
:::

### [Youki](https://containers.github.io/youki/) ⭐ Pure Rust

- Status: [Sandbox](https://landscape.cncf.io/?selected=youki)
- Accepted: 2024-10-22

Youki is an OCI-compliant low-level container runtime written entirely in Rust.

- Repository: [youki-dev/youki](https://github.com/youki-dev/youki)
- Languages: Rust (100%)
- Rust LOC: ~500,000

**Why Rust?** Youki is 2x faster than runc in container creation due to Rust's performance and lack of garbage collection overhead.

**Known Adopters:** Azure Kubernetes Service (Wasm workloads), containerd/runwasi, Docker

---

### [bootc](https://containers.github.io/bootc/) ⭐ Pure Rust

- Status: [Sandbox](https://landscape.cncf.io/?selected=bootc)
- Accepted: 2025-01-21

bootc provides transactional OS updates using OCI container images. Written almost entirely in Rust.

- Repository: [containers/bootc](https://github.com/containers/bootc)
- Languages: Rust (100%)
- Rust LOC: 1,694,355

**Why Rust?** bootc requires memory safety for OS update operations. Direct interaction with bootloaders, filesystems, and OS internals makes Rust ideal.

---

### [Akri](https://docs.akri.sh) ⭐ Pure Rust

- Status: [Sandbox](https://landscape.cncf.io/?selected=akri)
- Accepted: 2021-09-14

Akri is a Kubernetes Resource Interface for the Edge. Written entirely in Rust.

- Repository: [project-akri/akri](https://github.com/project-akri/akri)
- Languages: Rust (100%)

**Pure Rust:** Core agent and controller for edge device discovery and management.

---

### [kube-rs](https://kube.rs) ⭐ Pure Rust

- Status: [Sandbox](https://landscape.cncf.io/?selected=kube)
- Accepted: 2021-11-16

kube-rs is the core Rust ecosystem for building Kubernetes applications. Written entirely in Rust.

- Repository: [kube-rs/kube](https://github.com/kube-rs/kube)
- Languages: Rust (100%)

**Pure Rust:** Complete Kubernetes client library enabling controllers, operators, and tools entirely in Rust.

---

### [Kubewarden](https://www.kubewarden.io) ⭐ Pure Rust

- Status: [Sandbox](https://landscape.cncf.io/?selected=kubewarden)
- Accepted: 2022-06-17

Kubewarden is a WebAssembly-powered Kubernetes policy engine. Core runtime written in Rust.

- Repository: [kubewarden/kubewarden-controller](https://github.com/kubewarden/kubewarden-controller)
- Languages: Rust (core runtime)

**Rust Usage:** Core runtime written in Rust; supports policy development in Rust for maximum performance.

---

### [Confidential Containers](https://confidentialcontainers.org/) (Rust Components)

- Status: [Sandbox](https://landscape.cncf.io/?selected=confidential-containers)
- Accepted: 2022-03-08

Enables cloud native confidential computing by leveraging Trusted Execution Environments (TEEs).

- Repository: [confidential-containers/confidential-containers](https://github.com/confidential-containers/confidential-containers)
- Languages: Multiple, Rust (TEE components)

**Rust Components:** Security-critical components interfacing with TEE technologies.

**Known Adopters:** Alibaba Cloud, IBM LinuxONE, Red Hat, Intel, ByteDance, Edgeless Systems. See [full adopters list](https://github.com/confidential-containers/confidential-containers/blob/main/ADOPTERS.md).

---

### [Keylime](https://keylime.dev/) (Rust Components)

- Status: [Sandbox](https://landscape.cncf.io/?selected=keylime)
- Accepted: 2020-09-22

Remote attestation for Edge, Cloud, and IoT devices. Has Rust agent component.

- Repository: [keylime/keylime](https://github.com/keylime/keylime)
- Languages: Python, Rust (agent)

**Rust Component:** keylime-agent for secure system interactions and cryptographic operations.

---

### [Kuasar](https://kuasar.io/) (Rust Components)

- Status: [Sandbox](https://landscape.cncf.io/?selected=kuasar)
- Accepted: 2023-09-05

Multi-sandbox container runtime. Significant Rust components for runtime shims and sandboxers.

- Repository: [kuasar-io/kuasar](https://github.com/kuasar-io/kuasar)
- Languages: Go, Rust (shim, sandboxers)

**Rust Components:** Shim, VMM sandboxer, and Wasm sandboxer are written in Rust.

**Known Adopters:** Menging Software, Huawei Cloud Native, iSulad

---

### [Paralus](https://www.paralus.io/) (Rust Components)

- Status: [Sandbox](https://landscape.cncf.io/?selected=paralus)
- Accepted: 2022-12-14

Zero trust Kubernetes access. Has Rust components for secure operations.

- Repository: [paralus/paralus](https://github.com/paralus/paralus)
- Languages: Go, Rust (components)

**Note:** Reduced activity in 2025; may benefit from additional community engagement.

## Analysis

:::info Key Insight
Rust's adoption in CNCF projects centers on security-critical and performance-sensitive workloads, with eight graduated projects now using Rust components proving Rust's viability at the highest maturity level.
:::

### CNCF Rust Projects Summary

| Type | Project | Maturity | Rust LOC | Description |
|------|---------|----------|----------|-------------|
| ⭐ Pure | **TiKV** | Graduated | 24,814,809 | Distributed database |
| ⭐ Pure | **wasmCloud** | Incubating | 122 crates | WebAssembly platform |
| ⭐ Pure | **Youki** | Sandbox | ~500,000 | OCI container runtime |
| ⭐ Pure | **bootc** | Sandbox | 1,694,355 | OS container updates |
| ⭐ Pure | **Akri** | Sandbox | - | Edge device discovery |
| ⭐ Pure | **kube-rs** | Sandbox | - | Kubernetes Rust SDK |
| ⭐ Pure | **Kubewarden** | Sandbox | - | Policy engine |
| Component | **Linkerd** | Graduated | 1,485,071 | Service mesh proxy |
| Component | **containerd** | Graduated | 1,207,012 | Container runtime Wasm |
| Component | **Dragonfly** | Graduated | 3,941,080 | Image distribution |
| Component | **Istio** | Graduated | 1,318,825 | Service mesh ztunnel |
| Component | **Falco** | Graduated | 1,271,214 | Security plugin SDK |
| Implementation | **TUF** | Graduated | 642,891 | Supply chain security |
| Implementation | **in-toto** | Graduated | 299,757 | Supply chain integrity |
| Component | **OpenTelemetry** | Incubating | 143 crates | Observability SDK |
| Component | **Chaos Mesh** | Incubating | ~200,000 | Chaos injection |
| Component | **Confidential Containers** | Sandbox | - | TEE security |
| Component | **Keylime** | Sandbox | - | Remote attestation |
| Component | **Kuasar** | Sandbox | - | Container sandboxer |
| Component | **Paralus** | Sandbox | - | Zero trust access |

### Adoption Trends

- **Service Mesh Leadership**: Both Linkerd (Rust proxy) and Istio (ztunnel) use Rust for data plane components
- **Database Leadership**: TiKV proves Rust's viability for large-scale distributed databases with 16,000+ stars
- **Container Runtime Innovation**: containerd (runwasi), Youki, Kuasar, and bootc demonstrate Rust's dominance in container tech
- **Supply Chain Security**: TUF and in-toto both have official Rust implementations for secure software updates
- **Image Distribution**: Dragonfly's nydus (2.4M lines Rust) leads container image optimization
- **Observability**: OpenTelemetry's Rust SDK enables zero-overhead instrumentation
- **WebAssembly Leadership**: wasmCloud and containerd/runwasi drive Wasm adoption in cloud native
- **Runtime Security**: Falco provides Rust SDK for security plugin development
- **Chaos Engineering**: Chaos Mesh uses Rust for low-level chaos injection (IO, network, kernel)
- **Security Focus**: 10+ projects focus on security use cases
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
2017: Linkerd, TUF, containerd accepted (first CNCF Rust projects)
2018: TiKV, Dragonfly, Falco accepted
2019: OpenTelemetry, in-toto accepted (with Rust implementations)
2020: Keylime, Chaos Mesh accepted; TiKV graduates; containerd graduates
2021: Akri, kube-rs, wasmCloud accepted; Linkerd graduates
2022: Confidential Containers, Kubewarden, Paralus accepted
2023: Kuasar accepted; TUF, in-toto, Istio graduate
2024: Youki accepted; Falco, Dragonfly graduate
2025: bootc accepted (1.7M lines pure Rust)
```

## Project Health Summary

| Project | Commits (2025) | Contributors | Release Cadence | Health |
|---------|----------------|--------------|-----------------|--------|
| Linkerd | High | Multi-org | Regular | ✅ Excellent |
| TiKV | High | Multi-org | Regular | ✅ Excellent |
| containerd | High | Multi-org | Regular | ✅ Excellent |
| Dragonfly | High | Multi-org | Regular | ✅ Excellent |
| Istio | High | Multi-org | Regular | ✅ Excellent |
| OpenTelemetry | High | Multi-org | Regular | ✅ Excellent |
| Chaos Mesh | High | Multi-org | Regular | ✅ Excellent |
| wasmCloud | High | Multi-org | Regular | ✅ Excellent |
| Youki | High | Multi-org | Regular | ✅ Excellent |
| bootc | High | Multi-org | Regular | ✅ Excellent |
| Falco | High | Multi-org | Regular | ✅ Good |
| TUF | Moderate | Multi-org | Regular | ✅ Good |
| in-toto | Moderate | Multi-org | Regular | ✅ Good |
| Kuasar | Moderate | Multi-org | Regular | ✅ Good |
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
| 2025-12-10 | Major update: Added 6 graduated projects with Rust (containerd, Dragonfly, Istio, Falco, TUF, in-toto); Added bootc (Sandbox); Total now 20 projects (8 graduated, 3 incubating, 9 sandbox) |
| 2025-12-10 | Added Chaos Mesh (Incubating) with 4 Rust repos (toda, chaos-tproxy, nsexec, iproute2-rs); project count now 13 incl. 3 incubating |
| 2025-12-10 | Added OpenTelemetry (Incubating) and Kuasar (Sandbox) as CNCF Rust projects; updated wasmCloud to Incubating status; comprehensive review of all incubating projects for Rust usage; project count now 12 |
| 2025-12-10 | Added Youki as newly accepted sandbox project; updated project count to 9; refreshed all activity data |
| 2025-12-10 | Updated with fresh project activity data; added TiKV as second graduated project; removed non-CNCF projects per scope requirements; added health summary table |
| 2025-10-12 | Initial report |

---

**Report Generated:** 2025-12-10

**Data Source:** CNCF Landscape (landscape.yml), GitHub API

**Methodology:** Analyzed the official CNCF landscape repository to identify all projects with Rust components or implementations. Projects were categorized by CNCF maturity level (Graduated, Incubating, Sandbox). Activity data collected from GitHub repository commits and releases.

**Note on Data:** This report focuses exclusively on official CNCF projects. Many additional cloud native projects use Rust but are not included unless they are part of the CNCF.
