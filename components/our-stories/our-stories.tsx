import Mock from '@/lib/mock-data'
import SectionHeader from '../section-header'
import StoryCard, { StoryProps } from '../story-card/story-card'
import { Button } from '../ui/button'

const SpotlightStories = ({stories} : {stories: StoryProps[]}) => {
    const [spotlight1, spotlight2] = stories
    return <div className='mb-10 grid grid-cols-1 gap-10 md:grid-cols-2'>
        <StoryCard {...spotlight1}/>
        <StoryCard {...spotlight2}/>
    </div>
}

const StoriesGrid = ({stories} : {stories: StoryProps[]}) => {
    return <>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3'>
            {
                stories.map((story, i) => <StoryCard key={i} {...story}/>)
            }
        </div>
        <div className="mt-10 flex w-full justify-center">
            <Button variant="outline" className='rounded-none border-bosch_blue text-bosch_blue hover:bg-blue-200 hover:text-bosch_blue'>Tải thêm</Button>
        </div>
    </>
}

const OurStories = () => {
    const [spotlight1, spotlight2 , ...stories] = Mock.Stories
    return (
        <section>
            <SectionHeader className='mb-10'>Những câu chuyện</SectionHeader>
            <SpotlightStories stories={[spotlight1, spotlight2]}/>
            <StoriesGrid stories={stories}/>
        </section>
    )
}

export default OurStories