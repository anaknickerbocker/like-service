import DataService from './dataService';
import { PhotoModel } from '../models';
import { PhotoDoc } from '@like-service-nx/api-interfaces';

const photoModelMock = {
  findOne: jest.spyOn(PhotoModel, 'findOne').mockImplementation((): any => {
    return new Promise((resolve) => {
      return resolve({
        _id: 'testPhotoId',
        userId: 'testUserId',
        likes: 3,
        liked: false,
      } as PhotoDoc);
    });
  }),
  updateOne: jest.spyOn(PhotoModel, 'updateOne'),
};

describe('DataService', () => {
  describe('likePhoto', () => {
    DataService.likePhoto('testPhotoId', 'testUserId');
    expect(photoModelMock.findOne).toHaveBeenCalledWith({
      _id: 'testPhotoId',
      userId: 'testUserId',
    });
    expect(photoModelMock.updateOne).toHaveBeenCalledWith({
      likes: 4,
      liked: true,
    });
  });

  describe('dislikePhoto', () => {});

  describe('updatePhoto', () => {});
});
