import express, { Request, Response } from 'express';
import restaurantRoutes from './routes/restaurant.routes';
import morgan from 'morgan';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Routes
app.use('/api/v1/restaurants', restaurantRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello API');
});

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Server is up and running on port ${port}`));
