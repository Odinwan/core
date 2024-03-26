import express, {Request, Response, NextFunction} from 'express';
import {serve, setup} from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import 'dotenv/config';
import {createClient, getClientById, getClients, updateClient} from "./Clients";
import {createJunk, getJunkById, getJunks, updateJunk} from "./Junks";
import {createCompany, getCompanies, getCompanyById, updateCompany} from "./Companies";

const app = express();
const SERVER_PORT: number = parseInt(process.env.SERVER_PORT!) || 4000;

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

// CRUD client entity
app.get('/clients', getClients);
app.post('/clients', createClient);
app.get('/clients/:id', getClientById);
app.put('/clients/:id', updateClient);

// CRUD client entity
app.get('/junks', getJunks);
app.post('/junks', createJunk);
app.get('/junks/:id', getJunkById);
app.put('/junks/:id', updateJunk);

// CRUD client entity
app.get('/offers', getJunks);
app.post('/offers', createJunk);
app.get('/offers/:id', getJunkById);
app.put('/offers/:id', updateJunk);

// CRUD client entity
app.get('/companies', getCompanies);
app.post('/companies', createCompany);
app.get('/companies/:id', getCompanyById);
app.put('/companies/:id', updateCompany);

app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`));
