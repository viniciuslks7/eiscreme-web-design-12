
import React from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";

const Sabores = () => {
  return (
    <div className="min-h-screen bg-[#48B9A0] relative overflow-hidden">
      {/* Background image */}
      <div className="absolute -right-16 bottom-0 pointer-events-none opacity-20">
        <img 
          src="/lovable-uploads/8bf12141-fce0-4e84-beaf-58c17fbfa9bf.png" 
          alt="Background" 
          className="w-[400px] h-[400px] object-contain transform -scale-x-100" 
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
        <button>
          <ShoppingCart className="w-7 h-7 text-white" />
        </button>
        <Link to="/login">
          <User className="w-7 h-7 text-white" />
        </Link>
      </div>
      
      {/* Main Content - Ice Cream Images */}
      <div className="absolute top-[160px] left-0 w-full">
        <div className="flex justify-center">
          {/* Vanilla Ice Cream - 50 reais */}
          <div className="relative mx-8">
            <div className="absolute w-[267px] h-[586px]">
              <img 
                src="/lovable-uploads/2d402cbb-15e4-4459-87b6-42f46036c956.png" 
                alt="Casquinha Baunilha" 
                className="h-full object-contain"
              />
            </div>
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-[#48B9A0] border-2 border-white rounded-xl px-6 py-2">
              <p className="font-baloo text-white text-center mb-1">Casquinha Baunilha</p>
              <div className="flex items-center justify-center">
                <span className="font-baloo text-white text-2xl mr-1">R$</span>
                <span className="font-baloo text-white text-5xl">50</span>
                <span className="font-baloo text-white text-xl">,00</span>
              </div>
            </div>
          </div>
          
          {/* Strawberry Ice Cream - 100 reais */}
          <div className="relative mx-8">
            <div className="absolute w-[267px] h-[586px]">
              <img 
                src="/lovable-uploads/9649b6c5-d077-48a1-800c-26f72deccaa3.png" 
                alt="Casquinha Morango" 
                className="h-full object-contain"
              />
            </div>
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-[#48B9A0] border-2 border-white rounded-xl px-6 py-2">
              <p className="font-baloo text-white text-center mb-1">Casquinha Morango</p>
              <div className="flex items-center justify-center">
                <span className="font-baloo text-white text-2xl mr-1">R$</span>
                <span className="font-baloo text-white text-5xl">100</span>
                <span className="font-baloo text-white text-xl">,00</span>
              </div>
            </div>
          </div>
          
          {/* Mixed Ice Cream - 250 reais */}
          <div className="relative mx-8">
            <div className="absolute w-[308px] h-[586px]">
              <img 
                src="/lovable-uploads/c44538fb-0db3-4a1f-bb6f-8a24fbf9159a.png" 
                alt="Casquinha Mista" 
                className="h-full object-contain"
              />
            </div>
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-[#48B9A0] border-2 border-white rounded-xl px-6 py-2">
              <p className="font-baloo text-white text-center mb-1">Casquinha Mista</p>
              <div className="flex items-center justify-center">
                <span className="font-baloo text-white text-2xl mr-1">R$</span>
                <span className="font-baloo text-white text-5xl">250</span>
                <span className="font-baloo text-white text-xl">,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Social Media Icons */}
      <div className="absolute bottom-[30px] right-[30px] flex space-x-4">
        {/* Google Icon */}
        <div className="w-[39px] h-[39px] rounded-full overflow-hidden">
          <img 
            src="/lovable-uploads/09a235e3-c42e-4759-9a17-6d659027c536.png" 
            alt="Google" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Facebook Icon */}
        <div className="w-[40px] h-[39px] rounded-full overflow-hidden">
          <img 
            src="/lovable-uploads/951a2f4d-2646-4fa7-a0e4-5ff823c6e413.png" 
            alt="Facebook" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Twitter Icon */}
        <div className="w-[40px] h-[39px] rounded-full overflow-hidden">
          <img 
            src="/lovable-uploads/41a4bd1a-d5c7-47ae-ae24-999b9f6641e7.png" 
            alt="Twitter" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Instagram Icon */}
        <div className="w-[39px] h-[39px] rounded-full overflow-hidden">
          <img 
            src="/lovable-uploads/e926942d-6b2f-46f2-89d8-f463f954c758.png" 
            alt="Instagram" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Sabores;
