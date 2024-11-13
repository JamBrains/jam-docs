---
id: M1 Baby Steps
sidebar_label: M1 Baby Steps
sidebar_position: 2
slug: /basics/m1-baby-steps
---

A list of steps that JAM teams can use to have pre-M1 goals.

We discussed this topic among different implementors on Monday 12th, Oct 2024. Some items on this list are not needed for M1 directly, but could help on the path to further milestones.

## M0.0 Import Block (Safrole fallback)

The most basic JAM client functionality would be import empty blocks without SAFROLE tickets (|E_T| = 0). Must be able to handle epoch changes.

## M0.1 Import Block (Safrole proper)

Same as `M0.0` but with SAFROLE tickets (|E_T| > 0).

## M0.2 Author Block (Safrole fallback)

(Can be skipped if you only aim for M1)

This step requires a node to be able to produce a list of valid blocks from a genesis state. The correctness of this can be checked by trying to import it with all M0.0 clients. The blocks don't need to include any tickets (|E_T| = 0)

## M0.3 Author Block (Safrole proper)

(Can be skipped if you only aim for M1)

Same as M0.2 but must provide tickets for the authoring validator node (|E_T| > 0).

## vvv Big Jump vvv

The jump here is big since it means having to implement Guarantees, Assurances and all of the PVM accumulation logic. It could possibly be filled by conformance tests for sub-components. 

## M0.4 Import Block (happy case)

Same as M0.1 but with Guarantees, Assurances and Work Packages (|E_G| > 0, |E_A| > 0, |E_P| > 0).

## M0.5 Import Block (with disputes)

Same as M0.4 but must also be able to handle disputes (|E_D| > 0).
