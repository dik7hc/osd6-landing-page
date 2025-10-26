'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

// ===== Tab Data =====
const tabsData = [
    {
        id: 1,
        label: 'TRANSPORTATION',
        image: '/images/Digi.png',
        description:
            'Our comprehensive transportation services ensure efficient movement of goods across all logistics networks, optimizing routes and reducing costs.',
        color: 'bosch-green',
    },
    {
        id: 2,
        label: 'LOGISTICS COST CENTER',
        image: '/images/Digi.png',
        description:
            'Centralized cost management and optimization solutions for all your logistics operations, providing transparency and control.',
        color: 'bosch-teal',
    },
    {
        id: 3,
        label: 'CORE SERVICES',
        image: '/images/Digi.png',
        description:
            'Essential logistics services including warehousing, distribution, and supply chain management tailored to your business needs.',
        color: 'bosch-blue',
    },
    {
        id: 4,
        label: 'PLANNING & CONSULTING',
        image: '/images/Digi.png',
        description:
            'Strategic planning and expert consulting services to optimize your supply chain and improve operational efficiency.',
        color: 'bosch-purple',
    },
    {
        id: 5,
        label: 'DIGITALIZATION',
        image: '/images/Digi.png',
        description:
            'Digital transformation solutions leveraging IoT, AI, and advanced analytics to modernize your logistics operations.',
        color: 'bosch-teal',
    },
];

// ===== Reusable Content Component =====
interface TabContentProps {
    image: string;
    description: string;
    color: string;
}

const TabContent: React.FC<TabContentProps> = ({ image, description, color }) => (
    <div className="flex gap-6">
        <Image
            src={image}
            alt="Portfolio section"
            width={360}
            height={192}
            className=" object-cover"
        />
        <div>
            <p className="mb-3 text-gray-700">{description} + {color}</p>
            <Button
                style={
                    {
                        backgroundColor: `hsl(var(--${color}))`,
                    }
                }
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
