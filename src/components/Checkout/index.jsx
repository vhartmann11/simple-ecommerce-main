import React, { useContext, useState } from 'react';
import { CartContext } from "../../contexts/CartContext";
import styles from './Checkout.module.scss';
import emptyCartImage from '../../img/cart/empty-cart.png';
import { items } from '../AllData/AllData';

const Checkout = () => {
  const { cartItem, setCartItem } = useContext(CartContext);
  const [notify, setNotify] = useState(false);
  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    country: '',
    streetAddress: '',
    apartment: '',
    city: '',
    postcode: '',
    phone: '',
    createAccount: false,
    orderNotes: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCheckout = (event) => {
    event.preventDefault();
    setCartItem([]);
    showNotify();
    clearForm();
  };

  const clearForm = () => {
    setForm({
      email: '',
      firstName: '',
      lastName: '',
      country: '',
      streetAddress: '',
      apartment: '',
      city: '',
      postcode: '',
      phone: '',
      createAccount: false,
      orderNotes: '',
    });
  };

  const removeItem = (id) => {
    setCartItem(prevCartItem => prevCartItem.filter(item => item.id !== id));
  };

  const showNotify = () => {
    setNotify(true);
    setTimeout(() => setNotify(false), 10000);
  };

  const total = cartItem.reduce((acc, item) => {
    const product = items.find(i => i.id === item.id);
    return acc + product.price * item.quantity;
  }, 0).toFixed(2);

  return (
    <div className={styles.checkout__container}>
      {notify && (
        <div onAnimationEnd={() => setNotify(false)} className={`notify slide-in`}>
          <p>Sua compra foi feita com sucesso, cheque seu e-mail para rastrear o pedido! ✅</p>
        </div>
      )}
      <h1 className={styles.checkout__title}>Checkout</h1>
      <div className={styles.checkout__details}>
        <div className={styles.order__summary}>
          <h2>Resumo do pedido</h2>
          {cartItem.length > 0 ? (
            cartItem.map(item => {
              const product = items.find(i => i.id === item.id);
              return (
                <div key={item.id} className={styles.order__item}>
                  <button onClick={() => removeItem(item.id)} className={styles.removeItemButton}>&times;</button>
                  <div className={styles.order__itemleft}>
                    <img src={product.img} alt={product.description} className={styles.order__image} />
                    <p>{product.description}</p>
                    <p className={styles.itemQuantity}>({item.quantity} {item.quantity > 1 ? 'unidades' : 'unidade'})</p>
                  </div>
                  <div className={styles.order__itemright}>
                    <div className={styles.order__itemDetails}>
                      <p>R${(product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className={styles.emptyCartContainer}>
              <p>Seu carrinho está vazio.</p>
              <img src={emptyCartImage} alt="Carrinho vazio." className={styles.emptyCartImage} />
              <p className={styles.reminder}>Esqueceu algo?</p>
            </div>
          )}
          <div className={styles.order__total}>
            <p>Total:</p>
            <p>R${total}</p>
          </div>
          <a href="/categories/all" className={styles.continueShopping}>
            {cartItem.length === 0 ? 'Voltar à loja' : 'Adicione mais itens'}
          </a>
        </div>
        <div className={styles.checkout__form}>
          <h2>Detalhes do pagamento</h2>
          <form onSubmit={handleCheckout}>
            <label>
              Endereço de e-mail *
              <input type="email" name="email" required value={form.email} onChange={handleChange} />
            </label>
            <label>
              Nome *
              <input type="text" name="firstName" required value={form.firstName} onChange={handleChange} />
            </label>
            <label>
              Sobrenome *
              <input type="text" name="lastName" required value={form.lastName} onChange={handleChange} />
            </label>
            <label>
              País *
              <select name="country" required value={form.country} onChange={handleChange}>
                <option value="">Selecione o país</option>
                <option value="br">Brasil</option>
                <option value="us">Estados Unidos</option>
              </select>
            </label>
            <label>
              Endereço *
              <input type="text" name="streetAddress" required value={form.streetAddress} onChange={handleChange} />
            </label>
            <label>
              Apartamento, casa, etc. (opcional)
              <input type="text" name="apartment" value={form.apartment} onChange={handleChange} />
            </label>
            <label>
              Cidade *
              <input type="text" name="city" required value={form.city} onChange={handleChange} />
            </label>
            <label>
              CEP *
              <input type="text" name="postcode" required value={form.postcode} onChange={handleChange} />
            </label>
            <label>
              Celular *
              <input type="tel" name="phone" required value={form.phone} onChange={handleChange} />
            </label>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" name="createAccount" checked={form.createAccount} onChange={handleChange} />
              Criar uma conta?
            </label>
            <label>
              Informações adicionais para o pedido.
              <textarea name="orderNotes" maxLength="200" value={form.orderNotes} onChange={handleChange} />
            </label>
            <button type="submit" disabled={cartItem.length === 0}>FINALIZAR PEDIDO</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
