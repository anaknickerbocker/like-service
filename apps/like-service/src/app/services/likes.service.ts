import axios from 'axios';
import { UserDoc } from '@like-service-nx/api-interfaces';

export class LikesService {
  static getLikes(
    userId: string,
    photoId: string
  ): Promise<{
    data: { _id: string; userId: string; likes: number; liked: boolean };
  }> {
    return axios.get(`api/v1/users/${userId}/photos/${photoId}/likes`);
  }

  static likePhoto(
    userId: string,
    photoId: string
  ): Promise<{
    data: { _id: string; userId: string; likes: number; liked: boolean };
  }> {
    return axios.put(`api/v1/users/${userId}/photos/${photoId}/like`);
  }

  static dislikePhoto(
    userId: string,
    photoId: string
  ): Promise<{
    data: { _id: string; userId: string; likes: number; liked: boolean };
  }> {
    return axios.put(`api/v1/users/${userId}/photos/${photoId}/dislike`);
  }
}
