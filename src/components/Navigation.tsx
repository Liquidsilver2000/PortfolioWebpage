import { useState, useEffect } from 'react';
import { expertiseAreas } from '../data/expertise';
import {
  Database, Layers, Sparkles, Brain, Cpu, Code2,
  BarChart3, Table, Cloud, PieChart, GitBranch, Globe, Users, Menu, X
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Database, Layers, Sparkles, Brain, Cpu, Code2,
  BarChart3, Table, Cloud, PieChart, GitBranch, Globe, Users
};

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile nav on section change
  useEffect(() => {
    setMobileOpen(false);
  }, [activeSection]);

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-[60] lg:hidden glass p-3 rounded-lg text-white hover:border-[#00F0FF]/50 transition-all"
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[55] lg:hidden backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full z-[56] transition-all duration-300 ease-out ${
          collapsed ? 'w-[70px]' : 'w-[260px]'
        } ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        style={{
          background: 'rgba(5, 5, 5, 0.85)',
          backdropFilter: 'blur(20px)',
          borderRight: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#00F0FF] to-[#2A4BFF] flex items-center justify-center">
                <Brain size={16} className="text-black" />
              </div>
              <div>
                <div className="text-xs font-bold text-white tracking-wider font-[Space_Grotesk]">SYNAPTIC</div>
                <div className="text-[10px] text-[#888] mono">SYSTEMS</div>
              </div>
            </div>
          )}
          {collapsed && (
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#00F0FF] to-[#2A4BFF] flex items-center justify-center mx-auto">
              <Brain size={16} className="text-black" />
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:block text-[#888] hover:text-white transition-colors"
            aria-label="Toggle sidebar"
          >
            {collapsed ? <Menu size={16} /> : <X size={16} />}
          </button>
        </div>

        {/* Nav Items */}
        <nav className="p-2 space-y-1 overflow-y-auto scrollbar-hide" style={{ maxHeight: 'calc(100vh - 140px)' }}>
          {/* Main sections */}
          <button
            onClick={() => handleNavClick('hero')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left ${
              activeSection === 'hero'
                ? 'bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF]'
                : 'text-[#888] hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <Sparkles size={18} />
            {!collapsed && <span className="text-sm font-medium">Home</span>}
          </button>

          <button
            onClick={() => handleNavClick('projects')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left ${
              activeSection === 'projects'
                ? 'bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF]'
                : 'text-[#888] hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <Layers size={18} />
            {!collapsed && <span className="text-sm font-medium">Projects</span>}
          </button>

          <button
            onClick={() => handleNavClick('techstack')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left ${
              activeSection === 'techstack'
                ? 'bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF]'
                : 'text-[#888] hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <Code2 size={18} />
            {!collapsed && <span className="text-sm font-medium">Tech Stack</span>}
          </button>

          <div className="pt-4 pb-2">
            {!collapsed && (
              <div className="px-3 text-[10px] uppercase tracking-widest text-[#888] font-[Space_Grotesk]">
                Expertise
              </div>
            )}
            {collapsed && <div className="mx-auto w-6 h-px bg-white/20" />}
          </div>

          {expertiseAreas.map((area) => {
            const IconComponent = iconMap[area.icon] || Database;
            const isActive = activeSection === area.id;
            return (
              <button
                key={area.id}
                onClick={() => handleNavClick(area.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left group ${
                  isActive
                    ? 'border'
                    : 'border border-transparent hover:bg-white/5'
                }`}
                style={{
                  background: isActive ? `${area.color}15` : 'transparent',
                  borderColor: isActive ? `${area.color}40` : 'transparent',
                  color: isActive ? area.color : '#888'
                }}
              >
                <IconComponent
                  size={18}
                  className="transition-colors"
                  style={{ color: isActive ? area.color : undefined }}
                />
                {!collapsed && (
                  <span className="text-sm font-medium truncate">{area.title}</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        {!collapsed && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
            <div className="text-[10px] text-[#888] mono">
              <span className="text-[#00F0FF]">v2.0.1</span> — Neural Portfolio
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
