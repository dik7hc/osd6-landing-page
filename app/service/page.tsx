import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import HighlightsCardsSection from '@/components/highlights_cards_section';
import type { Metadata } from 'next';
import { getServiceHighlightsTags } from '@/lib/mdx';

export const metadata: Metadata = {
    title: 'Service Highlights | GS/OSD Vietnam',
    description: 'GS/OSD3 & GS/OSD6 Vietnam teams are parts of the GS/OSD organization, specialized in Global Transportation and Planning services.',
};

const filterTags = getServiceHighlightsTags();

interface ServiceHighlightsPageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const { getAllServiceHighlights } = await import('@/lib/mdx');
const allHighlights = getAllServiceHighlights();

const PagerBreadCrumb = () => {
    return (<Breadcrumb className="pt-12 mb-8">
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

const LatestHightlight = () => {
    const latestPost = allHighlights[0];
    return (
        <div className='lg:col-span-9'>
            <div className="mb-4 flex flex-col gap-6 md:flex-row">
                <div className="flex-1">
                    <div className="mb-3 flex items-start justify-between">
                        <h3 className="text-2xl font-bold leading-tight text-gray-900">
                            {latestPost.frontmatter.title}
                        </h3>
                        <span className="ml-4 shrink-0 text-xs text-gray-500">{new Date(latestPost.frontmatter.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}</span>
                    </div>
                    <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600" title={latestPost.frontmatter.description}>
                        {latestPost.frontmatter.description}
                    </p>
                    <div className="mb-4 flex gap-3 text-xs font-semibold text-gray-500">
                        {latestPost.frontmatter.tags?.slice(0, 3).map((tag, index) => (
                            <span key={index}>#{tag}</span>
                        ))}
                    </div>
                    <Link href={`/service/${latestPost.slug}`}>
                        <Button variant={'outline'} className="px-4 py-2 text-xs">
                            Read More
                            <ArrowRight size={14} />
                        </Button>
                    </Link>
                </div>
                <div className="md:w-3/5">
                    <Image
                        alt="Featured highlight"
                        width={320}
                        height={200}
                        className="h-[265px] w-full object-cover"
                        src={latestPost.frontmatter.featuredImage || ''}
                    />
                </div>
            </div>
        </div>
    )
}

const FiltersBtns = ({ selectedFilters }: { selectedFilters: string[] }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {filterTags.slice(0, 12).map((tag) => {
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
    )
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
        // <div className="px-4 py-6 md:px-6 md:py-8 xl:px-20 xl:py-10 2xl:px-96 3xl:px-[40rem]">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" >
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
                    <FiltersBtns selectedFilters={selectedFilters} />
                </aside>

                <LatestHightlight />
            </div>

            <HighlightsCardsSection highlights={allHighlights.slice(1, allHighlights.length)} />
        </div>
    );
};

export default ServiceHighlightsPage;
