import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllOpexSlugs, getOpexBySlug } from '@/lib/opex-mdx';
import { getMDXComponents } from '@/mdx-components';
import Image from 'next/image';

interface OpexPageProps {
    params: Promise<{ slug: string }>;
}

const mdxComponents = getMDXComponents({});

export async function generateStaticParams() {
    const slugs = getAllOpexSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: OpexPageProps): Promise<Metadata> {
    const { slug } = await params;
    const opexValue = getOpexBySlug(slug);

    if (!opexValue) {
        return {
            title: 'GS/OSD | Bosch tại Việt Nam',
        };
    }

    return {
        title: `${opexValue.frontmatter.title} | OPEX Values | GS/OSD | Bosch tại Việt Nam`,
        description: opexValue.frontmatter.description,
    };
}

const OpexPage = async ({ params }: OpexPageProps) => {
    const { slug } = await params;
    const opexValue = getOpexBySlug(slug);

    if (!opexValue) {
        notFound();
    }

    const { frontmatter, content } = opexValue;

    return (
        <>
                    <div className="my-8 flex items-start justify-between">
                        <div>
                            <h1 className="text-5xl font-bold">{frontmatter.title}</h1>
                            <p className="mt-4 text-lg tracking-tight text-gray-600">
                                {frontmatter.description}
                            </p>
                        </div>
                        {/* <span className="shrink-0 pt-4 text-gray-500">
                            {new Date(frontmatter.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </span> */}
                    </div>
        
                    <div className="leading-relaxed text-gray-700">
                        <div className="prose prose-gray max-w-none">
                            <MDXRemote source={content} components={mdxComponents} />
                        </div>
        
                        <div className="clear-both"></div>
                    </div>
        
                    {/* <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-4">
                        <p className="text-gray-600">{frontmatter.author || 'GS/OSD Team'}</p>
                        {frontmatter.tags && frontmatter.tags.length > 0 && (
                            <div className="flex gap-4 text-gray-500">
                                {frontmatter.tags.map((tag, i) => (
                                    <span key={i}>#{tag}</span>
                                ))}
                            </div>
                        )}
                    </div> */}
                </>
    );
};

export default OpexPage;
