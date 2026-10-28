import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { ContestType, ContestTypeLoadMatch, ContestTypeListMatch } from '../MyapiTypes';
declare class ContestTypeEntity extends MyapiEntityBase<ContestType> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: ContestTypeEntity): ContestTypeEntity;
    load(this: any, reqmatch?: ContestTypeLoadMatch, ctrl?: Control): Promise<ContestTypeEntity>;
    list(this: any, reqmatch?: ContestTypeListMatch, ctrl?: Control): Promise<ContestTypeEntity[]>;
}
export { ContestTypeEntity };
