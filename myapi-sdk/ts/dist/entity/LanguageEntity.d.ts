import { MyapiEntityBase } from '../MyapiEntityBase';
import type { MyapiSDK } from '../MyapiSDK';
import type { Control } from '../types';
import type { Language, LanguageLoadMatch, LanguageListMatch } from '../MyapiTypes';
declare class LanguageEntity extends MyapiEntityBase<Language> {
    constructor(client: MyapiSDK, entopts: any);
    make(this: LanguageEntity): LanguageEntity;
    load(this: any, reqmatch?: LanguageLoadMatch, ctrl?: Control): Promise<LanguageEntity>;
    list(this: any, reqmatch?: LanguageListMatch, ctrl?: Control): Promise<LanguageEntity[]>;
}
export { LanguageEntity };
