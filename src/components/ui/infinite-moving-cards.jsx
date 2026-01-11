import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}) => {
    const containerRef = useRef(null);
    const scrollerRef = useRef(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });
            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "left" ? "forwards" : "reverse"
            );
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            const durations = { fast: "20s", normal: "40s", slow: "80s" };
            containerRef.current.style.setProperty("--animation-duration", durations[speed] || "40s");
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className="relative w-[250px] max-w-full shrink-0 rounded-2xl border border-zinc-700 bg-zinc-900/50 px-8 py-10 md:w-[300px] transition-all duration-300 hover:border-red-500/50 shadow-xl"
                    >
                        {/* Conditional wrapper for URL */}
                        {item.url ? (
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                <CardContent item={item} />
                            </a>
                        ) : (
                            <CardContent item={item} />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const CardContent = ({ item }) => (
    <div className="flex flex-col items-center justify-center gap-6">
        <div className="h-16 w-full flex items-center justify-center">
            <img
                src={item.logo}
                className="h-full w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
            />
        </div>
    </div>
);