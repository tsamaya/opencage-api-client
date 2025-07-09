#!/usr/bin/env bash
#
echo "Running examples with OpenCage API client..."
echo "Warning: running this file with a free trial key can fail"

echo "-- Running API Test Keys examples"
node examples/apitestkeys.cjs
echo ""
echo ""

echo "-- Open Browser example"
open examples/browser.html
echo ""
echo ""

echo "-- Running ESM examples"
node examples/esm.js
echo ""
echo ""

echo "-- Running forward geocoding examples"
node examples/opencage-docs-forward.js
echo ""
echo ""

echo "-- Running reverse geocoding examples"
node examples/opencage-docs-reverse.js
echo ""
echo ""

echo "-- Running more reverse geocoding examples"
node examples/more-reverse-geocoding.js
echo ""
echo ""

# echo "-- Running Node.js with Proxy URL example"
# node examples/node-with-proxy-url.js
# echo ""
# echo ""

echo "-- Running Typescript example (with tsx)"
npx tsx examples/typescript.ts
echo ""
echo ""

echo "-- Running AbortController example (with tsx)"
npx tsx examples/abort.ts
echo ""
echo ""
