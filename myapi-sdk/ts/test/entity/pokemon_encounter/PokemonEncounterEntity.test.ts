

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { MyapiSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('PokemonEncounterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MYAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('MYAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MyapiSDK.test()
    const ent = testsdk.PokemonEncounter()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MYAPI_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'pokemon_encounter.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"location_area":{"a":true,"h":"Location Area","n":"location_area","r":true,"t":"`$OBJECT`","key$":"location_area","index$":1},"version_details":{"a":true,"h":"Version Details","n":"version_details","r":true,"t":"`$ARRAY`","key$":"version_details","index$":2}},"id":{"field":"id","name":"id"},"name":"pokemon_encounter","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v2/pokemon/{pokemon_id}/encounters","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"pokemon_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v2/pokemon/{pokemon_id}/encounters","q":{"exist":["id"]},"r":{"param":{"pokemon_id":"id"}},"s":[{"lit":"api"},{"lit":"v2"},{"lit":"pokemon"},{"var":"id"},{"lit":"encounters"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"pokemon_encounter","name__orig":"pokemon_encounter","Name":"PokemonEncounter","name_":"pokemon_encounter","name-":"pokemon-encounter","NAME":"POKEMON_ENCOUNTER","index$":38}, {"active":true,"entity":"pokemon_encounter","key$":"BasicPokemonEncounterFlow","kind":"basic","name":"BasicPokemonEncounterFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"pokemon_id":"pokemon01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"pokemon_encounter_ref01"}}]}]}, 'PokemonEncounter', {"GET /api/v2/pokemon/{pokemon_id}/encounters":{"protocol":"http","parameters":[{"in":"path","name":"pokemon_id","schema":{"type":"string","pattern":"^\\d+$"},"required":true,"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let pokemon_encounter_ref01_data = Object.values(setup.data.existing.pokemon_encounter)[0] as any

    // LIST
    const pokemon_encounter_ref01_ent = client.PokemonEncounter()
    const pokemon_encounter_ref01_match: any = {}
    pokemon_encounter_ref01_match['pokemon_id'] = setup.idmap['pokemon01']

    const pokemon_encounter_ref01_list = (await pokemon_encounter_ref01_ent.list(pokemon_encounter_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/pokemon_encounter/PokemonEncounterTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = MyapiSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['pokemon_encounter01','pokemon_encounter02','pokemon_encounter03','pokemon01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MYAPI_TEST_POKEMON_ENCOUNTER_ENTID': idmap,
    'MYAPI_TEST_LIVE': 'FALSE',
    'MYAPI_TEST_EXPLAIN': 'FALSE',
    'MYAPI_APIKEY': '',
  })

  idmap = env['MYAPI_TEST_POKEMON_ENCOUNTER_ENTID']

  const live = 'TRUE' === env.MYAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MYAPI_TEST_POKEMON_ENCOUNTER_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new MyapiSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.MYAPI_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.MYAPI_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
