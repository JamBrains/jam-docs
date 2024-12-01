---
title: Test Suite
sidebar_position: 1
---

# JAM Trustless Supercomputing Test Suite

Beyond the "importblocks" test, here is a _wishlist_ of a broader range of JAM testing and benchmarking tools:

* `jamnp` - fuzz testing of JAMSNP UP0/CE128-145
* `jamservices` - fuzz testing PVM across refine, accumulate, transfer and authorize, with maximal host function coverage
* `jamda` - benchmarking JAM DA within JAM Toaster
* `jamtps` - benchmarking JAM TPS within JAM Toaster
* `jamplay` - fuzz testing of CoreVMs + Coreplay Services
* `jamsystem` - fuzz testing of Polkadot/Kusama JAM Chain in the context of Polkadot/Kusama system chains (primarily Polkadot Asset Hub)
* `jamchains` - fuzz testing of CoreChains Service

Most of the above suite can be reasonably managed by JAM implementers with no knowledge of Polkadot; the last few require a considerable amount of Polkadot 1.0/2.0 knowledge and may only be reasonably executed by highly experienced Polkadot fellows.  Much of the above could be connected to supporting UI/UX focussed on instrumentation with open-source tools (Prometheus, Grafana) and custom tools highlighting JAM's service architecture in a larger array of _Polkadot Cloud_ products and services.  

The broad idea here in this document is to organize an concrete plan for a collective of JAM implementers to accelerate production-level JAM implementations with a suitable test suite to achieve early milestones M1+M2 as well as support long-term JAM engineering objectives.
