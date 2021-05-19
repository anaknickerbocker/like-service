import { PhotoModel } from '../models';
import { PhotoDoc } from '@like-service-nx/api-interfaces';
import mongoose from 'mongoose';

export default class DataService {
  static async findPhoto(photoId: string, userId: string): Promise<PhotoDoc> {
    const photo = PhotoModel.findOne({
      _id: mongoose.Types.ObjectId(photoId),
      userId,
    });
    if (!photo) throw new Error('Photo not found');
    return photo;
  }

  static async likePhoto(photoId: string, userId: string): Promise<PhotoDoc> {
    const photo = await PhotoModel.findOne({
      _id: mongoose.Types.ObjectId(photoId),
      userId,
    });
    if (!photo) throw new Error('Photo not found');
    const update = {
      likes: photo.likes + 1,
      liked: true,
    };

    return this.updatePhoto(photoId, userId, update);
  }

  static async dislikePhoto(
    photoId: string,
    userId: string
  ): Promise<PhotoDoc> {
    const photo = await PhotoModel.findOne({
      _id: mongoose.Types.ObjectId(photoId),
      userId,
    });
    if (!photo) throw new Error('Photo not found');
    const update = {
      likes: photo.likes - 1,
      liked: false,
    };

    return this.updatePhoto(photoId, userId, update);
  }

  static async updatePhoto(
    photoId: string,
    userId: string,
    update: { likes: number; liked: boolean }
  ): Promise<PhotoDoc> {
    const photo = await PhotoModel.findOne({
      _id: mongoose.Types.ObjectId(photoId),
      userId,
    });
    if (!photo) throw new Error('Photo not found');
    await photo.updateOne(update);

    return PhotoModel.findOne({ _id: photoId, userId });
  }
}
