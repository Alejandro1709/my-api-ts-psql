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
  console.log(response);
};

export { handleGetRestaurants };
