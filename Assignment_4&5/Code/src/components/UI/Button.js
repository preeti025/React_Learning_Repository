import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <div className={styles.button} type= {props.type}onClick= {props.onClick}>{props.children}</div>
  )
}
export default Button;