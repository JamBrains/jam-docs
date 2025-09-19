---
id: full
sidebar_label: Full
slug: /basics/chain-spec/full
---

# Full

The full scale version that will be known as the "JAM Chain". All parameters here must match the Gray Paper.  
It is named *full* because it takes up the entire *JAM Toaster*.

```yaml
chain: full
num_validators: 1023
num_cores: 341
preimage_expunge_period: 19200
slot_duration: 6
epoch_duration: 600
contest_duration: 500
tickets_per_validator: 2
max_tickets_per_extrinsic: 16
rotation_period: 10
num_ec_pieces_per_segment: 6
max_block_gas: 3500000000
max_refine_gas: 5000000000
```
