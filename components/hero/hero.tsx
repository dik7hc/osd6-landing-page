import { ChevronRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <section>
            <div className="cursor-pointer px-7 py-12 md:mt-5 md:px-20 md:py-14 xl:mt-20 2xl:px-96 3xl:px-[40rem]" >
                <h1 className='inline-flex text-3xl font-extrabold leading-3 hover:text-bosch_blue md:text-[4rem]'>
                    Live #LikeABosch
                    <ExternalLink className='md::h-12 -mt-4 md:w-12' />
                </h1>
            </div>
            <div className='flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-0 lg:grid-cols-4 lg:pr-10 xl:grid-cols-12 xl:gap-8 xl:pr-0 2xl:px-48 3xl:px-96'>
                <Image
                    alt='bosch-hero-section'
                    src={'https://www.bosch.com.vn/media/like_a_bosch/20230508_live_likeabosch/07_live_likeabosch_teaser_1920x1080_res_992x558.webp'}
                    width={800}
                    height={450}
                    className='md:col-span-1 lg:col-span-3 lg:shrink xl:col-span-7 xl:col-start-2 xl:w-full'
                    unoptimized

                />
                <div className='flex flex-col items-center gap-3 md:ml-14 md:items-start md:gap-4 lg:col-start-4 lg:ml-0 xl:col-span-3 xl:col-start-9'>
                    <Image
                        alt='bosch-hero-section'
                        src={'https://assets.bosch.com/media/global/stories/topic_worlds/hydrogen_energy/hydrogen-stage_res_400x225.webp'}
                        width={350}
                        height={200}
                        unoptimized
                    />

                    <span className='ml-3 inline-flex text-lg font-bold hover:cursor-pointer md:mb-4 md:ml-0'>Hydrogen — energy for the future&nbsp;<ExternalLink className='mt-1 size-5' /></span>
                    <span className='mb-1 ml-3 inline-flex text-bosch_blue underline hover:cursor-pointer md:mb-2 md:ml-0'>Khám phá các giải pháp của chúng tôi <ChevronRight strokeWidth={1} /></span>
                    <span className='mb-1 ml-3 inline-flex text-bosch_blue underline hover:cursor-pointer md:mb-2 md:ml-0'>Nghề nghiệp <ChevronRight strokeWidth={1} /></span>
                    <span className='mb-1 ml-3 inline-flex text-bosch_blue underline hover:cursor-pointer md:mb-2 md:ml-0'>Liên hệ <ChevronRight strokeWidth={1} /></span>
                </div>
            </div>
        </section>
    )
}

export default HeroSection