
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Phone, Home } from "lucide-react";

const Sobre = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Header Section */}
      <div className="absolute top-0 left-0 right-0 h-[87px] bg-[#48B9A0]">
        {/* Logo */}
        <div className="absolute left-[52px] top-[34px] transform rotate-[0.09deg]">
          <h1 className="font-kavoon text-[#48B9A0] text-[34px] leading-[42px]">
            Beckermann<br />Eiscreme
          </h1>
        </div>

        {/* Icons */}
        <div className="absolute right-[108px] top-[58px] flex space-x-4">
          <Link to="/contato" className="text-[#48B9A0]">
            <Phone className="w-6 h-6" />
          </Link>
          <Link to="/" className="text-[#48B9A0]">
            <Home className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto pt-[120px] px-4">
        <div className="flex flex-col md:flex-row items-start">
          {/* Left side content */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8">
            <h1 className="font-['Nunito_Sans'] font-black text-4xl text-[#349882] mb-8">
              SOBRE NÓS
            </h1>
            
            <p className="font-['Nunito_Sans'] text-2xl text-black leading-relaxed mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            
            <p className="font-['Nunito_Sans'] text-2xl text-black leading-relaxed mb-6">
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
            
            <p className="font-['Nunito_Sans'] text-2xl text-black leading-relaxed">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged.
            </p>
          </div>
          
          {/* Right side image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img 
              src="/lovable-uploads/d16dfc8b-accf-475e-8714-3ee0c21af9fd.png" 
              alt="Sorvete Premium" 
              className="w-full h-auto max-w-[730px]" 
            />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-[86px] bg-[#48B9A0] flex items-center justify-center">
        <p className="font-['Nunito_Sans'] font-semibold text-2xl text-white">
          © 2025 - Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
