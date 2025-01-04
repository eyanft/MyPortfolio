import { useState } from 'react'; // Importez useState
import { useTranslation } from 'react-i18next';
import { ProjectModal } from './ProjectModal';
import { ExternalLink } from 'lucide-react';
import repares from '../assets/repares.jpg';
import autify from '../assets/autify.png';
import proconnect from '../assets/proconnect.png';
import magon from '../assets/magon.png';
import r0 from '../assets/r0.png';
import r1 from '../assets/r1.png';
import r2 from '../assets/r2.png';
import r3 from '../assets/r3.png';
import r4 from '../assets/r4.png';
import r5 from '../assets/r5.png';
import r6 from '../assets/r6.png';
import a0 from '../assets/a2.png';
import a1 from '../assets/a3.png';
import a2 from '../assets/assurance.png';
import a3 from '../assets/a4.png';
import a4 from '../assets/a5.png';
import p0 from '../assets/c0.png';
import p1 from '../assets/cc1.png';
import p2 from '../assets/cc2.png';
import p3 from '../assets/cc3.png';
import p4 from '../assets/cc4.png';
import p5 from '../assets/cc5.png';
import p6 from '../assets/cc6.png';
import p7 from '../assets/cc7.png';
import m1 from '../assets/1.png';
import m2 from '../assets/2.png';
import m3 from '../assets/3.png';
import m4 from '../assets/4.png';
import m5 from '../assets/5.png';
import m6 from '../assets/6.png';
import m8 from '../assets/8.png';
import m9 from '../assets/9.png';













// Définir un type pour les projets
interface Project {
  key: string;
  title: string;
  description: string;
  technologies: string;
  image: string;
  details: {
    challenge: string;
    solution: string;
    features: string[]; // Assurez-vous que features est un tableau de chaînes
    images: string[];
    demoUrl?: string; // Optionnel
  };
}

export function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); // Utilisez le type Project

  const projects: Project[] = [
    {
      key: 'proConnect',
      title: t('projects.items.proConnect.title'),
      description: t('projects.items.proConnect.description'),
      technologies: "React, Node.js, Express, MongoDB",
      image: proconnect,
      details: {
        challenge: t('projects.items.proConnect.challenge'),
        solution: t('projects.items.proConnect.solution'),
        features: t('projects.items.proConnect.features', { returnObjects: true }) as string[], // Forcer le type
        images: [
         p0,p1,p2,p3,p4,p5,p6,p7
        ],
        demoUrl: "https://proconnect-demo.example.com"
      }
    },
    {
      key: 'autify',
      title: t('projects.items.autify.title'),
      description: t('projects.items.autify.description'),
      technologies: "Dart, Flutter, Java, Spring Boot, MySQL",
      image: autify,
      details: {
        challenge: t('projects.items.autify.challenge'),
        solution: t('projects.items.autify.solution'),
        features: t('projects.items.autify.features', { returnObjects: true }) as string[], // Forcer le type
        images: [
          a0,a1,a2,a3,a4
        ]
      }
    },
    {
      key: 'novaTech',
      title: t('projects.items.novaTech.title'),
      description: t('projects.items.novaTech.description'),
      technologies: "Angular, SpringBoot, MySQL",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400",
      details: {
        challenge: t('projects.items.novaTech.challenge'),
        solution: t('projects.items.novaTech.solution'),
        features: t('projects.items.novaTech.features', { returnObjects: true }) as string[], // Forcer le type
        images: [
      
        ]
      }
    },
    {
      key: 'repasRes',
      title: t('projects.items.repasRes.title'),
      description: t('projects.items.repasRes.description'),
      technologies: "Dart, Flutter",
      image: repares,
      details: {
        challenge: t('projects.items.repasRes.challenge'),
        solution: t('projects.items.repasRes.solution'),
        features: t('projects.items.repasRes.features', { returnObjects: true }) as string[], // Forcer le type
        images: [
          r0,r1,r2,r3,r4,r5,r6
        ]
      }
    },
    {
      key: 'magon',
      title: t('projects.items.magon.title'),
      description: t('projects.items.magon.description'),
      technologies: "Dart, Flutter",
      image: magon,
      details: {
        challenge: t('projects.items.magon.challenge'),
        solution: t('projects.items.magon.solution'),
        features: t('projects.items.magon.features', { returnObjects: true }) as string[], // Forcer le type
        images: [
       m1,m2,m3,m4,m5,m6,m8,m9
        ]
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.key} 
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <p className="text-sm mb-2">
                    <span className="font-medium">{t('projects.description')}: </span>
                    {project.description}
                  </p>
                  <p className="text-xs text-rose-200">
                    <span className="font-medium">{t('projects.technologies')}: </span>
                    {project.technologies}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}