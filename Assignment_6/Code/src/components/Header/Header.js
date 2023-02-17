import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import userImg from "../../Assets/user.png";
import styles from "./Header.module.css";

function Header() {
  const [title, setTitle] = useState('Home');

const url = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5650919&lng=77.381967&page_type=DESKTOP_WEB_LISTING';
  return (
    <div className={styles.container}>
      <a href="/" className={styles.logo}>
        <img src={logo} alt="logo image" />
      </a>
      <div className={styles["nav-items"]}>
        <div className={styles.item} onClick = {() => setTitle('Hello')}>{title}</div>
        <div className={styles.item}>Menu</div>
        <div className={styles.item}>About</div>
        <div className={styles.item}>Contact Us</div>
        <div className={styles.item}>Cart</div>
        <div className={styles.item}>
          <img src={userImg} alt="user-image" />
        </div>
      </div>
    </div>
  );
}

export default Header;
