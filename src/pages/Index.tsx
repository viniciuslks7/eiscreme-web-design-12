
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
            {/* Ice cream image goes here - using placeholder for now */}
            <div className="relative h-[400px] md:h-[500px]">
              {/* Ice cream labels */}
              <div className="absolute top-1/2 left-8 transform -rotate-12">
                <IceCreamLabel 
                  name="TEOSTRA" 
                  description="SUPREMACIA ESCARLATE" 
                  size="medium"
                />
              </div>
              
              <div className="absolute bottom-20 left-24 transform rotate-6">
                <IceCreamLabel 
                  name="BALAHARA" 
                  description="DESTRUIÇÃO ESMERALDA" 
                  size="large"
                />
              </div>
              
              <div className="absolute bottom-4 left-36 transform rotate-3">
                <IceCreamLabel 
                  name="DEVILJHO" 
                  description="DESTRUIÇÃO ESMERALDA" 
                  size="small"
                />
              </div>
              
              <img 
                src="/lovable-uploads/1309c62a-095f-49f3-98dd-615868e44a62.png" 
                alt="Sorvetes Beckermann" 
                className="absolute w-full h-full object-contain"
              />
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
