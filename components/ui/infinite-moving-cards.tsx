"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const processBoldText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index} className="font-bold">{part.slice(2, -2)}</strong>;
        }
        return part;
    });
};

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        dept?: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

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
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards",
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse",
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "100s");
            }
        }
    };

    items.map(item => {
        console.log(processBoldText(item.quote))
    })
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,#e5e7eb_2%,#e5e7eb_98%,transparent)]",
                className,
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-6 pt-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]",
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="relative shrink-0 border border-b-0 border-zinc-200 bg-gray-200 px-8 py-6 dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] md:w-72"
                        key={idx}
                    >
                        <blockquote className="flex h-full flex-col">
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 size-[calc(100%_+_4px)]"
                            ></div>
                            <span className="relative z-20 text-sm font-normal italic leading-[1.6] text-neutral-800 dark:text-gray-100">
                                &ldquo;{processBoldText(item.quote)}&rdquo;
                            </span>
                            <div className="relative z-20 mt-auto flex flex-row justify-end">
                                <span className="flex flex-col gap-1 text-right">
                                    <span className="text-sm font-semibold leading-[1.6] text-neutral-500 dark:text-gray-400">
                                        {item.name}
                                    </span>
                                    <span className="text-sm font-normal leading-[1.6] text-neutral-500 dark:text-gray-400">
                                        {item.dept}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};