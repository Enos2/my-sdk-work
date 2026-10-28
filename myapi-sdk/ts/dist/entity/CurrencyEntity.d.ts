import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { Currency, CurrencyLoadMatch, CurrencyListMatch } from '../MyapiTypes';
declare class CurrencyEntity extends MyapiEntityBase<Currency> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: CurrencyEntity): CurrencyEntity;
    load(this: any, reqmatch?: CurrencyLoadMatch, ctrl?: Control): Promise<CurrencyEntity>;
    list(this: any, reqmatch?: CurrencyListMatch, ctrl?: Control): Promise<CurrencyEntity[]>;
}
export { CurrencyEntity };
