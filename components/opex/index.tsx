'use client'
import { cn } from '@/lib/utils';
import { ArrowRight, ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Opex2 from '../news';

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
        imageSrc: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1761669913/image-aQ_ckmp8x.jpg",
        author: "Ngo Anh Quan GS/OSD6 - APAC23"
    },
    {
        principle: "Principle #2",
        title: "Leadership",
        description: "Leadership - Empowering Excellence, Embracing Diversity, and Driving Sustainability.",
        imageSrc: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1761669717/image-cH_luvvw3.jpg",
        author: "Pham Thuy Hang GS/OSD6 - APAC21 & APAC22"
    },
    {
        principle: "Principle #3",
        title: "Process Orientation",
        description: "Think in processes, deliver with purpose.",
        imageSrc: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1761669712/aHung_o8ookh.jpg",
        author: "Truong Quoc Hung GS/OSD6 - APAC2"
    },
    {
        principle: "Principle #4",
        title: "Service Mindset",
        description: "Listening to customers is key to building trust and driving reliability.",
        imageSrc: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1761669713/cMy_z3vuva.jpg",
        author: "Huynh Mai Nga My GS/OSD3 - APAC21"
    },
    {
        principle: "Principle #5",
        title: "Accountability",
        description: "I would rather lose money than trust.",
        imageSrc: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1761669712/cDung_rsi5u9.jpg",
        author: "Nguyen Thi Hoang Dung GS/OSD3 - APAC21"
    },
    {
        principle: "Principle #6",
        title: "Transparency",
        description: "Transparency-Driven Excellence: Clear Steps, Shared Knowledge, Continuous Growth!",
        imageSrc: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1761669712/image-bv_oa9xpc.jpg",
        author: "Tran Le Bao Vy GS/OSD3 - APAC21"
    },
    {
        principle: "Principle #7",
        title: "Collaboration",
        description: "If you want to go fast, go alone. If you want to go far, go together.",
        imageSrc: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1761669712/cHan_xg3px7.jpg",
        author: "Ly My Han GS/OSD6 - APAC23"
    },
    {
        principle: "Principle #8",
        title: "Standardization",
        description: "Standardization – Your Path to Precision and Progress.",
        imageSrc: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1761669714/aTung_g1uep9.jpg",
        author: "Nguyen Thanh Tung GS/OSD6A - APAC22 & GS/OSD3 - APAC21"
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
                    {/* <div className="flex gap-2">
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
                    </div> */}
                </div>
                <Opex2 />
                {/* <div className="flex h-[390px] gap-4">
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
                                            <p className="text-sm text-gray-700 italic font-semibold">
                                                &ldquo;{story.description}&rdquo;
                                            </p>
                                            <p className="mb-6 text-sm text-gray-600">
                                                {story.author}
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
                                            {/* <Image src={story.imageSrc} width={212} height={311} alt={story.principle} />
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
                </div>  */}
            </section>
        </>
    )
}


export default Opex