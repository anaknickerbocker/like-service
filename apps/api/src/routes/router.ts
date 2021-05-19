import express, { Request, Response, NextFunction } from 'express';
import DataService from '../services/dataService';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

router.get(
  '/v1/users/:userId/photos/:photoId/likes',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const photoData = await DataService.findPhoto(
        req.params.photoId,
        req.params.userId
      );
      if (!photoData) next({ error: 'Photo not found' });
      res.json(photoData);
    } catch (e) {
      next(e);
    }
  }
);

router.put(
  '/v1/users/:userId/photos/:photoId/like',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updatedPhoto = await DataService.likePhoto(
        req.params.photoId,
        req.params.userId
      );
      res.json(updatedPhoto);
    } catch (e) {
      next(e);
    }
  }
);

router.put(
  '/v1/users/:userId/photos/:photoId/dislike',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updatedPhoto = await DataService.dislikePhoto(
        req.params.photoId,
        req.params.userId
      );
      res.json(updatedPhoto);
    } catch (e) {
      next(e);
    }
  }
);

export default router;
