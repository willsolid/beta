
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContatoPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <MessageCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Estamos aqui para te atender
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-6 dark:text-white">Informações de Contato</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold dark:text-white">Endereço</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    R. Cláudio Sérgio Bere, 205 - Jardim Satélite, São Paulo - SP, 04815-110
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold dark:text-white">Telefone</h3>
                  <p className="text-gray-600 dark:text-gray-300">(11) 99939-4550</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold dark:text-white">E-mail</h3>
                  <p className="text-gray-600 dark:text-gray-300">contato@batistainterlagos.com.br</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/5511999394550"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-6 dark:text-white">Envie uma Mensagem</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 p-3"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 p-3"
                  placeholder="Seu e-mail"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Mensagem
                </label>
                <textarea
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 p-3"
                  rows="4"
                  placeholder="Sua mensagem"
                ></textarea>
              </div>
              <Button className="w-full">Enviar Mensagem</Button>
            </form>
          </motion.div>
        </div>

        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8155851285396!2d-46.67844792375411!3d-23.6751280961651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5036539648d5%3A0x307f2d9ae0d5d227!2sR.%20Cl%C3%A1udio%20S%C3%A9rgio%20Bere%2C%20205%20-%20Jardim%20Sat%C3%A9lite%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004815-110!5e0!3m2!1spt-BR!2sbr!4v1708786543921!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
