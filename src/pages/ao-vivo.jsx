
import React from "react";
import { motion } from "framer-motion";
import { Youtube, MessageCircle, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AoVivoPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Youtube className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ao Vivo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Assista nossos cultos ao vivo e participe da nossa comunidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.bible.com/bible/1930/GEN.1.NVT"
              className="w-full h-full min-h-[500px]"
              frameBorder="0"
            ></iframe>
          </div>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="chat" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="chat">Chat ao Vivo</TabsTrigger>
              <TabsTrigger value="oracao">Pedido de Oração</TabsTrigger>
              <TabsTrigger value="dizimos">Dízimos e Ofertas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="chat">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-64 p-4">
                  <div className="text-gray-600 dark:text-gray-300 text-center">
                    Carregando chat...
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="oracao">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <MessageCircle className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Pedido de Oração</h3>
                <textarea
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 p-3 mb-4"
                  rows="4"
                  placeholder="Compartilhe seu pedido de oração"
                ></textarea>
                <Button className="w-full">Enviar Pedido</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="dizimos">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <Heart className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Dízimos e Ofertas</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Contribua com a obra de Deus através de seus dízimos e ofertas.
                </p>
                <Button className="w-full" variant="outline">
                  Contribuir
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
