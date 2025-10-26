import { User } from 'lucide-react';
import SectionHeader from '../section-header';
import Image from 'next/image';

// Available SVG icons from public/svg folder
const svgIcons = [
    '/svg/icon 1 - color.svg',
    '/svg/icon 2 - color.svg',
    '/svg/icon 3 - color.svg',
    '/svg/icon 4 - color.svg',
    '/svg/icon 5 - color.svg',
    '/svg/icon 6 - color.svg',
];

// Randomly shuffle and assign icons to stats
const shuffledIcons = [...svgIcons].sort(() => Math.random() - 0.5);

const stats = [
    { value: "80+", label: "Associates", icon: shuffledIcons[0] },
    { value: ">30%", label: "OTS Saved", icon: shuffledIcons[1] },
    { value: "20+", label: "Projects", icon: shuffledIcons[2] },
    { value: ">4.5", label: "voC Rating", icon: shuffledIcons[3] },
    { value: ">5K", label: "Euro Savings", icon: shuffledIcons[4] },
    { value: "+30%", label: "Productivity", icon: shuffledIcons[5] },
];
const StatCard = ({ value, label, icon }: { value: string, label: string, icon: string }) => (
    <div className="flex items-center justify-between border border-gray-200 p-4  shadow-sm">
        <div>
            <div className="text-3xl font-bold text-gray-900">{value}</div>
            <div className="text-sm text-gray-500">{label}</div>
        </div>
        <div className="flex items-center gap-1 text-gray-400">
            <Image
                src={icon}
                alt={`${label} icon`}
                width={28}
                height={28}
                className="size-7"
            />
        </div>
    </div>
);

const testimonials = [
    { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat ipsum, maximus et nulla eu, accumsan vehicula nulla.", author: "J.S. Country" },
    { quote: "Donec nunc leo, eleifend sit amet fringilla aliquam, molestie eget velit. Praesent vitae nisl nec erat.", author: "A.B. Country" },
    { quote: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", author: "C.D. Country" },
    { quote: "Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.", author: "E.F. Country" },
    { quote: "Ut at dolor ac erat slagittis consecteur. Curabitur vel egestas dolor.", author: "G.H. Country" },
];

interface TestimonialCardProps {
    quote: string;
    author: string;
    role?: string;
    company?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role = "Role", company = "Company" }) => (
    <div className="flex w-72 shrink-0 flex-col justify-between bg-gray-200 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">

        <blockquote className="mb-4 text-sm italic text-gray-600">
            &ldquo;{quote}&rdquo;
        </blockquote>

        <div className="flex justify-end gap-3">
            <div>
                <div className="text-sm font-semibold text-gray-900">{author}</div>
                <div className="text-xs text-gray-500">{role}, {company}</div>
            </div>
        </div>
    </div>
);

const Testimonial = () => {
    return <section className="mt-6 py-16">
        <div className="mb-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Customer Testimonies</h2>
        </div>
        <p className="mx-auto mb-8 max-w-5xl text-center text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat ipsum, maximus et nulla eu, accumsan vehicula nulla. Donec nunc leo, eleifend sit amet fringilla aliquam, molestie eget velit            </p>
        <div className="flex space-x-6 overflow-x-hidden pb-4 ">
            {testimonials.map((item, index) => (
                <TestimonialCard key={index} quote={item.quote} author={item.author} />
            ))}
        </div>
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
            <Testimonial />
        </section>
    );
};

export default Achievements;