import express from 'express';
import authRoutes from './routes/auth.routes.js';
import gameRoutes from './routes/game.routes.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/games', gameRoutes);
app.use(errorMiddleware);

export default app;
