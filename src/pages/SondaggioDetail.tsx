
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
      questions: [
        'Sei favorevole a un sistema fiscale progressivo?',
        'Le detrazioni fiscali dovrebbero essere semplificate?',
        'Sei d\'accordo con misure per combattere l\'evasione fiscale?',
        'Dovrebbe esserci una tassa sulle grandi transazioni finanziarie?'
      ],
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
    },
    '2': {
      id: '2',
      title: 'Transizione Energetica',
      description: 'Investimenti per accelerare la transizione verso energie rinnovabili e riduzione emissioni CO2.',
      fullDescription: 'Il piano per la transizione energetica prevede investimenti massicci in energie rinnovabili, efficientamento energetico degli edifici, sviluppo di tecnologie per l\'idrogeno verde e la graduale dismissione delle fonti fossili entro il 2035. L\'obiettivo è raggiungere la neutralità climatica in linea con gli accordi di Parigi.',
      category: 'ambiente',
      status: 'attivo',
      promoter: 'Ministero dell\'Ambiente e della Sicurezza Energetica',
      whyImportant: 'La transizione energetica è cruciale per combattere il cambiamento climatico e ridurre la dipendenza energetica dall\'estero.',
      questions: [
        'Sei favorevole agli investimenti nelle energie rinnovabili?',
        'L\'Italia dovrebbe abbandonare i combustibili fossili entro il 2035?',
        'Sostieni gli incentivi per i veicoli elettrici?',
        'Dovrebbero esserci regolamentazioni più severe sull\'efficienza energetica degli edifici?',
        'Sei d\'accordo con lo sviluppo dell\'energia nucleare come fonte di transizione?'
      ],
      options: [
        { 
          label: 'Incrementare investimenti', 
          percentage: 73, 
          votes: 18250,
          description: 'Aumentare significativamente i fondi per le rinnovabili'
        },
        { 
          label: 'Mantenere livelli attuali', 
          percentage: 22, 
          votes: 5500,
          description: 'Continuare con gli investimenti attuali'
        },
        { 
          label: 'Ridurre investimenti', 
          percentage: 5, 
          votes: 1250,
          description: 'Diminuire i fondi destinati alla transizione'
        }
      ],
      totalVotes: 25000,
      endDate: '10/03/2025',
      region: 'Nazionale',
      demographics: {
        age: [
          { name: '18-25', value: 35, color: '#8884d8' },
          { name: '26-35', value: 30, color: '#82ca9d' },
          { name: '36-50', value: 20, color: '#ffc658' },
          { name: '51-65', value: 12, color: '#ff7300' },
          { name: '65+', value: 3, color: '#0088fe' }
        ],
        gender: [
          { name: 'Maschi', value: 48, color: '#0088fe' },
          { name: 'Femmine', value: 50, color: '#00c49f' },
          { name: 'Altro', value: 2, color: '#ffbb28' }
        ],
        region: [
          { name: 'Nord', value: 50 },
          { name: 'Centro', value: 30 },
          { name: 'Sud', value: 20 }
        ],
        education: [
          { name: 'Elementare', value: 3 },
          { name: 'Media', value: 12 },
          { name: 'Superiore', value: 40 },
          { name: 'Laurea', value: 35 },
          { name: 'Post-Laurea', value: 10 }
        ]
      }
    },
    '3': {
      id: '3',
      title: 'Referendum Cittadinanza',
      description: 'Modifica dei criteri per l\'acquisizione della cittadinanza italiana.',
      fullDescription: 'Il referendum propone di ridurre da 10 a 5 anni il periodo di residenza legale continuativa richiesto per poter richiedere la cittadinanza italiana. Questa modifica interesserebbe circa 2 milioni di persone attualmente residenti in Italia che potrebbero beneficiare della riduzione dei tempi.',
      category: 'sociale',
      status: 'urgente',
      promoter: 'Ministero dell\'Interno',
      whyImportant: 'Questa riforma faciliterebbe l\'integrazione di migliaia di persone che vivono e lavorano regolarmente in Italia, migliorando la coesione sociale.',
      questions: [
        'Vuoi ridurre il tempo di residenza in Italia da 10 a 5 anni per permettere di richiedere la cittadinanza?'
      ],
      options: [
        { 
          label: 'Sì, riduzione a 5 anni', 
          percentage: 47, 
          votes: 11750,
          description: 'Favorevole alla riduzione dei tempi di residenza'
        },
        { 
          label: 'No, mantenere 10 anni', 
          percentage: 38, 
          votes: 9500,
          description: 'Contrario alla modifica, mantenere i criteri attuali'
        },
        { 
          label: 'Sì, ma con condizioni aggiuntive', 
          percentage: 15, 
          votes: 3750,
          description: 'Favorevole ma con requisiti supplementari'
        }
      ],
      totalVotes: 25000,
      endDate: '28/01/2025',
      region: 'Nazionale',
      demographics: {
        age: [
          { name: '18-25', value: 25, color: '#8884d8' },
          { name: '26-35', value: 32, color: '#82ca9d' },
          { name: '36-50', value: 28, color: '#ffc658' },
          { name: '51-65', value: 12, color: '#ff7300' },
          { name: '65+', value: 3, color: '#0088fe' }
        ],
        gender: [
          { name: 'Maschi', value: 51, color: '#0088fe' },
          { name: 'Femmine', value: 47, color: '#00c49f' },
          { name: 'Altro', value: 2, color: '#ffbb28' }
        ],
        region: [
          { name: 'Nord', value: 55 },
          { name: 'Centro', value: 25 },
          { name: 'Sud', value: 20 }
        ],
        education: [
          { name: 'Elementare', value: 8 },
          { name: 'Media', value: 20 },
          { name: 'Superiore', value: 42 },
          { name: 'Laurea', value: 25 },
          { name: 'Post-Laurea', value: 5 }
        ]
      }
    },
    '4': {
      id: '4',
      title: 'Riforma Pensioni',
      description: 'Proposta di riforma del sistema pensionistico con età flessibile.',
      fullDescription: 'La riforma pensionistica propone l\'introduzione di un sistema flessibile che permetta di andare in pensione tra i 62 e i 67 anni, con calcoli proporzionali ai contributi versati. Include anche misure per i lavori usuranti e maggiore tutela per le donne con figli.',
      category: 'sociale',
      status: 'attivo',
      promoter: 'INPS - Istituto Nazionale Previdenza Sociale',
      whyImportant: 'Il sistema pensionistico italiano necessita di riforme per garantire sostenibilità e equità tra generazioni.',
      questions: [
        'Sei favorevole all\'innalzamento dell\'età pensionabile?',
        'Il sistema contributivo dovrebbe essere rafforzato?',
        'Sei d\'accordo con misure per favorire il pensionamento anticipato?',
        'Dovrebbe esserci una pensione minima per tutti i pensionati?'
      ],
      options: [
        { 
          label: 'Favorevole alla riforma', 
          percentage: 54, 
          votes: 13500,
          description: 'Sostegno al nuovo sistema flessibile'
        },
        { 
          label: 'Contrario alla riforma', 
          percentage: 38, 
          votes: 9500,
          description: 'Opposizione alle modifiche proposte'
        },
        { 
          label: 'Indeciso, serve più informazione', 
          percentage: 8, 
          votes: 2000,
          description: 'Necessità di maggiori dettagli'
        }
      ],
      totalVotes: 25000,
      endDate: '20/02/2025',
      region: 'Nazionale',
      demographics: {
        age: [
          { name: '18-25', value: 8, color: '#8884d8' },
          { name: '26-35', value: 15, color: '#82ca9d' },
          { name: '36-50', value: 35, color: '#ffc658' },
          { name: '51-65', value: 35, color: '#ff7300' },
          { name: '65+', value: 7, color: '#0088fe' }
        ],
        gender: [
          { name: 'Maschi', value: 53, color: '#0088fe' },
          { name: 'Femmine', value: 45, color: '#00c49f' },
          { name: 'Altro', value: 2, color: '#ffbb28' }
        ],
        region: [
          { name: 'Nord', value: 42 },
          { name: 'Centro', value: 28 },
          { name: 'Sud', value: 30 }
        ],
        education: [
          { name: 'Elementare', value: 12 },
          { name: 'Media', value: 25 },
          { name: 'Superiore', value: 40 },
          { name: 'Laurea', value: 20 },
          { name: 'Post-Laurea', value: 3 }
        ]
      }
    },
    '5': {
      id: '5',
      title: 'Digitalizzazione PA',
      description: 'Accelerazione dei processi di digitalizzazione nella Pubblica Amministrazione.',
      fullDescription: 'Il piano di digitalizzazione della PA prevede la completa trasformazione digitale di tutti i servizi pubblici entro il 2026, con l\'obiettivo di semplificare i rapporti tra cittadini e amministrazione, ridurre i tempi di attesa e migliorare l\'efficienza attraverso l\'uso di intelligenza artificiale e automazione.',
      category: 'tecnologia',
      status: 'attivo',
      promoter: 'Ministero per l\'Innovazione Tecnologica e la Transizione Digitale',
      whyImportant: 'La digitalizzazione della PA è essenziale per modernizzare il paese e migliorare la qualità dei servizi offerti ai cittadini.',
      questions: [
        'Sei favorevole alla digitalizzazione dei servizi pubblici?',
        'Dovrebbero esserci maggiori investimenti in cybersecurity per la PA?',
        'Sei d\'accordo con l\'uso dell\'intelligenza artificiale nella PA?',
        'Dovrebbe esserci più formazione per i dipendenti pubblici sugli strumenti digitali?',
        'I servizi digitali dovrebbero essere obbligatori o opzionali?'
      ],
      options: [
        { 
          label: 'Priorità assoluta', 
          percentage: 68, 
          votes: 17000,
          description: 'Digitalizzazione completa e rapida'
        },
        { 
          label: 'Importante ma graduale', 
          percentage: 25, 
          votes: 6250,
          description: 'Transizione progressiva e controllata'
        },
        { 
          label: 'Non prioritario', 
          percentage: 7, 
          votes: 1750,
          description: 'Altre priorità più importanti'
        }
      ],
      totalVotes: 25000,
      endDate: '05/03/2025',
      region: 'Nazionale',
      demographics: {
        age: [
          { name: '18-25', value: 40, color: '#8884d8' },
          { name: '26-35', value: 35, color: '#82ca9d' },
          { name: '36-50', value: 18, color: '#ffc658' },
          { name: '51-65', value: 6, color: '#ff7300' },
          { name: '65+', value: 1, color: '#0088fe' }
        ],
        gender: [
          { name: 'Maschi', value: 55, color: '#0088fe' },
          { name: 'Femmine', value: 43, color: '#00c49f' },
          { name: 'Altro', value: 2, color: '#ffbb28' }
        ],
        region: [
          { name: 'Nord', value: 48 },
          { name: 'Centro', value: 32 },
          { name: 'Sud', value: 20 }
        ],
        education: [
          { name: 'Elementare', value: 2 },
          { name: 'Media', value: 8 },
          { name: 'Superiore', value: 35 },
          { name: 'Laurea', value: 45 },
          { name: 'Post-Laurea', value: 10 }
        ]
      }
    },
    '6': {
      id: '6',
      title: 'Sanità Territoriale',
      description: 'Potenziamento delle strutture sanitarie territoriali e medicina di prossimità.',
      fullDescription: 'Il piano per la sanità territoriale prevede la creazione di nuove case di comunità, ospedali di comunità e centrali operative territoriali per avvicinare i servizi sanitari ai cittadini, ridurre i ricoveri inappropriati e migliorare la continuità delle cure, specialmente per le patologie croniche.',
      category: 'sanita',
      status: 'attivo',
      promoter: 'Ministero della Salute',
      whyImportant: 'Il rafforzamento della sanità territoriale è fondamentale per garantire cure più accessibili e ridurre la pressione sugli ospedali.',
      questions: [
        'Sei favorevole al potenziamento dei servizi sanitari locali?',
        'Dovrebbero esserci maggiori investimenti nella telemedicina?',
        'Sei d\'accordo con misure per ridurre i tempi di attesa per le visite mediche?',
        'Dovrebbero esserci più fondi per il personale sanitario?',
        'Le case di comunità dovrebbero essere presenti in ogni comune?'
      ],
      options: [
        { 
          label: 'Investimenti massicci', 
          percentage: 71, 
          votes: 17750,
          description: 'Aumento significativo delle risorse'
        },
        { 
          label: 'Investimenti mirati', 
          percentage: 24, 
          votes: 6000,
          description: 'Interventi selettivi e graduali'
        },
        { 
          label: 'Mantenere status quo', 
          percentage: 5, 
          votes: 1250,
          description: 'Nessun cambiamento significativo'
        }
      ],
      totalVotes: 25000,
      endDate: '25/02/2025',
      region: 'Nazionale',
      demographics: {
        age: [
          { name: '18-25', value: 12, color: '#8884d8' },
          { name: '26-35', value: 20, color: '#82ca9d' },
          { name: '36-50', value: 30, color: '#ffc658' },
          { name: '51-65', value: 28, color: '#ff7300' },
          { name: '65+', value: 10, color: '#0088fe' }
        ],
        gender: [
          { name: 'Maschi', value: 45, color: '#0088fe' },
          { name: 'Femmine', value: 53, color: '#00c49f' },
          { name: 'Altro', value: 2, color: '#ffbb28' }
        ],
        region: [
          { name: 'Nord', value: 35 },
          { name: 'Centro', value: 25 },
          { name: 'Sud', value: 40 }
        ],
        education: [
          { name: 'Elementare', value: 15 },
          { name: 'Media', value: 25 },
          { name: 'Superiore', value: 35 },
          { name: 'Laurea', value: 20 },
          { name: 'Post-Laurea', value: 5 }
        ]
      }
    },
    '7': {
      id: '7',
      title: 'Trasporti Pubblici',
      description: 'Miglioramento e potenziamento del trasporto pubblico locale.',
      fullDescription: 'Il piano per i trasporti pubblici prevede investimenti per 50 miliardi in 10 anni per modernizzare metro, autobus e treni regionali, con focus su mezzi elettrici e a idrogeno, nuove linee metropolitane nelle grandi città e miglioramento dei collegamenti tra centri urbani e aree rurali.',
      category: 'trasporti',
      status: 'attivo',
      promoter: 'Ministero delle Infrastrutture e dei Trasporti',
      whyImportant: 'Il miglioramento dei trasporti pubblici è cruciale per ridurre l\'inquinamento, il traffico e migliorare la qualità della vita urbana.',
      questions: [
        'Sei favorevole agli investimenti nel trasporto pubblico?',
        'Dovrebbero esserci maggiori incentivi per il trasporto sostenibile?',
        'Sei d\'accordo con misure per ridurre il traffico cittadino?',
        'Dovrebbero esserci maggiori investimenti nell\'alta velocità ferroviaria?',
        'I trasporti pubblici dovrebbero essere gratuiti per alcune categorie?'
      ],
      options: [
        { 
          label: 'Investimenti importanti', 
          percentage: 64, 
          votes: 16000,
          description: 'Aumento significativo dei fondi'
        },
        { 
          label: 'Miglioramenti graduali', 
          percentage: 28, 
          votes: 7000,
          description: 'Sviluppo progressivo e sostenibile'
        },
        { 
          label: 'Non necessario', 
          percentage: 8, 
          votes: 2000,
          description: 'Altre priorità più importanti'
        }
      ],
      totalVotes: 25000,
      endDate: '15/03/2025',
      region: 'Nazionale',
      demographics: {
        age: [
          { name: '18-25', value: 30, color: '#8884d8' },
          { name: '26-35', value: 32, color: '#82ca9d' },
          { name: '36-50', value: 25, color: '#ffc658' },
          { name: '51-65', value: 10, color: '#ff7300' },
          { name: '65+', value: 3, color: '#0088fe' }
        ],
        gender: [
          { name: 'Maschi', value: 52, color: '#0088fe' },
          { name: 'Femmine', value: 46, color: '#00c49f' },
          { name: 'Altro', value: 2, color: '#ffbb28' }
        ],
        region: [
          { name: 'Nord', value: 45 },
          { name: 'Centro', value: 35 },
          { name: 'Sud', value: 20 }
        ],
        education: [
          { name: 'Elementare', value: 5 },
          { name: 'Media', value: 18 },
          { name: 'Superiore', value: 45 },
          { name: 'Laurea', value: 28 },
          { name: 'Post-Laurea', value: 4 }
        ]
      }
    },
    '8': {
      id: '8',
      title: 'Scuola Digitale',
      description: 'Implementazione di tecnologie digitali nell\'educazione scolastica.',
      fullDescription: 'Il piano scuola digitale prevede la dotazione di tablet per tutti gli studenti, formazione digitale per i docenti, implementazione di piattaforme e-learning, aule multimediali in ogni scuola e connessione internet ultraveloce. L\'obiettivo è preparare gli studenti alle competenze del futuro.',
      category: 'istruzione',
      status: 'attivo',
      promoter: 'Ministero dell\'Istruzione e del Merito',
      whyImportant: 'La digitalizzazione della scuola è essenziale per preparare le nuove generazioni alle sfide del mondo del lavoro digitale.',
      questions: [
        'Sei favorevole all\'uso di strumenti digitali nelle scuole?',
        'Dovrebbe esserci più formazione per i docenti sugli strumenti digitali?',
        'Sei d\'accordo con misure per ridurre il divario digitale nelle scuole?',
        'Dovrebbero esserci maggiori investimenti nelle infrastrutture scolastiche?',
        'I libri di testo digitali dovrebbero sostituire quelli cartacei?'
      ],
      options: [
        { 
          label: 'Digitalizzazione completa', 
          percentage: 52, 
          votes: 13000,
          description: 'Transizione totale al digitale'
        },
        { 
          label: 'Approccio misto', 
          percentage: 39, 
          votes: 9750,
          description: 'Combinazione di digitale e tradizionale'
        },
        { 
          label: 'Mantenere tradizionale', 
          percentage: 9, 
          votes: 2250,
          description: 'Privilegiare i metodi classici'
        }
      ],
      totalVotes: 25000,
      endDate: '12/03/2025',
      region: 'Nazionale',
      demographics: {
        age: [
          { name: '18-25', value: 45, color: '#8884d8' },
          { name: '26-35', value: 35, color: '#82ca9d' },
          { name: '36-50', value: 15, color: '#ffc658' },
          { name: '51-65', value: 4, color: '#ff7300' },
          { name: '65+', value: 1, color: '#0088fe' }
        ],
        gender: [
          { name: 'Maschi', value: 48, color: '#0088fe' },
          { name: 'Femmine', value: 50, color: '#00c49f' },
          { name: 'Altro', value: 2, color: '#ffbb28' }
        ],
        region: [
          { name: 'Nord', value: 50 },
          { name: 'Centro', value: 30 },
          { name: 'Sud', value: 20 }
        ],
        education: [
          { name: 'Elementare', value: 2 },
          { name: 'Media', value: 10 },
          { name: 'Superiore', value: 40 },
          { name: 'Laurea', value: 40 },
          { name: 'Post-Laurea', value: 8 }
        ]
      }
    },
    '9': {
      id: '9',
      title: 'Sicurezza Urbana',
      description: 'Strategie per migliorare la sicurezza nei centri urbani.',
      fullDescription: 'Il piano sicurezza urbana prevede l\'aumento delle forze dell\'ordine, l\'installazione di sistemi di videosorveglianza intelligente, il potenziamento dell\'illuminazione pubblica, programmi di prevenzione sociale e collaborazione con le comunità locali per creare ambienti urbani più sicuri.',
      category: 'sicurezza',
      status: 'urgente',
      promoter: 'Ministero dell\'Interno',
      whyImportant: 'La sicurezza urbana è fondamentale per garantire la qualità della vita dei cittadini e lo sviluppo economico delle città.',
      questions: [
        'Sei favorevole all\'aumento delle forze dell\'ordine nelle aree urbane?',
        'Dovrebbero esserci maggiori investimenti nei sistemi di sorveglianza?',
        'Sei d\'accordo con misure per combattere la criminalità?',
        'Dovrebbero esserci più fondi per programmi sociali di prevenzione del crimine?',
        'La videosorveglianza dovrebbe essere estesa a tutte le aree pubbliche?'
      ],
      options: [
        { 
          label: 'Più forze dell\'ordine', 
          percentage: 43, 
          votes: 10750,
          description: 'Aumento del personale di sicurezza'
        },
        { 
          label: 'Tecnologie smart', 
          percentage: 35, 
          votes: 8750,
          description: 'Investimenti in sistemi intelligenti'
        },
        { 
          label: 'Prevenzione sociale', 
          percentage: 22, 
          votes: 5500,
          description: 'Focus su programmi sociali preventivi'
        }
      ],
      totalVotes: 25000,
      endDate: '30/01/2025',
      region: 'Nazionale',
      demographics: {
        age: [
          { name: '18-25', value: 15, color: '#8884d8' },
          { name: '26-35', value: 25, color: '#82ca9d' },
          { name: '36-50', value: 35, color: '#ffc658' },
          { name: '51-65', value: 20, color: '#ff7300' },
          { name: '65+', value: 5, color: '#0088fe' }
        ],
        gender: [
          { name: 'Maschi', value: 58, color: '#0088fe' },
          { name: 'Femmine', value: 40, color: '#00c49f' },
          { name: 'Altro', value: 2, color: '#ffbb28' }
        ],
        region: [
          { name: 'Nord', value: 40 },
          { name: 'Centro', value: 30 },
          { name: 'Sud', value: 30 }
        ],
        education: [
          { name: 'Elementare', value: 10 },
          { name: 'Media', value: 25 },
          { name: 'Superiore', value: 45 },
          { name: 'Laurea', value: 18 },
          { name: 'Post-Laurea', value: 2 }
        ]
      }
    },
    '10': {
      id: '10',
      title: 'Agricoltura Sostenibile',
      description: 'Transizione verso pratiche agricole più sostenibili e rispettose dell\'ambiente.',
      fullDescription: 'Il piano per l\'agricoltura sostenibile promuove la transizione verso metodi biologici, la riduzione dell\'uso di pesticidi, l\'implementazione di tecnologie precision farming, il sostegno alle filiere corte e locali, e incentivi per pratiche che aumentano la biodiversità e la salute del suolo.',
      category: 'ambiente',
      status: 'attivo',
      promoter: 'Ministero dell\'Agricoltura, Sovranità Alimentare e Foreste',
      whyImportant: 'L\'agricoltura sostenibile è cruciale per proteggere l\'ambiente, garantire la sicurezza alimentare e preservare la biodiversità per le future generazioni.',
      questions: [
        'Sei favorevole alla transizione verso l\'agricoltura sostenibile?',
        'Dovrebbero esserci maggiori incentivi per l\'agricoltura biologica?',
        'Sei d\'accordo con la riduzione dell\'uso di pesticidi?',
        'Dovrebbero esserci maggiori investimenti nella ricerca sull\'agricoltura sostenibile?',
        'Le filiere corte e locali dovrebbero essere incentivate?'
      ],
      options: [
        { 
          label: 'Incentivi per bio', 
          percentage: 58, 
          votes: 14500,
          description: 'Maggiori sostegni all\'agricoltura biologica'
        },
        { 
          label: 'Regolamentazione graduale', 
          percentage: 32, 
          votes: 8000,
          description: 'Transizione progressiva e controllata'
        },
        { 
          label: 'Mantenere attuale', 
          percentage: 10, 
          votes: 2500,
          description: 'Nessun cambiamento significativo'
        }
      ],
      totalVotes: 25000,
      endDate: '18/03/2025',
      region: 'Nazionale',
      demographics: {
        age: [
          { name: '18-25', value: 28, color: '#8884d8' },
          { name: '26-35', value: 30, color: '#82ca9d' },
          { name: '36-50', value: 25, color: '#ffc658' },
          { name: '51-65', value: 15, color: '#ff7300' },
          { name: '65+', value: 2, color: '#0088fe' }
        ],
        gender: [
          { name: 'Maschi', value: 45, color: '#0088fe' },
          { name: 'Femmine', value: 53, color: '#00c49f' },
          { name: 'Altro', value: 2, color: '#ffbb28' }
        ],
        region: [
          { name: 'Nord', value: 35 },
          { name: 'Centro', value: 30 },
          { name: 'Sud', value: 35 }
        ],
        education: [
          { name: 'Elementare', value: 8 },
          { name: 'Media', value: 20 },
          { name: 'Superiore', value: 40 },
          { name: 'Laurea', value: 28 },
          { name: 'Post-Laurea', value: 4 }
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

            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Domande del Sondaggio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {poll.questions.map((question: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 dark:text-gray-300">{question}</p>
                    </div>
                  ))}
                </div>
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
