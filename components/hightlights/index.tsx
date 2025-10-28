'use client'
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui/button';
import StoryCardsSection from '../story_cards_section';


const Highlights = () => {
    const [index, setIndex] = useState(0)
    return (
        <>
            <section >
                <div className="flex gap-8">
                    <div className='grid grid-cols-1 items-start gap-2 md:grid-cols-12 md:gap-2 w-2/3'>
                        <div className="flex flex-col col-span-5 h-full">
                            <div className="mb-3 flex items-start justify-between">
                                <h3 className="max-w-[250px] text-3xl font-bold leading-tight text-gray-900">
                                    Lorem ipsum dolor sit amet,
                                </h3>
                                <span className="shrink-0 pt-2 text-xs text-gray-500">10/25/2025</span>
                            </div>
                            <p className="mb-4 text-sm text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat ipsum, maximus et nulla eu, eleifend sit amet fringilla aliquam, molestie eget velit
                            </p>
                            <div className="mb-6 flex gap-4 text-sm font-semibold text-gray-500">
                                <span>#Collaboration</span>
                                <span>#OSD6</span>
                                <span>#OSD3</span>
                            </div>
                            <Button
                                variant={'outline'}
                                className="w-32 border-black px-4 py-2 mt-auto"
                            >
                                Read More
                                <ArrowRight size={16} />
                            </Button>
                        </div>



                        <Image alt='adsd' width={373} height={320} className="order-first object-center h-80 w-full md:order-none col-span-7" src="/images/be-likabosch.webp" />
                    </div>


                    <div className="flex flex-col w-1/3">
                        <h3 className="text-5xl font-light text-gray-900">
                            Service
                        </h3>
                        <h3 className="mb-4 text-5xl font-bold text-gray-900">
                            HIGHLIGHTS
                        </h3>
                        <p className="mb-6 text-lg text-gray-600 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat ipsum,
                        </p>
                        <Button
                            variant={'outline'}
                            className="w-32 border-black px-4 py-2"
                            onClick={() => {
                                setIndex(prev => {
                                    if (prev == 2) return 2
                                    return prev + 1
                                })
                            }}
                        >
                            See More
                            <span className="text-lg font-bold">+</span>
                        </Button>
                    </div>
                </div>
            </section>
            <div className={cn(index >= 1 ? 'block' : 'hidden')

            }>

                <StoryCardsSection />
            </div>
            <div className={cn(index == 2 ? 'block' : 'hidden')

            }>

                <StoryCardsSection />
            </div>
        </>
    )
};

export default Highlights;



