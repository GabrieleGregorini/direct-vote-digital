
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Users, Calendar, MapPin, TrendingUp } from 'lucide-react';

const SondaggioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const [hasVoted, setHasVoted] = useState(false);

  // Mock data per i sondaggi estesi
  const pollsData: Record<string, any> = {
    '1': {
      id: '1',
      title: 'Riforma Fiscale 2025',
      description: 'Valutazione della proposta di riforma fiscale con nuove aliquote e detrazioni per famiglie e imprese.',
      fullDescription: 'La proposta di riforma fiscale 2025 prevede una revisione completa del sistema tributario italiano con l\'obiettivo di ridurre la pressione fiscale sui redditi medi e bassi, incentivare la crescita economica e combattere l\'evasione fiscale. La riforma include nuove aliquote progressive, detrazioni maggiorate per famiglie con figli e incentivi per le imprese che investono in innovazione e sostenibilità.',
      category: 'fiscale',
      status: 'attivo',
      promoter: 'Ministero dell\'Economia e delle Finanze',
      whyImportant: 'Questa riforma potrebbe impattare significativamente il potere d\'acquisto delle famiglie italiane e la competitività delle imprese nazionali sui mercati internazionali.',
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
        age: {
          '18-25': 18,
          '26-35': 28,
          '36-50': 31,
          '51-65': 18,
          '65+': 5
        },
        gender: {
          'Maschi': 52,
          'Femmine': 46,
          'Altro': 2
        },
        region: {
          'Nord': 45,
          'Centro': 25,
          'Sud': 30
        }
      }
    },
    '2': {
      id: '2',
      title: 'Referendum Cittadinanza',
      description: 'Modifica dei criteri per l\'acquisizione della cittadinanza italiana per cittadini stranieri residenti.',
      fullDescription: 'Il referendum propone di ridurre da 10 a 5 anni il periodo di residenza legale continuativa necessario per richiedere la cittadinanza italiana per naturalizzazione. La proposta include anche la semplificazione delle procedure burocratiche e l\'introduzione di un test di lingua italiana e cultura civica.',
      category: 'sociale',
      status: 'urgente',
      promoter: 'Coalizione per i Diritti Civili',
      whyImportant: 'La riforma potrebbe facilitare l\'integrazione di circa 1.2 milioni di stranieri attualmente residenti in Italia, con impatti significativi sul tessuto sociale ed economico del paese.',
      options: [
        { 
          label: 'Si, riduzione a 5 anni', 
          percentage: 47, 
          votes: 11750,
          description: 'Sostegno alla riduzione del periodo di residenza'
        },
        { 
          label: 'No, mantenere 10 anni', 
          percentage: 38, 
          votes: 9500,
          description: 'Mantenimento delle regole attuali'
        },
        { 
          label: 'Si, ma con condizioni aggiuntive', 
          percentage: 12, 
          votes: 3000,
          description: 'Riduzione con requisiti più stringenti'
        },
        { 
          label: 'Astensione', 
          percentage: 3, 
          votes: 750,
          description: 'Nessuna preferenza espressa'
        }
      ],
      totalVotes: 25000,
      endDate: '28/01/2025',
      region: 'Nazionale',
      demographics: {
        age: {
          '18-25': 32,
          '26-35': 28,
          '36-50': 25,
          '51-65': 12,
          '65+': 3
        },
        gender: {
          'Maschi': 48,
          'Femmine': 50,
          'Altro': 2
        },
        region: {
          'Nord': 42,
          'Centro': 28,
          'Sud': 30
        }
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
      // Qui normalmente invieresti il voto al backend
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

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header della pagina */}
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
          {/* Colonna principale */}
          <div className="lg:col-span-2 space-y-8">
            {/* Descrizione completa */}
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

            {/* Ente promotore e importanza */}
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

            {/* Risultati dettagliati */}
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

            {/* Dati demografici */}
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Analisi Demografica</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Per Età</h4>
                  <div className="grid grid-cols-5 gap-2">
                    {Object.entries(poll.demographics.age).map(([age, percentage]) => (
                      <div key={age} className="text-center">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{age}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{percentage}%</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Per Genere</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(poll.demographics.gender).map(([gender, percentage]) => (
                      <div key={gender} className="text-center">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{gender}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{percentage}%</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Per Area Geografica</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(poll.demographics.region).map(([region, percentage]) => (
                      <div key={region} className="text-center">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{region}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{percentage}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Info box */}
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

            {/* Voting box */}
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

            {/* Trending */}
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
