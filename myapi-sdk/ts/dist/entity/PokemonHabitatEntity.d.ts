import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { PokemonHabitat, PokemonHabitatLoadMatch, PokemonHabitatListMatch } from '../MyapiTypes';
declare class PokemonHabitatEntity extends MyapiEntityBase<PokemonHabitat> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: PokemonHabitatEntity): PokemonHabitatEntity;
    load(this: any, reqmatch?: PokemonHabitatLoadMatch, ctrl?: Control): Promise<PokemonHabitatEntity>;
    list(this: any, reqmatch?: PokemonHabitatListMatch, ctrl?: Control): Promise<PokemonHabitatEntity[]>;
}
export { PokemonHabitatEntity };
