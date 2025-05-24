import React, { useRef, useEffect } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  speed: number;
}

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars: Star[] = [];

  const layers = [
    { count: 100, radius: 1, speed: 0.07 }, 
    { count: 75, radius: 2, speed: 0.05 },
    { count: 50, radius: 3, speed: 0.04 }, 
  ];

  let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const resize = () => {
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Initialize stars
    stars.length = 0;
    layers.forEach(({ count, radius, speed }) => {
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight,
          radius,
          speed,
        });
      }
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.fillStyle = 'white';

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const update = () => {
      stars.forEach((star) => {
        star.y -= star.speed;

        if (star.y < -star.radius) {
          star.y = canvasHeight + star.radius;
          star.x = Math.random() * canvasWidth;
        }
      });
    };

    const animate = () => {
      update();
      draw();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
      }}
    />
  );
};

export default StarField;
