import React, { useEffect, useState, useMemo } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const combine = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ");

// CSS animation inserted into DOM
const injectCSS = () => {
    const id = 'drawLine-animation';
    if (document.getElementById(id)) return;

    const style = document.createElement('style');
    style.id = id;
    style.innerHTML = `
    @keyframes drawLine {
      to {
        stroke-dashoffset: 0;
      }
    }
  `;
    document.head.appendChild(style);
};

export const BackgroundBeams = React.memo(({ className }: { className?: string }) => {
    useEffect(() => {
        injectCSS();
    }, []);

    const bottomLeftPaths = useMemo(() => [
        "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
        "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
        "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
        "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
        "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
        "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
        "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
        "M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819",
        "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
        "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803"
    ], []);


    const durationStatic = 1;
    const durationTransition = 10;
    const showCometsAfter = durationStatic * bottomLeftPaths.length * 0.2 + 1.5;

    const [showComets, setShowComets] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowComets(true), showCometsAfter * 1000);
        return () => clearTimeout(timer);
    }, [showCometsAfter]);

    return (
        <Box
            className={combine(className)}
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: -1,
                overflow: "hidden",
            }}
        >
            {/* Bottom Left Trails */}
            <Box
                component="svg"
                sx={{
                    pointerEvents: "none",
                    position: "absolute",
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                }}
                viewBox="0 0 696 316"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {bottomLeftPaths.map((path, index) => (
                    <path
                        key={`static-bl-${index}`}
                        d={path}
                        stroke="#ffffff"
                        strokeOpacity="0.08"
                        strokeWidth="0.5"
                        style={{
                            strokeDasharray: 1000,
                            strokeDashoffset: 1000,
                            animation: `drawLine ${durationStatic}s ease-out forwards`,
                            animationDelay: `${index * 0.2}s`
                        }}
                    />
                ))}
                {showComets && bottomLeftPaths.map((path, index) => (
                    <motion.path
                        key={`comet-bl-${index}`}
                        d={path}
                        stroke="url(#comet-gradient)"
                        strokeOpacity={0.5}
                        strokeWidth="0.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{
                            duration: durationTransition,
                            delay: index * durationTransition,
                            repeat: Infinity,
                            repeatDelay: (bottomLeftPaths.length - 1) * durationTransition,
                            ease: [0, 0, 1, 1]
                        }}
                    />
                ))}
            </Box>

            {/* Top Right Trails (flipped) */}
            <Box
                component="svg"
                sx={{
                    pointerEvents: "none",
                    position: "absolute",
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                    transform: "scaleX(-1) scaleY(-1)", // flips top-right
                }}
                viewBox="0 0 696 316"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {bottomLeftPaths.map((path, index) => (
                    <path
                        key={`static-tr-${index}`}
                        d={path}
                        stroke="#ffffff"
                        strokeOpacity="0.08"
                        strokeWidth="0.5"
                        style={{
                            strokeDasharray: 1000,
                            strokeDashoffset: 1000,
                            animation: `drawLine ${durationStatic}s ease-out forwards`,
                            animationDelay: `${index * 0.2}s`
                        }}
                    />
                ))}
                {showComets && bottomLeftPaths.map((path, index) => (
                    <motion.path
                        key={`comet-tr-${index}`}
                        d={path}
                        stroke="url(#comet-gradient)"
                        strokeOpacity={0.5}
                        strokeWidth="0.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{
                            duration: durationTransition,
                            delay: index * durationTransition,
                            repeat: Infinity,
                            repeatDelay: (bottomLeftPaths.length - 1) * durationTransition,
                            ease: [0, 0, 1, 1]
                        }}
                    />
                ))}
            </Box>

            <svg width="0" height="0">
                <defs>
                    <linearGradient id="comet-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
                        <stop offset="0%" stopColor="#18CCFC" stopOpacity="0" />
                        <stop offset="10%" stopColor="#18CCFC" />
                        <stop offset="50%" stopColor="#6344F5" />
                        <stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </Box>
    );
});

BackgroundBeams.displayName = "BackgroundBeams";
