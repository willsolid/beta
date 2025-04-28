
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HomePage } from "@/pages/home";
import { SobrePage } from "@/pages/sobre";
import { MinisteriosPage } from "@/pages/ministerios";
import { EventosPage } from "@/pages/eventos";
import { AoVivoPage } from "@/pages/ao-vivo";
import { ContatoPage } from "@/pages/contato";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sobre" element={<SobrePage />} />
              <Route path="/ministerios" element={<MinisteriosPage />} />
              <Route path="/eventos" element={<EventosPage />} />
              <Route path="/ao-vivo" element={<AoVivoPage />} />
              <Route path="/contato" element={<ContatoPage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
