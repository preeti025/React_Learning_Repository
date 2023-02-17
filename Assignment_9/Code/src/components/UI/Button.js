import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  console.log(props);
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
