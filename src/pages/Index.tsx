
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
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
                <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <div className="text-white font-bold text-4xl">D.D.P</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-white rounded-2xl shadow-lg border-0 p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-blue-600 text-2xl">👥</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900">Partecipazione Attiva</h3>
                <p className="text-gray-600 text-sm">
                  Vota su questioni reali che influenzano la tua comunità e il tuo paese, con risultati trasparenti e aggiornamenti in tempo reale
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white rounded-2xl shadow-lg border-0 p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-green-600 text-2xl">🔒</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900">Sicurezza Garantita</h3>
                <p className="text-gray-600 text-sm">
                  Autenticazione sicura tramite SPID, CIE e sistemi eIDAS per garantire la tutela dei dati e la protezione dei dati personali
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white rounded-2xl shadow-lg border-0 p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-purple-600 text-2xl">📊</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900">Analisi Dati</h3>
                <p className="text-gray-600 text-sm">
                  Visualizza statistiche dettagliate e analisi dei risultati con grafici interattivi, filtri personalizzati e export
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Polls Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sondaggi in Evidenza</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-yellow-50 rounded-2xl shadow-lg border-0 overflow-hidden">
              <CardHeader className="bg-yellow-400 text-white p-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Riforma Fiscale 2025</CardTitle>
                  <span className="bg-white/20 text-xs px-2 py-1 rounded-full">ATTIVO</span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Valutazione della proposta di riforma fiscale con nuove aliquote e detrazioni per famiglie e imprese
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-600">Favorevoli: 62%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '62%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-full px-4 py-2 text-sm">
                    Partecipa
                  </Button>
                  <Button variant="outline" className="rounded-full px-4 py-2 text-sm">
                    Dettagli
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-teal-50 rounded-2xl shadow-lg border-0 overflow-hidden">
              <CardHeader className="bg-teal-500 text-white p-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Referendum Cittadinanza</CardTitle>
                  <span className="bg-red-500 text-xs px-2 py-1 rounded-full">SCADE</span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 text-sm mb-4">
                  Valutazione della proposta di abbreviare i tempi di permanenza in Italia da 10 a 5 anni per richiedere la cittadinanza
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-600">Favorevoli: 47%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{ width: '47%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-4 py-2 text-sm">
                    Partecipa
                  </Button>
                  <Button variant="outline" className="rounded-full px-4 py-2 text-sm">
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
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Seguici su</h4>
              <div className="flex space-x-4">
                {['facebook', 'instagram', 'linkedin', 'tiktok', 'youtube'].map((social) => (
                  <div key={social} className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📱</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-right">
              <h4 className="font-bold text-lg mb-4">Direct Democracy Project ®</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>Cookie Policy | Privacy Policy</div>
                <div>Note Legali | Trattamento Dati</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
