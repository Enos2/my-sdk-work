import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { PokemonColor, PokemonColorLoadMatch, PokemonColorListMatch } from '../MyapiTypes';
declare class PokemonColorEntity extends MyapiEntityBase<PokemonColor> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: PokemonColorEntity): PokemonColorEntity;
    load(this: any, reqmatch?: PokemonColorLoadMatch, ctrl?: Control): Promise<PokemonColorEntity>;
    list(this: any, reqmatch?: PokemonColorListMatch, ctrl?: Control): Promise<PokemonColorEntity[]>;
}
export { PokemonColorEntity };
