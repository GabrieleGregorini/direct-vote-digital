
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone } from 'lucide-react';

const ViewToggle = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const savedView = localStorage.getItem('viewMode');
    if (savedView === 'mobile') {
      setIsMobileView(true);
      document.body.classList.add('mobile-view-forced');
    }
  }, []);

  const toggleView = () => {
    const newMobileView = !isMobileView;
    setIsMobileView(newMobileView);
    
    if (newMobileView) {
      document.body.classList.add('mobile-view-forced');
      localStorage.setItem('viewMode', 'mobile');
    } else {
      document.body.classList.remove('mobile-view-forced');
      localStorage.setItem('viewMode', 'desktop');
    }
  };

  return (
    <Button
      onClick={toggleView}
      variant="outline"
      size="sm"
      className="flex items-center gap-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
      title={isMobileView ? 'Switch to Desktop View' : 'Switch to Mobile View'}
    >
      {isMobileView ? (
        <>
          <Monitor className="h-4 w-4" />
          <span className="hidden sm:inline">Desktop</span>
        </>
      ) : (
        <>
          <Smartphone className="h-4 w-4" />
          <span className="hidden sm:inline">Mobile</span>
        </>
      )}
    </Button>
  );
};

export default ViewToggle;
