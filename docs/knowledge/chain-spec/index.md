---
sidebar_label: Chain Spec
slug: /basics/chain-spec
sidebar_position: 3
---

# Chain Spec

The Chain Specification is a configuration that defines all core constants of the JAM Chain. The JAM Chain itself has fixed parameters, but for testing and local deployments it can be useful to define alternative versions of these parameters.  

Please consult a few other JAM implementer teams before changing these values, as it is in use for
testnet setup and by W3F test vectors.

## Parameters

Each chain spec must define the following parameters. All other values are assumed to be set to the values of the Graypaper.

### chain

The name of the spec.

### V `num_validators`

The number of validators.

### C `num_cores`

The number of cores.

### D `preimage_expunge_period`

The period in timeslots after which an unreferenced preimage may be expunged.

### P `slot_duration`

Slot time duration in seconds.

### E `epoch_duration`

The number of slots in an epoch.

### Y `contest_duration`

The epoch in which the ticket contest ends.  
Constraint: $\mathsf{Y} > 0 \land \mathsf{Y} < \mathsf{E}$

### N `tickets_per_validator`

The maximum number of tickets each validator can submit. This must be configurable to ensure that a 2/3+1 majority of validators can still finish the ticket contest successfully.  
Constraint: $(\frac{2*\mathsf{V}}{3} + 1) * \mathsf{N} >= \mathsf{E}$

### R `rotation_period`

The rotation period of validator-core assignments, in timeslots.

### K `max_tickets_per_extrinsic`

The maximum number of tickets which may be submitted in a single extrinsic.  
Constraint: $\mathsf{K} > 0$

### WP `num_ec_pieces_per_segment`

The number of erasure-coded pieces in a segment

### G_T `max_block_gas`

The total gas allocated across for **all** Accumulation.

### G_R `max_refine_gas`

The gas allocated to invoke a work-package's Refine logic
