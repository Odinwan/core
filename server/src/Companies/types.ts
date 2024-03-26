import ENUMS, {CompanyType} from "../types";

export interface Company {
	id: string
	name: string
	email: string
	shortName: string
	ownerId: string
	type: CompanyType
	workers: string[]
	logoImage: string
	mainImage: string
	sliderImages: string[]
	description: string
	createdDate: string
}

export const templateCompany: Company = {
	id: '1',
	name: '',
	email: '',
	shortName: '',
	ownerId: '',
	type: ENUMS['companyType'].IP,
	workers: [],
	logoImage: '',
	mainImage: '',
	sliderImages: [],
	description: '',
	createdDate: ''
}


