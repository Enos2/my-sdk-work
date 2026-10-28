import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { Gender, GenderLoadMatch, GenderListMatch } from '../MyapiTypes';
declare class GenderEntity extends MyapiEntityBase<Gender> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: GenderEntity): GenderEntity;
    load(this: any, reqmatch?: GenderLoadMatch, ctrl?: Control): Promise<GenderEntity>;
    list(this: any, reqmatch?: GenderListMatch, ctrl?: Control): Promise<GenderEntity[]>;
}
export { GenderEntity };
