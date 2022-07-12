import express, { Request, Response } from 'express';
import restaurantRoutes from './routes/restaurant.routes';
import path from 'path';
import morgan from 'morgan';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

// Middlewares
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Routes
app.use('/api/v1/restaurants', restaurantRoutes);

app.get('/', (req: Request, res: Response) => {
  res.render('index');
});

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Server is up and running on port ${port}`));
