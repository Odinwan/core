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
	{ id: 4, name: 'Liberty Kent', email: 'liberty.kent@email.com' },
	{ id: 5, name: 'John Doe', email: 'john.doe@email.com' },
	{ id: 6, name: 'Jane Smith', email: 'jane.smith@email.com' },
	{ id: 7, name: 'Alice Johnson', email: 'alice.johnson@email.com' },
	{ id: 8, name: 'Bob Brown', email: 'bob.brown@email.com' },
	{ id: 9, name: 'Eve White', email: 'eve.white@email.com' },
	{ id: 10, name: 'Samuel Black', email: 'samuel.black@email.com' },
	{ id: 11, name: 'Alex Turner', email: 'alex.turner@email.com' },
	{ id: 12, name: 'Emily Davis', email: 'emily.davis@email.com' },
	{ id: 13, name: 'Oliver Moore', email: 'oliver.moore@email.com' },
	{ id: 14, name: 'Sophie Hill', email: 'sophie.hill@email.com' },
	{ id: 15, name: 'Harry Murphy', email: 'harry.murphy@email.com' },
	{ id: 16, name: 'Lily Green', email: 'lily.green@email.com' },
	{ id: 17, name: 'Mia Adams', email: 'mia.adams@email.com' },
	{ id: 18, name: 'Thomas Clark', email: 'thomas.clark@email.com' },
	{ id: 19, name: 'Grace Evans', email: 'grace.evans@email.com' },
	{ id: 20, name: 'William Baker', email: 'william.baker@email.com' },
	{ id: 21, name: 'Scarlett Parker', email: 'scarlett.parker@email.com' },
	{ id: 22, name: 'Jack Wilson', email: 'jack.wilson@email.com' },
	{ id: 23, name: 'Ava Carter', email: 'ava.carter@email.com' },
	{ id: 24, name: 'Lucas Stewart', email: 'lucas.stewart@email.com' },
	{ id: 25, name: 'Aria Morris', email: 'aria.morris@email.com' },
	{ id: 26, name: 'Henry Jenkins', email: 'henry.jenkins@email.com' },
	{ id: 27, name: 'Ella Richardson', email: 'ella.richardson@email.com' },
	{ id: 28, name: 'Leo Mitchell', email: 'leo.mitchell@email.com' },
	{ id: 29, name: 'Violet Fisher', email: 'violet.fisher@email.com' },
	{ id: 30, name: 'Max agag', email: 'max.harrissfson@email.com' },
	{ id: 30, name: 'Max Harrison', email: 'max.harrison@email.com' },
];

// Middleware для обработки CORS
app.use((req: Request, res: Response, next: NextFunction) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, limit, offset');
	next();
});

app.use(express.json());

// Swagger UI
app.use('/api-docs', serve, setup(swaggerDocument));

// Получение списка пользователей с учетом лимита и оффсета
app.get('/users', (request: Request, response: Response) => {
	const { limit, offset } = request.query;

	let result = users;
	if (limit && offset) {
		const parsedLimit = parseInt(limit as string, 10);
		const parsedOffset = parseInt(offset as string, 10);
		result = users.slice(parsedOffset, parsedOffset + parsedLimit);
	}

	return response.json({
		result,
		count: users.length
	});
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
