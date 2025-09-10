import React from 'react';
import { Button } from '../ui/button';
import SectionHeader from '../section-header';
import Image from 'next/image';

const bentoItems = [
    {
        id: 1,
        // type: 'video',
        category: 'Integrated Logistics',
        date: '20 Aug 2025',
        description: 'Exploring the top logistics trends in the chemicals industry: supply chain diversification, supply chain visibility, IoT and more for 2025 and beyond.',
        author: 'Emma Kirsh',
        title: "As of June 12th, OSD6 VOC has collected 31 voices from customers, with average rating ...",
        titleFull: "As of June 12th, OSD6 VOC has collected 31 voices from customers, with average rating of perfect 5/5. With the target of total 80 voices and average rating at 4.5 or great, we hope to achive by end of 2025.",
        videoIcon: false,
        image: "https://www.bosch.com.vn/media/vn/news/bosch_relies_on_its_strengths_as_a_technology_leader/1920x1080_main_res_400x225.webp"
    },
    {
        id: 2,
        type: 'article',
        category: 'Supply Chain Consulting',
        date: '12 June 2025',
        title: 'Kicked start in August 2024, all team members had the chance to learn about the current Bosch Industry ...',
        titleFull: 'Kicked start in August 2024, all team members had the chance to learn about the current Bosch Industry consulting services,, with focused topics on Supply Chain management consulting.',
        image: 'https://www.bosch.com.vn/media/vn/news/smart_factories/1920x1080_main_res_400x225.webp',
        videoIcon: false,
    },
    {
        id: 3,
        type: 'article',
        category: 'BMP Project',
        date: '12 June 2025',
        title: "Kicked off in July 2024, Billing Management ...",
        titleFull: "Kicked off in July 2024, Billing Management Platform (BMP) is now the key system for OSD3 - LCC team for their services and daily operations.",
        image: 'https://www.bosch.com.vn/media/vn/news/gefe_2024/1920x1080_cover_res_400x225.webp',
        videoIcon: false,
    },
    {
        id: 4,
        type: 'article',
        category: 'ME-JP LCC Expansion',
        date: '12 June 2025',
        title: 'In expending our scope of work for ME-JP, OSD6 & ...',
        titleFull: 'In expending our scope of work for ME-JP, OSD6 & OSD3 will collaborate on opening up a new route for monitoring air shipments.',
        image: 'https://www.bosch.com.vn/media/vn/news/bosch_marks_10_consecutive_years_in_vietnam_s_top_100_best_workplaces/1920x1080_main1_res_400x225.webp',
        videoIcon: false,
    },
];

// GridItem component to render each individual card
const GridItem = ({ item }: { item: any }) => {
    return (
        <div className={`
      relative h-64 overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 ease-in-out hover:scale-[1.01]
      ${item.id === 1 ? ' lg:col-span-2 lg:row-span-2 lg:h-full' : ''}
      ${item.id === 2 ? ' lg:col-span-2 lg:row-span-1 lg:h-full' : ''}
      group flex flex-col justify-end bg-gray-900 p-6
      `}>
            {/* Background image */}
            <Image
                src={item.image}
                alt={item.title}
                className="absolute inset-0 z-0 size-full object-cover brightness-75 transition-transform duration-300 ease-in-out group-hover:scale-105"
                fill
                fetchPriority='low'
            />

            {/* Overlay to create the gradient effect */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent"></div>

            {/* Content */}
            <div className="relative z-20 flex h-full flex-col items-start justify-end text-white">
                {/* Category and date */}
                <span className={`inline-flex items-center gap-2 mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-white/10 backdrop-blur-md border border-white/20` + (item.id == 1 ? "transition-transform duration-500 ease-in-out group-hover:-translate-y-24" : "")}>
                    {item.category} • {item.date}
                </span>

                {/* Title and description with hover effect */}
                <div className="relative flex flex-col justify-end">
                    {/* Title that slides up on hover */}
                    <h3 className={`font-bold leading-tight transition-transform duration-500 ease-in-out ${item.description ? 'group-hover:-translate-y-24' : ''} ${item.id === 1 ? 'text-xl lg:text-4xl' : 'text-xl'}`} title={item.titleFull}>
                        {item.title}
                    </h3>

                    {/* Description that appears on hover - positioned absolutely */}
                    {item.description && (
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full text-sm text-gray-300 opacity-0 transition-all duration-500 ease-in-out group-hover:pointer-events-auto group-hover:-translate-y-2 group-hover:opacity-100">
                            <p className="">{item.description}</p>
                            {item.author && (
                                <div className="flex items-center gap-2">
                                    <div className="size-8 rounded-full bg-gray-400"></div>
                                    <span className="font-semibold text-white">{item.author}</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Main App component
const Highlights = () => {
    return (
        <div className="" >
            {/* Header section */}
            <div className="mb-8 md:mb-12">
                {/* <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-white leading-tight">Highlights of the month</h1> */}
                <SectionHeader>Highlights of the month</SectionHeader>

                <div className='flex flex-col justify-between gap-4 md:flex-row'>
                    <p className=" max-w-2xl text-lg text-gray-400">
                        Access the latest articles, trends and research to guide your strategy and keep you updated on what’s new in the supply chain world.
                    </p>
                    <Button variant={'secondary'} className='shadow-lg hover:bg-bosch_blue hover:text-white' >See all news</Button>
                </div>

            </div>

            {/* Bento Grid layout */}
            <div className="grid auto-rows-min grid-cols-1 gap-6 md:grid-cols-2 lg:auto-rows-fr lg:grid-cols-4">
                {bentoItems.map((item, i) => (
                    <GridItem key={i} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Highlights;



{/* <div className="relative z-20 flex flex-col items-start text-white h-full justify-end">
    <span className={`inline-flex items-center gap-2 mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-transform duration-500 ease-in-out group-hover:-translate-y-24`}>
        {item.category} • {item.date}
    </span>

    <div className="flex flex-col justify-end relative">
        <h3 className={`font-bold leading-tight transition-transform duration-500 ease-in-out ${item.description ? 'group-hover:-translate-y-24' : ''} ${item.id === 1 ? 'text-3xl lg:text-4xl' : 'text-xl'}`}>
            {item.title}
        </h3>

        {item.description && (
            <div className="absolute bottom-0 left-0 right-0 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-full group-hover:-translate-y-2 pointer-events-none group-hover:pointer-events-auto">
                <p className="">{item.description}</p>
                {item.author && (
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                        <span className="font-semibold text-white">{item.author}</span>
                    </div>
                )}
            </div>
        )}
    </div>
</div> */}