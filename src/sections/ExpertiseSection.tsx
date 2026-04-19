import { useEffect, useRef, useState } from 'react';
import { expertiseAreas } from '../data/expertise';
import type { Project } from '../data/expertise';
import ProjectModal from '../components/ProjectModal';
import {
  Database, Layers, Sparkles, Brain, Cpu, Code2,
  BarChart3, Table, Cloud, PieChart, GitBranch, Globe, Users, ArrowRight, ExternalLink
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Database, Layers, Sparkles, Brain, Cpu, Code2,
  BarChart3, Table, Cloud, PieChart, GitBranch, Globe, Users
};

interface ExpertiseSectionProps {
  areaId: string;
}

export default function ExpertiseSection({ areaId }: ExpertiseSectionProps) {
  const area = expertiseAreas.find(a => a.id === areaId);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [areaId]);

  if (!area) return null;

  const IconComponent = iconMap[area.icon] || Database;

  return (
    <>
      <section
        ref={sectionRef}
        id={area.id}
        className="relative min-h-[100dvh] py-20 md:py-32 overflow-hidden"
      >
        {/* Section background with unique color accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${area.color}08 0%, transparent 60%)`
          }}
        />

        {/* Animated grid lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${area.color}20 1px, transparent 1px), linear-gradient(90deg, ${area.color}20 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:pl-80">
          {/* Section header */}
          <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Number and icon */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${area.color}20, ${area.accentColor}10)`,
                  border: `1px solid ${area.color}30`
                }}
              >
                <IconComponent size={24} style={{ color: area.color }} />
              </div>
              <div>
                <div
                  className="text-[10px] mono uppercase tracking-[0.3em] mb-1"
                  style={{ color: area.color }}
                >
                  {String(expertiseAreas.indexOf(area) + 1).padStart(2, '0')} / {String(expertiseAreas.length).padStart(2, '0')}
                </div>
                <div className="text-[10px] mono text-[#888] uppercase tracking-widest">{area.subtitle}</div>
              </div>
            </div>

            {/* Title */}
            <h2
              className="text-4xl md:text-6xl font-bold font-[Space_Grotesk] tracking-[-0.02em] mb-4"
              style={{ color: area.color }}
            >
              {area.title}
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-[#888] max-w-2xl leading-relaxed mb-8">
              {area.description}
            </p>

            {/* Skills pills */}
            <div className="flex flex-wrap gap-2">
              {area.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:scale-105"
                  style={{
                    background: `${area.color}10`,
                    border: `1px solid ${area.color}25`,
                    color: area.color
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {area.projects.map((project, i) => (
              <div
                key={project.id}
                className={`group relative rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${200 + i * 150}ms`,
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: `1px solid ${hoveredCard === i ? area.color + '50' : 'rgba(255, 255, 255, 0.08)'}`,
                  boxShadow: hoveredCard === i ? `0 0 30px ${area.color}15` : 'none'
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to top, rgba(5,5,5,0.95) 0%, ${area.color}10 50%, transparent 100%)`,
                      opacity: hoveredCard === i ? 1 : 0.7
                    }}
                  />
                  {/* View button on hover */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    hoveredCard === i ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div
                      className="px-4 py-2 rounded-full flex items-center gap-2 text-xs font-medium"
                      style={{
                        background: area.color,
                        color: '#000'
                      }}
                    >
                      <ExternalLink size={14} />
                      View Case Study
                    </div>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white font-[Space_Grotesk] mb-2 group-hover:text-[#00F0FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#888] leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Quick metrics */}
                  <div className="flex items-center gap-3">
                    {project.metrics.slice(0, 2).map((metric, j) => (
                      <div key={j} className="flex items-center gap-1.5">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: area.color }}
                        />
                        <span className="text-[10px] mono text-[#888]">
                          {metric.label}: <span style={{ color: area.color }}>{metric.value}</span>
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className={`flex justify-end mt-3 transition-all duration-300 ${
                    hoveredCard === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  }`}>
                    <ArrowRight size={16} style={{ color: area.color }} />
                  </div>
                </div>

                {/* Animated border glow */}
                <div
                  className="absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-300"
                  style={{
                    boxShadow: `inset 0 0 20px ${area.color}10, 0 0 40px ${area.color}05`,
                    opacity: hoveredCard === i ? 1 : 0
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom transition gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #050505, transparent)' }}
        />
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        accentColor={area.color}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
