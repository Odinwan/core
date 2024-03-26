import { GetUsersParams, Client } from '@services/requests/usersLoader/types';

import { Collection } from '@core/RESTClient/interface';
import { StateInterface } from '@core/RXContextCore/useContextSubscriber';

export type RequiredGetUsersParams = Required<GetUsersParams>;

export interface UseUsersActions {
  init(): void;
}

export interface SettingsContext {
  onSuccess: () => void
}

interface UseUsers {
  useUsersListParams(): StateInterface<RequiredGetUsersParams>;

  useUsersListCount(): StateInterface<number>;

  useUsersList(): StateInterface<Client[]>;

  useSelectedUsers(): StateInterface<Collection<string>>;

  useInit(): StateInterface<boolean>;

  useLoading(): StateInterface<boolean>;

  actions: UseUsersActions;
}

export default UseUsers;
