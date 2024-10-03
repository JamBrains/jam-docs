---
sidebar_label: Chain Spec
---

# Chain Spec

The Chain Specification is a configuration that defines all core constants of the JAM Chain. The JMA Chain itself has fixed parameters, but for testing and local deployments it can be useful to define alternative versions of these parameters.

## Parameters

Each chain spec must define the following parameters. All other values are assumed to be set to the values of the Graypaper.

### `name`

The name of the spec.

### $\mathsf{V}$ `num_validators`

The number of validators.

### $\mathsf{E}$ `slots_per_epoch`

The number of slots in an epoch.

### $\mathsf{Y}$ `ticket_contest_end_epoch`

The epoch in which the ticket contest ends.  
Constraint: $\mathsf{Y} > 0 \land \mathsf{Y} < \mathsf{E}$

### $\mathsf{N}$ `tickets_per_validator`

The maximum number of tickets each validator can submit. This must be configurable to ensure that a 2/3+1 majority of validators can still finish the ticket contest successfully.  
Constraint: $(\frac{2}{3} * \mathsf{V} + 1) * \mathsf{N} >= \mathsf{E}$
