import {CRUDClientInterface} from "@components/modals/CRUDUserModal/context/CRUDClientCollection/interfaces";
import {Client} from "@services/requests/usersLoader/types";
import {usersLoader} from "@services/requests/usersLoader";
import {ActionType} from "@settings/types";
import {KeyCollection} from "@core/RESTClient/interface";
import {ValidationMethods} from "@services/collectors/ValidationCollection";
import {ValidationCollectionInterface} from "@services/collectors/ValidationCollection/interfaces";

/**
 * Сервис авторизации пользователя
 */
export class CRUDClient implements CRUDClientInterface {
    private validMethods: ValidationCollectionInterface

    constructor() {
        this.validMethods = ValidationMethods()
    }

    private Valid<K extends keyof Client>(key: K, value: Client[K]) {
        switch (key) {
            case 'email':
                return this.validMethods.validateEmail(value as string, true);
            case 'phone':
                return this.validMethods.validatePhone(value as string, false);
            case 'firstName':
                return this.validMethods.validateStringField(value as string, 'First Name', true);
            case 'lastName':
                return this.validMethods.validateStringField(value as string, 'Last Name', true);
            case 'birthDate':
                return this.validMethods.validateDateField(value as string, 'Birth Date', false);
            case 'gender':
                return this.validMethods.validateEnum(value as string, 'Gender', false);
            default:
                return null;
        }
    }

    async Save(actionType: ActionType, client: Client): Promise<Client | undefined> {
        console.log('client',client)
        switch (actionType) {
            case "create":
                return await usersLoader().CreateUser(client);
            case "edit":
                return await usersLoader().UpdateUser(client);
            default:
                return undefined
        }
    }

    Validate(client: Client): KeyCollection<Client> {
        return Object.keys(client).reduce((acc: KeyCollection<Client>, key: keyof Client) => {
            const resp = this.Valid(key, client[key]);
            if (resp) {
                acc = {...acc, [key]: resp}
            }

            return acc
        }, {})
    }
}
