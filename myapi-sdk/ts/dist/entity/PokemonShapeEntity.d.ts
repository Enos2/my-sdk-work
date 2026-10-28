import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { PokemonShape, PokemonShapeLoadMatch, PokemonShapeListMatch } from '../MyapiTypes';
declare class PokemonShapeEntity extends MyapiEntityBase<PokemonShape> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: PokemonShapeEntity): PokemonShapeEntity;
    load(this: any, reqmatch?: PokemonShapeLoadMatch, ctrl?: Control): Promise<PokemonShapeEntity>;
    list(this: any, reqmatch?: PokemonShapeListMatch, ctrl?: Control): Promise<PokemonShapeEntity[]>;
}
export { PokemonShapeEntity };
