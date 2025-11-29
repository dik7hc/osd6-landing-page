'use client'
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui/button';
import HighlightsCardsSection from '../highlights_cards_section';

const LastestHighlight = () => {
    return (
        <div className='grid w-full grid-cols-1 items-start gap-6 md:w-2/3 md:grid-cols-12 md:gap-4'>
            <div className="col-span-12 md:col-span-4 flex h-full flex-col">
                <div className="mb-3 flex items-start justify-between">
                    <h3 className="max-w-[250px] text-2xl font-bold leading-tight text-gray-900">
                        TransPlan Hub Experience Day
                    </h3>
                    <span className="shrink-0 pt-2 text-xs text-gray-500">10/25/2025</span>
                </div>
                <p className="mb-4 text-sm text-gray-600">
                    On September 9th, 2025, our department has hosted an experience day, where we showcased our services to other departments in RBVN.
                </p>
                <div className="mb-6 flex gap-4 text-sm font-semibold text-gray-500">
                    <span>#Collaboration</span>
                    <span>#OSD6</span>
                    <span>#OSD3</span>
                </div>
                <Button
                    variant={'outline'}
                    className="mt-auto w-32 border-black px-4 py-2"
                >
                    Read More
                    <ArrowRight size={16} />
                </Button>
            </div>

            <div className="order-first col-span-12 md:col-span-8 md:order-none">
                <Image
                    alt='TransPlan Hub Experience Day'
                    width={640}
                    height={320}
                    className="h-80 w-full object-cover object-center"
                    src="https://res.cloudinary.com/dr9bxbmwi/image/upload/v1761726410/TransPlan_final_trial_ld6adw.jpg"
                />
            </div>
        </div>
    )
}

const Highlights = () => {
    const [index, setIndex] = useState(0)

    return (
        <>
            <section>
                <div className="flex flex-col gap-8 md:flex-row">
                    <LastestHighlight />

                    <div className="flex w-full flex-col md:w-1/3">
                        <h3 className="text-5xl font-light text-gray-900">
                            Service
                        </h3>
                        <h3 className="mb-4 text-5xl font-bold text-gray-900">
                            HIGHLIGHTS
                        </h3>
                        <p className="mb-6 text-lg text-gray-600">
                            This is the dedicated space where we publish articles and features that promote the diverse skills and deep expertise of our committed team members.
                        </p>
                        <Button
                            variant={'outline'}
                            className="w-32 px-4 py-2 mt-auto"
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

            <div className={cn(index >= 1 ? 'block' : 'hidden')}>
                <HighlightsCardsSection />
            </div>

            <div className={cn(index == 2 ? 'block' : 'hidden')}>
                <HighlightsCardsSection />
            </div>
        </>
    )
};

export default Highlights;
