import NewsCard from "../news-card/news-card"
import SectionHeader from "../section-header"
import { Button } from "../ui/button"

const NewsGrid = () => {
    return <>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
        <div className="mt-10 flex w-full justify-center">
            <Button variant="outline" className='rounded-none border-bosch_blue text-bosch_blue hover:bg-blue-200 hover:text-bosch_blue'>Tải thêm</Button>
        </div>
    </>
}

const News = () => {
    return (
        <section>
            <SectionHeader className='mb-10'>Tin tức</SectionHeader>
            <NewsGrid />
        </section>
    )
}

export default News