
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sun, Moon, Bell, Globe, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  isAuthenticated?: boolean;
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated = false, userName = "Ospite" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const languages = [
    { code: 'IT' as const, name: 'Italiano', flag: '🇮🇹' },
    { code: 'EN' as const, name: 'English', flag: '🇬🇧' },
    { code: 'FR' as const, name: 'Français', flag: '🇫🇷' },
    { code: 'DE' as const, name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ES' as const, name: 'Español', flag: '🇪🇸' },
    { code: 'PT' as const, name: 'Português', flag: '🇵🇹' },
    { code: 'RU' as const, name: 'Русский', flag: '🇷🇺' },
    { code: 'ZH' as const, name: '中文', flag: '🇨🇳' },
    { code: 'JA' as const, name: '日本語', flag: '🇯🇵' },
    { code: 'KO' as const, name: '한국어', flag: '🇰🇷' }
  ];

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isActive = (path: string) => location.pathname === path;

  const handleUserClick = () => {
    if (userName === "Ospite") {
      navigate('/login');
    }
  };

  const handleNotificationClick = () => {
    navigate('/notifiche');
  };

  const handleLanguageChange = (langCode: string) => {
    const newLang = langCode as 'IT' | 'EN' | 'FR' | 'DE' | 'ES' | 'PT' | 'RU' | 'ZH' | 'JA' | 'KO';
    setSelectedLanguage(newLang);
    setLanguage(newLang);
    console.log('Language changed to:', langCode);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/bc60906b-3ac3-4db4-9d4f-72c9b42bad28.png" 
                  alt="Direct Democracy Project"
                  className="w-10 h-10"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('site.title')}
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
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => navigate('/sondaggi')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/sondaggi') 
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {t('nav.polls')}
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/dashboard') 
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {t('nav.dashboard')}
            </button>
            <button
              onClick={() => navigate('/news')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/news') 
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {t('nav.news')}
            </button>
          </nav>

          {/* User section */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-300">
                  <Globe className="h-4 w-4 mr-1" />
                  {selectedLanguage}
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="flex items-center space-x-2"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={handleNotificationClick}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Bell className="h-5 w-5" />
              </button>
              <Badge className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs flex items-center justify-center">
                3
              </Badge>
            </div>

            {/* User profile */}
            <div 
              className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 transition-colors"
              onClick={handleUserClick}
            >
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">
                  {userName.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
                {userName === "Ospite" ? t('nav.guest') : userName}
              </span>
            </div>

            {!isAuthenticated && (
              <Button 
                onClick={() => navigate('/login')}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full"
              >
                {t('nav.login')}
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
