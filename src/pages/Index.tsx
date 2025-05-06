
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
              {/* Strawberry ice cream - left side (previously Teostra) */}
              <div className="absolute top-20 left-0 transform -rotate-12 w-[250px] h-[400px] z-10">
                <img 
                  src="/lovable-uploads/319e57c8-e139-4be2-ba2f-7246aa56cc75.png" 
                  alt="Sorvete Morango" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-1/3 left-0">
                  <IceCreamLabel 
                    name="TEOSTRA" 
                    description="SUPREMACIA ESCARLATE" 
                    size="small"
                  />
                </div>
              </div>
              
              {/* Green ice cream - middle (previously Deviljho) */}
              <div className="absolute top-10 left-16 w-[300px] h-[450px] z-30">
                <img 
                  src="/lovable-uploads/18a3057d-2fa8-47d4-b4c9-9a1077c684cd.png" 
                  alt="Sorvete Verde" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-1/3 left-16">
                  <IceCreamLabel 
                    name="DEVILJHO" 
                    description="DESTRUIÇÃO ESMERALDA" 
                    size="medium"
                  />
                </div>
              </div>
              
              {/* Chocolate ice cream - right bottom (previously Balahara) */}
              <div className="absolute bottom-0 left-28 transform rotate-6 w-[250px] h-[350px] z-20">
                <img 
                  src="/lovable-uploads/5d1a9a06-0992-4310-946d-c50d1953eebf.png" 
                  alt="Sorvete Chocolate" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-8 left-12">
                  <IceCreamLabel 
                    name="BALAHARA" 
                    description="DESTRUIÇÃO ESMERALDA" 
                    size="small"
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
