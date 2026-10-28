import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { EncounterConditionValue, EncounterConditionValueLoadMatch, EncounterConditionValueListMatch } from '../MyapiTypes';
declare class EncounterConditionValueEntity extends MyapiEntityBase<EncounterConditionValue> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: EncounterConditionValueEntity): EncounterConditionValueEntity;
    load(this: any, reqmatch?: EncounterConditionValueLoadMatch, ctrl?: Control): Promise<EncounterConditionValueEntity>;
    list(this: any, reqmatch?: EncounterConditionValueListMatch, ctrl?: Control): Promise<EncounterConditionValueEntity[]>;
}
export { EncounterConditionValueEntity };
