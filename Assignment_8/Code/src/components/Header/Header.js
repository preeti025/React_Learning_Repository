import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import userImg from "../../Assets/user.png";
import styles from "./Header.module.css";

function Header() {
  const [title, setTitle] = useState("Home");

  const url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5650919&lng=77.381967&page_type=DESKTOP_WEB_LISTING";

  const cartCount = useSelector(state => state.cart.cart);
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo image" />
      </Link>
      <div className={styles["nav-items"]}>
        <div className={styles.item}>Menu</div>
        <Link to="/about">
          <div className={styles.item}>About</div>
        </Link>
        <Link to="/contact">
          <div className={styles.item}>Contact Us</div>
        </Link>
        <Link to="/cart"><span className={styles.item}>Cart - {cartCount.length}</span></Link>
        <Link to="login">
          <div className={styles.item}>
            <img src={userImg} alt="user-image" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
