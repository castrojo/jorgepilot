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

### TiKV ⭐ Pure Rust

**Status:** [Graduated](https://landscape.cncf.io/?selected=tikv) (2020-09-02) | **Accepted:** 2018-08-28

TiKV is a distributed transactional key-value database, originally created to complement TiDB. It is written entirely in Rust and represents one of the largest Rust codebases in production.

| Property         | Details                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| **Description**  | Distributed transactional key-value database                                                    |
| **Repository**   | [tikv/tikv](https://github.com/tikv/tikv)                                                       |
| **Homepage**     | [tikv.org](https://tikv.org/)                                                                   |
| **Languages**    | **Rust (100% core)**                                                                            |
| **Rust LOC**     | **24,814,809**                                                                                  |
| **Key Features** | ACID transactions, horizontal scalability, Raft consensus, RocksDB storage engine               |
| **Stars**        | 16,355+                                                                                         |
| **Dev Stats**    | [tikv.devstats.cncf.io](https://tikv.devstats.cncf.io/)                                         |
| **Last Activity**| December 2025 (Active)                                                                          |

**Why Rust?** TiKV chose Rust for its memory safety guarantees without garbage collection, critical for a database where predictable latency and data integrity are paramount. The language's zero-cost abstractions allow high-level code without runtime overhead.

**Known Adopters:**
TiKV powers TiDB, used by organizations including PingCAP, ByteDance, and numerous enterprises running distributed SQL workloads. TiKV is a core component of the TiDB ecosystem serving production workloads globally.

---

### Linkerd (Rust Component)

**Status:** [Graduated](https://landscape.cncf.io/?selected=linkerd) (2021-07-28) | **Accepted:** 2017-01-23

Linkerd is a service mesh providing security, observability, and reliability. The **data plane proxy (linkerd2-proxy)** is written in Rust.

| Property         | Details                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| **Description**  | Ultra light, ultra simple, ultra powerful service mesh                                          |
| **Repository**   | [linkerd/linkerd2](https://github.com/linkerd/linkerd2)                                         |
| **Homepage**     | [linkerd.io](https://linkerd.io/)                                                               |
| **Languages**    | Go (control plane), **Rust (data plane proxy)**                                                 |
| **Rust LOC**     | **1,485,071** (linkerd2-proxy)                                                                  |
| **Stars**        | 10,700+                                                                                         |
| **Dev Stats**    | [linkerd.devstats.cncf.io](https://linkerd.devstats.cncf.io/)                                   |
| **Last Activity**| December 2025 (Active)                                                                          |

**Rust Component:** `linkerd2-proxy` - The data plane proxy handling all service-to-service traffic.

**Why Rust?** Linkerd's data plane proxy is written in Rust to achieve ultra-low overhead, memory safety without garbage collection, and blazing fast performance critical for service mesh operations.

**Known Adopters (100+):**

| Category | Notable Adopters |
|----------|------------------|
| **Enterprise** | Microsoft, Expedia, Nordstrom, HP Inc, AT&T, Adidas |
| **Financial Services** | M1 Finance, Mulligan Funding, Paybase, Commonbond |
| **Technology** | Docker, Buoyant, Giant Swarm, Timescale, Salt Security |

*See [full adopters list](https://github.com/linkerd/linkerd2/blob/main/ADOPTERS.md) for 100+ organizations.*

---

### containerd (Rust Components)

**Status:** [Graduated](https://landscape.cncf.io/?selected=containerd) (2019-02-28) | **Accepted:** 2017-03-29

containerd is an industry-standard container runtime. While the core is Go, it maintains significant Rust components for WebAssembly support and low-level interfaces.

| Property         | Details                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| **Description**  | Industry-standard container runtime                                                             |
| **Repository**   | [containerd/containerd](https://github.com/containerd/containerd)                               |
| **Homepage**     | [containerd.io](https://containerd.io/)                                                         |
| **Languages**    | Go (core), **Rust (Wasm/ttrpc components)**                                                     |
| **Rust LOC**     | **1,207,012** (across 3 repos)                                                                  |
| **Stars**        | 18,000+                                                                                         |
| **Dev Stats**    | [containerd.devstats.cncf.io](https://containerd.devstats.cncf.io/)                             |

**Rust Components:**

| Repository | Rust LOC | Description |
|------------|----------|-------------|
| [runwasi](https://github.com/containerd/runwasi) | 335,758 | Wasm/WASI workloads for containerd |
| [ttrpc-rust](https://github.com/containerd/ttrpc-rust) | 400,008 | Rust ttrpc (gRPC for low-memory) |
| [rust-extensions](https://github.com/containerd/rust-extensions) | 471,246 | Rust crates to extend containerd |

**Why Rust?** containerd uses Rust for WebAssembly runtime support (runwasi) and low-level RPC protocols (ttrpc) where memory safety and performance are critical.

---

### Dragonfly (Rust Components)

**Status:** [Graduated](https://landscape.cncf.io/?selected=dragonfly) (2024-09-03) | **Accepted:** 2018-10-25

Dragonfly is a P2P-based image and file distribution system. The project uses Rust extensively for its image service (nydus) and client.

| Property         | Details                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| **Description**  | P2P-based image and file distribution system                                                    |
| **Repository**   | [dragonflyoss/Dragonfly2](https://github.com/dragonflyoss/Dragonfly2)                           |
| **Homepage**     | [d7y.io](https://d7y.io/)                                                                       |
| **Languages**    | Go (scheduler), **Rust (nydus, client)**                                                        |
| **Rust LOC**     | **3,941,080** (across 2 repos)                                                                  |
| **Stars**        | 2,300+ (main), 1,400+ (nydus)                                                                   |
| **Dev Stats**    | [dragonfly.devstats.cncf.io](https://dragonfly.devstats.cncf.io/)                               |

**Rust Components:**

| Repository | Rust LOC | Description |
|------------|----------|-------------|
| [nydus](https://github.com/dragonflyoss/nydus) | 2,418,290 | Container image service |
| [client](https://github.com/dragonflyoss/client) | 1,522,790 | Dragonfly client (pure Rust) |

**Why Rust?** Dragonfly chose Rust for nydus to achieve high-performance container image loading with memory safety. The lazy-loading and on-demand features require low-level system access where Rust excels.

---

### Istio (Rust Component)

**Status:** [Graduated](https://landscape.cncf.io/?selected=istio) (2023-07-12) | **Accepted:** 2020-03-03

Istio is a service mesh for microservices. The **ztunnel component** for ambient mesh is written entirely in Rust.

| Property         | Details                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| **Description**  | Service mesh for microservices                                                                  |
| **Repository**   | [istio/istio](https://github.com/istio/istio)                                                   |
| **Homepage**     | [istio.io](https://istio.io/)                                                                   |
| **Languages**    | Go (control plane), **Rust (ztunnel)**                                                          |
| **Rust LOC**     | **1,318,825** (ztunnel)                                                                         |
| **Stars**        | 36,000+ (main), 420+ (ztunnel)                                                                  |
| **Dev Stats**    | [istio.devstats.cncf.io](https://istio.devstats.cncf.io/)                                       |

**Rust Component:**

| Repository | Rust LOC | Description |
|------------|----------|-------------|
| [ztunnel](https://github.com/istio/ztunnel) | 1,318,825 | Zero-trust tunnel for ambient mesh |

**Why Rust?** Istio chose Rust for ztunnel to achieve the performance and security requirements of ambient mesh. The ztunnel proxy handles L4 traffic processing where Rust's memory safety and performance are critical.

---

### Falco (Rust Component)

**Status:** [Graduated](https://landscape.cncf.io/?selected=falco) (2024-01-29) | **Accepted:** 2018-10-10

Falco is a cloud-native runtime security project. The project provides **Rust SDKs** for plugin development.

| Property         | Details                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| **Description**  | Cloud-native runtime security                                                                   |
| **Repository**   | [falcosecurity/falco](https://github.com/falcosecurity/falco)                                   |
| **Homepage**     | [falco.org](https://falco.org/)                                                                 |
| **Languages**    | C++ (core), **Rust (plugin SDK)**                                                               |
| **Rust LOC**     | **1,271,214** (plugin-sdk-rs)                                                                   |
| **Stars**        | 7,600+                                                                                          |
| **Dev Stats**    | [falco.devstats.cncf.io](https://falco.devstats.cncf.io/)                                       |

**Rust Component:**

| Repository | Rust LOC | Description |
|------------|----------|-------------|
| [plugin-sdk-rs](https://github.com/falcosecurity/plugin-sdk-rs) | 1,271,214 | Falco plugins SDK for Rust |

**Why Rust?** Falco provides Rust SDK support to enable plugin development with memory safety guarantees, important for security tooling.

---

### The Update Framework (TUF) (Rust Implementation)

**Status:** [Graduated](https://landscape.cncf.io/?selected=the-update-framework-tuf) (2023-02-09) | **Accepted:** 2017-10-24

TUF is a framework for securing software update systems. The project maintains an **official Rust implementation**.

| Property         | Details                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| **Description**  | Framework for securing software update systems                                                  |
| **Repository**   | [theupdateframework/specification](https://github.com/theupdateframework/specification)         |
| **Homepage**     | [theupdateframework.io](https://theupdateframework.io/)                                         |
| **Languages**    | Python (reference), Go, **Rust**                                                                |
| **Rust LOC**     | **642,891** (rust-tuf)                                                                          |
| **Stars**        | 181+ (rust-tuf)                                                                                 |
| **Dev Stats**    | [tuf.devstats.cncf.io](https://tuf.devstats.cncf.io/)                                           |

**Rust Implementation:**

| Repository | Rust LOC | Description |
|------------|----------|-------------|
| [rust-tuf](https://github.com/theupdateframework/rust-tuf) | 642,891 | Rust implementation of TUF |

**Why Rust?** TUF's Rust implementation provides memory-safe update verification critical for supply chain security.

---

### in-toto (Rust Implementation)

**Status:** [Graduated](https://landscape.cncf.io/?selected=in-toto) (2023-07-12) | **Accepted:** 2019-08-21

in-toto is a framework to secure the integrity of software supply chains. The project maintains a **Rust implementation**.

| Property         | Details                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| **Description**  | Framework for software supply chain integrity                                                   |
| **Repository**   | [in-toto/in-toto](https://github.com/in-toto/in-toto)                                           |
| **Homepage**     | [in-toto.io](https://in-toto.io/)                                                               |
| **Languages**    | Python (reference), Go, **Rust**                                                                |
| **Rust LOC**     | **299,757** (in-toto-rs)                                                                        |
| **Stars**        | 34+ (in-toto-rs)                                                                                |
| **Dev Stats**    | [intoto.devstats.cncf.io](https://intoto.devstats.cncf.io/)                                     |

**Rust Implementation:**

| Repository | Rust LOC | Description |
|------------|----------|-------------|
| [in-toto-rs](https://github.com/in-toto/in-toto-rs) | 299,757 | Rust implementation of in-toto |

**Why Rust?** in-toto's Rust implementation ensures memory-safe handling of cryptographic attestations and supply chain metadata.

## Incubating Projects

:::tip Pure Rust Incubating Project
**wasmCloud** is the only incubating CNCF project written entirely in Rust (122 crates).
:::

### wasmCloud ⭐ Pure Rust

**Status:** [Incubating](https://landscape.cncf.io/?selected=wasmcloud) | **Accepted:** 2021-07-13

wasmCloud is a platform for building distributed applications using WebAssembly components. The **entire project** is written in Rust.

| Property          | Details                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| **Description**   | Distributed application platform using WebAssembly components                                   |
| **Repository**    | [wasmCloud/wasmCloud](https://github.com/wasmCloud/wasmCloud)                                   |
| **Homepage**      | [wasmcloud.com](https://wasmcloud.com)                                                          |
| **Languages**     | **Rust (100% core)**                                                                            |
| **Rust Crates**   | **122 Cargo.toml files**                                                                        |
| **Key Features**  | WebAssembly components, distributed computing, polyglot support, NATS messaging                 |
| **Stars**         | 3,200+                                                                                          |
| **Dev Stats**     | [wasmcloud.devstats.cncf.io](https://wasmcloud.devstats.cncf.io/)                               |
| **Last Activity** | December 2025 (Active)                                                                          |

**Pure Rust Components:**
- Host runtime
- CLI tools (wash)
- Application deployment manager (wadm)
- Wasmtime integration

**Why Rust?** wasmCloud chose Rust for its first-class WebAssembly support, memory safety, and performance. Rust's async ecosystem (tokio) enables efficient handling of distributed workloads.

**Known Adopters:**

| Organization | Status | Use Case |
|--------------|--------|----------|
| **Cosmonic** | Production | Distributed app platform built on wasmCloud |
| **BMW AG** | Development | Framework for modular ML inference applications |
| **MachineMetrics** | Development | Downsampling algorithm for high-frequency IIoT data |
| **Orange** | Internal | Prototyping distributed rating in multi-tier ecosystems |
| **SigScale** | Internal | Service logic as customer-provided Actors |
| **Lattica** | Development | Thought-to-application pipelines for stochastic software |

*See [full adopters list](https://github.com/wasmCloud/wasmCloud/blob/main/ADOPTERS.md).*

---

### OpenTelemetry (Rust Components)

**Status:** [Incubating](https://landscape.cncf.io/?selected=opentelemetry) | **Accepted:** 2019-05-07

OpenTelemetry provides APIs, SDKs, and tools for telemetry data. The project maintains **official Rust SDKs**.

| Property          | Details                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| **Description**   | Vendor-neutral observability framework for cloud-native software                                |
| **Repository**    | [open-telemetry/opentelemetry-rust](https://github.com/open-telemetry/opentelemetry-rust)       |
| **Homepage**      | [opentelemetry.io](https://opentelemetry.io/)                                                   |
| **Languages**     | Go (collector), **Rust (SDK)**                                                                  |
| **Rust Crates**   | **143 Cargo.toml files**                                                                        |
| **Stars**         | 2,300+ (Rust SDK)                                                                               |
| **Dev Stats**     | [opentelemetry.devstats.cncf.io](https://opentelemetry.devstats.cncf.io/)                       |
| **Last Activity** | December 2025 (Active)                                                                          |

**Rust Components:**

| Repository | Description |
|------------|-------------|
| opentelemetry-rust | Core Rust SDK for traces, metrics, and logs |
| opentelemetry-rust-contrib | Community contributed exporters |
| weaver | Semantic conventions tooling (pure Rust CLI) |
| opentelemetry-ebpf-profiler | eBPF profiler with Rust components |
| opentelemetry-network | Network telemetry collector |

**Why Rust?** OpenTelemetry chose Rust for its SDK to provide zero-overhead instrumentation, memory safety without garbage collection pauses, and excellent async support.

---

### Chaos Mesh (Rust Components)

**Status:** [Incubating](https://landscape.cncf.io/?selected=chaos-mesh) | **Accepted:** 2020-07-15

Chaos Mesh is a Chaos Engineering platform. The project uses **Rust for chaos injection components**.

| Property          | Details                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| **Description**   | Cloud-native Chaos Engineering platform for Kubernetes                                          |
| **Repository**    | [chaos-mesh/chaos-mesh](https://github.com/chaos-mesh/chaos-mesh)                               |
| **Homepage**      | [chaos-mesh.org](https://chaos-mesh.org/)                                                       |
| **Languages**     | Go (controller), **Rust (chaos injection)**                                                     |
| **Rust LOC**      | **~200,000** (across 4 repos)                                                                   |
| **Stars**         | 6,800+                                                                                          |
| **Dev Stats**     | [chaosmesh.devstats.cncf.io](https://chaosmesh.devstats.cncf.io/)                               |
| **Last Activity** | December 2025 (Active)                                                                          |

**Rust Components:**

| Repository | Rust LOC | Description |
|------------|----------|-------------|
| [toda](https://github.com/chaos-mesh/toda) | 155,985 | IO chaos filesystem hook |
| chaos-tproxy | ~20,000 | Network chaos proxy |
| nsexec | ~15,000 | Namespace execution |
| iproute2-rs | ~10,000 | Rust bindings for iproute2 |

**Why Rust?** Chaos Mesh uses Rust for low-level system interactions where memory safety and performance are critical. The filesystem hook requires direct kernel interaction where Rust prevents vulnerabilities.
- **iproute2-rs** - Rust bindings for iproute2

**Why Rust?** Chaos Mesh uses Rust for low-level system interactions where memory safety and performance are critical. The `toda` filesystem hook requires direct kernel interaction where Rust's safety guarantees prevent common vulnerabilities while maintaining C-level performance.

**Known Adopters (40+):**

| Category | Adopters |
|----------|----------|
| **End Users** | ByteDance, Tencent, NetEase Fuxi Lab, Xpeng Motors, KingNet, Qiniu Cloud, Maycur |
| **Database/Data** | PingCAP (TiDB), DataStax (AstraDB), Percona, GreptimeDB, RabbitMQ |
| **Security** | Authzed (SpiceDB) |
| **Cloud Vendors** | Microsoft Azure Chaos Studio, KubeSphere, Civo |
| **Enterprise** | DigitalChina, Prudential |

*See [full adopters list](https://github.com/chaos-mesh/chaos-mesh/blob/master/ADOPTERS.md) for 40+ organizations.*

## Sandbox Projects

:::tip Pure Rust Sandbox Projects
**5 of 9 sandbox projects** are written entirely in Rust: Youki, bootc, Akri, kube-rs, and Kubewarden.
:::

### Youki ⭐ Pure Rust

**Status:** [Sandbox](https://landscape.cncf.io/?selected=youki) | **Accepted:** 2024-10-22

Youki is an OCI-compliant low-level container runtime written **entirely in Rust**.

| Property          | Details                                                       |
| ----------------- | ------------------------------------------------------------- |
| **Description**   | OCI-compliant container runtime                               |
| **Repository**    | [youki-dev/youki](https://github.com/youki-dev/youki)         |
| **Homepage**      | [youki.dev](https://containers.github.io/youki/)              |
| **Languages**     | **Rust (100%)**                                               |
| **Rust LOC**      | **~500,000**                                                  |
| **Stars**         | 7,100+                                                        |
| **Dev Stats**     | [youki.devstats.cncf.io](https://youki.devstats.cncf.io/)     |
| **Last Activity** | December 2025 (Active)                                        |

**Why Rust?** Youki is 2x faster than runc in container creation due to Rust's performance and lack of garbage collection overhead.

**Key Adopters:** Azure Kubernetes Service (Wasm workloads), containerd/runwasi, Docker

---

### bootc ⭐ Pure Rust

**Status:** [Sandbox](https://landscape.cncf.io/?selected=bootc) | **Accepted:** 2025-01-21

bootc provides transactional OS updates using OCI container images. Written **almost entirely in Rust**.

| Property          | Details                                                       |
| ----------------- | ------------------------------------------------------------- |
| **Description**   | Boot and upgrade via container images                         |
| **Repository**    | [containers/bootc](https://github.com/containers/bootc)       |
| **Homepage**      | [containers.github.io/bootc](https://containers.github.io/bootc/) |
| **Languages**     | **Rust (100%)**                                               |
| **Rust LOC**      | **1,694,355**                                                 |
| **Stars**         | 1,720+                                                        |
| **Dev Stats**     | [bootc.devstats.cncf.io](https://bootc.devstats.cncf.io/)     |
| **Last Activity** | December 2025 (Active)                                        |

**Why Rust?** bootc requires memory safety for OS update operations. Direct interaction with bootloaders, filesystems, and OS internals makes Rust ideal.

**Key Features:** Transactional OS updates, rollback support, ostree/composefs integration

---

### Akri ⭐ Pure Rust

**Status:** [Sandbox](https://landscape.cncf.io/?selected=akri) | **Accepted:** 2021-09-14

Akri is a Kubernetes Resource Interface for the Edge. Written **entirely in Rust**.

| Property          | Details                                                       |
| ----------------- | ------------------------------------------------------------- |
| **Description**   | Kubernetes edge device discovery and management               |
| **Repository**    | [project-akri/akri](https://github.com/project-akri/akri)     |
| **Homepage**      | [docs.akri.sh](https://docs.akri.sh)                          |
| **Languages**     | **Rust (100%)**                                               |
| **Dev Stats**     | [akri.devstats.cncf.io](https://akri.devstats.cncf.io/)       |
| **Last Activity** | November 2025 (Active)                                        |

**Pure Rust:** Core agent and controller for edge device discovery and management.

---

### kube-rs ⭐ Pure Rust

**Status:** [Sandbox](https://landscape.cncf.io/?selected=kube) | **Accepted:** 2021-11-16

kube-rs is the core Rust ecosystem for building Kubernetes applications. Written **entirely in Rust**.

| Property          | Details                                                       |
| ----------------- | ------------------------------------------------------------- |
| **Description**   | Rust client library for Kubernetes                            |
| **Repository**    | [kube-rs/kube](https://github.com/kube-rs/kube)               |
| **Homepage**      | [kube.rs](https://kube.rs)                                    |
| **Languages**     | **Rust (100%)**                                               |
| **Dev Stats**     | [kube.devstats.cncf.io](https://kube.devstats.cncf.io/)       |
| **Last Activity** | December 2025 (Active)                                        |

**Pure Rust:** Complete Kubernetes client library enabling controllers, operators, and tools entirely in Rust.

---

### Kubewarden ⭐ Pure Rust

**Status:** [Sandbox](https://landscape.cncf.io/?selected=kubewarden) | **Accepted:** 2022-06-17

Kubewarden is a WebAssembly-powered Kubernetes policy engine. Core runtime written in **Rust**.

| Property          | Details                                                       |
| ----------------- | ------------------------------------------------------------- |
| **Description**   | WebAssembly policy engine for Kubernetes                      |
| **Repository**    | [kubewarden/kubewarden-controller](https://github.com/kubewarden/kubewarden-controller) |
| **Homepage**      | [kubewarden.io](https://www.kubewarden.io)                    |
| **Languages**     | **Rust (core runtime)**                                       |
| **Dev Stats**     | [kubewarden.devstats.cncf.io](https://kubewarden.devstats.cncf.io/) |
| **Last Activity** | December 2025 (Active)                                        |

**Rust Usage:** Core runtime written in Rust; supports policy development in Rust for maximum performance.

---

### Confidential Containers (Rust Components)

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

**Known Adopters:**

| Organization | Status | Use Case |
|--------------|--------|----------|
| **Alibaba Cloud** | Beta | Elastic Algorithm Service & Elastic GPU Service for AI/ML privacy |
| **IBM LinuxONE** | Beta | Confidential Containers with OpenShift and IBM Secure Execution |
| **Red Hat** | Beta | OpenShift confidential containers (Azure, Intel TDX, AMD SEV-SNP) |
| **Intel** | Beta | Enterprise-RAG and OPEA for GenAI with Intel TDX |
| **ByteDance** | Beta | Jeddak Sandbox for data privacy protection |
| **Edgeless Systems** | Beta | Contrast for confidential container deployments at scale |
| **Switchboard** | Production | Decentralized Crypto Oracle on AMD SEV-SNP |
| **JDCloud** | Beta | JoyScale for AI data privacy |
| **Kubermatic** | Beta | Kubeone clusters with confidential containers |

*See [full adopters list](https://github.com/confidential-containers/confidential-containers/blob/main/ADOPTERS.md).*

---

### Keylime (Rust Components)

**Status:** [Sandbox](https://landscape.cncf.io/?selected=keylime) | **Accepted:** 2020-09-22

Remote attestation for Edge, Cloud, and IoT devices. Has **Rust agent component**.

| Property          | Details                                                       |
| ----------------- | ------------------------------------------------------------- |
| **Description**   | Remote attestation and trust management                       |
| **Repository**    | [keylime/keylime](https://github.com/keylime/keylime)         |
| **Homepage**      | [keylime.dev](https://keylime.dev/)                           |
| **Languages**     | Python, **Rust (agent)**                                      |
| **Dev Stats**     | [keylime.devstats.cncf.io](https://keylime.devstats.cncf.io/) |
| **Last Activity** | December 2025 (Active)                                        |

**Rust Component:** keylime-agent for secure system interactions and cryptographic operations.

---

### Kuasar (Rust Components)

**Status:** [Sandbox](https://landscape.cncf.io/?selected=kuasar) | **Accepted:** 2023-09-05

Multi-sandbox container runtime. **Significant Rust components** for runtime shims and sandboxers.

| Property          | Details                                                       |
| ----------------- | ------------------------------------------------------------- |
| **Description**   | Multi-sandbox container runtime                               |
| **Repository**    | [kuasar-io/kuasar](https://github.com/kuasar-io/kuasar)       |
| **Homepage**      | [kuasar.io](https://kuasar.io/)                               |
| **Languages**     | Go, **Rust (shim, sandboxers)**                               |
| **Stars**         | 2,200+                                                        |
| **Dev Stats**     | [kuasar.devstats.cncf.io](https://kuasar.devstats.cncf.io/)   |
| **Last Activity** | December 2025 (Active)                                        |

**Rust Components:** Shim, VMM sandboxer, and Wasm sandboxer are written in Rust.

**Known Adopters:** Menging Software, Huawei Cloud Native, iSulad

---

### Paralus (Rust Components)

**Status:** [Sandbox](https://landscape.cncf.io/?selected=paralus) | **Accepted:** 2022-12-14

Zero trust Kubernetes access. Has **Rust components** for secure operations.

| Property          | Details                                                       |
| ----------------- | ------------------------------------------------------------- |
| **Description**   | Zero trust Kubernetes access management                       |
| **Repository**    | [paralus/paralus](https://github.com/paralus/paralus)         |
| **Homepage**      | [paralus.io](https://www.paralus.io/)                         |
| **Languages**     | Go, **Rust (components)**                                     |
| **Dev Stats**     | [paralus.devstats.cncf.io](https://paralus.devstats.cncf.io/) |
| **Last Activity** | August 2025 (Maintenance mode)                                |

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
