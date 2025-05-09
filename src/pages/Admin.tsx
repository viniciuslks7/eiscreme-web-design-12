
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, Edit, Trash, Plus, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  date: string;
  description: string;
  selected: boolean;
}

const Admin = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 12, name: "Ernesto", category: "Ché Guevara", price: "30 Abril 2025 16:00 pm", date: "30/04/2025", description: "Sorvete gostoso", selected: false },
    { id: 95, name: "Bilbo", category: "Bolseiro", price: "30 Abril 2025 16:00 pm", date: "30/04/2025", description: "Sorvete gostoso", selected: true },
    { id: 11, name: "Vida", category: "Loca", price: "30 Abril 2025 16:00 pm", date: "30/04/2025", description: "Sorvete gostoso", selected: true },
    { id: 666, name: "Luci", category: "Fer", price: "30 Abril 2025 16:00 pm", date: "30/04/2025", description: "Sorvete gostoso", selected: true },
    { id: 23, name: "Tony", category: "Tornado", price: "30 Abril 2025 16:00 pm", date: "30/04/2025", description: "Sorvete gostoso", selected: true },
    { id: 3, name: "Saci", category: "Pererê", price: "30 Abril 2025 16:00 pm", date: "30/04/2025", description: "Sorvete gostoso", selected: false }
  ]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 221;
  
  const toggleSelect = (id: number) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, selected: !product.selected } : product
    ));
  };

  return (
    <div className="min-h-screen bg-eiscreme">
      {/* Header */}
      <div className="w-full bg-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-eiscreme font-kavoon text-2xl">
            Beckermann<br />
            Eiscreme
          </div>
          
          <div className="flex items-center">
            <div className="text-right mr-4">
              <p className="text-eiscreme font-poppins text-xl">YURI</p>
              <p className="text-gray-400 font-poppins">Admin</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-eiscreme flex items-center justify-center">
              <span className="text-white font-bold text-xl">Y</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Table header */}
      <div className="container mx-auto bg-[#226052] mt-12 py-6">
        <div className="grid grid-cols-12 text-white font-poppins">
          <div className="col-span-1 text-center">X</div>
          <div className="col-span-1 text-center">Action</div>
          <div className="col-span-2 text-center">Produto Id</div>
          <div className="col-span-2 text-center">Nome</div>
          <div className="col-span-2 text-center">Categoria</div>
          <div className="col-span-2 text-center">Valor</div>
          <div className="col-span-2 text-center">Descrição</div>
        </div>
      </div>
      
      {/* Table rows */}
      {products.map((product) => (
        <div key={product.id} className="container mx-auto border-b border-white">
          <div className="grid grid-cols-12 py-4 text-white font-questrial">
            <div className="col-span-1 flex justify-center items-center">
              <input 
                type="checkbox" 
                checked={product.selected} 
                onChange={() => toggleSelect(product.id)}
                className="w-5 h-5"
              />
            </div>
            
            <div className="col-span-1 flex justify-center gap-2">
              <button className="bg-[#D0210E] w-12 h-10 flex items-center justify-center rounded">
                <Eye className="text-white" size={16} />
              </button>
              <button className="bg-[#CF7D1E] w-12 h-10 flex items-center justify-center rounded">
                <Edit className="text-white" size={16} />
              </button>
              <button className="bg-[#944396] w-12 h-10 flex items-center justify-center rounded relative">
                <span className="absolute bg-white w-6 h-6 rounded-full flex items-center justify-center">
                  <span className="text-[#944396] text-xs font-bold">x</span>
                </span>
              </button>
            </div>
            
            <div className="col-span-2 flex items-center justify-center">
              <span className="text-lg">{product.id}</span>
            </div>
            
            <div className="col-span-2 flex items-center justify-center">
              <span className="text-lg">{product.name}</span>
            </div>
            
            <div className="col-span-2 flex items-center justify-center">
              <span className="text-lg">{product.category}</span>
            </div>
            
            <div className="col-span-2 flex items-center justify-center">
              <span className="text-lg">{product.price}</span>
            </div>
            
            <div className="col-span-2 flex items-center justify-center">
              <span className="text-lg">{product.description}</span>
            </div>
          </div>
        </div>
      ))}
      
      {/* Action buttons */}
      <div className="container mx-auto mt-6 flex space-x-4">
        <Button className="bg-[#226052] text-white font-nunito flex items-center">
          <Plus size={16} className="mr-1" />
          NOVO
        </Button>
        
        <Button className="bg-[#226052] text-white font-nunito flex items-center">
          <Trash size={16} className="mr-1" />
          EXCLUIR TODOS
        </Button>
      </div>
      
      {/* Pagination */}
      <div className="container mx-auto mt-8 flex justify-between items-center text-white font-nunito">
        <div className="flex items-center">
          <span className="mr-4">Página</span>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5, 6, 7].map(page => (
              <button 
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`${currentPage === page ? 'font-bold underline' : ''}`}
              >
                {page}
              </button>
            ))}
            <button className="ml-2">
              <ChevronRight size={16} />
            </button>
            <button>
              <ChevronRight size={16} />
              <ChevronRight size={16} className="-ml-3" />
            </button>
          </div>
        </div>
        
        <div>
          <span>Resultado 1 de 221</span>
        </div>
      </div>
    </div>
  );
};

export default Admin;
