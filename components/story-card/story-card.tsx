import { ChevronRight } from 'lucide-react';
import Image from 'next/image'

function StoryCard() {
    return (
        <article className=" border border-slate-200 bg-gray-100 shadow-sm hover:cursor-pointer hover:text-bosch_blue dark:border-slate-800 dark:bg-slate-950">
            <a href="#">
                <Image
                    src={'https://www.bosch.com.vn/media/vn/stories/20220627_cw_decoding_tomorrow/decoding_tomorrow_teaser_1920x1080_res_1280x720.webp'}
                    alt="Blog cover"
                    width={400}
                    height={250}
                    className=" h-auto w-full object-cover"
                    unoptimized
                />
            </a>
            <div className="p-5">
                <span className='text-xs'>Giải mã tương lai</span>
                <div>
                    <span className='mb-3 flex text-xl font-bold'>Công nghệ Sáng tạo vì cuộc sống<ChevronRight size={16} className="ml-1 mt-2" /></span>
                </div>
            </div>
        </article>
    );
}

export default StoryCard