import {Client} from "@services/requests/usersLoader/types";
import {ActionType} from "@settings/types";
import {KeyCollection} from "@core/RESTClient/interface";

/**
 * Сервис авторизации пользователя
 */
export interface CRUDClientInterface {
    Save(actionType: ActionType, client: Client): Promise<Client | undefined>;

    Validate(client: Client): KeyCollection<Client>;
}
