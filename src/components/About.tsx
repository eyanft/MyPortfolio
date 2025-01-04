import { useTranslation } from 'react-i18next';
import MyImage from '../assets/mygraduation.jpg';


export function About() {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{t('about.title')}</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="image-container">
              <img 
                src={MyImage} 
                alt="Professional"
                className="optimized-image"
              />
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <p className="text-gray-600 leading-relaxed text-lg">
              {t('about.description1')}
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              {t('about.description2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}