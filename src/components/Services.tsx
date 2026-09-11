import React, { useEffect, useRef, useState } from 'react';
import { ServiceOffer } from '../types';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Globe2,
  Layers3,
  LayoutTemplate,
  MonitorSmartphone,
  Rocket,
  ServerCog,
  ShieldCheck,
} from 'lucide-react';

interface ServicesProps {
  services: ServiceOffer[];
  onContact?: (subject?: string) => void;
  onOpenService?: (service: ServiceOffer) => void;
}

const serviceIcons = {
  Globe: Globe2,
  Layout: LayoutTemplate,
  Server: ServerCog,
  Database,
  Cloud,
  ShieldCheck,
} as const;

const serviceThemes = [
  {
    label: 'Build',
    accent: 'from-indigo-500 to-blue-400',
    soft: 'bg-indigo-100 text-indigo-700',
    image: 'from-slate-950 via-indigo-950 to-indigo-600',
  },
  {
    label: 'Design',
    accent: 'from-indigo-600 to-violet-400',
    soft: 'bg-indigo-100 text-indigo-700',
    image: 'from-slate-950 via-indigo-950 to-violet-600',
  },
  {
    label: 'Scale',
    accent: 'from-blue-500 to-indigo-400',
    soft: 'bg-indigo-100 text-indigo-700',
    image: 'from-slate-950 via-blue-950 to-indigo-600',
  },
  {
    label: 'Operate',
    accent: 'from-violet-500 to-indigo-400',
    soft: 'bg-indigo-100 text-indigo-700',
    image: 'from-slate-950 via-violet-950 to-indigo-600',
  },
  {
    label: 'Launch',
    accent: 'from-blue-500 to-indigo-400',
    soft: 'bg-blue-100 text-blue-700',
    image: 'from-slate-950 via-blue-950 to-indigo-600',
  },
  {
    label: 'Improve',
    accent: 'from-indigo-500 to-blue-400',
    soft: 'bg-indigo-100 text-indigo-700',
    image: 'from-slate-950 via-indigo-950 to-blue-600',
  },
];

