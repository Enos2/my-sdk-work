# PokéAPI

> All the Pokémon data you&#39;ll ever need in one place, easily accessible through a modern free open-source RESTful API.
>
> ## What is this?
>
> This is a full RESTful API linked to an extensive database detailing everything about the Pokémon main game series.
>
> We&#39;ve covered everything from Pokémon to Berry Flavors.
>
> ## Where do I start?
>
> We have awesome [documentation](https://pokeapi.co/docs/v2) on how to use this API. It takes minutes to get started.
>
> This API will always be publicly available and will never require any extensive setup process to consume.
>
> Created by [**Paul Hallett**](https://github.com/phalt) and other [**PokéAPI contributors**](https://github.com/PokeAPI/pokeapi#contributing) around the world. Pokémon and Pokémon character names are trademarks of Nintendo.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 50 entities and 102 HTTP routes. There are 1 SDK targets.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Ability

SDK operations: `list`, `load`.

### Berry

SDK operations: `list`, `load`.

### BerryFirmness

SDK operations: `list`, `load`.

### BerryFlavor

SDK operations: `list`, `load`.

### Characteristic

SDK operations: `list`, `load`.

### ContestEffect

SDK operations: `list`, `load`.

### ContestType

SDK operations: `list`, `load`.

### Currency

SDK operations: `list`, `load`.

### EggGroup

SDK operations: `list`, `load`.

### EncounterCondition

SDK operations: `list`, `load`.

### EncounterConditionValue

SDK operations: `list`, `load`.

### EncounterMethod

SDK operations: `list`, `load`.

### EvolutionChain

SDK operations: `list`, `load`.

### EvolutionTrigger

SDK operations: `list`, `load`.

### EvolutionVariable

SDK operations: `list`, `load`.

Key fields to recognise:

- `source`: Where the value comes from: &#39;pokemon&#39; for data stored on the Pokemon (for example EC, PID), &#39;player-input&#39; for an action taken by the player while evolving (for example `SPIN_DIR`, `SPIN_SEC`)

### Gender

SDK operations: `list`, `load`.

### Generation

SDK operations: `list`, `load`.

### GrowthRate

SDK operations: `list`, `load`.

### Item

SDK operations: `list`, `load`.

### ItemAttribute

SDK operations: `list`, `load`.

### ItemCategory

SDK operations: `list`, `load`.

### ItemFlingEffect

SDK operations: `list`, `load`.

### ItemPocket

SDK operations: `list`, `load`.

### Language

SDK operations: `list`, `load`.

### Location

SDK operations: `list`, `load`.

### LocationArea

SDK operations: `list`, `load`.

### Machine

SDK operations: `list`, `load`.

### Move

SDK operations: `list`, `load`.

### MoveBattleStyle

SDK operations: `list`, `load`.

### MoveDamageClass

SDK operations: `list`, `load`.

### MoveLearnMethod

SDK operations: `list`, `load`.

### MoveTarget

SDK operations: `list`, `load`.

### Nature

SDK operations: `list`, `load`.

### PalParkArea

SDK operations: `list`, `load`.

### PokeathlonStat

SDK operations: `list`, `load`.

### Pokedex

SDK operations: `list`, `load`.

### Pokemon

SDK operations: `list`, `load`.

### PokemonColor

SDK operations: `list`, `load`.

### PokemonEncounter

SDK operations: `list`.

### PokemonForm

SDK operations: `list`, `load`.

### PokemonHabitat

SDK operations: `list`, `load`.

### PokemonShape

SDK operations: `list`, `load`.

### PokemonSpecies

SDK operations: `list`, `load`.

### Region

SDK operations: `list`, `load`.

### Stat

SDK operations: `list`, `load`.

### SuperContestEffect

SDK operations: `list`, `load`.

### Type

SDK operations: `list`, `load`.

### Utility

SDK operations: `load`.

### Version

SDK operations: `list`, `load`.

### VersionGroup

SDK operations: `list`, `load`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Ability | `list` | `GET /api/v2/ability/` | Not required |
| Ability | `load` | `GET /api/v2/ability/{id}/` | Not required |
| Berry | `list` | `GET /api/v2/berry/` | Not required |
| Berry | `load` | `GET /api/v2/berry/{id}/` | Not required |
| BerryFirmness | `list` | `GET /api/v2/berry-firmness/` | Not required |
| BerryFirmness | `load` | `GET /api/v2/berry-firmness/{id}/` | Not required |
| BerryFlavor | `list` | `GET /api/v2/berry-flavor/` | Not required |
| BerryFlavor | `load` | `GET /api/v2/berry-flavor/{id}/` | Not required |
| Characteristic | `list` | `GET /api/v2/characteristic/` | Not required |
| Characteristic | `load` | `GET /api/v2/characteristic/{id}/` | Not required |
| ContestEffect | `list` | `GET /api/v2/contest-effect/` | Not required |
| ContestEffect | `load` | `GET /api/v2/contest-effect/{id}/` | Not required |
| ContestType | `list` | `GET /api/v2/contest-type/` | Not required |
| ContestType | `load` | `GET /api/v2/contest-type/{id}/` | Not required |
| Currency | `list` | `GET /api/v2/currency/` | Not required |
| Currency | `load` | `GET /api/v2/currency/{id}/` | Not required |
| EggGroup | `list` | `GET /api/v2/egg-group/` | Not required |
| EggGroup | `load` | `GET /api/v2/egg-group/{id}/` | Not required |
| EncounterCondition | `list` | `GET /api/v2/encounter-condition/` | Not required |
| EncounterCondition | `load` | `GET /api/v2/encounter-condition/{id}/` | Not required |
| EncounterConditionValue | `list` | `GET /api/v2/encounter-condition-value/` | Not required |
| EncounterConditionValue | `load` | `GET /api/v2/encounter-condition-value/{id}/` | Not required |
| EncounterMethod | `list` | `GET /api/v2/encounter-method/` | Not required |
| EncounterMethod | `load` | `GET /api/v2/encounter-method/{id}/` | Not required |
| EvolutionChain | `list` | `GET /api/v2/evolution-chain/` | Not required |
| EvolutionChain | `load` | `GET /api/v2/evolution-chain/{id}/` | Not required |
| EvolutionTrigger | `list` | `GET /api/v2/evolution-trigger/` | Not required |
| EvolutionTrigger | `load` | `GET /api/v2/evolution-trigger/{id}/` | Not required |
| EvolutionVariable | `list` | `GET /api/v2/evolution-variable/` | Not required |
| EvolutionVariable | `load` | `GET /api/v2/evolution-variable/{id}/` | Not required |
| Gender | `list` | `GET /api/v2/gender/` | Not required |
| Gender | `load` | `GET /api/v2/gender/{id}/` | Not required |
| Generation | `list` | `GET /api/v2/generation/` | Not required |
| Generation | `load` | `GET /api/v2/generation/{id}/` | Not required |
| GrowthRate | `list` | `GET /api/v2/growth-rate/` | Not required |
| GrowthRate | `load` | `GET /api/v2/growth-rate/{id}/` | Not required |
| Item | `list` | `GET /api/v2/item/` | Not required |
| Item | `load` | `GET /api/v2/item/{id}/` | Not required |
| ItemAttribute | `list` | `GET /api/v2/item-attribute/` | Not required |
| ItemAttribute | `load` | `GET /api/v2/item-attribute/{id}/` | Not required |
| ItemCategory | `list` | `GET /api/v2/item-category/` | Not required |
| ItemCategory | `load` | `GET /api/v2/item-category/{id}/` | Not required |
| ItemFlingEffect | `list` | `GET /api/v2/item-fling-effect/` | Not required |
| ItemFlingEffect | `load` | `GET /api/v2/item-fling-effect/{id}/` | Not required |
| ItemPocket | `list` | `GET /api/v2/item-pocket/` | Not required |
| ItemPocket | `load` | `GET /api/v2/item-pocket/{id}/` | Not required |
| Language | `list` | `GET /api/v2/language/` | Not required |
| Language | `load` | `GET /api/v2/language/{id}/` | Not required |
| Location | `list` | `GET /api/v2/location/` | Not required |
| Location | `load` | `GET /api/v2/location/{id}/` | Not required |
| LocationArea | `list` | `GET /api/v2/location-area/` | Not required |
| LocationArea | `load` | `GET /api/v2/location-area/{id}/` | Not required |
| Machine | `list` | `GET /api/v2/machine/` | Not required |
| Machine | `load` | `GET /api/v2/machine/{id}/` | Not required |
| Move | `list` | `GET /api/v2/move-ailment/` | Not required |
| Move | `list` | `GET /api/v2/move-category/` | Not required |
| Move | `list` | `GET /api/v2/move/` | Not required |
| Move | `load` | `GET /api/v2/move-ailment/{id}/` | Not required |
| Move | `load` | `GET /api/v2/move-category/{id}/` | Not required |
| Move | `load` | `GET /api/v2/move/{id}/` | Not required |
| MoveBattleStyle | `list` | `GET /api/v2/move-battle-style/` | Not required |
| MoveBattleStyle | `load` | `GET /api/v2/move-battle-style/{id}/` | Not required |
| MoveDamageClass | `list` | `GET /api/v2/move-damage-class/` | Not required |
| MoveDamageClass | `load` | `GET /api/v2/move-damage-class/{id}/` | Not required |
| MoveLearnMethod | `list` | `GET /api/v2/move-learn-method/` | Not required |
| MoveLearnMethod | `load` | `GET /api/v2/move-learn-method/{id}/` | Not required |
| MoveTarget | `list` | `GET /api/v2/move-target/` | Not required |
| MoveTarget | `load` | `GET /api/v2/move-target/{id}/` | Not required |
| Nature | `list` | `GET /api/v2/nature/` | Not required |
| Nature | `load` | `GET /api/v2/nature/{id}/` | Not required |
| PalParkArea | `list` | `GET /api/v2/pal-park-area/` | Not required |
| PalParkArea | `load` | `GET /api/v2/pal-park-area/{id}/` | Not required |
| PokeathlonStat | `list` | `GET /api/v2/pokeathlon-stat/` | Not required |
| PokeathlonStat | `load` | `GET /api/v2/pokeathlon-stat/{id}/` | Not required |
| Pokedex | `list` | `GET /api/v2/pokedex/` | Not required |
| Pokedex | `load` | `GET /api/v2/pokedex/{id}/` | Not required |
| Pokemon | `list` | `GET /api/v2/pokemon/` | Not required |
| Pokemon | `load` | `GET /api/v2/pokemon/{id}/` | Not required |
| PokemonColor | `list` | `GET /api/v2/pokemon-color/` | Not required |
| PokemonColor | `load` | `GET /api/v2/pokemon-color/{id}/` | Not required |
| PokemonEncounter | `list` | `GET /api/v2/pokemon/{pokemon_id}/encounters` | Not required |
| PokemonForm | `list` | `GET /api/v2/pokemon-form/` | Not required |
| PokemonForm | `load` | `GET /api/v2/pokemon-form/{id}/` | Not required |
| PokemonHabitat | `list` | `GET /api/v2/pokemon-habitat/` | Not required |
| PokemonHabitat | `load` | `GET /api/v2/pokemon-habitat/{id}/` | Not required |
| PokemonShape | `list` | `GET /api/v2/pokemon-shape/` | Not required |
| PokemonShape | `load` | `GET /api/v2/pokemon-shape/{id}/` | Not required |
| PokemonSpecies | `list` | `GET /api/v2/pokemon-species/` | Not required |
| PokemonSpecies | `load` | `GET /api/v2/pokemon-species/{id}/` | Not required |
| Region | `list` | `GET /api/v2/region/` | Not required |
| Region | `load` | `GET /api/v2/region/{id}/` | Not required |
| Stat | `list` | `GET /api/v2/stat/` | Not required |
| Stat | `load` | `GET /api/v2/stat/{id}/` | Not required |
| SuperContestEffect | `list` | `GET /api/v2/super-contest-effect/` | Not required |
| SuperContestEffect | `load` | `GET /api/v2/super-contest-effect/{id}/` | Not required |
| Type | `list` | `GET /api/v2/type/` | Not required |
| Type | `load` | `GET /api/v2/type/{id}/` | Not required |
| Utility | `load` | `GET /api/v2/meta/` | Not required |
| Version | `list` | `GET /api/v2/version/` | Not required |
| Version | `load` | `GET /api/v2/version/{id}/` | Not required |
| VersionGroup | `list` | `GET /api/v2/version-group/` | Not required |
| VersionGroup | `load` | `GET /api/v2/version-group/{id}/` | Not required |

## Connect to the API

- API server: `https://pokeapi.co`

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

A read request without required parameters or authentication is `GET /api/v2/ability/`. For example:

```sh
curl --fail-with-body --silent --show-error 'https://pokeapi.co/api/v2/ability/'
```

Inspect the response using the Ability reference. This checks the public route; authenticated operations need their own credentials and request data.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `test`: In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

