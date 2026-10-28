import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { Nature, NatureLoadMatch, NatureListMatch } from '../MyapiTypes';
declare class NatureEntity extends MyapiEntityBase<Nature> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: NatureEntity): NatureEntity;
    load(this: any, reqmatch?: NatureLoadMatch, ctrl?: Control): Promise<NatureEntity>;
    list(this: any, reqmatch?: NatureListMatch, ctrl?: Control): Promise<NatureEntity[]>;
}
export { NatureEntity };
