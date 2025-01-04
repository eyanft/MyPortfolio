import { useTranslation } from 'react-i18next';
import git from '../assets/GIT, GitLab, GitHub Fundamentals for Software Developers.jpg';
import mongodb from '../assets/mongodb.png';
import nvidia from '../assets/nvidia.png';
import hubspot from '../assets/hubspot.jpg';
import uxui from '../assets/uxuiformation.png';



export function Certifications() {
  const { t } = useTranslation();
  
  const certifications = [
    {
      name: "Git, Github, Gitlab",
      provider: "Udemy",
      date: "2023",
      image: git
    },
    {
      name: "Introduction à MongoDB",
      provider: "MongoDB",
      date: "2023",
      image: mongodb
    },
    {
      name: "Science des données",
      provider: "Nvidia",
      date: "2023",
      image: nvidia
    },
    {
      name: "SEO",
      provider: "Hubspot",
      date: "2024",
      image: hubspot
    },
    {
      name: "Flutter",
      provider: "Udemy",
      date: "2023",
      image: "https://img-c.udemycdn.com/course/480x270/2259120_305f_6.jpg"
    },
    {
      name: "UX/UI Design",
      provider: "Formalab",
      date: "2022",
      image:uxui
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-rose-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{t('certifications.title')}</h2>
        <div className="relative">
          <div className="flex space-x-6 animate-scroll">
            {[...certifications, ...certifications].map((cert, index) => (
              <div 
                key={index} 
                className="flex-none w-72 card p-4"
              >
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>
                <p className="text-gray-600">
                  {t('certifications.provider')}: {cert.provider}
                </p>
                <p className="text-gray-500 text-sm">
                  {t('certifications.date')}: {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}