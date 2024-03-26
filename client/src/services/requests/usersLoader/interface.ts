import { ListResponse } from '@core/RESTClient/interface';
import { GetUsersParams, Client, ClientToCreate } from './types';

export type UsersLoaderType = {
  GetUsers(params?: GetUsersParams): Promise<ListResponse<Client>>;

  CreateUser(data: ClientToCreate): Promise<Client>;

  UpdateUser(data: Client): Promise<Client>;
};
