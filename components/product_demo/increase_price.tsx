import s from "./productDemo.module.css";
import { useEffect, useState } from "react";

const IncreasePrice = ({ inicio, final, increase }) => {
  const duration = 1;
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = inicio;
    const end = final;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    const timer = setInterval(() => {
      setCount(start);
      if (increase) {
        start++;
      } else {
        start--;
      }

      if (increase) {
        if (start === end + 1) {
          clearInterval(timer);
        }
      } else {
        if (start === end - 1) {
          clearInterval(timer);
        }
      }
    }, stepTime);
  }, [final, duration]);

  return <div className={s.precio}> $ {count} MXN</div>;
};

export { IncreasePrice };