import { Request, Response } from 'express';
import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '',
  database: 'myadvisor',
  port: 5432,
});

const handleGetRestaurants = async (req: Request, res: Response) => {
  const response = await pool.query('SELECT * FROM restaurants');
  res.status(200).json(response.rows);
};

const handleGetSingleRestaurant = async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await pool.query(
    `SELECT * FROM restaurants WHERE id = ${id}`
  );
  res.status(200).json(response.rows[0]);
};

export { handleGetRestaurants, handleGetSingleRestaurant };
