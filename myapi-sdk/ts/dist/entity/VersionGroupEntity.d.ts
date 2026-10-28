import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { VersionGroup, VersionGroupLoadMatch, VersionGroupListMatch } from '../MyapiTypes';
declare class VersionGroupEntity extends MyapiEntityBase<VersionGroup> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: VersionGroupEntity): VersionGroupEntity;
    load(this: any, reqmatch?: VersionGroupLoadMatch, ctrl?: Control): Promise<VersionGroupEntity>;
    list(this: any, reqmatch?: VersionGroupListMatch, ctrl?: Control): Promise<VersionGroupEntity[]>;
}
export { VersionGroupEntity };
