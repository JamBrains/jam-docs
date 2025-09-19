---
title: Telemetry
sidebar_position: 3
slug: /knowledge/advanced/telemetry
---

We outline a protospec for using
[OpenTelemetry](https://opentelemetry.io/docs/languages/) to
instrument JAM implementations to open-source widely used systems like
Prometheus.  

Our primary focus is monitoring node-to-node communications of a
network of any size (from tiny V=6 to toaster V=1023) composed of
multiple client implementations.  Internal node tracing (mapping to
Jaeger) may be pursued by individual teams but does NOT need to be
coordinated and is outside of the scope.

At this point this is just a proto-spec for JAM implementation teams
to come to some consensus on what event types should be instrumented
and roughly how.  We can then develop working prototypes and discuss
how to deal with errors and precise formats with a few teams.  


### JAMNP + OpenTelemetry

The [JAMNP spec](/knowledge/simple-networking/spec.md) is used as a primary starting point to develop a telemetry system:

1. UP 0: Block Announcement
2. CE 128: Block Request
3. CE 129: State Request (for warp sync)
4. CE 131/132: Safrole Ticket Distribution
5. CE 133: Work-Package Submission
6. CE 134: Work-Package Sharing
7. CE 135: Work-Report Distribution
8. CE 136: Work-Report Request
9. CE 137: Shard Distribution
10. CE 138: Audit Shard Request
11. CE 139/140: Segment Shard Request
12. CE 141: Assurance Distribution
13. CE 142: Preimage Announcement
14. CE 143: Preimage Request
15. CE 144: Audit Announcement

We have drafted a protospec of how these may be instrumented in Go [here](https://github.com/jam-duna/jamtestnet/blob/main/telemetry/go/otel.go) -- this can be mapped to a PoC in this and other languages that OpenTelemetry supports [multiple languages](https://opentelemetry.io/docs/languages/)

Details: (from Go)
* for simplicity, we use simple types (string, int, uint16, uint32)
* all validatorIndex should be in the 0..V-1 (e.g in "tiny" 0..5) ("sender" and "receiver")
* all hashes are 0x prefixed (headerHash, erasureRoot, workPackageHash, startKey, endKey, workReportHash, .. )
* all timestamps are Unix timestamp, with at least millisecond-level accuracy

## Contributions welcome

Contributions in other languages will be useful to achieve improved consensus on how to instrument a JAM Testnet.

If you have a different conception of how to use open telemetry, especially in some other language, submit a PR!

For your contribution, your don't have ANYTHING depend on some internal type to your JAM implementation so
everyone can literally include this code.


# Uses

With multiple JAM implementations in place, a JAM Testnet can be built using open-source tools:
* Prometheus
* Grafana
* ... your favorite tool here ...

Individual JAM implementers can use this for tiny cases in the imminent future to monitor their JAMNP.

In Q1 + Q2 2025, with some JAM teams achieving QUIC interoperability, this could be done in the JAM toaster.
