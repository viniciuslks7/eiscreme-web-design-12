
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, X } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Comprar = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
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
  ]);
  
  const [couponCode, setCouponCode] = useState("");
  
  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  const handleQuantityChange = (id: number, value: number) => {
    if (value < 1) value = 1;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: value } : item
    ));
  };
  
  const calculateSubtotal = (price: number, quantity: number) => {
    return price * quantity;
  };
  
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header bar */}
      <div className="w-full bg-eiscreme py-4">
        <div className="container mx-auto flex items-center">
          <Link to="/" className="text-white font-nunito font-medium text-2xl flex items-center">
            <ArrowLeft className="mr-2" />
            VOLTAR
          </Link>
          
          <h1 className="mx-auto text-white font-inter font-bold text-4xl flex items-center">
            Carrinho
            <ShoppingCart className="ml-4" size={36} />
          </h1>
        </div>
      </div>
      
      {/* Table header */}
      <div className="container mx-auto border border-black bg-gray-100 mt-8">
        <div className="grid grid-cols-12 py-5 px-4">
          <div className="col-span-5">
            <h2 className="font-nunito font-medium text-2xl">PRODUTO</h2>
          </div>
          <div className="col-span-2 text-center">
            <h2 className="font-nunito font-medium text-2xl">PREÇO</h2>
          </div>
          <div className="col-span-2 text-center">
            <h2 className="font-nunito font-medium text-2xl">QUANTIDADE</h2>
          </div>
          <div className="col-span-3 text-center">
            <h2 className="font-nunito font-medium text-2xl">SUBTOTAL</h2>
          </div>
        </div>
      </div>
      
      {/* Cart items */}
      {cartItems.map((item) => (
        <div key={item.id} className="container mx-auto border border-black bg-white">
          <div className="grid grid-cols-12 py-5 px-4 items-center">
            <div className="col-span-1 flex justify-center">
              <button 
                className="w-10 h-10 rounded-full border border-black flex items-center justify-center"
                onClick={() => handleRemoveItem(item.id)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="col-span-4 flex items-center">
              <img src={item.image} alt={item.name} className="h-16 mr-4" />
              <h3 className="font-poppins font-bold text-xl">{item.name}</h3>
            </div>
            <div className="col-span-2 text-center">
              <p className="font-poppins font-bold text-xl">{formatPrice(item.price)}</p>
            </div>
            <div className="col-span-2 flex justify-center">
              <div className="border border-black rounded-lg w-28">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  className="w-full text-center py-2 rounded-lg font-poppins text-xl bg-transparent"
                />
              </div>
            </div>
            <div className="col-span-3 text-center">
              <p className="font-poppins font-bold text-xl">
                {formatPrice(calculateSubtotal(item.price, item.quantity))}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      {/* Bottom section */}
      <div className="container mx-auto mt-10 grid grid-cols-12 gap-8">
        {/* Coupon section */}
        <div className="col-span-4">
          <h2 className="font-nunito font-medium text-2xl mb-2">CÓDIGO PROMOCIONAL</h2>
          <div className="relative">
            <Input 
              className="border border-black h-12 font-nunito"
              placeholder="CÓDIGO DO CUPOM"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <Button 
              className="w-full bg-eiscreme text-white font-nunito font-medium text-xl mt-4 py-6 rounded-full"
            >
              APLICAR CUPOM
            </Button>
          </div>
        </div>
        
        {/* Total section */}
        <div className="col-span-4 col-start-9">
          <h2 className="font-nunito font-medium text-2xl mb-2">TOTAL DO CARRINHO</h2>
          <div className="grid grid-cols-3 border border-black bg-gray-100">
            <div className="col-span-1 border-r border-black p-3">
              <p className="font-nunito font-bold">SUBTOTAL</p>
            </div>
            <div className="col-span-2 p-3 text-right">
              <p className="font-nunito">{formatPrice(calculateTotal())}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 border border-black bg-gray-100 border-t-0">
            <div className="col-span-1 border-r border-black p-3">
              <p className="font-nunito font-bold">TOTAL</p>
            </div>
            <div className="col-span-2 p-3 text-right">
              <p className="font-nunito">{formatPrice(calculateTotal())}</p>
            </div>
          </div>
          
          <Button 
            className="w-full bg-eiscreme text-white font-nunito font-medium text-xl mt-8 py-6 rounded-full"
          >
            FINALIZAR COMPRA
          </Button>
        </div>
      </div>
      
      {/* Payment methods */}
      <div className="container mx-auto mt-12 mb-8 flex justify-center items-center space-x-8">
        <div className="text-center">
          <p className="text-sm font-bold mb-2">PAGUE COM<br />SEGURANÇA</p>
          <div className="flex space-x-2">
            <img src="/lovable-uploads/f916221d-681b-4484-8429-6c8b0f088b76.png" alt="Mastercard" className="h-8" />
            <img src="/lovable-uploads/98f0fb2a-3fd1-4035-9de2-df5da53516ca.png" alt="Visa" className="h-8" />
            <img src="/lovable-uploads/8b1d57cb-e8df-49b8-90f6-d1118948b21e.png" alt="Boleto" className="h-8" />
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-sm font-bold mb-2">COMPRA 100% SEGURA<br />CRIPTOGRAFIA SSL</p>
          <div className="flex justify-center">
            <img src="/lovable-uploads/c44538fb-0db3-4a1f-bb6f-8a24fbf9159a.png" alt="Security" className="h-8" />
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-sm font-bold mb-2">GARANTIA 14 DIAS<br />DEVOLUÇÃO DO DINHEIRO</p>
          <div className="flex justify-center">
            <img src="/lovable-uploads/ba60d359-2d97-4212-ae3e-5fda4e82cb49.png" alt="Guarantee" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comprar;
