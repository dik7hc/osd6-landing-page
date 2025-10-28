'use client'
import { cn } from '@/lib/utils';
import { ArrowRight, ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const getPrincipleColor = (index: number) => {
    const colorIndex = index % 4;

    switch (colorIndex) {
        case 0:
            return "text-bosch_teal";
        case 1:
            return "text-bosch_blue";
        case 2:
            return "text-bosch_green";
        case 3:
            return "text-bosch_purple";
        default:
            return "text-bosch_blue";
    }
};
const stories = [
    {
        principle: "Principle #1",
        title: "Continuous Improvements",
        description: "Always better than yesterday.",
        imageSrc: "/images/aQuan.jfif"
    },
    {
        principle: "Principle #2",
        title: "Leadership",
        description: "A description for Scalability. Donec nunc leo, eleifend sit amet fringilla aliquam, molestie eget elit.",
        imageSrc: "/images/cHang.jfif"
    },
    {
        principle: "Principle #3",
        title: "Process Orientation",
        description: "A description for Process Orientation. Quisque erat ipsum, maximus et nulla, accumsan vehicula nulla.",
        imageSrc: "/images/aHung.jfif"
    },
    {
        principle: "Principle #4",
        title: "Service Mindset",
        description: "A description for Service Mindset. Donec nunc leo, eleifend sit amet fringilla aliquam, molestie eget elit.",
        imageSrc: "/images/cMy.jfif"
    },
    {
        principle: "Principle #5",
        title: "Accountability",
        description: "A description for Accountability. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imageSrc: "/images/cDung.jfif"
    },
    {
        principle: "Principle #6",
        title: "Transparency",
        description: "A description for Transparency. Quisque erat ipsum, maximus et nulla, accumsan vehicula nulla.",
        imageSrc: "/images/baoVy.jfif"
    },
    {
        principle: "Principle #7",
        title: "Collaboration",
        description: "A description for Collaboration goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imageSrc: "/images/cHan.jfif"
    },
    {
        principle: "Principle #8",
        title: "Standardization",
        description: "A description for Standardization. Donec nunc leo, eleifend sit amet fringilla aliquam, molestie eget elit.",
        imageSrc: "/images/aTung.jfif"
    },
];
const Opex = () => {
    const [openStoryIndex, setOpenStoryIndex] = useState(0);
    const [currentStorySlide, setCurrentStorySlide] = useState(0);
    const totalStories = stories.length;

    const nextStorySlide = () => {
        setCurrentStorySlide(prev => (prev + 1) % totalStories);

        setOpenStoryIndex(0);
    };

    const prevStorySlide = () => {
        setCurrentStorySlide(prev => {
            if (prev === 0) {
                return totalStories - 1;
            }
            return prev - 1;
        });

        setOpenStoryIndex(0);
    };

    const visibleStories = [
        stories[currentStorySlide % totalStories],
        stories[(currentStorySlide + 1) % totalStories],
        stories[(currentStorySlide + 2) % totalStories],
        stories[(currentStorySlide + 3) % totalStories],
    ];
    return (
        <>
            <section className="overflow-hidden py-16 pb-10">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-5xl text-gray-900">
                        Our Stories in <span className="block font-extrabold">OPEX</span>
                    </h2>
                    <div className="flex gap-2">
                        <button
                            onClick={prevStorySlide}
                            className="rounded-full border border-gray-300 p-2 text-gray-600 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextStorySlide}
                            className="rounded-full border border-gray-300 p-2 text-gray-600 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="flex h-[390px] gap-4">
                    {visibleStories.map((story, index) => {
                        const isOpen = openStoryIndex === index;

                        return (
                            <div
                                key={story.title + index}
                                className={cn(
                                    " p-6 transition-all duration-500 ease-in-out",
                                    isOpen ?
                                        "grow-[4] bg-gray-100" :
                                        "grow cursor-pointer bg-gray-200 hover:bg-gray-300"
                                )}
                                onClick={() => !isOpen && setOpenStoryIndex(index)}
                            >
                                {isOpen ? (
                                    <div className=" flex gap-6 overflow-hidden">
                                        <div className="min-w-0 flex-1">
                                            <div
                                                className={cn(
                                                    "mb-1 text-xs font-semibold",
                                                    getPrincipleColor(index)
                                                )}
                                            >{story.principle}</div>
                                            <h4 className="mb-4 text-2xl font-bold text-gray-900">{story.title}</h4>
                                            <p className="mb-6 text-sm text-gray-600">
                                                {story.description}
                                            </p>
                                            <a
                                                href="#"
                                                className="flex w-32 items-center justify-between border border-gray-400 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                                            >
                                                Read More
                                                <ArrowRight size={16} />
                                            </a>
                                        </div>
                                        <div className="shrink-0">
                                            {/* <div className={`h-[311px] w-[212px] ${story.imageSrc} `}></div> */}
                                            <Image src={story.imageSrc} width={212} height={311} alt={story.principle} />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex h-full flex-col justify-between">
                                        <div>
                                            <div
                                                className={cn(
                                                    "mb-1 text-xs font-semibold",
                                                    getPrincipleColor(index)
                                                )}
                                            >{story.principle}</div>
                                            <h4 className="text-xl font-bold text-gray-900">{story.title}</h4>
                                        </div>
                                        <ArrowRight size={24} className="self-end text-gray-700" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    )
}


export default Opex