
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IceCreamLabel from "@/components/IceCreamLabel";

const Index = () => {
  return (
    <div className="min-h-screen bg-eiscreme relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <Header />
        
        <div className="flex flex-col md:flex-row mt-8">
          <div className="md:w-1/2 relative">
            {/* Ice cream container with three ice cream images */}
            <div className="relative h-[500px] md:h-[600px]">
              {/* Teostra - Red ice cream */}
              <div className="absolute top-[33px] left-[120px] w-[447px] h-[753px] z-10" style={{ transform: 'rotate(32.69deg)' }}>
                <img 
                  src="/lovable-uploads/319e57c8-e139-4be2-ba2f-7246aa56cc75.png" 
                  alt="Teostra Sorvete Vermelho" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-[536px] left-[-2px]">
                  <div className="relative">
                    <span className="absolute top-[-1px] left-[10px] font-seaweed text-white text-[9.5px] leading-[13px]">
                      SUPREMACIA ESCARLATE
                    </span>
                    <div className="flex justify-center items-center pt-4 w-[121px]">
                      <span className="font-lalezar text-white text-[25.5px] leading-[40px]">
                        EISCREME
                      </span>
                    </div>
                    <span className="absolute top-[32px] left-[34px] font-lalezar text-white text-[12.7px] leading-[20px]">
                      TEOSTRA
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Deviljho - Green ice cream */}
              <div className="absolute top-[53px] left-[455px] w-[622px] h-[852px] z-20" style={{ transform: 'rotate(57.18deg)' }}>
                <img 
                  src="/lovable-uploads/18a3057d-2fa8-47d4-b4c9-9a1077c684cd.png" 
                  alt="Deviljho Sorvete Verde" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-[753px] left-[179px]">
                  <div className="relative">
                    <span className="absolute top-[-1px] left-[10px] font-seaweed text-white text-[8.4px] leading-[11px]">
                      DESTRUIÇÃO ESMERALDA
                    </span>
                    <div className="flex justify-center items-center pt-4 w-[106px]">
                      <span className="font-lalezar text-white text-[22.3px] leading-[35px]">
                        EISCREME
                      </span>
                    </div>
                    <span className="absolute top-[27px] left-[30px] font-lalezar text-white text-[11.1px] leading-[17px]">
                      DEVILJHO
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Balahara - Chocolate ice cream */}
              <div className="absolute top-[479px] left-[645px] w-[446px] h-[714px] z-30" style={{ transform: 'rotate(85.74deg)' }}>
                <img 
                  src="/lovable-uploads/5d1a9a06-0992-4310-946d-c50d1953eebf.png" 
                  alt="Balahara Sorvete Chocolate" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-[593px] left-[119px]">
                  <div className="relative">
                    <span className="absolute top-[-1px] left-[32px] font-seaweed text-white text-[10.8px] leading-[15px]">
                      DESTRUIÇÃO ESMERALDA
                    </span>
                    <div className="flex justify-center items-center pt-4 w-[137px]">
                      <span className="font-lalezar text-white text-[28.9px] leading-[45px]">
                        EISCREME
                      </span>
                    </div>
                    <span className="absolute top-[36px] left-[35px] font-lalezar text-white text-[14.4px] leading-[23px]">
                      BALAHARA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <Hero />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
