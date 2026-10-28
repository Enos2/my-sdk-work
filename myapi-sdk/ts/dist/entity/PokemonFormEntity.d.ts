import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { PokemonForm, PokemonFormLoadMatch, PokemonFormListMatch } from '../MyapiTypes';
declare class PokemonFormEntity extends MyapiEntityBase<PokemonForm> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: PokemonFormEntity): PokemonFormEntity;
    load(this: any, reqmatch?: PokemonFormLoadMatch, ctrl?: Control): Promise<PokemonFormEntity>;
    list(this: any, reqmatch?: PokemonFormListMatch, ctrl?: Control): Promise<PokemonFormEntity[]>;
}
export { PokemonFormEntity };
