
const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center md:items-end px-4 md:px-10 mt-8 md:mt-0">
      <div className="max-w-[628px] flex flex-col items-center md:items-start">
        <h2 className="font-inter font-bold text-4xl md:text-6xl text-white text-center md:text-left">
          SORVETERIA ALEMÃ
        </h2>
        
        <p className="font-kavoon text-xl md:text-2xl text-white text-center md:text-left mt-4">
          O MELHOR SORVETE ALEMÃO! NO BRASIL...
        </p>
        
        <div className="mt-4 bg-transparent p-2.5">
          <p className="font-inder text-lg md:text-2xl text-white text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        
        <button className="mt-6 md:mt-10 px-8 py-4 bg-eiscreme-dark text-white rounded-lg font-inder text-xl md:text-2xl">
          COMPRE AGORA!
        </button>
      </div>
    </div>
  );
};

export default Hero;
