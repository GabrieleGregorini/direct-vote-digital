import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Users, Calendar, MapPin, TrendingUp } from 'lucide-react';

const SondaggioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [selectedOption, setSelectedOption] = useState('');
  const [hasVoted, setHasVoted] = useState(false);

  // Mock data per i sondaggi estesi
  const pollsData: Record<string, any> = {
    '1': {
      id: '1',
      title: 'Riforma Fiscale 2025',
      description: 'Valutazione della proposta di riforma fiscale con nuove aliquote e detrazioni per famiglie e imprese.',
      fullDescription: 'La proposta di riforma fiscale 2025 prevede una revisione completa del sistema tributario italiano con l\'obiettivo di ridurre la pressione fiscale sui redditi medi e bassi, incentivare la crescita economica e combattere l\'evasione fiscale attraverso l\'introduzione di nuove tecnologie e semplificazioni burocratiche.',
      category: 'fiscale',
      status: 'attivo',
      promoter: 'Ministero dell\'Economia e delle Finanze',
      whyImportant: 'Questa riforma potrebbe impattare significativamente il potere d\'acquisto delle famiglie italiane e la competitività delle imprese.',
      options: [
        { 
          label: 'Favorevole alla riforma completa', 
          percentage: 62, 
          votes: 15847,
          description: 'Sostegno alla riforma fiscale nella sua interezza'
        },
        { 
          label: 'Favorevole solo ad alcune parti', 
          percentage: 25, 
          votes: 6386,
          description: 'Sostegno parziale con riserve su alcuni aspetti'
        },
        { 
          label: 'Contrario alla riforma', 
          percentage: 10, 
          votes: 2553,
          description: 'Opposizione alla proposta di riforma'
        },
        { 
          label: 'Non so / Serve più informazione', 
          percentage: 3, 
          votes: 767,
          description: 'Necessità di maggiori dettagli prima di decidere'
        }
      ],
      totalVotes: 25553,
      endDate: '15/02/2025',
      region: 'Nazionale',
      demographics: {
        age: [
          { name: '18-25', value: 18, color: '#8884d8' },
          { name: '26-35', value: 28, color: '#82ca9d' },
          { name: '36-50', value: 31, color: '#ffc658' },
          { name: '51-65', value: 18, color: '#ff7300' },
          { name: '65+', value: 5, color: '#0088fe' }
        ],
        gender: [
          { name: 'Maschi', value: 52, color: '#0088fe' },
          { name: 'Femmine', value: 46, color: '#00c49f' },
          { name: 'Altro', value: 2, color: '#ffbb28' }
        ],
        region: [
          { name: 'Nord', value: 45 },
          { name: 'Centro', value: 25 },
          { name: 'Sud', value: 30 }
        ],
        education: [
          { name: 'Elementare', value: 5 },
          { name: 'Media', value: 15 },
          { name: 'Superiore', value: 45 },
          { name: 'Laurea', value: 30 },
          { name: 'Post-Laurea', value: 5 }
        ]
      }
    }
  };

  const poll = pollsData[id || '1'];

  if (!poll) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sondaggio non trovato</h1>
          <Button onClick={() => navigate('/sondaggi')}>Torna ai sondaggi</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleVote = () => {
    if (selectedOption) {
      setHasVoted(true);
      console.log('Voto inviato:', selectedOption);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'attivo': return 'bg-green-500';
      case 'urgente': return 'bg-red-500';
      case 'scaduto': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const COLORS = ['#0088fe', '#00c49f', '#ffbb28', '#ff8042', '#8884d8'];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Button 
            onClick={() => navigate('/sondaggi')}
            variant="ghost" 
            className="mb-4 text-gray-600 dark:text-gray-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna ai sondaggi
          </Button>
          
          <div className="flex flex-wrap gap-4 items-center mb-4">
            <Badge className={`${getStatusColor(poll.status)} text-white`}>
              {poll.status.toUpperCase()}
            </Badge>
            <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
              {poll.category.charAt(0).toUpperCase() + poll.category.slice(1)}
            </Badge>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {poll.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {poll.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Descrizione Dettagliata</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {poll.fullDescription}
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Ente Promotore</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-blue-600 dark:text-blue-400">{poll.promoter}</p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Perché è importante</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {poll.whyImportant}
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Risultati Attuali</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {poll.options.map((option: any, index: number) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white">{option.label}</span>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {option.percentage}% ({option.votes.toLocaleString()} voti)
                      </span>
                    </div>
                    <Progress value={option.percentage} className="h-3" />
                    <p className="text-xs text-gray-600 dark:text-gray-400">{option.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Analisi Demografica Dettagliata</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Age Distribution */}
                  <div>
                    <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Distribuzione per Età</h4>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={poll.demographics.age}
                          cx="50%"
                          cy="50%"
                          outerRadius={60}
                          fill="#8884d8"
                          dataKey="value"
                          label={({name, value}) => `${name}: ${value}%`}
                        >
                          {poll.demographics.age.map((entry: any, index: number) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Gender Distribution */}
                  <div>
                    <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Distribuzione per Genere</h4>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={poll.demographics.gender}
                          cx="50%"
                          cy="50%"
                          outerRadius={60}
                          fill="#82ca9d"
                          dataKey="value"
                          label={({name, value}) => `${name}: ${value}%`}
                        >
                          {poll.demographics.gender.map((entry: any, index: number) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Regional Distribution */}
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Distribuzione Geografica</h4>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={poll.demographics.region}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value}%`, 'Percentuale']} />
                      <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Education Level */}
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Livello di Istruzione</h4>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={poll.demographics.education}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value}%`, 'Percentuale']} />
                      <Bar dataKey="value" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Informazioni</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Partecipanti</div>
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {poll.totalVotes.toLocaleString()}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Scadenza</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{poll.endDate}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Ambito</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{poll.region}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">
                  {hasVoted ? 'Voto Registrato' : 'Esprimi il tuo voto'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!hasVoted ? (
                  <div className="space-y-4">
                    <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
                      {poll.options.map((option: any, index: number) => (
                        <div key={index} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.label} id={`option-${index}`} />
                          <Label htmlFor={`option-${index}`} className="text-sm dark:text-gray-300">
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    
                    <Button 
                      onClick={handleVote}
                      disabled={!selectedOption}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Invia Voto
                    </Button>
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <div className="text-green-600 dark:text-green-400 text-5xl">✓</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Grazie per aver partecipato! Il tuo voto è stato registrato.
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      Hai votato: <strong>{selectedOption}</strong>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Trending
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Questo sondaggio ha ricevuto <strong>+25%</strong> di partecipazione nelle ultime 24 ore
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SondaggioDetail;
