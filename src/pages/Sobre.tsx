
import Header from "@/components/Header";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-eiscreme">
      <div className="container mx-auto">
        <Header />
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="font-inter font-bold text-4xl text-white mb-4">SOBRE NÓS</h1>
          <p className="font-inder text-xl text-white text-center max-w-2xl">
            Página em construção. Em breve você conhecerá mais sobre a história da Beckermann Eiscreme!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
