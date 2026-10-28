import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { Ability, AbilityLoadMatch, AbilityListMatch } from '../MyapiTypes';
declare class AbilityEntity extends MyapiEntityBase<Ability> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: AbilityEntity): AbilityEntity;
    load(this: any, reqmatch?: AbilityLoadMatch, ctrl?: Control): Promise<AbilityEntity>;
    list(this: any, reqmatch?: AbilityListMatch, ctrl?: Control): Promise<AbilityEntity[]>;
}
export { AbilityEntity };
