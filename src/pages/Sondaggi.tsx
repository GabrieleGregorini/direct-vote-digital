
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";

const Sondaggi = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('tutti');
  const [selectedCategory, setSelectedCategory] = useState('tutti');

  // Mock data per i sondaggi
  const polls = [
    {
      id: '1',
      title: 'Riforma Fiscale 2025',
      description: 'Valutazione della proposta di riforma fiscale con nuove aliquote e detrazioni per famiglie e imprese.',
      category: 'fiscale' as const,
      status: 'attivo' as const,
      color: 'yellow',
      options: [
        { label: 'Favorevole', percentage: 62, votes: 15847 },
        { label: 'Contrario', percentage: 32, votes: 8174 },
        { label: 'Non so', percentage: 6, votes: 1532 }
      ],
      totalVotes: 25553,
      endDate: '15/02/2025',
      region: 'Lombardia'
    },
    {
      id: '2',
      title: 'Referendum Cittadinanza',
      description: 'Modifica dei criteri per l\'acquisizione della cittadinanza italiana per cittadini stranieri residenti.',
      category: 'sociale' as const,
      status: 'urgente' as const,
      color: 'teal',
      options: [
        { label: 'Si, con riduzione anni', percentage: 57, votes: 14250 },
        { label: 'No, mantenere attuale', percentage: 38, votes: 9500 },
        { label: 'Si, ma con condizioni', percentage: 5, votes: 1250 }
      ],
      totalVotes: 25000,
      endDate: '28/01/2025',
      region: 'Lazio'
    },
    {
      id: '3',
      title: 'Transizione Energetica',
      description: 'Investimenti per accelerare la transizione verso energie rinnovabili e riduzione emissioni CO2.',
      category: 'ambiente' as const,
      status: 'attivo' as const,
      color: 'green',
      options: [
        { label: 'Incrementare investimenti', percentage: 73, votes: 18250 },
        { label: 'Mantenere livelli attuali', percentage: 22, votes: 5500 },
        { label: 'Ridurre investimenti', percentage: 5, votes: 1250 }
      ],
      totalVotes: 25000,
      endDate: '10/03/2025',
      region: 'Veneto'
    }
  ];

  const regions = ['Tutti', 'Lombardia', 'Lazio', 'Veneto', 'Emilia-Romagna', 'Toscana'];
  const categories = ['Tutti', 'Fiscale', 'Sociale', 'Ambiente', 'Trasporti', 'Economia'];

  const filteredPolls = polls.filter(poll => {
    const matchesSearch = poll.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         poll.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'tutti' || 
                         poll.region?.toLowerCase() === selectedRegion.toLowerCase();
    const matchesCategory = selectedCategory === 'tutti' || 
                           poll.category === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesRegion && matchesCategory;
  });

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'yellow':
        return {
          bg: 'bg-yellow-50',
          header: 'bg-yellow-400',
          button: 'bg-yellow-400 hover:bg-yellow-500',
          progress: 'bg-yellow-400'
        };
      case 'teal':
        return {
          bg: 'bg-teal-50',
          header: 'bg-teal-500',
          button: 'bg-teal-500 hover:bg-teal-600',
          progress: 'bg-teal-500'
        };
      case 'green':
        return {
          bg: 'bg-green-50',
          header: 'bg-green-500',
          button: 'bg-green-500 hover:bg-green-600',
          progress: 'bg-green-500'
        };
      default:
        return {
          bg: 'bg-blue-50',
          header: 'bg-blue-500',
          button: 'bg-blue-500 hover:bg-blue-600',
          progress: 'bg-blue-500'
        };
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header isAuthenticated={true} userName="Ospite" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-3xl p-8 mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl font-bold mb-4">
                Direct Democracy Project ®
              </h1>
              <p className="text-blue-100 mb-6">
                Partecipa attivamente alle decisioni del tuo paese attraverso una piattaforma sicura, trasparente e accessibile
              </p>
              <div className="flex gap-4">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full">
                  Esplora i sondaggi
                </Button>
                <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full">
                  Accedi
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D.D.P</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white rounded-2xl shadow-lg border-0 text-center p-6">
            <CardContent>
              <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 text-2xl">👥</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900">Partecipazione Attiva</h3>
              <p className="text-gray-600 text-sm">
                Vota su questioni reali che influenzano la tua comunità
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-lg border-0 text-center p-6">
            <CardContent>
              <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 text-2xl">🔒</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900">Sicurezza Garantita</h3>
              <p className="text-gray-600 text-sm">
                Autenticazione sicura tramite SPID, CIE
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-lg border-0 text-center p-6">
            <CardContent>
              <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-600 text-2xl">📊</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900">Analisi Dati</h3>
              <p className="text-gray-600 text-sm">
                Visualizza statistiche dettagliate e analisi
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg border-0 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              type="search"
              placeholder="Cerca sondaggi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-full border-gray-300"
            />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-full bg-white"
            >
              {regions.map(region => (
                <option key={region} value={region.toLowerCase()}>
                  {region}
                </option>
              ))}
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-full bg-white"
            >
              {categories.map(category => (
                <option key={category} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sondaggi in Evidenza */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sondaggi in Evidenza</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPolls.map(poll => {
              const colors = getColorClasses(poll.color);
              return (
                <Card key={poll.id} className={`${colors.bg} rounded-2xl shadow-lg border-0 overflow-hidden`}>
                  <CardHeader className={`${colors.header} text-white p-4`}>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{poll.title}</CardTitle>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        poll.status === 'urgente' ? 'bg-red-500' : 'bg-white/20'
                      }`}>
                        {poll.status === 'urgente' ? 'SCADE' : 'ATTIVO'}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 text-sm mb-4">
                      {poll.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm text-gray-600">
                        Favorevoli: {poll.options[0].percentage}%
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`${colors.progress} h-2 rounded-full`}
                          style={{ width: `${poll.options[0].percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Button className={`${colors.button} text-white rounded-full px-4 py-2 text-sm`}>
                        Partecipa
                      </Button>
                      <Button variant="outline" className="rounded-full px-4 py-2 text-sm">
                        Dettagli
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sondaggi;
