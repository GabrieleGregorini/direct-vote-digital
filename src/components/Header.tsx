
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  isAuthenticated?: boolean;
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated = false, userName = "Ospite" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-democracy-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">D.D.P</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Direct Democracy Project
                </h1>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => navigate('/')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-democracy-blue border-b-2 border-democracy-blue' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-democracy-blue'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigate('/sondaggi')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/sondaggi') 
                  ? 'text-democracy-blue border-b-2 border-democracy-blue' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-democracy-blue'
              }`}
            >
              Sondaggi
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/dashboard') 
                  ? 'text-democracy-blue border-b-2 border-democracy-blue' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-democracy-blue'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate('/news')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/news') 
                  ? 'text-democracy-blue border-b-2 border-democracy-blue' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-democracy-blue'
              }`}
            >
              News & Trasparenza
            </button>
          </nav>

          {/* User section */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-democracy-blue transition-colors"
            >
              {isDarkMode ? '🌙' : '☀️'}
            </button>

            {/* Notifications */}
            <div className="relative">
              <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-democracy-blue transition-colors">
                🔔
              </button>
              <Badge className="absolute -top-1 -right-1 h-5 w-5 bg-democracy-red text-white text-xs flex items-center justify-center">
                3
              </Badge>
            </div>

            {/* User profile */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-democracy-purple rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">
                  {userName.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
                {userName}
              </span>
            </div>

            {!isAuthenticated && (
              <Button 
                onClick={() => navigate('/login')}
                className="bg-democracy-blue hover:bg-democracy-blue/90"
              >
                Accedi
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
