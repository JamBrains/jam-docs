---
id: tiny
sidebar_label: tiny
sidebar_position: 0
---

A tiny spec for local testing.  

```yaml
chain: tiny
num_validators: 6
num_cores: 2
slot_duration: 6
epoch_duration: 12
contest_duration: 10
tickets_per_validator: 3
max_tickets_per_extrinsic: 3
```

Please consult a few other JAM implementer teams before changing this spec, as it is in use for
testnet setup and by W3F test vectors.
