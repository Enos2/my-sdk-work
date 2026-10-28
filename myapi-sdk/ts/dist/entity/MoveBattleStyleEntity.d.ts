import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { MoveBattleStyle, MoveBattleStyleLoadMatch, MoveBattleStyleListMatch } from '../MyapiTypes';
declare class MoveBattleStyleEntity extends MyapiEntityBase<MoveBattleStyle> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: MoveBattleStyleEntity): MoveBattleStyleEntity;
    load(this: any, reqmatch?: MoveBattleStyleLoadMatch, ctrl?: Control): Promise<MoveBattleStyleEntity>;
    list(this: any, reqmatch?: MoveBattleStyleListMatch, ctrl?: Control): Promise<MoveBattleStyleEntity[]>;
}
export { MoveBattleStyleEntity };
