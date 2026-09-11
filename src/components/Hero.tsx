import React from 'react';
import { DeveloperProfile } from '../types';
import { motion } from 'motion/react';
import {
  Github,
  Linkedin,
  Globe,
} from 'lucide-react';

interface HeroProps {
  profile: DeveloperProfile;
  onExploreProjects?: () => void;
  onContact?: () => void;
  onAbout?: () => void;
  onDownloadCv?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onAbout,
  onDownloadCv,
}) => {
  return (
    <section id="overview" className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/80 transition-colors">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex items-center justify-between gap-6">
        
        {/* Left Side: Social Icons Stack */}
        <div className="hidden lg:flex flex-col items-center gap-3 shrink-0">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors shadow-2xs"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors shadow-2xs"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          {profile.whatsapp && (
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors shadow-2xs group"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          )}
          {profile.website && (
            <a
              href={profile.website}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors shadow-2xs"
              aria-label="Website"
            >
              <Globe className="w-4 h-4" />
            </a>
          )}
          <div className="w-[1.5px] h-14 bg-indigo-300 dark:bg-indigo-700/60 mt-1 rounded-full" />
        </div>

        {/* Center Grid: Text Left, Animated Photo Right */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-6">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400">
              Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tight leading-[1.1]">
              {profile.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium max-w-lg mx-auto lg:mx-0">
              Full-stack Web Developer | Freelancer
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onDownloadCv}
                className="px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-indigo-300 dark:border-indigo-500/80 text-slate-800 dark:text-slate-200 hover:bg-indigo-50/50 dark:hover:bg-slate-800/80 font-medium text-sm transition-all shadow-2xs cursor-pointer"
              >
                Download CV
              </button>

              <button
                onClick={onAbout}
                className="px-7 py-3.5 rounded-2xl bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-medium text-sm transition-all shadow-md active:scale-95 cursor-pointer"
              >
                About
              </button>
            </div>
          </div>

          {/* Right Animated Organic Blob Photo Container */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <div className="relative w-60 h-60 sm:w-68 sm:h-68 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              
              {/* Outer Glow behind the Blob */}
              <motion.div
                animate={{
                  borderRadius: [
                    '60% 40% 30% 70% / 60% 30% 70% 40%',
                    '40% 60% 70% 30% / 50% 60% 30% 60%',
                    '60% 40% 30% 70% / 60% 30% 70% 40%',
                  ],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-indigo-400/20 dark:bg-indigo-600/30 blur-xl rounded-full pointer-events-none"
              />

              {/* Animated Morphing Organic Blob Container */}
              <motion.div
                animate={{
                  borderRadius: [
                    '60% 40% 30% 70% / 60% 30% 70% 40%',
                    '40% 60% 70% 30% / 50% 60% 30% 60%',
                    '60% 40% 30% 70% / 60% 30% 70% 40%',
                  ],
                  y: [-6, 6, -6],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-full h-full overflow-hidden bg-gradient-to-tr from-indigo-500/20 via-blue-500/20 to-purple-500/20 dark:from-indigo-900/60 dark:via-blue-900/50 dark:to-purple-900/60 border-4 border-indigo-200/60 dark:border-indigo-500/30 shadow-2xl backdrop-blur-md flex items-center justify-center"
              >
                {/* Developer Avatar Photo */}
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />

                {/* Subtle Gradient Overlay inside photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Floating Experience Badge (bottom-right of blob photo) */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-1 right-1 sm:right-3 bg-slate-900/90 dark:bg-slate-800/95 text-white border border-slate-700/60 shadow-xl px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2.5 backdrop-blur-md z-20"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{profile.yearsOfExperience}+ Years Experience</span>
              </motion.div>

            </div>
          </div>

        </div>

        {/* Right Side: Scroll Down Indicator */}
        <div className="hidden xl:flex flex-col items-center gap-3 text-slate-400 dark:text-slate-500 shrink-0">
          <div className="w-5 h-8 rounded-full border-2 border-slate-700 dark:border-slate-400 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-slate-700 dark:bg-slate-400 rounded-full animate-bounce" />
          </div>
          <span className="text-[11px] font-medium tracking-wider [writing-mode:vertical-lr] text-slate-500 dark:text-slate-400">
            Scroll Down
          </span>
        </div>

      </div>
    </section>
  );
};
