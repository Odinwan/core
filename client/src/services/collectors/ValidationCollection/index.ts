import { ValidationCollectionInterface } from './interfaces';
import {ValidationCollection} from "@services/collectors/ValidationCollection/ValidationCollection";

let instance: ValidationCollectionInterface | null = null;

export const ValidationMethods: () => ValidationCollectionInterface = () => {
    if (!instance) {
        instance = new ValidationCollection();
    }
    return instance;
};