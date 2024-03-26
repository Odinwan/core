import {Request, Response} from 'express';
import {templateOffer, Offer} from "./types";

const data: Offer[] = [templateOffer];

export const getOffers = (req: Request, res: Response) => {
	const {limit, offset} = req.query;

	let result = data;
	if (limit && offset) {
		const parsedLimit = parseInt(limit as string, 10);
		const parsedOffset = parseInt(offset as string, 10);
		result = data.slice(parsedOffset, parsedOffset + parsedLimit);
	}

	return res.json({
		result,
		count: data.length
	});
};

export const createOffer = (req: Request, res: Response) => {
	const newItem: Offer = {
		id: data.length + 1,
		...templateOffer,
	};

	data.push(newItem);
	return res.status(201).json(newItem);
};

export const getOfferById = (req: Request, res: Response) => {
	const itemId: string = String(req.params.id);
	const item: Offer | undefined = data.find(e => e.id === itemId);

	if (!item) {
		return res.status(404).json({error: 'User not found'});
	}

	return res.json(item);
};

export const updateOffer = (req: Request, res: Response) => {
	const Id: string = String(req.params.id);
	const newItem: Offer = req.body;
	const itemIndex: number = data.findIndex(e => e.id === Id);

	if (itemIndex === -1) {
		return res.status(404).json({error: 'User not found'});
	}

	const item: Offer = data[itemIndex];
	const updatedItem: Offer = {...item, ...newItem};
	data[itemIndex] = updatedItem;

	return res.json(updatedItem);
};
