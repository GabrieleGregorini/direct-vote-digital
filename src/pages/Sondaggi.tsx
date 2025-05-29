import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from 'react-router-dom';
import { useLanguage } from "@/contexts/LanguageContext";

const Sondaggi = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('tutti');
  const [selectedCategory, setSelectedCategory] = useState('tutti');

  // Expanded mock data per i sondaggi
  const polls = [
    {
      id: '1',
      title: t('polls.fiscalReform.title'),
      description: t('polls.fiscalReform.description'),
      category: 'fiscale' as const,
      status: 'attivo' as const,
      color: 'yellow',
      options: [
        { label: t('polls.fiscalReform.options.favorable'), percentage: 62, votes: 15847 },
        { label: t('polls.fiscalReform.options.contrary'), percentage: 32, votes: 8174 },
        { label: t('polls.fiscalReform.options.dontKnow'), percentage: 6, votes: 1532 }
      ],
      totalVotes: 25553,
      endDate: '15/02/2025',
      region: t('common.national')
    },
    {
      id: '2',
      title: t('polls.energyTransition.title'),
      description: t('polls.energyTransition.description'),
      category: 'ambiente' as const,
      status: 'attivo' as const,
      color: 'green',
      options: [
        { label: t('polls.energyTransition.options.increase'), percentage: 73, votes: 18250 },
        { label: t('polls.energyTransition.options.maintain'), percentage: 22, votes: 5500 },
        { label: t('polls.energyTransition.options.reduce'), percentage: 5, votes: 1250 }
      ],
      totalVotes: 25000,
      endDate: '10/03/2025',
      region: t('common.national')
    },
    {
      id: '3',
      title: t('polls.citizenshipReferendum.title'),
      description: t('polls.citizenshipReferendum.description'),
      category: 'sociale' as const,
      status: 'urgente' as const,
      color: 'red',
      options: [
        { label: t('polls.citizenshipReferendum.options.yesReduction'), percentage: 47, votes: 11750 },
        { label: t('polls.citizenshipReferendum.options.noMaintain'), percentage: 38, votes: 9500 },
        { label: t('polls.citizenshipReferendum.options.yesConditions'), percentage: 15, votes: 3750 }
      ],
      totalVotes: 25000,
      endDate: '28/01/2025',
      region: t('common.national')
    },
    {
      id: '4',
      title: t('polls.pensionReform.title'),
      description: t('polls.pensionReform.description'),
      category: 'sociale' as const,
      status: 'attivo' as const,
      color: 'blue',
      options: [
        { label: t('polls.pensionReform.options.favorable'), percentage: 54, votes: 13500 },
        { label: t('polls.pensionReform.options.contrary'), percentage: 38, votes: 9500 },
        { label: t('polls.pensionReform.options.indecisive'), percentage: 8, votes: 2000 }
      ],
      totalVotes: 25000,
      endDate: '20/02/2025',
      region: t('common.national')
    },
    {
      id: '5',
      title: t('polls.digitalizationPA.title'),
      description: t('polls.digitalizationPA.description'),
      category: 'tecnologia' as const,
      status: 'attivo' as const,
      color: 'purple',
      options: [
        { label: t('polls.digitalizationPA.options.priority'), percentage: 68, votes: 17000 },
        { label: t('polls.digitalizationPA.options.gradual'), percentage: 25, votes: 6250 },
        { label: t('polls.digitalizationPA.options.nonPriority'), percentage: 7, votes: 1750 }
      ],
      totalVotes: 25000,
      endDate: '05/03/2025',
      region: t('common.national')
    },
    {
      id: '6',
      title: t('polls.healthTerritorial.title'),
      description: t('polls.healthTerritorial.description'),
      category: 'sanita' as const,
      status: 'attivo' as const,
      color: 'teal',
      options: [
        { label: t('polls.healthTerritorial.options.massive'), percentage: 71, votes: 17750 },
        { label: t('polls.healthTerritorial.options.mirative'), percentage: 24, votes: 6000 },
        { label: t('polls.healthTerritorial.options.statusQuo'), percentage: 5, votes: 1250 }
      ],
      totalVotes: 25000,
      endDate: '25/02/2025',
      region: t('common.national')
    },
    {
      id: '7',
      title: t('polls.publicTransport.title'),
      description: t('polls.publicTransport.description'),
      category: 'trasporti' as const,
      status: 'attivo' as const,
      color: 'orange',
      options: [
        { label: t('polls.publicTransport.options.important'), percentage: 64, votes: 16000 },
        { label: t('polls.publicTransport.options.gradual'), percentage: 28, votes: 7000 },
        { label: t('polls.publicTransport.options.notNeeded'), percentage: 8, votes: 2000 }
      ],
      totalVotes: 25000,
      endDate: '15/03/2025',
      region: t('common.national')
    },
    {
      id: '8',
      title: t('polls.schoolDigitalization.title'),
      description: t('polls.schoolDigitalization.description'),
      category: 'istruzione' as const,
      status: 'attivo' as const,
      color: 'cyan',
      options: [
        { label: t('polls.schoolDigitalization.options.complete'), percentage: 52, votes: 13000 },
        { label: t('polls.schoolDigitalization.options.mixed'), percentage: 39, votes: 9750 },
        { label: t('polls.schoolDigitalization.options.traditional'), percentage: 9, votes: 2250 }
      ],
      totalVotes: 25000,
      endDate: '12/03/2025',
      region: t('common.national')
    },
    {
      id: '9',
      title: t('polls.urbanSecurity.title'),
      description: t('polls.urbanSecurity.description'),
      category: 'sicurezza' as const,
      status: 'urgente' as const,
      color: 'red',
      options: [
        { label: t('polls.urbanSecurity.options.moreForces'), percentage: 43, votes: 10750 },
        { label: t('polls.urbanSecurity.options.smartTechnologies'), percentage: 35, votes: 8750 },
        { label: t('polls.urbanSecurity.options.socialPrevention'), percentage: 22, votes: 5500 }
      ],
      totalVotes: 25000,
      endDate: '30/01/2025',
      region: t('common.national')
    },
    {
      id: '10',
      title: t('polls.sustainableAgriculture.title'),
      description: t('polls.sustainableAgriculture.description'),
      category: 'ambiente' as const,
      status: 'attivo' as const,
      color: 'green',
      options: [
        { label: t('polls.sustainableAgriculture.options.bioIncentives'), percentage: 58, votes: 14500 },
        { label: t('polls.sustainableAgriculture.options.gradualRegulation'), percentage: 32, votes: 8000 },
        { label: t('polls.sustainableAgriculture.options.current'), percentage: 10, votes: 2500 }
      ],
      totalVotes: 25000,
      endDate: '18/03/2025',
      region: t('common.national')
    }
  ];

  const regions = ['Tutti', 'Nazionale', 'Lombardia', 'Lazio', 'Veneto', 'Emilia-Romagna', 'Toscana'];
  const categories = ['Tutti', 'Fiscale', 'Sociale', 'Ambiente', 'Trasporti', 'Economia', 'Tecnologia', 'Sanita', 'Istruzione', 'Sicurezza'];

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
          bg: 'bg-yellow-50 dark:bg-yellow-900/20',
          header: 'bg-yellow-400 dark:bg-yellow-600',
          button: 'bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-600 dark:hover:bg-yellow-700',
          progress: 'bg-yellow-400 dark:bg-yellow-600'
        };
      case 'teal':
        return {
          bg: 'bg-teal-50 dark:bg-teal-900/20',
          header: 'bg-teal-500 dark:bg-teal-600',
          button: 'bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700',
          progress: 'bg-teal-500 dark:bg-teal-600'
        };
      case 'green':
        return {
          bg: 'bg-green-50 dark:bg-green-900/20',
          header: 'bg-green-500 dark:bg-green-600',
          button: 'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700',
          progress: 'bg-green-500 dark:bg-green-600'
        };
      case 'red':
        return {
          bg: 'bg-red-50 dark:bg-red-900/20',
          header: 'bg-red-500 dark:bg-red-600',
          button: 'bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700',
          progress: 'bg-red-500 dark:bg-red-600'
        };
      case 'blue':
        return {
          bg: 'bg-blue-50 dark:bg-blue-900/20',
          header: 'bg-blue-500 dark:bg-blue-600',
          button: 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700',
          progress: 'bg-blue-500 dark:bg-blue-600'
        };
      case 'purple':
        return {
          bg: 'bg-purple-50 dark:bg-purple-900/20',
          header: 'bg-purple-500 dark:bg-purple-600',
          button: 'bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700',
          progress: 'bg-purple-500 dark:bg-purple-600'
        };
      case 'orange':
        return {
          bg: 'bg-orange-50 dark:bg-orange-900/20',
          header: 'bg-orange-500 dark:bg-orange-600',
          button: 'bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700',
          progress: 'bg-orange-500 dark:bg-orange-600'
        };
      case 'cyan':
        return {
          bg: 'bg-cyan-50 dark:bg-cyan-900/20',
          header: 'bg-cyan-500 dark:bg-cyan-600',
          button: 'bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700',
          progress: 'bg-cyan-500 dark:bg-cyan-600'
        };
      default:
        return {
          bg: 'bg-blue-50 dark:bg-blue-900/20',
          header: 'bg-blue-500 dark:bg-blue-600',
          button: 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700',
          progress: 'bg-blue-500 dark:bg-blue-600'
        };
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header isAuthenticated={true} userName={t('common.guest')} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('polls.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {t('polls.subtitle')}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-0 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              type="search"
              placeholder={t('polls.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 dark:text-white"
            >
              <option value="tutti">{t('filters.allRegions')}</option>
              <option value="nazionale">{t('common.national')}</option>
              <option value="lombardia">Lombardia</option>
              <option value="lazio">Lazio</option>
              <option value="veneto">Veneto</option>
              <option value="emilia-romagna">Emilia-Romagna</option>
              <option value="toscana">Toscana</option>
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 dark:text-white"
            >
              <option value="tutti">{t('filters.allCategories')}</option>
              <option value="fiscale">{t('categories.fiscal')}</option>
              <option value="sociale">{t('categories.social')}</option>
              <option value="ambiente">{t('categories.environment')}</option>
              <option value="trasporti">{t('categories.transport')}</option>
              <option value="economia">{t('categories.economy')}</option>
              <option value="tecnologia">{t('categories.technology')}</option>
              <option value="sanita">{t('categories.health')}</option>
              <option value="istruzione">{t('categories.education')}</option>
              <option value="sicurezza">{t('categories.security')}</option>
            </select>
          </div>
        </div>

        {/* Sondaggi Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPolls.map(poll => {
            const colors = getColorClasses(poll.color);
            return (
              <Card key={poll.id} className={`${colors.bg} rounded-2xl shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow`}>
                <CardHeader className={`${colors.header} text-white p-4`}>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{poll.title}</CardTitle>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      poll.status === 'urgente' ? 'bg-red-500' : 'bg-white/20'
                    }`}>
                      {poll.status === 'urgente' ? t('status.urgent') : t('status.active')}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {poll.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t('polls.favorable')}: {poll.options[0].percentage}%
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className={`${colors.progress} h-2 rounded-full`}
                        style={{ width: `${poll.options[0].percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {poll.totalVotes.toLocaleString()} {t('polls.participants')} • {t('polls.expires')}: {poll.endDate}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      className={`${colors.button} text-white rounded-full px-4 py-2 text-sm flex-1`}
                      onClick={() => navigate(`/partecipa/${poll.id}`)}
                    >
                      {t('polls.participate')}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="rounded-full px-4 py-2 text-sm"
                      onClick={() => navigate(`/sondaggio/${poll.id}`)}
                    >
                      {t('polls.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sondaggi;
