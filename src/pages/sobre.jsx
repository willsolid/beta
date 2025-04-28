
import React from "react";
import { motion } from "framer-motion";
import { Church, Users, Book, Heart, Mic2, HeartHandshake as HandsClapping } from 'lucide-react';

export function SobrePage() {
  const pillars = [
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "EVANGELISMO",
      description: "Alcançar vidas para Cristo",
      highlight: "alcançar"
    },
    {
      icon: <Book className="w-12 h-12 text-primary" />,
      title: "DISCIPULADO",
      description: "Formar discípulos comprometidos",
      highlight: "ensiná-las"
    },
    {
      icon: <HandsClapping className="w-12 h-12 text-primary" />,
      title: "ADORAÇÃO",
      description: "Cultuar ao Senhor em espírito e verdade",
      highlight: "adorarem"
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "COMUNHÃO",
      description: "Crescer juntos em Cristo",
      highlight: "uni-las"
    },
    {
      icon: <Mic2 className="w-12 h-12 text-primary" />,
      title: "SERVIÇO",
      description: "Servir a Deus e ao próximo",
      highlight: "serviço"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Church className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Nossa Visão
          </h1>
          
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed">
              "Existimos para <span className="text-primary font-bold">alcançar</span> vidas, 
              incentivá-las a um relacionamento pessoal com Deus e <span className="text-primary font-bold">ensiná-las</span> a 
              serem discípulos, a <span className="text-primary font-bold">adorarem</span> ao Senhor verdadeiramente, 
              e <span className="text-primary font-bold">uni-las</span> a outros cristãos 
              no <span className="text-primary font-bold">serviço</span> do Rei Jesus."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{pillar.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
