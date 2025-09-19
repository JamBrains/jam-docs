---
id: CLI Arguments
sidebar_label: CLI Arguments
slug: /basics/cli-args
---

These command line arguments should be understood by all JAM nodes to make testnet setup easy. If implementors want to deviate from their meaning or syntax, they should provide either a compatibility wrapper binary or a `testnet` subcommand on which these arguments work.

## Arguments

### `--bandersnatch hex`

Bandersnatch Seed (only for development).

### `--bls hex`

BLS Seed (only for development).

### `--datadir path`

Specifies the directory for the blockchain, keystore, and other data.

### `--ed25519 hex`

Ed25519 Seed (only for development).

### `--genesis path`

Specifies the genesis state json file.

### `--metadata string`

Node metadata (default "Alice").

### `--port int`

Specifies the network listening port (default 9900).

### `--ts int`

Epoch0 Unix timestamp (will override genesis config).

### `--validatorindex int`

Validator Index (only for development).

## Value Types

### `hex`
	
Mixed-case hex string with possible `0x` prefix.

### `path`
	
Relative or absolute file path according to the OS of being run on.
