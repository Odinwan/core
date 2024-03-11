import { UsersLoaderType } from './interface';
import { UsersLoader } from './UsersLoader';

export const usersLoader: {
  (token?: string): UsersLoaderType;
} = (token: string | undefined) => new UsersLoader(token);
