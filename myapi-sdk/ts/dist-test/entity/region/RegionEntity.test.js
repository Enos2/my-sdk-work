"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('RegionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MYAPI_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MYAPI_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MyapiSDK.test();
        const ent = testsdk.Region();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MYAPI_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'region.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "id", "index$": 0 }, "locations": { "a": true, "h": "Locations", "n": "locations", "r": true, "ro": true, "t": "`$ARRAY`", "key$": "locations", "index$": 1 }, "main_generation": { "a": true, "h": "Main Generation", "n": "main_generation", "r": true, "ro": true, "t": "`$ANY`", "key$": "main_generation", "index$": 2 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "t": "`$STRING`", "key$": "name", "index$": 3 }, "names": { "a": true, "h": "Names", "n": "names", "r": true, "ro": true, "t": "`$ARRAY`", "key$": "names", "index$": 4 }, "pokedexes": { "a": true, "h": "Pokedexes", "n": "pokedexes", "r": true, "ro": true, "t": "`$ARRAY`", "key$": "pokedexes", "index$": 5 }, "url": { "a": true, "fo": "uri", "h": "Url", "n": "url", "r": true, "ro": true, "t": "`$STRING`", "key$": "url", "index$": 6 }, "version_groups": { "a": true, "h": "Version Groups", "n": "version_groups", "r": true, "ro": true, "t": "`$ARRAY`", "key$": "version_groups", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "region", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v2/region/", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "q", "or": "q", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/api/v2/region/", "q": { "exist": ["limit", "offset", "q"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v2" }, { "lit": "region" }], "t": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v2/region/{id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v2/region/{id}/", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v2" }, { "lit": "region" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "region", "name__orig": "region", "Name": "Region", "name_": "region", "name-": "region", "NAME": "REGION", "index$": 43 }, { "active": true, "entity": "region", "key$": "BasicRegionFlow", "kind": "basic", "name": "BasicRegionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "region_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "region_ref01", "srcdatavar": "region_ref01_data", "suffix": "_dt0" }, "m": { "id": "region01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-region_ref01" } }] }] }, 'Region', { "GET /api/v2/region/": { "protocol": "http", "parameters": [{ "name": "limit", "required": false, "in": "query", "description": "Number of results to return per page.", "schema": { "type": "integer" }, "index$": 0 }, { "name": "offset", "required": false, "in": "query", "description": "The initial index from which to return the results.", "schema": { "type": "integer" }, "index$": 1 }, { "in": "query", "name": "q", "schema": { "type": "string" }, "description": "> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ", "index$": 2 }] }, "GET /api/v2/region/{id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "schema": { "type": "string" }, "description": "This parameter can be a string or an integer.", "required": true, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let region_ref01_data = Object.values(setup.data.existing.region)[0];
        // LIST
        const region_ref01_ent = client.Region();
        const region_ref01_match = {};
        const region_ref01_list = (await region_ref01_ent.list(region_ref01_match)).map((e) => e.data());
        // LOAD
        const region_ref01_match_dt0 = {};
        region_ref01_match_dt0.id = region_ref01_data.id;
        const region_ref01_data_dt0 = (await region_ref01_ent.load(region_ref01_match_dt0)).data();
        (0, node_assert_1.default)(region_ref01_data_dt0.id === region_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/region/RegionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MyapiSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['region01', 'region02', 'region03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MYAPI_TEST_REGION_ENTID': idmap,
        'MYAPI_TEST_LIVE': 'FALSE',
        'MYAPI_TEST_EXPLAIN': 'FALSE',
        'MYAPI_APIKEY': '',
    });
    idmap = env['MYAPI_TEST_REGION_ENTID'];
    const live = 'TRUE' === env.MYAPI_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MYAPI_TEST_REGION_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.MyapiSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=RegionEntity.test.js.map