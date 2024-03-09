import {StateInterface} from "../../core/RXContextCore/useContextSubscriber";
import {User} from "../../services/requests/usersLoader/types";
import {Collection} from "../../core/RESTClient/interface";

export interface UseUsersActions {
    init(): void
}

interface UseUsers {
    useUsersList(): StateInterface<User[]>

    useSelectedUsers(): StateInterface<Collection<string>>

    useInit(): StateInterface<boolean>

    actions: UseUsersActions
}

export default UseUsers