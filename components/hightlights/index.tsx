'use client'
import { cn } from '@/lib/utils';
import HighlightsCardsSection from '../highlights_cards_section';
import { Button } from '../ui/button';
import LastestHighlight from './LatestHightLight';
import { useState } from 'react';
import type { ServiceHighlight } from '@/lib/mdx';

interface HighlightsProps {
    highlights: ServiceHighlight[];
}

const Highlights = ({ highlights }: HighlightsProps) => {
    const [sliceIndex, setSliceIndex] = useState(1)

    return (
        <>
            <section>
                <div className="flex flex-col gap-8 md:flex-row">

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
                            className="mt-auto w-32 border-bosch_purple bg-bosch_purple px-4 py-2 text-white hover:bg-white hover:text-bosch_purple"
                            onClick={() => {
                                if (sliceIndex < highlights.length) {
                                    setSliceIndex(sliceIndex + 3)
                                }
                            }}
                        >
                            See More
                            <span className="text-lg font-bold">+</span>
                        </Button>
                    </div>
                    <LastestHighlight latestPost={highlights[0]} />

                </div>
            </section>

            <div className='mt-12'>
                <HighlightsCardsSection highlights={highlights.slice(1, sliceIndex)} />
            </div>
        </>
    )
};

export default Highlights;
