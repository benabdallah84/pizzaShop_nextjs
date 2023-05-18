import React from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
export const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The best pizza in the town</h1>
      <p className={styles.desc}>
        Our pizza is the famous pizza in the town, you can ask anybody for the
        amazing pizza there and I am sure they will give you in our raustrant!.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};
export default PizzaList;
