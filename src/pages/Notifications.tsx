
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bell, Clock, Vote, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

const Notifications = () => {
  const [filter, setFilter] = useState('all');

  const notifications = [
    {
      id: '1',
      type: 'urgent',
      title: 'Sondaggio in scadenza',
      message: 'Il referendum sulla cittadinanza scade tra 2 giorni',
      time: '2 ore fa',
      read: false,
      icon: AlertTriangle,
      action: 'Vota ora'
    },
    {
      id: '2',
      type: 'vote',
      title: 'Nuovo sondaggio disponibile',
      message: 'È disponibile un nuovo sondaggio sulla riforma della giustizia',
      time: '4 ore fa',
      read: false,
      icon: Vote,
      action: 'Partecipa'
    },
    {
      id: '3',
      type: 'trending',
      title: 'Sondaggio in trend',
      message: 'La riforma fiscale 2025 ha superato 25.000 partecipanti',
      time: '6 ore fa',
      read: true,
      icon: TrendingUp,
      action: 'Visualizza'
    },
    {
      id: '4',
      type: 'completed',
      title: 'Sondaggio completato',
      message: 'Il tuo voto per la riforma dei trasporti è stato registrato',
      time: '1 giorno fa',
      read: true,
      icon: CheckCircle,
      action: 'Risultati'
    },
    {
      id: '5',
      type: 'system',
      title: 'Aggiornamento sistema',
      message: 'Nuove funzionalità disponibili nella dashboard',
      time: '2 giorni fa',
      read: true,
      icon: Bell,
      action: 'Scopri'
    }
  ];

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notification.read;
    return notification.type === filter;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'urgent': return 'bg-red-500';
      case 'vote': return 'bg-blue-500';
      case 'trending': return 'bg-green-500';
      case 'completed': return 'bg-purple-500';
      case 'system': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'urgent': return 'Urgente';
      case 'vote': return 'Voto';
      case 'trending': return 'Trending';
      case 'completed': return 'Completato';
      case 'system': return 'Sistema';
      default: return 'Altro';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header isAuthenticated={true} userName="Ospite" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Notifiche
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Resta aggiornato su tutti gli sviluppi della democrazia digitale
          </p>
        </div>

        {/* Filtri */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => setFilter('all')}
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              className="dark:border-gray-600"
            >
              Tutte ({notifications.length})
            </Button>
            <Button
              onClick={() => setFilter('unread')}
              variant={filter === 'unread' ? 'default' : 'outline'}
              size="sm"
              className="dark:border-gray-600"
            >
              Non lette ({notifications.filter(n => !n.read).length})
            </Button>
            <Button
              onClick={() => setFilter('urgent')}
              variant={filter === 'urgent' ? 'default' : 'outline'}
              size="sm"
              className="dark:border-gray-600"
            >
              Urgenti
            </Button>
            <Button
              onClick={() => setFilter('vote')}
              variant={filter === 'vote' ? 'default' : 'outline'}
              size="sm"
              className="dark:border-gray-600"
            >
              Sondaggi
            </Button>
          </div>
        </div>

        {/* Lista notifiche */}
        <div className="space-y-4">
          {filteredNotifications.map((notification) => {
            const IconComponent = notification.icon;
            return (
              <Card 
                key={notification.id} 
                className={`bg-white dark:bg-gray-800 hover:shadow-md transition-shadow cursor-pointer ${
                  !notification.read ? 'border-l-4 border-l-blue-500' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className={`p-2 rounded-full ${getTypeColor(notification.type)} text-white`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className={`font-semibold ${!notification.read ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                            {notification.title}
                          </h3>
                          <Badge 
                            className={`${getTypeColor(notification.type)} text-white text-xs`}
                          >
                            {getTypeLabel(notification.type)}
                          </Badge>
                          {!notification.read && (
                            <Badge className="bg-blue-500 text-white text-xs">Nuovo</Badge>
                          )}
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                          {notification.message}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                            <Clock className="w-3 h-3 mr-1" />
                            {notification.time}
                          </div>
                          
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="text-xs dark:border-gray-600 dark:text-gray-300"
                          >
                            {notification.action}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredNotifications.length === 0 && (
          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="py-12 text-center">
              <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Nessuna notifica
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Non ci sono notifiche che corrispondono ai filtri selezionati.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Azioni bulk */}
        <div className="mt-8 flex justify-center space-x-4">
          <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300">
            Segna tutte come lette
          </Button>
          <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300">
            Cancella notifiche vecchie
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Notifications;
