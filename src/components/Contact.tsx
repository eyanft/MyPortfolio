import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{t('contact.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">{t('contact.subtitle')}</h3>
            <p className="text-gray-600">
              {t('contact.description')}
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-rose-600" />
                <span>eya.naffeti01@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-rose-600" />
                <span>+216 29 160 766</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-rose-600" />
                <span>Manouba, Tunisie</span>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
            >
              <Send className="w-5 h-5 mr-2" />
              {t('contact.form.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}