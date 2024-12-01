#!/bin/bash

mkdir -p node_modules
wget https://raw.githubusercontent.com/zdave-parity/jam-np/refs/heads/main/simple.md -O node_modules/simple.md

cp docs/advanced/networking/snp.md.tmpl docs/advanced/networking/snp.md
cat node_modules/simple.md >> docs/advanced/networking/snp.md

yarn build
