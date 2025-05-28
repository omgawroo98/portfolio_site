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
        { count: 200, radius: 0.3, speed: 0.1 },
        { count: 100, radius: 1, speed: 0.05 },
        { count: 50, radius: 1.5, speed: 0.04 },
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

                if (star.radius === 0.5) {
                    // Zooming effect: small stars as vertical streaks
                    const streakHeight = 3; // adjust for blur length
                    ctx.fillRect(star.x, star.y, 1, streakHeight);
                } else {
                    // Normal round stars
                    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                    ctx.fill();
                }
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
                background: 'radial-gradient(ellipse at bottom, #121212 0%, #0a0a0a 100%)',
            }}
        />
    );
};

export default StarField;
