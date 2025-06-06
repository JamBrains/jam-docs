---
id: conformance tests
sidebar_label: Conformance Tests
sidebar_position: 3
slug: /testing/conformance
---

# Conformance Tests

Conformance tests are used to check that an implementation adheres to the exact definitions of the Graypaper. There are official ones and unofficial test vectors. Only official ones need to be passed for the JAM Prize, but it is advisable to try and pass as many as possible to ensure that an implementation is 100% conformant.  
Otherwise there is the chance that private conformance test vector will reveal issues in an implementation when trying to claim the JAM Prize.

## Web3 Foundation (official)

The Web3 Foundation provides conformance tests at [w3f/jamtestvectors](https://github.com/w3f/jamtestvectors). These need to be passed by any conformant implementation.

## Colorful Notion

[Testnet Compliance](https://docs.google.com/spreadsheets/d/1JVt_1daKJWslCaP9hfggKQSN4aGuV_le0XkKcsrjXDc/edit?gid=0#gid=0) tracking sheet per client for the different levels:

- [Safrole fallback](https://github.com/jam-duna/jamtestnet/tree/main/data/fallback)
- [Safrole proper](https://github.com/jam-duna/jamtestnet/tree/main/data/safrole)
- [Assurances](https://github.com/jam-duna/jamtestnet/tree/main/data/assurances)
- [Ordered accumulation](https://github.com/jam-duna/jamtestnet/tree/main/data/orderedaccumulation)

## JavaJAM

- [Safrole transition vectors](https://github.com/javajamio/javajam-trace)
