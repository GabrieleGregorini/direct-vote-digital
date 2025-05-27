
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('tutti');

  // Mock data for news articles
  const newsArticles = [
    {
      id: '1',
      title: 'Nuova Riforma del Sistema Elettorale: Maggiore Partecipazione Digitale',
      description: 'Il governo ha approvato una riforma che introduce strumenti digitali per incrementare la partecipazione cittadina nei processi democratici.',
      category: 'politica',
      source: 'Gazzetta Ufficiale',
      publishDate: '2025-01-20',
      readTime: '5 min',
      isUrgent: true,
      imageUrl: '/api/placeholder/400/200'
    },
    {
      id: '2',
      title: 'Trasparenza nei Dati Pubblici: Report Trimestrale Disponibile',
      description: 'Pubblicato il nuovo report trimestrale sulla trasparenza dei dati pubblici con statistiche dettagliate sulla partecipazione cittadina.',
      category: 'trasparenza',
      source: 'ANAC - Autorità Anticorruzione',
      publishDate: '2025-01-19',
      readTime: '8 min',
      isUrgent: false,
      imageUrl: '/api/placeholder/400/200'
    },
    {
      id: '3',
      title: 'Cybersecurity e Voto Elettronico: Nuovi Standard di Sicurezza',
      description: 'Implementati nuovi protocolli di sicurezza per garantire l\'integrità e la riservatezza del voto elettronico su piattaforme digitali.',
      category: 'tecnologia',
      source: 'CERT-PA',
      publishDate: '2025-01-18',
      readTime: '6 min',
      isUrgent: false,
      imageUrl: '/api/placeholder/400/200'
    },
    {
      id: '4',
      title: 'Partecipazione Giovanile: +25% di Engagement nelle Consultazioni Online',
      description: 'I dati mostrano un significativo aumento della partecipazione dei giovani tra i 18-35 anni nelle consultazioni pubbliche digitali.',
      category: 'sociale',
      source: 'ISTAT',
      publishDate: '2025-01-17',
      readTime: '4 min',
      isUrgent: false,
      imageUrl: '/api/placeholder/400/200'
    },
    {
      id: '5',
      title: 'Integrazione Europea: Protocollo eIDAS 2.0 per la Democrazia Digitale',
      description: 'L\'UE ha approvato il nuovo protocollo eIDAS 2.0 che faciliterà l\'accesso transfrontaliero ai servizi di democrazia digitale.',
      category: 'europa',
      source: 'Commissione Europea',
      publishDate: '2025-01-16',
      readTime: '7 min',
      isUrgent: true,
      imageUrl: '/api/placeholder/400/200'
    }
  ];

  const reports = [
    {
      id: '1',
      title: 'Report Annuale sulla Democrazia Digitale 2024',
      description: 'Analisi completa dei trend, statistiche e sviluppi della partecipazione democratica digitale in Italia.',
      downloadUrl: '#',
      fileSize: '2.4 MB',
      fileType: 'PDF',
      publishDate: '2025-01-15'
    },
    {
      id: '2',
      title: 'Whitepaper: Sicurezza nelle Piattaforme di Voto Online',
      description: 'Documento tecnico sui protocolli di sicurezza implementati per garantire l\'integrità del voto elettronico.',
      downloadUrl: '#',
      fileSize: '1.8 MB',
      fileType: 'PDF',
      publishDate: '2025-01-10'
    },
    {
      id: '3',
      title: 'Studio Comparativo: Democrazia Digitale in Europa',
      description: 'Confronto tra le diverse implementazioni di democrazia digitale nei paesi dell\'Unione Europea.',
      downloadUrl: '#',
      fileSize: '3.1 MB',
      fileType: 'PDF',
      publishDate: '2025-01-05'
    }
  ];

  const categories = ['Tutti', 'Politica', 'Trasparenza', 'Tecnologia', 'Sociale', 'Europa'];

  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'tutti' || 
                           article.category === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'politica': return 'bg-democracy-blue text-white';
      case 'trasparenza': return 'bg-democracy-green text-white';
      case 'tecnologia': return 'bg-democracy-purple text-white';
      case 'sociale': return 'bg-democracy-yellow text-white';
      case 'europa': return 'bg-democracy-blue text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header isAuthenticated={true} userName="Ospite" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            News & Trasparenza
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Rimani aggiornato su novità, report ufficiali e sviluppi della democrazia digitale
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="search"
                placeholder="Cerca notizie e articoli..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex gap-2">
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
            <Badge variant="outline" className="bg-democracy-red/10 text-democracy-red">
              🚨 {newsArticles.filter(n => n.isUrgent).length} Urgenti
            </Badge>
            <Badge variant="outline" className="bg-democracy-blue/10 text-democracy-blue">
              📰 {newsArticles.length} Articoli totali
            </Badge>
            <Badge variant="outline" className="bg-democracy-green/10 text-democracy-green">
              📊 {reports.length} Report disponibili
            </Badge>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="notizie" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="notizie">Notizie Principali</TabsTrigger>
            <TabsTrigger value="blog">Blog Certificati</TabsTrigger>
            <TabsTrigger value="report">Report & Documenti</TabsTrigger>
          </TabsList>

          <TabsContent value="notizie" className="space-y-6">
            {/* Urgent News */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-democracy-red">🚨</span>
                Notizie Urgenti
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredNews.filter(article => article.isUrgent).map(article => (
                  <Card key={article.id} className="hover:shadow-lg transition-all duration-300 animate-fade-in border-l-4 border-l-democracy-red">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={getCategoryColor(article.category)}>
                          {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                        </Badge>
                        <Badge className="bg-democracy-red text-white">
                          Urgente
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {article.description}
                      </p>
                      <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                        <span>{article.source}</span>
                        <span>{article.readTime} lettura</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">{article.publishDate}</span>
                        <Button size="sm" className="bg-democracy-blue hover:bg-democracy-blue/90">
                          Leggi di più
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All News */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Tutte le Notizie ({filteredNews.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.map(article => (
                  <Card key={article.id} className="hover:shadow-lg transition-all duration-300 animate-fade-in">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={getCategoryColor(article.category)}>
                          {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                        </Badge>
                        {article.isUrgent && (
                          <Badge className="bg-democracy-red text-white">
                            Urgente
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {article.description}
                      </p>
                      <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                        <span>{article.source}</span>
                        <span>{article.readTime} lettura</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">{article.publishDate}</span>
                        <Button size="sm" variant="outline" className="border-democracy-blue text-democracy-blue hover:bg-democracy-blue/10">
                          Leggi
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="blog" className="space-y-6">
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Blog Certificati
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Articoli di approfondimento da fonti certificate e verificate
              </p>
              <Button className="bg-democracy-blue hover:bg-democracy-blue/90">
                Esplora Blog
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="report" className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Report e Documenti Ufficiali
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reports.map(report => (
                  <Card key={report.id} className="hover:shadow-lg transition-all duration-300 animate-fade-in">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-democracy-green text-white">
                          {report.fileType}
                        </Badge>
                        <span className="text-xs text-gray-500">{report.fileSize}</span>
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                        {report.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {report.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">{report.publishDate}</span>
                        <Button size="sm" className="bg-democracy-blue hover:bg-democracy-blue/90">
                          📥 Scarica
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default News;
