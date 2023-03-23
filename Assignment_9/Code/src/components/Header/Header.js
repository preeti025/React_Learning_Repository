import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import userImg from "../../Assets/user.png";
import styles from "./Header.module.css";
import cart from "../../Assets/cart.png";

function Header() {
  const dispatch = useDispatch(); 
  const auth = useSelector(state => state.auth.login);
  const url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5650919&lng=77.381967&page_type=DESKTOP_WEB_LISTING";

  const cartCount = useSelector((state) => state.cart.cart);
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo image" />
      </Link>
      {auth && <div className={styles["nav-items"]}>
        <Link to= "/">
          <div className={styles.item}>Menu</div>
        </Link>
        <Link to="/about">
          <div className={styles.item}>About</div>
        </Link>
        <Link to="/contact">
          <div className={styles.item}>Contact Us</div>
        </Link>
        <Link to="/cart">
          <span className={styles.item1}>
            <img src={cart} />
          </span>
          <span className= {styles.cart}>{cartCount.length}</span>
        </Link>
        <Link to="/">
          <div className={styles.item}>
            <img src={userImg} alt="user-image" />
          </div>
        </Link>
      </div>}
    </div>
  );
}

export default Header;
