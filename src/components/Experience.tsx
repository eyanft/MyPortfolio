import { Calendar, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PolyOil from '../assets/polyoil.png';
import Medianet from '../assets/medianet.png';
import TsunamiIT from '../assets/tsunami.png';


export function Experience() {
  const { t } = useTranslation();
  
  const experiences = [
    {
      key: 'polyOil',
      period: t('experience.items.polyOil.period'),
      title: t('experience.items.polyOil.title'),
      description: t('experience.items.polyOil.description'),
      technologies: "HTML, CSS, JavaScript, Java, Spring Boot",
      image: PolyOil,
      location: t('experience.items.polyOil.location')
    },
    {
      key: 'medianet',
      period: t('experience.items.medianet.period'),
      title: t('experience.items.medianet.title'),
      description: t('experience.items.medianet.description'),
      technologies: "Figma, CMS",
      image: Medianet,
      location: t('experience.items.medianet.location')
    },
    {
      key: 'tsunami',
      period: t('experience.items.tsunami.period'),
      title: t('experience.items.tsunami.title'),
      description: t('experience.items.tsunami.description'),
      technologies: "Dart, Flutter, JIRA, Github, Figma, Android Studio",
      image: TsunamiIT,
      location: t('experience.items.tsunami.location')
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{t('experience.title')}</h2>
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.key} className="flex flex-col md:flex-row gap-8 items-center card hover:shadow-xl transition-all duration-300">
              <div className="md:w-1/3">
                <img 
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <div className="flex items-center text-rose-600 space-x-2">
                    <Calendar size={18} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 space-x-2">
                  <MapPin size={18} />
                  <span className="text-sm">
                    {t('experience.location')}: {exp.location}
                  </span>
                </div>
                <p className="text-gray-600">{exp.description}</p>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    {t('experience.technologies')}:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.split(', ').map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}