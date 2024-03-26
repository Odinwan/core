import {Request, Response} from 'express';
import {templateCompany, Company} from "./types";

const data: Company[] = [templateCompany];

export const getCompanies = (req: Request, res: Response) => {
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

export const createCompany = (req: Request, res: Response) => {
	const newItem: Company = {
		id: data.length + 1,
		...templateCompany,
	};

	data.push(newItem);
	return res.status(201).json(newItem);
};

export const getCompanyById = (req: Request, res: Response) => {
	const itemId: string = String(req.params.id);
	const item: Company | undefined = data.find(e => e.id === itemId);

	if (!item) {
		return res.status(404).json({error: 'User not found'});
	}

	return res.json(item);
};

export const updateCompany = (req: Request, res: Response) => {
	const Id: string = String(req.params.id);
	const newItem: Company = req.body;
	const itemIndex: number = data.findIndex(e => e.id === Id);

	if (itemIndex === -1) {
		return res.status(404).json({error: 'User not found'});
	}

	const item: Company = data[itemIndex];
	const updatedItem: Company = {...item, ...newItem};
	data[itemIndex] = updatedItem;

	return res.json(updatedItem);
};
