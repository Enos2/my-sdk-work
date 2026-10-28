import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { ContestEffect, ContestEffectLoadMatch, ContestEffectListMatch } from '../MyapiTypes';
declare class ContestEffectEntity extends MyapiEntityBase<ContestEffect> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: ContestEffectEntity): ContestEffectEntity;
    load(this: any, reqmatch?: ContestEffectLoadMatch, ctrl?: Control): Promise<ContestEffectEntity>;
    list(this: any, reqmatch?: ContestEffectListMatch, ctrl?: Control): Promise<ContestEffectEntity[]>;
}
export { ContestEffectEntity };
