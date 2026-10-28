import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { Generation, GenerationLoadMatch, GenerationListMatch } from '../MyapiTypes';
declare class GenerationEntity extends MyapiEntityBase<Generation> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: GenerationEntity): GenerationEntity;
    load(this: any, reqmatch?: GenerationLoadMatch, ctrl?: Control): Promise<GenerationEntity>;
    list(this: any, reqmatch?: GenerationListMatch, ctrl?: Control): Promise<GenerationEntity[]>;
}
export { GenerationEntity };
