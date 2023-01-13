import React, { useState } from "react";
import styles from "./Meals.module.css";
import { restaurant } from "../../Constant";
import MealItem from "./MealItem/MealItem";
import Search from "../Search/Search";

const Meals = () => {
  const [meals, setMeals] = useState(restaurant);
  const searchHandler = (data) => {
    const searchText = data.toLocaleLowerCase();
    if (searchText.length === 0) {
      return setMeals(restaurant);
    }
    const filterMeal = restaurant.filter((meal) => {
      return meal.data.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
    });
    setMeals(filterMeal);
  };
  return (
    <div className={styles.meals}>
      <Search onSearch={searchHandler} count={meals.length} />
      <div className={styles["meals-item"]}>
        {meals.map((meal) => {
          return <MealItem {...meal.data} key={meal.data.id} />;
        })}
      </div>
    </div>
  );
};

export default Meals;
