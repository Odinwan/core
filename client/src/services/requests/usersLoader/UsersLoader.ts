import { fetchClientFactory } from '@core/RESTClient';
import generateParamsForRequest from '@core/RESTClient/helpers/generateParamsForRequest';
import { FetchClient, ListResponse } from '@core/RESTClient/interface';

import { UsersLoaderType } from './interface';
import {Client, GetUsersParams, ClientToCreate} from './types';

/**
 * Загрузчик данных по налогам
 */
export class UsersLoader implements UsersLoaderType {
  private readonly client: FetchClient;

  constructor(token?: string) {
    this.client = fetchClientFactory(token);
  }

  async GetUsers(params?: GetUsersParams): Promise<ListResponse<Client>> {
    const url = params ? generateParamsForRequest<GetUsersParams>(`/clients`, params) : `/clients`;
    //@ts-ignore
    return await this.client.Get<ListResponse<Client>>(url);
  }

  async CreateUser(data: ClientToCreate): Promise<Client> {
    //@ts-ignore
    return await this.client.Post<UserToCreate, Client>('/clients', data);
  }

  async UpdateUser(data: Client): Promise<Client> {
    //@ts-ignore
    return await this.client.Put<UserToCreate, Client>(`/clients/${data.id}`, data);
  }
}
