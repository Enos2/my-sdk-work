import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { PalParkArea, PalParkAreaLoadMatch, PalParkAreaListMatch } from '../MyapiTypes';
declare class PalParkAreaEntity extends MyapiEntityBase<PalParkArea> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: PalParkAreaEntity): PalParkAreaEntity;
    load(this: any, reqmatch?: PalParkAreaLoadMatch, ctrl?: Control): Promise<PalParkAreaEntity>;
    list(this: any, reqmatch?: PalParkAreaListMatch, ctrl?: Control): Promise<PalParkAreaEntity[]>;
}
export { PalParkAreaEntity };
