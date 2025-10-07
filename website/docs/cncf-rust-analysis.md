---
sidebar_position: 4
---

# CNCF Rust Projects Analysis

## Executive Summary

The CNCF ecosystem has embraced Rust for its performance, memory safety, and reliability characteristics. Currently, there is **1 graduated project** (Linkerd) and **5 sandbox projects** written in or significantly utilizing Rust. Beyond official CNCF projects, the landscape includes 9 additional Rust-based cloud native projects, demonstrating Rust's growing importance in the cloud native ecosystem.

## Overview

This report analyzes Rust adoption within the Cloud Native Computing Foundation (CNCF) landscape. Data is sourced from the official @cncf/landscape repository, which serves as the single source of truth for CNCF projects. The analysis categorizes projects by their CNCF maturity level: Graduated, Incubating, and Sandbox.

## Key Findings

| Metric | Value | Notes |
|--------|-------|-------|
| Total Rust Projects | 15 | In CNCF landscape |
| Graduated | 1 | Linkerd |
| Incubating | 0 | None currently |
| Sandbox | 5 | Active development stage |
| Non-CNCF | 9 | Popular ecosystem projects |
| First Accepted | 2017-01-23 | Linkerd |
| Most Recent | 2022-12-14 | Paralus |

## Graduated Projects

### Linkerd

**Status:** Graduated (2021-07-28) | **Accepted:** 2017-01-23

Linkerd is a service mesh that provides security, observability, and reliability to Kubernetes applications without code changes. It's built with both Go and Rust components, with the data plane (linkerd2-proxy) written entirely in Rust for maximum performance and safety.

| Property | Details |
|----------|---------|
| **Description** | Ultra light, ultra simple, ultra powerful service mesh |
| **Repository** | <a href="https://github.com/linkerd/linkerd2">linkerd/linkerd2</a> |
| **Homepage** | <a href="https://linkerd.io/">linkerd.io</a> |
| **Languages** | Go, Rust |
| **Key Features** | mTLS, observability, multi-cluster, load balancing, traffic authorization, security, zero trust |
| **Target Users** | SREs, DevOps Engineers, Architects |
| **Dev Stats** | <a href="https://linkerd.devstats.cncf.io/">linkerd.devstats.cncf.io</a> |

**Security Audits:**
- **2019-06-01**: Security audit by Cure53
- **2020-06-05**: Rustls TLS library audit by Cure53
- **2022-06-28**: Security audit by Trail of Bits

**Why Rust?** Linkerd's data plane proxy (linkerd2-proxy) is written in Rust to achieve ultra-low overhead, memory safety without garbage collection, and blazing fast performance critical for service mesh operations.

## Sandbox Projects

### Confidential Containers

**Status:** Sandbox | **Accepted:** 2022-03-08

Enables cloud native confidential computing by leveraging Trusted Execution Environments (TEEs) to protect containers and data.

| Property | Details |
|----------|---------|
| **Repository** | <a href="https://github.com/confidential-containers/confidential-containers">confidential-containers/confidential-containers</a> |
| **Homepage** | <a href="https://confidentialcontainers.org/">confidentialcontainers.org</a> |
| **Dev Stats** | <a href="https://confidentialcontainers.devstats.cncf.io/">confidentialcontainers.devstats.cncf.io</a> |
| **Slack** | <a href="https://cloud-native.slack.com/">#confidential-containers</a> |
| **Annual Review** | <a href="https://github.com/cncf/toc/pull/1084">2023-06-15</a> |

**Rust Components:** Uses Rust for security-critical components interfacing with TEE technologies.

---

### Keylime

**Status:** Sandbox | **Accepted:** 2020-09-22

Bootstrap and maintain trust on the Edge, Cloud, and IoT devices using remote attestation.

| Property | Details |
|----------|---------|
| **Repository** | <a href="https://github.com/keylime/keylime">keylime/keylime</a> |
| **Homepage** | <a href="https://keylime.dev/">keylime.dev</a> |
| **Twitter** | <a href="https://twitter.com/KeylimeProject">@KeylimeProject</a> |
| **Dev Stats** | <a href="https://keylime.devstats.cncf.io/">keylime.devstats.cncf.io</a> |
| **Slack** | <a href="https://cloud-native.slack.com/messages/keylime">#Keylime</a> |
| **Annual Review** | <a href="https://github.com/cncf/toc/pull/959">2022-11-10</a> |

**Rust Components:** Keylime has Rust components for secure, low-level system interactions and cryptographic operations.

---

### Kubewarden

**Status:** Sandbox | **Accepted:** 2022-06-17

WebAssembly-powered Kubernetes policy engine supporting policies written in multiple languages including Rust, Go, CEL, Rego, and YAML.

| Property | Details |
|----------|---------|
| **Repository** | <a href="https://github.com/kubewarden/kubewarden-controller">kubewarden/kubewarden-controller</a> |
| **Homepage** | <a href="https://www.kubewarden.io">kubewarden.io</a> |
| **Twitter** | <a href="https://twitter.com/kubewarden">@kubewarden</a> |
| **Dev Stats** | <a href="https://kubewarden.devstats.cncf.io/">kubewarden.devstats.cncf.io</a> |
| **Slack** | <a href="https://kubernetes.slack.com/">#kubewarden</a> |
| **Annual Review** | <a href="https://github.com/cncf/toc/pull/1162">2023-10-10</a> |

