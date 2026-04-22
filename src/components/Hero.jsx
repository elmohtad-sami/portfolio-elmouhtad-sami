import React, { useRef, useEffect, useState } from 'react';
import TypewriterText from './TypewriterText';

export default function Hero() {
  const canvasRef = useRef(null);
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const PARTICLE_COUNT = 240;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    const createParticle = (init) => {
      const w = canvas.width;
      const h = canvas.height;
      const centerX = w / 2;
      const centerY = h / 2;

      const goesLeft = Math.random() < 0.5;
      const speed = 1.2 + Math.random() * 2.5;
      const spread = (Math.random() - 0.5) * 1.4;

      return {
        x: init
          ? goesLeft
            ? centerX - Math.random() * centerX
            : centerX + Math.random() * centerX
          : centerX + (Math.random() - 0.5) * 50,
        y: centerY + (Math.random() - 0.5) * 40,
        speedX: goesLeft ? -speed : speed,
        spreadY: spread,
        size: 1 + Math.random() * 2,
        opacity: 0.3 + Math.random() * 0.7,
        goesLeft,
      };
    };

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle(true));
    }

    const animate = () => {
      const w = canvas.width;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.speedX;
        p.y += p.spreadY;

        if (p.goesLeft && p.x < -10) {
          particles[i] = createParticle(false);
        } else if (!p.goesLeft && p.x > w + 10) {
          particles[i] = createParticle(false);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${p.opacity})`;
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 6;
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0f18]">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Centered Foreground UI */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center justify-center gap-5">
        <img
          src="/sami_profesi.png"
          alt=""
          onClick={() => setIsImageOpen(true)}
          className="w-36 h-36 rounded-full object-cover shadow-[0_0_40px_rgba(0,240,255,0.6)] cursor-pointer hover:scale-105 transition-transform duration-300"
        />
        <TypewriterText />
        <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wider">
        ELMOUHTAD.SAMI 
        </h1>
        <a
          href="#projects"
          className="px-6 py-2 border-2 border-[#00f0ff] text-[#00f0ff] rounded-full hover:bg-[#00f0ff] hover:text-[#0a0f18] transition-all duration-300 font-semibold uppercase text-sm tracking-widest"
        >
          View my projects
        </a>
      </div>

      {/* Fullscreen Image Modal (Lightbox) */}
      {isImageOpen && (
        <div
          className="fixed inset-0 z-100 bg-black/90 flex justify-center items-center backdrop-blur-sm"
          onClick={() => setIsImageOpen(false)}
        >
          {/* Close Button */}
          <button
            className="absolute top-8 right-8 text-white text-3xl cursor-pointer hover:text-[#00f0ff] transition-colors duration-200"
            onClick={() => setIsImageOpen(false)}
          >
            ✕
          </button>

          {/* Large Image */}
          <img
            src="/sami_profesi.png"
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover shadow-[0_0_100px_rgba(0,240,255,0.8)] animate-[scaleIn_0.3s_ease-out_forwards]"
            style={{
              animation: 'scaleIn 0.3s ease-out forwards',
            }}
          />

          <style>{`
            @keyframes scaleIn {
              from {
                transform: scale(0.5);
                opacity: 0;
              }
              to {
                transform: scale(1);
                opacity: 1;
              }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
