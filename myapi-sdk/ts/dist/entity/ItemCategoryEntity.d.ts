import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { ItemCategory, ItemCategoryLoadMatch, ItemCategoryListMatch } from '../MyapiTypes';
declare class ItemCategoryEntity extends MyapiEntityBase<ItemCategory> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: ItemCategoryEntity): ItemCategoryEntity;
    load(this: any, reqmatch?: ItemCategoryLoadMatch, ctrl?: Control): Promise<ItemCategoryEntity>;
    list(this: any, reqmatch?: ItemCategoryListMatch, ctrl?: Control): Promise<ItemCategoryEntity[]>;
}
export { ItemCategoryEntity };
