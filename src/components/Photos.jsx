import React, { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

import { images } from "../img/images";
import { Status } from "./Status";
import { Bio } from "./Bio";

export const Photos = () => {
  const [likes, setLikes] = useState(images.map(() => false  ));

  const toggleLike = (index) => {
    console.log(likes);
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };

  return (
    <section className="section-photos">
      <Bio/>
      <Status/>
      <figure className="container-photos">
        {images.map((photos, index) => (
          <div key={photos.id} className="card-photos"> 
            <img src={photos.url} alt="foto" />
            {/* <div>
              <span onClick={() => toggleLike(index)}>
                {likes[index] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </span>
              <CommentIcon/>
            </div> */}
          </div>
        ))}
      </figure>
    </section>
  );
};
