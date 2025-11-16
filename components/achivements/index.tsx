import Image from 'next/image';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import Mock from '@/lib/mock-data';

// Available SVG icons from public/svg folder
const svgIcons = [
    '/svg/icon 1 - color.svg',
    '/svg/icon 2 - color.svg',
    '/svg/icon 3 - color.svg',
    '/svg/icon 4 - color.svg',
    '/svg/icon 5 - color.svg',
    '/svg/icon 6 - color.svg',
];

const stats = [
    { value: "80+", label: "Associates", icon: '/svg/icon 1 - color.svg' },
    { value: ">30%", label: "YTY Growth", icon: "/svg/icon 2 - color.svg" },
    { value: "20+", label: "Entities", icon: "/svg/icon 3 - color.svg" },
    { value: ">4.5", label: "VoC Rating", icon: "/svg/icon 4 - color.svg" },
    { value: ">5K", label: "Euro Savings", icon: '/svg/icon 5 - color.svg' },
    { value: "+30%", label: "Productivity", icon: "/svg/icon 6 - color.svg" },
];
const StatCard = ({ value, label, icon }: { value: string, label: string, icon: string }) => (
    <div className="flex items-center justify-between border border-gray-200 p-4 shadow-sm">
        <div>
            <div className="text-4xl font-semibold text-gray-700">{value}</div>
            <div className="text-base text-gray-500">{label}</div>
        </div>
        <div className="flex items-center gap-1 text-gray-400">
            <Image
                src={icon}
                alt={`${label} icon`}
                width={28}
                height={28}
                className="size-12"
            />
        </div>
    </div>
)


const Testimonials = () => {
    return <section className="mt-6 py-16">
        <div className="mb-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Customer Testimonies</h2>
        </div>
        <p className="mx-auto mb-8 max-w-5xl text-center text-gray-600">
            We honor and appreciate our customers’ feedback, which motivates us to continuously improve and serve with excellence.</p>
            <InfiniteMovingCards
                items={Mock.Testimonials}
                direction="left"
                speed="slow"
            />
    </section>
}
const Achievements = () => {
    return (
        <section>
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 ">
                {/* Left Content */}
                <div className="flex flex-col gap-4 text-5xl">
                    <h2>

                        <span className="font-light">Our</span>
                        <span className=" mt-4 block font-extrabold text-gray-900">
                            ACHIEVEMENTS
                        </span>
                    </h2>
                    <p className="mt-10 text-lg text-gray-600">
                        We strive to continuously improve every year with a focus on standardization, cost-out, expanding logical capabilities, and maximizing service quality.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {stats.map((stat) => (
                        <StatCard key={stat.label} value={stat.value} label={stat.label} icon={stat.icon} />
                    ))}
                </div>
            </div>
            <Testimonials />
        </section>
    );
};

export default Achievements;