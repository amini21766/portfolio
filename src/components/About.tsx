import React from 'react';
import { Award, Briefcase, Headphones } from 'lucide-react';
import { DeveloperProfile } from '../types';

interface AboutProps {
  profile: DeveloperProfile;
  onContact: () => void;
}

export const About: React.FC<AboutProps> = ({ profile, onContact }) => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-16 sm:py-20 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="section-title text-2xl font-bold tracking-[-0.035em] text-slate-900 dark:text-white sm:text-3xl">About me</h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Portrait Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[320px] sm:max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden shadow-md border border-slate-200/60 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shrink-0">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Cards, Text, CTA */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* 3 Metric Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              
              {/* Card 1: Experience */}
              <div className="bg-slate-100/80 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-800 p-4 sm:p-5 rounded-2xl text-center shadow-2xs hover:shadow-xs transition-all">
                <Award className="w-6 h-6 text-indigo-500 dark:text-indigo-400 mx-auto mb-2 stroke-[1.75]" />
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  Experience
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">
                  4+ <span className="font-normal">Years Working</span>
                </p>
              </div>

              {/* Card 2: Completed */}
              <div className="bg-slate-100/80 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-800 p-4 sm:p-5 rounded-2xl text-center shadow-2xs hover:shadow-xs transition-all">
                <Briefcase className="w-6 h-6 text-indigo-500 dark:text-indigo-400 mx-auto mb-2 stroke-[1.75]" />
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  Completed
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">
                  12+ <span className="font-normal">Projects</span>
                </p>
              </div>

              {/* Card 3: Support */}
              <div className="bg-slate-100/80 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-800 p-4 sm:p-5 rounded-2xl text-center shadow-2xs hover:shadow-xs transition-all">
                <Headphones className="w-6 h-6 text-indigo-500 dark:text-indigo-400 mx-auto mb-2 stroke-[1.75]" />
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  Support
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Full Time
                </p>
              </div>

            </div>

            {/* Bio Paragraph */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              I'm <strong className="font-bold text-slate-900 dark:text-white">{profile.name}</strong>, a Full Stack Web Developer with <strong className="font-bold text-slate-900 dark:text-white">4+</strong> years of experience specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). I build responsive, scalable, and user-friendly web applications, focusing on clean UI design, seamless API integration, and performance optimization. With a strong commitment to quality and continuous learning, I deliver efficient, maintainable solutions that bring real-world ideas to life.
            </p>

            {/* CTA Button */}
            <div className="pt-1">
              <button
                onClick={onContact}
                className="px-6 py-3.5 rounded-2xl bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Contact Me
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
