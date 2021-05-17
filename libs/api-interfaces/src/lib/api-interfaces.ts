export type PhotoId = string;

export interface Photo {
  id: PhotoId;
  likes: number;
}

export interface User {
  id: string;
  username: string;
  photos: Array<Photo>;
  likedPhotos: Array<PhotoId>;
}
