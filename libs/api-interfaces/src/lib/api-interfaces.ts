import * as mongoose from 'mongoose';

export type PhotoId = string;

export interface PhotoDoc extends mongoose.Document {
  id: PhotoId;
  userId: string;
  likes: number;
  liked: boolean;
}

export interface UserDoc extends mongoose.Document {
  id: string;
  username: string;
  photos: Array<PhotoDoc>;
  likedPhotos: Array<PhotoId>;
}
