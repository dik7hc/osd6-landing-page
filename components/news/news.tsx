import Mock from "@/lib/mock-data"
import NewsCard, { NewsProps } from "../news-card/news-card"
import SectionHeader from "../section-header"
import { Button } from "../ui/button"
import CarouselWithProgress from "../news-carousel"

const NewsGrid = ({news} : {news: NewsProps[]}) => {
    return <>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {
                news.map((news, i) => <NewsCard key={i} {...news}/>)
            }
        </div>
        <div className="mt-10 flex w-full justify-center">
            <Button variant="outline" className='rounded-none border-bosch_blue text-bosch_blue hover:bg-blue-200 hover:text-bosch_blue'>Tải thêm</Button>
        </div>
    </>
}

const News = () => {
    return (
        <section id="highlights">
            <SectionHeader className='mb-10'>Highlights of the month</SectionHeader>
            {/* <NewsGrid news={Mock.News}/> */}
            <CarouselWithProgress />
        </section>
    )
}

export default News