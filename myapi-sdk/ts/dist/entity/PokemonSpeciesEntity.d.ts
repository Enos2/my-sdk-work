import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { PokemonSpecies, PokemonSpeciesLoadMatch, PokemonSpeciesListMatch } from '../MyapiTypes';
declare class PokemonSpeciesEntity extends MyapiEntityBase<PokemonSpecies> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: PokemonSpeciesEntity): PokemonSpeciesEntity;
    load(this: any, reqmatch?: PokemonSpeciesLoadMatch, ctrl?: Control): Promise<PokemonSpeciesEntity>;
    list(this: any, reqmatch?: PokemonSpeciesListMatch, ctrl?: Control): Promise<PokemonSpeciesEntity[]>;
}
export { PokemonSpeciesEntity };
