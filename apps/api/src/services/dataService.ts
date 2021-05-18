import { PhotoModel } from '../models';
import { PhotoDoc } from '@like-service-nx/api-interfaces';

export default class DataService {
  static async likePhoto(photoId: string, userId: string): Promise<PhotoDoc> {
    const photo = await PhotoModel.findOne({ _id: photoId });
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
    const photo = await PhotoModel.findOne({ _id: photoId });
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
    const photo = await PhotoModel.findOne({ _id: photoId });
    await photo.updateOne(update);

    return PhotoModel.findOne({ _id: photoId });
  }
}
