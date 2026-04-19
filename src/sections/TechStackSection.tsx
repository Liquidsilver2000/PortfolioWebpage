import { useEffect, useRef, useState } from 'react';
import { techStack } from '../data/expertise';
import { Code2, Zap, Shield } from 'lucide-react';

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

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
  }, []);

  // ASCII fluid canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const charSet = ' .:-=+*#%@';
    let time = 0;
    let animId: number;

    const draw = () => {
      animId = requestAnimationFrame(draw);
      time += 0.008;
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cols = Math.floor(canvas.width / 14);
      const rows = Math.floor(canvas.height / 20);
      const cellW = canvas.width / cols;
      const cellH = canvas.height / rows;

      ctx.font = `${Math.floor(cellW * 0.9)}px "JetBrains Mono", monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const nx = x / cols;
          const ny = y / rows;

          // Aurora-like sine wave field
          const wave1 = Math.sin(nx * 6 + time) * Math.cos(ny * 4 + time * 0.7);
          const wave2 = Math.sin(nx * 3 - time * 0.5) * Math.sin(ny * 7 + time * 1.2);
          const wave3 = Math.cos((nx + ny) * 5 + time * 0.3);
          const intensity = (wave1 + wave2 + wave3) / 3;

          const charIdx = Math.floor(Math.abs(intensity) * (charSet.length - 1));
          const char = charSet[Math.min(charIdx, charSet.length - 1)];

          // Color based on intensity
          const r = Math.floor(200 + intensity * 55);
          const g = Math.floor(200 + intensity * 55);
          const b = Math.floor(255);
          const alpha = 0.15 + Math.abs(intensity) * 0.25;

          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.fillText(char, x * cellW + cellW / 2, y * cellH + cellH / 2);
        }
      }
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const categoryIcons = [Code2, Zap, Shield, Code2, Zap, Shield];

  return (
    <section
      ref={sectionRef}
      id="techstack"
      className="relative min-h-[100dvh] py-20 md:py-32 overflow-hidden"
    >
      {/* ASCII fluid background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:pl-80">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-[10px] mono text-[#00F0FF] uppercase tracking-[0.3em] mb-2">Capabilities</div>
          <h2 className="text-4xl md:text-6xl font-bold font-[Space_Grotesk] text-white tracking-tight mb-4">
            Technical Arsenal
          </h2>
          <p className="text-base text-[#888] max-w-xl leading-relaxed">
            A comprehensive toolkit spanning languages, frameworks, cloud platforms, and specialized data tools.
          </p>
        </div>

        {/* Category tabs */}
        <div className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {techStack.map((cat, i) => {
            const Icon = categoryIcons[i];
            return (
              <button
                key={i}
                onClick={() => setActiveCategory(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
                  activeCategory === i
                    ? 'bg-[#00F0FF]/10 border border-[#00F0FF]/40 text-[#00F0FF]'
                    : 'glass text-[#888] hover:text-white'
                }`}
              >
                <Icon size={14} />
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((cat, catIndex) =>
            cat.items.map((item, itemIndex) => {
              const globalIndex = techStack.slice(0, catIndex).reduce((acc, c) => acc + c.items.length, 0) + itemIndex;
              const isActive = catIndex === activeCategory;

              return (
                <div
                  key={`${catIndex}-${itemIndex}`}
                  className={`group relative p-4 rounded-lg text-center cursor-default transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } ${isActive ? 'ring-1 ring-[#00F0FF]/30' : ''}`}
                  style={{
                    transitionDelay: `${300 + globalIndex * 50}ms`,
                    background: isActive ? 'rgba(0, 240, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${isActive ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.06)'}`,
                    transform: isActive ? 'scale(1.02)' : 'scale(1)'
                  }}
                  onMouseEnter={() => setActiveCategory(catIndex)}
                >
                  <div
                    className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center transition-all group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${isActive ? 'rgba(0,240,255,0.15)' : 'rgba(255,255,255,0.05)'}, transparent)`
                    }}
                  >
                    <span className="text-lg font-bold font-[Space_Grotesk]" style={{ color: isActive ? '#00F0FF' : '#888' }}>
                      {item.charAt(0)}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-white mb-0.5">{item}</div>
                  <div className="text-[10px] mono text-[#888] uppercase tracking-wider">{cat.category}</div>

                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    style={{
                      boxShadow: '0 0 20px rgba(0, 240, 255, 0.1), inset 0 0 20px rgba(0, 240, 255, 0.05)'
                    }}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Stats summary */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {[
            { value: '36+', label: 'Technologies' },
            { value: '6', label: 'Categories' },
            { value: '10+', label: 'Years Experience' },
            { value: '99.9%', label: 'Uptime SLA' }
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-lg text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <div className="text-2xl md:text-3xl font-bold text-[#00F0FF] font-[Space_Grotesk]">{stat.value}</div>
              <div className="text-xs text-[#888] mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
