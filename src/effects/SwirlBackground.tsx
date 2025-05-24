import React, { useEffect, useRef } from 'react';
import SimplexNoise from 'simplex-noise';
import { useTheme } from '@mui/material/styles';

const SwirlBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const simplex = useRef(new SimplexNoise());
    const theme = useTheme();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const canvas = {
            a: document.createElement('canvas'),
            b: document.createElement('canvas'),
        };

        const ctx = {
            a: canvas.a.getContext('2d')!,
            b: canvas.b.getContext('2d')!,
        };

        canvas.b.style.position = 'fixed';
        canvas.b.style.top = '0';
        canvas.b.style.left = '0';
        canvas.b.style.width = '100%';
        canvas.b.style.height = '100%';
        canvas.b.style.zIndex = '-1';

        container.appendChild(canvas.b);

        const center: [number, number] = [0, 0];
        const particleCount = 700;
        const particlePropCount = 9;
        const particlePropsLength = particleCount * particlePropCount;
        const particleProps = new Float32Array(particlePropsLength);

        const baseTTL = 300, rangeTTL = 600;
        const baseSpeed = 0.01, rangeSpeed = 0.02;
        const baseRadius = 1, rangeRadius = 4;
        const baseHue = 210, rangeHue = 40;
        const noiseSteps = 8;
        const xOff = 0.00125, yOff = 0.00125, zOff = 0.0001;
        const backgroundColor = theme.palette.background.default;
        let tick = 0;
        const TAU = Math.PI * 2;

        let speedMultiplier = 1;
        let targetMultiplier = 1;
        let lastMouseMove = 0;
        let mouseX = center[0];
        let mouseY = center[1];

        const rand = (n: number) => Math.random() * n;
        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
        const fadeInOut = (t: number, m: number) => {
            const hm = 0.5 * m;
            return Math.abs((t + hm) % m - hm) / hm;
        };

        function resize() {
            const { innerWidth, innerHeight } = window;
            canvas.a.width = innerWidth;
            canvas.a.height = innerHeight;
            canvas.b.width = innerWidth;
            canvas.b.height = innerHeight;
            center[0] = 0.5 * innerWidth;
            center[1] = 0.5 * innerHeight;
        }

        function initParticle(i: number) {
            const x = rand(canvas.a.width);
            const y = rand(canvas.a.height);
            const vx = 0, vy = 0;
            const life = 0;
            const ttl = baseTTL + rand(rangeTTL);
            const speed = baseSpeed + rand(rangeSpeed);
            const radius = baseRadius + rand(rangeRadius);
            const hue = baseHue + rand(rangeHue);

            particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
        }

        function initParticles() {
            for (let i = 0; i < particlePropsLength; i += particlePropCount) {
                initParticle(i);
            }
        }

        function drawParticle(x: number, y: number, x2: number, y2: number, life: number, ttl: number, radius: number, hue: number) {
            ctx.a.save();
            ctx.a.lineCap = 'round';
            ctx.a.lineWidth = radius;
            ctx.a.strokeStyle = `hsla(${hue}, 100%, 70%, ${fadeInOut(life, ttl)})`;
            ctx.a.beginPath();
            ctx.a.moveTo(x, y);
            ctx.a.lineTo(x2, y2);
            ctx.a.stroke();
            ctx.a.closePath();
            ctx.a.restore();
        }

        function updateParticle(i: number) {
            const i2 = i + 1, i3 = i + 2, i4 = i + 3, i5 = i + 4, i6 = i + 5;
            const i7 = i + 6, i8 = i + 7, i9 = i + 8;

            let x = particleProps[i];
            let y = particleProps[i2];

            const dx = mouseX - x;
            const dy = mouseY - y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const angleToMouse = Math.atan2(dy, dx);

            const noiseAngle = simplex.current.noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;

            // Blend between noise and mouse angle based on distance
            const blendFactor = Math.min(1, 200 / (dist + 1)); // closer = more affected
            const angle = lerp(noiseAngle, angleToMouse, blendFactor);

            const vx = lerp(particleProps[i3], Math.cos(angle), 0.1);
            const vy = lerp(particleProps[i4], Math.sin(angle), 0.1);

            let life = particleProps[i5];
            const ttl = particleProps[i6];
            const baseSpeed = particleProps[i7];
            const speed = baseSpeed * speedMultiplier;
            const x2 = x + vx * speed;
            const y2 = y + vy * speed;
            const radius = particleProps[i8];
            const hue = particleProps[i9];

            drawParticle(x, y, x2, y2, life, ttl, radius, hue);

            life++;

            particleProps[i] = x2;
            particleProps[i2] = y2;
            particleProps[i3] = vx;
            particleProps[i4] = vy;
            particleProps[i5] = life;

            if (x2 < 0 || x2 > canvas.a.width || y2 < 0 || y2 > canvas.a.height || life > ttl) {
                initParticle(i);
            }
        }

        function drawParticles() {
            for (let i = 0; i < particlePropsLength; i += particlePropCount) {
                updateParticle(i);
            }
        }

        function renderGlow() {
            ctx.b.save();
            ctx.b.filter = 'blur(8px) brightness(200%)';
            ctx.b.globalCompositeOperation = 'lighter';
            ctx.b.drawImage(canvas.a, 0, 0);
            ctx.b.restore();

            ctx.b.save();
            ctx.b.filter = 'blur(4px) brightness(200%)';
            ctx.b.globalCompositeOperation = 'lighter';
            ctx.b.drawImage(canvas.a, 0, 0);
            ctx.b.restore();
        }

        function renderToScreen() {
            ctx.b.save();
            ctx.b.globalCompositeOperation = 'lighter';
            ctx.b.drawImage(canvas.a, 0, 0);
            ctx.b.restore();
        }

        function draw() {
            tick++;
            ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
            ctx.b.fillStyle = backgroundColor;
            ctx.b.fillRect(0, 0, canvas.b.width, canvas.b.height);

            speedMultiplier = lerp(speedMultiplier, targetMultiplier, 0.05);
            drawParticles();
            renderGlow();
            renderToScreen();

            requestAnimationFrame(draw);
        }

        function handleMouseMove(e: MouseEvent) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            targetMultiplier = 5;
            lastMouseMove = Date.now();
        }

        function monitorIdle() {
            if (Date.now() - lastMouseMove > 300) {
                targetMultiplier = 1;
            }
            requestAnimationFrame(monitorIdle);
        }

        resize();
        initParticles();
        draw();
        monitorIdle();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [theme.palette.background.default]);

    return <div ref={containerRef} className="content--canvas" />;
};

export default SwirlBackground;
