import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import HighlightsCardsSection from '@/components/highlights_cards_section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Service Highlights | GS/OSD Vietnam',
    description: 'GS/OSD3 & GS/OSD6 Vietnam teams are parts of the GS/OSD organization, specialized in Global Transportation and Planning services.',
};

const filterTags = [
    'L&D', 'OSD6', 'Leadership', 'Transparency',
    'OSD3', 'UX', 'Digi', 'Collaboration',
    'ProcessOrchestration', 'ServiceMindset',
    'Continuous Improvements', 'Standardization',
    'Accountability'
];

interface ServiceHighlightsPageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PagerBreadCrumb = () => {
    return (<Breadcrumb className="mb-8">
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbPage>Service Highlights</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>)
}

const ServiceHighlightsPage = async ({ searchParams }: ServiceHighlightsPageProps) => {
    const params = await searchParams;
    const filtersParam = params.filters;
    const selectedFilters = typeof filtersParam === 'string'
        ? decodeURIComponent(filtersParam).split(',').filter(Boolean)
        : Array.isArray(filtersParam)
            ? filtersParam.map(f => decodeURIComponent(f))
            : [];

    return (
        <div className="px-4 py-6 md:px-6 md:py-8 xl:px-20 xl:py-10 2xl:px-96 3xl:px-[40rem]">
            <PagerBreadCrumb />
            <section className='mb-12 text-left text-foreground'>
                <h1 className="mb-4 text-5xl font-bold leading-tight">
                    Service Highlights
                </h1>
                <p className="mb-8 text-base leading-relaxed text-gray-700">
                    GS/OSD3 & GS/OSD6 Vietnam teams are parts of the GS/OSD organization, specialized in Global Transportation and Planning services.
                </p>
            </section>

            <div className='mb-16 grid grid-cols-1 gap-10 lg:grid-cols-12'>
                <aside className='lg:col-span-3'>
                    <h2 className="mb-4 text-lg font-semibold">Filters</h2>
                    <div className="flex flex-wrap gap-2">
                        {filterTags.map((tag) => {
                            const isSelected = selectedFilters.includes(tag);
                            const newFilters = isSelected
                                ? selectedFilters.filter(t => t !== tag)
                                : [...selectedFilters, tag];
                            const href = newFilters.length > 0
                                ? `/service?filters=${encodeURIComponent(newFilters.join(','))}`
                                : '/service';

                            return (
                                <Link
                                    key={tag}
                                    href={href}
                                    className={`border border-gray-800 px-3 py-1 text-xs font-medium transition-colors ${isSelected
                                        ? 'bg-gray-800 text-white'
                                        : 'bg-white text-gray-800 hover:bg-gray-100'
                                        }`}
                                >
                                    &#35;{tag}
                                </Link>
                            );
                        })}
                    </div>
                </aside>

                <div className='lg:col-span-9'>
                    <div className="mb-4 flex flex-col gap-6 md:flex-row">
                        <div className="flex-1">
                            <div className="mb-3 flex items-start justify-between">
                                <h3 className="text-2xl font-bold leading-tight text-gray-900">
                                    Lorem ipsum dolor sit amet,
                                </h3>
                                <span className="ml-4 shrink-0 text-xs text-gray-500">10/22/2025</span>
                            </div>
                            <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula ante metus odio tristique id. Sed in lorem nunc. Duis eget erat in lorem posuere velit. Morbi sed nisi sed dolor sem. Fusce placerat, lacinia et non pretium. Fusce convallis suscipit sit nec pharetra.
                            </p>
                            <div className="mb-4 flex gap-3 text-xs font-semibold text-gray-500">
                                <span>#Collaboration</span>
                                <span>#OSD6</span>
                                <span>#OSD3</span>
                            </div>
                            <Button variant={'outline'} className="px-4 py-2 text-xs">
                                Read More
                                <ArrowRight size={14} />
                            </Button>
                        </div>
                        <div className="md:w-[60%]">
                            <Image
                                alt="Featured highlight"
                                width={320}
                                height={200}
                                className="h-full w-full object-cover"
                                src="https://res.cloudinary.com/dr9bxbmwi/image/upload/v1757663285/be-likabosch_yet7y1.webp"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <HighlightsCardsSection />
        </div>
    );
};

export default ServiceHighlightsPage;
