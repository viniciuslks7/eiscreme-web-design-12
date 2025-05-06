
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

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#349882]">
      {/* Background logos pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, index) => (
          <div 
            key={index} 
            className="absolute font-kavoon text-[#48B9A0] text-5xl md:text-6xl transform rotate-[10deg]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.15,
              pointerEvents: "none",
            }}
          >
            Beckermann<br/>Eiscreme
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
          
          {/* Ice cream image */}
          <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/8">
            <img 
              src="/lovable-uploads/8b63b1d8-6044-41dd-8847-c6ef333d200e.png" 
              alt="Sorvete de Chocolate" 
              className="w-[80%] h-auto max-h-[500px] object-contain transform rotate-[16deg]" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
