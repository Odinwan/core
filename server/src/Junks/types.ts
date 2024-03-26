import ENUMS, {EntityType} from "../types";

export interface Junk {
	id: string;
	name: string;
	type: string[];
	entityId: string;
	entityName: EntityType;
	status: boolean;
	active: boolean;
	price: string;
	currency: string;
	description: string;
	mainImage: string;
	images: string[];
	createdDate: string;
}

export const clientJunk: Junk = {
	id: '',
	name: '',
	type: [],
	entityId: '',
	entityName: ENUMS['entity'].Client,
	status: true,
	active: true,
	price: '0',
	currency: '',
	description: '',
	mainImage: '',
	images: [],
	createdDate: '',
}


