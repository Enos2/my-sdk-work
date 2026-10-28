import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { Type, TypeLoadMatch, TypeListMatch } from '../MyapiTypes';
declare class TypeEntity extends MyapiEntityBase<Type> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: TypeEntity): TypeEntity;
    load(this: any, reqmatch?: TypeLoadMatch, ctrl?: Control): Promise<TypeEntity>;
    list(this: any, reqmatch?: TypeListMatch, ctrl?: Control): Promise<TypeEntity[]>;
}
export { TypeEntity };
