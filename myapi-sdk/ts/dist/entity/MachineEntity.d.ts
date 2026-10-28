import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { Machine, MachineLoadMatch, MachineListMatch } from '../MyapiTypes';
declare class MachineEntity extends MyapiEntityBase<Machine> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: MachineEntity): MachineEntity;
    load(this: any, reqmatch?: MachineLoadMatch, ctrl?: Control): Promise<MachineEntity>;
    list(this: any, reqmatch?: MachineListMatch, ctrl?: Control): Promise<MachineEntity[]>;
}
export { MachineEntity };
