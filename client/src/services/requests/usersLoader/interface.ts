import { ListResponse } from '../../../core/RESTClient/interface';
import { GetUsersParams, User, UserToCreate } from './types';

export type UsersLoaderType = {
  GetUsers(params?: GetUsersParams): Promise<ListResponse<User>>;

  CreateUser(data: UserToCreate): Promise<User>;
};
