import {UsersLoader} from './UsersLoader';
import {UsersLoaderType} from "./interface";

export const usersLoader: {
    (token?: string): UsersLoaderType
} = (token: string | undefined) => new UsersLoader(token);
