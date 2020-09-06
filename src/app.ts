import express, { Application } from 'express';
import morgan from 'morgan';
require('dotenv/config');
import authRoutes from './routes/auth';

const app:Application = express();

// settings
app.set('port', process.env.port);

// middlewares
app.use(morgan('dev'));

// routes
app.use('/api/auth', authRoutes);

export default app;
