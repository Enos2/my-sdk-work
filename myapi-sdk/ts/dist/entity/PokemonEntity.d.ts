import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { Pokemon, PokemonLoadMatch, PokemonListMatch } from '../MyapiTypes';
declare class PokemonEntity extends MyapiEntityBase<Pokemon> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: PokemonEntity): PokemonEntity;
    load(this: any, reqmatch?: PokemonLoadMatch, ctrl?: Control): Promise<PokemonEntity>;
    list(this: any, reqmatch?: PokemonListMatch, ctrl?: Control): Promise<PokemonEntity[]>;
}
export { PokemonEntity };
