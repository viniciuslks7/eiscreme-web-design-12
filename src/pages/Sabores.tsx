
import React from "react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const Sabores = () => {
  return (
    <div className="min-h-screen bg-[#48B9A0] relative overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-8 md:pt-16 pb-24 relative">
        <div className="flex flex-col md:flex-row">
          {/* Left side content */}
          <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
            <div className="max-w-[450px] mx-auto md:mx-0">
              <h1 className="font-inter font-bold text-4xl md:text-5xl text-white mb-6">
                OS CLÁSSICOS ESTÃO DE VOLTA
              </h1>
              
              <p className="font-kavoon text-xl text-white mb-6">
                O MELHOR SORVETE ALEMÃO! NO BRASIL!
              </p>
              
              <p className="font-inder text-xl text-white leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          
          {/* Right side content - Ice cream images */}
          <div className="w-full md:w-1/2 relative">
            <div className="flex flex-wrap justify-center">
              {/* Vanilla Ice Cream */}
              <div className="relative mb-12 md:mb-0 mx-4">
                <img 
                  src="/lovable-uploads/d7f5ee5f-10ab-4da5-bff5-ff72cf89ecc2.png" 
                  alt="Casquinha de Baunilha" 
                  className="h-[400px] object-contain"
                />
                <div className="absolute bottom-10 right-0">
                  <div className="bg-[#48B9A0] border-2 border-white rounded-xl p-3">
                    <div className="bg-[#48B9A0] border-2 border-white rounded-xl p-2 -mt-8 mb-3">
                      <p className="font-['Baloo'] text-white text-sm">Casquinha baunilha</p>
                    </div>
                    <div className="flex items-center">
                      <span className="font-['Baloo'] text-white text-xl mr-2">R$</span>
                      <span className="font-['Baloo'] text-white text-5xl">00</span>
                      <span className="font-['Baloo'] text-white text-xl">,00</span>
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 transform -translate-y-1/2 bg-white rounded-full h-8 w-8 flex items-center justify-center">
                    <span className="font-['Baloo'] text-[#48B9A0] transform -rotate-90">V</span>
                  </div>
                </div>
              </div>
              
              {/* Strawberry Ice Cream */}
              <div className="relative mx-4">
                <img 
                  src="/lovable-uploads/51c817c8-7f16-499c-9d48-bbcf100eba34.png" 
                  alt="Casquinha de Morango" 
                  className="h-[400px] object-contain"
                />
                <div className="absolute bottom-10 right-0">
                  <div className="bg-[#48B9A0] border-2 border-white rounded-xl p-3">
                    <div className="bg-[#48B9A0] border-2 border-white rounded-xl p-2 -mt-8 mb-3">
                      <p className="font-['Baloo'] text-white text-sm">Casquinha morango</p>
                    </div>
                    <div className="flex items-center">
                      <span className="font-['Baloo'] text-white text-xl mr-2">R$</span>
                      <span className="font-['Baloo'] text-white text-5xl">00</span>
                      <span className="font-['Baloo'] text-white text-xl">,00</span>
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 transform -translate-y-1/2 bg-white rounded-full h-8 w-8 flex items-center justify-center">
                    <span className="font-['Baloo'] text-[#48B9A0] transform -rotate-90">V</span>
                  </div>
                </div>
              </div>
              
              {/* Mixed Ice Cream */}
              <div className="relative mt-12 mx-4">
                <img 
                  src="/lovable-uploads/c6d73a90-919e-4ff5-8ef4-289bf0e45459.png" 
                  alt="Casquinha Mista" 
                  className="h-[400px] object-contain"
                />
                <div className="absolute bottom-10 right-0">
                  <div className="bg-[#48B9A0] border-2 border-white rounded-xl p-3">
                    <div className="bg-[#48B9A0] border-2 border-white rounded-xl p-2 -mt-8 mb-3">
                      <p className="font-['Baloo'] text-white text-sm">Casquinha mista</p>
                    </div>
                    <div className="flex items-center">
                      <span className="font-['Baloo'] text-white text-xl mr-2">R$</span>
                      <span className="font-['Baloo'] text-white text-5xl">00</span>
                      <span className="font-['Baloo'] text-white text-xl">,00</span>
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 transform -translate-y-1/2 bg-white rounded-full h-8 w-8 flex items-center justify-center">
                    <span className="font-['Baloo'] text-[#48B9A0] transform -rotate-90">V</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Load More Button */}
        <div className="mt-16 text-center md:text-left ml-0 md:ml-8">
          <button className="border-2 border-white text-white font-['Poppins'] text-3xl px-8 py-4 rounded-xl hover:bg-white hover:text-[#48B9A0] transition-all">
            Carregar mais
          </button>
        </div>
        
        {/* Social Media Icons - Placeholder for now */}
        <div className="absolute bottom-8 right-8 flex space-x-4">
          <div className="w-10 h-10 bg-white rounded-full"></div>
          <div className="w-10 h-10 bg-white rounded-full"></div>
          <div className="w-10 h-10 bg-white rounded-full"></div>
          <div className="w-10 h-10 bg-white rounded-full"></div>
        </div>
      </div>
      
      {/* Background Image - Bottom Right */}
      <div className="absolute -right-16 bottom-0 pointer-events-none opacity-20">
        <img 
          src="/lovable-uploads/8bf12141-fce0-4e84-beaf-58c17fbfa9bf.png" 
          alt="Background" 
          className="w-[400px] h-[400px] object-contain transform -scale-x-100" 
        />
      </div>
    </div>
  );
};

export default Sabores;
