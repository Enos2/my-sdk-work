

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


describe('GenderEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MYAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('MYAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MyapiSDK.test()
    const ent = testsdk.Gender()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MYAPI_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'gender.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":0},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":1},"pokemon_species_details":{"a":true,"h":"Pokemon Species Details","n":"pokemon_species_details","r":true,"ro":true,"t":"`$ARRAY`","key$":"pokemon_species_details","index$":2},"required_for_evolution":{"a":true,"h":"Required For Evolution","n":"required_for_evolution","r":true,"ro":true,"t":"`$ARRAY`","key$":"required_for_evolution","index$":3},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":true,"ro":true,"t":"`$STRING`","key$":"url","index$":4}},"id":{"field":"id","name":"id"},"name":"gender","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v2/gender/","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/v2/gender/","q":{"exist":["limit","offset","q"]},"r":{},"s":[{"lit":"api"},{"lit":"v2"},{"lit":"gender"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v2/gender/{id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v2/gender/{id}/","q":{"exist":["id"]},"r":{},"s":[{"lit":"api"},{"lit":"v2"},{"lit":"gender"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"gender","name__orig":"gender","Name":"Gender","name_":"gender","name-":"gender","NAME":"GENDER","index$":15}, {"active":true,"entity":"gender","key$":"BasicGenderFlow","kind":"basic","name":"BasicGenderFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"gender_ref01"}}]},{"a":true,"d":{},"i":{"ref":"gender_ref01","srcdatavar":"gender_ref01_data","suffix":"_dt0"},"m":{"id":"gender01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-gender_ref01"}}]}]}, 'Gender', {"GET /api/v2/gender/":{"protocol":"http","parameters":[{"name":"limit","required":false,"in":"query","description":"Number of results to return per page.","schema":{"type":"integer"},"index$":0},{"name":"offset","required":false,"in":"query","description":"The initial index from which to return the results.","schema":{"type":"integer"},"index$":1},{"in":"query","name":"q","schema":{"type":"string"},"description":"> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ","index$":2}]},"GET /api/v2/gender/{id}/":{"protocol":"http","parameters":[{"in":"path","name":"id","schema":{"type":"string"},"description":"This parameter can be a string or an integer.","required":true,"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let gender_ref01_data = Object.values(setup.data.existing.gender)[0] as any

    // LIST
    const gender_ref01_ent = client.Gender()
    const gender_ref01_match: any = {}

    const gender_ref01_list = (await gender_ref01_ent.list(gender_ref01_match)).map((e: any) => e.data())


    // LOAD
    const gender_ref01_match_dt0: any = {}
    gender_ref01_match_dt0.id = gender_ref01_data.id
    const gender_ref01_data_dt0 = (await gender_ref01_ent.load(gender_ref01_match_dt0)).data()
    assert(gender_ref01_data_dt0.id === gender_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/gender/GenderTestData.json')

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
    ['gender01','gender02','gender03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MYAPI_TEST_GENDER_ENTID': idmap,
    'MYAPI_TEST_LIVE': 'FALSE',
    'MYAPI_TEST_EXPLAIN': 'FALSE',
    'MYAPI_APIKEY': '',
  })

  idmap = env['MYAPI_TEST_GENDER_ENTID']

  const live = 'TRUE' === env.MYAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MYAPI_TEST_GENDER_ENTID']
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
  
