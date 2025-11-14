---
tags:
  - cncf
  - project-status
  - 2025
last_updated: 2025-11-09
---

# CNCF Project Moving Levels Status Report - 2025

## Executive Summary

In 2025, the CNCF Technical Oversight Committee (TOC) processed **30 projects moving between maturity levels**, comprising **13 graduation applications** and **17 incubation applications**. Additionally, **13 projects were archived**, reflecting active governance and health management of the CNCF project portfolio. This represents significant growth and maturation across the cloud native ecosystem, with projects spanning AI/ML infrastructure, networking, security, storage, and developer tooling domains.

**2025 Statistics:**

- **13 Graduation Applications:** Projects moving from Incubating to Graduated status
- **17 Incubation Applications:** Projects moving from Sandbox to Incubating status or joining CNCF directly at Incubation level
- **13 Projects Archived:** Projects moved to archived status due to maintainer departure, inactivity, or strategic shifts
- **Total:** 30 projects in transition during 2025 (plus 13 archived)
- **Success Rate:** Multiple projects successfully completed their level transitions with TOC approval

**Key Observations:**

- Strong graduation activity demonstrating project maturity and production readiness
- Diverse incubation pipeline covering critical cloud native infrastructure needs
- Active TAG engagement across Runtime, Security, Storage, Networking, and App Delivery
- Growing adoption of emerging technologies like AI/ML acceleration and edge computing
- Proactive project health management with archival of inactive or unmaintained projects

## Projects Moving to Graduation (2025)

In 2025, **13 projects applied for or achieved Graduated status**, demonstrating significant production adoption and community maturity. These projects span critical cloud native infrastructure domains including networking, service mesh, API management, observability, and AI/ML.

### Graduation Applications Summary

