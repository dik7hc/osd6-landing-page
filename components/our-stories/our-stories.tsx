import Image from 'next/image'
import React from 'react'
import SectionHeader from '../section-header'
import { Button } from '../ui/button'
import { ExternalLink } from 'lucide-react'
import StoryCard from '../story-card/story-card'


const SpotlightStories = () => {
    return <div className='mb-10 grid grid-cols-1 gap-10 md:grid-cols-2'>
        <StoryCard />
        <StoryCard />
    </div>
}

const StoriesGrid = () => {
    return <>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3'>
            <StoryCard />
            <StoryCard />
            <StoryCard />
        </div>
        <div className="mt-10 flex w-full justify-center">
            <Button variant="outline" className='rounded-none border-bosch_blue text-bosch_blue hover:bg-blue-200 hover:text-bosch_blue'>Tải thêm</Button>
        </div>
    </>
}

const OurStories = () => {
    return (
        <section>
            <SectionHeader className='mb-10'>Những câu chuyện</SectionHeader>
            <SpotlightStories />
            <StoriesGrid />
        </section>
    )
}

export default OurStories