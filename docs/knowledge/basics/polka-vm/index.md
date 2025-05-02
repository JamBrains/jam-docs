---
id: PolkaVM
sidebar_label: PolkaVM
sidebar_position: 4
slug: /polkavm
---

The Polkadot Virtual Machine (aka *PVM*) is a Virtual Machine specification based on the RISC-V instruction set. It is based on a prototype known as PolkaVM and developed by [Parity](https://github.com/paritytech/polkavm?tab=readme-ov-file#polkavm) as an open source project. It will be utilized by the JAM Chain to provide [deterministic](#determinism) and [metered](#metering) execution and is specified in the [Gray Paper](https://graypaper.fluffylabs.dev/#/5b732de/231100231200). It can be programmed in any language that compiles to RISC-V. Some obvious examples are; Rust, YUL (Solidity) or C/C++.

Its architecture is optimized for [compilation-](#compilation) and execution-speed on physical hardware.

## JAM Services

The main use-case for PVM is to provide execution semantics for JAM services. PVM can also be used for things that are unrelated to JAM, but may not be optimized for those. 
A JAM service contains metadata that is relevant for JAM and an inner PVM bytecode program. This PVM program exposes specific entry points for the JAM chain to invoke, for example: *refine* and *accumulate*.

## Determinism

>A function is called *deterministic* if and only if it yields the same result on the same input every time.

The JAM Chain relies on PolkaVM for interpreting what a service wants to do. For the consensus of the JAM Chain to work,
all validators that interpret a service must arrive at the same outcome. PVM must therefore be deterministic for it to be useful for the JAM Chain.

For example, if one validator had a faulty PVM implementation, it would report a different outcome and possibly be slashed for such an offence.

## Metering

PVM defines a fixed cost for each instruction (aka *weight*). It gets initialized with an upper limit of *weight* and can run at most until that limit is reached. This is very useful to progressively advance a service in each block.

Abstractly, you can think of *weight* as being similar to Polkadot's *Core Time*.

## Compilation

PVM is optimized for extremely fast Just-In-Time compilation speed. 
To execute a PVM bytecode program (aka *blob*) on modern hardware, it is necessary to translate the RISC-V instructions of the *blob* to native instructions of the hardware that wants to run it.

This process happens on-the-fly whenever a *blob* should be executed and must therefore be fast.
