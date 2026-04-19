import { useEffect, useRef } from 'react';
import { X, ArrowRight, TrendingUp, Zap, BarChart3 } from 'lucide-react';
import type { Project } from '../data/expertise';

interface ProjectModalProps {
  project: Project | null;
  accentColor: string;
  onClose: () => void;
}

export default function ProjectModal({ project, accentColor, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      // Animate in
      if (contentRef.current) {
        contentRef.current.style.opacity = '0';
        contentRef.current.style.transform = 'scale(0.95) translateY(20px)';
        requestAnimationFrame(() => {
          if (contentRef.current) {
            contentRef.current.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
            contentRef.current.style.opacity = '1';
            contentRef.current.style.transform = 'scale(1) translateY(0)';
          }
        });
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && e.target === modalRef.current) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(12px)'
      }}
    >
      <div
        ref={contentRef}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hide rounded-lg"
        style={{
          background: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: `0 0 60px ${accentColor}15, 0 25px 50px rgba(0,0,0,0.5)`
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <X size={18} />
        </button>

        {/* Project Image */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)`
            }}
          />
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-[Space_Grotesk] tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Description */}
          <p className="text-[#aaa] text-base leading-relaxed">{project.description}</p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-4 rounded-lg text-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${accentColor}20`
                }}
              >
                <div className="text-xs text-[#888] uppercase tracking-wider mb-1">{metric.label}</div>
                <div className="text-xl md:text-2xl font-bold font-[Space_Grotesk]" style={{ color: accentColor }}>
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Architecture */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-[#888] mb-4 font-[Space_Grotesk] flex items-center gap-2">
              <Zap size={14} style={{ color: accentColor }} />
              Architecture
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.architecture.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className="px-3 py-1.5 rounded text-xs mono"
                    style={{
                      background: `${accentColor}10`,
                      border: `1px solid ${accentColor}25`,
                      color: '#ccc'
                    }}
                  >
                    {item}
                  </span>
                  {i < project.architecture.length - 1 && (
                    <ArrowRight size={12} className="text-[#888]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-[#888] mb-4 font-[Space_Grotesk] flex items-center gap-2">
              <BarChart3 size={14} style={{ color: accentColor }} />
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full text-xs"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#aaa'
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Before/After */}
          {project.beforeAfter && (
            <div
              className="p-4 rounded-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <h3 className="text-sm uppercase tracking-wider text-[#888] mb-3 font-[Space_Grotesk] flex items-center gap-2">
                <TrendingUp size={14} style={{ color: accentColor }} />
                Impact
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex-1 text-center p-3 rounded bg-black/30">
                  <div className="text-xs text-red-400 mb-1">BEFORE</div>
                  <div className="text-sm text-[#888]">{project.beforeAfter.before}</div>
                </div>
                <ArrowRight size={20} style={{ color: accentColor }} />
                <div className="flex-1 text-center p-3 rounded" style={{ background: `${accentColor}10` }}>
                  <div className="text-xs mb-1" style={{ color: accentColor }}>AFTER</div>
                  <div className="text-sm text-white font-medium">{project.beforeAfter.after}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
