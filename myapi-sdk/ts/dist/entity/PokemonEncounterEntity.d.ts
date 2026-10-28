import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { PokemonEncounter, PokemonEncounterListMatch } from '../MyapiTypes';
declare class PokemonEncounterEntity extends MyapiEntityBase<PokemonEncounter> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: PokemonEncounterEntity): PokemonEncounterEntity;
    list(this: any, reqmatch?: PokemonEncounterListMatch, ctrl?: Control): Promise<PokemonEncounterEntity[]>;
}
export { PokemonEncounterEntity };
