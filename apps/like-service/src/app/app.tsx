import React, { useState } from 'react';
import { LikesService } from './services/likes.service';

// const userId = '60a2a85a2dd1770896edc0fe';
// const photoId = '60a31bb8e2f1e607c055c5ac';

const useFormField = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  );
  return { value, onChange };
};

export const App = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const userIdField = useFormField();
  const photoIdField = useFormField();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const photoData = await LikesService.getLikes(
      photoIdField.value,
      userIdField.value
    );
    console.log('photoData: ', photoData);
    setLikes(photoData.data.likes);
  };

  const handleClick = async () => {
    let photoData;
    if (!liked) {
      photoData = await LikesService.likePhoto(
        photoIdField.value,
        userIdField.value
      );
    } else {
      photoData = await LikesService.dislikePhoto(
        photoIdField.value,
        userIdField.value
      );
    }
    setLiked(!liked);
    setLikes(photoData.data.likes);
  };

  React.useEffect(() => {
    LikesService.getLikes(photoIdField.value, userIdField.value).then(
      (response) => {
        setLikes(response.data.likes);
        setLiked(response.data.liked);
      }
    );
  }, []);

  return (
    <div>
      <h1>Like Service</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor={photoIdField.value}>Photo ID: </label>
            <input id="photoId" {...photoIdField} />
          </div>
          <div>
            <label htmlFor={userIdField.value}>User ID: </label>
            <input id="userId" {...userIdField} />
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      <b>Likes:</b> {likes}
      <br />
      <br />
      <button>
        <span role="img" aria-label="Like this photo" onClick={handleClick}>
          ❤️
        </span>
      </button>
    </div>
  );
};

export default App;
