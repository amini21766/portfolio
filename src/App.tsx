import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import {
  initialProfile,
  initialProjects,
  initialExperiences,
  skillGroups,
  codeSnippets,
  initialCertificates,
  initialTestimonials,
  initialServices,
} from './data/portfolioData';
import { DeveloperProfile, Project, Experience, ServiceOffer } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { ServicePage } from './components/ServicePage';
import { Experience as ExperienceComponent } from './components/Experience';
import { Education } from './components/Education';
import { Testimonials } from './components/Testimonials';
import { Certificates } from './components/Certificates';
import { SkillsCodeVault } from './components/SkillsCodeVault';
import { RecruiterView } from './components/RecruiterView';
import { ProfileCustomizer } from './components/ProfileCustomizer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { downloadCvPdf } from './utils/downloadCv';

export default function App() {
  const [profile, setProfile] = useState<DeveloperProfile>(() => {
    const saved = localStorage.getItem('mern_portfolio_profile');
    if (saved) {
      try {
        const savedProfile = JSON.parse(saved) as DeveloperProfile;
        return {
          ...initialProfile,
          ...savedProfile,
          email: initialProfile.email,
          phone: initialProfile.phone,
          github: initialProfile.github,
          whatsapp: initialProfile.whatsapp,
        };
      } catch (e) {
        // fallback
      }
    }
    return initialProfile;
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme === 'dark';
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', darkMode);
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const [projects] = useState<Project[]>(initialProjects);
  const [experiences] = useState<Experience[]>(initialExperiences);
  const [activeService, setActiveService] = useState<ServiceOffer | null>(() => {
    const serviceId = window.location.pathname.match(/^\/services\/([^/]+)$/)?.[1];
    return initialServices.find((service) => service.id === serviceId) ?? null;
  });
  const [recruiterMode, setRecruiterMode] = useState<boolean>(false);
  const [showCustomizer, setShowCustomizer] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('overview');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (activeService) return;

      const sections = ['overview', 'about', 'projects', 'services', 'experience', 'education', 'certificates', 'skills', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeService]);

  useEffect(() => {
    const handlePopState = () => {
      const serviceId = window.location.pathname.match(/^\/services\/([^/]+)$/)?.[1];
      setActiveService(initialServices.find((service) => service.id === serviceId) ?? null);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSaveProfile = (updated: DeveloperProfile) => {
    setProfile(updated);
    localStorage.setItem('mern_portfolio_profile', JSON.stringify(updated));
  };

  const handleResetProfile = () => {
    setProfile(initialProfile);
    localStorage.removeItem('mern_portfolio_profile');
    setShowCustomizer(false);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navigateToSection = (id: string) => {
    if (activeService || window.location.pathname !== '/') {
      setActiveService(null);
      window.history.pushState({}, '', '/');
      window.setTimeout(() => scrollTo(id), 0);
      return;
    }

    scrollTo(id);
  };

  const openServicePage = (service: ServiceOffer) => {
    setActiveService(service);
    window.history.pushState({}, '', `/services/${service.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToPortfolio = () => {
    setActiveService(null);
    window.history.pushState({}, '', '/');
    window.setTimeout(() => scrollTo('services'), 0);
  };

  const contactFromService = (subject?: string) => {
    setActiveService(null);
    window.history.pushState({}, '', '/');
    window.setTimeout(() => scrollTo('contact'), 0);
  };

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white' : 'bg-slate-50 text-slate-900 selection:bg-slate-900 selection:text-white'}`}>
      <ToastContainer aria-label="Contact form notifications" position="top-right" autoClose={4500} newestOnTop closeOnClick pauseOnFocusLoss pauseOnHover theme={darkMode ? 'dark' : 'light'} />
      
      {/* Top Navbar */}
      <Navbar
        profile={profile}
        activeSection={activeSection}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onNavigateSection={navigateToSection}
      />

      {/* Recruiter Executive Summary View (If Toggled) */}
      {recruiterMode && (
        <div className="pt-20">
          <RecruiterView
            profile={profile}
            onClose={() => setRecruiterMode(false)}
            onContact={() => scrollTo('contact')}
          />
        </div>
      )}

      {activeService ? (
        <ServicePage
          service={activeService}
          relatedServices={initialServices.filter((service) => service.id !== activeService.id).slice(0, 4)}
          onBack={backToPortfolio}
          onContact={contactFromService}
          onOpenService={openServicePage}
        />
      ) : (
        <main className="portfolio-grid relative">
          <Hero
            profile={profile}
            onAbout={() => scrollTo('about')}
            onDownloadCv={() => {
              downloadCvPdf();
            }}
            onExploreProjects={() => scrollTo('projects')}
            onContact={() => scrollTo('contact')}
          />

          <About
            profile={profile}
            onContact={() => scrollTo('contact')}
          />

          <Projects projects={projects} />

          <Services
            services={initialServices}
            onContact={() => scrollTo('contact')}
            onOpenService={openServicePage}
          />

          <ExperienceComponent experiences={experiences} />

          <Education />

          <Certificates certificates={initialCertificates} />

          <SkillsCodeVault skillGroups={skillGroups} codeSnippets={codeSnippets} />

          <Testimonials testimonials={initialTestimonials} />

          <Contact profile={profile} />
        </main>
      )}

      {/* Footer */}
      <Footer profile={profile} />

      {/* Profile Customizer Modal */}
      {showCustomizer && (
        <ProfileCustomizer
          profile={profile}
          onSave={handleSaveProfile}
          onReset={handleResetProfile}
          onClose={() => setShowCustomizer(false)}
        />
      )}

    </div>
  );
}
