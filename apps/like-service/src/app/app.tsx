import React, { useState } from 'react';
import { User } from '@like-service-nx/api-interfaces';
import { LikesService } from './services/likes.service';

export const App = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleClick = async () => {
    const user: User = await LikesService.likePhoto();
    setLiked(!liked);
  };

  React.useEffect(() => {
    LikesService.getLikes().then((numberOfLikes) => {
      setLikes(numberOfLikes.likes);
      setLiked(numberOfLikes.liked);
    });
  }, [liked]);

  return (
    <div style={{ textAlign: 'center' }}>
      <button>
        <span role="img" aria-label="Like this photo" onClick={handleClick}>
          ❤️
        </span>
      </button>
      <br />
      Likes: {likes}
    </div>
  );
};

export default App;
