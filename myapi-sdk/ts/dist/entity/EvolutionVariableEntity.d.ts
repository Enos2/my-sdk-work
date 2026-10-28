import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { EvolutionVariable, EvolutionVariableLoadMatch, EvolutionVariableListMatch } from '../MyapiTypes';
declare class EvolutionVariableEntity extends MyapiEntityBase<EvolutionVariable> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: EvolutionVariableEntity): EvolutionVariableEntity;
    load(this: any, reqmatch?: EvolutionVariableLoadMatch, ctrl?: Control): Promise<EvolutionVariableEntity>;
    list(this: any, reqmatch?: EvolutionVariableListMatch, ctrl?: Control): Promise<EvolutionVariableEntity[]>;
}
export { EvolutionVariableEntity };
