'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

// ===== Tab Data =====
const tabsData = [
    {
        id: 1,
        label: 'TRANSPORTATION',
        image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1761705127/Trasport-Landing_kdgiud.png',
        description:
            'The Transportation (International & Overland) function manages international and regional logistics operations, ensuring efficient booking, routing, and delivery performance. Acting as a central coordination hub, it drives cost control, LSP performance, and network optimization across all transport modes.',
        color: 'bosch-green',
    },
    {
        id: 2,
        label: 'LOGISTICS COST CENTER',
        image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1761705126/LCC_-_Landing_aywbft.png',
        description:
            'LCC APAC2 serves as the regional logistics cost management hub.It operates as a logistics cost data center, ensuring transparency, compliance, and accuracy, while driving cost forecasting and steering to support strategic decision-making.',
        color: 'bosch-teal',
    },
    {
        id: 3,
        label: 'CORE SERVICES',
        image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1761705126/Core_Service_-_Landing_oqjlyv.png',
        description:
            'Core Service provides the structural backbone of APAC2 logistics through standardized LSP management and network design. It enables cost-efficient, reliable, and seamless transport integration across air, sea, and overland networks.',
        color: 'bosch-dark-green',
    },
    {
        id: 4,
        label: 'PLANNING & CONSULTING',
        image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1761705127/Planning_-_Landing_lljxlu.png',
        description:
            'Combining operational excellence with strategic advisory, this function delivers advanced logistics planning via systems like Kinaxis and S4 Hana while driving process optimization, cost efficiency, and cross-regional alignment.',
        color: 'bosch-blue',
    },
    {
        id: 5,
        label: 'DIGITALIZATION',
        image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1761705127/Digi_-_Landing_l0bthy.png',
        description:
            'Digitization enhances logistics visibility and efficiency through automation, data integration, and real-time analytics—enabling smarter decision-making and continuous performance improvement across all logistics domains.',
        color: 'bosch-purple',
    },
];

interface TabContentProps {
    image: string;
    description: string;
    color: string;
}

const TabContent: React.FC<TabContentProps> = ({ image, description, color }) => (
    <div className="flex justify-between gap-6">
        <Image
            src={image}
            alt="Portfolio section"
            width={360}
            height={192}
            className="h-[192px] w-[360px] object-cover"
        />
        <div className="flex flex-col justify-between">
            <p className="mb-3 text-gray-700">{description}</p>
            <Button
                style={
                    {
                        backgroundColor: `hsl(var(--${color}))`,
                    }
                }
                className='w-32 hover:opacity-90'
            >
                Learn More →
            </Button>
        </div>
    </div>
);

// ===== Main Component =====
const PortfolioTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [isPause, setIsPausing] = useState(false);

    useEffect(() => {
        if (isPause) return
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev >= tabsData.length ? 1 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [isPause]);


    return (
        <>

            <nav className="-mb-px mt-20 border-b border-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-2">
                    {tabsData.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            onMouseEnter={() => {
                                setIsPausing(true)
                                setActiveTab(tab.id)
                            }}
                            onMouseLeave={() => setIsPausing(false)}
                            className={`whitespace-nowrap border-b-8 px-8 py-4 text-sm font-medium transition-colors ${activeTab === tab.id
                                ? ''
                                : 'border-transparent text-gray-900 hover:border-gray-300 hover:text-gray-700'
                                }`}
                            style={
                                activeTab === tab.id
                                    ? {
                                        borderBottomColor: `hsl(var(--${tab.color}))`,
                                        color: `hsl(var(--${tab.color}))`,
                                    }
                                    : {}
                            }
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </nav>

            <div className="relative mt-10 overflow-hidden">
                <div
                    className="flex transition-transform duration-1000 ease-in-out"
                    style={{
                        transform: `translateX(-${(activeTab - 1) * 100}%)`,
                    }}
                >
                    {tabsData.map((tab) => (
                        <div
                            key={tab.id}
                            className="w-full shrink-0"
                            onMouseEnter={() => {
                                setIsPausing(true)
                                setActiveTab(tab.id)
                            }}
                            onMouseLeave={() => setIsPausing(false)}
                        >
                            <TabContent
                                image={tab.image}
                                description={tab.description}
                                color={tab.color}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PortfolioTabs;
