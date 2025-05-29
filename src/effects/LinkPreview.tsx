"use client";
import React, { useEffect, useState, useRef } from "react";
import { encode } from "qss";
import { Box, Popper, Typography, Link as MuiLink } from "@mui/material";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

type LinkPreviewProps = {
    children: React.ReactNode;
    url: string;
    className?: string;
    width?: number;
    height?: number;
    quality?: number;
    layout?: string;
} & (
        | { isStatic: true; imageSrc: string }
        | { isStatic?: false; imageSrc?: never }
    );

export const LinkPreview = ({
    children,
    url,
    className,
    width = 200,
    height = 125,
    quality = 50,
    layout = "fixed",
    isStatic = false,
    imageSrc = "",
}: LinkPreviewProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    const x = useMotionValue(0);
    const translateX = useSpring(x, { stiffness: 100, damping: 15 });

    const src = isStatic
        ? imageSrc
        : `https://api.microlink.io/?${encode({
            url,
            screenshot: true,
            meta: false,
            embed: "screenshot.url",
            colorScheme: "dark",
            "viewport.isMobile": true,
            "viewport.deviceScaleFactor": 1,
            "viewport.width": width * 3,
            "viewport.height": height * 3,
        })}`;

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        const rect = event.currentTarget.getBoundingClientRect();
        const offset = (event.clientX - rect.left - rect.width / 2) / 2;
        x.set(offset);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            {isMounted && (
                <Box sx={{ display: "none" }}>
                    <img src={src} width={width} height={height} alt="preload" />
                </Box>
            )}

            <MuiLink
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}
                className={className}
            >
                {children}
            </MuiLink>

            <Popper
                open={open}
                anchorEl={anchorEl}
                placement="top"
                modifiers={[
                    {
                        name: "offset",
                        options: {
                            offset: [0, 10],
                        },
                    },
                ]}
                disablePortal
                style={{ zIndex: 1500 }}
            >
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.6 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                },
                            }}
                            exit={{ opacity: 0, y: 20, scale: 0.6 }}
                            style={{ x: translateX }}
                        >
                            <Box
                                sx={{
                                    p: 1,
                                    bgcolor: "background.paper",
                                    borderRadius: 2,
                                    boxShadow: 4,
                                    border: "2px solid",
                                    borderColor: "transparent",
                                    "&:hover": {
                                        borderColor: "grey.300",
                                    },
                                }}
                            >
                                <img
                                    src={src}
                                    width={width}
                                    height={height}
                                    alt="preview"
                                    style={{ borderRadius: 8, display: "block" }}
                                />
                            </Box>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Popper>
        </>
    );
};
