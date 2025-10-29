'use client'
import { cn } from '@/lib/utils';
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
            description: 'The LCC team is the financial hub of APAC2 logistics, managing LSP billing verification, cost booking, accrual, and forecasting. Acting as one face to the customer on cost matters, the team ensures full transparency and compliance. By applying the 4-Eyes Principle in billing verification, LCC safeguards financial accuracy and governance. As the Logistics Cost Data Center, it provides insights for cost optimization and steering, enabling data-driven decisions and sustainable cost efficiency across APAC.'
        },
        {
            title: 'International Transport',
            description: 'The International Transport team oversees Air, Courier, and Sea shipments, ensuring smooth and timely international logistics. Acting as a Control Tower and focal contact point for all shipment inquiries, the team coordinates booking, tracking, and performance monitoring across regions. Through strong LSP management and network optimization, they enhance cost control, service reliability, and visibility. Their proactive support ensures seamless cross-border operations and customer satisfaction throughout the APAC region.'
        },
        {
            title: 'Overland Transport',
            description: 'The Overland Transport team manages regional road logistics across APAC, handling daily shipment assignments, urgent requests, and LSP performance. Using the NGTM system, they automate and standardize bookings for greater accuracy and visibility. The team ensures persistent cycle storage for consistent shipment traceability and data reliability. Focused on continuous improvement, Overland Transport delivers safe, efficient, and cost-effective deliveries that strengthen APAC’s regional logistics performance.'
        },
        {
            title: 'Core Service',
            description: 'The Core Service team forms the backbone of APAC2 logistics, ensuring standardized LSP management and network design across Air, Courier, Sea, and Truck. Acting as the focal point for Network Design, they collaborate closely with all logistics teams to align service standards and optimize routes. Their efforts ensure consistent quality, cost efficiency, and process harmonization, building a strong, connected, and future-ready logistics network across the region.'
        },
    ],
    'OSD6': [
        {
            title: 'Planning',
            description: 'Planning as a Service (PaaS) provides end-to-end support in demand forecasting, supply planning, and inventory optimization to ensure seamless operations. The service delivers data-driven planning solutions tailored to business needs, enhancing visibility and responsiveness. Besides that, we provide expert services such as Kinaxis, S4 HANA, and logistics operations. Our customers include MA APAC, JP-PS, VM, MF, DC, MA, and PT via GS OSD1 and AU-HC.'
        },
        {
            title: 'Consulting',
            description: 'As consultants, the team offers strategic guidance to improve processes, strengthen collaboration, and drive sustainable performance.'
        },
        {
            title: 'Digitalization',
            description: "Our Digital Portfolio represents Bosch’s commitment to driving digital transformation through innovation and excellence. It encompasses a suite of data-driven, automated, and user-centric solutions designed to optimize processes and enhance business performance. The Digital Team integrates multidisciplinary expertise in project management, supply chain operations, business analysis, SAP systems, software engineering, UX/UI design, and data management to deliver impactful, scalable solutions. Through these initiatives, we enable greater transparency, agility, and efficiency across the value chain."
        },
    ]
};


const ServiceDetails = () => {
    const [activeServiceTab, setActiveServiceTab] = useState<ServiceTab>('OSD3');
    const [activeService, setActiveService] = useState<string>('Logistics Cost Center');
    const currentService: ServiceData | undefined = services[activeServiceTab].find(s => s.title === activeService);

    const service = (function () {
        const currentServiceIndex = services[activeServiceTab].findIndex(s => s.title === activeService)
        if (currentServiceIndex == -1) return undefined
        const nextServiceIndex = currentServiceIndex == services[activeServiceTab].length - 1 ? 0 : currentServiceIndex + 1
        const prevServiceIndex = currentServiceIndex == 0 ? services[activeServiceTab].length - 1 : currentServiceIndex - 1
        return { nextService: services[activeServiceTab][nextServiceIndex] , prevService: services[activeServiceTab][prevServiceIndex]}
    })();;

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
                            className={`px-4 py-2 text-lg ${activeServiceTab === 'OSD6' ? 'border-b-4 border-bosch_blue text-gray-800' : 'text-gray-500'}`}
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
                    {services[activeServiceTab].map((service, index) => (
                        <button
                            key={service.title}
                            onClick={() => setActiveService(service.title)}
                            className={cn(
                                "block w-full border-b p-3 text-left",
                                {
                                    "text-gray-700 hover:bg-gray-100": activeService !== service.title,
                                    "text-white": activeService === service.title,
                                    "bg-bosch_teal": activeService === service.title && activeServiceTab === "OSD3",
                                    "bg-bosch_blue": activeService === service.title && activeServiceTab !== "OSD3",
                                }
                            )}
                        >
                            {service.title}
                        </button>
                    ))}
                </div>
                <div className={cn("relative min-h-[200px] w-full bg-bosch_teal p-6 text-white sm:w-2/3" ,
                    { "bg-bosch_blue": activeServiceTab == "OSD6" }
                )} >
                    <p>{currentService?.description}</p>
                    <div className="absolute bottom-4 right-4 flex gap-2">
                        <ChevronUp className="size-5 cursor-pointer" onClick={() => {
                            if (service?.nextService.title) setActiveService(service.prevService.title)
                        }} />
                        <ChevronDown className="size-5 cursor-pointer" onClick={() => {
                            if (service?.nextService.title) setActiveService(service.nextService.title)
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails