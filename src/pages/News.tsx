import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('tutti');

  // Expanded mock data for news articles with more detailed content
  const newsArticles = [
    {
      id: '1',
      title: 'Nuova Riforma del Sistema Elettorale: Maggiore Partecipazione Digitale',
      description: 'Il governo ha approvato una riforma che introduce strumenti digitali per incrementare la partecipazione cittadina nei processi democratici. La riforma prevede l\'integrazione di piattaforme online sicure per consultazioni pubbliche e referendum digitali.',
      category: 'politica',
      source: 'Gazzetta Ufficiale',
      publishDate: '2025-01-20',
      readTime: '5 min',
      isUrgent: true,
      author: 'Ministero dell\'Interno',
      views: '12.547',
      imageUrl: '/api/placeholder/400/200'
    },
    {
      id: '2',
      title: 'Trasparenza nei Dati Pubblici: Report Trimestrale Disponibile',
      description: 'Pubblicato il nuovo report trimestrale sulla trasparenza dei dati pubblici con statistiche dettagliate sulla partecipazione cittadina. Include analisi demografiche e trend di engagement per regione.',
      category: 'trasparenza',
      source: 'ANAC - Autorità Anticorruzione',
      publishDate: '2025-01-19',
      readTime: '8 min',
      isUrgent: false,
      author: 'ANAC',
      views: '8.932',
      imageUrl: '/api/placeholder/400/200'
    },
    {
      id: '3',
      title: 'Cybersecurity e Voto Elettronico: Nuovi Standard di Sicurezza',
      description: 'Implementati nuovi protocolli di sicurezza per garantire l\'integrità e la riservatezza del voto elettronico su piattaforme digitali. Sistema di crittografia end-to-end e blockchain per verificabilità.',
      category: 'tecnologia',
      source: 'CERT-PA',
      publishDate: '2025-01-18',
      readTime: '6 min',
      isUrgent: false,
      author: 'CERT-PA',
      views: '15.421',
      imageUrl: '/api/placeholder/400/200'
    },
    {
      id: '4',
      title: 'Partecipazione Giovanile: +25% di Engagement nelle Consultazioni Online',
      description: 'I dati mostrano un significativo aumento della partecipazione dei giovani tra i 18-35 anni nelle consultazioni pubbliche digitali. Analisi approfondita sui fattori di successo.',
      category: 'sociale',
      source: 'ISTAT',
      publishDate: '2025-01-17',
      readTime: '4 min',
      isUrgent: false,
      author: 'ISTAT',
      views: '9.876',
      imageUrl: '/api/placeholder/400/200'
    },
    {
      id: '5',
      title: 'Integrazione Europea: Protocollo eIDAS 2.0 per la Democrazia Digitale',
      description: 'L\'UE ha approvato il nuovo protocollo eIDAS 2.0 che faciliterà l\'accesso transfrontaliero ai servizi di democrazia digitale. Interoperabilità tra sistemi nazionali.',
      category: 'europa',
      source: 'Commissione Europea',
      publishDate: '2025-01-16',
      readTime: '7 min',
      isUrgent: true,
      author: 'Commissione UE',
      views: '18.234',
      imageUrl: '/api/placeholder/400/200'
    },
    {
      id: '6',
      title: 'Referendum Consultivo su Energia Nucleare: Primi Risultati',
      description: 'Primi dati dal referendum consultivo nazionale sull\'energia nucleare mostrano una partecipazione record del 68% degli aventi diritto.',
      category: 'politica',
      source: 'Ministero dell\'Ambiente',
      publishDate: '2025-01-15',
      readTime: '6 min',
      isUrgent: true,
      author: 'Min. Ambiente',
      views: '25.678',
      imageUrl: '/api/placeholder/400/200'
    }
  ];

  const reports = [
    {
      id: '1',
      title: 'Report Annuale sulla Democrazia Digitale 2024',
      description: 'Analisi completa dei trend, statistiche e sviluppi della partecipazione democratica digitale in Italia. Include confronti internazionali e proiezioni future.',
      downloadUrl: '#',
      fileSize: '2.4 MB',
      fileType: 'PDF',
      publishDate: '2025-01-15',
      downloads: '3.456'
    },
    {
      id: '2',
      title: 'Whitepaper: Sicurezza nelle Piattaforme di Voto Online',
      description: 'Documento tecnico sui protocolli di sicurezza implementati per garantire l\'integrità del voto elettronico. Include specifiche tecniche e best practices.',
      downloadUrl: '#',
      fileSize: '1.8 MB',
      fileType: 'PDF',
      publishDate: '2025-01-10',
      downloads: '2.189'
    },
    {
      id: '3',
      title: 'Studio Comparativo: Democrazia Digitale in Europa',
      description: 'Confronto tra le diverse implementazioni di democrazia digitale nei paesi dell\'Unione Europea. Analisi di successi e sfide.',
      downloadUrl: '#',
      fileSize: '3.1 MB',
      fileType: 'PDF',
      publishDate: '2025-01-05',
      downloads: '1.867'
    },
    {
      id: '4',
      title: 'Linee Guida per l\'Accessibilità Digitale',
      description: 'Documento ufficiale sulle linee guida per garantire l\'accessibilità delle piattaforme di democrazia digitale a tutti i cittadini.',
      downloadUrl: '#',
      fileSize: '1.2 MB',
      fileType: 'PDF',
      publishDate: '2025-01-03',
      downloads: '4.321'
    }
  ];

  const liveUpdates = [
    {
      id: '1',
      time: '14:32',
      title: 'Nuova consultazione attivata',
      description: 'Referendum su trasporti pubblici gratuiti per studenti'
    },
    {
      id: '2',
      time: '13:45',
      title: 'Soglia quorum raggiunta',
      description: 'Consultazione energia rinnovabile: 52% partecipazione'
    },
    {
      id: '3',
      time: '12:15',
      title: 'Aggiornamento sistema',
      description: 'Manutenzione programmata completata con successo'
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            News & Trasparenza
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Centro informazioni ufficiale per aggiornamenti in tempo reale, report governativi, 
            documenti di trasparenza e analisi approfondite sulla democrazia digitale italiana
          </p>
        </div>

        {/* Live Updates Bar */}
        <div className="mb-8 bg-democracy-blue text-white p-4 rounded-lg">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            🔴 Aggiornamenti in Tempo Reale
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {liveUpdates.map(update => (
              <div key={update.id} className="bg-white/10 p-3 rounded">
                <div className="text-sm opacity-75">{update.time}</div>
                <div className="font-medium">{update.title}</div>
                <div className="text-sm opacity-90">{update.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="search"
                placeholder="Cerca notizie, documenti e aggiornamenti..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-12 text-lg"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
              <Button className="bg-democracy-blue hover:bg-democracy-blue/90 px-6">
                Filtra
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="bg-democracy-red/10 text-democracy-red border-democracy-red">
              🚨 {newsArticles.filter(n => n.isUrgent).length} Notizie Urgenti
            </Badge>
            <Badge variant="outline" className="bg-democracy-blue/10 text-democracy-blue border-democracy-blue">
              📰 {newsArticles.length} Articoli Totali
            </Badge>
            <Badge variant="outline" className="bg-democracy-green/10 text-democracy-green border-democracy-green">
              📊 {reports.length} Report Disponibili
            </Badge>
            <Badge variant="outline" className="bg-democracy-purple/10 text-democracy-purple border-democracy-purple">
              👥 {newsArticles.reduce((sum, article) => sum + parseInt(article.views.replace('.', '')), 0).toLocaleString()} Visualizzazioni Totali
            </Badge>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="notizie" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 h-12">
            <TabsTrigger value="notizie" className="text-sm font-medium">Notizie Principali</TabsTrigger>
            <TabsTrigger value="documenti" className="text-sm font-medium">Documenti Ufficiali</TabsTrigger>
            <TabsTrigger value="trasparenza" className="text-sm font-medium">Trasparenza</TabsTrigger>
            <TabsTrigger value="archivio" className="text-sm font-medium">Archivio Storico</TabsTrigger>
          </TabsList>

          <TabsContent value="notizie" className="space-y-8">
            {/* Urgent News */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="text-democracy-red text-3xl">🚨</span>
                Notizie Urgenti e Breaking News
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredNews.filter(article => article.isUrgent).map(article => (
                  <Card key={article.id} className="hover:shadow-xl transition-all duration-300 animate-fade-in border-l-4 border-l-democracy-red bg-gradient-to-r from-red-50 to-white dark:from-red-900/20 dark:to-gray-800">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-3">
                        <Badge className={getCategoryColor(article.category)}>
                          {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                        </Badge>
                        <Badge className="bg-democracy-red text-white animate-pulse">
                          🔥 URGENTE
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 hover:text-democracy-blue transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                        {article.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div>
                          <span className="font-medium">Fonte:</span> {article.source}
                        </div>
                        <div>
                          <span className="font-medium">Autore:</span> {article.author}
                        </div>
                        <div>
                          <span className="font-medium">Lettura:</span> {article.readTime}
                        </div>
                        <div>
                          <span className="font-medium">Visualizzazioni:</span> {article.views}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{article.publishDate}</span>
                        <Button className="bg-democracy-blue hover:bg-democracy-blue/90">
                          Leggi Articolo Completo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All News */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Tutte le Notizie ({filteredNews.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.map(article => (
                  <Card key={article.id} className="hover:shadow-lg transition-all duration-300 animate-fade-in group">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-3">
                        <Badge className={getCategoryColor(article.category)}>
                          {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                        </Badge>
                        {article.isUrgent && (
                          <Badge className="bg-democracy-red text-white">
                            Urgente
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-democracy-blue transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {article.description}
                      </p>
                      <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                        <span>{article.source}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                        <span>👁️ {article.views} visualizzazioni</span>
                        <span>✍️ {article.author}</span>
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

          <TabsContent value="documenti" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Documenti e Report Ufficiali
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reports.map(report => (
                  <Card key={report.id} className="hover:shadow-lg transition-all duration-300 animate-fade-in">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-democracy-green text-white">
                          📄 {report.fileType}
                        </Badge>
                        <div className="text-right text-xs text-gray-500">
                          <div>{report.fileSize}</div>
                          <div>📥 {report.downloads} download</div>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                        {report.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {report.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Pubblicato: {report.publishDate}</span>
                        <Button className="bg-democracy-green hover:bg-democracy-green/90">
                          📥 Scarica Documento
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="trasparenza" className="space-y-6">
            <div className="text-center py-16">
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Sezione Trasparenza
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Accesso completo ai dati governativi, statistiche di partecipazione, 
                bilanci pubblici e report di accountability democratica
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <div className="text-3xl mb-3">📊</div>
                  <h4 className="font-semibold mb-2">Dati Aperti</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Dataset pubblici e API</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <div className="text-3xl mb-3">💰</div>
                  <h4 className="font-semibold mb-2">Bilanci</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Trasparenza finanziaria</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <div className="text-3xl mb-3">📈</div>
                  <h4 className="font-semibold mb-2">Metriche</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">KPI democratici</p>
                </div>
              </div>
              <Button className="bg-democracy-blue hover:bg-democracy-blue/90 mt-8 px-8 py-3 text-lg">
                Esplora Dati di Trasparenza
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="archivio" className="space-y-6">
            <div className="text-center py-16">
              <div className="text-8xl mb-6">📚</div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Archivio Storico
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Cronologia completa di tutte le consultazioni, referendum e decisioni democratiche 
                dal 2020 ad oggi con analisi dei trend storici
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-democracy-blue">2024</div>
                  <div className="text-sm text-gray-600">47 consultazioni</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-democracy-green">2023</div>
                  <div className="text-sm text-gray-600">38 consultazioni</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-democracy-purple">2022</div>
                  <div className="text-sm text-gray-600">29 consultazioni</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-democracy-yellow">2021</div>
                  <div className="text-sm text-gray-600">22 consultazioni</div>
                </div>
              </div>
              <Button className="bg-democracy-purple hover:bg-democracy-purple/90 px-8 py-3 text-lg">
                Accedi all'Archivio Completo
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default News;
