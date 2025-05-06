
import { Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-8 w-full">
      <div className="flex items-center justify-center p-2.5 mb-4 md:mb-0">
        <h1 className="font-kavoon text-white text-4xl leading-[50px]">
          Beckermann<br />Eiscreme
        </h1>
      </div>
      
      <nav className="flex items-center gap-4 md:gap-8">
        <Link to="/" className="text-white font-inter font-semibold text-xl md:text-2xl">
          HOME
        </Link>
        <Link to="/sabores" className="text-white font-inter font-semibold text-xl md:text-2xl">
          SABORES
        </Link>
        <Link to="/sobre" className="text-white font-inter font-semibold text-xl md:text-2xl">
          SOBRE
        </Link>
        <Link to="/contato" className="text-white font-inter font-semibold text-xl md:text-2xl">
          CONTATO
        </Link>
        <Link to="/comprar" className="text-white font-inter font-semibold text-xl md:text-2xl">
          COMPRAR
        </Link>
      </nav>
      
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <button className="p-2.5 text-white">
          <Search className="w-7 h-7" />
        </button>
        <button className="text-white">
          <ShoppingCart className="w-7 h-7" />
        </button>
      </div>
    </header>
  );
};

export default Header;
