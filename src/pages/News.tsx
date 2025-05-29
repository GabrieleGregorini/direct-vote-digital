import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from 'react-router-dom';
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, User, TrendingUp, Clock } from 'lucide-react';

const News = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('tutti');

  const articles = [
    {
      id: '1',
      title: 'Nuove Strategie per la Transizione Energetica',
      category: 'ambiente',
      author: 'Luca Rossi',
      date: '15/01/2025',
      views: 1245,
      trend: 15,
      description: 'Un approccio innovativo per accelerare la transizione verso fonti rinnovabili e ridurre l\'impatto ambientale.',
      content: 'Articolo completo sulle nuove strategie...'
    },
    {
      id: '2',
      title: 'Impatto della Digitalizzazione sulla Sanità Italiana',
      category: 'sanita',
      author: 'Maria Bianchi',
      date: '10/01/2025',
      views: 987,
      trend: -5,
      description: 'Come la digitalizzazione sta trasformando il settore sanitario, migliorando l\'accesso e l\'efficienza dei servizi.',
      content: 'Articolo completo sull\'impatto della digitalizzazione...'
    },
    {
      id: '3',
      title: 'Riforma del Sistema Pensionistico: Cosa Cambia per i Giovani',
      category: 'sociale',
      author: 'Giovanni Verdi',
      date: '05/01/2025',
      views: 1567,
      trend: 8,
      description: 'Analisi delle nuove proposte per la riforma del sistema pensionistico e le implicazioni per le future generazioni.',
      content: 'Articolo completo sulla riforma pensionistica...'
    },
    {
      id: '4',
      title: 'Le Sfide della Mobilità Sostenibile nelle Grandi Città',
      category: 'trasporti',
      author: 'Elena Gialli',
      date: '01/01/2025',
      views: 876,
      trend: 3,
      description: 'Soluzioni innovative e politiche per promuovere la mobilità sostenibile e ridurre il traffico urbano.',
      content: 'Articolo completo sulle sfide della mobilità sostenibile...'
    },
    {
      id: '5',
      title: 'L\'Intelligenza Artificiale al Servizio dell\'Istruzione',
      category: 'istruzione',
      author: 'Marco Blu',
      date: '28/12/2024',
      views: 1122,
      trend: 12,
      description: 'Come l\'intelligenza artificiale può personalizzare l\'apprendimento e migliorare l\'esperienza educativa.',
      content: 'Articolo completo sull\'intelligenza artificiale nell\'istruzione...'
    },
    {
      id: '6',
      title: 'Sicurezza Informatica: Minacce e Protezioni per i Cittadini',
      category: 'sicurezza',
      author: 'Sofia Rosa',
      date: '22/12/2024',
      views: 765,
      trend: -2,
      description: 'Consigli e strategie per proteggere i dati personali e prevenire le frodi online.',
      content: 'Articolo completo sulla sicurezza informatica...'
    },
    {
      id: '7',
      title: 'Il Futuro dell\'Agricoltura Italiana: Innovazione e Sostenibilità',
      category: 'ambiente',
      author: 'Riccardo Neri',
      date: '18/12/2024',
      views: 1345,
      trend: 18,
      description: 'Le nuove tecnologie e pratiche agricole per un settore più efficiente e rispettoso dell\'ambiente.',
      content: 'Articolo completo sul futuro dell\'agricoltura italiana...'
    },
    {
      id: '8',
      title: 'Politiche Economiche per la Crescita e l\'Occupazione',
      category: 'economia',
      author: 'Alessia Viola',
      date: '12/12/2024',
      views: 1023,
      trend: 7,
      description: 'Misure e strategie per stimolare la crescita economica e favorire la creazione di nuovi posti di lavoro.',
      content: 'Articolo completo sulle politiche economiche...'
    },
    {
      id: '9',
      title: 'Il Ruolo delle Energie Rinnovabili nella Transizione Energetica',
      category: 'ambiente',
      author: 'Davide Marrone',
      date: '08/12/2024',
      views: 954,
      trend: 4,
      description: 'L\'importanza delle energie rinnovabili per raggiungere gli obiettivi di decarbonizzazione e ridurre la dipendenza dai combustibili fossili.',
      content: 'Articolo completo sul ruolo delle energie rinnovabili...'
    },
    {
      id: '10',
      title: 'Sanità del Futuro: Innovazioni Tecnologiche e Assistenza Personalizzata',
      category: 'sanita',
      author: 'Chiara Argenti',
      date: '02/12/2024',
      views: 1456,
      trend: 22,
      description: 'Le nuove tecnologie e approcci per una sanità più efficiente, accessibile e centrata sul paziente.',
      content: 'Articolo completo sulla sanità del futuro...'
    }
  ];

  const categories = ['Tutti', 'Ambiente', 'Sanita', 'Sociale', 'Trasporti', 'Istruzione', 'Sicurezza', 'Economia'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'tutti' ||
                              article.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('news.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {t('news.subtitle')}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-0 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="search"
              placeholder={t('news.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 dark:text-white"
            >
              <option value="tutti">{t('filters.allCategories')}</option>
              {categories.map(category => (
                <option key={category} value={category.toLowerCase()}>
                  {t(`categories.${category.toLowerCase()}`)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map(article => (
            <Card key={article.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Badge variant="secondary" className="dark:border-gray-700 dark:text-gray-400">
                    {t(`categories.${article.category}`)}
                  </Badge>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {article.description}
                </p>
                <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.views}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>{article.trend}%</span>
                  </div>
                </div>
                <Button
                  onClick={() => navigate(`/article/${article.id}`)}
                  className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
                >
                  {t('news.readMore')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default News;
