#!/bin/bash

set -e

mkdir -p node_modules
wget https://raw.githubusercontent.com/zdave-parity/jam-np/refs/heads/main/simple.md -O node_modules/simple.md
wget https://hackmd.io/@polkadot/jip1/download -O node_modules/host-call-log.md
wget https://hackmd.io/@polkadot/jip2/download -O node_modules/jip2-gav.md

cp docs/knowledge/simple-networking/spec.md.tmpl docs/knowledge/simple-networking/spec.md
cat node_modules/simple.md >> docs/knowledge/simple-networking/spec.md
perl -pi -e "s/BUILD_DATE/$(date +%Y-%m-%d)/" docs/knowledge/simple-networking/spec.md

cp docs/knowledge/testing/pvm/host-call-log.md.tmpl docs/knowledge/testing/pvm/host-call-log.md
cat node_modules/host-call-log.md >> docs/knowledge/testing/pvm/host-call-log.md
perl -pi -e "s/BUILD_DATE/$(date +%Y-%m-%d)/" docs/knowledge/testing/pvm/host-call-log.md

cp docs/knowledge/rpc/jip2-gav.md.tmpl docs/knowledge/rpc/jip2-gav.md
cat node_modules/jip2-gav.md >> docs/knowledge/rpc/jip2-gav.md
perl -pi -e "s/BUILD_DATE/$(date +%Y-%m-%d)/" docs/knowledge/rpc/jip2-gav.md

npm run convert-yaml docs/dao/index.md

yarn build
