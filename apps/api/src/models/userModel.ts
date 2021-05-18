import mongoose from 'mongoose';
import { photoSchema } from './photoModel';
import { UserDoc } from '@like-service-nx/api-interfaces';

const userSchema = new mongoose.Schema({
  id: String,
  username: String,
  photos: [photoSchema],
  likedPhotos: [String],
});

const UserModel = mongoose.model<UserDoc>('User', userSchema);

export { UserModel };
