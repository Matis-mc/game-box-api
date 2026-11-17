import { Router } from 'express';
import gameController from '../controllers/game.controller.js';

const router = Router();

router.post('/:user_id', gameController.createGame);
router.get('/user/:user_id', gameController.getGamesByUser);
router.put('/:id', gameController.updateGame);

export default router;
