import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-100 via-pink-50 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Eya Naffeti
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up">
            {t('hero.title')}
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 animate-fade-in-delay">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex justify-center space-x-4">
            <button className="bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              {t('hero.cta.projects')}
            </button>
            <button className="border-2 border-rose-600 text-rose-600 px-8 py-3 rounded-full hover:bg-rose-50 transition-all duration-300">
              {t('hero.cta.contact')}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-rose-600" size={32} />
      </div>
    </section>
  );
}