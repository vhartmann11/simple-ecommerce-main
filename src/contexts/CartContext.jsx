import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState(() => {
    const savedCart = localStorage.getItem("cartItem");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (item, quantity) => {
    const existingItem = cartItem.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = cartItem.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
      setCartItem(updatedCart);
      localStorage.setItem("cartItem", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cartItem, { ...item, quantity }];
      setCartItem(updatedCart);
      localStorage.setItem("cartItem", JSON.stringify(updatedCart));
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItem.filter(cartItem => cartItem.id !== id);
    setCartItem(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItem, setCartItem, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}