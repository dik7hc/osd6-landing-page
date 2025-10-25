'use client';

import React, { useState, useEffect } from 'react';
import {
    ArrowRight,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ArrowUp,
    Users,
    Percent,
    Briefcase,
    Star,
    Euro,
    Zap,
    User,
} from 'lucide-react';

export default function Home() {
    // --- Data Arrays ---

    const tabs = [
        "TRANSPORTATION",
        "LOGISTICS COST CENTER",
        "CORE SERVICES",
        "PLANNING & CONSULTING",
        "DIGITALIZATION"
    ];

    const stats = [
        { value: "80+", label: "Associates", icon: Users },
        { value: ">30%", label: "OTS Saved", icon: Percent },
        { value: "20+", label: "Projects", icon: Briefcase },
        { value: ">4.5", label: "voC Rating", icon: Star },
        { value: ">5K", label: "Euro Savings", icon: Euro },
        { value: "+30%", label: "Productivity", icon: Zap },
    ];

    const testimonials = [
        { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat ipsum, maximus et nulla eu, accumsan vehicula nulla.", author: "J.S. Country" },
        { quote: "Donec nunc leo, eleifend sit amet fringilla aliquam, molestie eget velit. Praesent vitae nisl nec erat.", author: "A.B. Country" },
        { quote: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", author: "C.D. Country" },
        { quote: "Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.", author: "E.F. Country" },
        { quote: "Ut at dolor ac erat slagittis consecteur. Curabitur vel egestas dolor.", author: "G.H. Country" },
    ];

    const stories = [
        { category: "CATEGORY 1", title: "Continuous Improvements", color: "bg-gray-200" },
        { category: "CATEGORY 2", title: "Transparency", color: "bg-black" },
        { category: "CATEGORY 3", title: "Process Orientation", color: "bg-gray-200" },
        { category: "CATEGORY 4", title: "Service Mindset", color: "bg-gray-200" },
    ];

    // --- Reusable Helper Components (defined inside Home) ---

    const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
        return (
            <div className={`flex items-end gap-2 ${className}`}>
                <span className="text-4xl font-bold text-brand-dark">GS.</span>
                <span className="text-5xl font-extrabold" style={{ color: '#6a0dad' }}>
                    OSD<span className="text-brand-teal">%</span>
                </span>
            </div>
        );
    };

    const StatCard = ({ value, label, Icon }: { value: string, label: string, Icon: React.ElementType }) => (
        <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg shadow-sm">
            <div>
                <div className="text-3xl font-bold text-gray-900">{value}</div>
                <div className="text-sm text-gray-500">{label}</div>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
                <User size={20} />
                <Icon size={28} />
            </div>
        </div>
    );
    interface TestimonialCardProps {
        quote: string;
        author: string;
        role?: string; // Added optional role for completeness
        company?: string; // Added optional company for completeness
    }

    const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role = "Role", company = "Company" }) => (
        <div className="flex-shrink-0 w-72 bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">

            {/* 1. Corrected the invalid tag.
      2. Used blockquote for semantic HTML, which is best practice for testimonials.
    */}
            <blockquote className="text-gray-600 text-sm italic mb-4">
                "{quote}"
            </blockquote>

            <div className="flex items-center gap-3">
                {/* Placeholder for an actual avatar image */}
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                    {author.charAt(0)}
                </div>

                <div>
                    <div className="font-semibold text-sm text-gray-900">{author}</div>
                    {/* Used optional props with defaults */}
                    <div className="text-xs text-gray-500">{role}, {company}</div>
                </div>
            </div>
        </div>
    );

    const StoryCard = ({ category, title, color }: { category: string, title: string, color: string }) => (
        <div className="flex-shrink-0 w-72 border border-gray-200 rounded-lg overflow-hidden">
            <div className={`w-full h-40 ${color}`}></div>
            <div className="p-4">
                <div className="text-xs font-semibold text-brand-blue mb-1">{category}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
                <p className="text-sm text-gray-500 mb-4 h-10 overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <a href="#" className="flex justify-between items-center text-sm font-semibold text-brand-blue hover:underline">
                    Read More
                    <ArrowRight size={16} />
                </a>
            </div>
        </div>
    );

    // --- Scroll-to-Top Logic ---

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // --- Main Component Render ---

    return (
        <>
            {/* ===== HEADER ===== */}
            <header className="sticky top-0 bg-white z-50 shadow-sm">
                {/* Top color bar */}
                <div className="flex h-1.5">
                    <div className="flex-1 bg-brand-teal"></div>
                    <div className="flex-1 bg-brand-blue"></div>
                    <div className="flex-1 bg-brand-dark"></div>
                </div>
                {/* Main navigation */}
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Logo />
                        <div>
                            <span className="font-bold text-xl text-blue-700">BOSCH</span>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                {/* ===== HERO ===== */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="flex flex-col gap-6">
                            <h1 className="text-5xl font-bold text-gray-900">
                                Welcome to GS.
                            </h1>
                            <Logo className="!items-center" />
                            <p className="text-lg text-gray-600">
                                We engineer the routes where commerce flows freely.
                            </p>
                            <a
                                href="#"
                                className="flex items-center gap-2 text-brand-blue font-semibold hover:underline"
                            >
                                About Us <ArrowRight size={18} />
                            </a>
                        </div>
                        {/* Right Placeholder */}
                        <div className="w-full h-80 bg-gray-200 rounded-lg"></div>
                    </div>
                </section>

                {/* ===== TABS ===== */}
                <div className="border-b border-gray-200">
                    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-px">
                        <div className="flex space-x-8 overflow-x-auto horizontal-scroll">
                            {tabs.map((tab, index) => (
                                <a
                                    key={tab}
                                    href="#"
                                    className={`py-4 px-1 whitespace-nowrap text-sm font-medium
                    ${index === 0
                                            ? 'border-b-2 border-brand-blue text-brand-blue'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }
                  `}
                                >
                                    {tab}
                                </a>
                            ))}
                        </div>
                    </nav>
                </div>

                {/* ===== TAB CONTENT ===== */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="flex items-start gap-8">
                        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            {/* Left Image Placeholder */}
                            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                                    Container Ship Image
                                </div>
                            </div>
                            {/* Right Content */}
                            <div>
                                <p className="text-gray-600 mb-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat ipsum, maximus et nulla eu, accumsan vehicula nulla. Donec nunc leo, eleifend sit amet fringilla aliquam, molestie eget velit.
                                </p>
                                <button className="bg-brand-green text-white font-semibold px-6 py-2.5 rounded-md hover:bg-opacity-90 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        {/* Accordion Arrow */}
                        <button className="text-gray-400 hover:text-gray-600">
                            <ChevronDown size={24} />
                        </button>
                    </div>
                </section>

                {/* ===== ACHIEVEMENTS ===== */}
                <section className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="flex flex-col gap-4">
                            <span className="text-lg font-semibold text-brand-blue">Our</span>
                            <h2 className="text-5xl font-extrabold text-gray-900">
                                ACHIEVEMENTS
                            </h2>
                            <p className="text-gray-600">
                                We strive to continuously improve every year with a focus on standardization, cost-out, expanding logical capabilities, and maximizing service quality.
                            </p>
                        </div>
                        {/* Right Stats Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {stats.map((stat) => (
                                <StatCard key={stat.label} value={stat.value} label={stat.label} Icon={stat.icon} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== TESTIMONIALS ===== */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-4">
                            <h2 className="text-3xl font-bold text-gray-900">Customer Testimonies</h2>
                        </div>
                        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, maximus et nulla eu, accumsan vehicula nulla. Donec nunc leo, eleifend sit amet fringilla aliquam, molestie eget velit
                        </p>
                        <div className="flex overflow-x-auto space-x-6 pb-4 horizontal-scroll">
                            {testimonials.map((item, index) => (
                                <TestimonialCard key={index} quote={item.quote} author={item.author} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== FEATURED (Blog + Highlights) ===== */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Left Column: Blog Post */}
                        <div className="flex flex-col justify-center">
                            <h3 className="text-3xl font-bold text-gray-900 mb-3">
                                Lorem ipsum dolor sit amet,
                            </h3>
                            <div className="text-sm text-gray-500 mb-1">10/25/2025</div>
                            <div className="text-sm font-semibold text-gray-700 mb-4">
                                Author Name | ROLE - XXXX
                            </div>
                            <a
                                href="#"
                                className="flex items-center gap-2 text-brand-blue font-semibold hover:underline"
                            >
                                Read More <ArrowRight size={18} />
                            </a>
                        </div>
                        {/* Right Column: Image + Service Highlights */}
                        <div className="flex flex-col gap-8">
                            {/* Image Placeholder */}
                            <div className="w-full h-80 bg-gray-200 rounded-lg"></div>
                            {/* Service Highlights */}
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                                    Service <span className="font-extralight">HIGHLIGHTS</span>
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat ipsum.
                                </p>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 text-brand-blue font-semibold hover:underline"
                                >
                                    Read More <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== OPEX STORIES ===== */}
                <section className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Our Stories in OPEX
                            </h2>
                            <div className="flex gap-2">
                                <button className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">
                                    <ChevronLeft size={20} />
                                </button>
                                <button className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="flex overflow-x-auto space-x-6 pb-4 horizontal-scroll">
                            {stories.map((story) => (
                                <StoryCard key={story.title} {...story} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* ===== FOOTER ===== */}
            <footer className="bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Left Side: Logo and Slogan */}
                        <div className="flex items-center gap-4">
                            <Logo />
                            <div className="w-px h-12 bg-gray-300 hidden md:block"></div>
                            <span className="text-gray-600 text-sm max-w-[150px]">
                                We Engineer the Routes where Commerce Flows Freely
                            </span>
                        </div>
                        {/* Right Side: Links */}
                        <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-semibold text-gray-700">
                            <a href="#" className="hover:text-brand-blue">About Us</a>
                            <a href="#" className="hover:text-brand-blue">OSD3</a>
                            <a href="#" className="hover:text-brand-blue">OSD6</a>
                            <a href="#" className="hover:text-brand-blue">Service Portfolio</a>
                        </nav>
                    </div>
                </div>
            </footer>

            {/* ===== SCROLL TO TOP BUTTON ===== */}
            <div className="fixed bottom-6 right-6 z-50">
                {isVisible && (
                    <button
                        onClick={scrollToTop}
                        className="p-3 rounded-full bg-gray-700 text-white shadow-lg hover:bg-gray-900 transition-all"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={20} />
                    </button>
                )}
            </div>
        </>
    );
}