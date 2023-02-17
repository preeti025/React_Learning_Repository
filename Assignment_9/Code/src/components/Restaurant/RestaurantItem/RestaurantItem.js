import React from "react";
import Card from "../../UI/Card";
import { IMG_URL } from "../../../Constant";
import styles from "./RestaurantItem.module.css";
import Button from '../../UI/Button'

const RestaurantItem = (props) => {
  const {
    id,
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    slaString,
    costForTwoString,
  } = props;

  const ratingStyle = avgRating < 4 ? `${styles.rating}` : `${styles.rating} ${styles.high}`;
  

  return (
    <Card key={id}>
      <div className={styles["inner-div"]}>
        <div className={styles.img}>
          <img src={IMG_URL + cloudinaryImageId} />
        </div>
        <div className={styles.name}>{name}</div>
        <div className={styles.cuisines}>{cuisines.join(", ")}</div>
        <div className={styles.items}>
          <div className={ratingStyle}>
            <span className= {styles.star}>✰</span>
            <span className={styles.avg}>{avgRating==='--'?4:avgRating}</span>
          </div>
          <div>.</div>
          <div>{slaString}</div>
          <div>.</div>
          <div>{costForTwoString}</div>          
        </div>
      </div>
    </Card>
  );
};

export default RestaurantItem;
