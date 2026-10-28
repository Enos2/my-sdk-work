import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { Pokedex, PokedexLoadMatch, PokedexListMatch } from '../MyapiTypes';
declare class PokedexEntity extends MyapiEntityBase<Pokedex> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: PokedexEntity): PokedexEntity;
    load(this: any, reqmatch?: PokedexLoadMatch, ctrl?: Control): Promise<PokedexEntity>;
    list(this: any, reqmatch?: PokedexListMatch, ctrl?: Control): Promise<PokedexEntity[]>;
}
export { PokedexEntity };
