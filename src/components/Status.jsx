import React from "react";
import { images } from "../img/images";

export const Status = () => {
  return (
    <div id="status">
      {images.map((photos) => {
        return (
          <figure key={photos.id} className="status-circle">
            <img src={photos.url} alt="status img" className="status-img" />
          </figure>
        );
      })}
    </div>
  );
};


