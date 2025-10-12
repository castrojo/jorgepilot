---
date: 2025-10-12
---

# CNCF Rust Projects Analysis

## Executive Summary

The CNCF ecosystem has embraced Rust for its performance, memory safety, and reliability characteristics. Currently, there is **1 graduated project** (Linkerd) and **5 sandbox projects** written in or significantly utilizing Rust. Beyond official CNCF projects, the landscape includes 9 additional Rust-based cloud native projects, demonstrating Rust's growing importance in the cloud native ecosystem.

## Overview

This report analyzes Rust adoption within the Cloud Native Computing Foundation (CNCF) landscape. Data is sourced from the official [@cncf/landscape](https://github.com/cncf/landscape) repository, which serves as the single source of truth for CNCF projects. The analysis categorizes projects by their CNCF maturity level: Graduated, Incubating, and Sandbox.

## Key Findings

| Metric              | Value      | Notes                      |
| ------------------- | ---------- | -------------------------- |
| Total Rust Projects | 15         | In CNCF landscape          |
| Graduated           | 1          | Linkerd                    |
| Incubating          | 0          | None currently             |
| Sandbox             | 5          | Active development stage   |
| Non-CNCF            | 9          | Popular ecosystem projects |
| First Accepted      | 2017-01-23 | Linkerd                    |
| Most Recent         | 2022-12-14 | Paralus                    |

## Graduated Projects

### Linkerd

**Status:** Graduated (2021-07-28) | **Accepted:** 2017-01-23

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

**Security Audits:**

- **2019-06-01**: Security audit by Cure53
- **2020-06-05**: Rustls TLS library audit by Cure53
- **2022-06-28**: Security audit by Trail of Bits

**Why Rust?** Linkerd's data plane proxy (linkerd2-proxy) is written in Rust to achieve ultra-low overhead, memory safety without garbage collection, and blazing fast performance critical for service mesh operations.

## Sandbox Projects

### Confidential Containers

**Status:** Sandbox | **Accepted:** 2022-03-08

Enables cloud native confidential computing by leveraging Trusted Execution Environments (TEEs) to protect containers and data.

| Property          | Details                                                                                                               |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Repository**    | [confidential-containers/confidential-containers](https://github.com/confidential-containers/confidential-containers) |
| **Homepage**      | [confidentialcontainers.org](https://confidentialcontainers.org/)                                                     |
| **Dev Stats**     | [confidentialcontainers.devstats.cncf.io](https://confidentialcontainers.devstats.cncf.io/)                           |
| **Slack**         | [#confidential-containers](https://cloud-native.slack.com/)                                                           |
| **Annual Review** | [2023-06-15](https://github.com/cncf/toc/pull/1084)                                                                   |

**Rust Components:** Uses Rust for security-critical components interfacing with TEE technologies.

---

### Keylime

**Status:** Sandbox | **Accepted:** 2020-09-22

Bootstrap and maintain trust on the Edge, Cloud, and IoT devices using remote attestation.

| Property          | Details                                                       |
| ----------------- | ------------------------------------------------------------- |
| **Repository**    | [keylime/keylime](https://github.com/keylime/keylime)         |
| **Homepage**      | [keylime.dev](https://keylime.dev/)                           |
| **Twitter**       | [@KeylimeProject](https://twitter.com/KeylimeProject)         |
| **Dev Stats**     | [keylime.devstats.cncf.io](https://keylime.devstats.cncf.io/) |
| **Slack**         | [#Keylime](https://cloud-native.slack.com/messages/keylime)   |
| **Annual Review** | [2022-11-10](https://github.com/cncf/toc/pull/959)            |

**Rust Components:** Keylime has Rust components for secure, low-level system interactions and cryptographic operations.

---

### Kubewarden

**Status:** Sandbox | **Accepted:** 2022-06-17

WebAssembly-powered Kubernetes policy engine supporting policies written in multiple languages including Rust, Go, CEL, Rego, and YAML.

| Property          | Details                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------- |
| **Repository**    | [kubewarden/kubewarden-controller](https://github.com/kubewarden/kubewarden-controller) |
| **Homepage**      | [kubewarden.io](https://www.kubewarden.io)                                              |
| **Twitter**       | [@kubewarden](https://twitter.com/kubewarden)                                           |
| **Dev Stats**     | [kubewarden.devstats.cncf.io](https://kubewarden.devstats.cncf.io/)                     |
| **Slack**         | [#kubewarden](https://kubernetes.slack.com/)                                            |
| **Annual Review** | [2023-10-10](https://github.com/cncf/toc/pull/1162)                                     |

**Rust Usage:** Core runtime written in Rust; supports policy development in Rust for maximum performance and safety.

---

### Paralus

**Status:** Sandbox | **Accepted:** 2022-12-14

Free, open source tool enabling controlled, audited access to Kubernetes infrastructure with zero trust security model.

| Property       | Details                                                       |
| -------------- | ------------------------------------------------------------- |
| **Repository** | [paralus/paralus](https://github.com/paralus/paralus)         |
| **Homepage**   | [paralus.io](https://www.paralus.io/)                         |
| **Dev Stats**  | [paralus.devstats.cncf.io](https://paralus.devstats.cncf.io/) |
| **Slack**      | [#paralus](https://paralus.io/slack)                          |

**Rust Components:** Contains Rust components for security-critical path operations.

---

### kube-rs

**Status:** Sandbox | **Accepted:** 2021-11-16

The core Rust ecosystem for building Kubernetes applications, providing idiomatic Rust interfaces for Kubernetes APIs.

| Property       | Details                                                 |
| -------------- | ------------------------------------------------------- |
| **Repository** | [kube-rs/kube](https://github.com/kube-rs/kube)         |
| **Homepage**   | [kube.rs](https://kube.rs)                              |
| **Dev Stats**  | [kube.devstats.cncf.io](https://kube.devstats.cncf.io/) |
| **Slack**      | [#kube-rs](https://kubernetes.slack.com/)               |

**Pure Rust:** Complete Rust client library for Kubernetes, enabling developers to build controllers, operators, and tools entirely in Rust.

## Analysis

:::info Key Insight
Rust's adoption in CNCF projects centers on security-critical and performance-sensitive workloads, with Linkerd proving Rust's viability at the graduated level.
:::

### Adoption Trends

- **Service Mesh Leadership**: Linkerd, the only graduated Rust project, proves Rust's viability for production-grade cloud native infrastructure
- **Security Focus**: 4 of 6 CNCF Rust projects focus on security (Confidential Containers, Keylime, Kubewarden, Paralus)
- **Zero Trust**: Multiple projects leverage Rust for implementing zero trust security architectures
- **Performance Critical**: Projects choosing Rust typically cite performance, memory safety, and reliability as key factors

### Why Rust for Cloud Native?

1. **Memory Safety**: No garbage collection, preventing unpredictable latencies
2. **Performance**: Near C/C++ performance without memory safety trade-offs
3. **Concurrency**: Safe, efficient concurrent programming models
4. **WebAssembly**: First-class Wasm support for portable, sandboxed execution
5. **Type Safety**: Strong type system catches errors at compile time
6. **Zero-Cost Abstractions**: High-level ergonomics with no runtime overhead

### Growth Trajectory

- **2017**: First Rust project (Linkerd) accepted into CNCF
- **2020-2022**: Surge in Rust sandbox projects (5 projects accepted)
- **2023+**: Continued focus on security and performance-critical components

## Appendix: Popular Cloud Native Rust Projects

Beyond CNCF, several prominent Rust projects power cloud native infrastructure:

### Infrastructure & Runtime

| Project         | Description                                                         | Repository                                                                            |
| --------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **Firecracker** | AWS microVM technology powering Lambda and Fargate                  | [firecracker-microvm/firecracker](https://github.com/firecracker-microvm/firecracker) |
| **Krustlet**    | Kubernetes Kubelet implementation for running WebAssembly workloads | [krustlet/krustlet](https://github.com/krustlet/krustlet)                             |
| **Wasmtime**    | Fast, secure WebAssembly runtime from the Bytecode Alliance         | [bytecodealliance/wasmtime](https://github.com/bytecodealliance/wasmtime)             |
| **Wasmer**      | Leading WebAssembly runtime supporting WASI                         | [wasmerio/wasmer](https://github.com/wasmerio/wasmer)                                 |

### Observability & Data

| Project       | Description                                                          | Repository                                                        |
| ------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Parseable** | Open source log storage and observability platform for Kubernetes    | [parseablehq/parseable](https://github.com/parseablehq/parseable) |
| **InfluxDB**  | Time series database (v3) rebuilt in Rust using Apache Arrow/Parquet | [influxdata/influxdb](https://github.com/influxdata/influxdb)     |
| **Vector**    | High-performance observability data pipeline                         | [vectordotdev/vector](https://github.com/vectordotdev/vector)     |

### Networking & Security

| Project      | Description                                         | Repository                                                |
| ------------ | --------------------------------------------------- | --------------------------------------------------------- |
| **Pomerium** | Identity-aware access proxy for zero-trust security | [pomerium/pomerium](https://github.com/pomerium/pomerium) |

### Stream Processing

| Project     | Description                                    | Repository                                                  |
| ----------- | ---------------------------------------------- | ----------------------------------------------------------- |
| **ArkFlow** | High-performance Rust stream processing engine | [arkflow-rs/arkflow](https://github.com/arkflow-rs/arkflow) |

### Notable Mentions

- **Bottlerocket OS**: AWS-built Linux-based OS for running containers (uses Rust extensively)
- **Tremor**: Early-stage event processing system designed for high-throughput scenarios
- **rustls**: Modern TLS library used by Linkerd and many other projects (audited by Cure53)

## Related Work

- [CNCF Landscape](https://github.com/cncf/landscape) - Official CNCF projects and landscape data
- [CNCF Projects](https://www.cncf.io/projects/) - Official CNCF project directory
- [Linkerd](https://linkerd.io/) - Graduated service mesh
- [Rust Programming Language](https://www.rust-lang.org/) - Official Rust website

## References

- [CNCF Landscape Data](https://github.com/cncf/landscape/blob/main/landscape.yml) - Source of truth for CNCF projects
- [Linkerd Incubation Announcement](https://www.cncf.io/blog/2019/08/06/toc-votes-to-move-linkerd-to-incubation/)
- [Linkerd Graduation Announcement](https://www.cncf.io/announcements/2021/07/28/cloud-native-computing-foundation-announces-linkerd-graduation/)
- [CNCF Technical Oversight Committee](https://github.com/cncf/toc)

## Associated Issues

| Issue                              | Status | Priority | Link |
| ---------------------------------- | ------ | -------- | ---- |
| Generate CNCF Rust Projects Report | Open   | High     | N/A  |

---

**Report Generated:** 2025-01-XX

**Data Source:** CNCF Landscape (landscape.yml)

**Methodology:** Analyzed the official CNCF landscape repository to identify all projects with Rust components or implementations. Projects were categorized by CNCF maturity level (Graduated, Incubating, Sandbox). Additional popular cloud native Rust projects were identified through landscape data for the appendix.

**Note on Data:** This report focuses on projects officially listed in the CNCF landscape. Many CNCF projects may have Rust components that are not explicitly called out in their landscape entries.
