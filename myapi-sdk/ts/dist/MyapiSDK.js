"use strict";
// Myapi Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.MyapiSDK = exports.MyapiEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AbilityEntity_1 = require("./entity/AbilityEntity");
const BerryEntity_1 = require("./entity/BerryEntity");
const BerryFirmnessEntity_1 = require("./entity/BerryFirmnessEntity");
const BerryFlavorEntity_1 = require("./entity/BerryFlavorEntity");
const CharacteristicEntity_1 = require("./entity/CharacteristicEntity");
const ContestEffectEntity_1 = require("./entity/ContestEffectEntity");
const ContestTypeEntity_1 = require("./entity/ContestTypeEntity");
const CurrencyEntity_1 = require("./entity/CurrencyEntity");
const EggGroupEntity_1 = require("./entity/EggGroupEntity");
const EncounterConditionEntity_1 = require("./entity/EncounterConditionEntity");
const EncounterConditionValueEntity_1 = require("./entity/EncounterConditionValueEntity");
const EncounterMethodEntity_1 = require("./entity/EncounterMethodEntity");
const EvolutionChainEntity_1 = require("./entity/EvolutionChainEntity");
const EvolutionTriggerEntity_1 = require("./entity/EvolutionTriggerEntity");
const EvolutionVariableEntity_1 = require("./entity/EvolutionVariableEntity");
const GenderEntity_1 = require("./entity/GenderEntity");
const GenerationEntity_1 = require("./entity/GenerationEntity");
const GrowthRateEntity_1 = require("./entity/GrowthRateEntity");
const ItemEntity_1 = require("./entity/ItemEntity");
const ItemAttributeEntity_1 = require("./entity/ItemAttributeEntity");
const ItemCategoryEntity_1 = require("./entity/ItemCategoryEntity");
const ItemFlingEffectEntity_1 = require("./entity/ItemFlingEffectEntity");
const ItemPocketEntity_1 = require("./entity/ItemPocketEntity");
const LanguageEntity_1 = require("./entity/LanguageEntity");
const LocationEntity_1 = require("./entity/LocationEntity");
const LocationAreaEntity_1 = require("./entity/LocationAreaEntity");
const MachineEntity_1 = require("./entity/MachineEntity");
const MoveEntity_1 = require("./entity/MoveEntity");
const MoveBattleStyleEntity_1 = require("./entity/MoveBattleStyleEntity");
const MoveDamageClassEntity_1 = require("./entity/MoveDamageClassEntity");
const MoveLearnMethodEntity_1 = require("./entity/MoveLearnMethodEntity");
const MoveTargetEntity_1 = require("./entity/MoveTargetEntity");
const NatureEntity_1 = require("./entity/NatureEntity");
const PalParkAreaEntity_1 = require("./entity/PalParkAreaEntity");
const PokeathlonStatEntity_1 = require("./entity/PokeathlonStatEntity");
const PokedexEntity_1 = require("./entity/PokedexEntity");
const PokemonEntity_1 = require("./entity/PokemonEntity");
const PokemonColorEntity_1 = require("./entity/PokemonColorEntity");
const PokemonEncounterEntity_1 = require("./entity/PokemonEncounterEntity");
const PokemonFormEntity_1 = require("./entity/PokemonFormEntity");
const PokemonHabitatEntity_1 = require("./entity/PokemonHabitatEntity");
const PokemonShapeEntity_1 = require("./entity/PokemonShapeEntity");
const PokemonSpeciesEntity_1 = require("./entity/PokemonSpeciesEntity");
const RegionEntity_1 = require("./entity/RegionEntity");
const StatEntity_1 = require("./entity/StatEntity");
const SuperContestEffectEntity_1 = require("./entity/SuperContestEffectEntity");
const TypeEntity_1 = require("./entity/TypeEntity");
const UtilityEntity_1 = require("./entity/UtilityEntity");
const VersionEntity_1 = require("./entity/VersionEntity");
const VersionGroupEntity_1 = require("./entity/VersionGroupEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const MyapiEntityBase_1 = require("./MyapiEntityBase");
Object.defineProperty(exports, "MyapiEntityBase", { enumerable: true, get: function () { return MyapiEntityBase_1.MyapiEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class MyapiSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('MyapiSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('MyapiSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('MyapiSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Ability().list()` / `client.Ability().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Ability(entopts) {
        const self = this;
        return new AbilityEntity_1.AbilityEntity(self, entopts);
    }
    // Entity access: `client.Berry().list()` / `client.Berry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Berry(entopts) {
        const self = this;
        return new BerryEntity_1.BerryEntity(self, entopts);
    }
    // Entity access: `client.BerryFirmness().list()` / `client.BerryFirmness().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BerryFirmness(entopts) {
        const self = this;
        return new BerryFirmnessEntity_1.BerryFirmnessEntity(self, entopts);
    }
    // Entity access: `client.BerryFlavor().list()` / `client.BerryFlavor().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BerryFlavor(entopts) {
        const self = this;
        return new BerryFlavorEntity_1.BerryFlavorEntity(self, entopts);
    }
    // Entity access: `client.Characteristic().list()` / `client.Characteristic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Characteristic(entopts) {
        const self = this;
        return new CharacteristicEntity_1.CharacteristicEntity(self, entopts);
    }
    // Entity access: `client.ContestEffect().list()` / `client.ContestEffect().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContestEffect(entopts) {
        const self = this;
        return new ContestEffectEntity_1.ContestEffectEntity(self, entopts);
    }
    // Entity access: `client.ContestType().list()` / `client.ContestType().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContestType(entopts) {
        const self = this;
        return new ContestTypeEntity_1.ContestTypeEntity(self, entopts);
    }
    // Entity access: `client.Currency().list()` / `client.Currency().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Currency(entopts) {
        const self = this;
        return new CurrencyEntity_1.CurrencyEntity(self, entopts);
    }
    // Entity access: `client.EggGroup().list()` / `client.EggGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EggGroup(entopts) {
        const self = this;
        return new EggGroupEntity_1.EggGroupEntity(self, entopts);
    }
    // Entity access: `client.EncounterCondition().list()` / `client.EncounterCondition().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EncounterCondition(entopts) {
        const self = this;
        return new EncounterConditionEntity_1.EncounterConditionEntity(self, entopts);
    }
    // Entity access: `client.EncounterConditionValue().list()` / `client.EncounterConditionValue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EncounterConditionValue(entopts) {
        const self = this;
        return new EncounterConditionValueEntity_1.EncounterConditionValueEntity(self, entopts);
    }
    // Entity access: `client.EncounterMethod().list()` / `client.EncounterMethod().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EncounterMethod(entopts) {
        const self = this;
        return new EncounterMethodEntity_1.EncounterMethodEntity(self, entopts);
    }
    // Entity access: `client.EvolutionChain().list()` / `client.EvolutionChain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EvolutionChain(entopts) {
        const self = this;
        return new EvolutionChainEntity_1.EvolutionChainEntity(self, entopts);
    }
    // Entity access: `client.EvolutionTrigger().list()` / `client.EvolutionTrigger().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EvolutionTrigger(entopts) {
        const self = this;
        return new EvolutionTriggerEntity_1.EvolutionTriggerEntity(self, entopts);
    }
    // Entity access: `client.EvolutionVariable().list()` / `client.EvolutionVariable().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EvolutionVariable(entopts) {
        const self = this;
        return new EvolutionVariableEntity_1.EvolutionVariableEntity(self, entopts);
    }
    // Entity access: `client.Gender().list()` / `client.Gender().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Gender(entopts) {
        const self = this;
        return new GenderEntity_1.GenderEntity(self, entopts);
    }
    // Entity access: `client.Generation().list()` / `client.Generation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Generation(entopts) {
        const self = this;
        return new GenerationEntity_1.GenerationEntity(self, entopts);
    }
    // Entity access: `client.GrowthRate().list()` / `client.GrowthRate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GrowthRate(entopts) {
        const self = this;
        return new GrowthRateEntity_1.GrowthRateEntity(self, entopts);
    }
    // Entity access: `client.Item().list()` / `client.Item().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Item(entopts) {
        const self = this;
        return new ItemEntity_1.ItemEntity(self, entopts);
    }
    // Entity access: `client.ItemAttribute().list()` / `client.ItemAttribute().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ItemAttribute(entopts) {
        const self = this;
        return new ItemAttributeEntity_1.ItemAttributeEntity(self, entopts);
    }
    // Entity access: `client.ItemCategory().list()` / `client.ItemCategory().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ItemCategory(entopts) {
        const self = this;
        return new ItemCategoryEntity_1.ItemCategoryEntity(self, entopts);
    }
    // Entity access: `client.ItemFlingEffect().list()` / `client.ItemFlingEffect().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ItemFlingEffect(entopts) {
        const self = this;
        return new ItemFlingEffectEntity_1.ItemFlingEffectEntity(self, entopts);
    }
    // Entity access: `client.ItemPocket().list()` / `client.ItemPocket().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ItemPocket(entopts) {
        const self = this;
        return new ItemPocketEntity_1.ItemPocketEntity(self, entopts);
    }
    // Entity access: `client.Language().list()` / `client.Language().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Language(entopts) {
        const self = this;
        return new LanguageEntity_1.LanguageEntity(self, entopts);
    }
    // Entity access: `client.Location().list()` / `client.Location().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Location(entopts) {
        const self = this;
        return new LocationEntity_1.LocationEntity(self, entopts);
    }
    // Entity access: `client.LocationArea().list()` / `client.LocationArea().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LocationArea(entopts) {
        const self = this;
        return new LocationAreaEntity_1.LocationAreaEntity(self, entopts);
    }
    // Entity access: `client.Machine().list()` / `client.Machine().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Machine(entopts) {
        const self = this;
        return new MachineEntity_1.MachineEntity(self, entopts);
    }
    // Entity access: `client.Move().list()` / `client.Move().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Move(entopts) {
        const self = this;
        return new MoveEntity_1.MoveEntity(self, entopts);
    }
    // Entity access: `client.MoveBattleStyle().list()` / `client.MoveBattleStyle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MoveBattleStyle(entopts) {
        const self = this;
        return new MoveBattleStyleEntity_1.MoveBattleStyleEntity(self, entopts);
    }
    // Entity access: `client.MoveDamageClass().list()` / `client.MoveDamageClass().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MoveDamageClass(entopts) {
        const self = this;
        return new MoveDamageClassEntity_1.MoveDamageClassEntity(self, entopts);
    }
    // Entity access: `client.MoveLearnMethod().list()` / `client.MoveLearnMethod().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MoveLearnMethod(entopts) {
        const self = this;
        return new MoveLearnMethodEntity_1.MoveLearnMethodEntity(self, entopts);
    }
    // Entity access: `client.MoveTarget().list()` / `client.MoveTarget().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MoveTarget(entopts) {
        const self = this;
        return new MoveTargetEntity_1.MoveTargetEntity(self, entopts);
    }
    // Entity access: `client.Nature().list()` / `client.Nature().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Nature(entopts) {
        const self = this;
        return new NatureEntity_1.NatureEntity(self, entopts);
    }
    // Entity access: `client.PalParkArea().list()` / `client.PalParkArea().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PalParkArea(entopts) {
        const self = this;
        return new PalParkAreaEntity_1.PalParkAreaEntity(self, entopts);
    }
    // Entity access: `client.PokeathlonStat().list()` / `client.PokeathlonStat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PokeathlonStat(entopts) {
        const self = this;
        return new PokeathlonStatEntity_1.PokeathlonStatEntity(self, entopts);
    }
    // Entity access: `client.Pokedex().list()` / `client.Pokedex().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Pokedex(entopts) {
        const self = this;
        return new PokedexEntity_1.PokedexEntity(self, entopts);
    }
    // Entity access: `client.Pokemon().list()` / `client.Pokemon().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Pokemon(entopts) {
        const self = this;
        return new PokemonEntity_1.PokemonEntity(self, entopts);
    }
    // Entity access: `client.PokemonColor().list()` / `client.PokemonColor().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PokemonColor(entopts) {
        const self = this;
        return new PokemonColorEntity_1.PokemonColorEntity(self, entopts);
    }
    // Entity access: `client.PokemonEncounter().list()` / `client.PokemonEncounter().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PokemonEncounter(entopts) {
        const self = this;
        return new PokemonEncounterEntity_1.PokemonEncounterEntity(self, entopts);
    }
    // Entity access: `client.PokemonForm().list()` / `client.PokemonForm().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PokemonForm(entopts) {
        const self = this;
        return new PokemonFormEntity_1.PokemonFormEntity(self, entopts);
    }
    // Entity access: `client.PokemonHabitat().list()` / `client.PokemonHabitat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PokemonHabitat(entopts) {
        const self = this;
        return new PokemonHabitatEntity_1.PokemonHabitatEntity(self, entopts);
    }
    // Entity access: `client.PokemonShape().list()` / `client.PokemonShape().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PokemonShape(entopts) {
        const self = this;
        return new PokemonShapeEntity_1.PokemonShapeEntity(self, entopts);
    }
    // Entity access: `client.PokemonSpecies().list()` / `client.PokemonSpecies().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PokemonSpecies(entopts) {
        const self = this;
        return new PokemonSpeciesEntity_1.PokemonSpeciesEntity(self, entopts);
    }
    // Entity access: `client.Region().list()` / `client.Region().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Region(entopts) {
        const self = this;
        return new RegionEntity_1.RegionEntity(self, entopts);
    }
    // Entity access: `client.Stat().list()` / `client.Stat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Stat(entopts) {
        const self = this;
        return new StatEntity_1.StatEntity(self, entopts);
    }
    // Entity access: `client.SuperContestEffect().list()` / `client.SuperContestEffect().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SuperContestEffect(entopts) {
        const self = this;
        return new SuperContestEffectEntity_1.SuperContestEffectEntity(self, entopts);
    }
    // Entity access: `client.Type().list()` / `client.Type().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Type(entopts) {
        const self = this;
        return new TypeEntity_1.TypeEntity(self, entopts);
    }
    // Entity access: `client.Utility().list()` / `client.Utility().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Utility(entopts) {
        const self = this;
        return new UtilityEntity_1.UtilityEntity(self, entopts);
    }
    // Entity access: `client.Version().list()` / `client.Version().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Version(entopts) {
        const self = this;
        return new VersionEntity_1.VersionEntity(self, entopts);
    }
    // Entity access: `client.VersionGroup().list()` / `client.VersionGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    VersionGroup(entopts) {
        const self = this;
        return new VersionGroupEntity_1.VersionGroupEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new MyapiSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return MyapiSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Myapi' };
    }
    toString() {
        return 'Myapi ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.MyapiSDK = MyapiSDK;
const SDK = MyapiSDK;
exports.SDK = SDK;
//# sourceMappingURL=MyapiSDK.js.map