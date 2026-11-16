#!/usr/bin/env bash

# Consumer compatibility check for the built package.
# Packs the repo (requires a built dist/), installs the tarball into a throwaway
# consumer project, then:
#   - requires it from CommonJS and imports it from ESM with plain Node
#   - type-checks .cts / .mts consumers with the requested TypeScript version
#
# Usage: tests/compat/run.sh [typescript-version]   (default: latest)

set -euo pipefail

TS_VERSION="${1:-latest}"
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

echo "Node $(node --version) / TypeScript ${TS_VERSION}"

TARBALL="$(cd "$ROOT" && npm pack --silent --pack-destination "$WORK" | tail -n 1)"
cp -R "$ROOT/tests/compat/." "$WORK/consumer"
cd "$WORK/consumer"
rm -f run.sh

npm install --no-audit --no-fund --silent \
  "$WORK/$TARBALL" "typescript@${TS_VERSION}"

node require.cjs
node import.mjs

npx --no-install tsc --version
npx --no-install tsc -p tsconfig.json
echo "ok  TypeScript type-check"
