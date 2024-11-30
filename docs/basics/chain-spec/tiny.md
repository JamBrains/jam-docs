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

* As many W3F test vectors match this tiny configuration, many teams are building short-lived testnets to match this configuration.  
* Consult a few other JAM implementers before changing "tiny" parameters.
