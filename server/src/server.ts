import express, { Request, Response, NextFunction } from 'express';
import { serve, setup } from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import 'dotenv/config';

interface User {
	id: number;
	name: string;
	email: string;
}

const app = express();
const SERVER_PORT: number = parseInt(process.env.SERVER_PORT!) || 4000;

const users: User[] = [
	{ id: 1, name: 'Keira Holman', email: 'keira.holman@email.com' },
	{ id: 2, name: 'Tiffany Harding', email: 'tiffany.harding@email.com' },
	{ id: 3, name: 'Riya Pittman', email: 'riya.pittman@email.com' },
	{ id: 4, name: 'Liberty Kent', email: 'liberty.kent@email.com' }
];

// Middleware для обработки CORS
app.use((req: Request, res: Response, next: NextFunction) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

app.use(express.json());

// Swagger UI
app.use('/api-docs', serve, setup(swaggerDocument));

// Получение списка пользователей
app.get('/users', (request: Request, response: Response) => {
	return response.json(users);
});

// Создание нового пользователя
app.post('/users', (request: Request, response: Response) => {
	const { name, email }: { name: string, email: string } = request.body;
	const userWithTheSameEmail = users.find(user => user.email === email);

	if (userWithTheSameEmail) {
		return response.status(400).json({ error: 'Email is already in use!' });
	}

	const newUser: User = {
		id: users.length + 1,
		name,
		email
	};

	users.push(newUser);
	return response.status(201).json(newUser);
});

// Получение пользователя по id
app.get('/users/:id', (request: Request, response: Response) => {
	const userId: number = parseInt(request.params.id);
	const user: User | undefined = users.find(user => user.id === userId);

	if (!user) {
		return response.status(404).json({ error: 'User not found' });
	}

	return response.json(user);
});

// Обновление пользователя
app.put('/users/:id', (request: Request, response: Response) => {
	const userId: number = parseInt(request.params.id);
	const { name, email }: { name: string, email: string } = request.body;
	const userIndex: number = users.findIndex(user => user.id === userId);

	if (userIndex === -1) {
		return response.status(404).json({ error: 'User not found' });
	}

	const user: User = users[userIndex];
	const updatedUser: User = { ...user, name, email };
	users[userIndex] = updatedUser;

	return response.json(updatedUser);
});

app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`));
