import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { EvolutionTrigger, EvolutionTriggerLoadMatch, EvolutionTriggerListMatch } from '../MyapiTypes';
declare class EvolutionTriggerEntity extends MyapiEntityBase<EvolutionTrigger> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: EvolutionTriggerEntity): EvolutionTriggerEntity;
    load(this: any, reqmatch?: EvolutionTriggerLoadMatch, ctrl?: Control): Promise<EvolutionTriggerEntity>;
    list(this: any, reqmatch?: EvolutionTriggerListMatch, ctrl?: Control): Promise<EvolutionTriggerEntity[]>;
}
export { EvolutionTriggerEntity };
