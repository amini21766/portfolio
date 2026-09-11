import React from 'react';
import { Project } from '../types';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
  Server,
  Database,
  Shield,
  Cpu,
  Sparkles
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col text-slate-900 dark:text-white">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
              {project.category}
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar">
          
          {/* Hero Image & Quick Links */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 group">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-6">
              <div className="space-y-3">
                <div className="text-xs font-bold text-blue-900 dark:text-blue-300 bg-white/95 dark:bg-slate-900/90 px-3 py-1.5 rounded-full border border-blue-100 dark:border-blue-800 inline-block shadow-2xs">
                  {project.metrics}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-md"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs border border-slate-200 dark:border-slate-700 transition-all shadow-2xs"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Tech Stack */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Project Overview
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Achievements & Features */}
          <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Key Features & Benefits
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* System Breakdown */}
          <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Layers className="w-4 h-4 text-slate-900 dark:text-white" />
              Technology Breakdown
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> User Interface:
                </div>
                <div className="text-slate-800 dark:text-slate-200 font-medium">{project.architecture.client}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Backend Server:
                </div>
                <div className="text-slate-800 dark:text-slate-200 font-medium">{project.architecture.server}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Database & Storage:
                </div>
                <div className="text-slate-800 dark:text-slate-200 font-medium">{project.architecture.database}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> Security & Login:
                </div>
                <div className="text-slate-800 dark:text-slate-200 font-medium">{project.architecture.auth}</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
