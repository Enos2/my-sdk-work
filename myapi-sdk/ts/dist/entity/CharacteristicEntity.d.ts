import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { Characteristic, CharacteristicLoadMatch, CharacteristicListMatch } from '../MyapiTypes';
declare class CharacteristicEntity extends MyapiEntityBase<Characteristic> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: CharacteristicEntity): CharacteristicEntity;
    load(this: any, reqmatch?: CharacteristicLoadMatch, ctrl?: Control): Promise<CharacteristicEntity>;
    list(this: any, reqmatch?: CharacteristicListMatch, ctrl?: Control): Promise<CharacteristicEntity[]>;
}
export { CharacteristicEntity };
