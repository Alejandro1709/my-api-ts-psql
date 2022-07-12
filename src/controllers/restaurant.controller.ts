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
  res.status(200).json({
    status: 'Success',
    results: response.rowCount,
    data: response.rows,
  });
};

const handleGetSingleRestaurant = async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await pool.query('SELECT * FROM restaurants WHERE id = $1', [
    id,
  ]);
  res.status(200).json({
    status: 'Success',
    results: response.rowCount,
    data: response.rows[0],
  });
};

const handleCreateRestaurant = async (req: Request, res: Response) => {
  const { name, address, website } = req.body;

  const response = await pool.query(
    'INSERT INTO restaurants (name, address, website) VALUES ($1, $2, $3) RETURNING *',
    [name, address, website]
  );
  res.status(201).json({
    status: 'Success',
    message: 'Restaurant Created!',
    data: response.rows[0],
  });
};

const handleUpdateRestaurant = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, address, website } = req.body;

  const response = await pool.query(
    'UPDATE restaurants SET name = $1, address = $2, website = $3 WHERE id = $4 RETURNING *',
    [name, address, website, id]
  );

  res.status(200).json({
    status: 'Success',
    message: 'Restaurant Updated!',
    data: response.rows[0],
  });
};

const handleDeleteRestaurant = async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await pool.query('DELETE FROM restaurants WHERE id = $1', [
    id,
  ]);
  res.status(200).json({
    status: 'Success',
    message: 'Restaurant Deleted!',
    data: response.rows[0],
  });
};

export {
  handleGetRestaurants,
  handleGetSingleRestaurant,
  handleCreateRestaurant,
  handleUpdateRestaurant,
  handleDeleteRestaurant,
};
