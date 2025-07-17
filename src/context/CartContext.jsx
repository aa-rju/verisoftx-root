import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext"; // for accessing user

const CartContext = createContext();

// Hook for easy access to CartContext
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);

  // Load cart for user from localStorage
  useEffect(() => {
    if (user) {
      const storedCart =
        JSON.parse(localStorage.getItem(`cart_${user.email}`)) || [];
      setCart(storedCart);
    } else {
      setCart([]); // clear cart if no user logged in
    }
  }, [user]);

  // Save cart when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(`cart_${user.email}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, amount) => {
    setCart(
      (prev) =>
        prev
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + amount }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove items with qty <= 0
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
