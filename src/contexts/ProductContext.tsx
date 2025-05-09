
import React, { createContext, useContext, useState } from "react";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  date: string;
  description: string;
  image: string;
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  updateProduct: (product: Product) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with some default products
  const [products, setProducts] = useState<Product[]>([
    { 
      id: 12, 
      name: "Casquinha de Baunilha", 
      category: "Clássico", 
      price: 12.90, 
      date: "30/04/2025", 
      description: "Sorvete gostoso",
      image: "/lovable-uploads/8bf12141-fce0-4e84-beaf-58c17fbfa9bf.png" 
    },
    { 
      id: 95, 
      name: "Casquinha de Morango", 
      category: "Fruta", 
      price: 12.90, 
      date: "30/04/2025", 
      description: "Sorvete gostoso",
      image: "/lovable-uploads/319e57c8-e139-4be2-ba2f-7246aa56cc75.png" 
    },
    { 
      id: 11, 
      name: "Casquinha Mista", 
      category: "Misto", 
      price: 13.90,
      date: "30/04/2025", 
      description: "Sorvete gostoso",
      image: "/lovable-uploads/18a3057d-2fa8-47d4-b4c9-9a1077c684cd.png" 
    }
  ]);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(products.map(product => 
      product.id === updatedProduct.id ? updatedProduct : product
    ));
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        updateProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
