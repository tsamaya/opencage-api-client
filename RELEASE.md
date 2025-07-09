# Release

## checklist

1. bump package.json version
1. check the change log and append if needed
1. Is the license up to date?
1. Is the open API yml file up to date?
1. if not generate new Response interface: `pnpm run release:update-response`
1. run `pnpm run release:update-version`
1. run linter `pnpm run lint`
1. run test `pnpm run test`
1. run build release `pnpm run release:build`
1. run `pnpm run release:check-changelog`
1. run examples `./scripts/run-examples.sh`
1. All good?
1. `npm publish` or `npm publish --tag next` or whatever tag is relevant

## docs on gh-pages

_tbd_
