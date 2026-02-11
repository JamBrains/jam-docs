#!/bin/bash

set -e

SIMPLE_NETWORKING_URL="https://github.com/zdave-parity/jam-np/blob/main/simple.md"
HOST_CALL_LOG_URL="https://github.com/polkadot-fellows/JIPs/blob/main/JIP-1.md"
JIP2_URL="https://github.com/polkadot-fellows/JIPs/blob/main/JIP-2.md"

# Convert github.com blob URLs to raw.githubusercontent.com URLs
to_raw_url() {
  echo "$1" | perl -pe 's|github\.com/(.+?)/(.+?)/blob/(.+)|raw.githubusercontent.com/$1/$2/refs/heads/$3|'
}

BUILD_DATE=$(date +%Y-%m-%d)

mkdir -p node_modules
wget "$(to_raw_url "$SIMPLE_NETWORKING_URL")" -O node_modules/simple.md
wget "$(to_raw_url "$HOST_CALL_LOG_URL")" -O node_modules/host-call-log.md
wget "$(to_raw_url "$JIP2_URL")" -O node_modules/jip2-gav.md

cp docs/knowledge/simple-networking/spec.md.tmpl docs/knowledge/simple-networking/spec.md
cat node_modules/simple.md >> docs/knowledge/simple-networking/spec.md
perl -pi -e "s|SOURCE_URL|${SIMPLE_NETWORKING_URL}|" docs/knowledge/simple-networking/spec.md
perl -pi -e "s/BUILD_DATE/${BUILD_DATE}/" docs/knowledge/simple-networking/spec.md

cp docs/knowledge/testing/pvm/host-call-log.md.tmpl docs/knowledge/testing/pvm/host-call-log.md
cat node_modules/host-call-log.md >> docs/knowledge/testing/pvm/host-call-log.md
perl -pi -e "s|SOURCE_URL|${HOST_CALL_LOG_URL}|" docs/knowledge/testing/pvm/host-call-log.md
perl -pi -e "s/BUILD_DATE/${BUILD_DATE}/" docs/knowledge/testing/pvm/host-call-log.md

cp docs/knowledge/rpc/jip2-gav.md.tmpl docs/knowledge/rpc/jip2-gav.md
cat node_modules/jip2-gav.md >> docs/knowledge/rpc/jip2-gav.md
perl -pi -e "s|SOURCE_URL|${JIP2_URL}|" docs/knowledge/rpc/jip2-gav.md
perl -pi -e "s/BUILD_DATE/${BUILD_DATE}/" docs/knowledge/rpc/jip2-gav.md
# Fix MDX-incompatible syntax in downloaded JIP-2 content
perl -pi -e 's/<(https?:\/\/[^>]+)>/[$1]($1)/g' docs/knowledge/rpc/jip2-gav.md
perl -pi -e 'if (!/\$|`/) { s/\{/\\{/g; s/\}/\\}/g }' docs/knowledge/rpc/jip2-gav.md

npm run convert-yaml docs/dao/index.md

yarn build
