import React from 'react';
import { DeveloperProfile } from '../types';

interface FooterProps {
  profile: DeveloperProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B1320] text-slate-300 font-sans pt-16 pb-8 transition-colors border-t border-slate-800/60">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          
          {/* Column 1: Brand / Badge / Tagline */}
          <div className="lg:col-span-5 space-y-4 pr-0 lg:pr-6">
            {/* Brand Logo Header */}
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 bg-white rounded-md shrink-0 shadow-xs" />
              <span className="font-extrabold text-white text-xl sm:text-2xl tracking-tight">
                Hamid A.
              </span>
            </div>

            {/* Tagline */}
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Advanced, reliable, and futuristic software solutions — building high-performance digital tools, MIS portals, and modern web applications in Afghanistan and beyond.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wide">
              Services
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              <li>
                <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Web Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('skills')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Mobile Apps
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('skills')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Cloud Solutions
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('skills')} className="hover:text-white transition-colors cursor-pointer text-left">
                  AI & ML
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('skills')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Cybersecurity
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wide">
              Company
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('experience')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Team
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('experience')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('testimonials')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors block break-all">
                  {profile.email || 'Info@dara.af'}
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phone?.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors block">
                  +93 730 600 914
                </a>
              </li>
              <li className="text-slate-400">
                Kabul, Afghanistan
              </li>
              {profile.whatsapp && (
                <li>
                  <a
                    href={profile.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Bottom Divider & Rights Row */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Dara Softwarehouse. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Made by</span>
            <span className="text-rose-500 mx-0.5">❤️</span>
            <span className="text-slate-300 font-medium">Dara Softwarehouse</span>
            <span className="text-2xs px-1 rounded bg-slate-800 text-slate-400 font-mono ml-0.5">AF</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