**Rust Usage:** Core runtime written in Rust; supports policy development in Rust for maximum performance and safety.

---

### Paralus

**Status:** Sandbox | **Accepted:** 2022-12-14

Free, open source tool enabling controlled, audited access to Kubernetes infrastructure with zero trust security model.

| Property | Details |
|----------|---------|
| **Repository** | <a href="https://github.com/paralus/paralus">paralus/paralus</a> |
| **Homepage** | <a href="https://www.paralus.io/">paralus.io</a> |
| **Dev Stats** | <a href="https://paralus.devstats.cncf.io/">paralus.devstats.cncf.io</a> |
| **Slack** | <a href="https://paralus.io/slack">#paralus</a> |

**Rust Components:** Contains Rust components for security-critical path operations.

---

### kube-rs

**Status:** Sandbox | **Accepted:** 2021-11-16

The core Rust ecosystem for building Kubernetes applications, providing idiomatic Rust interfaces for Kubernetes APIs.

| Property | Details |
|----------|---------|
| **Repository** | <a href="https://github.com/kube-rs/kube">kube-rs/kube</a> |
| **Homepage** | <a href="https://kube.rs">kube.rs</a> |
| **Dev Stats** | <a href="https://kube.devstats.cncf.io/">kube.devstats.cncf.io</a> |
| **Slack** | <a href="https://kubernetes.slack.com/">#kube-rs</a> |

**Pure Rust:** Complete Rust client library for Kubernetes, enabling developers to build controllers, operators, and tools entirely in Rust.

## Analysis

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

| Project | Description | Repository |
|---------|-------------|------------|
| **Firecracker** | AWS microVM technology powering Lambda and Fargate | <a href="https://github.com/firecracker-microvm/firecracker">firecracker-microvm/firecracker</a> |
| **Krustlet** | Kubernetes Kubelet implementation for running WebAssembly workloads | <a href="https://github.com/krustlet/krustlet">krustlet/krustlet</a> |
| **Wasmtime** | Fast, secure WebAssembly runtime from the Bytecode Alliance | <a href="https://github.com/bytecodealliance/wasmtime">bytecodealliance/wasmtime</a> |
| **Wasmer** | Leading WebAssembly runtime supporting WASI | <a href="https://github.com/wasmerio/wasmer">wasmerio/wasmer</a> |

### Observability & Data

| Project | Description | Repository |
|---------|-------------|------------|
| **Parseable** | Open source log storage and observability platform for Kubernetes | <a href="https://github.com/parseablehq/parseable">parseablehq/parseable</a> |
| **InfluxDB** | Time series database (v3) rebuilt in Rust using Apache Arrow/Parquet | <a href="https://github.com/influxdata/influxdb">influxdata/influxdb</a> |
| **Vector** | High-performance observability data pipeline | <a href="https://github.com/vectordotdev/vector">vectordotdev/vector</a> |

### Networking & Security

| Project | Description | Repository |
|---------|-------------|------------|
| **Pomerium** | Identity-aware access proxy for zero-trust security | <a href="https://github.com/pomerium/pomerium">pomerium/pomerium</a> |

### Stream Processing

| Project | Description | Repository |
|---------|-------------|------------|
| **ArkFlow** | High-performance Rust stream processing engine | <a href="https://github.com/arkflow-rs/arkflow">arkflow-rs/arkflow</a> |

### Notable Mentions

- **Bottlerocket OS**: AWS-built Linux-based OS for running containers (uses Rust extensively)
- **Tremor**: Early-stage event processing system designed for high-throughput scenarios
- **rustls**: Modern TLS library used by Linkerd and many other projects (audited by Cure53)

## Related Work

- <a href="https://github.com/cncf/landscape">CNCF Landscape</a> - Official CNCF projects and landscape data
- <a href="https://www.cncf.io/projects/">CNCF Projects</a> - Official CNCF project directory
- <a href="https://linkerd.io/">Linkerd</a> - Graduated service mesh
- <a href="https://www.rust-lang.org/">Rust Programming Language</a> - Official Rust website

## References

- <a href="https://github.com/cncf/landscape/blob/main/landscape.yml">CNCF Landscape Data</a> - Source of truth for CNCF projects
- <a href="https://www.cncf.io/blog/2019/08/06/toc-votes-to-move-linkerd-to-incubation/">Linkerd Incubation Announcement</a>
- <a href="https://www.cncf.io/announcements/2021/07/28/cloud-native-computing-foundation-announces-linkerd-graduation/">Linkerd Graduation Announcement</a>
- <a href="https://github.com/cncf/toc">CNCF Technical Oversight Committee</a>

## Associated Issues

| Issue | Status | Priority | Link |
|-------|--------|----------|------|
| Generate CNCF Rust Projects Report | Open | High | N/A |

---

**Report Generated:** 2025-01-XX

**Data Source:** CNCF Landscape (landscape.yml)

**Methodology:** Analyzed the official CNCF landscape repository to identify all projects with Rust components or implementations. Projects were categorized by CNCF maturity level (Graduated, Incubating, Sandbox). Additional popular cloud native Rust projects were identified through landscape data for the appendix.

**Note on Data:** This report focuses on projects officially listed in the CNCF landscape. Many CNCF projects may have Rust components that are not explicitly called out in their landscape entries.
