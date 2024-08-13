import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { IoCartOutline, IoClose } from 'react-icons/io5';
import styles from './Navbar.module.scss';
import LogoImg2 from '../../img/logo2.png';
import { CartContext } from '../../contexts/CartContext';
import EmptyCart from '../EmptyCart';
import CartWithItems from '../CartWithItems';

const Navbar = () => {
  const [cart, setCart] = useState(false);
  const { cartItem } = useContext(CartContext);

  const toggleCart = () => setCart(!cart);

  return (
    <>
      <div onClick={toggleCart} className={`${styles.page__overlay} ${cart ? styles.open__flex : styles.closed__flex}`} />
      <div className={`${styles.cart__div} ${cart ? styles.open__cart : styles.closed__cart}`}>
        <div className={styles.cart__title__btn}>
          <h2 className={styles.cart__full__h2}>Seu carrinho de compras ({cartItem.length})</h2>
          <IoClose className={styles.cart__title__icon} onClick={toggleCart} />
        </div>
        <div className={styles.cart__body}>
          {cartItem.length < 1 ? <EmptyCart openCart={toggleCart} /> : <CartWithItems closeCart={toggleCart} />}
        </div>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.nav__container}>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={LogoImg2} alt="logo" className="logo-img" />
            </Link>
            <div className={styles.nav__links}>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>HOME</Link>
              <Link to="/categories/all" onClick={() => window.scrollTo(0, 0)}>CATEGORIAS</Link>
              <i className={`${styles.nav__icon} ${cartItem.length > 0 ? styles.with_items : ''}`} onClick={toggleCart}>
                <IoCartOutline />
                {cartItem.length > 0 && <span className={styles.cart__icon__count}>{cartItem.length}</span>}
              </i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
