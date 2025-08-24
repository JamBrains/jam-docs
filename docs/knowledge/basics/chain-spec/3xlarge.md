---
id: 3xlarge
sidebar_label: 3xLarge
sidebar_position: 6
slug: /basics/chain-spec/3xlarge
---

# 3xLarge

```yaml
chain: 3xlarge
num_validators: 684
num_cores: 228
preimage_expunge_period: 32
slot_duration: 6
epoch_duration: 600
contest_duration: 500
tickets_per_validator: 2
max_tickets_per_extrinsic: 16
rotation_period: TODO
num_ec_pieces_per_segment: 9
max_block_gas: TODO
max_refine_gas: TODO
```

* The epochs are 30 minutes rather than the full hour of the toaster.  
* We cannot fit TWO 3xlarge in the JAM Toaster.
