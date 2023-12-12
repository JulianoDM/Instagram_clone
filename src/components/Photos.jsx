import React, { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

import { images } from "../img/images";
import { Status } from "./Status";
import { Bio } from "./Bio";
import ModalPhoto from "./ModalPhoto";

export const Photos = () => {
  const [likes, setLikes] = useState(images.map(() => false));
  const [openModal, setOpenModal] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  // const toggleLike = (index) => {
  //   const newLikes = [...likes];
  //   newLikes[index] = !newLikes[index];
  //   setLikes(newLikes);
  // };

  const toggleClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <section className="section-photos">
      <Bio />
      <Status />
      <ModalPhoto open={openModal} handleClose={handleCloseModal} imageUrl={selectedImageUrl}/>
      <figure className="container-photos">
        {images.map((photo, index) => (
          <div key={photo.id} className="card-photos"> 
            <img src={photo.url} alt="foto" onClick={() => toggleClick(photo.url)} />
            
          </div>
        ))}
      </figure>
    </section>
  );
};
{/* <div>
              <span onClick={() => toggleLike(index)}>
                {likes[index] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </span>
              <CommentIcon />
            </div> */}