// Live smoke test for the generated TypeScript SDK against the real PokéAPI.
//
// Run from the repository root after building the SDK:
//
//   cd myapi-sdk/ts && npm install && npm run build && cd ..
//   node examples/live-check.js
//
// PokéAPI is public and needs no API key.

const { MyapiSDK } = require('../ts/dist/MyapiSDK')

async function check(label, fn) {
  try {
    const out = await fn()
    console.log(`PASS  ${label}`, out === undefined ? '' : `-> ${out}`)
    return true
  } catch (err) {
    console.log(`FAIL  ${label} -> ${err && err.message ? err.message : err}`)
    return false
  }
}

async function main() {
  const client = new MyapiSDK({})
  const results = []

  results.push(await check('Pokemon.load({ id: "pikachu" })', async () => {
    const pokemon = await client.Pokemon().load({ id: 'pikachu' })
    const data = pokemon.data()
    if (!data || data.name !== 'pikachu') {
      throw new Error('unexpected payload: ' + JSON.stringify(data).slice(0, 120))
    }
    return `name=${data.name}, id=${data.id}`
  }))

  results.push(await check('Pokemon.list()', async () => {
    const list = await client.Pokemon().list()
    if (!Array.isArray(list) || list.length === 0) {
      throw new Error('expected a non-empty array, got ' + typeof list)
    }
    return `${list.length} entities returned`
  }))

  results.push(await check('Ability.load({ id: "static" })', async () => {
    const ability = await client.Ability().load({ id: 'static' })
    const data = ability.data()
    if (!data || data.name !== 'static') {
      throw new Error('unexpected payload: ' + JSON.stringify(data).slice(0, 120))
    }
    return `name=${data.name}`
  }))

  const passed = results.filter(Boolean).length
  console.log(`\n${passed}/${results.length} live checks passed`)
  process.exit(passed === results.length ? 0 : 1)
}

main()
