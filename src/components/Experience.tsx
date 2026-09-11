import React from 'react';
import { Calendar, CheckCircle2, MapPin } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => (
  <section id="experience" className="relative flex min-h-screen flex-col justify-center border-t border-slate-200 bg-slate-50/70 py-16 transition-colors dark:border-slate-800/80 dark:bg-slate-950 sm:py-20">
    <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center">
        <h2 className="section-title text-2xl font-bold tracking-[-0.035em] text-slate-900 dark:text-white sm:text-3xl">Work experience</h2>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">5+ years building and scaling enterprise MERN stack web applications, leading engineering initiatives, and optimizing cloud database performance.</p>
      </div>

      <div className="relative ml-4 space-y-12 border-l-2 border-slate-200 dark:border-slate-800 lg:ml-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="group relative pl-8">
            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-slate-900 bg-white shadow-2xs transition-transform group-hover:scale-125 dark:border-blue-400 dark:bg-slate-900" />
            <article className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <div className="flex flex-col justify-between gap-2 border-b border-slate-100 pb-3 dark:border-slate-800 sm:flex-row sm:items-center">
                <div>
                  <h3 className="flex flex-col items-start gap-1 text-slate-900 dark:text-white sm:flex-row sm:items-center sm:gap-2">
                    <span className="text-lg font-bold leading-snug sm:text-xl">{exp.role}</span>
                    <span className="block font-mono text-xs font-semibold leading-relaxed text-blue-700 dark:text-blue-400 sm:inline sm:text-sm">@ {exp.company}</span>
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />{exp.location}</span>
                    <span aria-hidden="true">•</span>
                    <span className="rounded bg-slate-100 px-2 py-0.5 font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">{exp.type}</span>
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 font-mono text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  <Calendar className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />{exp.period}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{exp.summary}</p>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Key Architectural &amp; Engineering Contributions:</p>
                <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
                  {exp.achievements.map((achievement) => (
                    <div key={achievement} className="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50 p-3 dark:border-slate-700/60 dark:bg-slate-800/60">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                      <span className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.techStack.map((tech) => (
                  <span key={tech} className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">{tech}</span>
                ))}
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  </section>
);
