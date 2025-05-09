
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Home } from "lucide-react";

const Sobre = () => {
  return (
    <div className="relative w-[1432px] h-[835px] bg-white">
      {/* Logo */}
      <div 
        className="absolute flex flex-row justify-center items-center p-[8.47px] gap-[8.47px] w-[225.94px] h-[100.94px] left-[52.15px] top-[34px]"
        style={{ transform: "rotate(0.09deg)" }}
      >
        <h1 
          className="w-[209px] h-[84px] font-kavoon font-normal text-[33.878px] leading-[42px] text-[#48B9A0]"
          style={{ transform: "rotate(0.09deg)" }}
        >
          Beckermann<br />Eiscreme
        </h1>
      </div>

      {/* Frame 8 - Icons */}
      <div className="absolute w-[108px] h-[48px] left-[1301px] top-[58px]">
        {/* Headset Icon */}
        <div className="absolute w-[48px] h-[48px] left-[-3px] top-[0px]">
          <Phone className="absolute left-[16.67%] right-[16.67%] top-[16.67%] bottom-[16.67%] text-[#48B9A0]" />
        </div>
        
        {/* Home Icon */}
        <div className="absolute w-[48px] h-[48px] left-[54px] top-[0px]">
          <Link to="/">
            <Home className="absolute left-[16.67%] right-[16.67%] top-[16.67%] bottom-[16.67%] text-[#48B9A0]" />
          </Link>
        </div>
      </div>

      {/* Rectangle 5 - Footer */}
      <div 
        className="absolute w-[1475px] h-[86px] left-[calc(50%-1475px/2-3.5px)] top-[770px] bg-[#48B9A0] rounded-[45.0387px]"
      >
        {/* © 2025 - Todos os direitos reservados. */}
        <p 
          className="absolute w-[424px] h-[33px] left-[calc(50%-424px/2)] top-[10px] font-nunito font-semibold text-[24px] leading-[33px] text-white"
        >
          © 2025 - Todos os direitos reservados.
        </p>
      </div>

      {/* Fale conosco! Atendimento das 13h ás 22h */}
      <div className="absolute w-[558px] h-[32px] left-[831px] top-[182px]">
        <p className="font-inter font-bold text-[26.2361px] leading-[32px] text-white">
          Fale conosco! Atendimento das 13h ás 22h
        </p>
      </div>

      {/* SOBRE NÓS */}
      <div className="absolute w-[216px] h-[49px] left-[60.15px] top-[173px]">
        <h2 
          className="absolute w-[216px] h-[49px] left-[calc(50%-216px/2-547.85px)] top-[0px] font-nunito font-black text-[36px] leading-[49px] text-[#349882]"
        >
          SOBRE NÓS
        </h2>
      </div>

      {/* Main Content Text */}
      <div 
        className="absolute w-[718px] h-[406px] left-[calc(50%-718px/2-296.85px)] top-[241px] font-nunito font-normal text-[24px] leading-[33px] text-black"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged.
      </div>

      {/* Background Image - Updated to new ice cream image */}
      <div className="absolute w-[730px] h-[730px] left-[730px] top-[53px]">
        <img 
          src="/lovable-uploads/479cc453-12ee-4ca1-a9a2-ee283357c273.png"
          alt="Sorvete Premium com Calda de Chocolate e Frutas" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Sobre;
