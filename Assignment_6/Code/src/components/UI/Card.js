import React from 'react';
import styles from './Card.module.css';

 const Card = (props) => {
  const classes = `${styles.card} ${props.styles}`
  return (
    <div className={styles.card}>{props.children}</div>
  )
}
export default Card;