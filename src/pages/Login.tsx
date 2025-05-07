
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ShoppingCart, Search } from "lucide-react";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would add authentication logic
  };

  const backgroundLogos = [
    { left: "589.17px", top: "-55.79px" },
    { left: "918.53px", top: "-141px" },
    { left: "1275.53px", top: "150px" },
    { left: "879.53px", top: "211px" },
    { left: "514.53px", top: "94px" },
    { left: "867.53px", top: "394px" },
    { left: "559.53px", top: "484px" },
    { left: "951.53px", top: "602px" },
    { left: "574.53px", top: "641px" },
    { left: "1229.53px", top: "722px" },
    { left: "906.53px", top: "70px" },
    { left: "500.53px", top: "281px" },
    { left: "1244.53px", top: "492px" },
    { left: "1187.53px", top: "-18px" },
    { left: "1312.53px", top: "-141px" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#349882]">
      {/* Background logos pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundLogos.map((position, index) => (
          <div 
            key={index} 
            className="absolute font-kavoon text-[#48B9A0] text-[59.6347px] leading-[75px] flex justify-center items-center p-[14.9087px] gap-[14.91px]"
            style={{
              width: "397.82px",
              height: "179.82px",
              left: position.left,
              top: position.top,
              transform: "rotate(10.1deg)",
              opacity: 0.15,
              pointerEvents: "none",
            }}
          >
            <div style={{ width: "368px", height: "150px" }}>
              Beckermann<br/>Eiscreme
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row w-full min-h-screen relative z-10">
        {/* Login form container */}
        <div className="w-full md:w-1/2 lg:w-2/5 bg-white shadow-lg min-h-screen flex flex-col">
          {/* Logo */}
          <div className="p-6 ml-4">
            <h1 className="font-kavoon text-[#48B9A0] text-3xl leading-10">
              Beckermann<br />Eiscreme
            </h1>
          </div>

          {/* Login Form */}
          <div className="flex flex-col px-8 md:px-12 w-full">
            {/* Header */}
            <div className="bg-[#48B9A0] w-full p-4 shadow-md mb-6">
              <h2 className="font-inter font-bold text-white text-xl">
                Bem-vindo ao sistema! Faça seu login...
              </h2>
            </div>

            {/* Account Data */}
            <div className="flex justify-center mb-8">
              <div className="bg-[#48B9A0] text-white font-bold py-3 px-6 rounded-full">
                Dados da Conta
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800/80">E-mail</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="E-mail" 
                          className="bg-gray-200 border-none h-12" 
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800/80">Senha</FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="Senha" 
                          className="bg-gray-200 border-none h-12" 
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                {isRegistering && (
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-800/80">Confirmar Senha</FormLabel>
                        <FormControl>
                          <Input 
                            type="password" 
                            placeholder="Confirmar Senha" 
                            className="bg-gray-200 border-none h-12" 
                            {...field} 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                )}

                <div className="flex justify-end pt-4">
                  <Button 
                    type="submit" 
                    className="bg-[#48B9A0] text-white hover:bg-[#338170]"
                  >
                    {isRegistering ? "CADASTRAR" : "ENTRAR"}
                  </Button>
                </div>
                
                <div className="text-center pt-4">
                  <button 
                    type="button" 
                    className="text-[#48B9A0] underline"
                    onClick={() => setIsRegistering(!isRegistering)}
                  >
                    {isRegistering ? "Já tem uma conta? Faça login" : "Não tem uma conta? Cadastre-se"}
                  </button>
                </div>
              </form>
            </Form>
          </div>
        </div>
        
        {/* Right side branding */}
        <div className="hidden md:block w-1/2 lg:w-3/5 relative overflow-hidden">
          <div className="absolute inset-0 flex flex-col justify-center items-center p-8 z-10">
            <h2 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center mb-4">
              SORVETERIA ALEMÃ
            </h2>
            <p className="font-kavoon text-xl md:text-2xl text-white text-center">
              O MELHOR SORVETE ALEMÃO! NO BRASIL...
            </p>
          </div>
          
          {/* Ice cream image - TeostraIC */}
          <div 
            className="absolute" 
            style={{
              width: "737.96px", 
              height: "832.14px", 
              left: "920.38px", 
              top: "225px", 
              transform: "rotate(32.69deg)"
            }}
          >
            <img 
              src="/lovable-uploads/ce34802a-f637-4a5e-b1fa-82a3d721e9aa.png" 
              alt="Sorvete" 
              className="absolute"
              style={{
                left: "60.89%", 
                right: "-60.89%", 
                top: "0%", 
                bottom: "0%", 
                transform: "rotate(32.69deg)",
                maxWidth: "none"
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
