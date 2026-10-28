import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { MoveDamageClass, MoveDamageClassLoadMatch, MoveDamageClassListMatch } from '../MyapiTypes';
declare class MoveDamageClassEntity extends MyapiEntityBase<MoveDamageClass> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: MoveDamageClassEntity): MoveDamageClassEntity;
    load(this: any, reqmatch?: MoveDamageClassLoadMatch, ctrl?: Control): Promise<MoveDamageClassEntity>;
    list(this: any, reqmatch?: MoveDamageClassListMatch, ctrl?: Control): Promise<MoveDamageClassEntity[]>;
}
export { MoveDamageClassEntity };
