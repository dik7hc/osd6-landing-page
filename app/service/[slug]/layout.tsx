import HighlightsCardsSection from '@/components/highlights_cards_section';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PageBreadcrumb = ({ slug }: { slug: string }) => {
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
                <BreadcrumbPage>Title</BreadcrumbPage>
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
    return (
        <main className="mx-auto max-w-7xl bg-white px-4 py-12 font-sans text-gray-800 sm:px-6 lg:px-8">
            <PageBreadcrumb slug={slug} />
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
            <HighlightsCardsSection amount={3} />
        </main>
    )
}

export default ServiceHighlightsLayout