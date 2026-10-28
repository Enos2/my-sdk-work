import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { LocationArea, LocationAreaLoadMatch, LocationAreaListMatch } from '../MyapiTypes';
declare class LocationAreaEntity extends MyapiEntityBase<LocationArea> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: LocationAreaEntity): LocationAreaEntity;
    load(this: any, reqmatch?: LocationAreaLoadMatch, ctrl?: Control): Promise<LocationAreaEntity>;
    list(this: any, reqmatch?: LocationAreaListMatch, ctrl?: Control): Promise<LocationAreaEntity[]>;
}
export { LocationAreaEntity };
