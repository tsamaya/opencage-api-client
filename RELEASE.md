# Release

## checklist

1. bump package.json version
1. check the change log and append if needed
1. Is the license up to date?
1. Is the open API yml file up to date?
   a. if not generate new Response interface: `pnpm run release:update-response` and update GeocodingResponse, GeocodingResult[]
1. run `pnpm run release:update-version`
1. run format `pnpm run format`
<!-- 1. run linter `pnpm run lint` -->
1. run test `pnpm run test`
1. run build release `pnpm run release:build`
1. run examples `./scripts/run-examples.sh`
1. export GITHUB_TOKEN=
1. run `npx semantic-release --dry-run` first
1. run `pnpm run release:check-changelog`
1. All good?
1. `npm publish` or `npm publish --tag next` or whatever tag is relevant
1. git tag and git push --follow-tags

## clean up npmjs tags

`npm dist-tag rm opencage-api-client next`

## docs on gh-pages

Deployed by GHActions. Check [.github/workflows/docs.yml](.github/workflows/docs.yml)
