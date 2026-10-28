import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { ItemPocket, ItemPocketLoadMatch, ItemPocketListMatch } from '../MyapiTypes';
declare class ItemPocketEntity extends MyapiEntityBase<ItemPocket> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: ItemPocketEntity): ItemPocketEntity;
    load(this: any, reqmatch?: ItemPocketLoadMatch, ctrl?: Control): Promise<ItemPocketEntity>;
    list(this: any, reqmatch?: ItemPocketListMatch, ctrl?: Control): Promise<ItemPocketEntity[]>;
}
export { ItemPocketEntity };
