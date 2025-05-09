
import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  applyCoupon: (code: string) => void;
  couponCode: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load cart from localStorage or initialize with default items
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    }
    return [
      {
        id: 1,
        name: "Casquinha de Baunilha",
        price: 12.90,
        quantity: 1,
        image: "/lovable-uploads/8bf12141-fce0-4e84-beaf-58c17fbfa9bf.png"
      },
      {
        id: 2,
        name: "Casquinha de Morango",
        price: 12.90,
        quantity: 1,
        image: "/lovable-uploads/319e57c8-e139-4be2-ba2f-7246aa56cc75.png"
      },
      {
        id: 3,
        name: "Casquinha Mista",
        price: 13.90,
        quantity: 1,
        image: "/lovable-uploads/18a3057d-2fa8-47d4-b4c9-9a1077c684cd.png"
      }
    ];
  });
  
  const [couponCode, setCouponCode] = useState<string>("");

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    // Check if the item is already in the cart
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex >= 0) {
      // If item exists, increment quantity
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedItems);
    } else {
      // If item doesn't exist, add it
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) quantity = 1;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const applyCoupon = (code: string) => {
    // In a real application, you would validate the coupon code against a database
    setCouponCode(code);
    console.log(`Coupon ${code} applied`);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getSubtotal,
        applyCoupon,
        couponCode
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
