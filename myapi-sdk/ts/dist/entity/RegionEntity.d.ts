import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { Region, RegionLoadMatch, RegionListMatch } from '../MyapiTypes';
declare class RegionEntity extends MyapiEntityBase<Region> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: RegionEntity): RegionEntity;
    load(this: any, reqmatch?: RegionLoadMatch, ctrl?: Control): Promise<RegionEntity>;
    list(this: any, reqmatch?: RegionListMatch, ctrl?: Control): Promise<RegionEntity[]>;
}
export { RegionEntity };
