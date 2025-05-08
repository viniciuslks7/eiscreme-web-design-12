
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
      
      {/* Main Content */}
      <div className="absolute w-[628px] h-[294px] left-[-124px] top-[271px]">
        {/* Heading */}
        <h1 className="absolute w-[444px] h-[91px] left-[171px] top-[-57px] font-inter font-bold text-[46.655px] leading-[56px] text-white">
          OS CLÁSSICOS ESTÃO DE VOLTA
        </h1>
        
        {/* Subheading */}
        <p className="absolute w-[373px] h-[23px] left-[171px] top-[57px] font-kavoon text-[18.76px] leading-[23px] text-white">
          O MELHOR SORVETE ALEMÃO! NO BRASIL!
        </p>
        
        {/* Description */}
        <p className="absolute w-[437px] h-[240px] left-[171px] top-[110px] font-inder text-[24px] leading-[30px] text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      
      {/* Ice Cream Images */}
      {/* Vanilla Ice Cream */}
      <div className="absolute w-[267px] h-[586px] left-[529px] top-[160px]">
        <img 
          src="/lovable-uploads/d7f5ee5f-10ab-4da5-bff5-ff72cf89ecc2.png" 
          alt="Casquinha de Baunilha" 
          className="h-full object-contain"
        />
      </div>
      
      {/* Strawberry Ice Cream */}
      <div className="absolute w-[284px] h-[586px] left-[793px] top-[160px]">
        <img 
          src="/lovable-uploads/51c817c8-7f16-499c-9d48-bbcf100eba34.png" 
          alt="Casquinha de Morango" 
          className="h-full object-contain"
        />
      </div>
      
      {/* Mixed Ice Cream */}
      <div className="absolute w-[308px] h-[586px] left-[1043px] top-[160px]">
        <img 
          src="/lovable-uploads/c6d73a90-919e-4ff5-8ef4-289bf0e45459.png" 
          alt="Casquinha Mista" 
          className="h-full object-contain"
        />
      </div>
      
      {/* Vanilla Ice Cream Label */}
      <div className="absolute w-[144px] h-[106px] left-[662px] top-[539px]">
        <div className="absolute w-[144px] h-[69px] left-[662px] top-[573px] bg-[#48B9A0] border-2 border-white rounded-xl -translate-x-[662px] -translate-y-[547px]">
          <div className="absolute w-[100px] h-[46px] left-[675px] top-[547px] bg-[#48B9A0] border-2 border-white rounded-xl -translate-x-[662px] -translate-y-[547px]">
            <p className="absolute w-[71px] h-[36px] left-[695px] top-[554px] font-['Baloo'] text-white text-[14.77px] leading-[123%] -translate-x-[662px] -translate-y-[547px]">
              Casquinha baunilha
            </p>
          </div>
          <div className="flex items-center absolute left-[669px] top-[585px] -translate-x-[662px] -translate-y-[547px]">
            <span className="font-['Baloo'] text-white text-[24.61px] leading-[123%] mr-2">R$</span>
            <span className="font-['Baloo'] text-white text-[48.41px] leading-[123%]">00</span>
            <span className="font-['Baloo'] text-white text-[21.33px] leading-[123%]">,00</span>
          </div>
        </div>
        <div className="absolute w-[31px] h-[31px] left-[662px] top-[539px] bg-white rounded-full -translate-x-[662px] -translate-y-[539px]">
          <span className="absolute w-[17px] h-[31px] left-[664px] top-[563px] font-['Baloo'] text-[#48B9A0] text-[25.44px] leading-[123%] transform -rotate-90 -translate-x-[662px] -translate-y-[539px]">V</span>
        </div>
      </div>
      
      {/* Strawberry Ice Cream Label */}
      <div className="absolute left-[50%] right-[-0.7%] top-[64.68%] bottom-[17.24%]">
        <div className="absolute left-[50%] right-[-0.7%] top-[70.48%] bottom-[17.75%] bg-[#48B9A0] border-2 border-white rounded-xl">
          <div className="absolute left-[54.58%] right-[10.21%] top-[66.04%] bottom-[26.11%] bg-[#48B9A0] border-2 border-white rounded-xl">
            <p className="absolute left-[61.62%] right-[13.38%] top-[67.24%] bottom-[26.62%] font-['Baloo'] text-white text-[14.77px] leading-[123%]">
              Casquinha morango
            </p>
          </div>
          <div className="absolute left-[52.46%] top-[72.53%]">
            <span className="absolute left-0 top-[3.41%] font-['Baloo'] text-white text-[24.61px] leading-[123%]">R$</span>
            <span className="absolute left-[11.27%] top-0 font-['Baloo'] text-white text-[48.41px] leading-[123%]">00</span>
            <span className="absolute left-[33.1%] top-[1.87%] font-['Baloo'] text-white text-[21.33px] leading-[123%]">,00</span>
          </div>
        </div>
        <div className="absolute left-[50%] right-[39.08%] top-[64.68%] bottom-[30.03%] bg-white rounded-full">
          <span className="absolute left-[50.7%] right-[43.31%] top-[68.77%] bottom-[25.94%] font-['Baloo'] text-[#48B9A0] text-[25.44px] leading-[123%] transform -rotate-90">V</span>
        </div>
      </div>
      
      {/* Mixed Ice Cream Label */}
      <div className="absolute left-[83.59%] right-[6.35%] top-[64.55%] bottom-[22.75%]">
        <div className="absolute left-[83.59%] right-[6.35%] top-[68.62%] bottom-[23.11%] bg-[#48B9A0] border-2 border-white rounded-xl">
          <div className="absolute left-[84.5%] right-[8.52%] top-[65.51%] bottom-[28.98%] bg-[#48B9A0] border-2 border-white rounded-xl">
            <p className="absolute left-[85.89%] right-[9.15%] top-[66.35%] bottom-[29.34%] font-['Baloo'] text-white text-[14.77px] leading-[123%]">
              Casquinha mista
            </p>
          </div>
          <div className="absolute left-[84.08%] top-[70.06%]">
            <span className="absolute left-0 top-[2.4%] font-['Baloo'] text-white text-[24.61px] leading-[123%]">R$</span>
            <span className="absolute left-[2.23%] top-0 font-['Baloo'] text-white text-[48.41px] leading-[123%]">00</span>
            <span className="absolute left-[6.56%] top-[1.32%] font-['Baloo'] text-white text-[21.33px] leading-[123%]">,00</span>
          </div>
        </div>
        <div className="absolute left-[83.59%] right-[14.25%] top-[64.55%] bottom-[31.74%] bg-white rounded-full">
          <span className="absolute left-[83.73%] right-[15.08%] top-[67.43%] bottom-[28.86%] font-['Baloo'] text-[#48B9A0] text-[25.44px] leading-[123%] transform -rotate-90">V</span>
        </div>
      </div>
      
      {/* Load More Button */}
      <div className="absolute box-border w-[264px] h-[86px] left-[50px] top-[655px] border-2 border-white rounded-[10px] flex items-center justify-center">
        <span className="font-poppins text-[32px] leading-[123%] text-white">Carregar mais</span>
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
