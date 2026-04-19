import { useEffect, useRef, useState } from 'react';
import PlasmaCanvas from '../components/PlasmaCanvas';
import AsciiOverlay from '../components/AsciiOverlay';
import { ChevronDown, Terminal, Activity, Cpu } from 'lucide-react';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const coordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Animated coordinate matrix
  useEffect(() => {
    if (!coordsRef.current) return;
    const el = coordsRef.current;
    let frame: number;
    const chars = '0123456789ABCDEF<>[]{}|/\\=';
    const generateLine = () => {
      let line = '';
      for (let i = 0; i < 32; i++) {
        line += chars[Math.floor(Math.random() * chars.length)];
      }
      return line;
    };

    const animate = () => {
      const lines = [];
      for (let i = 0; i < 6; i++) {
        lines.push(generateLine());
      }
      el.textContent = lines.join('\n');
      frame = setTimeout(() => {
        animate();
      }, 200);
    };
    animate();
    return () => clearTimeout(frame);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <PlasmaCanvas />
      <AsciiOverlay />

      {/* Gradient overlay for depth */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(5,5,5,0.4) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-[3] w-full max-w-6xl mx-auto px-6 md:px-12 lg:pl-80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left content */}
          <div className={`lg:col-span-8 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Coordinate matrix */}
            <div className="mb-8">
              <div
                ref={coordsRef}
                className="mono text-[10px] md:text-xs leading-relaxed text-[#00F0FF]/30 select-none"
              />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
              <span className="text-xs mono text-[#888] uppercase tracking-widest">Available for Opportunities</span>
            </div>

            {/* Main heading */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5vw] font-bold leading-[0.95] tracking-[-0.02em] font-[Space_Grotesk] mb-6"
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #00F0FF 50%, #2A4BFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              AI/ML ENGINEER
              <br />
              <span className="text-white" style={{ WebkitTextFillColor: '#fff' }}>&amp; DATA</span>{' '}
              <span className="text-[#888]" style={{ WebkitTextFillColor: '#888' }}>ARCHITECT</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-[#888] max-w-xl mb-10 leading-relaxed">
              Architecting intelligent systems and neural data topologies.
              <br className="hidden md:block" />
              Transforming raw data into strategic intelligence across 15+ domains.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 md:gap-10 mb-10">
              {[
                { icon: Terminal, value: '15+', label: 'Expertise Areas' },
                { icon: Activity, value: '50+', label: 'Projects Delivered' },
                { icon: Cpu, value: '10+', label: 'Years Experience' }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <stat.icon size={18} className="text-[#00F0FF]" />
                  <div>
                    <div className="text-lg font-bold text-white font-[Space_Grotesk]">{stat.value}</div>
                    <div className="text-[10px] text-[#888] uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                const el = document.getElementById('data-engineer');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg text-sm font-medium transition-all"
              style={{
                background: 'linear-gradient(135deg, #00F0FF, #2A4BFF)',
                color: '#000'
              }}
            >
              Explore Expertise
              <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Right side - Decorative element */}
          <div className={`hidden lg:block lg:col-span-4 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              {/* Floating glass cards */}
              <div
                className="glass p-4 rounded-lg mb-4 transform rotate-3 hover:rotate-0 transition-transform duration-500"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#00F0FF]" />
                  <span className="text-[10px] mono text-[#888]">NEURAL_NETWORK.PY</span>
                </div>
                <pre className="text-[10px] mono text-[#00F0FF]/70 leading-relaxed">
{`class Transformer(nn.Module):
  def __init__(self, d_model=512):
    self.attention = MultiHeadAttention()
    self.ffn = FeedForward(d_model)`}
                </pre>
              </div>

              <div
                className="glass p-4 rounded-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500 ml-8"
                style={{ animation: 'float 5s ease-in-out infinite 1s' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#7000FF]" />
                  <span className="text-[10px] mono text-[#888]">PIPELINE.DAG</span>
                </div>
                <pre className="text-[10px] mono text-[#7000FF]/70 leading-relaxed">
{`extract >> transform >> load
  |           |           |
Kafka      Spark    Warehouse
  |           |           |
validate >> monitor >> alert`}
                </pre>
              </div>

              <div
                className="glass p-4 rounded-lg mt-4 transform rotate-1 hover:rotate-0 transition-transform duration-500 ml-4"
                style={{ animation: 'float 7s ease-in-out infinite 2s' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF00A0]" />
                  <span className="text-[10px] mono text-[#888]">METRICS.LOG</span>
                </div>
                <pre className="text-[10px] mono text-[#FF00A0]/70 leading-relaxed">
{`accuracy: 0.973
loss: 0.0021
epoch: 147/200
status: TRAINING...`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[3] pointer-events-none"
        style={{ background: 'linear-gradient(to top, #050505, transparent)' }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--rot, 0deg)); }
          50% { transform: translateY(-10px) rotate(var(--rot, 0deg)); }
        }
      `}</style>
    </section>
  );
}
