import React from "react";
import s from "./categories.module.css";

export default function Categories() {
  return (
    <div className={s.cont}>
      <div className={s.module}>
        <div className={s.text}>Camisas</div>
        <img
          className={s.img}
          src="https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666997957/tuempresaenlinea/Categories/shirt_lea7dg.png"
        />
      </div>
      <div className={s.module}>
        <div className={s.text}>Accesorios</div>
        <img
          className={s.img}
          src="https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666997957/tuempresaenlinea/Categories/beanie_u7usbj.png"
        />
      </div>
      <div className={s.module}>
        <div className={s.text}>Sudaderas</div>
        <img
          className={s.img}
          src="https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666997957/tuempresaenlinea/Categories/sudaderas_ed5hpy.png"
        />
      </div>
    </div>
  );
}
