import { CRUDClient } from './CRUDClient';
import { CRUDClientInterface } from './interfaces';

let instance: CRUDClientInterface | null = null;

export const CRUDClientCollection: () => CRUDClientInterface = () => {
    if (!instance) {
        instance = new CRUDClient();
    }
    return instance;
};