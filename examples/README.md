# opencage-api-client examples

### Browser

This example shows how to use the library within a vanilla javascript application.

[browser.html](./browser.html)

### Node

This example shows how to use the library with NodeJS using a environnement variable for the API key

[node.js](./node.js)

ComonJS example:

[apitestkeys.js](./apitestkeys.js)
```bash
node apitestkeys.cjs
# geocode - 402 Payment Required ------------
# Error caught: Payment Required { status: { code: 402, message: 'Payment Required' } }
# e [Error]: Payment Required
#     at a (/Users/arnaud/projects/tsamaya/opencage-api-client/dist/opencage-api.cjs:1:2116)
#     at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
#   response: undefined,
#   status: { code: 402, message: 'Payment Required' }
# }
# geocode - 429 Too Many Requests ------------
# Error caught: Too Many Requests { status: { code: 429, message: 'Too Many Requests' } }
# e [Error]: Too Many Requests
#     at a (/Users/arnaud/projects/tsamaya/opencage-api-client/dist/opencage-api.cjs:1:2116)
#     at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
#   response: undefined,
#   status: { code: 429, message: 'Too Many Requests' }
# }
# {
#   "status": {
#     "code": 429,
#     "message": "Too Many Requests"
#   }
# }
```

### Node with Proxy URL

This example shows how to use the library with NodeJS using a proxy URL to hide your API key.

[node-with-proxy-url.js](./node-with-proxy-url.js)

- AWS Lambda proxy example: https://github.com/tsamaya/opencage-lambda-proxy
- Google Cloud Function example: https://github.com/tsamaya/gcloud-functions-opencage-geocoder

### More reverse geocoding examples

Following a github issue (question) here are some more examples of reverse geocoding operations.

[more-reverse-geocoding.js](./more-reverse-geocoding.js)

### Typescript

This example shos how to use the library with TypeScript

[typescript.ts](./typescript.ts)
```bash
npx tsx typescript.ts
```

The complete example can be found here : https://github.com/tsamaya/opencage-api-client-typescript-test
