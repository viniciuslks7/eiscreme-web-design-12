
import React from "react";
import { Phone, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Contato = () => {
  // Background logo positions for the pattern
  const backgroundLogos = [
    { left: "-150.83px", top: "-55.79px" },
    { left: "178.53px", top: "-141px" },
    { left: "535.53px", top: "150px" },
    { left: "139.53px", top: "211px" },
    { left: "-225.47px", top: "94px" },
    { left: "127.53px", top: "394px" },
    { left: "-180.47px", top: "484px" },
    { left: "211.53px", top: "602px" },
    { left: "-165.47px", top: "641px" },
    { left: "489.53px", top: "722px" },
    { left: "166.53px", top: "70px" },
    { left: "-239.47px", top: "281px" },
    { left: "504.53px", top: "492px" },
    { left: "447.53px", top: "-18px" },
    { left: "572.53px", top: "-141px" },
    { left: "502.53px", top: "316px" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#349882]">
      {/* Background logos pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundLogos.map((position, index) => (
          <div 
            key={index} 
            className="absolute font-kavoon text-[#48B9A0] text-[59.6347px] leading-[75px] flex justify-center items-center p-[14.9087px] gap-[14.91px]"
            style={{
              width: "397.82px",
              height: "179.82px",
              left: position.left,
              top: position.top,
              transform: "rotate(10.1deg)",
              opacity: 0.15,
              pointerEvents: "none",
            }}
          >
            <div style={{ width: "368px", height: "150px" }}>
              Beckermann<br/>Eiscreme
            </div>
          </div>
        ))}
      </div>

      {/* Main content layout */}
      <div className="relative z-10 min-h-screen flex flex-col md:flex-row">
        {/* Left side - Headline */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center md:items-start">
          <div className="max-w-[628px] mt-20 md:mt-0 px-4">
            <h2 className="font-inter font-bold text-4xl md:text-6xl text-white text-center md:text-left">
              SORVETERIA ALEMÃ
            </h2>
            
            <p className="font-kavoon text-xl md:text-2xl text-white text-center md:text-left mt-4">
              O MELHOR SORVETE ALEMÃO! NO BRASIL...
            </p>
          </div>
          
          {/* Ice cream image */}
          <div className="relative w-full h-[400px] md:h-[630px] mt-8">
            <img 
              src="/lovable-uploads/1dd19d0a-d92b-4907-a0b9-fd7e07c034a6.png" 
              alt="Sorvete" 
              className="absolute transform rotate-[57deg]"
              style={{
                width: "741px",
                maxWidth: "none",
                left: "0",
                top: "0",
              }} 
            />
          </div>
        </div>
        
        {/* Right side - Contact card */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <div className="bg-white rounded-[32px] shadow-lg w-full max-w-[665px] min-h-[600px] md:min-h-[700px] p-6 relative">
            {/* Logo */}
            <div className="p-4 ml-4">
              <h1 className="font-kavoon text-[#48B9A0] text-[34px] leading-[42px]">
                Beckermann<br />Eiscreme
              </h1>
            </div>
            
            {/* Navigation icons */}
            <div className="absolute top-[58px] right-6 flex space-x-4">
              <Link to="/contato" className="text-[#48B9A0]">
                <Phone className="w-6 h-6" />
              </Link>
              <Link to="/" className="text-[#48B9A0]">
                <Mail className="w-6 h-6" />
              </Link>
            </div>
            
            {/* Header box */}
            <div className="bg-[#349882] w-full p-4 rounded-lg shadow-md my-6 text-center">
              <h2 className="font-inter font-bold text-white text-xl md:text-2xl">
                Fale conosco! Atendimento das 13h às 22h
              </h2>
            </div>
            
            {/* Google Maps embed */}
            <div className="bg-[#349882] w-full h-[264px] rounded-[13px] flex justify-center items-center my-6">
              <img 
                src="https://maps.googleapis.com/maps/api/staticmap?center=São+Paulo,Brazil&zoom=13&size=500x250&maptype=roadmap&key=AIzaSyBdOY_TpRDaue5rWzdkPGqpTwgki7VKBxE" 
                alt="Localização" 
                className="w-full h-full object-cover rounded-[13px]"
              />
            </div>
            
            {/* Contact button */}
            <div className="flex justify-center my-6">
              <button className="bg-[#48B9A0] text-white font-inter font-bold py-3 px-10 rounded-full text-lg">
                Contatos
              </button>
            </div>
            
            {/* Contact information */}
            <div className="mt-10 space-y-4 px-4">
              <div className="flex items-center gap-3">
                <Phone className="text-[#333333] w-5 h-5" />
                <p className="font-inter text-[rgba(0,0,0,0.8)] text-lg">
                  (17) 3483-3764 / (17) 99725-5227
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Instagram className="text-[#333333] w-5 h-5" />
                <p className="font-inter text-[rgba(0,0,0,0.8)] text-lg">
                  @beckermanneiscreme
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="text-[#333333] w-5 h-5" />
                <p className="font-inter font-bold text-[rgba(0,0,0,0.8)] text-lg">
                  beckermanneiscreme@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
