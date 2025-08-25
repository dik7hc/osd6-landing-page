import { ChevronRight } from 'lucide-react';
import Image from 'next/image'
export interface NewsProps {
    imageAlt?: string,
    img: string,
    title: string,
    createdAt?: string
}
function NewsCard({ createdAt, img, title, imageAlt }: NewsProps) {
    return (
        <div className="flex flex-col border shadow-sm hover:cursor-pointer hover:text-bosch_blue">
            <a href="#">
                <Image
                    src={img}
                    alt={imageAlt ?? "News cover"}
                    width={350}
                    height={200}
                    className="w-full h-auto object-cover border-b" 
                    unoptimized
                />
            </a>
            <div className="flex flex-col gap-2 p-3">
                <time className="text-xs">{createdAt}</time>
                <p className="text-xl font-semibold">{title}</p>
                <span className="flex items-center text-sm">
                    Đọc thêm <ChevronRight size={16} className="ml-1" />
                </span>
            </div>
        </div>

    );
}

export default NewsCard