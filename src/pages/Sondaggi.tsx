
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import PollCard from "@/components/PollCard";

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
      options: [
        { label: 'Incrementare investimenti', percentage: 73, votes: 18250 },
        { label: 'Mantenere livelli attuali', percentage: 22, votes: 5500 },
        { label: 'Ridurre investimenti', percentage: 5, votes: 1250 }
      ],
      totalVotes: 25000,
      endDate: '10/03/2025',
      region: 'Veneto'
    },
    {
      id: '4',
      title: 'Trasporti Pubblici Gratuiti',
      description: 'Proposta di rendere gratuiti i trasporti pubblici per under 25 e over 65 anni.',
      category: 'trasporti' as const,
      status: 'attivo' as const,
      options: [
        { label: 'Favorevole', percentage: 68, votes: 17000 },
        { label: 'Solo per alcune fasce', percentage: 24, votes: 6000 },
        { label: 'Contrario', percentage: 8, votes: 2000 }
      ],
      totalVotes: 25000,
      endDate: '20/02/2025',
      region: 'Emilia-Romagna'
    },
    {
      id: '5',
      title: 'Ridurre le Vacanze Estive',
      description: 'Proposta di ridurre le vacanze estive scolastiche e distribuire i giorni di pausa durante l\'anno.',
      category: 'sociale' as const,
      status: 'attivo' as const,
      options: [
        { label: 'Favorevole', percentage: 45, votes: 11250 },
        { label: 'Contrario', percentage: 48, votes: 12000 },
        { label: 'Indeciso', percentage: 7, votes: 1750 }
      ],
      totalVotes: 25000,
      endDate: '05/03/2025',
      region: 'Toscana'
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

  const handleVote = (pollId: string) => {
    console.log(`Voting on poll: ${pollId}`);
    // Qui implementeremmo la logica di voto
  };

  const handleViewDetails = (pollId: string) => {
    console.log(`Viewing details for poll: ${pollId}`);
    // Qui implementeremmo la navigazione ai dettagli
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header isAuthenticated={true} userName="Ospite" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Sondaggi in Evidenza
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Partecipa ai sondaggi attivi e contribuisci alle decisioni che riguardano il futuro del paese
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="search"
                placeholder="Cerca sondaggi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
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
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-democracy-blue/10 text-democracy-blue">
              🔥 {polls.filter(p => p.status === 'urgente').length} Urgenti
            </Badge>
            <Badge variant="outline" className="bg-democracy-green/10 text-democracy-green">
              ✅ {polls.filter(p => p.status === 'attivo').length} Attivi
            </Badge>
            <Badge variant="outline" className="bg-gray-500/10 text-gray-500">
              📊 {polls.reduce((sum, p) => sum + p.totalVotes, 0).toLocaleString()} Voti totali
            </Badge>
          </div>
        </div>

        {/* Tabs for different poll types */}
        <Tabs defaultValue="tutti" className="mb-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="tutti">Tutti</TabsTrigger>
            <TabsTrigger value="politica">Politica</TabsTrigger>
            <TabsTrigger value="economia">Economia</TabsTrigger>
            <TabsTrigger value="sociale">Sociale</TabsTrigger>
            <TabsTrigger value="ambiente">Ambiente</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tutti" className="mt-6">
            {/* Sondaggi per te section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Sondaggi per te
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPolls.slice(0, 3).map(poll => (
                  <PollCard
                    key={poll.id}
                    {...poll}
                    onVote={handleVote}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            </div>

            {/* All polls */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Tutti i Sondaggi ({filteredPolls.length})
                </h2>
                <Button 
                  variant="outline"
                  className="border-democracy-blue text-democracy-blue hover:bg-democracy-blue/10"
                >
                  Aggiorna
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPolls.map(poll => (
                  <PollCard
                    key={poll.id}
                    {...poll}
                    onVote={handleVote}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
          
          {/* Altri tab content similari */}
          <TabsContent value="politica" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPolls.filter(p => ['fiscale', 'sociale'].includes(p.category)).map(poll => (
                <PollCard
                  key={poll.id}
                  {...poll}
                  onVote={handleVote}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="economia" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPolls.filter(p => p.category === 'fiscale').map(poll => (
                <PollCard
                  key={poll.id}
                  {...poll}
                  onVote={handleVote}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sociale" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPolls.filter(p => p.category === 'sociale').map(poll => (
                <PollCard
                  key={poll.id}
                  {...poll}
                  onVote={handleVote}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ambiente" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPolls.filter(p => p.category === 'ambiente').map(poll => (
                <PollCard
                  key={poll.id}
                  {...poll}
                  onVote={handleVote}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Sondaggi;
