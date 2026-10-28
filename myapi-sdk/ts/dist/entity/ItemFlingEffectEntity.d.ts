import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { ItemFlingEffect, ItemFlingEffectLoadMatch, ItemFlingEffectListMatch } from '../MyapiTypes';
declare class ItemFlingEffectEntity extends MyapiEntityBase<ItemFlingEffect> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: ItemFlingEffectEntity): ItemFlingEffectEntity;
    load(this: any, reqmatch?: ItemFlingEffectLoadMatch, ctrl?: Control): Promise<ItemFlingEffectEntity>;
    list(this: any, reqmatch?: ItemFlingEffectListMatch, ctrl?: Control): Promise<ItemFlingEffectEntity[]>;
}
export { ItemFlingEffectEntity };
