import React from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProjectModalProps {
  project: {
    key: string;
    title: string;
    description: string;
    technologies: string;
    image: string;
    details?: {
      challenge: string;
      solution: string;
      features: string[];
      images: string[];
      demoUrl?: string;
    };
  };
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-2xl leading-6 font-semibold text-gray-900 mb-4" id="modal-title">
                  {project.title}
                </h3>
                
                {/* Main Image */}
                <div className="mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    {t('projects.technologies')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.split(', ').map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.details && (
                  <>
                    {/* Challenge */}
                    <div className="mb-6">
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        {t('projects.modal.challenge')}
                      </h4>
                      <p className="text-gray-600">{project.details.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        {t('projects.modal.solution')}
                      </h4>
                      <p className="text-gray-600">{project.details.solution}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        {t('projects.modal.features')}
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {project.details.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Additional Images */}
                    {project.details.images.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">
                          {t('projects.modal.gallery')}
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {project.details.images.map((img, index) => (
                            <img
                              key={index}
                              src={img}
                              alt={`${project.title} screenshot ${index + 1}`}
                              className="rounded-lg"
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Demo Link */}
                    {project.details.demoUrl && (
                      <div className="mt-6">
                        <a
                          href={project.details.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                        >
                          {t('projects.modal.viewDemo')}
                        </a>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}