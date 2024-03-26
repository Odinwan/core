import {ChangeMethodsInterface} from './interfaces';
import {ChangeMethods} from "@services/collectors/ChangeMethodsCollection/ChangeMethods";

let instance: ChangeMethodsInterface | null = null;

export const ChangeMethodsCollection: () => ChangeMethodsInterface = () => {
    if (!instance) {
        instance = new ChangeMethods();
    }

    return instance;
};