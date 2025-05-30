
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'IT' | 'EN' | 'FR' | 'DE' | 'ES' | 'PT' | 'RU' | 'ZH' | 'JA' | 'KO';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  IT: {
    'site.title': 'Direct Democracy Project',
    'nav.home': 'Home',
    'nav.polls': 'Sondaggi',
    'nav.dashboard': 'Dashboard',
    'nav.news': 'News & Trasparenza',
    'nav.login': 'Accedi',
    'nav.guest': 'Ospite',
    
    // Home page translations
    'home.hero.title': 'Direct Democracy Project ®',
    'home.hero.subtitle': 'Partecipa attivamente alle decisioni del tuo paese attraverso una piattaforma sicura, trasparente e accessibile',
    'home.hero.explore': 'Esplora i sondaggi',
    'home.hero.login': 'Accedi',
    
    'home.features.participation.title': 'Partecipazione Attiva',
    'home.features.participation.desc': 'Vota su questioni reali che influenzano la tua comunità e il tuo paese, con risultati trasparenti e aggiornamenti in tempo reale',
    'home.features.security.title': 'Sicurezza Garantita',
    'home.features.security.desc': 'Autenticazione sicura tramite SPID, CIE e sistemi eIDAS per garantire la tutela dei dati e la protezione dei dati personali',
    'home.features.analysis.title': 'Analisi Dati',
    'home.features.analysis.desc': 'Visualizza statistiche dettagliate e analisi dei risultati con grafici interattivi, filtri personalizzati e export',
    
    'home.polls.title': 'Sondaggi in Evidenza',
    'home.polls.participate': 'Partecipa',
    'home.polls.details': 'Dettagli',
    'home.polls.active': 'ATTIVO',
    'home.polls.expires': 'SCADE',
    'home.polls.favorable': 'Favorevoli',
    
    'home.howworks.title': 'Come Funziona',
    'home.howworks.step1.title': 'Registrati',
    'home.howworks.step1.desc': 'Accedi con SPID, CIE o altri sistemi di identità digitale europei',
    'home.howworks.step2.title': 'Esplora',
    'home.howworks.step2.desc': 'Sfoglia i sondaggi attivi filtrati per categoria e regione di interesse',
    'home.howworks.step3.title': 'Vota',
    'home.howworks.step3.desc': 'Esprimi la tua opinione su questioni politiche, sociali e economiche',
    'home.howworks.step4.title': 'Analizza',
    'home.howworks.step4.desc': 'Visualizza risultati in tempo reale e le statistiche dettagliate',
    
    'home.newsletter.title': 'Resta Aggiornato/a',
    'home.newsletter.desc': 'Iscriviti alla nostra newsletter per ricevere notifiche sui nuovi sondaggi e sugli aggiornamenti della piattaforma',
    'home.newsletter.placeholder': 'La tua email',
    'home.newsletter.subscribe': 'Iscriviti',
    
    // Polls page translations
    'polls.title': 'Sondaggi Attivi',
    'polls.subtitle': 'Partecipa alle decisioni che influenzano il futuro del paese',
    'polls.search': 'Cerca sondaggi...',
    'polls.participate': 'Partecipa',
    'polls.details': 'Dettagli',
    'polls.active': 'ATTIVO',
    'polls.urgent': 'URGENTE',
    'polls.expired': 'SCADUTO',
    'poll.participants': 'Partecipanti',
    'poll.deadline': 'Scadenza',
    'poll.scope': 'Ambito',
    'poll.vote': 'Esprimi il tuo voto',
    'poll.submit': 'Invia Voto',
    'poll.voted': 'Voto Registrato',
    'poll.thanks': 'Grazie per aver partecipato!',
    
    // Footer translations
    'footer.description': 'Piattaforma digitale per la partecipazione democratica diretta. Costruiamo insieme il futuro della democrazia italiana.',
    'footer.legal': 'Informazioni Legali',
    'footer.community': 'Comunità',
    'footer.copyright': '© 2025 Direct Democracy Project. Tutti i diritti riservati.',
    'footer.certification': 'Piattaforma certificata conforme alle normative europee sulla sicurezza digitale (eIDAS)'
  },
  EN: {
    'site.title': 'Direct Democracy Project',
    'nav.home': 'Home',
    'nav.polls': 'Polls',
    'nav.dashboard': 'Dashboard',
    'nav.news': 'News & Transparency',
    'nav.login': 'Login',
    'nav.guest': 'Guest',
    
    // Home page translations
    'home.hero.title': 'Direct Democracy Project ®',
    'home.hero.subtitle': 'Actively participate in decisions that affect your country through a secure, transparent and accessible platform',
    'home.hero.explore': 'Explore polls',
    'home.hero.login': 'Login',
    
    'home.features.participation.title': 'Active Participation',
    'home.features.participation.desc': 'Vote on real issues that affect your community and country, with transparent results and real-time updates',
    'home.features.security.title': 'Guaranteed Security',
    'home.features.security.desc': 'Secure authentication via SPID, CIE and eIDAS systems to ensure data protection and personal data security',
    'home.features.analysis.title': 'Data Analysis',
    'home.features.analysis.desc': 'View detailed statistics and results analysis with interactive charts, custom filters and export',
    
    'home.polls.title': 'Featured Polls',
    'home.polls.participate': 'Participate',
    'home.polls.details': 'Details',
    'home.polls.active': 'ACTIVE',
    'home.polls.expires': 'EXPIRES',
    'home.polls.favorable': 'Favorable',
    
    'home.howworks.title': 'How It Works',
    'home.howworks.step1.title': 'Register',
    'home.howworks.step1.desc': 'Access with SPID, CIE or other European digital identity systems',
    'home.howworks.step2.title': 'Explore',
    'home.howworks.step2.desc': 'Browse active polls filtered by category and region of interest',
    'home.howworks.step3.title': 'Vote',
    'home.howworks.step3.desc': 'Express your opinion on political, social and economic issues',
    'home.howworks.step4.title': 'Analyze',
    'home.howworks.step4.desc': 'View real-time results and detailed statistics',
    
    'home.newsletter.title': 'Stay Updated',
    'home.newsletter.desc': 'Subscribe to our newsletter to receive notifications about new polls and platform updates',
    'home.newsletter.placeholder': 'Your email',
    'home.newsletter.subscribe': 'Subscribe',
    
    // Polls page translations
    'polls.title': 'Active Polls',
    'polls.subtitle': 'Participate in decisions that shape the country\'s future',
    'polls.search': 'Search polls...',
    'polls.participate': 'Participate',
    'polls.details': 'Details',
    'polls.active': 'ACTIVE',
    'polls.urgent': 'URGENT',
    'polls.expired': 'EXPIRED',
    'poll.participants': 'Participants',
    'poll.deadline': 'Deadline',
    'poll.scope': 'Scope',
    'poll.vote': 'Cast your vote',
    'poll.submit': 'Submit Vote',
    'poll.voted': 'Vote Recorded',
    'poll.thanks': 'Thank you for participating!',
    
    // Footer translations
    'footer.description': 'Digital platform for direct democratic participation. Building the future of Italian democracy together.',
    'footer.legal': 'Legal Information',
    'footer.community': 'Community',
    'footer.copyright': '© 2025 Direct Democracy Project. All rights reserved.',
    'footer.certification': 'Platform certified compliant with European digital security regulations (eIDAS)'
  },
  FR: {
    'site.title': 'Projet de Démocratie Directe',
    'nav.home': 'Accueil',
    'nav.polls': 'Sondages',
    'nav.dashboard': 'Tableau de bord',
    'nav.news': 'Actualités & Transparence',
    'nav.login': 'Connexion',
    'nav.guest': 'Invité',
    
    // Home page translations
    'home.hero.title': 'Projet de Démocratie Directe ®',
    'home.hero.subtitle': 'Participez activement aux décisions qui affectent votre pays grâce à une plateforme sécurisée, transparente et accessible',
    'home.hero.explore': 'Explorer les sondages',
    'home.hero.login': 'Connexion',
    
    'home.features.participation.title': 'Participation Active',
    'home.features.participation.desc': 'Votez sur des questions réelles qui affectent votre communauté et votre pays, avec des résultats transparents et des mises à jour en temps réel',
    'home.features.security.title': 'Sécurité Garantie',
    'home.features.security.desc': 'Authentification sécurisée via SPID, CIE et systèmes eIDAS pour garantir la protection des données et la sécurité des données personnelles',
    'home.features.analysis.title': 'Analyse de Données',
    'home.features.analysis.desc': 'Visualisez des statistiques détaillées et l\'analyse des résultats avec des graphiques interactifs, des filtres personnalisés et l\'export',
    
    'home.polls.title': 'Sondages en Vedette',
    'home.polls.participate': 'Participer',
    'home.polls.details': 'Détails',
    'home.polls.active': 'ACTIF',
    'home.polls.expires': 'EXPIRE',
    'home.polls.favorable': 'Favorable',
    
    'home.howworks.title': 'Comment Ça Marche',
    'home.howworks.step1.title': 'S\'inscrire',
    'home.howworks.step1.desc': 'Accédez avec SPID, CIE ou d\'autres systèmes d\'identité numérique européens',
    'home.howworks.step2.title': 'Explorer',
    'home.howworks.step2.desc': 'Parcourez les sondages actifs filtrés par catégorie et région d\'intérêt',
    'home.howworks.step3.title': 'Voter',
    'home.howworks.step3.desc': 'Exprimez votre opinion sur des questions politiques, sociales et économiques',
    'home.howworks.step4.title': 'Analyser',
    'home.howworks.step4.desc': 'Visualisez les résultats en temps réel et les statistiques détaillées',
    
    'home.newsletter.title': 'Restez Informé',
    'home.newsletter.desc': 'Abonnez-vous à notre newsletter pour recevoir des notifications sur les nouveaux sondages et les mises à jour de la plateforme',
    'home.newsletter.placeholder': 'Votre email',
    'home.newsletter.subscribe': 'S\'abonner',
    
    // Polls page translations
    'polls.title': 'Sondages Actifs',
    'polls.subtitle': 'Participez aux décisions qui façonnent l\'avenir du pays',
    'polls.search': 'Rechercher des sondages...',
    'polls.participate': 'Participer',
    'polls.details': 'Détails',
    'polls.active': 'ACTIF',
    'polls.urgent': 'URGENT',
    'polls.expired': 'EXPIRÉ',
    'poll.participants': 'Participants',
    'poll.deadline': 'Date limite',
    'poll.scope': 'Portée',
    'poll.vote': 'Exprimez votre vote',
    'poll.submit': 'Soumettre le vote',
    'poll.voted': 'Vote enregistré',
    'poll.thanks': 'Merci de votre participation !',
    
    // Footer translations
    'footer.description': 'Plateforme numérique pour la participation démocratique directe. Construisons ensemble l\'avenir de la démocratie italienne.',
    'footer.legal': 'Informations légales',
    'footer.community': 'Communauté',
    'footer.copyright': '© 2025 Projet de Démocratie Directe. Tous droits réservés.',
    'footer.certification': 'Plateforme certifiée conforme aux réglementations européennes de sécurité numérique (eIDAS)'
  },
  // Add more languages with similar structure...
  DE: {
    'site.title': 'Direkte Demokratie Projekt',
    'nav.home': 'Startseite',
    'nav.polls': 'Umfragen',
    'nav.dashboard': 'Dashboard',
    'nav.news': 'Nachrichten & Transparenz',
    'nav.login': 'Anmelden',
    'nav.guest': 'Gast',
    
    'home.hero.title': 'Direkte Demokratie Projekt ®',
    'home.hero.subtitle': 'Beteiligen Sie sich aktiv an Entscheidungen, die Ihr Land betreffen, über eine sichere, transparente und zugängliche Plattform',
    'home.hero.explore': 'Umfragen erkunden',
    'home.hero.login': 'Anmelden',
    
    'home.features.participation.title': 'Aktive Teilnahme',
    'home.features.participation.desc': 'Stimmen Sie über reale Themen ab, die Ihre Gemeinde und Ihr Land betreffen, mit transparenten Ergebnissen und Echtzeit-Updates',
    'home.features.security.title': 'Garantierte Sicherheit',
    'home.features.security.desc': 'Sichere Authentifizierung über SPID, CIE und eIDAS-Systeme zur Gewährleistung des Datenschutzes und der Sicherheit persönlicher Daten',
    'home.features.analysis.title': 'Datenanalyse',
    'home.features.analysis.desc': 'Detaillierte Statistiken und Ergebnisanalysen mit interaktiven Diagrammen, benutzerdefinierten Filtern und Export anzeigen',
    
    'home.polls.title': 'Ausgewählte Umfragen',
    'home.polls.participate': 'Teilnehmen',
    'home.polls.details': 'Details',
    'home.polls.active': 'AKTIV',
    'home.polls.expires': 'LÄUFT AB',
    'home.polls.favorable': 'Günstig',
    
    'home.howworks.title': 'Wie es funktioniert',
    'home.howworks.step1.title': 'Registrieren',
    'home.howworks.step1.desc': 'Zugang mit SPID, CIE oder anderen europäischen digitalen Identitätssystemen',
    'home.howworks.step2.title': 'Erkunden',
    'home.howworks.step2.desc': 'Durchsuchen Sie aktive Umfragen gefiltert nach Kategorie und Interessensregion',
    'home.howworks.step3.title': 'Wählen',
    'home.howworks.step3.desc': 'Äußern Sie Ihre Meinung zu politischen, sozialen und wirtschaftlichen Themen',
    'home.howworks.step4.title': 'Analysieren',
    'home.howworks.step4.desc': 'Echtzeit-Ergebnisse und detaillierte Statistiken anzeigen',
    
    'home.newsletter.title': 'Bleiben Sie informiert',
    'home.newsletter.desc': 'Abonnieren Sie unseren Newsletter, um Benachrichtigungen über neue Umfragen und Plattform-Updates zu erhalten',
    'home.newsletter.placeholder': 'Ihre E-Mail',
    'home.newsletter.subscribe': 'Abonnieren',
    
    'polls.title': 'Aktive Umfragen',
    'polls.subtitle': 'Beteiligen Sie sich an Entscheidungen, die die Zukunft des Landes prägen',
    'polls.search': 'Umfragen suchen...',
    'polls.participate': 'Teilnehmen',
    'polls.details': 'Details',
    'polls.active': 'AKTIV',
    'polls.urgent': 'DRINGEND',
    'polls.expired': 'ABGELAUFEN',
    'poll.participants': 'Teilnehmer',
    'poll.deadline': 'Frist',
    'poll.scope': 'Umfang',
    'poll.vote': 'Ihre Stimme abgeben',
    'poll.submit': 'Stimme abgeben',
    'poll.voted': 'Stimme aufgezeichnet',
    'poll.thanks': 'Vielen Dank für Ihre Teilnahme!',
    
    'footer.description': 'Digitale Plattform für direkte demokratische Teilnahme. Gemeinsam die Zukunft der italienischen Demokratie gestalten.',
    'footer.legal': 'Rechtliche Informationen',
    'footer.community': 'Gemeinschaft',
    'footer.copyright': '© 2025 Direkte Demokratie Projekt. Alle Rechte vorbehalten.',
    'footer.certification': 'Plattform zertifiziert konform mit europäischen digitalen Sicherheitsvorschriften (eIDAS)'
  },
  ES: {
    'site.title': 'Proyecto de Democracia Directa',
    'nav.home': 'Inicio',
    'nav.polls': 'Encuestas',
    'nav.dashboard': 'Panel',
    'nav.news': 'Noticias & Transparencia',
    'nav.login': 'Iniciar sesión',
    'nav.guest': 'Invitado',
    
    'home.hero.title': 'Proyecto de Democracia Directa ®',
    'home.hero.subtitle': 'Participa activamente en las decisiones que afectan a tu país a través de una plataforma segura, transparente y accesible',
    'home.hero.explore': 'Explorar encuestas',
    'home.hero.login': 'Iniciar sesión',
    
    'home.features.participation.title': 'Participación Activa',
    'home.features.participation.desc': 'Vota sobre temas reales que afectan a tu comunidad y país, con resultados transparentes y actualizaciones en tiempo real',
    'home.features.security.title': 'Seguridad Garantizada',
    'home.features.security.desc': 'Autenticación segura a través de SPID, CIE y sistemas eIDAS para garantizar la protección de datos y la seguridad de los datos personales',
    'home.features.analysis.title': 'Análisis de Datos',
    'home.features.analysis.desc': 'Ver estadísticas detalladas y análisis de resultados con gráficos interactivos, filtros personalizados y exportación',
    
    'home.polls.title': 'Encuestas Destacadas',
    'home.polls.participate': 'Participar',
    'home.polls.details': 'Detalles',
    'home.polls.active': 'ACTIVO',
    'home.polls.expires': 'EXPIRA',
    'home.polls.favorable': 'Favorable',
    
    'home.howworks.title': 'Cómo Funciona',
    'home.howworks.step1.title': 'Registrarse',
    'home.howworks.step1.desc': 'Acceso con SPID, CIE u otros sistemas de identidad digital europeos',
    'home.howworks.step2.title': 'Explorar',
    'home.howworks.step2.desc': 'Navegar por encuestas activas filtradas por categoría y región de interés',
    'home.howworks.step3.title': 'Votar',
    'home.howworks.step3.desc': 'Expresar tu opinión sobre cuestiones políticas, sociales y económicas',
    'home.howworks.step4.title': 'Analizar',
    'home.howworks.step4.desc': 'Ver resultados en tiempo real y estadísticas detalladas',
    
    'home.newsletter.title': 'Mantente Actualizado',
    'home.newsletter.desc': 'Suscríbete a nuestro boletín para recibir notificaciones sobre nuevas encuestas y actualizaciones de la plataforma',
    'home.newsletter.placeholder': 'Tu email',
    'home.newsletter.subscribe': 'Suscribirse',
    
    'polls.title': 'Encuestas Activas',
    'polls.subtitle': 'Participa en las decisiones que dan forma al futuro del país',
    'polls.search': 'Buscar encuestas...',
    'polls.participate': 'Participar',
    'polls.details': 'Detalles',
    'polls.active': 'ACTIVO',
    'polls.urgent': 'URGENTE',
    'polls.expired': 'EXPIRADO',
    'poll.participants': 'Participantes',
    'poll.deadline': 'Fecha límite',
    'poll.scope': 'Alcance',
    'poll.vote': 'Emite tu voto',
    'poll.submit': 'Enviar voto',
    'poll.voted': 'Voto registrado',
    'poll.thanks': '¡Gracias por participar!',
    
    'footer.description': 'Plataforma digital para la participación democrática directa. Construyendo juntos el futuro de la democracia italiana.',
    'footer.legal': 'Información legal',
    'footer.community': 'Comunidad',
    'footer.copyright': '© 2025 Proyecto de Democracia Directa. Todos los derechos reservados.',
    'footer.certification': 'Plataforma certificada conforme a las regulaciones europeas de seguridad digital (eIDAS)'
  },
  PT: {
    'site.title': 'Projeto de Democracia Direta',
    'nav.home': 'Início',
    'nav.polls': 'Pesquisas',
    'nav.dashboard': 'Painel',
    'nav.news': 'Notícias & Transparência',
    'nav.login': 'Entrar',
    'nav.guest': 'Convidado',
    
    'home.hero.title': 'Projeto de Democracia Direta ®',
    'home.hero.subtitle': 'Participe ativamente nas decisões que afetam seu país através de uma plataforma segura, transparente e acessível',
    'home.hero.explore': 'Explorar pesquisas',
    'home.hero.login': 'Entrar',
    
    'home.features.participation.title': 'Participação Ativa',
    'home.features.participation.desc': 'Vote em questões reais que afetam sua comunidade e país, com resultados transparentes e atualizações em tempo real',
    'home.features.security.title': 'Segurança Garantida',
    'home.features.security.desc': 'Autenticação segura via SPID, CIE e sistemas eIDAS para garantir a proteção de dados e segurança de dados pessoais',
    'home.features.analysis.title': 'Análise de Dados',
    'home.features.analysis.desc': 'Visualize estatísticas detalhadas e análise de resultados com gráficos interativos, filtros personalizados e exportação',
    
    'home.polls.title': 'Pesquisas em Destaque',
    'home.polls.participate': 'Participar',
    'home.polls.details': 'Detalhes',
    'home.polls.active': 'ATIVO',
    'home.polls.expires': 'EXPIRA',
    'home.polls.favorable': 'Favorável',
    
    'home.howworks.title': 'Como Funciona',
    'home.howworks.step1.title': 'Registrar',
    'home.howworks.step1.desc': 'Acesso com SPID, CIE ou outros sistemas de identidade digital europeus',
    'home.howworks.step2.title': 'Explorar',
    'home.howworks.step2.desc': 'Navegar por pesquisas ativas filtradas por categoria e região de interesse',
    'home.howworks.step3.title': 'Votar',
    'home.howworks.step3.desc': 'Expressar sua opinião sobre questões políticas, sociais e econômicas',
    'home.howworks.step4.title': 'Analisar',
    'home.howworks.step4.desc': 'Visualizar resultados em tempo real e estatísticas detalhadas',
    
    'home.newsletter.title': 'Mantenha-se Atualizado',
    'home.newsletter.desc': 'Inscreva-se em nossa newsletter para receber notificações sobre novas pesquisas e atualizações da plataforma',
    'home.newsletter.placeholder': 'Seu email',
    'home.newsletter.subscribe': 'Inscrever-se',
    
    'polls.title': 'Pesquisas Ativas',
    'polls.subtitle': 'Participe nas decisões que moldam o futuro do país',
    'polls.search': 'Pesquisar enquetes...',
    'polls.participate': 'Participar',
    'polls.details': 'Detalhes',
    'polls.active': 'ATIVO',
    'polls.urgent': 'URGENTE',
    'polls.expired': 'EXPIRADO',
    'poll.participants': 'Participantes',
    'poll.deadline': 'Prazo',
    'poll.scope': 'Escopo',
    'poll.vote': 'Emita seu voto',
    'poll.submit': 'Enviar voto',
    'poll.voted': 'Voto registrado',
    'poll.thanks': 'Obrigado por participar!',
    
    'footer.description': 'Plataforma digital para participação democrática direta. Construindo juntos o futuro da democracia italiana.',
    'footer.legal': 'Informações legais',
    'footer.community': 'Comunidade',
    'footer.copyright': '© 2025 Projeto de Democracia Direta. Todos os direitos reservados.',
    'footer.certification': 'Plataforma certificada em conformidade com os regulamentos europeus de segurança digital (eIDAS)'
  },
  RU: {
    'site.title': 'Проект Прямой Демократии',
    'nav.home': 'Главная',
    'nav.polls': 'Опросы',
    'nav.dashboard': 'Панель',
    'nav.news': 'Новости & Прозрачность',
    'nav.login': 'Войти',
    'nav.guest': 'Гость',
    
    'home.hero.title': 'Проект Прямой Демократии ®',
    'home.hero.subtitle': 'Активно участвуйте в решениях, которые влияют на вашу страну, через безопасную, прозрачную и доступную платформу',
    'home.hero.explore': 'Исследовать опросы',
    'home.hero.login': 'Войти',
    
    'home.features.participation.title': 'Активное Участие',
    'home.features.participation.desc': 'Голосуйте по реальным вопросам, которые влияют на ваше сообщество и страну, с прозрачными результатами и обновлениями в реальном времени',
    'home.features.security.title': 'Гарантированная Безопасность',
    'home.features.security.desc': 'Безопасная аутентификация через SPID, CIE и системы eIDAS для обеспечения защиты данных и безопасности персональных данных',
    'home.features.analysis.title': 'Анализ Данных',
    'home.features.analysis.desc': 'Просматривайте подробную статистику и анализ результатов с интерактивными графиками, пользовательскими фильтрами и экспортом',
    
    'home.polls.title': 'Рекомендуемые Опросы',
    'home.polls.participate': 'Участвовать',
    'home.polls.details': 'Детали',
    'home.polls.active': 'АКТИВНЫЙ',
    'home.polls.expires': 'ИСТЕКАЕТ',
    'home.polls.favorable': 'Благоприятный',
    
    'home.howworks.title': 'Как Это Работает',
    'home.howworks.step1.title': 'Зарегистрироваться',
    'home.howworks.step1.desc': 'Доступ через SPID, CIE или другие европейские системы цифровой идентификации',
    'home.howworks.step2.title': 'Исследовать',
    'home.howworks.step2.desc': 'Просматривайте активные опросы, отфильтрованные по категориям и регионам интереса',
    'home.howworks.step3.title': 'Голосовать',
    'home.howworks.step3.desc': 'Выражайте свое мнение по политическим, социальным и экономическим вопросам',
    'home.howworks.step4.title': 'Анализировать',
    'home.howworks.step4.desc': 'Просматривайте результаты в реальном времени и подробную статистику',
    
    'home.newsletter.title': 'Оставайтесь в Курсе',
    'home.newsletter.desc': 'Подпишитесь на нашу рассылку, чтобы получать уведомления о новых опросах и обновлениях платформы',
    'home.newsletter.placeholder': 'Ваш email',
    'home.newsletter.subscribe': 'Подписаться',
    
    'polls.title': 'Активные опросы',
    'polls.subtitle': 'Участвуйте в решениях, формирующих будущее страны',
    'polls.search': 'Поиск опросов...',
    'polls.participate': 'Участвовать',
    'polls.details': 'Детали',
    'polls.active': 'АКТИВНЫЙ',
    'polls.urgent': 'СРОЧНЫЙ',
    'polls.expired': 'ИСТЁК',
    'poll.participants': 'Участники',
    'poll.deadline': 'Срок',
    'poll.scope': 'Область',
    'poll.vote': 'Отдайте свой голос',
    'poll.submit': 'Отправить голос',
    'poll.voted': 'Голос записан',
    'poll.thanks': 'Спасибо за участие!',
    
    'footer.description': 'Цифровая платформа для прямого демократического участия. Строим будущее итальянской демократии вместе.',
    'footer.legal': 'Правовая информация',
    'footer.community': 'Сообщество',
    'footer.copyright': '© 2025 Проект Прямой Демократии. Все права защищены.',
    'footer.certification': 'Платформа сертифицирована в соответствии с европейскими правилами цифровой безопасности (eIDAS)'
  },
  ZH: {
    'site.title': '直接民主项目',
    'nav.home': '首页',
    'nav.polls': '投票',
    'nav.dashboard': '仪表板',
    'nav.news': '新闻与透明度',
    'nav.login': '登录',
    'nav.guest': '访客',
    
    'home.hero.title': '直接民主项目 ®',
    'home.hero.subtitle': '通过一个安全、透明和易用的平台积极参与影响您国家的决策',
    'home.hero.explore': '探索投票',
    'home.hero.login': '登录',
    
    'home.features.participation.title': '积极参与',
    'home.features.participation.desc': '就影响您社区和国家的实际问题进行投票，获得透明的结果和实时更新',
    'home.features.security.title': '安全保证',
    'home.features.security.desc': '通过SPID、CIE和eIDAS系统进行安全认证，确保数据保护和个人数据安全',
    'home.features.analysis.title': '数据分析',
    'home.features.analysis.desc': '通过交互式图表、自定义过滤器和导出查看详细统计和结果分析',
    
    'home.polls.title': '精选投票',
    'home.polls.participate': '参与',
    'home.polls.details': '详情',
    'home.polls.active': '活跃',
    'home.polls.expires': '到期',
    'home.polls.favorable': '有利',
    
    'home.howworks.title': '工作原理',
    'home.howworks.step1.title': '注册',
    'home.howworks.step1.desc': '通过SPID、CIE或其他欧洲数字身份系统访问',
    'home.howworks.step2.title': '探索',
    'home.howworks.step2.desc': '浏览按类别和感兴趣地区过滤的活跃投票',
    'home.howworks.step3.title': '投票',
    'home.howworks.step3.desc': '就政治、社会和经济问题表达您的意见',
    'home.howworks.step4.title': '分析',
    'home.howworks.step4.desc': '查看实时结果和详细统计',
    
    'home.newsletter.title': '保持更新',
    'home.newsletter.desc': '订阅我们的通讯以接收新投票和平台更新的通知',
    'home.newsletter.placeholder': '您的邮箱',
    'home.newsletter.subscribe': '订阅',
    
    'polls.title': '活跃投票',
    'polls.subtitle': '参与塑造国家未来的决策',
    'polls.search': '搜索投票...',
    'polls.participate': '参与',
    'polls.details': '详情',
    'polls.active': '活跃',
    'polls.urgent': '紧急',
    'polls.expired': '已过期',
    'poll.participants': '参与者',
    'poll.deadline': '截止日期',
    'poll.scope': '范围',
    'poll.vote': '投出您的一票',
    'poll.submit': '提交投票',
    'poll.voted': '投票已记录',
    'poll.thanks': '感谢您的参与！',
    
    'footer.description': '直接民主参与的数字平台。共同建设意大利民主的未来。',
    'footer.legal': '法律信息',
    'footer.community': '社区',
    'footer.copyright': '© 2025 直接民主项目。保留所有权利。',
    'footer.certification': '平台已通过欧洲数字安全法规(eIDAS)认证'
  },
  JA: {
    'site.title': '直接民主プロジェクト',
    'nav.home': 'ホーム',
    'nav.polls': '投票',
    'nav.dashboard': 'ダッシュボード',
    'nav.news': 'ニュース＆透明性',
    'nav.login': 'ログイン',
    'nav.guest': 'ゲスト',
    
    'home.hero.title': '直接民主プロジェクト ®',
    'home.hero.subtitle': '安全で透明かつアクセスしやすいプラットフォームを通じて、あなたの国に影響を与える決定に積極的に参加しましょう',
    'home.hero.explore': '投票を探索',
    'home.hero.login': 'ログイン',
    
    'home.features.participation.title': '積極的参加',
    'home.features.participation.desc': 'あなたのコミュニティと国に影響を与える実際の問題について投票し、透明な結果とリアルタイム更新を取得',
    'home.features.security.title': '保証されたセキュリティ',
    'home.features.security.desc': 'SPID、CIE、eIDASシステムによる安全な認証でデータ保護と個人データセキュリティを保証',
    'home.features.analysis.title': 'データ分析',
    'home.features.analysis.desc': 'インタラクティブチャート、カスタムフィルター、エクスポート機能で詳細な統計と結果分析を表示',
    
    'home.polls.title': '注目の投票',
    'home.polls.participate': '参加',
    'home.polls.details': '詳細',
    'home.polls.active': 'アクティブ',
    'home.polls.expires': '期限切れ',
    'home.polls.favorable': '有利',
    
    'home.howworks.title': '仕組み',
    'home.howworks.step1.title': '登録',
    'home.howworks.step1.desc': 'SPID、CIE、またはその他のヨーロッパのデジタルアイデンティティシステムでアクセス',
    'home.howworks.step2.title': '探索',
    'home.howworks.step2.desc': 'カテゴリと興味のある地域でフィルタリングされたアクティブな投票を閲覧',
    'home.howworks.step3.title': '投票',
    'home.howworks.step3.desc': '政治的、社会的、経済的問題についてあなたの意見を表明',
    'home.howworks.step4.title': '分析',
    'home.howworks.step4.desc': 'リアルタイム結果と詳細統計を表示',
    
    'home.newsletter.title': '最新情報を入手',
    'home.newsletter.desc': 'ニュースレターに登録して、新しい投票とプラットフォーム更新の通知を受け取る',
    'home.newsletter.placeholder': 'あなたのメール',
    'home.newsletter.subscribe': '購読',
    
    'polls.title': 'アクティブな投票',
    'polls.subtitle': '国の未来を形作る決定に参加しましょう',
    'polls.search': '投票を検索...',
    'polls.participate': '参加',
    'polls.details': '詳細',
    'polls.active': 'アクティブ',
    'polls.urgent': '緊急',
    'polls.expired': '期限切れ',
    'poll.participants': '参加者',
    'poll.deadline': '締切',
    'poll.scope': '範囲',
    'poll.vote': '投票する',
    'poll.submit': '投票を送信',
    'poll.voted': '投票が記録されました',
    'poll.thanks': 'ご参加ありがとうございます！',
    
    'footer.description': '直接民主的参加のためのデジタルプラットフォーム。イタリア民主主義の未来を一緒に築きます。',
    'footer.legal': '法的情報',
    'footer.community': 'コミュニティ',
    'footer.copyright': '© 2025 直接民主プロジェクト。全著作権所有。',
    'footer.certification': 'プラットフォームは欧州デジタルセキュリティ規則(eIDAS)に準拠し認証されています'
  },
  KO: {
    'site.title': '직접민주주의 프로젝트',
    'nav.home': '홈',
    'nav.polls': '투표',
    'nav.dashboard': '대시보드',
    'nav.news': '뉴스 & 투명성',
    'nav.login': '로그인',
    'nav.guest': '게스트',
    
    'home.hero.title': '직접민주주의 프로젝트 ®',
    'home.hero.subtitle': '안전하고 투명하며 접근 가능한 플랫폼을 통해 귀하의 국가에 영향을 미치는 결정에 적극적으로 참여하세요',
    'home.hero.explore': '투표 탐색',
    'home.hero.login': '로그인',
    
    'home.features.participation.title': '적극적 참여',
    'home.features.participation.desc': '지역사회와 국가에 영향을 미치는 실제 문제에 투표하고 투명한 결과와 실시간 업데이트를 받으세요',
    'home.features.security.title': '보장된 보안',
    'home.features.security.desc': 'SPID, CIE 및 eIDAS 시스템을 통한 안전한 인증으로 데이터 보호 및 개인 데이터 보안 보장',
    'home.features.analysis.title': '데이터 분석',
    'home.features.analysis.desc': '대화형 차트, 사용자 정의 필터 및 내보내기로 자세한 통계 및 결과 분석 보기',
    
    'home.polls.title': '주요 투표',
    'home.polls.participate': '참여',
    'home.polls.details': '세부사항',
    'home.polls.active': '활성',
    'home.polls.expires': '만료',
    'home.polls.favorable': '유리한',
    
    'home.howworks.title': '작동 방식',
    'home.howworks.step1.title': '등록',
    'home.howworks.step1.desc': 'SPID, CIE 또는 기타 유럽 디지털 신원 시스템으로 액세스',
    'home.howworks.step2.title': '탐색',
    'home.howworks.step2.desc': '카테고리 및 관심 지역별로 필터링된 활성 투표 탐색',
    'home.howworks.step3.title': '투표',
    'home.howworks.step3.desc': '정치적, 사회적, 경제적 문제에 대한 의견 표현',
    'home.howworks.step4.title': '분석',
    'home.howworks.step4.desc': '실시간 결과 및 상세 통계 보기',
    
    'home.newsletter.title': '최신 정보 유지',
    'home.newsletter.desc': '새로운 투표 및 플랫폼 업데이트 알림을 받기 위해 뉴스레터를 구독하세요',
    'home.newsletter.placeholder': '귀하의 이메일',
    'home.newsletter.subscribe': '구독',
    
    'polls.title': '활성 투표',
    'polls.subtitle': '국가의 미래를 형성하는 결정에 참여하세요',
    'polls.search': '투표 검색...',
    'polls.participate': '참여',
    'polls.details': '세부사항',
    'polls.active': '활성',
    'polls.urgent': '긴급',
    'polls.expired': '만료됨',
    'poll.participants': '참가자',
    'poll.deadline': '마감일',
    'poll.scope': '범위',
    'poll.vote': '투표하기',
    'poll.submit': '투표 제출',
    'poll.voted': '투표 기록됨',
    'poll.thanks': '참여해 주셔서 감사합니다!',
    
    'footer.description': '직접 민주적 참여를 위한 디지털 플랫폼. 이탈리아 민주주의의 미래를 함께 건설합니다.',
    'footer.legal': '법적 정보',
    'footer.community': '커뮤니티',
    'footer.copyright': '© 2025 직접민주주의 프로젝트. 모든 권리 보유.',
    'footer.certification': '플랫폼은 유럽 디지털 보안 규정(eIDAS)을 준수하여 인증되었습니다'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('IT');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
