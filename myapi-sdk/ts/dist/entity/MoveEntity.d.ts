import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { Move, MoveLoadMatch, MoveListMatch } from '../MyapiTypes';
declare class MoveEntity extends MyapiEntityBase<Move> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: MoveEntity): MoveEntity;
    load(this: any, reqmatch?: MoveLoadMatch, ctrl?: Control): Promise<MoveEntity>;
    list(this: any, reqmatch?: MoveListMatch, ctrl?: Control): Promise<MoveEntity[]>;
}
export { MoveEntity };
