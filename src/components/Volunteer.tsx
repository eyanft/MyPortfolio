import { useTranslation } from 'react-i18next';
import { Users, Award } from 'lucide-react';
import J2I from '../assets/j2i.jpg';
import JCI from '../assets/jcim.png';


export function Volunteer() {
  const { t } = useTranslation();
  
  const volunteerWork = [
    {
      organization: "Club Jeunes Ingénieures ISAMM",
      period: "2020-2024",
      role: "Cheffe du département développement commercial",
      description: "Responsable de la promotion des activités du club, de la négociation de partenariats, et de l'organisation d'événements.",
      image: J2I,
      achievements: [
        "Organisation de 5 événements majeurs",
        "Développement de 3 partenariats stratégiques"
      ]
    },
    {
      organization: "JCI Mornaguia",
      period: "2020-2021",
      role: "Membre actif",
      description: "Contribuant aux projets et initiatives communautaires, et participant à l'organisation d'événements.",
      image: JCI,
      achievements: [
        "Participation à 3 projets communautaires",
        "Support à l'organisation d'événements caritatifs"
      ]
    }
  ];

  return (
    <section id="volunteer" className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{t('volunteer.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteerWork.map((work, index) => (
            <div key={index} className="group">
              <div className="card overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 mb-6">
                  <img 
                    src={work.image}
                    alt={work.organization}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{work.organization}</h3>
                    <p className="text-sm opacity-90">
                      {t('volunteer.period')}: {work.period}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 space-y-4">
                  <div className="flex items-center space-x-2 text-rose-600">
                    <Users size={20} />
                    <span className="font-medium">
                      {t('volunteer.role')}: {work.role}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {t('volunteer.description')}: {work.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-700">
                      <Award size={20} className="text-rose-600" />
                      <span className="font-medium">{t('volunteer.achievements')}:</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                      {work.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
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