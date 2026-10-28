import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { EncounterCondition, EncounterConditionLoadMatch, EncounterConditionListMatch } from '../MyapiTypes';
declare class EncounterConditionEntity extends MyapiEntityBase<EncounterCondition> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: EncounterConditionEntity): EncounterConditionEntity;
    load(this: any, reqmatch?: EncounterConditionLoadMatch, ctrl?: Control): Promise<EncounterConditionEntity>;
    list(this: any, reqmatch?: EncounterConditionListMatch, ctrl?: Control): Promise<EncounterConditionEntity[]>;
}
export { EncounterConditionEntity };
