---
id: json-rpc
title: JSON RPC Methods
sidebar_label: JSON RPC Methods
sidebar_position: 2
slug: /basics/rpc
---

# JSON RPC Methods

:::warning
🚧 This section is under construction and not final yet.  
:::

Here is a short _wishlist_ of JSON-RPC methods:

| Method Name                 | Description                                                                                                                                              | Response Format                                                                                                                         | JSON Response Support | JAM Codec Response Support | Paginatable |
|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|-----------------------|---------------------------|-------------|
| `jam_getBlockByHash`        | Looks up block by block hash or header hash and returns `Block`.                                                                                         | [JSON](https://github.com/w3f/jamtestvectors/blob/master/codec/data/block.json) or [Codec](https://github.com/w3f/jamtestvectors/blob/master/codec/data/block.bin) | ✅                     | ✅                         | ❌           |
| `jam_getWorkPackageByHash`  | Looks up `WorkPackage` by WorkPackageHash and returns `WorkPackage`.                                                                                     | [JSON](https://github.com/w3f/jamtestvectors/blob/master/codec/data/work_package.json) or [Codec](https://github.com/w3f/jamtestvectors/blob/master/codec/data/work_package.bin) | ✅                     | ✅                         | ❌           |
| `jam_getWorkReportByHash`   | Looks up `WorkReport` by WorkReportHash and returns `WorkReport`.                                                                                         | [JSON](https://github.com/w3f/jamtestvectors/blob/master/codec/data/work_report.json) or [Codec](https://github.com/w3f/jamtestvectors/blob/master/codec/data/work_report.bin) | ✅                     | ✅                         | ❌           |
| `jam_getService`            | Given a service ID, returns the "info" of the service.                                                                                                   | JSON or JAM Codec                                                                                                                       | ✅                     | ✅                         | ❌           |
| `jam_getServiceCode`        | Given a service ID, returns the code hash and code of the service. Optional parameters return the history of code.                                       | JSON or JAM Codec                                                                                                                       | ✅                     | ✅                         | ❌           |
| `jam_getServicePreimage`    | Given a service ID, returns `a_p`, the preimage raw bytes.                                                                                               | JSON or JAM Codec                                                                                                                       | ✅                     | ✅                         | ✅           |
| `jam_getServiceLookup`      | Given a service ID, returns `a_l`, all the hash and length.                                                                                              | JSON or JAM Codec                                                                                                                       | ✅                     | ✅                         | ✅           |
| `jam_getServiceStorage`     | Returns a full range of keys and values of the service.                                                                                                  | JSON or JAM Codec                                                                                                                       | ✅                     | ✅                         | ✅           |
| `jam_getState`              | Returns C1-C15, and if a service ID is provided, returns the full range of service keys in the state.                                                    | JSON or JAM Codec                                                                                                                       | ✅                     | ✅                         | ✅           |
| `jam_submitWorkPackage`     | Submits a work package for processing.                                                                                                                   | JSON or JAM Codec                                                                                                                       | ✅                     | ✅                         | ❌           |

#### Request JSON Response

```
curl -X POST -H "Content-Type: application/json" -H "Accept: application/json" \
--data '{"jsonrpc":"2.0","method":"jam_getBlockByHash","params":["0x1234abcd..."],"id":1}' \
http://localhost:8545
```

Response will be contained in the result object's data attribute:

```
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "data": ...method-specific object/array here...
  }
}
```

#### Request JAM Codec Response:

```
curl -X POST -H "Content-Type: application/json" -H "Accept: application/octet-stream" \
--data '{"jsonrpc":"2.0","method":"jam_getBlockByHash","params":["0x1234abcd..."],"id":1}' \
http://localhost:8545
```

Response will be binary data.

## Pagination

Pagination details are TBD.

# Example curl calls

## jam_getBlockByHash

Looks up block by block hash or header hash and returns `Block` in [JSON](https://github.com/w3f/jamtestvectors/blob/master/codec/data/block.json) or [codec](https://github.com/w3f/jamtestvectors/blob/master/codec/data/block.bin) form

```bash
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"jam_getBlockByHash","params":["0x1234abcd..."],"id":1}' http://localhost:8545
```


## jam_getWorkPackageByHash

Looks up WorkPackage by WorkPackageHash and returns `WorkPackage` in [JSON](https://github.com/w3f/jamtestvectors/blob/master/codec/data/work_package.json) or [codec](https://github.com/w3f/jamtestvectors/blob/master/codec/data/work_package.bin) form

```bash
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"jam_getWorkPackageByHash","params":["0x5678efgh..."],"id":2}' http://localhost:8545
```


## jam_getWorkReportByHash (similar to [CE 136: Work-report request](https://github.com/zdave-parity/jam-np/blob/main/simple.md))

Looks up WorkReport by WorkReportHash and returns `WorkReport` in [JSON](https://github.com/w3f/jamtestvectors/blob/master/codec/data/work_report.json) or [codec](https://github.com/w3f/jamtestvectors/blob/master/codec/data/work_report.bin) form

```bash
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"jam_getWorkReportByHash","params":["0x9abcijkl..."],"id":3}' http://localhost:8545
```


## jam_getService

Given a service id, returns the "info" of the service

```bash
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"jam_getService","params":["42"],"id":4}'  http://localhost:8545
```



## jam_getServiceCode

Given a service id, returns the codehash and code of the service.  Optional parameters returns the history of code

```bash
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"jam_getServiceCode","params":["42"],"id":5}'  http://localhost:8545
```


## jam_getServicePreimage

Given a service id, returns a_p, the preimage raw bytes.

```bash
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"jam_getServicePreimage","params":["42"],"id":6}' http://localhost:8545
```


## jam_getServiceLookup

Given a service id, returns a_l all the hash, len

```bash
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"jam_getServiceLookup","params":["42"],"id":7}' http://localhost:8545
```

## jam_getServiceStorage

Given a serviceID, returns a full range of keys and values of the service in $a_s$.

```bash
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"jam_getServiceStorage","params":["42"],"id":8}' http://localhost:8545
```

## jam_getState (similar to [CE 129](https://github.com/zdave-parity/jam-np/blob/main/simple.md#ce-129-state-request))

Given a startKey, endKey combination, returns the full range of keys in the range in the state in [JSON](https://github.com/jam-duna/jamtestnet/blob/main/traces/safrole/jam_duna/traces/395479_000.json) or [codec](https://github.com/jam-duna/jamtestnet/blob/main/traces/safrole/jam_duna/traces/395479_000.bin) form.  If a service ID is provided, the keys and values will be filtered by the service ID.

```bash
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"jam_getState","params":["0x0000...", "0xFFFF.."],"id":9}' http://localhost:8545
```

To query with a service ID:

```bash
curl -X POST -H "Content-Type: application/json"  --data '{"jsonrpc":"2.0","method":"jam_getState","params":["0x0000...", "0xFFFF..", "42"],"id":10}' http://localhost:8545
```



## jam_submitWorkPackage (similar to JAMNP - CE 133)

Given a core index and work package posted in [JSON](https://github.com/w3f/jamtestvectors/blob/master/codec/data/work_package.json) or [codec](https://github.com/w3f/jamtestvectors/blob/master/codec/data/work_package.bin) form, maps to the same as [CE133](https://github.com/zdave-parity/jam-np/blob/main/simple.md#ce-133-work-package-submission)

To post a work package in JSON, supply the core as the first input and work package as the second input following the codec format [here](https://github.com/w3f/jamtestvectors/blob/master/codec/data/work_package.json):

```bash
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"jam_submitWorkPackage","params":[1, {"authorization": "0x0102030405",...}],"id":11}' http://localhost:8545
```

To post a work package in raw JAM codec form, supply the core as the first input and work package as a second input as a 0x-prefixed hex represtenation of the JAM codec :

```bash
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"jam_submitWorkPackage","params":[1, "0x1234567..." }],"id":11}' http://localhost:8545
```



## Other RPC methods

To support a full JAM Services explorer, here are additional methods that would be desirable to support, in no particular order:

* `jam_getImportSegment` -- see GP Section 14.3
* `jam_getHistoricalLookup` -- see GP Section 9.5
* `jam_getValidatorStatistics` - see GP section 13
* `jam_getBeefyRoot` - see GP section 18
* `jam_getAuthorizationsPool` - see GP Section 8
* `jam_getAuthorizationQueue` - see GP Section 8
* `jam_getDisputes` - see GP Section 10
* `jam_getBlessedServices` - see GP Section 9.4
* `jam_getAccumulationQueue` - see GP Section 12
* `jam_getAccumulationHistory` - see GP Section 12

If you have additional suggestions, or would like to document these, submit a PR!
