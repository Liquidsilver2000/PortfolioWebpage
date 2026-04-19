import { useEffect, useRef, useState } from 'react';
import { expertiseAreas } from '../data/expertise';
import type { Project } from '../data/expertise';
import ProjectModal from '../components/ProjectModal';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

// Collect all projects from all expertise areas
const allProjects = expertiseAreas.flatMap(area =>
  area.projects.map(p => ({ ...p, areaColor: area.color, areaTitle: area.title }))
);

export default function ProjectsGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollAngle, setScrollAngle] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const velocity = useRef(0);

  const radius = 500;
  const items = allProjects;

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
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      setScrollAngle(prev => prev + e.deltaY * 0.05);
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      lastX.current = e.clientX;
      velocity.current = 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const delta = e.clientX - lastX.current;
      velocity.current = delta * 0.3;
      setScrollAngle(prev => prev + delta * 0.3);
      lastX.current = e.clientX;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    // Touch support
    const handleTouchStart = (e: TouchEvent) => {
      isDragging.current = true;
      lastX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const delta = e.touches[0].clientX - lastX.current;
      setScrollAngle(prev => prev + delta * 0.3);
      lastX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const angleStep = 360 / items.length;

  return (
    <>
      <section
        id="projects"
        ref={containerRef}
        className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ perspective: '900px' }}
      >
        {/* Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.03) 0%, transparent 70%)'
          }}
        />

        {/* Title */}
        <div className={`absolute top-20 md:top-28 left-0 right-0 z-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-[10px] mono text-[#00F0FF] uppercase tracking-[0.3em] mb-2">Interactive Gallery</div>
          <h2 className="text-3xl md:text-5xl font-bold font-[Space_Grotesk] text-white tracking-tight">
            Kinetic Archives
          </h2>
          <p className="text-sm text-[#888] mt-3">Drag to explore &bull; Scroll to shift</p>
        </div>

        {/* 3D Ring */}
        <div
          className="relative"
          style={{
            width: '100%',
            height: '400px',
            transformStyle: 'preserve-3d'
          }}
        >
          {items.map((project, index) => {
            const angle = (index * angleStep) + scrollAngle;
            const rad = angle * (Math.PI / 180);
            const x = Math.sin(rad) * radius;
            const z = Math.cos(rad) * radius;
            const y = Math.sin(rad * 2) * 50;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={project.id}
                className="absolute left-1/2 top-1/2 transition-none"
                style={{
                  transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px) rotateY(${-angle}deg)`,
                  width: '280px',
                  opacity: z > 0 ? (isHovered ? 1 : 0.85) : 0.4,
                  zIndex: Math.round(z + radius),
                  pointerEvents: z > -100 ? 'auto' : 'none'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  const originalProject = expertiseAreas
                    .flatMap(a => a.projects)
                    .find(p => p.id === project.id);
                  if (originalProject) setSelectedProject(originalProject);
                }}
              >
                <div
                  className="rounded-lg overflow-hidden transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: `1px solid ${isHovered ? project.areaColor + '60' : 'rgba(255, 255, 255, 0.08)'}`,
                    boxShadow: isHovered ? `0 0 40px ${project.areaColor}20` : 'none',
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                  }}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 60%)`
                      }}
                    />
                    {isHovered && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-medium"
                          style={{ background: project.areaColor, color: '#000' }}
                        >
                          <ExternalLink size={12} />
                          View
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div
                      className="text-[10px] mono uppercase tracking-wider mb-1"
                      style={{ color: project.areaColor }}
                    >
                      {project.areaTitle}
                    </div>
                    <h3 className="text-sm font-bold text-white font-[Space_Grotesk] truncate">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation arrows */}
        <div className="absolute bottom-20 md:bottom-28 left-0 right-0 z-20 flex items-center justify-center gap-6">
          <button
            onClick={() => setScrollAngle(prev => prev - angleStep)}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:border-[#00F0FF]/50 transition-all"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="text-xs mono text-[#888]">
            {items.length} Projects
          </div>
          <button
            onClick={() => setScrollAngle(prev => prev + angleStep)}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:border-[#00F0FF]/50 transition-all"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        accentColor="#00F0FF"
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
