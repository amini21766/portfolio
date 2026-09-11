import React, { useState, useRef } from 'react';
import { Testimonial } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  // Desktop pagination state (3 items per page)
  const [desktopPage, setDesktopPage] = useState<number>(0);
  const itemsPerPageDesktop = 3;
  const totalDesktopPages = Math.ceil(testimonials.length / itemsPerPageDesktop);

  // Mobile scroll tracking
  const [activeMobileIndex, setActiveMobileIndex] = useState<number>(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const nextDesktopPage = () => {
    setDesktopPage((prev) => (prev + 1) % totalDesktopPages);
  };

  const prevDesktopPage = () => {
    setDesktopPage((prev) => (prev - 1 + totalDesktopPages) % totalDesktopPages);
  };

  const visibleDesktopTestimonials = testimonials.slice(
    desktopPage * itemsPerPageDesktop,
    (desktopPage + 1) * itemsPerPageDesktop
  );

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const { scrollLeft, clientWidth } = mobileScrollRef.current;
    if (clientWidth > 0) {
      const newIndex = Math.round(scrollLeft / clientWidth);
      if (newIndex >= 0 && newIndex < testimonials.length) {
        setActiveMobileIndex(newIndex);
      }
    }
  };

  const scrollToMobileCard = (index: number) => {
    if (!mobileScrollRef.current) return;
    const clientWidth = mobileScrollRef.current.clientWidth;
    mobileScrollRef.current.scrollTo({
      left: index * clientWidth,
      behavior: 'smooth',
    });
    setActiveMobileIndex(index);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* ---------------------------------------------------- */}
        {/* DESKTOP VIEW (MD & LG): 3 Cards per row with Slider */}
        {/* ---------------------------------------------------- */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={desktopPage}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="grid grid-cols-3 gap-5 lg:gap-6"
            >
              {visibleDesktopTestimonials.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-100/80 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-800 p-5 lg:p-6 rounded-2xl shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div className="space-y-3.5">
                    {/* Avatar Header */}
                    <div className="flex items-center justify-between">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-11 h-11 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-2xs group-hover:scale-105 transition-transform"
                      />
                      <Quote className="w-6 h-6 text-indigo-300/40 dark:text-indigo-500/20 shrink-0" />
                    </div>

                    {/* Client Name & Role */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {item.name}
                      </h3>
                      {item.role && (
                        <p className="text-2xs font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
                          {item.role}
                        </p>
                      )}
                    </div>

                    {/* Testimonial Content */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows for Desktop */}
          {totalDesktopPages > 1 && (
            <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 -left-5 -right-5 pointer-events-none">
              <button
                onClick={prevDesktopPage}
                className="w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 pointer-events-auto transition-all hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextDesktopPage}
                className="w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 pointer-events-auto transition-all hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Desktop Pagination Dots */}
          {totalDesktopPages > 1 && (
            <div className="flex items-center justify-center gap-2.5 mt-10">
              {Array.from({ length: totalDesktopPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setDesktopPage(idx)}
                  className={`transition-all duration-300 cursor-pointer ${
                    desktopPage === idx
                      ? 'w-3 h-3 rounded-full bg-indigo-500 dark:bg-indigo-400 scale-110'
                      : 'w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 hover:bg-indigo-300 dark:hover:bg-slate-600'
                  }`}
                  aria-label={`Go to testimonial page ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>


        {/* ---------------------------------------------------- */}
        {/* MOBILE VIEW (< MD): 1 Card visible + Horizontal Swipe */}
        {/* ---------------------------------------------------- */}
        <div className="block md:hidden">
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 py-3 px-1 scrollbar-none scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="w-full shrink-0 snap-center bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/70 dark:border-slate-800 p-6 rounded-[24px] shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Avatar Header */}
                  <div className="flex items-center justify-between">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-13 h-13 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-2xs"
                    />
                    <Quote className="w-7 h-7 text-indigo-300/40 dark:text-indigo-500/20 shrink-0" />
                  </div>

                  {/* Client Name & Role */}
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </h3>
                    {item.role && (
                      <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
                        {item.role}
                      </p>
                    )}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToMobileCard(idx)}
                className={`transition-all duration-300 cursor-pointer ${
                  activeMobileIndex === idx
                    ? 'w-3 h-3 rounded-full bg-indigo-500 dark:bg-indigo-400 scale-110'
                    : 'w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700'
                }`}
                aria-label={`Scroll to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
