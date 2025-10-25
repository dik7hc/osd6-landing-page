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
        { quote: "Lorem ipsum dolor sit amet, consconsectetur adipiscing elit. Quisque erat ipsum, maximus et nulla eu, accumsan vehicectetur adipiscing elit. Quisque erat ipsum, maximus et nulla eu, accumsan vehicula nulla.", author: "J.S. Country" },
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
                <span className="text-brand-dark text-4xl font-bold">GS.</span>
                <span className="text-5xl font-extrabold" style={{ color: '#6a0dad' }}>
                    OSD<span className="text-brand-teal">%</span>
                </span>
            </div>
        );
    };

    const StatCard = ({ value, label, Icon }: { value: string, label: string, Icon: React.ElementType }) => (
        <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4 shadow-sm">
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
        <div className="w-72 shrink-0 rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">

            {/* 1. Corrected the invalid tag.
      2. Used blockquote for semantic HTML, which is best practice for testimonials.
    */}
            <blockquote className="mb-4 text-sm italic text-gray-600">
                &ldquo;{quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-3">
                {/* Placeholder for an actual avatar image */}
                <div className="flex size-10 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white">
                    {author.charAt(0)}
                </div>

                <div>
                    <div className="text-sm font-semibold text-gray-900">{author}</div>
                    {/* Used optional props with defaults */}
                    <div className="text-xs text-gray-500">{role}, {company}</div>
                </div>
            </div>
        </div>
    );

    const StoryCard = ({ category, title, color }: { category: string, title: string, color: string }) => (
        <div className="w-72 shrink-0 overflow-hidden rounded-lg border border-gray-200">
            <div className={`h-40 w-full ${color}`}></div>
            <div className="p-4">
                <div className="text-brand-blue mb-1 text-xs font-semibold">{category}</div>
                <h4 className="mb-2 text-lg font-bold text-gray-900">{title}</h4>
                <p className="mb-4 h-10 overflow-hidden text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <a href="#" className="text-brand-blue flex items-center justify-between text-sm font-semibold hover:underline">
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
            <header className="sticky top-0 z-50 bg-white shadow-sm">
                {/* Top color bar */}
                <div className="flex h-1.5">
                    <div className="bg-brand-teal flex-1"></div>
                    <div className="bg-brand-blue flex-1"></div>
                    <div className="bg-brand-dark flex-1"></div>
                </div>
                {/* Main navigation */}
                <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <Logo />
                        <div>
                            <span className="text-xl font-bold text-blue-700">BOSCH</span>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                {/* ===== HERO ===== */}
                <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
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
                                className="text-brand-blue flex items-center gap-2 font-semibold hover:underline"
                            >
                                About Us <ArrowRight size={18} />
                            </a>
                        </div>
                        {/* Right Placeholder */}
                        <div className="h-80 w-full rounded-lg bg-gray-200"></div>
                    </div>
                </section>

                {/* ===== TABS ===== */}
                <div className="border-b border-gray-200">
                    <nav className="mx-auto -mb-px max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="horizontal-scroll flex space-x-8 overflow-x-auto">
                            {tabs.map((tab, index) => (
                                <a
                                    key={tab}
                                    href="#"
                                    className={`whitespace-nowrap px-1 py-4 text-sm font-medium
                    ${index === 0
                                            ? 'border-brand-blue text-brand-blue border-b-2'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
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
                <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="flex items-start gap-8">
                        <div className="grid grow grid-cols-1 items-center gap-12 md:grid-cols-2">
                            {/* Left Image Placeholder */}
                            <div className="h-64 w-full overflow-hidden rounded-lg bg-gray-200">
                                <div className="flex size-full items-center justify-center bg-gray-300 text-gray-500">
                                    Container Ship Image
                                </div>
                            </div>
                            {/* Right Content */}
                            <div>
                                <p className="mb-6 text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat ipsum, maximus et nulla eu, accumsan vehicula nulla. Donec nunc leo, eleifend sit amet fringilla aliquam, molestie eget velit.
                                </p>
                                <button className="bg-brand-green rounded-md px-6 py-2.5 font-semibold text-white transition-colors hover:bg-opacity-90">
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
                    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
                        {/* Left Content */}
                        <div className="flex flex-col gap-4">
                            <span className="text-brand-blue text-lg font-semibold">Our</span>
                            <h2 className="text-5xl font-extrabold text-gray-900">
                                ACHIEVEMENTS
                            </h2>
                            <p className="text-gray-600">
                                We strive to continuously improve every year with a focus on standardization, cost-out, expanding logical capabilities, and maximizing service quality.
                            </p>
                        </div>
                        {/* Right Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            {stats.map((stat) => (
                                <StatCard key={stat.label} value={stat.value} label={stat.label} Icon={stat.icon} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== TESTIMONIALS ===== */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-4 text-center">
                            <h2 className="text-3xl font-bold text-gray-900">Customer Testimonies</h2>
                        </div>
                        <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, maximus et nulla eu, accumsan vehicula nulla. Donec nunc leo, eleifend sit amet fringilla aliquam, molestie eget velit
                        </p>
                        <div className="horizontal-scroll flex space-x-6 overflow-x-auto pb-4">
                            {testimonials.map((item, index) => (
                                <TestimonialCard key={index} quote={item.quote} author={item.author} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== FEATURED (Blog + Highlights) ===== */}
                <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                        {/* Left Column: Blog Post */}
                        <div className="flex flex-col justify-center">
                            <h3 className="mb-3 text-3xl font-bold text-gray-900">
                                Lorem ipsum dolor sit amet,
                            </h3>
                            <div className="mb-1 text-sm text-gray-500">10/25/2025</div>
                            <div className="mb-4 text-sm font-semibold text-gray-700">
                                Author Name | ROLE - XXXX
                            </div>
                            <a
                                href="#"
                                className="text-brand-blue flex items-center gap-2 font-semibold hover:underline"
                            >
                                Read More <ArrowRight size={18} />
                            </a>
                        </div>
                        {/* Right Column: Image + Service Highlights */}
                        <div className="flex flex-col gap-8">
                            {/* Image Placeholder */}
                            <div className="h-80 w-full rounded-lg bg-gray-200"></div>
                            {/* Service Highlights */}
                            <div>
                                <h3 className="mb-3 text-3xl font-bold text-gray-900">
                                    Service <span className="font-extralight">HIGHLIGHTS</span>
                                </h3>
                                <p className="mb-4 text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat ipsum.
                                </p>
                                <a
                                    href="#"
                                    className="text-brand-blue flex items-center gap-2 font-semibold hover:underline"
                                >
                                    Read More <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== FEATURED (Blog + Highlights) ===== */}
                <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    {/* Changed to 3 columns and aligned items to the top */}
                    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3 md:gap-12">

                        {/* Left Column: Blog Post */}
                        <div className="flex flex-col">
                            <div className="mb-3 flex items-start justify-between">
                                <h3 className="max-w-[250px] text-3xl font-bold leading-tight text-gray-900">
                                    Lorem ipsum dolor sit amet,
                                </h3>
                                <span className="shrink-0 pt-2 text-xs text-gray-500">10/25/2025</span>
                            </div>
                            <p className="mb-4 text-sm text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat ipsum, maximus et nulla eu, eleifend sit amet fringilla aliquam, molestie eget velit
                            </p>
                            <div className="mb-6 flex gap-4 text-sm font-semibold text-gray-500">
                                <span>#Collaboration</span>
                                <span>#OSD6</span>
                                <span>#OSD3</span>
                            </div>
                            <a
                                href="#"
                                className="flex w-32 items-center justify-between rounded border border-gray-400 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                            >
                                Read More
                                <ArrowRight size={16} />
                            </a>
                        </div>

                        {/* Center Column: Image Placeholder */}
                        {/* On mobile, this image appears first */}
                        <div className="order-first h-80 w-full rounded-lg bg-gray-200 md:order-none">
                            {/* This is the image placeholder */}
                        </div>

                        {/* Right Column: Service Highlights */}
                        <div className="flex flex-col">
                            <h3 className="text-4xl font-light text-gray-900">
                                Service
                            </h3>
                            <h3 className="mb-4 text-4xl font-bold text-gray-900">
                                HIGHLIGHTS
                            </h3>
                            <p className="mb-6 text-sm text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat ipsum,
                            </p>
                            <a
                                href="#"
                                className="flex w-32 items-center gap-2 rounded border border-gray-400 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                            >
                                See More
                                <span className="text-lg font-bold">+</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* ===== OPEX STORIES ===== */}
                <section className="bg-gray-50 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-8 flex items-center justify-between">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Our Stories in OPEX
                            </h2>
                            <div className="flex gap-2">
                                <button className="rounded-full border border-gray-300 p-2 text-gray-600 hover:bg-gray-100">
                                    <ChevronLeft size={20} />
                                </button>
                                <button className="rounded-full border border-gray-300 p-2 text-gray-600 hover:bg-gray-100">
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="horizontal-scroll flex space-x-6 overflow-x-auto pb-4">
                            {stories.map((story) => (
                                <StoryCard key={story.title} {...story} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* ===== FOOTER ===== */}
            <footer className="border-t border-gray-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                        {/* Left Side: Logo and Slogan */}
                        <div className="flex items-center gap-4">
                            <Logo />
                            <div className="hidden h-12 w-px bg-gray-300 md:block"></div>
                            <span className="max-w-[150px] text-sm text-gray-600">
                                We Engineer the Routes where Commerce Flows Freely
                            </span>
                        </div>
                        {/* Right Side: Links */}
                        <nav className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-gray-700 md:justify-end">
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
                        className="rounded-full bg-gray-700 p-3 text-white shadow-lg transition-all hover:bg-gray-900"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={20} />
                    </button>
                )}
            </div>
        </>
    );
}