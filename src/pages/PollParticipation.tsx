
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pollQuestions = {
    '3': { // Transizione Energetica
      title: 'Transizione Energetica',
      description: 'La tua opinione su investimenti e politiche per accelerare la transizione verso energie rinnovabili',
      questions: [
        {
          id: '1',
          type: 'radio',
          question: 'Quale fonte di energia rinnovabile ritieni più importante per il futuro?',
          options: ['Solare', 'Eolico', 'Idroeletrico', 'Geotermico', 'Altra (specificare)', 'Non so']
        },
        {
          id: '2',
          type: 'radio',
          question: 'Ritieni che il governo debba incentivare l\'uso di energie rinnovabili con agevolazioni fiscali per aziende e cittadini?',
          options: ['Sì, fortemente d\'accordo', 'Sì, ma con regolamentazione chiara', 'No, bisogna investire in altre fonti', 'Altro (specificare)', 'Non so']
        },
        {
          id: '3',
          type: 'checkbox',
          question: 'Quale misura ritieni più efficace per promuovere l\'efficienza energetica nelle abitazioni?',
          options: [
            'Incentivi per il miglioramento dell\'isolamento termico',
            'Agevolazioni per l\'installazione di pannelli solari',
            'Promozione di elettrodomestici a basso consumo',
            'Educazione alla riduzione dello spreco energetico'
          ]
        },
        {
          id: '4',
          type: 'radio',
          question: 'Quanto ritieni che sia importante investire nella ricerca e sviluppo per nuove tecnologie energetiche?',
          options: [
            'Importante, ma deve essere bilanciato con altre priorità',
            'Essenziale per garantire innovazione e sostenibilità',
            'Poco rilevante rispetto ad altre esigenze economiche',
            'Non necessario, le tecnologie attuali sono già sufficienti'
          ]
        },
        {
          id: '5',
          type: 'radio',
          question: 'Quale ritieni che sia il ruolo delle tecnologie smart per ottimizzare il consumo energetico?',
          options: [
            'Fondamentale per il monitoraggio e l\'ottimizzazione',
            'Utile ma non prioritario',
            'Troppo costoso per il valore che offre',
            'Non conosco abbastanza per giudicare'
          ]
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
                ) : (
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
