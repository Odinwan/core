export interface User {
    id: number;
    name: string;
    email: string;
}

export type UserToCreate = Omit<User, 'id'>;