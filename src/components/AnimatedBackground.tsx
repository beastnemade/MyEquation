import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const lines = [
      {
        points: [] as { x: number; y: number }[],
        color: '#ff5100',
        speed: 0.3,
        amplitude: 40,
        frequency: 0.002,
        offset: 0,
      },
      {
        points: [] as { x: number; y: number }[],
        color: '#1d4ed8',
        speed: 0.4,
        amplitude: 60,
        frequency: 0.0015,
        offset: Math.PI / 3,
      },
      {
        points: [] as { x: number; y: number }[],
        color: '#fcb61a',
        speed: 0.5,
        amplitude: 50,
        frequency: 0.0025,
        offset: (Math.PI * 2) / 3,
      },
    ];

    const initializeLines = () => {
      lines.forEach((line, index) => {
        line.points = [];
        const startY = canvas.height * (0.3 + index * 0.2);
        for (let x = -100; x <= canvas.width + 100; x += 10) {
          line.points.push({ x, y: startY });
        }
      });
    };

    initializeLines();

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.strokeStyle = line.color;
        ctx.lineWidth = 3;
        ctx.shadowBlur = 30;
        ctx.shadowColor = line.color;

        line.points.forEach((point, i) => {
          const y =
            point.y +
            Math.sin(point.x * line.frequency + time * line.speed + line.offset) *
              line.amplitude;

          if (i === 0) {
            ctx.moveTo(point.x, y);
          } else {
            ctx.lineTo(point.x, y);
          }
        });

        ctx.stroke();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
      aria-hidden="true"
    />
  );
}
