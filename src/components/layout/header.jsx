
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Church, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Church className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold dark:text-white">IBMI</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
              Início
            </Link>
            <Link to="/sobre" className={`nav-link ${location.pathname === "/sobre" ? "active" : ""}`}>
              Sobre
            </Link>
            <Link to="/ministerios" className={`nav-link ${location.pathname === "/ministerios" ? "active" : ""}`}>
              Ministérios
            </Link>
            <Link to="/eventos" className={`nav-link ${location.pathname === "/eventos" ? "active" : ""}`}>
              Eventos
            </Link>
            <Link to="/ao-vivo" className={`nav-link ${location.pathname === "/ao-vivo" ? "active" : ""}`}>
              Ao Vivo
            </Link>
            <Link to="/contato" className={`nav-link ${location.pathname === "/contato" ? "active" : ""}`}>
              Contato
            </Link>
            <ThemeToggle />
            <Button variant="outline" size="sm">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                to="/sobre"
                className={`nav-link ${location.pathname === "/sobre" ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                to="/ministerios"
                className={`nav-link ${location.pathname === "/ministerios" ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Ministérios
              </Link>
              <Link
                to="/eventos"
                className={`nav-link ${location.pathname === "/eventos" ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Eventos
              </Link>
              <Link
                to="/ao-vivo"
                className={`nav-link ${location.pathname === "/ao-vivo" ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Ao Vivo
              </Link>
              <Link
                to="/contato"
                className={`nav-link ${location.pathname === "/contato" ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Button className="w-full" variant="outline">
                Login
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
