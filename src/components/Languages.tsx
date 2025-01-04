import React from 'react';
import { useTranslation } from 'react-i18next';

export function Languages() {
  const { t } = useTranslation();
  
  const languages = [
    { 
      name: "Arabe", 
      level: t('languages.native'),
      flag: "https://flagcdn.com/w80/tn.png"
    },
    { 
      name: "Français", 
      level: t('languages.fluent'),
      flag: "https://flagcdn.com/w80/fr.png"
    },
    { 
      name: "Anglais", 
      level: t('languages.intermediate'),
      flag: "https://flagcdn.com/w80/gb.png"
    },
    { 
      name: "Allemand", 
      level: t('languages.beginner'),
      flag: "https://flagcdn.com/w80/de.png"
    }
  ];

  return (
    <section id="languages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{t('languages.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {languages.map((lang, index) => (
            <div key={index} className="card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <img 
                  src={lang.flag} 
                  alt={`Drapeau ${lang.name}`} 
                  className="w-16 h-auto mb-4 rounded shadow-sm"
                />
                <h3 className="text-xl font-semibold text-gray-900">{lang.name}</h3>
                <p className="text-gray-600 mt-2">{lang.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}