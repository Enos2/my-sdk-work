import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { MoveLearnMethod, MoveLearnMethodLoadMatch, MoveLearnMethodListMatch } from '../MyapiTypes';
declare class MoveLearnMethodEntity extends MyapiEntityBase<MoveLearnMethod> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: MoveLearnMethodEntity): MoveLearnMethodEntity;
    load(this: any, reqmatch?: MoveLearnMethodLoadMatch, ctrl?: Control): Promise<MoveLearnMethodEntity>;
    list(this: any, reqmatch?: MoveLearnMethodListMatch, ctrl?: Control): Promise<MoveLearnMethodEntity[]>;
}
export { MoveLearnMethodEntity };
