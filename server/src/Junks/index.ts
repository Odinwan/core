import {Request, Response} from 'express';
import {clientJunk, Junk} from "./types";

const junks: Junk[] = [clientJunk];

export const getJunks = (req: Request, res: Response) => {
	const {limit, offset} = req.query;

	let result = junks;
	if (limit && offset) {
		const parsedLimit = parseInt(limit as string, 10);
		const parsedOffset = parseInt(offset as string, 10);
		result = junks.slice(parsedOffset, parsedOffset + parsedLimit);
	}

	return res.json({
		result,
		count: junks.length
	});
};

export const createJunk = (req: Request, res: Response) => {
	const newJunk: Junk = {
		id: junks.length + 1,
		...clientJunk,
	};

	junks.push(newJunk);
	return res.status(201).json(newJunk);
};

export const getJunkById = (req: Request, res: Response) => {
	const junkId: string = String(req.params.id);
	const junk: Junk | undefined = junks.find(junk => junk.id === junkId);

	if (!junk) {
		return res.status(404).json({error: 'User not found'});
	}

	return res.json(junk);
};

export const updateJunk = (req: Request, res: Response) => {
	const junkId: string = String(req.params.id);
	const newJunk: Junk = req.body;
	const userIndex: number = junks.findIndex(user => user.id === junkId);

	if (userIndex === -1) {
		return res.status(404).json({error: 'User not found'});
	}

	const user: Junk = junks[userIndex];
	const updatedUser: Junk = {...user, ...newJunk};
	junks[userIndex] = updatedUser;

	return res.json(updatedUser);
};
