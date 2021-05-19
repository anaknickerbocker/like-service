import mongoose from 'mongoose';
import { PhotoDoc } from '@like-service-nx/api-interfaces';

const photoSchema = new mongoose.Schema({
  id: String,
  userId: String,
  likes: Number,
  liked: Boolean,
  likedBy: [String], // array of User IDs
});

const PhotoModel = mongoose.model<PhotoDoc>('Photo', photoSchema);

export { photoSchema, PhotoModel };
