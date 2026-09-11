import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Certificate } from '../types';
import { Calendar, ChevronLeft, ChevronRight, ExternalLink, ShieldCheck } from 'lucide-react';
import certificateImage from '../assets/images/certificate.png';

interface CertificatesProps {
  certificates: Certificate[];
}

export const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
  const [desktopPage, setDesktopPage] = useState(0);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const perPage = 3;
  const totalPages = Math.ceil(certificates.length / perPage);
  const visibleCertificates = certificates.slice(desktopPage * perPage, desktopPage * perPage + perPage);

  const changePage = (direction: 'previous' | 'next') => {
    setDesktopPage((current) => direction === 'next'
      ? (current + 1) % totalPages
      : (current - 1 + totalPages) % totalPages);
  };

  const handleMobileScroll = () => {
    const container = mobileScrollRef.current;
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];
    const nearestIndex = cards.reduce((nearest, card, index) => {
      const currentDistance = Math.abs(card.offsetLeft - container.offsetLeft - container.scrollLeft);
      const nearestCard = cards[nearest];
      const nearestDistance = Math.abs(nearestCard.offsetLeft - container.offsetLeft - container.scrollLeft);
      return currentDistance < nearestDistance ? index : nearest;
    }, 0);

    setActiveMobileIndex(nearestIndex);
  };

  return (
    <section id="certificates" className="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-900 sm:py-16 md:min-h-screen lg:py-24">
      <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 max-w-2xl text-center sm:mb-10 lg:mb-14">
          <h2 className="section-title text-2xl font-bold tracking-[-0.035em] text-slate-900 dark:text-white sm:text-3xl">Certificates</h2>
          <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">Industry-recognized credentials validating technical proficiency across cloud hosting, web development, and database architecture.</p>
        </div>

        <div className="relative mx-auto hidden max-w-5xl md:block">
          <AnimatePresence mode="wait">
          <motion.div
            key={desktopPage}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="grid grid-cols-3 gap-4 lg:gap-5"
          >
            {visibleCertificates.map((certificate) => (
              <article key={certificate.id} className="flex h-[350px] flex-col overflow-hidden rounded-[20px] border border-slate-200 bg-slate-50/90 p-0 shadow-2xs transition-all duration-300 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700">
                  <div className="h-[55%] shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <img src={certificateImage} alt={`${certificate.title} preview`} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex min-h-0 flex-1 flex-col px-3.5 pb-3.5 pt-2.5">
                  <div className="space-y-2">
                  <h3 className="text-sm font-bold leading-snug text-slate-900 dark:text-white">{certificate.title}</h3>
                  <p className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400"><Calendar className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />{certificate.date}</p>
                  <p className="line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{certificate.description}</p>
                  </div>
                <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-2.5 dark:border-slate-800">
                  <span className="flex items-center gap-1.5 text-2xs font-semibold text-slate-500 dark:text-slate-400"><ShieldCheck className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />{certificate.credentialId ?? 'Verified'}</span>
                  {certificate.credentialUrl && <a href={certificate.credentialUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 transition hover:underline dark:text-blue-400">Verify<ExternalLink className="h-3.5 w-3.5" /></a>}
                </div>
                </div>
              </article>
            ))}
          </motion.div>
          </AnimatePresence>

          {totalPages > 1 && <div className="pointer-events-none absolute -left-5 -right-5 top-1/2 flex -translate-y-1/2 items-center justify-between">
            <button type="button" onClick={() => changePage('previous')} aria-label="Previous certificates" className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition hover:scale-110 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-indigo-400"><ChevronLeft className="h-5 w-5" /></button>
            <button type="button" onClick={() => changePage('next')} aria-label="Next certificates" className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition hover:scale-110 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-indigo-400"><ChevronRight className="h-5 w-5" /></button>
          </div>}

          {totalPages > 1 && <div className="mt-10 flex items-center justify-center gap-2.5">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setDesktopPage(index)}
                aria-label={`Go to certificate page ${index + 1}`}
                className={`transition-all duration-300 ${desktopPage === index ? 'h-3 w-3 scale-110 rounded-full bg-indigo-500 dark:bg-indigo-400' : 'h-2.5 w-2.5 rounded-full bg-slate-300 hover:bg-indigo-300 dark:bg-slate-700 dark:hover:bg-slate-600'}`}
              />
            ))}
          </div>}
        </div>

        <div className="md:hidden">
          <div ref={mobileScrollRef} onScroll={handleMobileScroll} className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {certificates.map((certificate) => (
              <article key={certificate.id} className="flex h-[315px] w-[88%] max-w-sm shrink-0 snap-center flex-col overflow-hidden rounded-[18px] border border-slate-200 bg-slate-50/90 p-0 shadow-2xs dark:border-slate-800 dark:bg-slate-950">
                  <div className="h-[55%] shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <img src={certificateImage} alt={`${certificate.title} preview`} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex min-h-0 flex-1 flex-col px-3.5 pb-3.5 pt-2.5">
                  <div className="space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{certificate.title}</h3>
                  <p className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400"><Calendar className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />{certificate.date}</p>
                  <p className="line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{certificate.description}</p>
                  </div>
                <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-2.5 dark:border-slate-800"><span className="flex items-center gap-1.5 text-2xs font-semibold text-slate-500 dark:text-slate-400"><ShieldCheck className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />{certificate.credentialId ?? 'Verified'}</span>{certificate.credentialUrl && <a href={certificate.credentialUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400">Verify<ExternalLink className="h-3.5 w-3.5" /></a>}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-3 flex justify-center gap-2">{certificates.map((certificate, index) => <span key={certificate.id} className={`rounded-full transition-all ${activeMobileIndex === index ? 'h-2.5 w-2.5 bg-indigo-500' : 'h-2 w-2 bg-slate-300 dark:bg-slate-700'}`} />)}</div>
        </div>
      </div>
    </section>
  );
};
