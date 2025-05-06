
import Header from "@/components/Header";

const Contato = () => {
  return (
    <div className="min-h-screen bg-eiscreme">
      <div className="container mx-auto">
        <Header />
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="font-inter font-bold text-4xl text-white mb-4">CONTATO</h1>
          <p className="font-inder text-xl text-white text-center max-w-2xl">
            Página em construção. Em breve você poderá entrar em contato conosco por aqui!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contato;
