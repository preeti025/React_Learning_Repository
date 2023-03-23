import React from "react";
import Card from "../../components/UI/Card";
import { IMG_URL } from "../../Constant";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import Button from "../../components/UI/Button";
import { useDispatch } from "react-redux";
import { removeItemsFromCart } from "../../store/cartSlice";
import emptyCart from "../../Assets/emptyCart.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const removeItemFromCartHandler = (id) => {
    console.log(id);
    dispatch(removeItemsFromCart(id));
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <div className={styles["cart-image"]}>
          <img src={emptyCart} alt="Your Cart is empty" />
          <Link to="/">
            <button className={styles.item}>Back To Homepage</button>
          </Link>
        </div>
      ) : (
        <div>
          <h2 style={{ textAlign: "center", margin: "2rem 0 1rem 0" }}>
            {" "}
            Cart Items : {cartItems.length}
          </h2>
          <div className={styles["cart-container"]}>
            {cartItems.map((item) => (
              <Card key={item.id}>
                <div className={styles["inner-div"]}>
                  <div className={styles.img}>
                    <img
                      src={
                        IMG_URL +
                        `${
                          item.cloudinaryImageId === ""
                            ? "xwcjtwut8dsbywj0btvi"
                            : item.cloudinaryImageId
                        }`
                      }
                    />
                  </div>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.description}>
                    {item.description === ""
                      ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                      : item.description.slice(0, 80)}
                    .
                  </div>
                  <div className={styles.price}>
                    {" "}
                    Price: ₹ {item.price || 70}.
                  </div>
                  <div className={styles.button}>
                    <Button
                      type="submit"
                      onClick={removeItemFromCartHandler.bind(null, item.id)}
                    >
                      Remove From Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
