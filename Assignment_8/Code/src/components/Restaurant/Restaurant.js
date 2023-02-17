import React, { useState, useEffect } from "react";
import styles from "./Restaurant.module.css";
import RestaurantItem from "./RestaurantItem/RestaurantItem";
import Search from "../Search/Search";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import searchData from "../../hooks/searchData";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const count = filteredRestaurant ? filteredRestaurant.length : 0;

  const fetchRestaurants = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5650919&lng=77.381967&page_type=DESKTOP_WEB_LISTING"
      )
      if(!response.ok){
        throw new Error("Something went wrong..");
      }
      const data = await response.json();
      setRestaurants(data?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurant(data?.data?.cards[2]?.data?.data?.cards);
      setIsLoading(false);
      
    } catch (error) {
      console.log(error.message);
    }
    
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const seaerchHandler = (search)=>{
    const searchItem = searchData(search, restaurants);
    setFilteredRestaurant(searchItem);
  };


  return (
    <div className={styles.restaurant}>
      <Search
      onSearch = {seaerchHandler}
        count={count}
        restuarant={restaurants}
      />
      {!isLoading && (
        <div className={styles["restaurant-item"]}>
          {filteredRestaurant.map((restaurant) => {
            return (
              <Link
                to={`/restaurant/${restaurant.data.id}`}
                key={restaurant.data.id}
              >
                <RestaurantItem {...restaurant.data} key={restaurant.data.id} />
              </Link>
            );
          })}
        </div>
      )}
      {!isLoading && filteredRestaurant.length === 0 && (
        <h3 style={{ textAlign: "center" }}>
          No Restaurant Found Of Your Search...
        </h3>
      )}
      {isLoading && <Shimmer />}
    </div>
  );
};

export default Restaurant;
