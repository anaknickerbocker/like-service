import mongoose from 'mongoose';
import { PhotoDoc } from '@like-service-nx/api-interfaces';

const photoSchema = new mongoose.Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  likes: { type: Number, required: true },
  liked: { type: Boolean, required: true },
});

const PhotoModel = mongoose.model<PhotoDoc>('Photo', photoSchema);

export { photoSchema, PhotoModel };