const scrollToContact = (subject: string, onContact?: (subject?: string) => void) => {
  if (onContact) {
    onContact(subject);
    return;
  }

  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const Services: React.FC<ServicesProps> = ({ services, onContact, onOpenService }) => {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeServiceIndexRef = useRef<number>(0);

  const scrollToService = (index: number) => {
    if (!scrollRef.current) return;

    const boundedIndex = (index + services.length) % services.length;
    const card = scrollRef.current.children.item(boundedIndex) as HTMLElement | null;

    if (card) {
      scrollRef.current.scrollTo({
        left: card.offsetLeft - scrollRef.current.offsetLeft,
        behavior: 'smooth',
      });
    }

    setActiveServiceIndex(boundedIndex);
  };

  const handleServiceScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, clientWidth } = scrollRef.current;
    if (clientWidth <= 0) return;

    const newIndex = Math.round(scrollLeft / clientWidth);
    if (newIndex >= 0 && newIndex < services.length) {
      setActiveServiceIndex(newIndex);
    }
  };

  useEffect(() => {
    activeServiceIndexRef.current = activeServiceIndex;
  }, [activeServiceIndex]);

  useEffect(() => {
    if (services.length <= 1) return;

    const interval = window.setInterval(() => {
      scrollToService(activeServiceIndexRef.current + 1);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [services.length]);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-20 text-slate-950 dark:bg-slate-950 dark:text-white sm:py-28"
    >
      <div className="pointer-events-none absolute inset-x-10 top-2 h-48 rounded-[2rem] bg-white/35 blur-2xl dark:bg-indigo-500/10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent dark:via-indigo-500/50" />

      <div className="relative mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title text-2xl font-bold tracking-[-0.035em] text-slate-900 dark:text-white sm:text-3xl">Services</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
            Choose a focused offer, review the scope, and start with the right technical path.
          </p>
        </div>

        <div className="relative mt-9">
          <div
            ref={scrollRef}
            onScroll={handleServiceScroll}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ msOverflowStyle: 'none' }}
          >
          {services.map((service, index) => {
            const Icon = serviceIcons[service.iconName as keyof typeof serviceIcons] ?? Code2;
            const theme = serviceThemes[index % serviceThemes.length];
            const featuredTech = service.popularTech.slice(0, 3);

            return (
              <article
                key={service.id}
                className="group relative grid min-h-[330px] w-[86%] shrink-0 snap-center overflow-hidden rounded-[24px] bg-white shadow-[0_28px_80px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.03] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(15,23,42,0.13)] dark:bg-slate-900 dark:ring-white/10 sm:min-h-[380px] sm:w-full sm:rounded-[28px] lg:grid-cols-[0.92fr_1.08fr]"
              >
                <div className="flex min-h-[245px] flex-col px-5 py-6 sm:min-h-[360px] sm:px-10 lg:px-14 lg:py-14">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 ring-4 ring-indigo-50 transition duration-300 group-hover:scale-105 dark:bg-indigo-500/20 dark:text-indigo-300 dark:ring-indigo-500/10 sm:h-14 sm:w-14">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-4 max-w-sm text-xl font-bold tracking-[-0.03em] text-slate-950 dark:text-white sm:mt-5 sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-auto max-w-md pt-6 text-xs leading-5 text-slate-500 dark:text-slate-300 sm:pt-14 sm:text-sm sm:leading-6">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenService) {
                          onOpenService(service);
                          return;
                        }

                        scrollToContact(service.title, onContact);
                      }}
                      className="inline-flex h-10 items-center gap-3 rounded-full border border-slate-950 px-4 text-xs font-bold text-slate-950 transition hover:bg-slate-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-950 dark:focus:ring-white dark:focus:ring-offset-slate-900 sm:h-11 sm:gap-4 sm:px-5"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </button>
                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-500 dark:bg-white/10 dark:text-slate-300 sm:px-4 sm:py-2 sm:text-xs">
                      {service.turnaround}
                    </span>
                  </div>
                </div>

                <div className="relative min-h-[235px] overflow-hidden px-5 pb-6 sm:min-h-[340px] sm:px-10 lg:px-12 lg:py-12">
                  <div className="absolute inset-8 rounded-[2rem] bg-[radial-gradient(circle,#d6dae4_1px,transparent_1.6px)] [background-size:14px_14px] opacity-70 dark:bg-[radial-gradient(circle,rgba(148,163,184,.22)_1px,transparent_1.6px)]" />
                  <div className={`absolute right-6 top-10 h-14 w-14 rotate-12 rounded-[1rem] bg-gradient-to-br ${theme.accent} shadow-2xl shadow-slate-900/15 sm:right-8 sm:top-14 sm:h-20 sm:w-20 sm:rounded-[1.25rem]`} />
                  <div className={`absolute right-12 top-17 h-11 w-14 -rotate-12 rounded-[0.875rem] bg-gradient-to-br ${theme.accent} opacity-90 shadow-xl sm:right-16 sm:top-24 sm:h-16 sm:w-20 sm:rounded-[1rem]`} />
                  <div className="absolute right-9 top-8 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 shadow-lg sm:right-14 sm:top-12 sm:h-10 sm:w-10">
                    <Rocket className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                  </div>

                  <div className={`relative mx-auto mt-4 flex aspect-[0.95] w-full max-w-[165px] flex-col overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${theme.image} p-4 text-white shadow-[0_26px_70px_rgba(15,23,42,0.24)] transition duration-300 group-hover:rotate-0 group-hover:scale-[1.02] sm:mt-2 sm:aspect-[0.83] sm:max-w-[245px] sm:rounded-[2rem] sm:p-5 lg:rotate-1`}>
                    <div className="flex items-center justify-between">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/18 backdrop-blur sm:h-9 sm:w-9">
                        <MonitorSmartphone className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                      </div>
                      <span className="rounded-full bg-white/16 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white/85 backdrop-blur sm:px-3 sm:text-[10px]">
                        {theme.label}
                      </span>
                    </div>

                    <div className="mt-7 space-y-2 sm:mt-10 sm:space-y-3">
                      <div className="h-2 w-18 rounded-full bg-white/80 sm:h-3 sm:w-24" />
                      <div className="h-2 w-26 rounded-full bg-white/35 sm:h-3 sm:w-36" />
                      <div className="h-2 w-22 rounded-full bg-white/25 sm:h-3 sm:w-28" />
                    </div>

                    <div className="mt-auto grid grid-cols-2 gap-2 sm:gap-3">
                      {featuredTech.map((tech) => (
                        <span key={tech} className="rounded-lg bg-white/14 px-2 py-1.5 text-[9px] font-semibold text-white backdrop-blur sm:rounded-xl sm:px-3 sm:py-2 sm:text-[11px]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-5 flex max-w-[180px] items-center gap-1.5 rounded-md bg-indigo-100 px-2 py-1 text-[9px] font-extrabold text-indigo-800 shadow-lg dark:bg-indigo-500 dark:text-white sm:bottom-9 sm:left-12 sm:max-w-[230px] sm:gap-2 sm:px-2.5 sm:py-1.5 sm:text-[11px] lg:left-10">
                    <Layers3 className="h-3 w-3 text-indigo-600 dark:text-white sm:h-3.5 sm:w-3.5" />
                    {service.priceRange ?? 'Project-based'}
                  </div>

                  <div className={`absolute bottom-6 right-6 flex h-9 w-9 items-center justify-center rounded-full ${theme.soft} shadow-lg sm:bottom-10 sm:right-10 sm:h-11 sm:w-11`}>
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                </div>
              </article>
            );
          })}
          </div>

          {services.length > 1 && (
            <>
              <div className="pointer-events-none absolute inset-y-0 -left-3 -right-3 hidden items-center justify-between lg:flex">
                <button
                  type="button"
                  onClick={() => scrollToService(activeServiceIndex - 1)}
                  className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-xl transition hover:scale-105 hover:text-indigo-600 active:scale-95 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:text-indigo-300"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToService(activeServiceIndex + 1)}
                  className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-xl transition hover:scale-105 hover:text-indigo-600 active:scale-95 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:text-indigo-300"
                  aria-label="Next service"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2.5">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => scrollToService(index)}
                    className={`transition-all duration-300 ${
                      activeServiceIndex === index
                        ? 'h-3 w-8 rounded-full bg-slate-950 dark:bg-white'
                        : 'h-2.5 w-2.5 rounded-full bg-slate-300 hover:bg-slate-500 dark:bg-slate-700 dark:hover:bg-slate-500'
                    }`}
                    aria-label={`Scroll to ${service.title}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
};
