import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { SuperContestEffect, SuperContestEffectLoadMatch, SuperContestEffectListMatch } from '../MyapiTypes';
declare class SuperContestEffectEntity extends MyapiEntityBase<SuperContestEffect> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: SuperContestEffectEntity): SuperContestEffectEntity;
    load(this: any, reqmatch?: SuperContestEffectLoadMatch, ctrl?: Control): Promise<SuperContestEffectEntity>;
    list(this: any, reqmatch?: SuperContestEffectListMatch, ctrl?: Control): Promise<SuperContestEffectEntity[]>;
}
export { SuperContestEffectEntity };
