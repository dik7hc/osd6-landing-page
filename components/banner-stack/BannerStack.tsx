import { ChevronDown } from 'lucide-react'
import Image from 'next/image';
import React from 'react'

export type BannerItem = {
    title: string;
    imageUrl: string;
    href?: string;
    onClick?: () => void;
}

function BannerCard({ title, imageUrl, href, onClick }: BannerItem) {
    const Wrapper = ({ children }: { children: React.ReactNode }) =>
        href ? (
            <a href={href} className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
                {children}
            </a>
        ) : (
            <button
                type="button"
                onClick={onClick}
                className="w-full rounded-xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
                {children}
            </button>
        );

    return (
        <Wrapper>
            <div className="group relative h-28 w-full overflow-hidden shadow-md md:h-28">
                <Image
                src={imageUrl}
                alt={title}
                fill
                quality={40}
                className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-brightness-75 transition-colors group-hover:bg-black/50" />
                <div className="relative z-10 flex h-full items-center justify-between px-4 md:px-6">
                <span className="text-lg font-extrabold uppercase tracking-wide text-white drop-shadow md:text-xl">
                    {title}
                </span>
                    <ChevronDown className="size-6 shrink-0 translate-x-0 text-white transition-transform group-hover:translate-x-1 md:size-7" />
                </div>
            </div>
        </Wrapper>
    );
}

/**
 * Vertical stack that mirrors the provided screenshot.
 */
function BannerStack() {
    const items: BannerItem[] = [
        {
            title: "Achievements",
            imageUrl:
                "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1600&auto=format&fit=crop",
            href: "#achievements",
        },
        {
            title: "Highlights of the month",
            imageUrl:
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1600&auto=format&fit=crop",
            href: "#highlights",
        },
        {
            title: "Operation Excellence",
            imageUrl:
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
            href: "#opex",
        },
    ];

    return (
        <>
            {items.map((item) => (
                <BannerCard key={item.title} {...item} />
            ))}
        </>
    );
}

export default BannerStack