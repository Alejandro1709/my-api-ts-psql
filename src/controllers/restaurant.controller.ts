import { Request, Response } from 'express';
import { Pool } from 'pg';
import Restaurant from '../types/restaurant';

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '',
  database: 'myadvisor',
  port: 5432,
});

const handleGetRestaurants = async (req: Request, res: Response) => {
  const response = await pool.query('SELECT * FROM restaurants');
  const restaurants: Array<Restaurant> = response.rows;

  handleSendRequest(
    req,
    res,
    200,
    'Success',
    `results: ${response.rowCount}`,
    restaurants
  );
};

const handleGetSingleRestaurant = async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await pool.query('SELECT * FROM restaurants WHERE id = $1', [
    id,
  ]);
  const restaurant: Restaurant = response.rows[0];

  handleSendRequest(
    req,
    res,
    200,
    'Success',
    `results: ${response.rowCount}`,
    restaurant
  );
};

const handleCreateRestaurant = async (req: Request, res: Response) => {
  const { name, address, website } = req.body;

  const response = await pool.query(
    'INSERT INTO restaurants (name, address, website) VALUES ($1, $2, $3) RETURNING *',
    [name, address, website]
  );
  const restaurant: Restaurant = response.rows[0];

  res.redirect('/');
  // handleSendRequest(
  //   req,
  //   res,
  //   201,
  //   'Success',
  //   'Restaurant Created!',
  //   restaurant
  // );
};

const handleUpdateRestaurant = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, address, website } = req.body;

  const response = await pool.query(
    'UPDATE restaurants SET name = $1, address = $2, website = $3 WHERE id = $4 RETURNING *',
    [name, address, website, id]
  );
  const restaurant: Restaurant = response.rows[0];

  res.redirect('/');
  // handleSendRequest(
  //   req,
  //   res,
  //   200,
  //   'Success',
  //   'Restaurant Updated!',
  //   restaurant
  // );
};

const handleDeleteRestaurant = async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await pool.query('DELETE FROM restaurants WHERE id = $1', [
    id,
  ]);
  const restaurant: Restaurant = response.rows[0];

  res.redirect('/');
  // handleSendRequest(
  //   req,
  //   res,
  //   200,
  //   'Success',
  //   'Restaurant Deleted!',
  //   restaurant
  // );
};

const handleSendRequest = (
  req: Request,
  res: Response,
  code: number,
  status: string,
  message: string | number,
  data?: any
) => {
  res.status(code).json({
    status,
    message,
    data,
  });
};

export {
  handleGetRestaurants,
  handleGetSingleRestaurant,
  handleCreateRestaurant,
  handleUpdateRestaurant,
  handleDeleteRestaurant,
};
