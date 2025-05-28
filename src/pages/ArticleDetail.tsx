
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, User, Eye, Share2 } from 'lucide-react';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data per gli articoli completi
  const articlesData: Record<string, any> = {
    '1': {
      id: '1',
      title: 'Nuova Riforma del Sistema Elettorale: Maggiore Partecipazione Digitale',
      category: 'politica',
      publishDate: '2025-01-20',
      author: 'Ministero dell\'Interno',
      readTime: '5 min',
      views: '12.547',
      image: '/api/placeholder/800/400',
      content: `
        <h2>Una rivoluzione democratica in arrivo</h2>
        <p>Il Parlamento italiano ha approvato all'unanimità una riforma storica che introdurrà strumenti digitali innovativi per incrementare la partecipazione cittadina nei processi democratici. La riforma, che entrerà in vigore a partire dal 1° marzo 2025, rappresenta un passo decisivo verso una democrazia più inclusiva e accessibile.</p>
        
        <h3>I punti chiave della riforma</h3>
        <p>La nuova legislazione prevede l'integrazione di piattaforme online sicure per consultazioni pubbliche e referendum digitali, garantendo la massima trasparenza e verificabilità del processo democratico. Tra le innovazioni principali:</p>
        
        <ul>
          <li><strong>Referendum digitali vincolanti:</strong> I cittadini potranno esprimere il proprio voto su questioni di rilevanza nazionale attraverso una piattaforma sicura e certificata</li>
          <li><strong>Consultazioni pubbliche permanenti:</strong> Un sistema di consultazione continua su progetti di legge e proposte governative</li>
          <li><strong>Trasparenza totale:</strong> Tutti i dati di partecipazione saranno pubblici e verificabili in tempo reale</li>
          <li><strong>Accessibilità universale:</strong> La piattaforma sarà accessibile a tutti i cittadini, inclusi quelli con disabilità</li>
        </ul>
        
        <h3>Sicurezza e affidabilità</h3>
        <p>Il sistema utilizzerà le più avanzate tecnologie di crittografia e blockchain per garantire l'integrità del voto. L'autenticazione avverrà tramite SPID, CIE e sistemi eIDAS, assicurando che ogni voto sia verificabile ma anonimo.</p>
        
        <p>Il Ministro per l'Innovazione Tecnologica ha dichiarato: "Questa riforma posiziona l'Italia all'avanguardia mondiale nella democrazia digitale. Stiamo creando un modello che altri paesi potranno seguire."</p>
        
        <h3>Impatti attesi</h3>
        <p>Gli esperti prevedono un aumento significativo della partecipazione democratica, specialmente tra i giovani. Studi preliminari indicano che la partecipazione alle consultazioni potrebbe aumentare del 300% nei primi due anni di implementazione.</p>
        
        <p>La riforma include anche meccanismi di educazione civica digitale per preparare i cittadini al nuovo sistema democratico, con corsi gratuiti disponibili online e presso i centri civici.</p>
        
        <h3>Prossimi passi</h3>
        <p>Nei prossimi mesi inizierà la fase di testing con consultazioni pilota in alcune regioni selezionate. Il primo referendum digitale nazionale è previsto per l'estate 2025 e riguarderà la riforma costituzionale per l'ambiente.</p>
      `
    },
    '2': {
      id: '2',
      title: 'Trasparenza nei Dati Pubblici: Report Trimestrale Disponibile',
      category: 'trasparenza',
      publishDate: '2025-01-19',
      author: 'ANAC',
      readTime: '8 min',
      views: '8.932',
      image: '/api/placeholder/800/400',
      content: `
        <h2>Massima trasparenza per una democrazia più forte</h2>
        <p>L'Autorità Nazionale Anticorruzione (ANAC) ha pubblicato il suo report trimestrale sulla trasparenza dei dati pubblici, evidenziando progressi significativi nella partecipazione cittadina e nell'accesso alle informazioni governative.</p>
        
        <h3>Dati chiave del trimestre</h3>
        <p>Il report evidenzia numeri record per la partecipazione democratica digitale:</p>
        
        <ul>
          <li><strong>2.3 milioni</strong> di cittadini attivi sulla piattaforma</li>
          <li><strong>156 consultazioni</strong> pubbliche completate</li>
          <li><strong>89%</strong> di soddisfazione media degli utenti</li>
          <li><strong>24/7</strong> disponibilità del sistema senza interruzioni</li>
        </ul>
        
        <h3>Analisi demografica dettagliata</h3>
        <p>Il report include per la prima volta un'analisi approfondita della partecipazione per fasce demografiche:</p>
        
        <p><strong>Partecipazione per età:</strong></p>
        <ul>
          <li>18-25 anni: 28% (+15% rispetto al trimestre precedente)</li>
          <li>26-35 anni: 31% (+8%)</li>
          <li>36-50 anni: 25% (+3%)</li>
          <li>51-65 anni: 12% (+2%)</li>
          <li>Over 65: 4% (+1%)</li>
        </ul>
        
        <p><strong>Distribuzione geografica:</strong></p>
        <p>Il Nord Italia mantiene il primato nella partecipazione (45%), seguito dal Centro (28%) e dal Sud (27%). Tuttavia, il gap si sta riducendo grazie alle iniziative di alfabetizzazione digitale.</p>
        
        <h3>Miglioramenti implementati</h3>
        <p>Sulla base dei feedback ricevuti, sono stati implementati importanti miglioramenti:</p>
        
        <ul>
          <li>Nuova interfaccia più intuitiva</li>
          <li>Supporto multilingue per le comunità straniere</li>
          <li>Sezione dedicata all'accessibilità</li>
          <li>Sistema di notifiche personalizzabili</li>
        </ul>
        
        <h3>Obiettivi per il prossimo trimestre</h3>
        <p>ANAC ha annunciato ambiziosi obiettivi per i prossimi tre mesi, incluso il raggiungimento di 3 milioni di utenti attivi e l'introduzione di nuove funzionalità di analisi predittiva per anticipare le esigenze dei cittadini.</p>
      `
    }
  };

  const article = articlesData[id || '1'];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Articolo non trovato</h1>
          <Button onClick={() => navigate('/news')}>Torna alle news</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'politica': return 'bg-blue-500 text-white';
      case 'trasparenza': return 'bg-green-500 text-white';
      case 'tecnologia': return 'bg-purple-500 text-white';
      case 'sociale': return 'bg-yellow-500 text-white';
      case 'europa': return 'bg-blue-700 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header dell'articolo */}
        <div className="mb-8">
          <Button 
            onClick={() => navigate('/news')}
            variant="ghost" 
            className="mb-6 text-gray-600 dark:text-gray-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna alle news
          </Button>
          
          <Badge className={`${getCategoryColor(article.category)} mb-4`}>
            {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
          </Badge>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {article.title}
          </h1>
          
          {/* Meta informazioni */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.publishDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{article.views} visualizzazioni</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📖 {article.readTime} di lettura</span>
            </div>
          </div>
        </div>

        {/* Contenuto principale */}
        <Card className="bg-white dark:bg-gray-800 mb-8">
          <CardContent className="p-8">
            {/* Immagine di copertina */}
            <div className="w-full h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-8 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                📰 Immagine dell'articolo
              </span>
            </div>
            
            {/* Contenuto dell'articolo */}
            <div 
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-ul:text-gray-700 dark:prose-ul:text-gray-300"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </CardContent>
        </Card>

        {/* Azioni e condivisione */}
        <Card className="bg-white dark:bg-gray-800 mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button 
                  onClick={() => navigate('/news')}
                  variant="outline"
                  className="dark:border-gray-600 dark:text-gray-300"
                >
                  ← Altri articoli
                </Button>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 dark:text-gray-400 mr-3">Condividi:</span>
                <Button size="sm" variant="outline" className="dark:border-gray-600">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="dark:border-gray-600">
                  📧
                </Button>
                <Button size="sm" variant="outline" className="dark:border-gray-600">
                  🔗
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Articoli correlati */}
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Articoli Correlati</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Cybersecurity e Voto Elettronico: Nuovi Standard
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Implementati nuovi protocolli di sicurezza per garantire l'integrità...
                </p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Partecipazione Giovanile: +25% di Engagement
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  I dati mostrano un significativo aumento della partecipazione...
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
