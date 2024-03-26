import { usersLoader } from '@services/requests/usersLoader';
import { Client } from '@services/requests/usersLoader/types';
import {combineLatest} from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';
import { Collection } from '@core/RESTClient/interface';
import { createState } from '@core/RXContextCore/useContextSubscriber';
import { TEMPLATE_PARAMS } from './consts';
import UseUsers, { RequiredGetUsersParams, UseUsersActions } from './types';

const [useUsersList, $users] = createState<Client[]>([], 'USERS');
const [useSelectedUsers] = createState<Collection<string>>({}, 'SELECTED_USERS');
const [useUsersListParams, $params] = createState<RequiredGetUsersParams>(
  TEMPLATE_PARAMS,
  'PARAMS_USERS'
);
const [useInit, $init] = createState<boolean>(false);
const [useUsersListCount, $usersListCount] = createState<number>(0);
const [useLoading, $loading] = createState<boolean>(false);

const loadUsers = async (params: RequiredGetUsersParams) => {
  $loading.next(true);
  return await usersLoader().GetUsers(params);
};

combineLatest([$init, $params])
  .pipe(
    debounceTime(500),
    filter(([_, params]) => !!params),
    switchMap(([_, params]) => loadUsers(params))
  )
  .subscribe((res) => {
    $users.next(res.result);
    $usersListCount.next(res.count);
    $loading.next(false);
  });

const init = () => {
  $init.next(true);
};

const actions: UseUsersActions = {
  init,
};

const useUsers = (): UseUsers => {
  return {
    useUsersListParams,
    useUsersListCount,
    useSelectedUsers,
    useUsersList,
    useLoading,
    useInit,
    actions,
  };
};

export default useUsers;
