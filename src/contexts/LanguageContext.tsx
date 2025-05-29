
import React, { createContext, useContext, useState, useEffect } from 'react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, options?: any) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const translations = {
  it: {
    home: {
      hero: {
        title: 'La democrazia diretta è qui.',
        subtitle: 'Partecipa attivamente alle decisioni che plasmano il nostro futuro.',
        explore: 'Esplora i Sondaggi',
        login: 'Accedi per Votare'
      },
      features: {
        participation: {
          title: 'Partecipazione Attiva',
          desc: 'Coinvolgi direttamente i cittadini nel processo decisionale.'
        },
        security: {
          title: 'Sicurezza e Trasparenza',
          desc: 'Votazioni sicure e verificabili con tecnologia blockchain.'
        },
        analysis: {
          title: 'Analisi Dettagliate',
          desc: 'Visualizza i risultati dei sondaggi e l\'impatto delle decisioni.'
        }
      },
      polls: {
        title: 'Sondaggi Popolari',
        active: 'Attivo',
        favorable: 'Favorevoli',
        participate: 'Partecipa',
        details: 'Dettagli'
      },
      howworks: {
        title: 'Come Funziona',
        step1: {
          title: 'Registrati e Verifica',
          desc: 'Crea un account sicuro e verifica la tua identità.'
        },
        step2: {
          title: 'Esplora i Sondaggi',
          desc: 'Scopri i sondaggi attivi e le proposte in discussione.'
        },
        step3: {
          title: 'Vota e Partecipa',
          desc: 'Esprimi il tuo voto in modo sicuro e trasparente.'
        },
        step4: {
          title: 'Analizza i Risultati',
          desc: 'Visualizza i risultati e l\'impatto delle decisioni.'
        }
      },
      newsletter: {
        title: 'Iscriviti alla Newsletter',
        desc: 'Rimani aggiornato sulle ultime novità e sondaggi.',
        placeholder: 'Inserisci la tua email',
        subscribe: 'Iscriviti'
      }
    },
    common: {
      guest: 'Ospite',
      national: 'Nazionale'
    },
    polls: {
      title: 'Sondaggi Attivi',
      subtitle: 'Partecipa alle decisioni che influenzano il futuro del paese',
      searchPlaceholder: 'Cerca sondaggi...',
      favorable: 'Favorevoli',
      participants: 'partecipanti',
      expires: 'Scade',
      participate: 'Partecipa',
      details: 'Dettagli',
      fiscalReform: {
        title: 'Riforma Fiscale 2025',
        description: 'Valutazione della proposta di riforma fiscale con nuove aliquote e detrazioni per famiglie e imprese',
        options: {
          favorable: 'Favorevole',
          contrary: 'Contrario',
          dontKnow: 'Non so'
        }
      },
      energyTransition: {
        title: 'Transizione Energetica',
        description: 'Investimenti per accelerare la transizione verso energie rinnovabili e riduzione emissioni CO2',
        options: {
          increase: 'Incrementare investimenti',
          maintain: 'Mantenere livelli attuali',
          reduce: 'Ridurre investimenti'
        }
      },
      citizenshipReferendum: {
        title: 'Referendum Cittadinanza',
        description: 'Modifica dei criteri per l\'acquisizione della cittadinanza italiana',
        options: {
          yesReduction: 'Si, riduzione anni',
          noMaintain: 'No, mantenere attuale',
          yesConditions: 'Si, con condizioni'
        }
      }
    },
    filters: {
      allRegions: 'Tutte le Regioni',
      allCategories: 'Tutte le Categorie'
    },
    categories: {
      fiscal: 'Fiscale',
      social: 'Sociale',
      environment: 'Ambiente',
      transport: 'Trasporti',
      economy: 'Economia',
      technology: 'Tecnologia',
      health: 'Sanità',
      education: 'Istruzione',
      security: 'Sicurezza'
    },
    status: {
      active: 'ATTIVO',
      urgent: 'URGENTE'
    },
    dashboard: {
      welcome: 'Cittadino'
    }
  },
  en: {
    home: {
      hero: {
        title: 'Direct democracy is here.',
        subtitle: 'Actively participate in the decisions that shape our future.',
        explore: 'Explore Polls',
        login: 'Login to Vote'
      },
      features: {
        participation: {
          title: 'Active Participation',
          desc: 'Directly involve citizens in the decision-making process.'
        },
        security: {
          title: 'Security and Transparency',
          desc: 'Secure and verifiable voting with blockchain technology.'
        },
        analysis: {
          title: 'Detailed Analysis',
          desc: 'View poll results and the impact of decisions.'
        }
      },
      polls: {
        title: 'Popular Polls',
        active: 'Active',
        favorable: 'Favorable',
        participate: 'Participate',
        details: 'Details'
      },
      howworks: {
        title: 'How It Works',
        step1: {
          title: 'Register and Verify',
          desc: 'Create a secure account and verify your identity.'
        },
        step2: {
          title: 'Explore Polls',
          desc: 'Discover active polls and proposals under discussion.'
        },
        step3: {
          title: 'Vote and Participate',
          desc: 'Cast your vote securely and transparently.'
        },
        step4: {
          title: 'Analyze Results',
          desc: 'View results and the impact of decisions.'
        }
      },
      newsletter: {
        title: 'Subscribe to Newsletter',
        desc: 'Stay updated on the latest news and polls.',
        placeholder: 'Enter your email',
        subscribe: 'Subscribe'
      }
    },
    common: {
      guest: 'Guest',
      national: 'National'
    },
    polls: {
      title: 'Active Polls',
      subtitle: 'Participate in decisions that influence the country\'s future',
      searchPlaceholder: 'Search polls...',
      favorable: 'Favorable',
      participants: 'participants',
      expires: 'Expires',
      participate: 'Participate',
      details: 'Details',
      fiscalReform: {
        title: 'Tax Reform 2025',
        description: 'Evaluation of the tax reform proposal with new rates and deductions for families and businesses',
        options: {
          favorable: 'Favorable',
          contrary: 'Against',
          dontKnow: 'Don\'t know'
        }
      },
      energyTransition: {
        title: 'Energy Transition',
        description: 'Investments to accelerate the transition to renewable energy and CO2 emissions reduction',
        options: {
          increase: 'Increase investments',
          maintain: 'Maintain current levels',
          reduce: 'Reduce investments'
        }
      },
      citizenshipReferendum: {
        title: 'Citizenship Referendum',
        description: 'Modification of criteria for acquiring Italian citizenship',
        options: {
          yesReduction: 'Yes, reduce years',
          noMaintain: 'No, keep current',
          yesConditions: 'Yes, with conditions'
        }
      }
    },
    filters: {
      allRegions: 'All Regions',
      allCategories: 'All Categories'
    },
    categories: {
      fiscal: 'Fiscal',
      social: 'Social',
      environment: 'Environment',
      transport: 'Transport',
      economy: 'Economy',
      technology: 'Technology',
      health: 'Health',
      education: 'Education',
      security: 'Security'
    },
    status: {
      active: 'ACTIVE',
      urgent: 'URGENT'
    },
    dashboard: {
      welcome: 'Citizen'
    }
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      it: { translation: translations.it },
      en: { translation: translations.en },
    },
    fallbackLng: 'it',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(i18next.language);

  useEffect(() => {
    i18next.on('languageChanged', (lng) => {
      setLanguage(lng);
    });

    return () => {
      i18next.off('languageChanged');
    };
  }, []);

  const changeLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
  };

  const t = (key: string, options?: any): string => {
    const result = i18next.t(key, options);
    return typeof result === 'string' ? result : key;
  };

  const value: LanguageContextProps = {
    language,
    setLanguage: changeLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
