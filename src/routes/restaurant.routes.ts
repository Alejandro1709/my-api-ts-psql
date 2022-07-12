import { Router } from 'express';
import {
  handleGetRestaurants,
  handleGetSingleRestaurant,
  handleCreateRestaurant,
  handleUpdateRestaurant,
} from '../controllers/restaurant.controller';
const router = Router();

router.route('/').get(handleGetRestaurants).post(handleCreateRestaurant);

router
  .route('/:id')
  .get(handleGetSingleRestaurant)
  .patch(handleUpdateRestaurant);

export default router;
