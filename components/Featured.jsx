import React, { useState } from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {
  const images = ["/img/pizza.png", "/img/bake.png", "/img/bike.png"];
  const [index, setIndex] = useState(0);
  const handeleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((m, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={m} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handeleArrow("l")}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handeleArrow("r")}
      >
        <Image src="/img/arrowr.png" alt="" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};
export default Featured;
