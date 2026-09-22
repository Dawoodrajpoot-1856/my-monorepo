"use client";

import { useState, useEffect } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. Page load par LocalStorage se data uthana
  useEffect(() => {
    const savedCart = localStorage.getItem("my-app-cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Cart load failed", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // 2. Cart change hone par LocalStorage me save karna
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("my-app-cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  // Item Add karna
  const addToCart = (product: { id: number; name: string; price: number }) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Item Remove karna
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Cart Khali karna
  const clearCart = () => {
    setCart([]);
  };

  // Total Calculation
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    totalPrice,
    totalItems,
  };
}