import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { ItemAttribute, ItemAttributeLoadMatch, ItemAttributeListMatch } from '../MyapiTypes';
declare class ItemAttributeEntity extends MyapiEntityBase<ItemAttribute> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: ItemAttributeEntity): ItemAttributeEntity;
    load(this: any, reqmatch?: ItemAttributeLoadMatch, ctrl?: Control): Promise<ItemAttributeEntity>;
    list(this: any, reqmatch?: ItemAttributeListMatch, ctrl?: Control): Promise<ItemAttributeEntity[]>;
}
export { ItemAttributeEntity };
