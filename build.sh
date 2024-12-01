#!/bin/bash

set -e

mkdir -p node_modules
wget https://raw.githubusercontent.com/zdave-parity/jam-np/refs/heads/main/simple.md -O node_modules/simple.md

cp docs/advanced/simple-networking/spec.md.tmpl docs/advanced/simple-networking/spec.md
cat node_modules/simple.md >> docs/advanced/simple-networking/spec.md

yarn build
