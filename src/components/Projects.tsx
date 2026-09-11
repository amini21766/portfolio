import React, { useState } from 'react';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'ecommerce', label: 'Ecommerce' },
    { id: 'webdesign', label: 'Web Design' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => {
        if (selectedCategory === 'web') return p.category === 'mern' || p.category === 'frontend' || p.category === 'web';
        if (selectedCategory === 'ecommerce') return p.category === 'backend' || p.category === 'ecommerce';
        if (selectedCategory === 'webdesign') return p.category === 'realtime' || p.category === 'webdesign' || p.category === 'frontend';
        return p.category === selectedCategory;
      });

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="section-title text-2xl font-bold tracking-[-0.035em] text-slate-900 dark:text-white sm:text-3xl">Selected projects</h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
            Case studies of scalable full-stack applications, enterprise solutions, and high-performance frontends.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200/80 dark:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <button type="button" onClick={() => setActiveProjectModal(project)} className="group block w-full cursor-pointer overflow-hidden rounded-t-xl bg-slate-100 text-left dark:bg-slate-800" aria-label={`View details for ${project.title}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} web application preview`}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </button>

              <div className="flex flex-1 flex-col p-3.5">
                <h3 className="line-clamp-1 text-sm font-bold leading-snug text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.shortDescription}
                </p>

                <div className="mt-2.5 flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-3">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-md bg-indigo-600 px-2.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400">
                    Visit site <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">
                    <Github className="h-3.5 w-3.5" aria-hidden="true" /> Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
};
