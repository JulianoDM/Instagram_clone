import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Status } from "./Status";
import { Bio } from "./Bio";
import ModalPhoto from "./ModalPhoto";

export const Photos = () => {
  const photos = useSelector( state => state.photo)

  const [openModal, setOpenModal] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const toggleClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <section className="section-photos">
      <Bio/>

      <Status/>

      <div className="line-photos"></div>

      <ModalPhoto open={openModal} handleClose={handleCloseModal} imageUrl={selectedImageUrl}/>
      <figure className="container-photos">
        {photos.map((photo) => (
          <div key={photo.id} className="card-photos"> 
            <img src={photo.url} alt="foto" onClick={() => toggleClick(photo.url)} />
          </div>
        ))}
      </figure>
    </section>
  );
};


//Código para colocar os likes nas fotos

// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import CommentIcon from '@mui/icons-material/Comment';

  // const toggleLike = (index) => {
  //   const newLikes = [...likes];
  //   newLikes[index] = !newLikes[index];
  //   setLikes(newLikes);
  // };

  // const [likes, setLikes] = useState(images.map(() => false));

{/* <div>
              <span onClick={() => toggleLike(index)}>
                {likes[index] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </span>
              <CommentIcon />
            </div> */}