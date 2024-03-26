import {createState} from '@core/RXContextCore/useContextSubscriber';
import {Address, Client, CLIENT_TEMPLATE} from "@services/requests/usersLoader/types";
import {ActionType} from "@settings/types";
import {CRUDClientCollection} from "components/modals/CRUDUserModal/context/CRUDClientCollection";
import {KeyCollection} from "@core/RESTClient/interface";
import {SettingsContext} from "@components/modals/CRUDUserModal/context/types";

const settingsContext:SettingsContext = {
    onSuccess: () => null
}

const [useIsLoading, $isLoading] = createState<boolean>(false);
const [useCRUDIsOpen, $isOpen] = createState<boolean>(false);
const [useActionsType, $actionType] = createState<ActionType>('create');
const [useErrors, $errors] = createState<KeyCollection<Client>>({});
const [useCurrentUser, $user] = createState<Client | undefined>(undefined);
const [_useSettings, $settings] = createState<SettingsContext>(settingsContext);

const handleOpenModalWithCurrentUser = (user: Client,onSuccess: () => void) => {
    $settings.next({onSuccess})
    $user.next(user);
    $actionType.next('edit');
    $isOpen.next(true);
}

const handleOpenCreateClient = (onSuccess: () => void) => {
    $settings.next({onSuccess})
    $user.next({...CLIENT_TEMPLATE, id: 'temp'});
    $actionType.next('create');
    $isOpen.next(true);
}

const handleSave = async () => {
    const actionType = $actionType.getValue();
    const user = $user.getValue();
    const errors = CRUDClientCollection().Validate(user);

    if (Object.keys(errors).length !== 0) {
        $errors.next(errors)
        return
    }

    $isLoading.next(true)
    await CRUDClientCollection().Save(actionType,user).then((r) => {
        $settings.getValue().onSuccess();
        $isLoading.next(false);
    });
}

const handleClearError = (key: keyof Client | keyof Address) => {
    const errors = $errors.getValue();
    delete errors[key];
    $errors.next(errors)
}

const actions = {
    handleOpenModalWithCurrentUser,
    handleOpenCreateClient,
    handleClearError,
    handleSave
}

const useCRUDUserModal = () => {
    return {
        useCRUDIsOpen,
        useCurrentUser,
        useActionsType,
        useIsLoading,
        useErrors,
        actions
    };
};

export default useCRUDUserModal;
