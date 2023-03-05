import React from "react";
import s from "./image_collection.module.css";

const ImageCollection = ({ images, crop, tiny }) => {
  return (
    <div className={crop ? s.collectionCrop : s.collection}>
      {images.map(({ src }) => (
        <div className={s.imgCont} key={src}>
          <img className={tiny ? s.tinyImg : s.img} src={src} />
        </div>
      ))}
    </div>
  );
};

export { ImageCollection };