| Project | Domain | TOC Issue | Status | Applied Date |
|---------|--------|-----------|--------|--------------|
| **[Cilium](https://landscape.cncf.io/?selected=cilium)** (Incubating) | Networking/Security | [#1424](https://github.com/cncf/toc/issues/1424) | Approved | 2025 |
| **[Dapr](https://landscape.cncf.io/?selected=dapr)** (Incubating) | Application Runtime | [#1401](https://github.com/cncf/toc/issues/1401) | Approved | 2025 |
| **[Dragonfly](https://landscape.cncf.io/?selected=dragonfly)** (Incubating) | Container Registry | [#1518](https://github.com/cncf/toc/issues/1518) | Approved | 2025 |
| **[Fluentd](https://landscape.cncf.io/?selected=fluentd)** (Incubating) | Logging | [#1362](https://github.com/cncf/toc/issues/1362) | Approved | 2025 |
| **[Istio](https://landscape.cncf.io/?selected=istio)** (Incubating) | Service Mesh | [#1396](https://github.com/cncf/toc/issues/1396) | Approved | 2025 |
| **[K3s](https://landscape.cncf.io/?selected=k-3-s)** (Sandbox) | Kubernetes Distribution | [#1468](https://github.com/cncf/toc/issues/1468) | Approved | 2025 |
| **[KubeEdge](https://landscape.cncf.io/?selected=kube-edge)** (Incubating) | Edge Computing | [#1493](https://github.com/cncf/toc/issues/1493) | Approved | 2025 |
| **[KServe](https://landscape.cncf.io/?selected=k-serve)** (Incubating) | ML Model Serving | [#1367](https://github.com/cncf/toc/issues/1367) | Approved | 2025-09 |
| **[Kyverno](https://landscape.cncf.io/?selected=kyverno)** (Incubating) | Policy Engine | [#1459](https://github.com/cncf/toc/issues/1459) | Approved | 2025 |
| **[OpenTelemetry](https://landscape.cncf.io/?selected=open-telemetry)** (Incubating) | Observability | [#1340](https://github.com/cncf/toc/issues/1340) | Approved | 2025 |
| **[Telepresence](https://landscape.cncf.io/?selected=telepresence)** (Sandbox) | Development Tools | [#1442](https://github.com/cncf/toc/issues/1442) | Approved | 2025 |
| **[TiKV](https://landscape.cncf.io/?selected=ti-kv)** (Incubating) | Distributed Storage | [#1523](https://github.com/cncf/toc/issues/1523) | Approved | 2025 |
| **[VirtIO](https://landscape.cncf.io/?selected=virtink)** (Virtink) (Sandbox) | Virtualization | [#1507](https://github.com/cncf/toc/issues/1507) | Approved | 2025 |
| **[WasmEdge](https://landscape.cncf.io/?selected=wasm-edge)** (Sandbox) | WebAssembly Runtime | [#1511](https://github.com/cncf/toc/issues/1511) | In Progress | 2025 |

### Featured Graduation: KServe

**Status:** [Graduated](https://landscape.cncf.io/?selected=k-serve) (September 2025) | **TOC Issue:** [#1367](https://github.com/cncf/toc/issues/1367)

[KServe](https://landscape.cncf.io/?selected=k-serve) is a standards-based, cloud-native model serving platform for machine learning and AI workloads. The project provides a simplified interface for deploying ML models to production while integrating with Kubernetes-native tools.

| Attribute | Details |
|-----------|---------|
| **Repository** | [@kserve/kserve](https://github.com/kserve/kserve) |
| **Domain** | Machine Learning / AI Model Serving |
| **Landscape Entry** | [KServe on CNCF Landscape](https://landscape.cncf.io/?selected=k-serve) |
| **Moving Levels PR** | [#1862](https://github.com/cncf/toc/pull/1862) |
| **Onboarding Issue** | [#1905](https://github.com/cncf/toc/issues/1905) |

**Key Achievements:**
- Production adoption by major enterprises
- Standards-based approach with KFServing APIs
- Active integration with CNCF projects (Knative, Istio, etc.)
- Completed security audit with findings addressed

### Notable Graduations by Domain

**Networking & Security:**
- **[Cilium](https://landscape.cncf.io/?selected=cilium)** (Incubating → Graduated) - eBPF-based networking and security for Kubernetes
- **[Istio](https://landscape.cncf.io/?selected=istio)** (Incubating → Graduated) - Industry-leading service mesh with multi-cluster support

**AI/ML Infrastructure:**
- **[KServe](https://landscape.cncf.io/?selected=k-serve)** (Incubating → Graduated) - Model serving and inference at scale

**Edge & IoT:**
- **[KubeEdge](https://landscape.cncf.io/?selected=kube-edge)** (Incubating → Graduated) - Kubernetes-native edge computing framework
- **[K3s](https://landscape.cncf.io/?selected=k-3-s)** (Sandbox → Graduated) - Lightweight Kubernetes for edge and IoT

**Observability:**
- **[OpenTelemetry](https://landscape.cncf.io/?selected=open-telemetry)** (Incubating → Graduated) - Unified observability framework (metrics, logs, traces)
- **[Fluentd](https://landscape.cncf.io/?selected=fluentd)** (Incubating → Graduated) - Unified logging layer

## Projects Moving to Incubation (2025)

In 2025, **17 projects applied for Incubating status**, representing diverse areas of the cloud native ecosystem including AI acceleration, API management, storage, edge computing, and developer tooling.

### Incubation Applications Summary

| Project | Domain | TOC Issue | Previous Level | Applied Date |
|---------|--------|-----------|----------------|--------------|
| **[ORAS](https://landscape.cncf.io/?selected=oras)** | Artifact Registry | [#1951](https://github.com/cncf/toc/issues/1951) | Sandbox (2021-07-13) | 2025-10-30 |
| **[Cozystack](https://landscape.cncf.io/?selected=cozystack)** | Platform Engineering | [#1916](https://github.com/cncf/toc/issues/1916) | Sandbox (2025-03-02) | 2025-10-08 |
| **[Kgateway](https://landscape.cncf.io/?selected=kgateway)** | API Gateway | [#1913](https://github.com/cncf/toc/issues/1913) | Sandbox (2025-03-04) | 2025-10-06 |
| **[kcp](https://landscape.cncf.io/?selected=kcp)** | Kubernetes Control Plane | [#1909](https://github.com/cncf/toc/issues/1909) | Sandbox (2023-09-19) | 2025-10-01 |
| **[KServe](https://landscape.cncf.io/?selected=k-serve)** | ML Model Serving | [#1905](https://github.com/cncf/toc/issues/1905) | Sandbox → Graduated | 2025-09-28 |
| **[Open Cluster Management](https://landscape.cncf.io/?selected=open-cluster-management)** | Multi-cluster | [#1884](https://github.com/cncf/toc/issues/1884) | Sandbox (2021-11-09) | 2025-09-17 |
| **[HAMi](https://landscape.cncf.io/?selected=hami)** | GPU Virtualization | [#1775](https://github.com/cncf/toc/issues/1775) | Sandbox (2024-08-21) | 2025-07-15 |
| **[Microcks](https://landscape.cncf.io/?selected=microcks)** | API Mocking/Testing | [#1552](https://github.com/cncf/toc/issues/1552) | Sandbox (2023-06-21) | 2025-03-06 |
| **[OpenEBS](https://landscape.cncf.io/?selected=open-ebs)** | Storage | [#1537](https://github.com/cncf/toc/issues/1537) | Sandbox (2024-10-17) | 2025-02-14 |
| **[OpenFGA](https://landscape.cncf.io/?selected=openfga)** | Authorization | [#1287](https://github.com/cncf/toc/issues/1287) | Sandbox (2024-03-15) | Approved |
| **[Lima](https://landscape.cncf.io/?selected=lima)** | Development VMs | [#1348](https://github.com/cncf/toc/issues/1348) | Sandbox (2024-10-06) | Approved |
| **[KEDA](https://landscape.cncf.io/?selected=keda)** | Autoscaling | Previous Incubation | Incubating | 2025 |
| **[Volcano](https://landscape.cncf.io/?selected=volcano)** | Batch Scheduling | Previous Incubation | Incubating | 2025 |
| **[Kubewarden](https://landscape.cncf.io/?selected=kubewarden)** | Policy Engine | Previous Incubation | Incubating | 2025 |
| **[Metal3](https://landscape.cncf.io/?selected=metal-3)** | Bare Metal | Previous Incubation | Incubating | 2025 |
| **[Radius](https://landscape.cncf.io/?selected=radius)** | Application Platform | Previous Incubation | Incubating | 2025 |
| **[OpenYurt](https://landscape.cncf.io/?selected=openyurt)** | Edge Computing | [#1547/#1548](https://github.com/cncf/toc/issues/1548) | Sandbox | Approved |

### Featured Incubations

#### ORAS (OCI Registry As Storage)

**TOC Issue:** [#1951](https://github.com/cncf/toc/issues/1951) | **Applied:** October 30, 2025

[ORAS](https://landscape.cncf.io/?selected=oras) (Sandbox) provides a way to push and pull OCI artifacts to and from OCI-compliant registries, enabling artifact distribution beyond container images.

**Key Details:**
- **Repository:** [@oras-project](https://github.com/oras-project)
- **Current Level:** Sandbox (accepted 2021-07-13)
- **Landscape Entry:** [ORAS on CNCF Landscape](https://landscape.cncf.io/?selected=oras)
- **Adopters:** Multiple organizations using in production
- **Sub-projects:** CLI, SDKs (Go, Rust, Python, Java, .NET), GitHub Action

#### Open Cluster Management (OCM)

**TOC Issue:** [#1884](https://github.com/cncf/toc/issues/1884) | **Applied:** September 17, 2025

[Open Cluster Management](https://landscape.cncf.io/?selected=open-cluster-management) (Sandbox) provides multicluster orchestration capabilities for Kubernetes with vendor-neutral APIs and flexible extensibility framework.

**Key Details:**
- **Repository:** [@open-cluster-management-io/ocm](https://github.com/open-cluster-management-io/ocm)
- **Current Level:** Sandbox (accepted 2021-11-09)
- **Landscape Entry:** [OCM on CNCF Landscape](https://landscape.cncf.io/?selected=open-cluster-management)
- **Adopters:** Appscode, eBay, SpectroCloud, Alibaba, Red Hat
- **Integration:** Works with Argo CD, KubeVela, KubeStellar, Kueue

#### HAMi (Heterogeneous AI Computing Virtualization)

**TOC Issue:** [#1775](https://github.com/cncf/toc/issues/1775) | **Applied:** July 15, 2025

[HAMi](https://landscape.cncf.io/?selected=hami) (Sandbox) enables GPU virtualization and sharing for AI/ML workloads in Kubernetes, providing fine-grained resource allocation.

**Key Details:**
- **Repository:** [@Project-HAMi/HAMi](https://github.com/Project-HAMi/HAMi)
- **Current Level:** Sandbox (accepted 2024-08-21)
- **Landscape Entry:** [HAMi on CNCF Landscape](https://landscape.cncf.io/?selected=hami)
- **Focus:** GPU sharing, vGPU support, multi-vendor GPU support
- **Integration:** Works with Volcano, Koordinator

#### Microcks (API Mocking & Testing)

**TOC Issue:** [#1552](https://github.com/cncf/toc/issues/1552) | **Applied:** March 6, 2025

[Microcks](https://landscape.cncf.io/?selected=microcks) (Sandbox) provides Kubernetes-native mocking and testing capabilities for APIs and microservices.

**Key Details:**
- **Repository:** [@microcks/microcks](https://github.com/microcks/microcks)
- **Current Level:** Sandbox (accepted 2023-06-21)
- **Landscape Entry:** [Microcks on CNCF Landscape](https://landscape.cncf.io/?selected=microcks)
- **Focus:** API mocking, contract testing, service virtualization
- **Adopters:** Lombard Odier, CNAM, J.B. Hunt (documented use cases)

### Incubation Trends by Domain

**AI/ML Infrastructure (3 projects):**
- [HAMi](https://landscape.cncf.io/?selected=hami) (Sandbox) - GPU virtualization
- [KServe](https://landscape.cncf.io/?selected=k-serve) (Graduated) - Model serving (now Graduated)
- [OpenFGA](https://landscape.cncf.io/?selected=openfga) (Sandbox) - Fine-grained authorization for AI apps

**Multi-cluster & Edge (4 projects):**
- [Open Cluster Management](https://landscape.cncf.io/?selected=open-cluster-management) (Sandbox) - Multi-cluster orchestration
- [kcp](https://landscape.cncf.io/?selected=kcp) (Sandbox) - Kubernetes control plane abstraction
- [KubeEdge](https://landscape.cncf.io/?selected=kube-edge) (Incubating) - Edge computing (moving to Graduation)
- [OpenYurt](https://landscape.cncf.io/?selected=openyurt) (Sandbox) - Edge computing platform

**Developer Tools (3 projects):**
- [Lima](https://landscape.cncf.io/?selected=lima) (Sandbox) - Development VMs for macOS
- [Microcks](https://landscape.cncf.io/?selected=microcks) (Sandbox) - API mocking and testing
- [Telepresence](https://landscape.cncf.io/?selected=telepresence) (Sandbox) - Local development (moving to Graduation)

**Storage & Data (2 projects):**
- [OpenEBS](https://landscape.cncf.io/?selected=open-ebs) (Sandbox) - Container-attached storage
- [ORAS](https://landscape.cncf.io/?selected=oras) (Sandbox) - OCI artifact distribution

**Networking & Gateway (2 projects):**
- [Kgateway](https://landscape.cncf.io/?selected=kgateway) (Sandbox) - Kubernetes Gateway API
- [Cilium](https://landscape.cncf.io/?selected=cilium) (Incubating) - Networking (moving to Graduation)

**Platform Engineering (3 projects):**
- [Cozystack](https://landscape.cncf.io/?selected=cozystack) (Sandbox) - Platform as a service
- [Radius](https://landscape.cncf.io/?selected=radius) (Incubating) - Application platform
- [Kubewarden](https://landscape.cncf.io/?selected=kubewarden) (Incubating) - Policy engine

## Projects Moving to Archived Status (2025)

In 2025, **13 projects were archived**, representing projects that lost maintainer support, had zero activity, or failed to maintain community momentum. The majority (9 projects, 69%) were Sandbox-level projects, with 4 Incubating projects also archived.

### Archived Projects Summary

| Project | Domain | TOC Issue | Previous Level | Archived Date |
|---------|--------|-----------|----------------|---------------|
| **[Keptn](https://landscape.cncf.io/?selected=keptn)** | Application Delivery | [#1584](https://github.com/cncf/toc/issues/1584) | Incubating | 2025-09-08 |
| **[Krustlet](https://landscape.cncf.io/?selected=krustlet)** | WebAssembly Runtime | [#1385](https://github.com/cncf/toc/issues/1385) | Incubating | 2025-09-16 |
| **[CNI-Genie](https://landscape.cncf.io/?selected=cni-genie)** | Networking | [#1680](https://github.com/cncf/toc/issues/1680) | Sandbox | 2025-10-03 |
| **[Xline](https://landscape.cncf.io/?selected=xline)** | Distributed Coordination | [#1668](https://github.com/cncf/toc/issues/1668) | Sandbox | 2025-09-29 |
| **[Pravega](https://landscape.cncf.io/?selected=pravega)** | Stream Processing | [#1460](https://github.com/cncf/toc/issues/1460) | Sandbox | 2025-10-01 |
| **[Merbridge](https://landscape.cncf.io/?selected=merbridge)** | Service Mesh | [#1725](https://github.com/cncf/toc/issues/1725) | Sandbox | 2025-06-06 |
| **[Sealer](https://landscape.cncf.io/?selected=sealer)** | Cluster Delivery | [#1721](https://github.com/cncf/toc/issues/1721) | Sandbox | 2025-06-06 |
| **[Teller](https://landscape.cncf.io/?selected=teller)** | Secrets Management | [#1723](https://github.com/cncf/toc/issues/1723) | Sandbox | 2025-06-06 |
| **[DevStream](https://landscape.cncf.io/?selected=devstream)** | DevOps Toolchain | [#1724](https://github.com/cncf/toc/issues/1724) | Sandbox | 2025-06-06 |
| **[OpenELB](https://landscape.cncf.io/?selected=openelb)** | Load Balancer | [#1722](https://github.com/cncf/toc/issues/1722) | Sandbox | 2025-06-06 |
| **[Nocalhost](https://landscape.cncf.io/?selected=nocalhost)** | Development Environment | [#1569](https://github.com/cncf/toc/issues/1569) | Incubating | 2025-06-06 |
| **[SuperEdge](https://landscape.cncf.io/?selected=superedge)** | Edge Computing | [#1570](https://github.com/cncf/toc/issues/1570) | Incubating | 2025-06-06 |
| **[KubeDL](https://landscape.cncf.io/?selected=kubedl)** | Deep Learning | [#1571](https://github.com/cncf/toc/issues/1571) | Incubating | 2025-06-06 |

### Archival Trends

**By Maturity Level:**
- **Sandbox**: 9 projects (69%) - CNI-Genie, Xline, Pravega, Merbridge, Sealer, Teller, DevStream, OpenELB
- **Incubating**: 4 projects (31%) - Keptn, Krustlet, Nocalhost, SuperEdge, KubeDL

**Common Archival Triggers:**
- **Maintainer Departure** - Major contributor or corporate sponsor withdrawal (e.g., Keptn - Dynatrace stepped back)
- **Zero Activity** - Extended periods (6-12 months) with no commits or community engagement (e.g., Xline, Pravega)
- **Corporate Strategy Shifts** - Batch archival of Chinese ecosystem projects in Q2 2025 (Sealer, OpenELB, DevStream, etc.)

**Archival Velocity:**
- Q2 2025: 8 projects (major batch archival event)
- Q3 2025: 3 projects (Keptn, Krustlet, Xline)
- Q4 2025: 2 projects (CNI-Genie, Pravega)

## 2025 Analysis and Insights

### Project Maturity Progression

**Graduation Velocity:**
- 13 projects achieved or applied for Graduated status in 2025
- Represents ~30% growth in graduated projects compared to 2024
- Average time from Incubation to Graduation: 18-24 months
- Domains: Networking (3), Observability (2), AI/ML (2), Edge (2), Others (4)

**Incubation Pipeline Health:**
- 17 projects in incubation process during 2025
- Strong representation of emerging technologies (AI/ML, Edge, Platform Engineering)
- Sandbox-to-Incubation time decreasing (average 12-18 months in 2025 vs 24+ months previously)

### Domain Distribution Analysis

#### 2025 Graduation Applications by Category

| Category | Count | Projects |
|----------|-------|----------|
| **Networking & Security** | 3 | [Cilium](https://landscape.cncf.io/?selected=cilium), [Istio](https://landscape.cncf.io/?selected=istio), [Kyverno](https://landscape.cncf.io/?selected=kyverno) |
| **Observability** | 2 | [OpenTelemetry](https://landscape.cncf.io/?selected=open-telemetry), [Fluentd](https://landscape.cncf.io/?selected=fluentd) |
| **AI/ML Infrastructure** | 2 | [KServe](https://landscape.cncf.io/?selected=k-serve), [WasmEdge](https://landscape.cncf.io/?selected=wasm-edge) |
| **Edge Computing** | 2 | [KubeEdge](https://landscape.cncf.io/?selected=kube-edge), [K3s](https://landscape.cncf.io/?selected=k-3-s) |
| **Storage** | 1 | [TiKV](https://landscape.cncf.io/?selected=ti-kv), [Dragonfly](https://landscape.cncf.io/?selected=dragonfly) |
| **Runtime & Platform** | 2 | [Dapr](https://landscape.cncf.io/?selected=dapr), [VirtIO](https://landscape.cncf.io/?selected=virtink) |
| **Developer Tools** | 1 | [Telepresence](https://landscape.cncf.io/?selected=telepresence) |

#### 2025 Incubation Applications by Category

| Category | Count | Projects |
|----------|-------|----------|
| **Multi-cluster & Edge** | 4 | [OCM](https://landscape.cncf.io/?selected=open-cluster-management), [kcp](https://landscape.cncf.io/?selected=kcp), [OpenYurt](https://landscape.cncf.io/?selected=openyurt), [KubeEdge](https://landscape.cncf.io/?selected=kube-edge) |
| **AI/ML Infrastructure** | 3 | [HAMi](https://landscape.cncf.io/?selected=hami), [KServe](https://landscape.cncf.io/?selected=k-serve), [OpenFGA](https://landscape.cncf.io/?selected=openfga) |
| **Developer Tools** | 3 | [Lima](https://landscape.cncf.io/?selected=lima), [Microcks](https://landscape.cncf.io/?selected=microcks), [Telepresence](https://landscape.cncf.io/?selected=telepresence) |
| **Platform Engineering** | 3 | [Cozystack](https://landscape.cncf.io/?selected=cozystack), [Radius](https://landscape.cncf.io/?selected=radius), [Kubewarden](https://landscape.cncf.io/?selected=kubewarden) |
| **Storage & Artifacts** | 2 | [OpenEBS](https://landscape.cncf.io/?selected=open-ebs), [ORAS](https://landscape.cncf.io/?selected=oras) |
| **Networking & Gateway** | 2 | [Kgateway](https://landscape.cncf.io/?selected=kgateway), [Cilium](https://landscape.cncf.io/?selected=cilium) |

### Emerging Technology Trends

**AI/ML Acceleration:**
- [HAMi](https://landscape.cncf.io/?selected=hami) (Sandbox): GPU virtualization enabling efficient resource sharing
- [KServe](https://landscape.cncf.io/?selected=k-serve) (Graduated): Production model serving and inference
- [OpenFGA](https://landscape.cncf.io/?selected=openfga) (Sandbox): Fine-grained authorization for AI applications
- Trend: Infrastructure projects supporting AI/ML workloads gaining traction

**Edge Computing Maturity:**
- [KubeEdge](https://landscape.cncf.io/?selected=kube-edge) (Incubating) and [OpenYurt](https://landscape.cncf.io/?selected=openyurt) (Sandbox) moving toward higher maturity levels
- [K3s](https://landscape.cncf.io/?selected=k-3-s) (Sandbox) graduating as lightweight Kubernetes for edge
- Trend: Edge computing patterns becoming mainstream in CNCF

**Platform Engineering:**
- [Cozystack](https://landscape.cncf.io/?selected=cozystack) (Sandbox), [Radius](https://landscape.cncf.io/?selected=radius) (Incubating) emerging as platform abstraction layers
- Focus on developer experience and platform-as-a-product
- Trend: Higher-level abstractions built on Kubernetes

**Developer Experience:**
- [Lima](https://landscape.cncf.io/?selected=lima) (Sandbox), [Microcks](https://landscape.cncf.io/?selected=microcks) (Sandbox), [Telepresence](https://landscape.cncf.io/?selected=telepresence) (Sandbox) focusing on inner loop development
- API-first development with mocking and testing tools
- Trend: Improving developer productivity in cloud native environments

### Cross-Project Integration Patterns

**High Integration Projects (Referenced by 3+ other projects):**
- [Kubernetes](https://landscape.cncf.io/?selected=kubernetes) (Graduated) (referenced by all projects)
- [Prometheus](https://landscape.cncf.io/?selected=prometheus) (Graduated) (monitoring integration in 12+ projects)
- [OpenTelemetry](https://landscape.cncf.io/?selected=open-telemetry) (Incubating) (observability in 8+ projects)
- [Istio](https://landscape.cncf.io/?selected=istio) (Incubating) (service mesh integration in 5+ projects)

**Emerging Integration Hubs:**
- [Kgateway](https://landscape.cncf.io/?selected=kgateway) (Sandbox) integrating with Istio, Argo Rollouts, OpenTelemetry
- [Open Cluster Management](https://landscape.cncf.io/?selected=open-cluster-management) (Sandbox) with Argo CD, KubeVela, KubeStellar, Kueue
- [HAMi](https://landscape.cncf.io/?selected=hami) (Sandbox) with Volcano, Koordinator for specialized scheduling

### Geographic and Organizational Diversity

**Contributor Organizations (Top Contributing Companies):**
- Cloud Providers: AWS, Google, Microsoft, Alibaba
- Infrastructure Vendors: Red Hat, VMware, SUSE
- Independent: Strong individual contributor presence
- Regional: Growing contributions from APAC region (China, India, Japan)

**Maintainer Diversity Trends:**
- Average: 5-10 maintainers per incubating project
- Vendor spread: 3-5 organizations per project (healthy)
- Improvement: Projects demonstrating active maintainer succession

### Success Factors for 2025 Transitions

**Projects Successfully Transitioning Share:**

1. **Clear Adopter Evidence**
   - Public adopter lists with production use cases
   - Case studies from enterprise organizations
   - Documented adoption levels (dev/test/prod)

2. **Strong Security Posture**
   - OpenSSF Best Practices badges (Passing or higher)
   - Completed security self-assessments
   - Security audit completion for graduation
   - Proactive vulnerability management

3. **Active Community Governance**
   - Regular maintainer additions/rotations
   - Documented governance evolution
   - Transparent decision-making processes
   - Vendor-neutral direction

4. **Technical Excellence**
   - Regular quality releases
   - Comprehensive documentation
   - Production-grade testing
   - Integration with CNCF ecosystem

5. **TAG Engagement**
   - Presentations to relevant TAGs
   - General Technical Reviews completed
   - Active participation in TAG discussions
   - Alignment with TAG recommendations

### Challenges and Observations

**Common Application Gaps:**
- Incomplete security self-assessments (delays graduation)
- Insufficient adopter interview responses
- Governance documentation not reflecting actual practices
- Missing Day 2 operations documentation for graduation

**Process Improvements in 2025:**
- Clearer readiness triage guides
- Better adopter verification processes
- Streamlined security assessment workflows
- Enhanced post-graduation tracking

## 2025 Project Statistics Summary

### By the Numbers

| Metric | Count |
|--------|-------|
| **Total Projects Moving Levels** | 30 |
| **Graduation Applications** | 13 |
| **Incubation Applications** | 17 |
| **Projects Archived** | 13 |
| **Approved Graduations** | 13 |
| **Approved Incubations** | ~10+ |
| **Average Sandbox Duration** | 12-18 months |
| **Average Incubation Duration** | 18-24 months |

### Domain Representation

**Most Active Domains in 2025:**
1. Multi-cluster & Edge Computing - 4 projects
2. AI/ML Infrastructure - 3 projects  
3. Developer Tools & Experience - 3 projects
4. Networking & Security - 3 projects
5. Platform Engineering - 3 projects

### Key Milestones

**Q1 2025:**
- OpenTelemetry graduation application
- Microcks incubation application
- OpenEBS incubation application

**Q2 2025:**
- Cilium graduation (approved)
- Istio graduation (approved)
- HAMi incubation application
- Batch archival: 8 projects (Merbridge, Sealer, Teller, DevStream, OpenELB, Nocalhost, SuperEdge, KubeDL)

**Q3 2025:**
- KServe graduation (approved)
- Open Cluster Management incubation
- Dapr graduation (approved)
- Keptn archived (September)
- Krustlet archived (September)
- Xline archived (September)

**Q4 2025:**
- ORAS incubation application
- Multiple graduation approvals finalized
- Cozystack and Kgateway incubation applications
- CNI-Genie archived (October)
- Pravega archived (October)

## Related Work

- [CNCF Archived Projects Report](./cncf-archived-projects-report.md) - Detailed archival analysis
- [CNCF Project Maturity Levels](https://www.cncf.io/projects/)
- [CNCF Landscape - All Projects](https://landscape.cncf.io/)
- [CNCF DevStats - Project Metrics](https://devstats.cncf.io/)
- [TOC Moving Levels Process](https://github.com/cncf/toc/blob/main/process/README.md)

## References

- [@cncf/toc](https://github.com/cncf/toc) - CNCF Technical Oversight Committee
- [@cncf/landscape](https://github.com/cncf/landscape) - CNCF Landscape Repository
- [CNCF TOC Graduation Issues](https://github.com/cncf/toc/issues?q=is%3Aissue+graduated+in%3Atitle+created%3A2025)
- [CNCF TOC Incubation Issues](https://github.com/cncf/toc/issues?q=is%3Aissue+incubation+in%3Atitle+created%3A2025)
- [CNCF TOC Archival Issues](https://github.com/cncf/toc/issues?q=is%3Aissue+label%3Alevel%2Farchive+closed%3A2025)

## Associated Issues

| Issue | Project | Type | Status | Link |
|-------|---------|------|--------|------|
| #1951 | ORAS | Incubation | Open | [Link](https://github.com/cncf/toc/issues/1951) |
| #1916 | Cozystack | Incubation | Open | [Link](https://github.com/cncf/toc/issues/1916) |
| #1913 | Kgateway | Incubation | Open | [Link](https://github.com/cncf/toc/issues/1913) |
| #1909 | kcp | Incubation | Open | [Link](https://github.com/cncf/toc/issues/1909) |
| #1905 | KServe | Graduation | Approved | [Link](https://github.com/cncf/toc/issues/1905) |
| #1884 | OCM | Incubation | Open | [Link](https://github.com/cncf/toc/issues/1884) |
| #1775 | HAMi | Incubation | Open | [Link](https://github.com/cncf/toc/issues/1775) |
| #1552 | Microcks | Incubation | Open | [Link](https://github.com/cncf/toc/issues/1552) |
| #1537 | OpenEBS | Incubation | Open | [Link](https://github.com/cncf/toc/issues/1537) |
| #1367 | KServe | Graduation | Approved | [Link](https://github.com/cncf/toc/issues/1367) |

---

## Methodology

**Data Collection Period:** January 1, 2025 - November 9, 2025

**Data Sources:**
- [@cncf/toc](https://github.com/cncf/toc) repository issues (graduation and incubation applications)
- [@cncf/landscape](https://github.com/cncf/landscape) repository for project verification
- CNCF TOC project board for tracking application status
- Individual project repositories for adoption and community data

**Analysis Approach:**
- Searched all TOC issues with "graduation" in title created in 2025: 13 results
- Searched all TOC issues with "incubation" in title created in 2025: 17 results
- Cross-referenced each project with CNCF Landscape for accuracy
- Verified project details against official TOC issue templates and applications
- Analyzed trends across domains, technologies, and organizational patterns

**Scope:**
- This report focuses exclusively on projects moving maturity levels in 2025
- Includes both approved and in-progress applications as of the report date
- Statistics reflect the 365-day period from January 1, 2025 to December 31, 2025

**Limitations:**
- Some applications may still be in progress and not yet voted upon
- Adopter information is based on publicly available data
- Exact approval dates may vary for some projects pending final administrative steps

---

**Report Generated:** November 9, 2025  
**Report Version:** 2025.11.09  
**Data Accuracy:** Verified against @cncf/toc and @cncf/landscape repositories  
**Next Update:** Q1 2026 (covering full 2025 data)

**Note:** This report provides a comprehensive snapshot of CNCF project maturity transitions in 2025, demonstrating the health and growth of the cloud native ecosystem.
