import { useRef, useEffect } from 'react';

export default function AsciiOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cols = 80;
    const rows = 40;
    const charSet = " .'`^,:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";
    const N = 0.03;
    const F = 0.01;

    let vx: number[] = new Array(cols * rows).fill(0);
    let vy: number[] = new Array(cols * rows).fill(0);
    let d: number[] = new Array(cols * rows).fill(0);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.font = `${Math.floor(canvas.width / cols)}px "JetBrains Mono", monospace`;
      ctx.fillStyle = 'rgba(0, 240, 255, 0.4)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
    };
    resize();
    window.addEventListener('resize', resize);

    let animId: number;
    const cellW = () => canvas.width / cols;
    const cellH = () => canvas.height / rows;
    let time = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cw = cellW();
      const ch = cellH();

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const idx = y * cols + x;

          // Inject noise
          vx[idx] += (Math.random() - 0.5) * N;
          vy[idx] += (Math.random() - 0.5) * N;
          d[idx] += (Math.sin(x * 0.1 + time) * Math.cos(y * 0.1 + time * 0.7)) * F;

          // Decay
          vx[idx] *= 0.99;
          vy[idx] *= 0.99;
          d[idx] *= 0.99;

          // Compute display
          const order = Math.floor(Math.abs(d[idx] * 2 + vx[idx]) * 127) % charSet.length;
          const alpha = Math.min(0.3, Math.abs(d[idx]) * 0.5 + 0.05);
          ctx.fillStyle = `rgba(0, 240, 255, ${alpha})`;
          ctx.fillText(charSet[order], x * cw + cw / 2, y * ch + ch / 2);

          // Propagate
          if (x < cols - 1) vx[y * cols + (x + 1)] += vx[idx] * 0.05;
          if (y < rows - 1) vy[(y + 1) * cols + x] += vy[idx] * 0.05;
        }
      }
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        mixBlendMode: 'screen',
        pointerEvents: 'none',
        opacity: 0.3
      }}
    />
  );
}
