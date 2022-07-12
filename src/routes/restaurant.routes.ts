import { Router } from 'express';
import {
  handleGetRestaurants,
  handleGetSingleRestaurant,
} from '../controllers/restaurant.controller';
const router = Router();

router.get('/', handleGetRestaurants);

router.get('/:id', handleGetSingleRestaurant);

export default router;
