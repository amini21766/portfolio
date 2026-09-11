import React, { useEffect, useRef, useState } from 'react';
import { DeveloperProfile } from '../types';
import {
  Code2,
  Briefcase,
  FolderGit2,
  Mail,
  Menu,
  X,
  Award,
  GraduationCap,
  ShieldCheck,
  User,
  Sun,
  Moon,
  Wrench
} from 'lucide-react';

interface NavbarProps {
  profile: DeveloperProfile;
  activeSection: string;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
  onNavigateSection?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  activeSection,
  darkMode = false,
  onToggleDarkMode,
  onNavigateSection,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const previousScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (window.innerWidth < 1024) {
        setNavbarVisible(true);
        previousScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY < 80) {
        setNavbarVisible(true);
      } else if (currentScrollY > previousScrollY.current + 4) {
        setNavbarVisible(false);
      } else if (currentScrollY < previousScrollY.current - 4) {
        setNavbarVisible(true);
      }

      previousScrollY.current = currentScrollY;
    };

    const handleResize = () => {
      if (window.innerWidth < 1024) setNavbarVisible(true);
    };

    previousScrollY.current = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { id: 'overview', label: 'Overview', icon: Code2 },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'services', label: 'Services', icon: Wrench },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certificates', label: 'Certificates', icon: ShieldCheck },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection(id);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-300 ${navbarVisible ? 'lg:translate-y-0' : 'lg:-translate-y-full'} ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs py-3.5'
          : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-4'
      }`}
    >
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand / Logo */}
          <button
            onClick={() => scrollTo('overview')}
            className="flex items-center gap-2.5 group focus:outline-none cursor-pointer"
            aria-label="Hamid A."
          >
            <div className="w-6 h-6 sm:w-6.5 sm:h-6.5 bg-slate-950 dark:bg-white rounded-md shrink-0 shadow-xs group-hover:scale-105 transition-transform" />
            <span className="font-extrabold text-slate-950 dark:text-white text-lg sm:text-xl tracking-tight">
              Hamid
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-800/90 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold border border-slate-200/80 dark:border-slate-700'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Area (Theme Switcher) */}
          <div className="flex items-center gap-2">
            {/* Single Theme Toggle Button for Desktop & Mobile Header */}
            {onToggleDarkMode && (
              <button
                onClick={onToggleDarkMode}
                aria-label="Toggle Light / Dark Mode"
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className="flex items-center justify-center p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shadow-2xs active:scale-95 cursor-pointer"
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="flex items-center gap-2 p-2.5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    {link.label}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center justify-end pt-1">
              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-slate-900 dark:bg-blue-600 rounded-xl cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
