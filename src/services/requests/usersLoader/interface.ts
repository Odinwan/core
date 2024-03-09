import {User, UserToCreate} from "./types";

export type UsersLoaderType = {
    GetUsers(): Promise<User[]>

    CreateUser(data: UserToCreate): Promise<User>
}