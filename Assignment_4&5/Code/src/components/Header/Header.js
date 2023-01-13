import React from "react";
import logo from "../../Assets/logo.png";
import userImg from "../../Assets/user.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <a href="/" className={styles.logo}>
        <img src={logo} alt="logo image" />
      </a>
      <div className={styles["nav-items"]}>
        <div className={styles.item}>Home</div>
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
