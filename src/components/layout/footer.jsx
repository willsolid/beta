
import React from "react";
import { Link } from "react-router-dom";
import { Church, Clock, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Church className="h-6 w-6" />
              <span className="text-lg font-bold">IBMI</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Horários de Culto</h3>
            <div className="space-y-1 text-xs text-gray-400">
              <p>Quinta: 20h</p>
              <p>Domingo: 10h30 e 18h</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Contato</h3>
            <div className="space-y-1 text-xs text-gray-400">
              <p className="flex items-center">
                <Phone className="h-3 w-3 mr-1" />
                (11) 99939-4550
              </p>
              <p className="flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                R. Cláudio Sérgio Bere, 205
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Links Rápidos</h3>
            <div className="grid grid-cols-2 gap-1 text-xs">
              <Link to="/eventos" className="footer-link">Eventos</Link>
              <Link to="/ao-vivo" className="footer-link">Ao Vivo</Link>
              <Link to="/ministerios" className="footer-link">Ministérios</Link>
              <Link to="/contato" className="footer-link">Contato</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-4 pt-4 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} IBMI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
