
import React from "react";
import { motion } from "framer-motion";
import { Music, Baby, Radio, Heart, UserPlus, HelpingHand as PrayingHands, Globe } from 'lucide-react';

export function MinisteriosPage() {
  const ministerios = [
    {
      icon: <Music className="w-12 h-12 text-primary" />,
      titulo: "Ministério de Louvor",
      descricao: "Adoração e música para glorificar a Deus através de cânticos e instrumentos."
    },
    {
      icon: <Baby className="w-12 h-12 text-primary" />,
      titulo: "Ministério Infantil",
      descricao: "Ensinando as crianças no caminho do Senhor com atividades lúdicas e educativas."
    },
    {
      icon: <Radio className="w-12 h-12 text-primary" />,
      titulo: "Ministério de Comunicação",
      descricao: "Levando a mensagem do evangelho através das mídias digitais e comunicação."
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      titulo: "Ministério de Ação Social",
      descricao: "Ajudando ao próximo através de ações sociais e trabalhos voluntários."
    },
    {
      icon: <UserPlus className="w-12 h-12 text-primary" />,
      titulo: "Ministério de Boas Vindas",
      descricao: "Acolhendo visitantes e novos membros com amor e carinho."
    },
    {
      icon: <PrayingHands className="w-12 h-12 text-primary" />,
      titulo: "Ministério de Oração",
      descricao: "Intercedendo pela igreja e seus membros através da oração."
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      titulo: "Ministério de Missões",
      descricao: "Alcançando vidas através do trabalho missionário no Brasil e no mundo."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nossos Ministérios
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Conheça as áreas de atuação da nossa igreja
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministerios.map((ministerio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{ministerio.icon}</div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{ministerio.titulo}</h3>
                <p className="text-gray-600 dark:text-gray-300">{ministerio.descricao}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
