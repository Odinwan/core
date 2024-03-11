import { fetchClientFactory } from '@core/RESTClient';
import generateParamsForRequest from '@core/RESTClient/helpers/generateParamsForRequest';
import { FetchClient, ListResponse } from '@core/RESTClient/interface';

import { UsersLoaderType } from './interface';
import { GetUsersParams, User, UserToCreate } from './types';

/**
 * Загрузчик данных по налогам
 */
export class UsersLoader implements UsersLoaderType {
  private readonly client: FetchClient;

  constructor(token?: string) {
    this.client = fetchClientFactory(token);
  }

  async GetUsers(params?: GetUsersParams): Promise<ListResponse<User>> {
    const url = params ? generateParamsForRequest<GetUsersParams>(`/users`, params) : `/users`;
    //@ts-ignore
    return await this.client.Get<ListResponse<User>>(url);
  }

  async CreateUser(data: UserToCreate): Promise<User> {
    //@ts-ignore
    return await this.client.Post<UserToCreate, User>('/users', data);
  }
}
