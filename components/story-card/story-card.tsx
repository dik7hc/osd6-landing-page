import { ChevronRight } from 'lucide-react';
import Image from 'next/image'
export interface StoryProps {
    imageAlt?: string,
    img: string,
    title: string, 
    subtitle?: string
}

function StoryCard({subtitle, img, title, imageAlt} : StoryProps) {
    return (
        <article className=" border border-slate-200 bg-gray-100 shadow-sm hover:cursor-pointer hover:text-bosch_blue dark:border-slate-800 dark:bg-slate-950">
            <a href="#">
                <Image
                    src={img}
                    alt={imageAlt ?? "Blog cover"}
                    width={400}
                    height={250}
                    className=" h-auto w-full object-cover"
                    unoptimized
                />
            </a>
            <div className="p-5">
                <span className='text-xs'>{subtitle ?? ""}</span>
                <div>
                    <span className='mb-3 flex text-xl font-bold'>{title}<ChevronRight size={16} className="ml-1 mt-2" /></span>
                </div>
            </div>
        </article>
    );
}

export default StoryCard