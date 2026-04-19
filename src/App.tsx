import { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import ExpertiseSection from './sections/ExpertiseSection';
import ProjectsGallery from './sections/ProjectsGallery';
import TechStackSection from './sections/TechStackSection';
import { expertiseAreas } from './data/expertise';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const mainRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  // Intersection observer for section tracking
  useEffect(() => {
    const sectionIds = ['hero', 'projects', 'techstack', ...expertiseAreas.map(a => a.id)];

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling.current) return;
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-10% 0px -10% 0px' }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Handle navigation click with smooth scroll
  const handleSectionChange = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      isScrolling.current = true;
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  };

  return (
    <div className="relative min-h-[100dvh] bg-[#050505]">
      {/* Navigation */}
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />

      {/* Main content */}
      <main ref={mainRef} className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Expertise Sections - 13 areas */}
        {expertiseAreas.map((area) => (
          <ExpertiseSection key={area.id} areaId={area.id} />
        ))}

        {/* Projects Gallery */}
        <ProjectsGallery />

        {/* Tech Stack */}
        <TechStackSection />

        {/* Footer */}
        <footer className="relative py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:pl-80">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F0FF] to-[#2A4BFF] flex items-center justify-center">
                    <span className="text-lg font-bold text-black font-[Space_Grotesk]">S</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-[Space_Grotesk]">SYNAPTIC SYSTEMS</div>
                  </div>
                </div>
                <p className="text-sm text-[#888] leading-relaxed">
                  Architecting intelligent systems and neural data topologies for the future of enterprise AI.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#888] mb-4 font-[Space_Grotesk]">Expertise</h4>
                <div className="grid grid-cols-2 gap-2">
                  {expertiseAreas.slice(0, 6).map(area => (
                    <button
                      key={area.id}
                      onClick={() => handleSectionChange(area.id)}
                      className="text-left text-sm text-[#888] hover:text-[#00F0FF] transition-colors"
                    >
                      {area.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#888] mb-4 font-[Space_Grotesk]">Connect</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-[#888] hover:text-[#00F0FF] transition-colors">LinkedIn</a>
                  <a href="#" className="block text-sm text-[#888] hover:text-[#00F0FF] transition-colors">GitHub</a>
                  <a href="#" className="block text-sm text-[#888] hover:text-[#00F0FF] transition-colors">Email</a>
                  <a href="#" className="block text-sm text-[#888] hover:text-[#00F0FF] transition-colors">Twitter / X</a>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#888] mono">
                <span className="text-[#00F0FF]">&copy; 2024</span> Synaptic Systems. All rights reserved.
              </div>
              <div className="text-xs text-[#888] mono">
                Built with <span className="text-[#00F0FF]">React</span> + <span className="text-[#00F0FF]">Three.js</span> + <span className="text-[#00F0FF]">GSAP</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
