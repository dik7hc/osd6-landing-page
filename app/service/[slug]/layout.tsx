import HighlightsCardsSection from '@/components/highlights_cards_section';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PageBreadcrumb = ({ title }: { title: string }) => {
    return <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href="/service">Service Highlights</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
}

const ServiceHighlightsLayout = async ({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ slug: string }>;
}>) => {
    const { slug } = await params;

    // Load highlights data server-side using dynamic import
    const { getAllServiceHighlights, getServiceHighlightBySlug } = await import('@/lib/mdx');
    const allHighlights = getAllServiceHighlights();

    // Filter out current page and limit to 3
    const highlights = allHighlights
        .filter(h => h.slug !== slug)
        .slice(0, 3);

    return (
        <main className="mx-auto max-w-7xl bg-white px-4 py-12 font-sans text-gray-800 sm:px-6 lg:px-8">
            <PageBreadcrumb title={getServiceHighlightBySlug(slug)?.frontmatter.title || "Title"} />
            {children}
            <div className="mt-20">
                <h2 className="mb-4 text-center text-3xl font-bold">Explore More</h2>
                <div className="mt-8 flex items-center justify-end gap-4">
                    <button
                        aria-label="Previous item"
                        className="rounded-md border p-2 text-gray-600 transition-colors hover:bg-gray-100"
                    >
                        <ChevronLeft className="size-6" />
                    </button>
                    <button
                        aria-label="Next item"
                        className="rounded-md border p-2 text-gray-600 transition-colors hover:bg-gray-100"
                    >
                        <ChevronRight className="size-6" />
                    </button>
                </div>
            </div>
            <HighlightsCardsSection amount={3} highlights={highlights} />
        </main>
    )
}

export default ServiceHighlightsLayout;