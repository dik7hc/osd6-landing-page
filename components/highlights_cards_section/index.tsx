import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import type { ServiceHighlight } from '@/lib/mdx';

interface HighlightsCardsSectionProps {
    highlights: ServiceHighlight[];
    amount?: number;
}

const HighlightsCardsSection = ({ highlights, amount }: HighlightsCardsSectionProps) => {

    const data = amount ? highlights.slice(0, amount) : highlights;
    return (
        <section className="bg-white py-0">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {data?.map((highlight) => (
                    <div key={highlight.slug} className="relative flex flex-col">
                        <Link href={`/service/${highlight.slug}`} className="group relative mb-3 overflow-hidden">
                            <Image
                                alt={highlight.frontmatter.title}
                                width={243}
                                height={160}
                                quality={50}
                                className="h-44 w-full object-cover transition-opacity duration-300 group-hover:opacity-30"
                                src={highlight.frontmatter.featuredImage || "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1757663285/be-likabosch_yet7y1.webp"}
                            />

                            <div className="absolute inset-0 flex items-start justify-start bg-gray-200 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="line-clamp-5 text-xs leading-relaxed text-gray-700">
                                    {highlight.frontmatter.description}
                                </p>
                            </div>
                        </Link>

                        <div className='flex grow flex-col justify-between'>

                            <div className="flex">
                                <h3 className="mb-2 line-clamp-2 pr-16 text-lg font-bold leading-snug text-gray-900" title={highlight.frontmatter.title}>
                                    {highlight.frontmatter.title}
                                </h3>
                                <span className="text-xs text-gray-500">
                                    {new Date(highlight.frontmatter.date).toLocaleDateString('en-US', {
                                        month: '2-digit',
                                        day: '2-digit',
                                        year: 'numeric',
                                    })}
                                </span>
                            </div>


                            <div className="flex items-end justify-between">
                                <div className="flex gap-2 text-xs font-semibold text-gray-500">
                                    {highlight.frontmatter.tags?.slice(0, 3).map((tag, i) => (
                                        <span key={i}>#{tag}</span>
                                    ))}
                                </div>

                                <Button className="px-3 py-1 text-xs" variant={'outline'} asChild>
                                    <Link href={`/service/${highlight.slug}`}>
                                        Read More
                                        <ArrowRight size={12} />
                                    </Link>
                                </Button>
                            </div>
                        </div>


                    </div>
                ))}
            </div>
        </section>
    );
};

export default HighlightsCardsSection;