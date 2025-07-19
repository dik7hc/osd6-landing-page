import Mock from "@/lib/mock-data"
import NewsCard, { NewsProps } from "../news-card/news-card"
import SectionHeader from "../section-header"
import { Button } from "../ui/button"

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
        <section>
            <SectionHeader className='mb-10'>Tin tức</SectionHeader>
            <NewsGrid news={Mock.News}/>
        </section>
    )
}

export default News