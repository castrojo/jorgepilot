---
tags:
  - cncf
  - rust
  - programming-languages
last_updated: 2025-12-10
---

# CNCF Rust Projects Analysis

## Executive Summary

The CNCF ecosystem has embraced Rust for its performance, memory safety, and reliability characteristics. Currently, there are **8 graduated projects** with significant Rust components (Linkerd, TiKV, containerd, Dragonfly, Istio, Falco, TUF, in-toto), **3 incubating projects** (wasmCloud, OpenTelemetry, Chaos Mesh), and **9 sandbox projects** written in or significantly utilizing Rust. This report focuses exclusively on official CNCF projects, demonstrating Rust's proven viability for production-grade cloud native infrastructure.

## Overview

This report analyzes Rust adoption within the Cloud Native Computing Foundation (CNCF) landscape. Data is sourced from the official [@cncf/landscape](https://github.com/cncf/landscape) repository, which serves as the single source of truth for CNCF projects. The analysis categorizes projects by their CNCF maturity level: Graduated, Incubating, and Sandbox.

:::info Data Source
All project data sourced from [@cncf/landscape](https://github.com/cncf/landscape) - landscape.yml (December 2025)
:::

## Key Findings

| Metric              | Value      | Notes                        |
| ------------------- | ---------- | ---------------------------- |
| Total CNCF Rust Projects | 20    | Official CNCF projects only  |
| Graduated           | 8          | Linkerd, TiKV, containerd, Dragonfly, Istio, Falco, TUF, in-toto |
| Incubating          | 3          | wasmCloud, OpenTelemetry, Chaos Mesh |
| Sandbox             | 9          | Including bootc (1.7M lines Rust) |
| First Accepted      | 2017-01-23 | Linkerd                      |
| Most Recent         | 2025-01-21 | bootc                        |

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

**Known Adopters (100+):**

| Category | Notable Adopters |
|----------|------------------|
| **Enterprise** | Microsoft, Expedia, Nordstrom, HP Inc, AT&T, Adidas, BMW (via MercedesBenz.io) |
| **Financial Services** | M1 Finance, Mulligan Funding, Paybase, Commonbond, Figure, Zimpler |
| **Technology** | Docker, Buoyant, Giant Swarm, Timescale, Salt Security, Wiz Security |
| **Media/Gaming** | PlayStudios Asia, Mythical Games, Web Summit |
| **Other** | NAV (Norwegian govt), Purdue University Global, Celonis, Personio |

*See [full adopters list](https://github.com/linkerd/linkerd2/blob/main/ADOPTERS.md) for 100+ organizations.*

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

**Known Adopters:**
TiKV powers TiDB, used by organizations including PingCAP, ByteDance, and numerous enterprises running distributed SQL workloads. TiKV is a core component of the TiDB ecosystem serving production workloads globally.

---

### containerd

**Status:** [Graduated](https://landscape.cncf.io/?selected=containerd) (2019-02-28) | **Accepted:** 2017-03-29

containerd is an industry-standard container runtime with an emphasis on simplicity, robustness, and portability. While the core runtime is written in Go, containerd maintains significant Rust components for WebAssembly support and low-level interfaces.

| Property         | Details                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| **Description**  | Industry-standard container runtime                                                             |
| **Repository**   | [containerd/containerd](https://github.com/containerd/containerd)                               |
| **Homepage**     | [containerd.io](https://containerd.io/)                                                         |
| **Languages**    | Go (core), Rust (Wasm/ttrpc)                                                                    |
| **Stars**        | 18,000+                                                                                         |
| **Dev Stats**    | [containerd.devstats.cncf.io](https://containerd.devstats.cncf.io/)                             |

**Rust Components (1.2M+ lines):**
- **[runwasi](https://github.com/containerd/runwasi)** (335k Rust) - Facilitates running Wasm/WASI workloads managed by containerd
- **[ttrpc-rust](https://github.com/containerd/ttrpc-rust)** (400k Rust) - Rust implementation of ttrpc (gRPC for low-memory environments)
- **[rust-extensions](https://github.com/containerd/rust-extensions)** (471k Rust) - Rust crates to extend containerd

**Why Rust?** containerd uses Rust for WebAssembly runtime support (runwasi) and low-level RPC protocols (ttrpc) where memory safety and performance are critical for container orchestration.

---

### Dragonfly

**Status:** [Graduated](https://landscape.cncf.io/?selected=dragonfly) (2024-09-03) | **Accepted:** 2018-10-25

Dragonfly is an intelligent P2P-based image and file distribution system. The project uses Rust extensively for its image service (nydus) and client components.

| Property         | Details                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| **Description**  | P2P-based image and file distribution system                                                    |
| **Repository**   | [dragonflyoss/Dragonfly2](https://github.com/dragonflyoss/Dragonfly2)                           |
| **Homepage**     | [d7y.io](https://d7y.io/)                                                                       |
| **Languages**    | Go (scheduler), Rust (nydus, client)                                                            |
| **Stars**        | 2,300+ (main), 1,400+ (nydus)                                                                   |
| **Dev Stats**    | [dragonfly.devstats.cncf.io](https://dragonfly.devstats.cncf.io/)                               |

**Rust Components (3.9M+ lines):**
- **[nydus](https://github.com/dragonflyoss/nydus)** (2.4M Rust) - Image service providing fast, secure container image access
- **[client](https://github.com/dragonflyoss/client)** (1.5M Rust) - Dragonfly client written entirely in Rust

**Why Rust?** Dragonfly chose Rust for nydus to achieve high-performance container image loading with memory safety. The lazy-loading and on-demand image features require low-level system access where Rust excels.

---

### Istio

**Status:** [Graduated](https://landscape.cncf.io/?selected=istio) (2023-07-12) | **Accepted:** 2020-03-03

Istio is an open platform for providing a uniform way to integrate microservices, manage traffic flow, enforce policies, and aggregate telemetry data. The ztunnel component for ambient mesh is written entirely in Rust.

| Property         | Details                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| **Description**  | Service mesh for microservices                                                                  |
| **Repository**   | [istio/istio](https://github.com/istio/istio)                                                   |
| **Homepage**     | [istio.io](https://istio.io/)                                                                   |
| **Languages**    | Go (control plane), Rust (ztunnel)                                                              |
| **Stars**        | 36,000+ (main), 420+ (ztunnel)                                                                  |
| **Dev Stats**    | [istio.devstats.cncf.io](https://istio.devstats.cncf.io/)                                       |

**Rust Components (1.3M+ lines):**
- **[ztunnel](https://github.com/istio/ztunnel)** (1.3M Rust) - The zero-trust tunnel component of Istio ambient mesh

**Why Rust?** Istio chose Rust for ztunnel to achieve the performance and security requirements of ambient mesh. The ztunnel proxy handles L4 traffic processing where Rust's memory safety and performance are critical for network security.

---

### Falco

**Status:** [Graduated](https://landscape.cncf.io/?selected=falco) (2024-01-29) | **Accepted:** 2018-10-10

Falco is a cloud-native runtime security project that detects anomalous activity in applications. The project provides Rust SDKs for plugin development.

| Property         | Details                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| **Description**  | Cloud-native runtime security                                                                   |
| **Repository**   | [falcosecurity/falco](https://github.com/falcosecurity/falco)                                   |
| **Homepage**     | [falco.org](https://falco.org/)                                                                 |
| **Languages**    | C++ (core), Rust (plugin SDK)                                                                   |
| **Stars**        | 7,600+                                                                                          |
| **Dev Stats**    | [falco.devstats.cncf.io](https://falco.devstats.cncf.io/)                                       |

**Rust Components (1.2M+ lines):**
- **[plugin-sdk-rs](https://github.com/falcosecurity/plugin-sdk-rs)** (1.2M Rust) - Falco plugins SDK for Rust
- **[client-rs](https://github.com/falcosecurity/client-rs)** - Rust client for Falco

**Why Rust?** Falco provides Rust SDK support to enable plugin development with memory safety guarantees, important for security tooling that processes sensitive runtime data.

---

### The Update Framework (TUF)

**Status:** [Graduated](https://landscape.cncf.io/?selected=the-update-framework-tuf) (2023-02-09) | **Accepted:** 2017-10-24

TUF is a framework for securing software update systems. The project maintains an official Rust implementation.

| Property         | Details                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| **Description**  | Framework for securing software update systems                                                  |
| **Repository**   | [theupdateframework/specification](https://github.com/theupdateframework/specification)         |
| **Homepage**     | [theupdateframework.io](https://theupdateframework.io/)                                         |
| **Languages**    | Python (reference), Go, Rust                                                                    |
| **Stars**        | 181+ (rust-tuf)                                                                                 |
| **Dev Stats**    | [tuf.devstats.cncf.io](https://tuf.devstats.cncf.io/)                                           |

**Rust Components (642k+ lines):**
- **[rust-tuf](https://github.com/theupdateframework/rust-tuf)** (642k Rust) - Rust implementation of The Update Framework

**Why Rust?** TUF's Rust implementation provides memory-safe update verification critical for supply chain security. Rust prevents common vulnerabilities that could compromise software update integrity.

---

### in-toto

**Status:** [Graduated](https://landscape.cncf.io/?selected=in-toto) (2023-07-12) | **Accepted:** 2019-08-21

in-toto is a framework to secure the integrity of software supply chains. The project maintains a Rust implementation.

| Property         | Details                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| **Description**  | Framework for software supply chain integrity                                                   |
| **Repository**   | [in-toto/in-toto](https://github.com/in-toto/in-toto)                                           |
| **Homepage**     | [in-toto.io](https://in-toto.io/)                                                               |
| **Languages**    | Python (reference), Go, Rust                                                                    |
| **Stars**        | 34+ (in-toto-rs)                                                                                |
| **Dev Stats**    | [intoto.devstats.cncf.io](https://intoto.devstats.cncf.io/)                                     |

**Rust Components (299k+ lines):**
- **[in-toto-rs](https://github.com/in-toto/in-toto-rs)** (299k Rust) - Rust implementation of in-toto

**Why Rust?** in-toto's Rust implementation ensures memory-safe handling of cryptographic attestations and supply chain metadata, critical for verifying software provenance.

## Incubating Projects

### wasmCloud

**Status:** [Incubating](https://landscape.cncf.io/?selected=wasmcloud) | **Accepted:** 2021-07-13

wasmCloud is a platform for building distributed applications using WebAssembly components. It enables teams to build, manage, and scale polyglot applications across any cloud, Kubernetes, or edge environment. The core runtime and tooling are written entirely in Rust.

| Property          | Details                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| **Description**   | Distributed application platform using WebAssembly components                                   |
| **Repository**    | [wasmCloud/wasmCloud](https://github.com/wasmCloud/wasmCloud)                                   |
| **Homepage**      | [wasmcloud.com](https://wasmcloud.com)                                                          |
| **Languages**     | Rust (100% core runtime)                                                                        |
| **Key Features**  | WebAssembly components, distributed computing, polyglot support, NATS messaging                 |
| **Stars**         | 3,200+                                                                                          |
| **Dev Stats**     | [wasmcloud.devstats.cncf.io](https://wasmcloud.devstats.cncf.io/)                               |
| **Slack**         | [#wasmcloud](https://cloud-native.slack.com/)                                                   |
| **Last Activity** | December 2025 (Active)                                                                          |

**Pure Rust:** The wasmCloud host runtime, CLI tools (wash), and application deployment manager (wadm) are written entirely in Rust. The project leverages Rust's WebAssembly ecosystem including Wasmtime for component execution.

**Why Rust?** wasmCloud chose Rust for its first-class WebAssembly support, memory safety, and performance. Rust's async ecosystem (tokio) enables efficient handling of distributed workloads, while the language's strict type system ensures reliability in production environments.

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

### OpenTelemetry

**Status:** [Incubating](https://landscape.cncf.io/?selected=opentelemetry) | **Accepted:** 2019-05-07

OpenTelemetry provides APIs, SDKs, and tools for generating, collecting, and exporting telemetry data (metrics, logs, and traces). While the main collector is written in Go, the project maintains official Rust implementations for its core instrumentation SDKs.

| Property          | Details                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| **Description**   | Vendor-neutral observability framework for cloud-native software                                |
| **Repository**    | [open-telemetry/opentelemetry-rust](https://github.com/open-telemetry/opentelemetry-rust)       |
| **Homepage**      | [opentelemetry.io](https://opentelemetry.io/)                                                   |
| **Languages**     | Go (collector), Rust (SDK), multiple language SDKs                                              |
| **Key Features**  | Distributed tracing, metrics, logging, context propagation, OTLP protocol                       |
| **Stars**         | 2,300+ (Rust SDK)                                                                               |
| **Dev Stats**     | [opentelemetry.devstats.cncf.io](https://opentelemetry.devstats.cncf.io/)                       |
| **Slack**         | [#otel-rust](https://cloud-native.slack.com/)                                                   |
| **Last Activity** | December 2025 (Active)                                                                          |

**Rust Components (143+ Cargo.toml files):**
- **opentelemetry-rust** - Core Rust SDK for traces, metrics, and logs
- **opentelemetry-rust-contrib** - Community contributed exporters and integrations
- **weaver** - Semantic conventions tooling (pure Rust CLI)
- **otel-arrow** - Apache Arrow protocol implementation with Rust components
- **opentelemetry-ebpf-profiler** - eBPF-based profiler with Rust components
- **opentelemetry-network** - Network telemetry collector with Rust crates

**Why Rust?** OpenTelemetry chose Rust for its SDK to provide zero-overhead instrumentation, memory safety without garbage collection pauses, and excellent async support critical for observability libraries that must minimize performance impact.

---

### Chaos Mesh

**Status:** [Incubating](https://landscape.cncf.io/?selected=chaos-mesh) | **Accepted:** 2020-07-15

Chaos Mesh is a cloud-native Chaos Engineering platform that orchestrates chaos experiments on Kubernetes environments. While the main controller is written in Go, the project uses Rust for performance-critical chaos injection components.

| Property          | Details                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| **Description**   | Cloud-native Chaos Engineering platform for Kubernetes                                          |
| **Repository**    | [chaos-mesh/chaos-mesh](https://github.com/chaos-mesh/chaos-mesh)                               |
| **Homepage**      | [chaos-mesh.org](https://chaos-mesh.org/)                                                       |
| **Languages**     | Go (controller), Rust (chaos injection tools)                                                   |
| **Key Features**  | IO chaos, network chaos, stress testing, kernel chaos, DNS chaos                                |
| **Stars**         | 6,800+                                                                                          |
| **Dev Stats**     | [chaosmesh.devstats.cncf.io](https://chaosmesh.devstats.cncf.io/)                               |
| **Slack**         | [#chaos-mesh](https://cloud-native.slack.com/)                                                  |
| **Last Activity** | December 2025 (Active)                                                                          |

**Rust Components (4 repos):**
- **toda** - Hook filesystem and utilities to inject IO chaos (155k+ lines of Rust)
- **chaos-tproxy** - Transparent proxy for network chaos injection
- **nsexec** - Namespace execution utilities
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

### Kuasar

**Status:** [Sandbox](https://landscape.cncf.io/?selected=kuasar) | **Accepted:** 2023-09-05

Kuasar is a multi-sandbox container runtime that provides cloud-native, all-scenario multiple sandbox container solutions. Written primarily in Rust for performance and safety.

| Property          | Details                                                       |
| ----------------- | ------------------------------------------------------------- |
| **Repository**    | [kuasar-io/kuasar](https://github.com/kuasar-io/kuasar)       |
| **Homepage**      | [kuasar.io](https://kuasar.io/)                               |
| **Dev Stats**     | [kuasar.devstats.cncf.io](https://kuasar.devstats.cncf.io/)   |
| **Slack**         | [#kuasar](https://cloud-native.slack.com/)                    |
| **Stars**         | 2,200+                                                        |
| **Last Activity** | December 2025 (Active)                                        |

**Pure Rust:** Core runtime components including the shim, VMM sandboxer, and Wasm sandboxer are written in Rust. The project uses Rust for safe, efficient container sandbox management.

**Why Rust?** Kuasar chose Rust for memory safety without garbage collection, critical for a low-level container runtime that must be both secure and performant. Rust's type system helps prevent common security vulnerabilities.

**Known Adopters:**

| Adopter | Type | Use Case |
|---------|------|----------|
| **Menging Software** | Service Provider | FaaS platform based on WebAssembly |
| **Huawei Cloud Native** | Service Provider | Kubernetes experience with Kuasar |
| **iSulad** | OSS Project | Uses Kuasar as low-level container runtime |

*See [full adopters list](https://github.com/kuasar-io/kuasar/blob/main/ADOPTERS.md).*

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

---

### bootc

**Status:** [Sandbox](https://landscape.cncf.io/?selected=bootc) | **Accepted:** 2025-01-21

bootc provides transactional, in-place operating system images and updates using OCI/Docker container images. This project applies the Docker container layering model to bootable host systems, using standard OCI/Docker containers as a transport and delivery format for base operating system updates.

| Property          | Details                                                       |
| ----------------- | ------------------------------------------------------------- |
| **Repository**    | [containers/bootc](https://github.com/containers/bootc)       |
| **Homepage**      | [containers.github.io/bootc](https://containers.github.io/bootc/) |
| **Dev Stats**     | [bootc.devstats.cncf.io](https://bootc.devstats.cncf.io/)     |
| **Stars**         | 1,720+                                                        |
| **Last Activity** | December 2025 (Active)                                        |

**Pure Rust (1.69M lines):** bootc is written almost entirely in Rust, representing one of the largest pure Rust CNCF projects. The codebase leverages Rust for safe, low-level OS operations.

**Why Rust?** bootc chose Rust for its memory safety guarantees essential when managing operating system updates. The project requires direct interaction with bootloaders, filesystems, and OS internals where Rust prevents common vulnerabilities while maintaining system-level performance.

**Key Features:**
- Transactional OS updates via OCI images
- Rollback support for failed updates
- Integration with ostree and composefs
- Support for Fedora, CentOS Stream, RHEL

## Analysis

:::info Key Insight
Rust's adoption in CNCF projects centers on security-critical and performance-sensitive workloads, with eight graduated projects now using Rust components proving Rust's viability at the highest maturity level.
:::

### CNCF Rust Projects by Maturity

| Project | Maturity | Accepted | Focus Area | Activity (Dec 2025) |
|---------|----------|----------|------------|---------------------|
| **Linkerd** | Graduated | 2017-01-23 | Service Mesh | Active |
| **TUF** | Graduated | 2017-10-24 | Supply Chain Security | Active |
| **TiKV** | Graduated | 2018-08-28 | Database | Active |
| **containerd** | Graduated | 2017-03-29 | Container Runtime | Active |
| **Dragonfly** | Graduated | 2018-10-25 | Image Distribution | Active |
| **Falco** | Graduated | 2018-10-10 | Runtime Security | Active |
| **in-toto** | Graduated | 2019-08-21 | Supply Chain Security | Active |
| **Istio** | Graduated | 2020-03-03 | Service Mesh | Active |
| **OpenTelemetry** | Incubating | 2019-05-07 | Observability | Active |
| **Chaos Mesh** | Incubating | 2020-07-15 | Chaos Engineering | Active |
| **wasmCloud** | Incubating | 2021-07-13 | WebAssembly Platform | Active |
| **Keylime** | Sandbox | 2020-09-22 | Security/TPM | Active |
| **Akri** | Sandbox | 2021-09-14 | IoT/Edge | Active |
| **kube-rs** | Sandbox | 2021-11-16 | Kubernetes SDK | Active |
| **Confidential Containers** | Sandbox | 2022-03-08 | Security/TEE | Active |
| **Kubewarden** | Sandbox | 2022-06-17 | Policy Engine | Active |
| **Paralus** | Sandbox | 2022-12-14 | Zero Trust Access | Maintenance |
| **Kuasar** | Sandbox | 2023-09-05 | Container Runtime | Active |
| **Youki** | Sandbox | 2024-10-22 | Container Runtime | Active |
| **bootc** | Sandbox | 2025-01-21 | OS Updates | Active |

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
