import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { MoveTarget, MoveTargetLoadMatch, MoveTargetListMatch } from '../MyapiTypes';
declare class MoveTargetEntity extends MyapiEntityBase<MoveTarget> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: MoveTargetEntity): MoveTargetEntity;
    load(this: any, reqmatch?: MoveTargetLoadMatch, ctrl?: Control): Promise<MoveTargetEntity>;
    list(this: any, reqmatch?: MoveTargetListMatch, ctrl?: Control): Promise<MoveTargetEntity[]>;
}
export { MoveTargetEntity };
