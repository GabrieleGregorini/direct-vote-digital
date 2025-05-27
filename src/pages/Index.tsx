
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section - Identical to graphic */}
      <section className="bg-[#1e3a8a] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Direct Democracy
                </h1>
                <h2 className="text-xl lg:text-2xl font-medium text-blue-100">
                  Democrazia Partecipativa Digitale
                </h2>
                <p className="text-lg text-blue-50 leading-relaxed">
                  Partecipa attivamente alle decisioni del tuo paese attraverso una piattaforma sicura, trasparente e accessibile per tutti i cittadini
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate('/sondaggi')}
                  size="lg" 
                  className="bg-white text-[#1e3a8a] hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg"
                >
                  Esplora i Sondaggi
                </Button>
                <Button 
                  onClick={() => navigate('/login')}
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
                >
                  Accedi con SPID
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">🗳️</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Vota Ora</h3>
                    <p className="text-blue-100 mb-4">Partecipa ai sondaggi attivi</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🔒</div>
                      <div className="text-blue-100">Sicuro</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">📊</div>
                      <div className="text-blue-100">Trasparente</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">⚡</div>
                      <div className="text-blue-100">Real-time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Clean white background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              La Democrazia in Numeri
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dati aggiornati in tempo reale della partecipazione democratica italiana
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatsCard
              title="Cittadini Attivi"
              value="2,847,391"
              description="Utenti registrati e verificati"
              icon="👥"
              trend={{ value: 12.3, isPositive: true }}
              color="blue"
            />
            <StatsCard
              title="Sondaggi Completati"
              value="15,247"
              description="Consultazioni pubbliche concluse"
              icon="📊"
              trend={{ value: 8.7, isPositive: true }}
              color="green"
            />
            <StatsCard
              title="Voti Espressi"
              value="47,892,156"
              description="Opinioni raccolte totali"
              icon="🗳️"
              trend={{ value: 15.2, isPositive: true }}
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Come Funziona la Piattaforma
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un processo semplice e sicuro per far sentire la tua voce nelle decisioni che contano
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Registrati", 
                desc: "Accesso sicuro con SPID, CIE o eIDAS per garantire l'identità digitale", 
                icon: "🆔",
                color: "bg-blue-500"
              },
              { 
                step: "02", 
                title: "Esplora", 
                desc: "Naviga tra i sondaggi per categoria, regione e temi di interesse", 
                icon: "🔍",
                color: "bg-green-500"
              },
              { 
                step: "03", 
                title: "Partecipa", 
                desc: "Esprimi la tua opinione sui temi politici, economici e sociali", 
                icon: "✍️",
                color: "bg-purple-500"
              },
              { 
                step: "04", 
                title: "Monitora", 
                desc: "Visualizza risultati in tempo reale e l'impatto delle tue scelte", 
                icon: "📈",
                color: "bg-orange-500"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="pt-8 pb-6">
                  <div className={`w-16 h-16 ${item.color} rounded-full mx-auto mb-6 flex items-center justify-center`}>
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div className="text-sm font-bold text-gray-500 mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Polls Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sondaggi in Evidenza
              </h2>
              <p className="text-lg text-gray-600">
                Partecipa ai referendum e consultazioni più importanti del momento
              </p>
            </div>
            <Button 
              onClick={() => navigate('/sondaggi')}
              className="bg-[#1e3a8a] hover:bg-blue-800 text-white"
            >
              Vedi Tutti
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Riforma Fiscale 2025",
                category: "Economia",
                participants: "45,783",
                percentage: 67,
                status: "Attivo",
                urgency: "high"
              },
              {
                title: "Trasporti Pubblici Gratuiti",
                category: "Sociale",
                participants: "32,156",
                percentage: 73,
                status: "Attivo",
                urgency: "medium"
              },
              {
                title: "Transizione Energetica",
                category: "Ambiente",
                participants: "58,429",
                percentage: 81,
                status: "Scadenza 3 giorni",
                urgency: "urgent"
              }
            ].map((poll, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      poll.urgency === 'urgent' ? 'bg-red-100 text-red-700' :
                      poll.urgency === 'high' ? 'bg-orange-100 text-orange-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {poll.category}
                    </span>
                    <span className="text-xs text-gray-500">{poll.status}</span>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {poll.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Consenso</span>
                        <span className="font-bold text-gray-900">{poll.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#1e3a8a] h-2 rounded-full transition-all duration-300"
                          style={{ width: `${poll.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{poll.participants} partecipanti</span>
                      <Button size="sm" className="bg-[#1e3a8a] hover:bg-blue-800 text-white">
                        Partecipa
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e3a8a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#1e3a8a] font-bold text-lg">DD</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Direct Democracy</div>
                  <div className="text-blue-200 text-sm">Democrazia Partecipativa</div>
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                Piattaforma digitale per la partecipazione democratica diretta dei cittadini italiani.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Piattaforma</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="/sondaggi" className="hover:text-white transition-colors">Sondaggi</a></li>
                <li><a href="/dashboard" className="hover:text-white transition-colors">Dashboard</a></li>
                <li><a href="/news" className="hover:text-white transition-colors">News</a></li>
                <li><a href="/login" className="hover:text-white transition-colors">Accedi</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Informazioni</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termini di Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sicurezza</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contatti</h4>
              <div className="space-y-3 text-blue-100">
                <div>
                  <div className="font-medium">Gabriele Gregorini</div>
                  <div className="text-sm">Sviluppatore</div>
                </div>
                <div>
                  <a href="mailto:gabrielegregorini7@gmail.com" className="hover:text-white transition-colors">
                    gabrielegregorini7@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-700 mt-8 pt-8 text-center">
            <p className="text-blue-200 text-sm">
              © 2024 Direct Democracy Project. Tutti i diritti riservati. Piattaforma conforme alle normative GDPR e AgID.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
