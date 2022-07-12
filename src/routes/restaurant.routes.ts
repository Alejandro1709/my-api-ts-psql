import { Router } from 'express';
import { handleGetRestaurants } from '../controllers/restaurant.controller';
const router = Router();

router.get('/', handleGetRestaurants);

export default router;
