import React from "react";
import styles from "./Shimmer.module.css";
import Card from "../UI/Card";

const Shimmer = () => {
  return (
    <Card>
      <div className={styles["inner-div"]}>
        <div className={styles.img}>
          <img />
        </div>
        <div className={styles.name}></div>
        <div className={styles.cuisines}></div>
      </div>
    </Card>
  );
};

export default Shimmer;
