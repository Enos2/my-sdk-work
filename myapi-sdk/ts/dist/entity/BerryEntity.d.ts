import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { Berry, BerryLoadMatch, BerryListMatch } from '../MyapiTypes';
declare class BerryEntity extends MyapiEntityBase<Berry> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: BerryEntity): BerryEntity;
    load(this: any, reqmatch?: BerryLoadMatch, ctrl?: Control): Promise<BerryEntity>;
    list(this: any, reqmatch?: BerryListMatch, ctrl?: Control): Promise<BerryEntity[]>;
}
export { BerryEntity };
