import React from 'react';
import { ServiceOffer } from '../types';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Code2,
  Layers3,
  Sparkles,
} from 'lucide-react';

interface ServicePageProps {
  service: ServiceOffer;
  relatedServices: ServiceOffer[];
  onBack: () => void;
  onContact: (subject?: string) => void;
  onOpenService: (service: ServiceOffer) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  service,
  relatedServices,
  onBack,
  onContact,
  onOpenService,
}) => {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-56 rounded-[2rem] bg-white/35 blur-2xl dark:bg-indigo-500/10" />

        <div className="relative mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBack}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/75 px-4 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:border-slate-950 hover:text-slate-950 dark:border-white/10 dark:bg-white/10 dark:text-slate-200 dark:hover:border-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </button>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-stretch">
            <div className="rounded-[28px] bg-white p-7 shadow-[0_28px_80px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.03] dark:bg-slate-900 dark:ring-white/10 sm:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-extrabold text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/60 dark:text-indigo-300">
                <Sparkles className="h-3.5 w-3.5" />
                Service Detail
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-[-0.045em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                {service.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300">
                  <Clock3 className="h-4 w-4" />
                  {service.turnaround}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300">
                  <Layers3 className="h-4 w-4" />
                  {service.priceRange ?? 'Project-based'}
                </span>
              </div>

              <button
                type="button"
                onClick={() => onContact(service.title)}
                className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus:ring-offset-slate-900"
              >
                Start this project <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <aside className="rounded-[28px] bg-white/80 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.07)] ring-1 ring-black/[0.03] dark:bg-white/10 dark:ring-white/10 sm:p-8">
              <p className="text-sm font-extrabold text-slate-950 dark:text-white">Popular stack</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.popularTech.map((tech) => (
                  <span key={tech} className="rounded-full bg-slate-950 px-3 py-2 text-xs font-bold text-white dark:bg-white dark:text-slate-950">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-3xl bg-slate-950 p-5 text-white dark:bg-slate-950/70">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Code2 className="h-6 w-6 text-indigo-300" />
                </div>
                <p className="mt-5 text-sm font-bold">Built for real business use</p>
                <p className="mt-2 text-xs leading-6 text-slate-300">
                  Clear requirements, responsive delivery, clean code, and a launch-ready result
                  your users can rely on.
                </p>
              </div>
            </aside>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <section className="rounded-[28px] bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.07)] ring-1 ring-black/[0.03] dark:bg-slate-900 dark:ring-white/10 sm:p-8">
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-slate-950 dark:text-white">
                What you get
              </h2>
              <ul className="mt-6 space-y-4">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[28px] bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.07)] ring-1 ring-black/[0.03] dark:bg-slate-900 dark:ring-white/10 sm:p-8">
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-slate-950 dark:text-white">
                Explore more services
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {relatedServices.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onOpenService(item)}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-slate-950 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:border-white dark:hover:bg-white/10"
                  >
                    <p className="text-sm font-bold text-slate-950 dark:text-white">{item.title}</p>
                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      {item.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-300">
                      View service <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                    </span>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};
