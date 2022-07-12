import { Router } from 'express';
import {
  handleGetRestaurants,
  handleGetSingleRestaurant,
  handleCreateRestaurant,
} from '../controllers/restaurant.controller';
const router = Router();

router.route('/').get(handleGetRestaurants).post(handleCreateRestaurant);

router.get('/:id', handleGetSingleRestaurant);

export default router;
