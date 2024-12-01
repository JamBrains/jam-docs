---
id: 3xlarge
sidebar_label: 3xlarge
sidebar_position: 6
slug: /basics/chain-spec/3x-large
---

```yaml
chain: 3xlarge
num_validators: 576
num_cores: 192
slot_duration: 6
epoch_duration: 600
contest_duration: 500
tickets_per_validator: 2
max_tickets_per_extrinsic: 16
```

* The epochs are 30 minutes rather than the full hour of the toaster.  
* We cannot fit TWO 3xlarge in the JAM Toaster.
