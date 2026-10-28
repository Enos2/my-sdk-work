import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { Stat, StatLoadMatch, StatListMatch } from '../MyapiTypes';
declare class StatEntity extends MyapiEntityBase<Stat> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: StatEntity): StatEntity;
    load(this: any, reqmatch?: StatLoadMatch, ctrl?: Control): Promise<StatEntity>;
    list(this: any, reqmatch?: StatListMatch, ctrl?: Control): Promise<StatEntity[]>;
}
export { StatEntity };
