import React from "react";
import { TinyDots, Dots, BigDots } from "./dots";
import s from "./dots.module.css";

export default function DotWave() {
  return (
    <div>
      <div className={s.tinyDots}>
        <TinyDots />
      </div>
      <div className={s.dots}>
        <Dots />
      </div>
      <div className={s.bigDots}>
        <BigDots />
      </div>
    </div>
  );
}
