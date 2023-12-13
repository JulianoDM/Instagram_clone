import React from "react";
import { useSelector } from "react-redux";

export const Status = () => {
  const photos = useSelector( state => state.photo)
  return (
    <div id="status">
      {photos.map((photos) => {
        return (
          <figure key={photos.id} className="circle-status">
            <img src={photos.url} alt="status img" className="img-status" />
          </figure>
        );
      })}
    </div>
  );
};


