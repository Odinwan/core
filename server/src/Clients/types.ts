import ENUMS, {Gender} from "../types";

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

interface Address {
	city: string;
	country: string;
	street: string;
	house: string;
	zip: string;
}

export const addressTemplate: Address = {
	city: '',
	country: '',
	street: '',
	house: '',
	zip: '',
}

export const clientTemplate: Client = {
	id: '1',
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


