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
            const { width, height } = canvas.getBoundingClientRect();
            canvasWidth = width;
            canvasHeight = height;
            canvas.width = width;
            canvas.height = height;
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
                star.y += star.speed;

                if (star.y > canvas.height + star.radius) {
                    star.y = -star.radius;
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
                position: 'absolute',
                top: '100%',           // Sit just below the Home content
                left: 0,
                right: 0,
                width: '70%',
                height: `20rem`,       // Adjust as needed
                zIndex: 1,
                pointerEvents: 'none',
                margin: '0 auto',
                marginTop: -12,
                background: 'transparent',
                maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' // ✅ WebKit fallback
            }}
        />
    );
};

export default StarField;
