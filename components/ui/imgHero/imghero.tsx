import React from "react";
import s from "./imghero.module.css";

const ImageHero = ({ children }) => {
  return (
    <div className={s.heroCont}>
      <div className={s.small}>{children[0]}</div>
      <div className={s.big}>{children[1]}</div>
    </div>
  );
};

export { ImageHero };
