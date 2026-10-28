import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { EvolutionChain, EvolutionChainLoadMatch, EvolutionChainListMatch } from '../MyapiTypes';
declare class EvolutionChainEntity extends MyapiEntityBase<EvolutionChain> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: EvolutionChainEntity): EvolutionChainEntity;
    load(this: any, reqmatch?: EvolutionChainLoadMatch, ctrl?: Control): Promise<EvolutionChainEntity>;
    list(this: any, reqmatch?: EvolutionChainListMatch, ctrl?: Control): Promise<EvolutionChainEntity[]>;
}
export { EvolutionChainEntity };
