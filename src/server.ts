import express, { Request, Response } from 'express';
import { Pool } from 'pg';
import restaurantRoutes from './routes/restaurant.routes';
import Restaurant from './types/restaurant';
import path from 'path';
import morgan from 'morgan';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '',
  database: 'myadvisor',
  port: 5432,
});

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Routes
app.use('/api/v1/restaurants', restaurantRoutes);

app.get('/', async (req: Request, res: Response) => {
  const response = await pool.query('SELECT * FROM restaurants');
  const restaurants: Array<Restaurant> = response.rows;

  res.render('index', { restaurants });
});

app.get('/restaurants/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await pool.query('SELECT * FROM restaurants WHERE id = $1', [
    id,
  ]);
  const restaurant: Array<Restaurant> = response.rows[0];

  res.render('show', { restaurant });
});

app.get('/new-restaurant', (req: Request, res: Response) => {
  res.render('new');
});

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Server is up and running on port ${port}`));
