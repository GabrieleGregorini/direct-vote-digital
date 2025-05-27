
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-democracy-blue to-democracy-purple overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                  🗳️ Partecipa attivamente alle decisioni del tuo paese attraverso una piattaforma sicura, trasparente e accessibile
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Direct Democracy
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
                Partecipa attivamente alle decisioni del tuo paese attraverso una piattaforma sicura, trasparente e accessibile
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate('/sondaggi')}
                  size="lg" 
                  className="bg-white text-democracy-blue hover:bg-white/90 font-semibold px-8 py-4 text-lg"
                >
                  Esplora i Sondaggi
                </Button>
                <Button 
                  onClick={() => navigate('/login')}
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
                >
                  Accedi
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                <CardHeader className="text-center pb-3">
                  <div className="w-16 h-16 bg-democracy-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <span className="text-democracy-blue font-bold text-xl">D</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-democracy-blue">
                    Direct Democracy Project
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  <p className="mb-4">
                    Benvenuto sulla piattaforma di democrazia partecipativa digitale
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🔒</div>
                      <div>Sicuro</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-1">📊</div>
                      <div>Trasparente</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-1">🌐</div>
                      <div>Accessibile</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              La Democrazia in Numeri
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Statistiche in tempo reale della partecipazione democratica
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard
              title="Partecipazione Attiva"
              value="125,847"
              description="Cittadini registrati"
              icon="👥"
              trend={{ value: 12, isPositive: true }}
              color="blue"
            />
            <StatsCard
              title="Sicurezza Garantita"
              value="99.9%"
              description="Uptime piattaforma"
              icon="🔒"
              trend={{ value: 0.1, isPositive: true }}
              color="green"
            />
            <StatsCard
              title="Analisi Dati"
              value="1,250"
              description="Sondaggi completati"
              icon="📊"
              trend={{ value: 8, isPositive: true }}
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Come Funziona
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Quattro semplici passi per partecipare alla democrazia digitale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Registrati", desc: "Accedi con SPID o CIE per garantire sicurezza", icon: "📝" },
              { step: 2, title: "Esplora", desc: "Sfoglia i sondaggi per categoria e regione di interesse", icon: "🔍" },
              { step: 3, title: "Vota", desc: "Esprimi la tua opinione sui temi che ti stanno a cuore", icon: "🗳️" },
              { step: 4, title: "Analizza", desc: "Visualizza risultati e statistiche aggiornate in tempo reale", icon: "📈" }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-democracy-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div className="w-8 h-8 bg-democracy-blue text-white rounded-full mx-auto mb-3 flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-democracy-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Resta Aggiornato
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Iscriviti alla newsletter per ricevere notifiche sui nuovi sondaggi e sugli aggiornamenti della piattaforma
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="La tua email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none"
            />
            <Button className="bg-white text-democracy-blue hover:bg-white/90 font-semibold px-6">
              Iscriviti
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-democracy-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D.D.P</span>
                </div>
                <span className="font-semibold">Direct Democracy Project</span>
              </div>
              <p className="text-gray-400 text-sm">
                Piattaforma di democrazia partecipativa digitale per una società più inclusiva e trasparente.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Seguici su</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">📘</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">📸</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">🔗</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">🎵</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">▶️</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Direct Democracy Project ©</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Note Legali</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trattamento Dati</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Contatti</h4>
              <p className="text-gray-400 text-sm">
                Gabriele Gregorini<br/>
                gabrielegregorini7@gmail.com
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 Direct Democracy Project. Tutti i diritti riservati.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
