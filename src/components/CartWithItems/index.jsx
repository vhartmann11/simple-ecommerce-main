// CartWithItems.js
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";
import EmptyCart from "../EmptyCart";
import styles from "../Navbar/Navbar.module.scss";
import { CartContext } from "../../contexts/CartContext";

function CartWithItems({ closeCart }) {
  const { cartItem } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(newTotalPrice.toFixed(2));
  }, [cartItem]);

  return (
    <>
      <div className={styles.full__cart__div}>
        <div className={styles.full__cart}>
          {cartItem.length !== 0 ? (
            cartItem.map(item => (
              <CartItem key={item.id} item={item} />
            ))
          ) : (
            <EmptyCart />
          )}
        </div>
      </div>
      <div className={styles.subtotal__div}>
        <div className={styles.sub__right}>
          <p>Subtotal</p>
          <p className={styles.total__price}>{"R$" + totalPrice}</p>
        </div>
        <div className={styles.sub__left}>
          <Link
            to="/checkout"
            onClick={closeCart} // Fechar o carrinho ao clicar em Finalizar Compra
          >
            Finalizar compra
          </Link>
        </div>
      </div>
    </>
  );
}

export default CartWithItems;
