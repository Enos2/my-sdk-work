import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { GrowthRate, GrowthRateLoadMatch, GrowthRateListMatch } from '../MyapiTypes';
declare class GrowthRateEntity extends MyapiEntityBase<GrowthRate> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: GrowthRateEntity): GrowthRateEntity;
    load(this: any, reqmatch?: GrowthRateLoadMatch, ctrl?: Control): Promise<GrowthRateEntity>;
    list(this: any, reqmatch?: GrowthRateListMatch, ctrl?: Control): Promise<GrowthRateEntity[]>;
}
export { GrowthRateEntity };
