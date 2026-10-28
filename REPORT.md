# Voxgig SDK Generator — Developer Experience Report

**Project:** PokéAPI SDK (TypeScript)
**API:** [PokéAPI](https://pokeapi.co) (public, no API key required)
**Repository:** https://github.com/Enos2/my-sdk-work
**License:** MIT

## 1. Overview

I used the Voxgig SDK generator to build a TypeScript SDK for PokéAPI from its OpenAPI specification (`api.yml`). The generator reported 50 entities, 102 paths, 102 methods and 277 components.

The generated TypeScript SDK is in [`myapi-sdk/ts/`](myapi-sdk/ts). The generator configuration and model are in [`myapi-sdk/.sdk/`](myapi-sdk/.sdk).

## 2. What went wrong in my first submission

My first submission contained the generator model and configuration but **no generated SDK source code**. This was not a forgotten commit: no code had been generated.

I had run `npm run generate` without first adding a language target. With no target configured (`model/target/target-index.aontu` contained only a comment), the command succeeded with no errors and produced the model, docs and test scaffolding, but no SDK code. Nothing in the output told me a target was missing, so I believed generation was complete and described the project as a "generated SDK" in my README and first report. That was incorrect.

The fix was to add a target and regenerate:

```bash
cd myapi-sdk/.sdk
npm install
npm run add-target ts
npm run build
npm run generate
```

## 3. Generation experience

- `npm run add-target ts`, `npm run build` and `npm run generate` each completed in seconds. Generating the full TypeScript SDK took about 6 seconds.
- The output is substantial: about 240 files in `ts/`, including one entity class per API entity, a client class, utilities, a generated README and REFERENCE, a publish workflow, and a test suite.
- The generated test suite builds and runs offline: 538 tests, 537 passed, 0 failed, 1 skipped.
- The generator reported two warnings during generation: `require-missing ./cmp/ts/ReadmeFeatures_ts` and `require-missing ./cmp/ts/AgentGuide_ts`. I did not investigate whether they affect the output.

## 4. Testing

- **Offline tests:** `cd myapi-sdk/ts && npm test` builds the SDK and runs the generated suite (results above).
- **Live API check:** `myapi-sdk/examples/live-check.js` loads a Pokémon and an ability and lists Pokémon against the real PokéAPI. See section 6 for the result.
- The generator's own `npm test` script (in `.sdk`) is still a placeholder that prints `no-test`; `npm run test-model` tests the model rather than the SDK.

## 5. Developer experience observations

**What worked well**
- Once a target was added, generation was fast and produced a complete, buildable SDK with tests and documentation.
- Detailed progress logs, and the scripts in `package.json` made the workflow discoverable.
- The generated `AGENTS.md` explains the add-target, build and generate flow clearly.

**Issues and suggestions**
1. **Silent success with no targets.** `npm run generate` in a project with zero targets completes without warning and produces no SDK code. A warning such as "no targets configured; run `npm run add-target <lang>`" would have prevented my mistake.
2. **Generated links assume Voxgig's organisation.** The default `origin` was `voxgig-sdk`, so package metadata, the README and the publish workflow pointed to `github.com/voxgig-sdk/myapi-sdk`. I changed `origin` in `model/sdk.aontu` and regenerated.
3. **Scope casing.** Setting `origin: 'Enos2'` produced the invalid npm package name `@Enos2/myapi-sdk`, because npm scopes must be lowercase. The generator accepted it without complaint; I used `enos2`.
4. **Repository name assumption.** Generated URLs assume the repository is named `<name>-sdk` (here `enos2/myapi-sdk`), but my repository is `my-sdk-work` with the SDK in a subfolder, so the generated repository links do not resolve to this repository.
5. **Node version.** Some dependencies declare `node >= 24`; installing under Node 22 produced engine warnings, although everything I ran worked.
6. **Test script naming.** The generator-level `npm test` is a placeholder and the meaningful commands are `test-model` and the SDK's own `npm test`, which is easy to miss.

## 6. Live API verification

<!-- TO COMPLETE before pushing: run `node myapi-sdk/examples/live-check.js` on a machine with internet access and paste the result here. -->

Not yet recorded.

## 7. Time spent

<!-- TO COMPLETE: state your actual human time, and whether AI assistance was used. -->

## 8. Conclusion

After adding a TypeScript target, the Voxgig generator produced a complete, building TypeScript SDK for PokéAPI whose generated offline test suite passes. The main developer-experience problem I hit was that generating with no target succeeds silently and emits no SDK code.
