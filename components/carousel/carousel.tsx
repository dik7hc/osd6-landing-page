'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface CarouselItem {
    src: string;
    title: string;
}

const carouselItems: CarouselItem[] = [
    {
        title: "Continuous Improvement",
        src: "/images/aQuan.jfif",
    },
    {
        title: "Leadership",
        src: "/images/cHang.jfif",
    },
    {
        title: "Transparency",
        src: "/images/baoVy.jfif",
    },

    {
        title: "Service Mindset",
        src: "/images/cMy.jfif",
    },
    {
        title: "Accountability",
        src: "/images/cDung.jfif",
    },
    {
        title: "Collaboration",
        src: "/images/cHan.jfif",
    },
    {
        title: "Standardization",
        src: "/images/aTung.jfif",
    },
    {
        title: "Process Orientation",
        src: "/images/aHung.jfif",
    },
];


interface CarouselCardProps {
    item: CarouselItem;
}

const CarouselCard = React.forwardRef<HTMLDivElement, CarouselCardProps>(({ item }, ref) => (
    <div ref={ref} className="group relative h-80 w-56 shrink-0 overflow-hidden rounded-3xl shadow-lg dark:bg-neutral-900 md:h-[30rem] md:w-[23rem]">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <BlurImage
            src={item.src} alt={item.title}
            fill
            className="absolute inset-0 z-10 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
        <div className="absolute top-4  z-40 p-8">
            <h4
                className="mt-2 max-w-xs text-left font-sans text-xl font-semibold text-white transition-transform duration-500 ease-in-out [text-wrap:balance] group-hover:-translate-y-4 md:text-3xl"
            >
                {item.title}
            </h4>
        </div>
    </div>
));

const BlurImage = ({
    height,
    width,
    src,
    className,
    alt,
    ...rest
}: ImageProps) => {
    const [isLoading, setLoading] = useState(true);
    return (
        <img
            className={cn(
                "size-full transition duration-300 group-hover:scale-105",
                // isLoading ? "blur-sm" : "blur-0",
                className,
            )}
            onLoad={() => setLoading(false)}
            src={src as string}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            fetchPriority='low'
            // quality={100}
            // blurDataURL={typeof src === "string" ? src : undefined}
            alt={alt ? alt : "Background of a beautiful view"}
            {...rest}
        />
    );
};


CarouselCard.displayName = 'CarouselCard';


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(carouselItems.length);
    const [isJumping, setIsJumping] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [cardWidth, setCardWidth] = useState(0);

    const duplicatedItems = [...carouselItems, ...carouselItems, ...carouselItems];

    useEffect(() => {
        const calculateCardWidth = () => {
            if (cardRef.current) {
                const style = window.getComputedStyle(cardRef.current);
                const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
                setCardWidth(cardRef.current.offsetWidth + margin + 12);
                console.log(cardRef.current.offsetWidth + margin + 16)
            }
        };

        calculateCardWidth();
        window.addEventListener('resize', calculateCardWidth);

        return () => {
            window.removeEventListener('resize', calculateCardWidth);
        };
    }, []);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        if (isJumping) {
            const timer = setTimeout(() => {
                setIsJumping(false);
                setIsTransitioning(false);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [isJumping]);

    const handlePrev = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(prevIndex => prevIndex - 1);
    }, [isTransitioning]);

    const handleNext = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(prevIndex => prevIndex + 1);
    }, [isTransitioning]);

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            handleNext();
        }, 3000);

        return () => resetTimeout();
    }, [currentIndex, handleNext]);

    const handleTransitionEnd = () => {
        if (currentIndex >= carouselItems.length * 2) {
            setIsJumping(true);
            setCurrentIndex(carouselItems.length);
        } else if (currentIndex < carouselItems.length) {
            setIsJumping(true);
            setCurrentIndex(carouselItems.length + (currentIndex % carouselItems.length));
        } else {
            setIsTransitioning(false);
        }
    };

    const getTransform = () => {
        if (carouselRef.current && cardWidth > 0) {
            return `translateX(-${currentIndex * cardWidth}px)`;
        }
        return 'translateX(0px)';
    };

    return (
        <div className="flex flex-col items-center justify-center overflow-hidden px-0 font-sans">
            <div className="mr-10 flex w-full items-end justify-end gap-2">
                <button
                    className="relative z-40 flex size-10 items-center justify-center rounded-full bg-gray-200 text-gray-500 hover:bg-bosch_blue hover:text-white"
                    onClick={handlePrev}
                    aria-label="Previous Image"
                >
                    <ArrowLeft className="size-6 " aria-hidden="true" />
                </button>
                <button
                    className="relative z-40 flex size-10 items-center justify-center rounded-full bg-gray-200 text-gray-500 hover:bg-bosch_blue hover:text-white"
                    onClick={handleNext}
                    aria-label="Next Image"
                >
                    <ArrowRight className="size-6" aria-hidden="true" />
                </button>
            </div>
            <div className="relative flex w-full items-center justify-center pt-10">
                <div className=" w-full">
                    <div
                        ref={carouselRef}
                        className="flex gap-3"
                        onTransitionEnd={handleTransitionEnd}
                        style={{
                            transform: getTransform(),
                            transition: isJumping || cardWidth === 0 ? 'none' : 'transform 0.5s ease-in-out',
                        }}
                    >
                        {duplicatedItems.map((item, index) => (
                            <CarouselCard ref={index === carouselItems.length ? cardRef : null} key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    );
};




export default Carousel;

