import {createState} from "../../core/RXContextCore/useContextSubscriber";
import {debounceTime, filter, map} from "rxjs/operators";
import {usersLoader} from "../../services/requests/usersLoader";
import {User} from "../../services/requests/usersLoader/types";
import {Collection} from "../../core/RESTClient/interface";
import UseUsers, {UseUsersActions} from "./types";

const [useUsersList, $users] = createState<User[]>([], "USERS");
const [useSelectedUsers] = createState<Collection<string>>({}, "SELECTED_USERS");
const [useInit, $init] = createState<boolean>(false);

const loadUsers = async () => {
    return await usersLoader().GetUsers()
}

$init.pipe(
    filter((v) => v),
    debounceTime(500),
    map(() => loadUsers().then(r => {
        $users.next(r)
    })),
).subscribe();

const init = () => {
    $init.next(true)
}

const actions: UseUsersActions = {
    init
}

const useUsers = (): UseUsers => {

    return {
        useUsersList,
        useSelectedUsers,
        useInit,
        actions
    }
}

export default useUsers