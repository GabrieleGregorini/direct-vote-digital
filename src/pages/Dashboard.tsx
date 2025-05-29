import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsCard from "@/components/StatsCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const Dashboard = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');

  // Enhanced data for comprehensive dashboard
  const participationData = [
    { name: 'Gen', partecipazione: 12000, voti: 8500, completamento: 71 },
    { name: 'Feb', partecipazione: 15000, voti: 11200, completamento: 75 },
    { name: 'Mar', partecipazione: 18000, voti: 14500, completamento: 81 },
    { name: 'Apr', partecipazione: 22000, voti: 18800, completamento: 85 },
    { name: 'Mag', partecipazione: 25000, voti: 21500, completamento: 86 },
    { name: 'Giu', partecipazione: 28000, voti: 24200, completamento: 86 },
  ];

  const categoryData = [
    { name: 'Sociale', value: 35, color: '#8B5CF6', voti: 87500 },
    { name: 'Economia', value: 25, color: '#4F46E5', voti: 62500 },
    { name: 'Ambiente', value: 20, color: '#10B981', voti: 50000 },
    { name: 'Trasporti', value: 12, color: '#F59E0B', voti: 30000 },
    { name: 'Sanità', value: 8, color: '#EF4444', voti: 20000 },
  ];

  const regionData = [
    { name: 'Lombardia', voti: 25000, percentuale: 22, popolazione: 10000000, tasso: 0.25 },
    { name: 'Lazio', voti: 18000, percentuale: 16, popolazione: 5800000, tasso: 0.31 },
    { name: 'Veneto', voti: 15000, percentuale: 13, popolazione: 4900000, tasso: 0.31 },
    { name: 'Campania', voti: 12000, percentuale: 11, popolazione: 5800000, tasso: 0.21 },
    { name: 'Emilia-Romagna', voti: 10000, percentuale: 9, popolazione: 4500000, tasso: 0.22 },
    { name: 'Piemonte', voti: 8500, percentuale: 7, popolazione: 4400000, tasso: 0.19 },
    { name: 'Altri', voti: 33000, percentuale: 29, popolazione: 25000000, tasso: 0.13 },
  ];

  const trendData = [
    { giorno: 'Lun', voti: 4500, nuovi_utenti: 320, completamento: 78 },
    { giorno: 'Mar', voti: 5200, nuovi_utenti: 410, completamento: 82 },
    { giorno: 'Mer', voti: 4800, nuovi_utenti: 285, completamento: 76 },
    { giorno: 'Gio', voti: 6100, nuovi_utenti: 520, completamento: 85 },
    { giorno: 'Ven', voti: 5800, nuovi_utenti: 445, completamento: 83 },
    { giorno: 'Sab', voti: 3200, nuovi_utenti: 180, completamento: 71 },
    { giorno: 'Dom', voti: 2800, nuovi_utenti: 150, completamento: 68 },
  ];

  const detailedSondaggi = [
    {
      id: 1,
      titolo: "Riforma del Sistema Fiscale",
      categoria: "Economia",
      stato: "Attivo",
      voti_totali: 25553,
      percentuale_completamento: 89,
      data_creazione: "2024-05-15",
      data_scadenza: "2024-06-15",
      risultato_principale: "A favore (67%)",
    },
    {
      id: 2,
      titolo: "Potenziamento Trasporti Pubblici",
      categoria: "Trasporti",
      stato: "Attivo",
      voti_totali: 19847,
      percentuale_completamento: 76,
      data_creazione: "2024-05-20",
      data_scadenza: "2024-06-20",
      risultato_principale: "A favore (82%)",
    },
    {
      id: 3,
      titolo: "Investimenti in Energia Rinnovabile",
      categoria: "Ambiente",
      stato: "Completato",
      voti_totali: 32450,
      percentuale_completamento: 100,
      data_creazione: "2024-04-10",
      data_scadenza: "2024-05-10",
      risultato_principale: "A favore (74%)",
    },
    {
      id: 4,
      titolo: "Riforma della Sanità Pubblica",
      categoria: "Sanità",
      stato: "Attivo",
      voti_totali: 17592,
      percentuale_completamento: 68,
      data_creazione: "2024-05-25",
      data_scadenza: "2024-06-25",
      risultato_principale: "In corso",
    },
    {
      id: 5,
      titolo: "Modernizzazione Sistema Educativo",
      categoria: "Sociale",
      stato: "Attivo",
      voti_totali: 15847,
      percentuale_completamento: 62,
      data_creazione: "2024-05-28",
      data_scadenza: "2024-06-28",
      risultato_principale: "In corso",
    },
  ];

  const engagementData = [
    { categoria: 'Partecipazione', valore: 85 },
    { categoria: 'Completamento', valore: 78 },
    { categoria: 'Condivisione', valore: 65 },
    { categoria: 'Feedback', valore: 82 },
    { categoria: 'Retention', valore: 73 },
  ];

  const getStatoBadge = (stato: string) => {
    switch (stato) {
      case 'Attivo':
        return <Badge className="bg-green-100 text-green-800">Attivo</Badge>;
      case 'Completato':
        return <Badge className="bg-blue-100 text-blue-800">Completato</Badge>;
      case 'Sospeso':
        return <Badge className="bg-yellow-100 text-yellow-800">Sospeso</Badge>;
      default:
        return <Badge variant="secondary">{stato}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header isAuthenticated={true} userName="Ospite" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Dashboard Analitica Avanzata
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
              Analisi completa della partecipazione democratica e trend di engagement
            </p>
          </div>
          
          <div className="flex gap-2">
            {['7d', '30d', '90d', '1y'].map(range => (
              <Button
                key={range}
                variant={selectedTimeRange === range ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTimeRange(range)}
                className={selectedTimeRange === range ? "bg-democracy-blue" : ""}
              >
                {range}
              </Button>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <StatsCard
            title="Partecipazione Totale"
            value="125,847"
            description="Cittadini attivi"
            icon="👥"
            trend={{ value: 12.5, isPositive: true }}
            color="blue"
          />
          <StatsCard
            title="Voti Oggi"
            value="3,248"
            description="Nelle ultime 24h"
            icon="🗳️"
            trend={{ value: 8.2, isPositive: true }}
            color="green"
          />
          <StatsCard
            title="Sondaggi Attivi"
            value="47"
            description="In corso"
            icon="📊"
            trend={{ value: 3, isPositive: true }}
            color="yellow"
          />
          <StatsCard
            title="Tasso Completamento"
            value="78.5%"
            description="Media sondaggi"
            icon="✅"
            trend={{ value: 4.2, isPositive: true }}
            color="purple"
          />
          <StatsCard
            title="Engagement Score"
            value="8.7/10"
            description="Indice qualità"
            icon="⭐"
            trend={{ value: 2.1, isPositive: true }}
            color="blue"
          />
        </div>

        {/* Enhanced Charts Section */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Panoramica</TabsTrigger>
            <TabsTrigger value="detailed">Analisi Dettagliata</TabsTrigger>
            <TabsTrigger value="geographic">Distribuzione Geografica</TabsTrigger>
            <TabsTrigger value="engagement">Engagement & Qualità</TabsTrigger>
            <TabsTrigger value="sondaggi">Gestione Sondaggi</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Trend Partecipazione Mensile
                    <Badge className="bg-democracy-blue">+15.3%</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={participationData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px'
                        }}
                      />
                      <Area type="monotone" dataKey="partecipazione" stackId="1" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="voti" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Distribuzione per Categoria</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={index} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value, name) => [
                        `${value}% (${categoryData.find(d => d.name === name)?.voti.toLocaleString()} voti)`,
                        name
                      ]} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="detailed" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Trend Settimanale Dettagliato</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="giorno" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px'
                        }}
                      />
                      <Line type="monotone" dataKey="voti" stroke="#4F46E5" strokeWidth={3} dot={{ fill: '#4F46E5', strokeWidth: 2, r: 4 }} />
                      <Line type="monotone" dataKey="nuovi_utenti" stroke="#10B981" strokeWidth={2} dot={{ fill: '#10B981', strokeWidth: 2, r: 3 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fasce d'Età e Demografia</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { range: '18-25', percentage: 15, count: '18,877', growth: '+5.2%' },
                      { range: '26-35', percentage: 28, count: '35,237', growth: '+3.8%' },
                      { range: '36-50', percentage: 32, count: '40,271', growth: '+2.1%' },
                      { range: '51-65', percentage: 20, count: '25,169', growth: '+1.5%' },
                      { range: '65+', percentage: 5, count: '6,293', growth: '+8.2%' }
                    ].map(item => (
                      <div key={item.range} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{item.range}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">{item.count}</span>
                            <span className="text-xs text-green-600">{item.growth}</span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <div 
                            className="bg-democracy-blue h-3 rounded-full transition-all duration-500"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                        <div className="text-xs text-gray-600">{item.percentage}% del totale</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="geographic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analisi Geografica Dettagliata</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Regione</TableHead>
                        <TableHead>Voti Totali</TableHead>
                        <TableHead>% Nazionale</TableHead>
                        <TableHead>Popolazione</TableHead>
                        <TableHead>Tasso Partecipazione</TableHead>
                        <TableHead>Trend</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {regionData.map((region) => (
                        <TableRow key={region.name}>
                          <TableCell className="font-medium">{region.name}</TableCell>
                          <TableCell>{region.voti.toLocaleString()}</TableCell>
                          <TableCell>{region.percentuale}%</TableCell>
                          <TableCell>{(region.popolazione / 1000000).toFixed(1)}M</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-democracy-green h-2 rounded-full"
                                  style={{ width: `${region.tasso * 100}%` }}
                                />
                              </div>
                              <span className="text-sm">{(region.tasso * 100).toFixed(1)}%</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="text-green-600 text-sm">↗ +2.3%</span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="engagement" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Radar Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={engagementData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="categoria" />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} />
                      <Radar
                        name="Engagement"
                        dataKey="valore"
                        stroke="#4F46E5"
                        fill="#4F46E5"
                        fillOpacity={0.3}
                        strokeWidth={2}
                      />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Metriche di Qualità</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { metric: 'Tempo Medio Completamento', value: '4.2 min', target: '< 5 min', status: 'good' },
                      { metric: 'Tasso di Abbandono', value: '12.3%', target: '< 15%', status: 'good' },
                      { metric: 'Feedback Positivo', value: '87.5%', target: '> 80%', status: 'excellent' },
                      { metric: 'Condivisioni Social', value: '2,847', target: '> 2,000', status: 'excellent' },
                      { metric: 'Ritorno Utenti', value: '73.2%', target: '> 70%', status: 'good' },
                    ].map(item => (
                      <div key={item.metric} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div>
                          <div className="font-medium">{item.metric}</div>
                          <div className="text-sm text-gray-600">Target: {item.target}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg">{item.value}</div>
                          <div className={`text-sm ${item.status === 'excellent' ? 'text-green-600' : item.status === 'good' ? 'text-blue-600' : 'text-yellow-600'}`}>
                            {item.status === 'excellent' ? '🌟 Eccellente' : item.status === 'good' ? '✅ Buono' : '⚠️ Da migliorare'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sondaggi" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Gestione Sondaggi Dettagliata
                  <Button size="sm" className="bg-democracy-blue">
                    + Nuovo Sondaggio
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Titolo</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Stato</TableHead>
                        <TableHead>Voti</TableHead>
                        <TableHead>Completamento</TableHead>
                        <TableHead>Scadenza</TableHead>
                        <TableHead>Risultato</TableHead>
                        <TableHead>Azioni</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {detailedSondaggi.map((sondaggio) => (
                        <TableRow key={sondaggio.id}>
                          <TableCell className="font-medium max-w-xs">
                            <div className="truncate">{sondaggio.titolo}</div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{sondaggio.categoria}</Badge>
                          </TableCell>
                          <TableCell>
                            {getStatoBadge(sondaggio.stato)}
                          </TableCell>
                          <TableCell>{sondaggio.voti_totali.toLocaleString()}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-democracy-blue h-2 rounded-full"
                                  style={{ width: `${sondaggio.percentuale_completamento}%` }}
                                />
                              </div>
                              <span className="text-sm">{sondaggio.percentuale_completamento}%</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-sm">
                            {new Date(sondaggio.data_scadenza).toLocaleDateString('it-IT')}
                          </TableCell>
                          <TableCell className="text-sm">{sondaggio.risultato_principale}</TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button size="sm" variant="outline">👁️</Button>
                              <Button size="sm" variant="outline">✏️</Button>
                              <Button size="sm" variant="outline">📊</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Enhanced Real-time Updates */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-3 h-3 bg-democracy-green rounded-full animate-pulse"></div>
              Centro di Controllo in Tempo Reale
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-democracy-blue/5 p-4 rounded-lg border border-democracy-blue/20">
                <div className="text-sm text-democracy-blue font-medium mb-1">
                  🗳️ Nuovo voto - Riforma Fiscale
                </div>
                <div className="text-xs text-gray-600">2 minuti fa • Milano</div>
                <div className="text-xs text-democracy-blue mt-1">+127 voti nell'ultima ora</div>
              </div>
              <div className="bg-democracy-green/5 p-4 rounded-lg border border-democracy-green/20">
                <div className="text-sm text-democracy-green font-medium mb-1">
                  📊 Soglia raggiunta - Trasporti Pubblici
                </div>
                <div className="text-xs text-gray-600">5 minuti fa • Roma</div>
                <div className="text-xs text-democracy-green mt-1">20,000 voti raggiunti</div>
              </div>
              <div className="bg-democracy-yellow/5 p-4 rounded-lg border border-democracy-yellow/20">
                <div className="text-sm text-democracy-yellow font-medium mb-1">
                  🎯 Nuovo sondaggio pubblicato
                </div>
                <div className="text-xs text-gray-600">12 minuti fa • Nazionale</div>
                <div className="text-xs text-democracy-yellow mt-1">Tema: Sostenibilità</div>
              </div>
              <div className="bg-purple-500/5 p-4 rounded-lg border border-purple-500/20">
                <div className="text-sm text-purple-600 font-medium mb-1">
                  ⚡ Picco di attività
                </div>
                <div className="text-xs text-gray-600">Ora • Nazionale</div>
                <div className="text-xs text-purple-600 mt-1">+245% rispetto alla media</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
