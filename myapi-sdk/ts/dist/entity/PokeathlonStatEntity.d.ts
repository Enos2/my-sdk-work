import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { PokeathlonStat, PokeathlonStatLoadMatch, PokeathlonStatListMatch } from '../MyapiTypes';
declare class PokeathlonStatEntity extends MyapiEntityBase<PokeathlonStat> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: PokeathlonStatEntity): PokeathlonStatEntity;
    load(this: any, reqmatch?: PokeathlonStatLoadMatch, ctrl?: Control): Promise<PokeathlonStatEntity>;
    list(this: any, reqmatch?: PokeathlonStatListMatch, ctrl?: Control): Promise<PokeathlonStatEntity[]>;
}
export { PokeathlonStatEntity };
