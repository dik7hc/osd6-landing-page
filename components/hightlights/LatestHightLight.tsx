import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import type { ServiceHighlight } from '@/lib/mdx';

interface LatestHighlightProps {
    latestPost: ServiceHighlight;
}

const LastestHighlight = ({ latestPost }: LatestHighlightProps) => {

    return (
        <div className='grid w-full grid-cols-1 items-start gap-6 md:w-2/3 md:grid-cols-12 md:gap-4'>
         

            <div className="order-first col-span-12 md:order-none md:col-span-8">
                <Image
                    alt='TransPlan Hub Experience Day'
                    width={640}
                    height={320}
                    className="h-80 w-full object-cover object-center"
                    src={latestPost.frontmatter.featuredImage || ''}
                />
            </div>
            <div className="col-span-12 flex h-full flex-col md:col-span-4">
                <div className="mb-3 flex flex-col items-start justify-between">
                    <h3 className="max-w-[250px] text-2xl font-bold leading-tight text-gray-900">
                        {latestPost.frontmatter.title}
                    </h3>
                    <span className="shrink-0 pt-2 text-xs text-gray-500">{new Date(latestPost.frontmatter.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}</span>
                </div>
                <p className="mb-4 text-sm text-gray-600">
                    {latestPost.frontmatter.description}
                </p>
                <div className='flex h-full flex-col justify-between'>

                    <div className="mb-6 flex gap-4 text-sm font-semibold text-gray-500">
                        {latestPost.frontmatter.tags?.slice(0, 3).map((tag, index) => (
                            <span key={index}>#{tag}</span>
                        ))}
                    </div>

                    <Link href={`/service/${latestPost.slug}`}>
                        <Button variant={'outline'} className="mt-auto w-32 border-black px-4 py-2"
                        >
                            Read More
                            <ArrowRight size={16} />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LastestHighlight;
