
import React from 'react';
import { Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrizione */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/af5282c3-1301-4c36-87c4-23d3daa2fef6.png" 
                alt="Direct Democracy Project"
                className="w-10 h-10"
              />
              <h4 className="font-bold text-lg">Direct Democracy Project</h4>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Piattaforma digitale per la partecipazione democratica diretta. 
              Costruiamo insieme il futuro della democrazia italiana.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <span className="text-white font-bold text-sm">T</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors border border-gray-600"
              >
                <span className="text-white font-bold text-sm">X</span>
              </a>
            </div>
          </div>

          {/* Link Legali */}
          <div>
            <h5 className="font-semibold mb-4">Informazioni Legali</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Termini di Servizio</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Note Legali</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Trattamento Dati</a>
              </li>
            </ul>
          </div>

          {/* Comunità */}
          <div>
            <h5 className="font-semibold mb-4">Comunità</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">Regole della Comunità</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Codice di Condotta</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Forum di Discussione</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Segnala un Problema</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Centro Aiuto</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Direct Democracy Project. Tutti i diritti riservati.</p>
          <p className="mt-2">
            Piattaforma certificata conforme alle normative europee sulla sicurezza digitale (eIDAS)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
