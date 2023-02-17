import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./RestaurantMenu.module.css";
import { IMG_URL } from "../../Constant";
import RestaurantMenuItem from "../../components/RestaurantMenuItem/RestaurantMenuItem";
import Shimmer from "../../components/Shimmer/Shimmer";

const RestaurantMenu = () => {
  const [restaurantFoodMenu, setRestaurantFoodMenu] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { resId } = useParams();

  const fetchRestaurantInfo = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=28.5650919&lng=77.381967&menuId=" +
        resId
    );
    const data = await response.json();
    console.log(data);
    setRestaurantFoodMenu(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);

  return (
    <>
      {isLoading && <Shimmer />}
      {!isLoading && (
        <div className={styles["restaurant-container"]}>
          <div className={styles["banner-container"]}>
            <div className={styles.banner}>
              <div className={styles.container}>
              <div className={styles["restaurant-image"]}>
                <img
                  src={IMG_URL + restaurantFoodMenu?.data?.cloudinaryImageId}
                  alt="image"
                ></img>
              </div>
              <div className={styles.detail}>
                <div className={styles.name}>
                  {restaurantFoodMenu?.data?.name}
                </div>
                <div className={styles.cuisines}>
                  {restaurantFoodMenu?.data?.cuisines.join(",")}
                </div>
                <div className={styles.location}>
                  <div>{restaurantFoodMenu?.data?.locality},</div>
                  <div> {restaurantFoodMenu?.data?.area}</div>
                </div>
                <div className={styles["menu-detail"]}>
                  <div className={styles.items}>
                    <div>☆ {restaurantFoodMenu?.data?.avgRating}</div>
                    <div className={styles.rating}>
                      {restaurantFoodMenu?.data?.totalRatings}+ Ratings
                    </div>
                  </div>
                  <div className={styles.info}>
                    <div>
                      {restaurantFoodMenu?.data?.sla?.maxDeliveryTime} mins
                    </div>
                    <div className={styles.rating}> Delivery Time</div>
                  </div>
                  <div className={styles.info}>
                    <div>{restaurantFoodMenu?.data?.costForTwo / 100}</div>
                    <div className={styles.rating}>Cost for two</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className={styles["restaurant-menu-items"]}>
            {Object.values(restaurantFoodMenu?.data?.menu?.items).map(
              (item) => {
                return <RestaurantMenuItem {...item} key={item.id} />;
              }
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantMenu;
