
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, CheckCircle } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const PollParticipation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pollQuestions = {
    '1': { // Riforma Fiscale
      title: 'Riforma Fiscale 2025',
      description: 'La tua opinione sulla proposta di riforma fiscale con nuove aliquote e detrazioni',
      questions: [
        {
          id: '1',
          type: 'radio',
          question: 'Quale aspetto della riforma fiscale consideri più importante?',
          options: ['Riduzione aliquote sui redditi bassi', 'Semplificazione del sistema tributario', 'Maggiori detrazioni per famiglie', 'Lotta all\'evasione fiscale', 'Incentivi per le imprese', 'Non so']
        },
        {
          id: '2',
          type: 'radio',
          question: 'Ritieni che la flat tax sia una soluzione efficace?',
          options: ['Sì, semplifica tutto', 'Sì, ma solo per alcuni redditi', 'No, è ingiusta', 'No, riduce le entrate statali', 'Dipende dall\'aliquota', 'Non so abbastanza per giudicare']
        },
        {
          id: '3',
          type: 'checkbox',
          question: 'Quali settori dovrebbero beneficiare di maggiori agevolazioni fiscali?',
          options: ['Sanità e ricerca medica', 'Istruzione e formazione', 'Ambiente e sostenibilità', 'Innovazione tecnologica', 'Cultura e turismo', 'Agricoltura sostenibile']
        },
        {
          id: '4',
          type: 'radio',
          question: 'Come valuti l\'attuale pressione fiscale in Italia?',
          options: ['Troppo alta', 'Accettabile', 'Giusta per i servizi offerti', 'Dovrebbe essere più progressiva', 'Non so']
        },
        {
          id: '5',
          type: 'radio',
          question: 'Quale misura anti-evasione consideri più efficace?',
          options: ['Fatturazione elettronica obbligatoria', 'Controlli automatizzati dell\'Agenzia delle Entrate', 'Incentivi per chi segnala irregolarità', 'Maggiori sanzioni', 'Semplificazione degli adempimenti', 'Educazione fiscale']
        },
        {
          id: '6',
          type: 'textarea',
          question: 'Hai suggerimenti specifici per migliorare il sistema fiscale italiano?',
          options: []
        }
      ]
    },
    '2': { // Transizione Energetica
      title: 'Transizione Energetica',
      description: 'La tua opinione su investimenti e politiche per accelerare la transizione verso energie rinnovabili',
      questions: [
        {
          id: '1',
          type: 'radio',
          question: 'Quale fonte di energia rinnovabile dovrebbe essere prioritaria per l\'Italia?',
          options: ['Solare fotovoltaico', 'Eolico offshore', 'Eolico onshore', 'Idroeletrico', 'Geotermico', 'Biomasse sostenibili']
        },
        {
          id: '2',
          type: 'radio',
          question: 'Qual è la principale barriera alla transizione energetica?',
          options: ['Costi elevati', 'Mancanza di tecnologie', 'Resistenza delle lobby', 'Complessità burocratica', 'Mancanza di informazione', 'Instabilità normativa']
        },
        {
          id: '3',
          type: 'checkbox',
          question: 'Quali incentivi per l\'efficienza energetica domestica ritieni più utili?',
          options: ['Superbonus per isolamento termico', 'Agevolazioni per pompe di calore', 'Incentivi per pannelli solari', 'Sconti per elettrodomestici efficienti', 'Sistemi di accumulo energetico', 'Smart home e domotica']
        },
        {
          id: '4',
          type: 'radio',
          question: 'Come dovrebbe essere finanziata la transizione energetica?',
          options: ['Principalmente con fondi pubblici', 'Mix pubblico-privato', 'Principalmente investimenti privati', 'Fondi europei', 'Tasse ambientali', 'Green bonds']
        },
        {
          id: '5',
          type: 'radio',
          question: 'Entro quale anno l\'Italia dovrebbe raggiungere la neutralità carbonica?',
          options: ['2030', '2040', '2050', '2060', 'Non è possibile', 'Non so']
        },
        {
          id: '6',
          type: 'radio',
          question: 'Quale ruolo dovrebbe avere il nucleare nella transizione energetica italiana?',
          options: ['Nessuno, solo rinnovabili', 'Mantenere centrali esistenti', 'Nuove centrali di ultima generazione', 'Piccoli reattori modulari', 'Ricerca su fusione nucleare', 'Non ho opinioni al riguardo']
        },
        {
          id: '7',
          type: 'textarea',
          question: 'Quale iniziativa energetica vorresti vedere implementata nella tua regione?',
          options: []
        }
      ]
    },
    '3': { // Sanità Digitale
      title: 'Sanità Digitale',
      description: 'Modernizzazione del sistema sanitario nazionale attraverso tecnologie digitali',
      questions: [
        {
          id: '1',
          type: 'radio',
          question: 'Qual è la priorità per la digitalizzazione della sanità?',
          options: ['Fascicolo sanitario elettronico', 'Telemedicina e consulti online', 'Prescrizioni elettroniche', 'App per prenotazioni', 'Intelligenza artificiale per diagnosi', 'Cartelle cliniche integrate']
        },
        {
          id: '2',
          type: 'checkbox',
          question: 'Quali servizi di telemedicina utilizzeresti?',
          options: ['Consulti medici online', 'Monitoraggio remoto parametri vitali', 'Terapie riabilitative a distanza', 'Consulenze psicologiche online', 'Controlli post-operatori virtuali', 'Nessuno, preferisco visite in presenza']
        },
        {
          id: '3',
          type: 'radio',
          question: 'Quanto ti fidi della condivisione dei tuoi dati sanitari digitali?',
          options: ['Molto, se migliora le cure', 'Abbastanza, con le giuste garanzie', 'Poco, ho preoccupazioni sulla privacy', 'Per niente, troppo rischioso', 'Dipende dal tipo di dato', 'Non so']
        },
        {
          id: '4',
          type: 'radio',
          question: 'Come dovrebbe essere gestita l\'identità digitale sanitaria?',
          options: ['Sistema unico nazionale', 'Sistemi regionali integrati', 'Partnership pubblico-privato', 'Standard europei', 'Blockchain per sicurezza', 'Non ho preferenze']
        },
        {
          id: '5',
          type: 'radio',
          question: 'Quale innovazione potrebbe migliorare di più l\'assistenza sanitaria?',
          options: ['AI per diagnosi precoce', 'Robotica chirurgica', 'Medicina personalizzata', 'Wearable per monitoraggio salute', 'Realtà virtuale per terapie', 'Genomica e medicina di precisione']
        },
        {
          id: '6',
          type: 'textarea',
          question: 'Descrivi la tua esperienza ideale con la sanità digitale',
          options: []
        }
      ]
    }
  };

  const currentPoll = pollQuestions[id as keyof typeof pollQuestions];

  if (!currentPoll) {
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

  const handleAnswerChange = (questionId: string, value: string | string[], type: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSubmit = () => {
    const allQuestionsAnswered = currentPoll.questions.every(q => 
      answers[q.id] && (
        Array.isArray(answers[q.id]) ? 
        (answers[q.id] as string[]).length > 0 : 
        (answers[q.id] as string).trim() !== ''
      )
    );

    if (!allQuestionsAnswered) {
      alert('Per favore rispondi a tutte le domande prima di inviare.');
      return;
    }

    setShowConfirmDialog(true);
  };

  const confirmSubmit = async () => {
    setShowConfirmDialog(false);
    setIsSubmitting(true);
    
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Card className="bg-white dark:bg-gray-800 text-center p-12">
            <div className="animate-scale-in">
              <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Grazie per la tua partecipazione!
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Le tue risposte sono state registrate con successo. Il tuo contributo è fondamentale per la democrazia partecipativa.
              </p>
              <div className="space-y-4">
                <Button 
                  onClick={() => navigate('/sondaggi')}
                  className="bg-blue-600 hover:bg-blue-700 text-white mr-4"
                >
                  Altri Sondaggi
                </Button>
                <Button 
                  onClick={() => navigate('/dashboard')}
                  variant="outline"
                >
                  Vai alla Dashboard
                </Button>
              </div>
            </div>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  if (isSubmitting) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Card className="bg-white dark:bg-gray-800 text-center p-12">
            <div className="animate-pulse">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-6 animate-spin">
                <div className="w-4 h-4 bg-white rounded-full mt-6 ml-6"></div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Invio in corso...
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Stiamo elaborando le tue risposte. Non chiudere la pagina.
              </p>
            </div>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Button 
            onClick={() => navigate('/sondaggi')}
            variant="ghost" 
            className="mb-4 text-gray-600 dark:text-gray-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna ai sondaggi
          </Button>
          
          <Badge className="bg-green-500 text-white mb-4">ATTIVO</Badge>
          
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {currentPoll.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {currentPoll.description}
          </p>

          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>Progresso sondaggio</span>
              <span>{Object.keys(answers).length}/{currentPoll.questions.length}</span>
            </div>
            <Progress 
              value={(Object.keys(answers).length / currentPoll.questions.length) * 100} 
              className="h-2"
            />
          </div>
        </div>

        <div className="space-y-8">
          {currentPoll.questions.map((question, index) => (
            <Card key={question.id} className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white flex items-start">
                  <span className="bg-blue-500 text-white text-sm rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    {index + 1}
                  </span>
                  {question.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {question.type === 'radio' ? (
                  <RadioGroup 
                    value={answers[question.id] as string || ''} 
                    onValueChange={(value) => handleAnswerChange(question.id, value, 'radio')}
                  >
                    {question.options.map((option, optIndex) => (
                      <div key={optIndex} className="flex items-center space-x-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <RadioGroupItem value={option} id={`${question.id}-${optIndex}`} />
                        <Label 
                          htmlFor={`${question.id}-${optIndex}`} 
                          className="text-gray-700 dark:text-gray-300 cursor-pointer flex-1"
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                ) : question.type === 'checkbox' ? (
                  <div className="space-y-3">
                    {question.options.map((option, optIndex) => (
                      <div key={optIndex} className="flex items-center space-x-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <Checkbox
                          id={`${question.id}-${optIndex}`}
                          checked={(answers[question.id] as string[] || []).includes(option)}
                          onCheckedChange={(checked) => {
                            const currentAnswers = answers[question.id] as string[] || [];
                            if (checked) {
                              handleAnswerChange(question.id, [...currentAnswers, option], 'checkbox');
                            } else {
                              handleAnswerChange(question.id, currentAnswers.filter(a => a !== option), 'checkbox');
                            }
                          }}
                        />
                        <Label 
                          htmlFor={`${question.id}-${optIndex}`} 
                          className="text-gray-700 dark:text-gray-300 cursor-pointer flex-1"
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <Textarea
                    value={answers[question.id] as string || ''}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value, 'textarea')}
                    placeholder="Scrivi la tua risposta..."
                    className="min-h-[100px] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button 
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
            size="lg"
          >
            Invia Risposte
          </Button>
        </div>
      </div>

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent className="bg-white dark:bg-gray-800">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-gray-900 dark:text-white">
              Conferma invio sondaggio
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600 dark:text-gray-300">
              Sei sicuro di voler inviare le tue risposte? Una volta inviate non potrai più modificarle.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-gray-600 dark:text-gray-300">
              Annulla
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmSubmit}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Conferma invio
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Footer />
    </div>
  );
};

export default PollParticipation;
