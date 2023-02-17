import React, { useState, useEffect } from "react";
import styles from "./Restaurant.module.css";
import RestaurantItem from "./RestaurantItem/RestaurantItem";
import Search from "../Search/Search";
import Shimmer from "../Shimmer/Shimmer";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRestaurants = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5650919&lng=77.381967&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await response.json();
    setRestaurants(data?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(data?.data?.cards[2]?.data?.data?.cards);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  // const searchHandler = (search) => {
  //   console.log(search);
  //   const searchText = search.toLocaleLowerCase();
  //   if (searchText.length === 0) {
  //     return setFilteredRestaurant(restaurants);
  //   }
  //   const filterMeal = restaurants.filter((restaurant) => {
  //     return restaurant?.data?.name
  //       .toLocaleLowerCase()
  //       .includes(searchText.toLocaleLowerCase());
  //   });
  //   console.log(filterMeal);
  //   setFilteredRestaurant(filterMeal);
  // };

  
  return (
    <div className={styles.restaurant}>
      <Search
        setFilteredRestaurant={setFilteredRestaurant}
        count={filteredRestaurant.length}
        restuarant={restaurants}
      />
      {!isLoading && (
        <div className={styles["restaurant-item"]}>
          {filteredRestaurant.map((restaurant) => {
            return (
              <RestaurantItem {...restaurant.data} key={restaurant.data.id} />
            );
          })}
        </div>
      )}
      {!isLoading && filteredRestaurant.length === 0 && (
        <h3 style={{ textAlign: "center" }}>
          No Restaurant Found Of Your Search...
        </h3>
      )}
      {isLoading && (
        <div className={styles["restaurant-item"]}>
          {Array(10)
            .fill("")
            .map((a, index) => (
              <Shimmer />
            ))}
        </div>
      )}
    </div>
  );  
};

export default Restaurant;
