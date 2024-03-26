import { Request, Response } from 'express';
import {Client, clientTemplate} from "./types";

const clients: Client[] = [clientTemplate];

export const getClients = (req: Request, res: Response) => {
	const { limit, offset } = req.query;

	let result = clients;
	if (limit && offset) {
		const parsedLimit = parseInt(limit as string, 10);
		const parsedOffset = parseInt(offset as string, 10);
		result = clients.slice(parsedOffset, parsedOffset + parsedLimit);
	}
	console.log('result',result)
	return res.json({
		result,
		count: clients.length
	});
};

export const createClient = (req: Request, res: Response) => {
	const client: Client = req.body;
	const userWithTheSameEmail = clients.find(user => user.email === client.email);

	if (userWithTheSameEmail) {
		return res.status(400).json({ error: 'Email is already in use!' });
	}

	const newUser: Client = {
		...client,
		id: `${clients.length + 1}`,
	};

	clients.push(newUser);
	return res.status(201).json(newUser);
};

export const getClientById = (req: Request, res: Response) => {
	const userId: string = String(req.params.id);
	const user: Client | undefined = clients.find(user => user.id === userId);

	if (!user) {
		return res.status(404).json({ error: 'User not found' });
	}

	return res.json(user);
};

export const updateClient = (req: Request, res: Response) => {
	const userId: string = String(req.params.id);
	const newClient: Client = req.body;
	const userIndex: number = clients.findIndex(user => user.id === userId);

	if (userIndex === -1) {
		return res.status(404).json({ error: 'User not found' });
	}

	const user: Client = clients[userIndex];
	const updatedUser: Client = { ...user, ...newClient };
	console.log('newClient',newClient)
	console.log('updatedUser',updatedUser)
	clients[userIndex] = updatedUser;
	console.log('clients',clients)
	return res.json(updatedUser);
};
