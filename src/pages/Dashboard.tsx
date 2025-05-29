import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { TrendingUp, Users, Vote, Calendar, Award, Bell } from 'lucide-react';

const Dashboard = () => {
  const { t } = useLanguage();

  // Mock data for polls
  const polls = [
    { id: '1', title: 'Riforma Fiscale 2025', progress: 62, status: 'active' },
    { id: '2', title: 'Transizione Energetica', progress: 73, status: 'active' },
    { id: '3', title: 'Referendum Cittadinanza', progress: 47, status: 'urgent' },
  ];

  // Mock data for user stats
  const userStats = {
    votesCast: 42,
    pollsParticipated: 15,
    badgesEarned: 3,
  };

  // Mock data for demographic distribution
  const demographicData = [
    { name: '18-25', value: 25, color: '#0088FE' },
    { name: '26-35', value: 30, color: '#00C49F' },
    { name: '36-50', value: 20, color: '#FFBB28' },
    { name: '51+', value: 25, color: '#FF8042' },
  ];

  // Mock data for regional participation
  const regionalData = [
    { name: 'Nord', votes: 3500 },
    { name: 'Centro', votes: 2500 },
    { name: 'Sud', votes: 1800 },
    { name: 'Isole', votes: 1200 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header isAuthenticated={true} userName={t('dashboard.welcome')} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t('dashboard.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {t('dashboard.subtitle')}
          </p>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('dashboard.stats.votesCast')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                {userStats.votesCast}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t('dashboard.stats.votesCastDesc')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('dashboard.stats.pollsParticipated')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-600 dark:text-green-400">
                {userStats.pollsParticipated}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t('dashboard.stats.pollsParticipatedDesc')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('dashboard.stats.badgesEarned')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400">
                {userStats.badgesEarned}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t('dashboard.stats.badgesEarnedDesc')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Active Polls */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('dashboard.activePolls')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {polls.map(poll => (
              <Card key={poll.id} className="bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                    {poll.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {t('dashboard.progress')}
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      {poll.progress}%
                    </span>
                  </div>
                  <Progress value={poll.progress} />
                  <div className="flex justify-between mt-4">
                    <Badge className="bg-green-500 text-white">
                      {poll.status === 'active' ? t('status.active') : t('status.urgent')}
                    </Badge>
                    <Button variant="outline">{t('dashboard.participate')}</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Demographic Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('dashboard.demographics')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={demographicData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {demographicData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-around mt-4">
                {demographicData.map(item => (
                  <div key={item.name} className="text-center">
                    <div className="w-3 h-3 rounded-full inline-block mr-1" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Regional Participation */}
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('dashboard.regionalParticipation')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={regionalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="votes" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Notifications and Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <div className="flex items-center">
                <Bell className="mr-2 h-5 w-5 text-gray-500" />
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('dashboard.notifications')}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-3">
                <li className="flex items-center">
                  <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {t('dashboard.notification1')}
                  </span>
                </li>
                <li className="flex items-center">
                  <Users className="mr-2 h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {t('dashboard.notification2')}
                  </span>
                </li>
                {/* Add more notifications here */}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <div className="flex items-center">
                <Award className="mr-2 h-5 w-5 text-yellow-500" />
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('dashboard.achievements')}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-3">
                <li className="flex items-center">
                  <Vote className="mr-2 h-4 w-4 text-purple-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {t('dashboard.achievement1')}
                  </span>
                </li>
                <li className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-orange-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {t('dashboard.achievement2')}
                  </span>
                </li>
                {/* Add more achievements here */}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
