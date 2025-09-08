import Header from '@/components/header';
import { Award, Handshake, MailIcon, Target, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const AboutUsPage = () => {
    return (
        <>
            <Header />
            <div className="flex min-h-screen flex-col bg-gray-100 text-gray-800">
                <section className="relative bg-white px-8 py-24 md:px-20 md:py-14 lg:px-24 2xl:px-96 3xl:px-[40rem]">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/be-likabosch.webp')",
                            filter: 'brightness(0.5)',
                        }}
                    ></div>
                    <div className=" relative text-left text-white">
                        <h1 className="mb-4 text-5xl font-extrabold leading-tight md:text-6xl">
                            About Us
                        </h1>
                        <p className="text-md font-normal leading-relaxed md:text-lg">
                            GS/OSD3 and GS/OSD6 Vietnam teams are parts of the GS/OSD organization at Bosch Vietnam Co., Ltd, specialized in Global Transportation and Planning services.
                        </p>
                    </div>
                </section>

                <section className="bg-gray-100 px-8 py-24 md:px-20 md:py-14 lg:px-24 2xl:px-96 3xl:px-[40rem]">
                    <div className="">
                        <h2 className="mb-8 text-4xl font-extrabold text-gray-900 md:text-5xl">
                            What we do
                        </h2>
                        <div className="space-y-12">
                            <div>
                                <h3 className="mb-2 text-2xl font-bold">OSD3 Function</h3>
                                <p className="text-lg leading-relaxed">
                                    OSD3 Vietnam team provides high-quality global transportation services to our GB customers with a diverse service portfolio, including Regional LSP management, Fine Distribution, Overland Transport Management, Control Tower, and Logistics Costing Center
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-2 text-2xl font-bold">OSD6 Function</h3>
                                <p className="text-lg leading-relaxed">
                                    As specialists in Planning & Operations for the APAC region, GS/OSD6 delivers a comprehensive suite of services designed to help customers achieve Strategic Logistics Optimization. Our expertise includes Demand & Source Planning, Logistics Operations in Shipment Tracking & Warehousing Support, Digitalization & Consulting - with Expert Service in Kinaxis, Lean, etc.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <OurValue />
                <section className="bg-white px-8 py-24 md:px-20 md:py-14 lg:px-24 2xl:px-96 3xl:px-[40rem]">
                <LeaderAndOrgChart />
                        </section>

            </div>
        </>
    );
};

const LeaderAndOrgChart = () => {
    return <>
        <h2 className="mb-8 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Meet Our Leader & Our Team
        </h2>
        <LeaderCard
            name="Hu Qian"
            title="Head of Department GS/OSD3 & GS/OSD6 Vietnam"
            location="HCM"
            imageUrl="/images/Hu_Qian.png"
        />
        <Image
            alt={'OrgChart'}
            src={"/images/VN_OSD_Org_Chart.png"}
            width={1920}
            height={1080}
            unoptimized
            className='w-full'
        />
    </>
}

const LeaderCard = ({ name, title, location, imageUrl }: { name: string, title: string, location: string, imageUrl: string }) => {
    return (
        <div className="my-4 flex max-w-lg items-center space-x-6 rounded-xl bg-white p-6 shadow-md">
            <div className="shrink-0">
                <img
                    className="size-24 rounded-full object-cover"
                    src={imageUrl}
                    alt={`Portrait of ${name}`}
                />
            </div>
            <div>
                <div className="text-xl font-semibold text-gray-900">
                    <span className="border-b-2 border-gray-300">{name}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{title}</p>
                <p className="text-xs text-gray-500">{location}</p>
                <div className="mt-2">
                    <MailIcon className="size-5 text-gray-500" />
                </div>
            </div>
        </div>
    );
};

function OurValue() {
    return (
        <section className="bg-white py-12 text-center md:text-left">
            <div className="px-8 py-24 sm:px-6 md:px-20 md:py-14 lg:px-24 2xl:px-96 3xl:px-[40rem]">
                <h2 className="mb-8 text-4xl font-extrabold text-gray-900 md:text-5xl">Our Value</h2>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {/* Compliance */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="relative mb-4 size-28">
                            <Image
                                src="/images/compliance.png"
                                alt="Compliance icon"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">Compliance</h3>
                        <p className="text-lg leading-relaxed text-gray-600">
                            We ensure the highest level of compliance to any relevant Bosch and global regulations in our services and operation.
                        </p>
                    </div>

                    {/* Customer-centric Innovation */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="relative mb-4 size-28">
                            <Image
                                src="/images/Customer-centric-Innovation.png"
                                alt="Customer-centric Innovation icon"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">Customer-centric Innovation</h3>
                        <p className="text-lg leading-relaxed text-gray-600">
                            We proactively use our expertise in Planning & Transportation to create tailored solutions for our customers&apos; needs and deliver lasting value.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <div className="relative mb-4 size-28">
                            <Image
                                src="/images/Continuous-Improvement.png"
                                alt="Continuous Improvement icon"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">Continuous Improvement</h3>
                        <p className="text-lg leading-relaxed text-gray-600">
                            We are dedicated to continuously enhance every aspect of our work, through regular performance analysis and opportunities identification.
                        </p>
                    </div>

                    {/* Transparent Partnership */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="relative mb-4 size-28">
                            <Image
                                src="/images/Transparent-Partnership.png"
                                alt="Transparent Partnership icon"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">Transparent Partnership</h3>
                        <p className="text-lg leading-relaxed text-gray-600">
                            We believe in open and honest communication. By providing frameworks for every step of our services, we ensure our clients are always informed and confident in our collaborative work.
                        </p>
                    </div>

                    {/* Result focus */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="relative mb-4 size-28">
                            <Image
                                src="/images/Result-focus.png"
                                alt="Result focus icon"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">Result focus</h3>
                        <p className="text-lg leading-relaxed text-gray-600">
                            We are the organization driven by measurable results to our customers, with focus on excellent cost savings and extra mile without compromise on our service quality.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AboutUsPage;
