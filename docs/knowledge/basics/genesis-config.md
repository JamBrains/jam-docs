---
id: Genesis Config (JIP-5)
sidebar_label: Genesis Config (JIP-5)
sidebar_position: 2
slug: /basics/genesis-config
---

The genesis config provides the initial values that are needed by all nodes to start the JAM chain. Each field is explained below.

:::warning
This page is assumes that [JIP-5@7048f79](https://github.com/polkadot-fellows/JIPs/pull/2) is accepted. The pre-JIP-5 version is available [here](../../old/genesis-config-pre-jip5.md).
:::

## Authorities

A list of Validator Key Tuples, called $\mathbb{K}$ in the Graypaper. This defines the validators that are permissioned to seal blocks for the current epoch. The accounts are the [Dev Accounts](./dev-accounts.md).

## Genesis Block Header

The genesis block header ($H_0$) is the initial header in the chain, upon which
consensus is inherently assumed.

For the purpose of simplifying interoperability testing - such as importing test
vectors - we define the following values for the genesis header.

```json
{
    "parent": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "parent_state_root": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "extrinsic_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "slot": 0,
    "epoch_mark": {
        "entropy": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "tickets_entropy": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "validators": [
            {
                "bandersnatch": "0xff71c6c03ff88adb5ed52c9681de1629a54e702fc14729f6b50d2f0a76f185b3",
                "ed25519": "0x4418fb8c85bb3985394a8c2756d3643457ce614546202a2f50b093d762499ace"
            },
            {
                "bandersnatch": "0xdee6d555b82024f1ccf8a1e37e60fa60fd40b1958c4bb3006af78647950e1b91",
                "ed25519": "0xad93247bd01307550ec7acd757ce6fb805fcf73db364063265b30a949e90d933"
            },
            {
                "bandersnatch": "0x9326edb21e5541717fde24ec085000b28709847b8aab1ac51f84e94b37ca1b66",
                "ed25519": "0xcab2b9ff25c2410fbe9b8a717abb298c716a03983c98ceb4def2087500b8e341"
            },
            {
                "bandersnatch": "0x0746846d17469fb2f95ef365efcab9f4e22fa1feb53111c995376be8019981cc",
                "ed25519": "0xf30aa5444688b3cab47697b37d5cac5707bb3289e986b19b17db437206931a8d"
            },
            {
                "bandersnatch": "0x151e5c8fe2b9d8a606966a79edd2f9e5db47e83947ce368ccba53bf6ba20a40b",
                "ed25519": "0x8b8c5d436f92ecf605421e873a99ec528761eb52a88a2f9a057b3b3003e6f32a"
            },
            {
                "bandersnatch": "0x2105650944fcd101621fd5bb3124c9fd191d114b7ad936c1d79d734f9f21392e",
                "ed25519": "0xab0084d01534b31c1dd87c81645fd762482a90027754041ca1b56133d0466c06"
            }
        ]
    },
    "tickets_mark": null,
    "offenders_mark": [],
    "author_index": 0,
    "entropy_source": "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "seal": "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
}
```

Expected hash: `0xe864d485113737c28c2fef3b2aed39cb2f289a369b15c54e9c44720bcfdc0ca0`

Binary encoding must adhere to the Block serialization specification established in the Gray Paper.

### Chosen Values Rationale

- `parent`: Set to zero because there is no parent block preceding the genesis block.  
- `parent_state_root`: Set to zero since there is no parent preceding the genesis state.  
- `extrinsic_hash`: There is no extrinsic to hash.
- `slot`: Set to `0` (representing the count of slots since the start of the Jam Common Era).  
- `epoch_mark`: The first block in an epoch should contain the validators for the next epoch.
  - `entropy`: Set to zero.  
  - `tickets_entropy`: No tickets exist, meaning no entropy is utilized.  
  - `validators`: Defined as the dev authorities [accounts](./dev-accounts.md).
- `tickets_mark`: No tickets are available to share.  
- `offenders_mark`: No offenders have been identified yet.  
- `author_index`: As this block has not been authored by a specific validator, use `0xffff` as a wildcard.  
- `entropy_source`: This block has not been signed by a specific validator.  
- `seal`: Similarly, this block has not been signed by a specific validator.  

For technical accuracy, the state referenced by this header hash, which
represents the genesis state ($σ_0$), should match with some of the values
presented within the header:
- `slot`: expected to match $\sigma_0 \cdot \tau$.
- `epoch_mark.entropy` expected to match $\sigma_0 \cdot \eta_1$.
- `epoch_mark.tickets_entropy` expected to match $\sigma_0 \cdot \eta_2$.
- `validators` expected to match $\sigma_0 \cdot \gamma_k$.

It is important to note that using this header as $H_0$ will inevitably
lead to small inconsistencies within the state it references, $\sigma_0$. These
inconsistencies violate certain invariants assumed for posterior states
referenced by other block header hashes when computed through the protocol's
State Transition Function (STF). Specifically, $\sigma_0 \cdot \eta_0$ is technically
expected to be derived from hashing a prior entropy value concatenated with
the fresh entropy generated by the `entropy_source` specified in the header.
However, because this header lacks a valid signature for the entropy source,
we adopt a lenient approach to these discrepancies during this initial testing
phase (and potentially in production as well).

## All Specs

Every spec has a unique genesis header hash. All genesis headers  generated in the same manner as
the `tiny` header. The only difference between them are the initial authorities.

- [Tiny](./chain-spec/tiny.md) `0xe864d485113737c28c2fef3b2aed39cb2f289a369b15c54e9c44720bcfdc0ca0`
- [Full](./chain-spec/toaster.md) `0x57f075e6bb0b8778b59261fa7ec32626464e4d2f444fca4312dfbf94f3584032`
