import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { Version, VersionLoadMatch, VersionListMatch } from '../MyapiTypes';
declare class VersionEntity extends MyapiEntityBase<Version> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: VersionEntity): VersionEntity;
    load(this: any, reqmatch?: VersionLoadMatch, ctrl?: Control): Promise<VersionEntity>;
    list(this: any, reqmatch?: VersionListMatch, ctrl?: Control): Promise<VersionEntity[]>;
}
export { VersionEntity };
