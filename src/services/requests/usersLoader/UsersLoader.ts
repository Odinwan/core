import {fetchClientFactory} from "../../../core/RESTClient";
import {UsersLoaderType} from "./interface";
import {FetchClient} from "../../../core/RESTClient/interface";
import {User, UserToCreate} from "./types";

/**
 * Загрузчик данных по налогам
 */
export class UsersLoader implements UsersLoaderType {
  private readonly client: FetchClient;

  constructor(token?:string) {
    this.client = fetchClientFactory(token);
  }

  async GetUsers(): Promise<User[]> {
    //@ts-ignore
    return await this.client.Get<User[]>(`/users`, {});
  }

  async CreateUser(data:UserToCreate): Promise<User> {
    //@ts-ignore
    return await this.client.Post<UserToCreate, User>('/users', data);
  }
}
