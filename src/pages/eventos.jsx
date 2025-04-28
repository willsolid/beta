
import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export function EventosPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Agenda de Eventos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Confira nossa programação e participe dos nossos eventos
          </p>
        </motion.div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=c_5a709b7bdbd7a3d85a70194a0049dd87169cd59bb57964300842006ef032fa7e%40group.calendar.google.com&ctz=America%2FSao_Paulo"
            className="w-full h-[600px] rounded-lg border-0"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
