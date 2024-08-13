import React from 'react';
import { IoClose } from 'react-icons/io5';
import styles from '../Navbar/Navbar.module.scss';
import EmptyCartImg from '../../img/cart/empty-cart.png';

function EmptyCart({ openCart }) {
  return (
    <div className={styles.empty__cart}>
      <img src={EmptyCartImg} alt="empty-cart" />
      <p>Seu carrinho está vazio</p>
      <button onClick={openCart}>Procure mais ofertas</button>
    </div>
  );
}

export default EmptyCart;
