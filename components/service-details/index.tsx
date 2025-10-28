'use client'
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ServiceData {
    title: string;
    description: string;
}
type ServiceTab = 'OSD3' | 'OSD6';
type ServicesData = {
    [key in ServiceTab]: ServiceData[];
};

const services: ServicesData = {
    'OSD3': [
        {
            title: 'Logistics Cost Center',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat ipsum, maximus et nulla eu, accumsan vehicula nulla. Donec nunc leo, eleifend sit amet fringilla aliquam, molestie eget velit. Suspendisse commodo ligula vitae justo mattis gravida. Aenean eu ultricies nibh. Fusce sagittis nulla eget nunc consequat molestie. Donec aliquet justo sed metus finibus, interdum pharetra sed nulla. Aenean vehicula et ante sit amet tincidunt. Morbi egestas sed diam sed laoreet.'
        },
        {
            title: 'International Transport',
            description: 'International Transport details for OSD3: Curabitur nibh ipsum, sagittis sit amet porta eget, volutpat vitae felis. Donec a erat sit amet mi elementum porta vitae nec massa. Sed euismod, nisl vitae aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl.'
        },
        {
            title: 'Overland Transport',
            description: 'Overland Transport details for OSD3: Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.'
        },
        {
            title: 'Core Service',
            description: 'Core Service details for OSD3: Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.'
        },
    ],
    'OSD6': [
        {
            title: 'Planning',
            description: 'OSD6 Supply Chain Management: Involves planning, implementing, and controlling all supply chain operations with the goal of being as efficient as possible. SCM includes all processes that turn raw materials into final products.'
        },
        {
            title: 'Consulting',
            description: 'OSD6 Warehouse Solutions: Comprehensive services for storage, distribution, and inventory management, ensuring optimal stock levels and timely delivery.'
        },
        {
            title: 'Digitalization',
            description: 'OSD6 Warehouse Solutions: Comprehensive services for storage, distribution, and inventory management, ensuring optimal stock levels and timely delivery.'
        },
    ]
};


const ServiceDetails = () => {
    const [activeServiceTab, setActiveServiceTab] = useState<ServiceTab>('OSD3');
    const [activeService, setActiveService] = useState<string>('Logistics Cost Center');
    const currentService: ServiceData | undefined = services[activeServiceTab].find(s => s.title === activeService);

    // Handle tab switching and reset the active service
    const handleTabChange = (tab: ServiceTab) => {
        setActiveServiceTab(tab);
        if (services[tab].length > 0) {
            setActiveService(services[tab][0].title);
        }
    };

    return (
        <div className="grow" id='services'>
            <div >
                <div className='flex justify-between'>

                    <h2 className='text-5xl'>

                        <span className=" font-light">Our</span>
                        <span className=" mt-4 block font-extrabold text-gray-900">
                            SERVICES
                        </span>
                    </h2>
                    <div className="flex border-b border-gray-300">
                        <button
                            onClick={() => handleTabChange('OSD3')}
                            className={`px-4 py-2 text-lg ${activeServiceTab === 'OSD3' ? 'border-b-4 border-bosch_teal text-gray-800' : 'text-gray-500'}`}
                        >
                            OSD3 Function
                        </button>
                        <button
                            onClick={() => handleTabChange('OSD6')}
                            className={`px-4 py-2 text-lg ${activeServiceTab === 'OSD6' ? 'border-b-4 border-bosch_teal text-gray-800' : 'text-gray-500'}`}
                        >
                            OSD6 Function
                        </button>
                    </div>
                </div>
                {activeServiceTab == "OSD3" && <p className="mt-10 text-lg text-gray-600">
                    OSD3 Vietnam team provides high-quality global transportation services to our GB customers with a diverse service portfolio, including Regional LSP management, Fine Distribution, Overland Transport Management, Control Tower, and Logistics Costing Center.</p>}
                {activeServiceTab == "OSD6" && <p className="mt-10 text-lg text-gray-600">
                    As specialists in Planning & Operations for the APAC region, GS/OSD6 delivers a comprehensive suite of services designed to help customers achieve Strategic Logistics Optimization. Our expertise includes Demand & Source Planning, Logistics Operations in Shipment Tracking & Warehousing Support, Digitalization & Consulting - with Expert Service in Kinaxis, Lean, etc.</p>}

            </div>

            <div className="mt-4 flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3 ">
                    {services[activeServiceTab].map(service => (
                        <button
                            key={service.title}
                            onClick={() => setActiveService(service.title)}
                            className={`block w-full border-b p-3 text-left ${activeService === service.title
                                ? 'bg-bosch_teal text-white'
                                : 'text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {service.title}
                        </button>
                    ))}
                </div>
                <div className="relative min-h-[200px] w-full bg-bosch_teal p-6 text-white sm:w-2/3">
                    <p>{currentService?.description}</p>
                    <div className="absolute bottom-4 right-4 flex gap-2">
                        <ChevronUp className="size-5 cursor-pointer" />
                        <ChevronDown className="size-5 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails