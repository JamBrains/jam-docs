---
id: jip2-node-rpc
title: "JIP-2: Node RPC"
sidebar_label: "JIP-2 Node RPC"
sidebar_position: 1
slug: /advanced/rpc/jip2-node-rpc
---

(source https://hackmd.io/@polkadot/jip2 from 2025-03-31)

<!-- The raw MD from above will be downloaded and appended -->
# JIP-2: Node RPC

RPC specification for JAM nodes to ensure JAM tooling which relies on being an RPC client is implementation-agnostic.

## Notes

RPCs are evil and should generally not be used: they lead to chronic centralisation and trust-maximisation (just see Ethereum for a great example of this trap).

However, there are not at present any light clients for JAM and the resources needed to run a regular client make the inclusion of a full-client inside of tooling to be unrealistic. We must therefore reluctantly presume that the tool-user has access to a trustworthy full node and can use its RPCs.

As soon as a light-client implementation is viable, the use of RPCs should be phased out immediately in favour of embedded light-clients in the tooling.

## RPC specification

Both arguments, results and notification types are passed as an array, which may be `null` for certain results (marked as such).

Types:
- `Hash`: a 32 item array with each item numeric between 0 and 255 inclusive.
- `Slot`: a single numeric item between 0 and $2^{32}-1$ inclusive
- `Blob`: an arbitrary length array each item numeric between 0 and 255 inclusive.
- `ServiceId`: a single numeric item between 0 and $2^{32}-1$ inclusive

### `bestBlock`
Returns the header hash and slot of the head of the "best" chain.
- Type: __Method__
- Arguments: None
- Result:
  - `Hash`: The header hash.
  - `Slot`: The slot.

### `subscribeBestBlock`
Subscribe to updates of the head of the "best" chain, as returned by `bestBlock`.
- Type: __Subscription__
- Notification type:
  - `Hash`: The header hash.
  - `Slot`: The slot.

### `finalizedBlock`
Returns the header hash and slot of the latest finalized block.
- Type: __Method__
- Arguments: None
- Result:
  - `Hash`: The header hash.
  - `Slot`: The slot.

### `subscribeFinalizedBlock`
Subscribe to updates of the latest finalized block, as returned by `finalizedBlock`.
- Type: __Subscription__
- Notification type:
  - `Hash`: The header hash.
  - `Slot`: The slot.

### `parent`
Returns the header hash and slot of the parent of the block with the given header hash, or `null` if this is not known.
- Type: __Method__
- Arguments: 
  - `Hash`: The hash of a child's header.
- Result: Either `null` or:
  - `Hash`: The parent's header hash.
  - `Slot`: The slot.

### `stateRoot`
Returns the posterior state root of the block with the given header hash, or `null` if this is not known.
- Type: __Method__
- Arguments: 
  - `Hash`: The header hash.
- Result: Either `null` or:
  - `Hash`: state_root

### `statistics`
Returns the activity statistics stored in the posterior state of the block with the given header hash. The statistics are encoded as per the GP. `null` is returned if the block's posterior state is not known.
- Type: __Method__
- Arguments: 
  - `Hash`: The header hash indicating the block whose posterior state should be used for the query.
- Result: `Blob`

### `subscribeStatistics`
Subscribe to updates of the activity statistics stored in chain state. If `finalized` is true, the subscription will track the latest finalized block. If `finalized` is false, the subscription will track the head of the "best" chain. Note that in the latter case the reported statistics may never be included in the finalized chain. The statistics are encoded as per the GP.
- Type: __Subscription__
- Notification type: `Blob`

### `serviceInfo`
Returns the service info for the given service ID. The data are encoded as per the GP. `null` is returned if the block's posterior state is not known. `Some(None)` is returned if there is no value associated with the given service ID.
- Type: __Method__
- Arguments: 
  - `Hash`: The header hash indicating the block whose posterior state should be used for the query.
  - `ServiceId`: The ID of the service.
- Result: Either `null` or `Blob`

### `subscribeServiceInfo`
Subscribe to updates of the service info for the given service ID. If `finalized` is true, the subscription will track the latest finalized block. If `finalized` is false, the subscription will track the head of the "best" chain. Note that in the latter case the reported service info may never be included in the finalized chain. The data are encoded as per the GP.
- Type: __Subscription__
- Notification type: `Blob`

### `serviceValue`
Returns the value associated with the given service ID and key in the posterior state of the block with the given header hash. `null` is returned if there is no value associated with the given service ID and key.
- Type: __Method__
- Arguments: 
  - `Hash`: The header hash indicating the block whose posterior state should be used for the query.
  - `ServiceId`: The ID of the service.
  - `Blob`: The key.
- Result: Either `null` or `Blob`

### `subscribeServiceValue`
Subscribe to updates of the value associated with the given service ID and key. If `finalized` is true, the subscription will track the latest finalized block. If `finalized` is false, the subscription will track the head of the "best" chain. Note that in the latter case reported value changes may never be included in the finalized chain. The `value` field of subscription messages will be `null` when there is no value associated with the given service ID and key.
- Type: __Subscription__
- Notification type: Either `null` or `Blob`

### `servicePreimage`
Returns the preimage associated with the given service ID and hash in the posterior state of the block with the given header hash. `null` is returned if there is no preimage associated with the given service ID and hash.
- Type: __Method__
- Arguments: 
  - `Hash`: The header hash indicating the block whose posterior state should be used for the query.
  - `ServiceId`: The ID of the service.
  - `Hash`: The hash.
- Result: Either `null` or `Blob`

### `subscribeServicePreimage`
Subscribe to updates of the preimage associated with the given service ID and hash. If `finalized` is true, the subscription will track the latest finalized block. If `finalized` is false, the subscription will track the head of the "best" chain. Note that in the latter case reported preimage changes may never be included in the finalized chain. The `preimage` field of subscription messages will be `null` when there is no preimage associated with the given service ID and hash.
- Type: __Subscription__
- Notification type: Either `null` or `Blob`
    
### `serviceRequest`
Returns the preimage request associated with the given service ID and hash/len in the posterior state of the block with the given header hash. `null` is returned if there is no preimage request associated with the given service ID, hash and length.
- Type: __Method__
- Arguments: 
  - `Hash`: The header hash indicating the block whose posterior state should be used for the query.
  - `ServiceId`: The ID of the service.
  - `Hash`: The hash.
  - `u32`: The preimage length.
- Result: Either `null` or array of `Slot`

### `subscribeServiceRequest`
Subscribe to updates of the preimage associated with the given service ID and hash. If `finalized` is true, the subscription will track the latest finalized block. If `finalized` is false, the subscription will track the head of the "best" chain. Note that in the latter case reported preimage changes may never be included in the finalized chain. The `request` field of subscription messages will be `null` when there is no preimage request associated with the given service ID, hash and length.
- Type: __Subscription__
- Notification type: Either `null` or array of `Slot`
    
### `beefyRoot`
Returns the BEEFY root of the block with the given header hash, or `null` if this is not known.
- Type: __Method__
- Arguments: 
	`Hash`: The header hash.
- Result: Either `null` or:
  - `Hash`: The BEEFY root.

### `submitWorkPackage`
Submit a work-package to the guarantors currently assigned to the given core.
- Type: __Method__
- Arguments: 
  - `CoreIndex`: The index of the core.
  - `Blob`: The encoded work-package.
  - array of `Blob`: The extrinsics.
- Result: None

### `submitPreimage`
Submit a preimage which is being requested by a given service.
- Type: __Method__
- Arguments: 
  - `ServiceId`: The ID of the service which has an outstanding request.
  - `Blob`: The preimage requested.
  - `Hash`: The block which must be in the best-chain for the preimage request to be valid.
- Result: None

### `listServices`
Returns a list of all services currently known to be on JAM. This is a best-effort list and may not reflect the true state. Nodes could e.g. reasonably hide services which are not recently active from this list.
- Type: __Method__
- Arguments: 
  - `Hash`: The header hash indicating the block whose posterior state should be used for the query.
- Result: array of `ServiceId`
