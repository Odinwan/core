import ENUMS, {Gender} from "@settings/enums";

export interface Client {
    id: string;
    email: string;
    phone: string;
    gender: Gender;
    firstName: string;
    lastName: string;
    avatar: string;
    birthDate: string;
    admin: boolean;
    address: Address;
    createdDate: string;
    roles: string[];
}

export interface Address {
    city: string;
    country: string;
    street: string;
    house: string;
    zip: string;
}

export type ClientToCreate = Omit<Client, 'id'> & {
    id?: string;
};

export interface GetUsersParams {
    limit?: number;
    offset?: number;
}

export const addressTemplate: Address = {
    city: '',
    country: '',
    street: '',
    house: '',
    zip: '',
}

export const CLIENT_TEMPLATE: ClientToCreate = {
    email: '',
    phone: '',
    gender: ENUMS.gender.Male,
    firstName: '',
    lastName: '',
    avatar: '',
    birthDate: '',
    admin: false,
    address: addressTemplate,
    createdDate: '',
    roles: [],
}
