---
id: PVM Debugging
sidebar_label: PVM Debugging
sidebar_position: 3
slug: /testing/pvm-debug
---

Tools to help test PolkaVM blobs (custom format) and JAM services (GP format).

PVM blobs:
- [polkatool](https://github.com/paritytech/polkavm/tree/master/tools/polkatool): Must have for disassembling and inspecting blobs.
- [fluffy labs/pvm-debugger](https://pvm.fluffylabs.dev/): Interactive online debugger.

PolkaVM blobs:
- [JamBrains/PolkaVm-examples](https://github.com/JamBrains/polkavm-examples?tab=readme-ov-file#universal-pvm-executor): Universal PVM executor with hostcall mocking. Only good for smokescreen testing.

Host calls:
- [JIP-1](/knowledge/testing/pvm/host-call-log.md): Optional host call that can be used to log messages.

JAM services:
- CoreVM
- CoreChains
- CorePlay
