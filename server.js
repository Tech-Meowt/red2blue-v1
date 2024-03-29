import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
import morgan from 'morgan';
import cors from 'cors';
import nodemailer from 'nodemailer'

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

// db and authenticateUser (mongodb + prisma)
import connectDB from './lib/connect.js';
import prisma from './lib/prisma.js';

// routers
import authRouter from './routes/authRoutes.js';
import sandboxRouter from './routes/sandboxRoutes.js';
import volunteerRouter from './routes/volunteerRoutes.js';
import eventRouter from './routes/eventRoutes.js';
import politicalRouter from './routes/politicalSkillsRoutes.js'
import lifeRouter from './routes/lifeSkillRoutes.js'

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import authenticateUser from './middleware/auth.js';

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

const __dirname = dirname(fileURLToPath(import.meta.url));

// only when ready to deploy
app.use(express.static(path.resolve(__dirname, './client/build')));

app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(xss());
app.use(mongoSanitize());
app.use(cors());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/sandbox', sandboxRouter);
app.use('/api/v1/volunteer', volunteerRouter);
app.use('/api/v1/event', eventRouter);
app.use('/api/v1/political', politicalRouter)
app.use('/api/v1/life', lifeRouter)

// only when ready to deploy
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
