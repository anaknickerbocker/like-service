import express from 'express';
import { PhotoModel } from '../models';
import DataService from '../services/dataService';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

router.get('/v1/users/:userId/photos/:photoId/likes', async (req, res) => {
  const photoData = await PhotoModel.findOne({
    _id: req.params.photoId,
  });
  res.json(photoData);
});

router.put('/v1/users/:userId/photos/:photoId/like', async (req, res) => {
  const updatedPhoto = await DataService.likePhoto(
    req.params.photoId,
    req.params.userId
  );
  res.json(updatedPhoto);
});

router.put('/v1/users/:userId/photos/:photoId/dislike', async (req, res) => {
  const updatedPhoto = await DataService.dislikePhoto(
    req.params.photoId,
    req.params.userId
  );
  res.json(updatedPhoto);
});

export default router;
