import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cartSlice";
import styles from "./RestaurantMenuItem.module.css";

export default function RestaurantMenuItem(props) {
  const menuUrl =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
 

  let img_url = menuUrl + props.cloudinaryImageId;

  if (props.cloudinaryImageId === "") {
    img_url = menuUrl + "i4wgvys3bykj1hvgu6gp";
  }

  const dispatch = useDispatch();

  const addItemToCartHandler = () =>{
  console.log(props);
    dispatch(addItemToCart({
      id: props.id,
      name: props.name,
      price: props.attributes.price,
      description: props.description,
      cloudinaryImageId: props.cloudinaryImageId, 
    }));
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  topFunction();  

  return (
    <div className={styles["menu-items"]}>
      <div className={styles["menu-info"]}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.price}>₹ {props.price / 100}</div>
        <div className={styles.description}>{props.description}</div>
      </div>
      <div>
        <div className={styles["menu-image"]}>
          <img src={img_url} />
          <div className={styles.button}>
            <button onClick={addItemToCartHandler}>ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
}
