import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { getAllOpexCoreValues, getOpexBySlug } from '@/lib/opex-mdx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const PageBreadcrumb = ({ title }: { title: string }) => {
    return <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbPage>Opex - {title}</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
}

const OpexLayout = async ({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ slug: string }>;
}>) => {
    const { slug } = await params;

    const allOpexValues = getAllOpexCoreValues();
    const currentValue = getOpexBySlug(slug);

    // Filter out current page and limit to 3
    const relatedValues = allOpexValues
        .filter(v => v.slug !== slug)
        .slice(0, 3);

    return (
        <main className="mx-auto max-w-7xl bg-white px-4 py-12 font-sans text-gray-800 sm:px-6 lg:px-8">
            <PageBreadcrumb title={currentValue?.frontmatter.title || "OPEX Value"} />
            {children}
            
        </main>
    );
};

export default OpexLayout;
