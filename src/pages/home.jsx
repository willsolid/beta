
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";

export function HomePage() {
  const nextEvents = [
    { title: "Culto de Quinta", time: "Quinta 20:00", link: "/eventos" },
    { title: "Culto de Domingo", time: "Domingo 10:30", link: "/eventos" },
    { title: "Culto da Noite", time: "Domingo 18:00", link: "/eventos" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <img  
          className="absolute inset-0 w-full h-full object-cover"
          alt="Igreja IBMI" src="https://images.unsplash.com/photo-1647886481579-4bbb81bf00e2" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Igreja Batista Memorial em Interlagos
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Uma igreja que ama a Deus e as pessoas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ao-vivo">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Assista Ao Vivo
                </Button>
              </Link>
              <Link to="/sobre">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                  Conheça Nossa Igreja
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 dark:text-white">Bem-vindo à IBMI</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Faça parte da nossa comunidade e cresça na fé junto conosco.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                />
                <Button className="w-full">Cadastrar</Button>
              </form>
              <div className="mt-4 flex gap-4">
                <Button variant="outline" className="flex-1">
                  Login com Google
                </Button>
                <Button variant="outline" className="flex-1">
                  Login com Facebook
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-white flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Próximos Eventos
              </h3>
              <div className="space-y-4">
                {nextEvents.map((event, index) => (
                  <Link
                    key={index}
                    to={event.link}
                    className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-primary mr-2" />
                      <div>
                        <p className="font-medium dark:text-white">{event.title}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{event.time}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
