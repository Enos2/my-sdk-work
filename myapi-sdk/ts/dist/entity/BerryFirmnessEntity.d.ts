import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { BerryFirmness, BerryFirmnessLoadMatch, BerryFirmnessListMatch } from '../MyapiTypes';
declare class BerryFirmnessEntity extends MyapiEntityBase<BerryFirmness> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: BerryFirmnessEntity): BerryFirmnessEntity;
    load(this: any, reqmatch?: BerryFirmnessLoadMatch, ctrl?: Control): Promise<BerryFirmnessEntity>;
    list(this: any, reqmatch?: BerryFirmnessListMatch, ctrl?: Control): Promise<BerryFirmnessEntity[]>;
}
export { BerryFirmnessEntity };
