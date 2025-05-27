
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
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">D.D.P</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-gray-900">
                  D.D.P
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
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigate('/sondaggi')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/sondaggi') 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Sondaggi
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/dashboard') 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate('/news')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/news') 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
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
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isDarkMode ? '🌙' : '☀️'}
            </button>

            {/* Notifications */}
            <div className="relative">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                🔔
              </button>
              <Badge className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs flex items-center justify-center">
                3
              </Badge>
            </div>

            {/* User profile */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">
                  {userName.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="hidden sm:block text-sm font-medium text-gray-700">
                {userName}
              </span>
            </div>

            {!isAuthenticated && (
              <Button 
                onClick={() => navigate('/login')}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full"
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
