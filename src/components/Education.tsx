import React from 'react';
import { useTranslation } from 'react-i18next';

export function Education() {
  const { t } = useTranslation();
  
  const education = [
    {
      key: 'master',
      period: t('education.items.master.period'),
      title: t('education.items.master.title'),
      school: t('education.items.master.school')
    },
    {
      key: 'license',
      period: t('education.items.license.period'),
      title: t('education.items.license.title'),
      school: t('education.items.license.school')
    },
    {
      key: 'bac',
      period: t('education.items.bac.period'),
      title: t('education.items.bac.title'),
      school: t('education.items.bac.school')
    }
  ];

  return (
    <section id="education" className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{t('education.title')}</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-rose-200" />
          
          <div className="space-y-16">
            {education.map((item, index) => (
              <div key={item.key} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rose-500 rounded-full border-4 border-white" />
                
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <span className="text-rose-600 font-medium block mb-2">
                      {t('education.period')}: {item.period}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mt-2">
                      {t('education.school')}: {item.school}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}