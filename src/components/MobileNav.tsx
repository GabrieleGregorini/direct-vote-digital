
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Menu, Home, BarChart3, Settings, Newspaper, Bell, User } from 'lucide-react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const menuItems = [
    {
      title: t('nav.home'),
      path: '/',
      icon: Home,
      description: 'Pagina principale'
    },
    {
      title: t('nav.polls'),
      path: '/sondaggi',
      icon: BarChart3,
      description: 'Sondaggi e consultazioni'
    },
    {
      title: t('nav.dashboard'),
      path: '/dashboard',
      icon: Settings,
      description: 'Area personale'
    },
    {
      title: t('nav.news'),
      path: '/news',
      icon: Newspaper,
      description: 'News e trasparenza'
    },
    {
      title: 'Notifiche',
      path: '/notifiche',
      icon: Bell,
      description: 'Le tue notifiche'
    },
    {
      title: 'Profilo',
      path: '/login',
      icon: User,
      description: 'Accedi o registrati'
    }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <SheetHeader>
            <SheetTitle className="text-left">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/da5f4622-16fc-4051-b334-91866c1bb783.png" 
                  alt="Direct Democracy Project"
                  className="h-8 w-auto object-contain"
                />
                <span className="text-lg font-semibold">{t('site.title')}</span>
              </div>
            </SheetTitle>
          </SheetHeader>
          
          <div className="mt-8 space-y-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    active 
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${active ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500'}`} />
                  <div className="flex-1">
                    <div className={`font-medium ${active ? 'text-blue-600 dark:text-blue-400' : ''}`}>
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {item.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
              {t('site.title')} v1.0
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
