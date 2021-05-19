import express, { Request, Response, NextFunction } from 'express';
import mongoose, { Error } from 'mongoose';
import * as path from 'path';
import dotenv from 'dotenv';
import router from './routes/router';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const CLIENT_BUILD_PATH = path.join(__dirname, '../like-service');
const app = express();
app.use(express.static(CLIENT_BUILD_PATH));

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on(
  'error',
  console.error.bind(console, 'MongoDB connection error:')
);

app.use('/api', router);

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(CLIENT_BUILD_PATH, '/index.html'));
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
});

app.use((err: Error, req: Request, res: Response) => {
  res.status(500);
  res.json({ error: err });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
