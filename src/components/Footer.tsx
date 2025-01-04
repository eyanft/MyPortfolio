import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <a href="https://github.com" className="hover:text-rose-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/eyanaffeti" className="hover:text-rose-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:eya.naffeti01@gmail.com" className="hover:text-rose-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="flex items-center text-sm">
            {t('footer.madeWith')} <Heart className="w-4 h-4 mx-1 text-rose-500" /> {t('footer.by')} Eya Naffeti
          </p>
          <p className="text-sm text-gray-400">© 2024 {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}