import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const logos = [
    {
        name: "Google",
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
        name: "Microsoft",
        src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
        name: "Apple",
        src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
        name: "Amazon",
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
        name: "Facebook",
        src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    },
    {
        name: "Netflix",
        src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
        name: "Spotify",
        src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    },
    {
        name: "Adobe",
        src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo.svg",
    },
];

export function PartnerScroll() {
    const [isHovered, setIsHovered] = useState(false);
    const marqueeRef = useRef(null);
    const containerRef = useRef(null);
    const [duration, setDuration] = useState(20);

    useEffect(() => {
        const calculateDuration = () => {
            if (marqueeRef.current && containerRef.current) {
                const marqueeWidth = marqueeRef.current.scrollWidth;
                const containerWidth = containerRef.current.offsetWidth;
                const calculatedDuration = (marqueeWidth / containerWidth) * 15;
                setDuration(calculatedDuration);
            }
        };

        calculateDuration();
        window.addEventListener("resize", calculateDuration);
        return () => window.removeEventListener("resize", calculateDuration);
    }, []);

    return (
        <section className="py-12 bg-muted/20">
            <div className="container px-4">
                <h2 className="text-center text-xl font-medium mb-8 text-muted-foreground">
                    Trusted by industry leaders
                </h2>

                <div
                    ref={containerRef}
                    className="relative overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        ref={marqueeRef}
                        className="flex"
                        animate={{
                            x: ["0%", "-100%"],
                        }}
                        transition={{
                            duration: duration,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        style={{
                            width: "fit-content",
                        }}
                    >
                        {[...logos, ...logos].map((logo, index) => (
                            <div
                                key={`${logo.name}-${index}`}
                                className="flex items-center justify-center px-8 py-4 grayscale hover:grayscale-0 transition-all duration-300"
                                style={{ minWidth: "150px" }}
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="h-8 object-contain max-w-[120px]"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </motion.div>

                    {/* Gradient fade effect on sides */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
