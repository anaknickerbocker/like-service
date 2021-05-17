import * as express from 'express';
// import { User, Photo } from '@like-service-nx/api-interfaces';

const app = express();
app.use(express.static('files'));

app.get('/api', (req, res) => {
  res.send('Like Service API is Up');
});

app.get('/api/v1/users/:userId/photos/:photoId/likes', (req, res) => {
  // retrieve data from database
  res.json({
    likes: 22,
    liked: false,
  });
});

app.post('/api/v1/users/:userId/photos/:photoId/like', (req, res) => {
  // increment likes
  // update database
  res.json({
    userId: req.params.userId,
    photos: {
      photoId: req.params.photoId,
      likes: 22,
    },
  });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
