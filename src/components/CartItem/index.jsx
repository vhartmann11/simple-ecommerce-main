import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { IoClose } from "react-icons/io5";
import styles from "../Navbar/Navbar.module.scss";

function CartItem({ item }) {
  const { cartItem, setCartItem } = useContext(CartContext);

  const increase = () => {
    const newQuantity = item.quantity + 1;
    updateCart(newQuantity);
  };

  const decrease = () => {
    const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
    updateCart(newQuantity);
  };

  const updateCart = (newQuantity) => {
    const updatedCart = cartItem.map(cartItem =>
      cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setCartItem(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
  };

  const calcPrice = (quantity, price) => (quantity * price).toFixed(2);

  const removeFromCart = (id) => {
    const updatedCart = cartItem.filter(cartItem => cartItem.id !== id);
    setCartItem(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
  };

  return (
    <div className={styles.cart__item}>
      <div className={styles.cart__img}>
        <img src={item.img} alt="product" />
      </div>
      <div className={styles.cart__middle}>
        <p className={styles.cart__name}>{item.description}</p>
        <div className={styles.cart__btns}>
          <button onClick={decrease}>-</button>
          <p className={styles.quantity}>{item.quantity}</p>
          <button onClick={increase}>+</button>
        </div>
      </div>
      <div className={styles.cart__right}>
        <p className={styles.cart__price}>R${calcPrice(item.quantity, item.price)}</p>
        <IoClose className={styles.cart__title__icon} onClick={() => removeFromCart(item.id)} />
      </div>
    </div>
  );
}

export default CartItem;
