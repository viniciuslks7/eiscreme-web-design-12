
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/contexts/ProductContext";
import { useCart } from "@/contexts/CartContext";

const Sabores = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const [showAll, setShowAll] = useState(false);
  
  const displayProducts = showAll ? products : products.slice(0, 3);
  
  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
  };

  const formatPrice = (price: number) => {
    const wholePart = Math.floor(price);
    const decimalPart = Math.round((price - wholePart) * 100);
    return {
      whole: wholePart,
      decimal: decimalPart.toString().padStart(2, '0')
    };
  };

  return (
    <div className="min-h-screen bg-[#48B9A0] relative overflow-hidden">
      {/* Background image */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-50 z-0">
        <img 
          src="/lovable-uploads/5fef561c-cee2-4a6a-bed2-516227457f75.png" 
          alt="Background" 
          className="w-full h-full object-contain" 
        />
      </div>
      
      {/* Logo */}
      <div className="absolute flex flex-row justify-center items-center p-2.5 w-[267px] h-[120px] left-[40px] top-[31px]">
        <h1 className="font-kavoon text-white text-[40px] leading-[50px] w-[247px] h-[100px]">
          Beckermann<br />Eiscreme
        </h1>
      </div>
      
      {/* Navbar */}
      <div className="absolute flex flex-row items-center gap-[33px] w-[723px] h-[98px] left-[462px] top-[42px]">
        <Link to="/" className="font-inter font-semibold text-[28px] leading-[34px] text-white">
          HOME
        </Link>
        <Link to="/sabores" className="font-inter font-semibold text-[28px] leading-[34px] text-white">
          SABORES
        </Link>
        <Link to="/sobre" className="font-inter font-semibold text-[28px] leading-[34px] text-white">
          SOBRE
        </Link>
        <Link to="/contato" className="font-inter font-semibold text-[28px] leading-[34px] text-white">
          CONTATO
        </Link>
        <Link to="/comprar" className="font-inter font-semibold text-[28px] leading-[34px] text-white">
          COMPRAR
        </Link>
      </div>
      
      {/* Icons */}
      <div className="absolute flex flex-row items-center gap-[18px] w-[94px] h-[48px] left-[1270px] top-[67px]">
        <button className="flex items-center p-2.5">
          <Search className="w-7 h-7 text-white" />
        </button>
        <Link to="/comprar">
          <ShoppingCart className="w-7 h-7 text-white" />
        </Link>
        <Link to="/login">
          <User className="w-7 h-7 text-white" />
        </Link>
      </div>
      
      {/* Hero section */}
      <div className="absolute w-[444px] left-[171px] top-[214px]">
        <h2 className="font-inter font-bold text-[46.655px] leading-[56px] text-white">
          OS CLÁSSICOS ESTÃO DE VOLTA
        </h2>
        <p className="font-kavoon text-[18.76px] leading-[23px] text-white mt-4">
          O MELHOR SORVETE ALEMÃO! NO BRASIL!
        </p>
        <p className="font-inder text-[24px] leading-[30px] text-white mt-6 w-[437px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
        <Button 
          className="mt-10 bg-transparent border-2 border-white rounded-lg text-white font-poppins text-[32px] leading-[39px] py-4 px-8"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Mostrar menos" : "Carregar mais"}
        </Button>
      </div>
      
      {/* Ice Cream Images with Price Labels */}
      {displayProducts.map((product, index) => {
        const price = formatPrice(product.price);
        const positions = [
          { left: "529px", top: "160px" },
          { left: "793px", top: "160px" },
          { left: "1043px", top: "160px" }
        ];
        
        // Use default position if more than 3 products
        const position = positions[index] || { left: `${529 + (index % 3) * 264}px`, top: `${160 + Math.floor(index / 3) * 300}px` };
        
        return (
          <div key={product.id} className="absolute w-[267px] h-[586px]" style={{ left: position.left, top: position.top }}>
            <img 
              src={product.image} 
              alt={product.name} 
              className="h-full object-contain"
              onClick={() => handleAddToCart(product)}
            />
            <div className="absolute bottom-20 left-[33px]">
              {/* Price tag */}
              <div className="relative">
                {/* White circle */}
                <div className="absolute w-[31px] h-[31px] bg-white rounded-full -left-[13px] -top-[8px]"></div>
                
                {/* V letter */}
                <div className="absolute -left-[11px] top-[16px] font-baloo text-[#48B9A0] text-[25px] transform -rotate-90">
                  V
                </div>
                
                {/* Description box */}
                <div className="bg-[#48B9A0] border-2 border-white rounded-xl px-3 py-2 w-[120px]">
                  <p className="font-baloo text-white text-center text-[14.77px] leading-[18px]">
                    {product.name}
                  </p>
                </div>
                
                {/* Price box */}
                <div className="bg-[#48B9A0] border-2 border-white rounded-xl px-3 py-2 mt-[6px] w-[144px]">
                  <div className="flex items-center justify-center">
                    <span className="font-baloo text-white text-[24.61px] mr-1">R$</span>
                    <span className="font-baloo text-white text-[48.41px]">{price.whole}</span>
                    <span className="font-baloo text-white text-[21.33px] mt-2">,{price.decimal}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      
      {/* Social Media Icons */}
      <div className="absolute bottom-[30px] right-[30px] flex space-x-4">
        {/* Google Icon */}
        <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
          <img 
            src="/lovable-uploads/09a235e3-c42e-4759-9a17-6d659027c536.png" 
            alt="Google" 
            className="w-[24px] h-[24px] object-contain"
          />
        </div>
        
        {/* Facebook Icon */}
        <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
          <Facebook className="w-[24px] h-[24px] text-[#48B9A0]" />
        </div>
        
        {/* Twitter Icon */}
        <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
          <Twitter className="w-[24px] h-[24px] text-[#48B9A0]" />
        </div>
        
        {/* Instagram Icon */}
        <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
          <Instagram className="w-[24px] h-[24px] text-[#48B9A0]" />
        </div>
      </div>
    </div>
  );
};

export default Sabores;
