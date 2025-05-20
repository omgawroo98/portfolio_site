import React, { useEffect, useRef } from 'react';

const FloatingBubblesBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const bubbles: Bubble[] = [];

    interface Bubble {
        x: number;
        y: number;
        radius: number;
        speed: number;
        drift: number;
        opacity: number;
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;
        let animationFrameId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        const createBubbles = (count: number) => {
            for (let i = 0; i < count; i++) {
                bubbles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: 10 + Math.random() * 20,
                    speed: 0.2 + Math.random() * 0.5,
                    drift: (Math.random() - 0.5) * 0.5,
                    opacity: 0.1 + Math.random() * 0.2,
                });
            }
        };

        const draw = () => {
            // Fill background color
            ctx.fillStyle = 'green'; // soft pastel, or whatever suits your theme
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let bubble of bubbles) {
                ctx.beginPath();
                ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity})`;
                ctx.fill();

                bubble.y -= bubble.speed;
                bubble.x += bubble.drift;

                if (bubble.y + bubble.radius < 0) {
                    bubble.y = canvas.height + bubble.radius;
                    bubble.x = Math.random() * canvas.width;
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };
        ;

        createBubbles(100);
        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
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
                pointerEvents: 'none',
            }}
        />
    );
};

export default FloatingBubblesBackground;
