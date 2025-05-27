
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const Dashboard = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');

  // Mock data for charts
  const participationData = [
    { name: 'Gen', partecipazione: 12000, voti: 8500 },
    { name: 'Feb', partecipazione: 15000, voti: 11200 },
    { name: 'Mar', partecipazione: 18000, voti: 14500 },
    { name: 'Apr', partecipazione: 22000, voti: 18800 },
    { name: 'Mag', partecipazione: 25000, voti: 21500 },
  ];

  const categoryData = [
    { name: 'Sociale', value: 35, color: '#8B5CF6' },
    { name: 'Economia', value: 25, color: '#4F46E5' },
    { name: 'Ambiente', value: 20, color: '#10B981' },
    { name: 'Trasporti', value: 12, color: '#F59E0B' },
    { name: 'Sanità', value: 8, color: '#EF4444' },
  ];

  const regionData = [
    { name: 'Lombardia', voti: 25000, percentuale: 22 },
    { name: 'Lazio', voti: 18000, percentuale: 16 },
    { name: 'Veneto', voti: 15000, percentuale: 13 },
    { name: 'Campania', voti: 12000, percentuale: 11 },
    { name: 'Emilia-Romagna', voti: 10000, percentuale: 9 },
    { name: 'Altri', voti: 33000, percentuale: 29 },
  ];

  const trendData = [
    { giorno: 'Lun', voti: 4500 },
    { giorno: 'Mar', voti: 5200 },
    { giorno: 'Mer', voti: 4800 },
    { giorno: 'Gio', voti: 6100 },
    { giorno: 'Ven', voti: 5800 },
    { giorno: 'Sab', voti: 3200 },
    { giorno: 'Dom', voti: 2800 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header isAuthenticated={true} userName="Ospite" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Dashboard & Analisi Dati
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
              Visualizza statistiche e trend della partecipazione democratica
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

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
            title="Tasso di Partecipazione"
            value="73.2%"
            description="Media mensile"
            icon="📈"
            trend={{ value: 5.1, isPositive: true }}
            color="purple"
          />
        </div>

        {/* Charts Section */}
        <Tabs defaultValue="partecipazione" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="partecipazione">Partecipazione</TabsTrigger>
            <TabsTrigger value="categorie">Categorie</TabsTrigger>
            <TabsTrigger value="geografici">Dati Geografici</TabsTrigger>
            <TabsTrigger value="trend">Trend Temporali</TabsTrigger>
          </TabsList>

          <TabsContent value="partecipazione" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Partecipazione Mensile
                    <Badge className="bg-democracy-blue">+15.3%</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={participationData}>
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
                      <Bar dataKey="partecipazione" fill="#4F46E5" radius={4} />
                      <Bar dataKey="voti" fill="#10B981" radius={4} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Distribuzione per Fasce d'Età</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { range: '18-25', percentage: 15, count: '18,877' },
                      { range: '26-35', percentage: 28, count: '35,237' },
                      { range: '36-50', percentage: 32, count: '40,271' },
                      { range: '51-65', percentage: 20, count: '25,169' },
                      { range: '65+', percentage: 5, count: '6,293' }
                    ].map(item => (
                      <div key={item.range} className="flex items-center space-x-3">
                        <div className="w-16 text-sm font-medium">{item.range}</div>
                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <div 
                            className="bg-democracy-blue h-3 rounded-full transition-all duration-500"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                        <div className="w-16 text-sm text-gray-600 dark:text-gray-300">
                          {item.percentage}%
                        </div>
                        <div className="w-20 text-xs text-gray-500">
                          {item.count}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="categorie" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sondaggi per Categoria</CardTitle>
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
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Argomenti</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { topic: 'Riforma Fiscale', engagement: 89, votes: '25,553' },
                      { topic: 'Trasporti Pubblici', engagement: 76, votes: '19,847' },
                      { topic: 'Energia Rinnovabile', engagement: 71, votes: '18,293' },
                      { topic: 'Sanità Pubblica', engagement: 68, votes: '17,592' },
                      { topic: 'Istruzione', engagement: 62, votes: '15,847' }
                    ].map(item => (
                      <div key={item.topic} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{item.topic}</span>
                          <span className="text-xs text-gray-500">{item.votes} voti</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-democracy-green h-2 rounded-full transition-all duration-500"
                            style={{ width: `${item.engagement}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="geografici" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Partecipazione per Regione</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={regionData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="voti" fill="#4F46E5" radius={4} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trend" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Trend Settimanale dei Voti</CardTitle>
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
                    <Line 
                      type="monotone" 
                      dataKey="voti" 
                      stroke="#4F46E5" 
                      strokeWidth={3}
                      dot={{ fill: '#4F46E5', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Real-time Updates */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-3 h-3 bg-democracy-green rounded-full animate-pulse"></div>
              Aggiornamenti in Tempo Reale
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-democracy-blue/5 p-4 rounded-lg border border-democracy-blue/20">
                <div className="text-sm text-democracy-blue font-medium mb-1">
                  🗳️ Nuovo voto - Riforma Fiscale
                </div>
                <div className="text-xs text-gray-600">2 minuti fa</div>
              </div>
              <div className="bg-democracy-green/5 p-4 rounded-lg border border-democracy-green/20">
                <div className="text-sm text-democracy-green font-medium mb-1">
                  📊 Soglia raggiunta - Trasporti Pubblici
                </div>
                <div className="text-xs text-gray-600">5 minuti fa</div>
              </div>
              <div className="bg-democracy-yellow/5 p-4 rounded-lg border border-democracy-yellow/20">
                <div className="text-sm text-democracy-yellow font-medium mb-1">
                  🎯 Nuovo sondaggio pubblicato
                </div>
                <div className="text-xs text-gray-600">12 minuti fa</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
