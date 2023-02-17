import React from "react";
import styles from "./Shimmer.module.css";
import Card from "../UI/Card";

const Shimmer = () => {
  return (
    <div className={styles.shimmer}>
    <div className={styles["shimmer-item"]}>
      {Array(10)
        .fill("")
        .map((a, index) => (
          <Card key = {index}>
            <div className={styles["inner-div"]}>
              <div className={styles.img}>
                <img />
              </div>
              <div className={styles.name}></div>
              <div className={styles.cuisines}></div>
            </div>
          </Card>
        ))}
    </div>
    </div>
  );
};

export default Shimmer;
