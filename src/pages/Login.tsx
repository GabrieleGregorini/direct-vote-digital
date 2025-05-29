import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSPIDLogin = () => {
    console.log('SPID login initiated');
    // Simuliamo l'autenticazione
    setTimeout(() => navigate('/'), 1000);
  };

  const handleCIELogin = () => {
    console.log('CIE login initiated');
    setTimeout(() => navigate('/'), 1000);
  };

  const handleEIDASLogin = () => {
    console.log('eIDAS login initiated');
    setTimeout(() => navigate('/'), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Welcome Card */}
          <Card className="bg-gradient-to-br from-democracy-blue to-democracy-purple border-0 text-white animate-fade-in">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-democracy-blue font-bold text-sm">🤝</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-democracy-blue font-bold text-sm">✓</span>
                  </div>
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-2">
                Benvenuto/a su<br/>Direct Democracy
              </h1>
            </CardContent>
          </Card>

          {/* Login Methods */}
          <div className="space-y-4">
            {/* SPID */}
            <Card className="hover:shadow-lg transition-all duration-300 animate-scale-in">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                  Entra con SPID
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Accedi al Sistema Pubblico di Identità Digitale Italiano. Se sei già in possesso di una Identità SPID accedi con le credenziali del tuo gestore. Per maggiori informazioni consulta il sito del Dipartimento per la trasformazione digitale.
                </p>
                <Button 
                  onClick={handleSPIDLogin}
                  className="w-full bg-democracy-blue hover:bg-democracy-blue/90 text-white font-semibold py-3"
                  size="lg"
                >
                  <span className="mr-2">🆔</span>
                  Entra con SPID
                </Button>
              </CardContent>
            </Card>

            {/* CIE */}
            <Card className="hover:shadow-lg transition-all duration-300 animate-scale-in">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                  Entra con CIE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  La Carta di Identità Elettronica consente l'accesso ai servizi digitali della PA italiana e dei paesi membri appartenenti all'Unione europea che supportano il regolamento eIDAS. Per maggiori informazioni consulta il sito del Ministero dell'Interno.
                </p>
                <Button 
                  onClick={handleCIELogin}
                  className="w-full bg-democracy-lightBlue hover:bg-democracy-lightBlue/90 text-white font-semibold py-3"
                  size="lg"
                >
                  <span className="mr-2">💳</span>
                  Entra con CIE
                </Button>
              </CardContent>
            </Card>

            {/* eIDAS */}
            <Card className="hover:shadow-lg transition-all duration-300 animate-scale-in">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                  Entra con eIDAS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Il Nodo eIDAS è il gateway che consente ai cittadini italiani di accedere con le proprie credenziali SPID o CIE ai servizi online erogati da Stati che supportano la normativa di accreditamento ed ai servizi online italiani erogati che supportano questa funzionalità.
                </p>
                <Button 
                  onClick={handleEIDASLogin}
                  className="w-full bg-democracy-purple hover:bg-democracy-purple/90 text-white font-semibold py-3"
                  size="lg"
                >
                  <span className="mr-2">🔐</span>
                  Login with eIDAS
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Guest Access */}
          <Card className="border-dashed border-2 border-democracy-blue/30">
            <CardContent className="text-center p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Accesso Ospite
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Esplora la piattaforma senza autenticazione. Alcune funzionalità potrebbero essere limitate.
              </p>
              <Button 
                onClick={() => navigate('/')}
                variant="outline"
                className="border-democracy-blue text-democracy-blue hover:bg-democracy-blue/10"
              >
                Continua come Ospite
              </Button>
            </CardContent>
          </Card>

          {/* Security Info */}
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-2">
              <Badge className="bg-democracy-green text-white">
                🔒 Sicuro
              </Badge>
              <Badge className="bg-democracy-blue text-white">
                ✓ Certificato
              </Badge>
              <Badge className="bg-democracy-purple text-white">
                🇪🇺 Conforme EU
              </Badge>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Tutti i metodi di autenticazione sono certificati e conformi alle normative europee sulla sicurezza digitale
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
