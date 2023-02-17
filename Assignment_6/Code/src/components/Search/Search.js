import React, { useState } from "react";
import styles from "./Search.module.css";
import searchIcon from "../../Assets/search.png";

const Search = (props) => {
  console.log(props.count);
  const [inputValue, setInputValue] = useState("");

  const inputValueChangeHandler = (event) => {
    setInputValue(event.target.value.trim());
    // props.onSearch(event.target.value.trim());
    const searchText = event.target.value.trim();
    if (searchText.length === 0) {
      return props.setFilteredRestaurant(props.restuarant);
    }

    const data = props.restuarant.filter((rest) => {
      return rest?.data?.name
        .toLocaleLowerCase()
        .includes(event.target.value.toLocaleLowerCase());
    });
    props.setFilteredRestaurant(data);
  };

  return (
    <div className={styles["search-bar"]}>
      <div className={styles["search-count"]}>{props.count} restaurants</div>
      <input
        type="text"
        placeholder="Search Meals"
        value={inputValue}
        onChange={inputValueChangeHandler}
      ></input>
      <span className={styles.search}>
        <img src={searchIcon} />
      </span>
    </div>
  );
};

export default Search;
