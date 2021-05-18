import React, { useState } from 'react';
import { LikesService } from './services/likes.service';

const userId = '60a2a85a2dd1770896edc0fe';
const photoId = '60a31bb8e2f1e607c055c5ac';

export const App = () => {
  const [likes, setLikes] = useState(Number(0));
  const [liked, setLiked] = useState(false);

  const handleClick = async () => {
    let photoData;
    if (!liked) {
      photoData = await LikesService.likePhoto(userId, photoId);
    } else {
      photoData = await LikesService.dislikePhoto(userId, photoId);
    }
    setLiked(!liked);
    setLikes(photoData.data.likes);
  };

  React.useEffect(() => {
    console.log('useEffect: ');
    LikesService.getLikes(userId, photoId).then((response) => {
      setLikes(response.data.likes);
      setLiked(response.data.liked);
    });
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Like Service</h1>
      <button>
        <span role="img" aria-label="Like this photo" onClick={handleClick}>
          ❤️
        </span>
      </button>
      <br />
      <b>Photo ID:</b> {photoId}
      <br />
      <b>Liked by User ID:</b> {userId}
      <br />
      <b>Likes:</b> {likes}
    </div>
  );
};

export default App;
