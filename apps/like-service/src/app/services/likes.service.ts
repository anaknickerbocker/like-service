import axios from 'axios';
import { User } from '@like-service-nx/api-interfaces';

export class LikesService {
  static getLikes(): Promise<{ likes: number; liked: boolean }> {
    return axios.get('api/v1/users/1/photos/2/likes');
  }

  static likePhoto(): Promise<User> {
    return axios.post('api/v1/users/1/photos/2/like', {
      userId: 1,
      photos: [{ photoId: 2, likes: 3 }],
    });
  }
}
