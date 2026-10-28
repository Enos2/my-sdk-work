import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { EggGroup, EggGroupLoadMatch, EggGroupListMatch } from '../MyapiTypes';
declare class EggGroupEntity extends MyapiEntityBase<EggGroup> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: EggGroupEntity): EggGroupEntity;
    load(this: any, reqmatch?: EggGroupLoadMatch, ctrl?: Control): Promise<EggGroupEntity>;
    list(this: any, reqmatch?: EggGroupListMatch, ctrl?: Control): Promise<EggGroupEntity[]>;
}
export { EggGroupEntity };
