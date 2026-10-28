import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { BerryFlavor, BerryFlavorLoadMatch, BerryFlavorListMatch } from '../MyapiTypes';
declare class BerryFlavorEntity extends MyapiEntityBase<BerryFlavor> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: BerryFlavorEntity): BerryFlavorEntity;
    load(this: any, reqmatch?: BerryFlavorLoadMatch, ctrl?: Control): Promise<BerryFlavorEntity>;
    list(this: any, reqmatch?: BerryFlavorListMatch, ctrl?: Control): Promise<BerryFlavorEntity[]>;
}
export { BerryFlavorEntity };
