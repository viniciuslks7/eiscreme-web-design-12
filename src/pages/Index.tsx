
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
              {/* Teostra - Green ice cream */}
              <div className="absolute top-1/4 left-0 transform -rotate-[32.69deg] w-[447px] h-[753px] z-10">
                <img 
                  src="/lovable-uploads/18a3057d-2fa8-47d4-b4c9-9a1077c684cd.png" 
                  alt="Teostra Sorvete Verde" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-1/2 left-0 transform -rotate-12">
                  <IceCreamLabel 
                    name="TEOSTRA" 
                    description="SUPREMACIA ESCARLATE" 
                    size="medium"
                  />
                </div>
              </div>
              
              {/* Deviljho - Strawberry ice cream */}
              <div className="absolute top-8 left-32 transform -rotate-[57.18deg] w-[622px] h-[852px] z-20">
                <img 
                  src="/lovable-uploads/319e57c8-e139-4be2-ba2f-7246aa56cc75.png" 
                  alt="Deviljho Sorvete Morango" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-16 left-16 transform rotate-3">
                  <IceCreamLabel 
                    name="DEVILJHO" 
                    description="DESTRUIÇÃO ESMERALDA" 
                    size="small"
                  />
                </div>
              </div>
              
              {/* Balahara - Chocolate ice cream */}
              <div className="absolute top-64 left-36 transform -rotate-[85.74deg] w-[446px] h-[713px] z-30">
                <img 
                  src="/lovable-uploads/5d1a9a06-0992-4310-946d-c50d1953eebf.png" 
                  alt="Balahara Sorvete Chocolate" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-1/4 left-12 transform rotate-6">
                  <IceCreamLabel 
                    name="BALAHARA" 
                    description="DESTRUIÇÃO ESMERALDA" 
                    size="large"
                  />
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
