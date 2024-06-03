#!/usr/bin/env bash

# running this file with a free trial key can fail

node examples/apitestkeys.cjs

open examples/browser.html

node examples/esm.js

node examples/more-reverse-geocoding.js
node examples/opencage-docs-forward.js
node examples/opencage-docs-reverse.js

# node examples/node-with-proxy-url.js

npx tsx examples/typescript.ts
