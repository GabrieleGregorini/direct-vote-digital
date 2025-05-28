import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsCard from "@/components/StatsCard";
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const handlePollClick = (pollId: string) => {
    navigate(`/sondaggio/${pollId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Direct Democracy Project ®
                  </h1>
                  <p className="text-lg text-blue-50 leading-relaxed">
                    Partecipa attivamente alle decisioni del tuo paese attraverso una piattaforma sicura, trasparente e accessibile
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => navigate('/sondaggi')}
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3"
                  >
                    Esplora i sondaggi
                  </Button>
                  <Button 
                    onClick={() => navigate('/login')}
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-3"
                  >
                    Accedi
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center p-4">
                  <img 
                    src="/lovable-uploads/af5282c3-1301-4c36-87c4-23d3daa2fef6.png" 
                    alt="Direct Democracy Project"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-white dark:bg-gray-700 rounded-2xl shadow-lg border-0 p-6 hover:shadow-xl transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 text-2xl">👥</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Partecipazione Attiva</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Vota su questioni reali che influenzano la tua comunità e il tuo paese, con risultati trasparenti e aggiornamenti in tempo reale
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white dark:bg-gray-700 rounded-2xl shadow-lg border-0 p-6 hover:shadow-xl transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-2xl">🔒</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Sicurezza Garantita</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Autenticazione sicura tramite SPID, CIE e sistemi eIDAS per garantire la tutela dei dati e la protezione dei dati personali
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white dark:bg-gray-700 rounded-2xl shadow-lg border-0 p-6 hover:shadow-xl transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 text-2xl">📊</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Analisi Dati</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Visualizza statistiche dettagliate e analisi dei risultati con grafici interattivi, filtri personalizzati e export
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Polls Section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sondaggi in Evidenza</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer" onClick={() => handlePollClick('1')}>
              <CardHeader className="bg-yellow-400 dark:bg-yellow-600 text-white p-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Riforma Fiscale 2025</CardTitle>
                  <span className="bg-white/20 text-xs px-2 py-1 rounded-full">ATTIVO</span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Valutazione della proposta di riforma fiscale con nuove aliquote e detrazioni per famiglie e imprese
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Favorevoli: 62%</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-yellow-400 dark:bg-yellow-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePollClick('1');
                    }}
                    className="bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded-full px-4 py-2 text-sm"
                  >
                    Partecipa
                  </Button>
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePollClick('1');
                    }}
                    variant="outline" 
                    className="rounded-full px-4 py-2 text-sm dark:border-gray-600 dark:text-gray-300"
                  >
                    Dettagli
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer" onClick={() => handlePollClick('2')}>
              <CardHeader className="bg-teal-500 dark:bg-teal-600 text-white p-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Referendum Cittadinanza</CardTitle>
                  <span className="bg-red-500 text-xs px-2 py-1 rounded-full">SCADE</span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Valutazione della proposta di abbreviare i tempi di permanenza in Italia da 10 a 5 anni per richiedere la cittadinanza
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Favorevoli: 47%</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-teal-500 dark:bg-teal-600 h-2 rounded-full" style={{ width: '47%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePollClick('2');
                    }}
                    className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white rounded-full px-4 py-2 text-sm"
                  >
                    Partecipa
                  </Button>
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePollClick('2');
                    }}
                    variant="outline" 
                    className="rounded-full px-4 py-2 text-sm dark:border-gray-600 dark:text-gray-300"
                  >
                    Dettagli
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Come Funziona</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Registrati", desc: "Accedi con SPID, CIE o altri sistemi di identità digitale europei", icon: "🔐" },
              { step: "2", title: "Esplora", desc: "Sfoglia i sondaggi attivi filtrati per categoria e regione di interesse", icon: "🔍" },
              { step: "3", title: "Vota", desc: "Esprimi la tua opinione su questioni politiche, sociali e economiche", icon: "🗳️" },
              { step: "4", title: "Analizza", desc: "Visualizza risultati in tempo reale e le statistiche dettagliate", icon: "📈" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  {item.icon}
                </div>
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white rounded-2xl shadow-lg border-0 p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Resta Aggiornato/a</h3>
                <p className="text-gray-600 mb-6">
                  Iscriviti alla nostra newsletter per ricevere notifiche sui nuovi sondaggi e sugli aggiornamenti della piattaforma
                </p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="La tua email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                    Iscriviti
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <span className="text-blue-600 text-6xl">📧</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
