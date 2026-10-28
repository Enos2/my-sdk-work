import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { EncounterMethod, EncounterMethodLoadMatch, EncounterMethodListMatch } from '../MyapiTypes';
declare class EncounterMethodEntity extends MyapiEntityBase<EncounterMethod> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: EncounterMethodEntity): EncounterMethodEntity;
    load(this: any, reqmatch?: EncounterMethodLoadMatch, ctrl?: Control): Promise<EncounterMethodEntity>;
    list(this: any, reqmatch?: EncounterMethodListMatch, ctrl?: Control): Promise<EncounterMethodEntity[]>;
}
export { EncounterMethodEntity };
