import ENUMS, {EntityType, PlaceType, WorkType} from "../types";

export interface Offer {
	id: string
	name: string
	type: string[]
	workType: WorkType
	placeType: PlaceType
	entityId: string
	entityType: EntityType
	description: string
	mainImage: string
	sliderImages: string[]
	createdDate: string
}

export const templateOffer: Offer = {
	id: '',
	name: '',
	type: [],
	workType: ENUMS.workType.Any,
	placeType: ENUMS.placeType.Any,
	entityId: '',
	entityType: ENUMS.entity.Client,
	description: '',
	mainImage: '',
	sliderImages: [],
	createdDate: '',
}


