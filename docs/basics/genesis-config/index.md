---
id: Genesis Config
sidebar_label: Genesis Config
---

The genesis config provides the initial values that are needed by all nodes to start the JAM chain. Each field is explained below.

## Authorities

A list of Validator Key Tuples, called $\mathbb{K}$ in the Graypaper. This defines the validators that are permissioned to seal blocks for the current epoch. The accounts are the [Dev Accounts](../dev_accounts.md). 

## Schema

Machine readable JSON schema for the genesis config:

<details>

<summary>JSON Schema</summary>

```json
{
  "$schema": "https://json-schema.org/draft/2024-06/schema#",
  "type": "object",
  "properties": {
    "authorities": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "ed25519": {
            "type": "string",
            "pattern": "^0x[a-fA-F0-9]{64}$"
          },
          "bandersnatch": {
            "type": "string",
            "pattern": "^0x[a-fA-F0-9]{64}$"
          },
          "bls": {
            "type": "string",
            "pattern": "^0x[a-fA-F0-9]{288}$"
          },
          "metadata": {
            "type": "string",
            "pattern": "^0x[a-fA-F0-9]{256}$"
          }
        },
        "required": ["ed25519", "bandersnatch", "bls", "metadata"],
        "additionalProperties": true
      }
    }
  },
  "required": ["authorities"],
  "additionalProperties": true
}
```

</details>
