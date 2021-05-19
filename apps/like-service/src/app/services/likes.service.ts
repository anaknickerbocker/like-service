import axios from 'axios';
import { PhotoDoc } from '@like-service-nx/api-interfaces';

export class LikesService {
  static getLikes(
    photoId: string,
    userId: string
  ): Promise<{
    data: PhotoDoc;
  }> {
    return axios.get(`api/v1/users/${userId}/photos/${photoId}/likes`);
  }

  static likePhoto(
    photoId: string,
    userId: string
  ): Promise<{
    data: PhotoDoc;
  }> {
    return axios.put(`api/v1/users/${userId}/photos/${photoId}/like`);
  }

  static dislikePhoto(
    photoId: string,
    userId: string
  ): Promise<{
    data: PhotoDoc;
  }> {
    return axios.put(`api/v1/users/${userId}/photos/${photoId}/dislike`);
  }
}
