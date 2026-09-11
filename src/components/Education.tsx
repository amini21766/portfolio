import React from 'react';
import { Check, GraduationCap, School } from 'lucide-react';

type EducationCardProps = {
  index: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
  icon: typeof GraduationCap;
  featured?: boolean;
  gridClassName: string;
};

const EducationCard: React.FC<EducationCardProps> = ({
  index,
  label,
  title,
  description,
  tags,
  icon: Icon,
  featured = false,
  gridClassName,
}) => (
  <article
    className={`group relative flex min-h-[290px] flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${gridClassName} ${
      featured
        ? 'border-indigo-200 bg-indigo-50/70 shadow-lg shadow-slate-900/5 hover:border-indigo-300 dark:border-indigo-900/70 dark:bg-indigo-950/30 dark:hover:border-indigo-700'
        : 'border-slate-200 bg-white shadow-lg shadow-slate-900/[0.03] hover:border-indigo-200 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-800'
    }`}
  >
    <span className="pointer-events-none absolute -right-1 -top-5 select-none text-8xl font-black tracking-tighter text-indigo-900/[0.055] transition-transform duration-500 group-hover:scale-110 dark:text-indigo-300/[0.06]">
      {index}
    </span>

    <div className="relative flex items-start justify-between gap-4">
      <span className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${featured ? 'border-indigo-200 bg-white text-indigo-600 dark:border-indigo-800 dark:bg-slate-900 dark:text-indigo-400' : 'border-slate-200 bg-slate-50 text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-indigo-400'}`}>
        <Icon className="h-6 w-6" strokeWidth={1.8} />
      </span>
      <span className="font-mono text-xs font-bold tracking-wider text-indigo-600/60 dark:text-indigo-400/70">{index}</span>
    </div>

    <div className="relative mt-7">
      <p className="text-xs font-bold tracking-[0.14em] text-indigo-600 dark:text-indigo-400">{label}</p>
      <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
    </div>

    <div className="relative mt-auto flex items-center gap-2 pt-7">
      {tags.map((tag) => (
        <span key={tag} className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white/80 px-2.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
          <Check className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" strokeWidth={2.5} />
          {tag}
        </span>
      ))}
    </div>
  </article>
);

export const Education: React.FC = () => (
  <section id="education" className="border-t border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-950 sm:py-20">
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
        <div>
          <h2 className="section-title text-2xl font-bold tracking-[-0.035em] text-slate-900 dark:text-white sm:text-3xl">Education</h2>
        </div>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400">A solid academic base that supports thoughtful technical work and continuous growth.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-12">
        <EducationCard
          featured
          gridClassName="lg:col-span-7"
          index="01"
          icon={GraduationCap}
          label="HIGHER EDUCATION"
          title="University Diploma"
          description="University-level study focused on building a strong foundation in technology, problem-solving, and professional practice."
          tags={['Academic credential', 'Technology foundation']}
        />
        <EducationCard
          index="02"
          gridClassName="lg:col-span-5"
          icon={School}
          label="SECONDARY EDUCATION"
          title="High School Diploma"
          description="Completed secondary education with the core academic foundation for continued study and lifelong learning."
          tags={['Secondary credential', 'Academic foundation']}
        />
      </div>
    </div>
  </section>
);
