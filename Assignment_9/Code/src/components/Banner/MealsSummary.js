import React from "react";
import Button from "../UI/Button";
import styles from './MealsSummary.module.css';

function MealsSummary() {
  return (
    <section className={styles.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <div className={styles.button}>
        <Button>Order Now</Button>
      </div>
    </section>
  );
}

export default MealsSummary;
