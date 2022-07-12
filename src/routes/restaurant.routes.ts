import { Router } from 'express';
import {
  handleGetRestaurants,
  handleGetSingleRestaurant,
  handleCreateRestaurant,
  handleUpdateRestaurant,
  handleDeleteRestaurant,
} from '../controllers/restaurant.controller';
const router = Router();

router.route('/').get(handleGetRestaurants).post(handleCreateRestaurant);

router
  .route('/:id')
  .get(handleGetSingleRestaurant)
  .patch(handleUpdateRestaurant)
  .delete(handleDeleteRestaurant);

export default router;
