import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import SectionHeader from '../section-header'
import Mock from '@/lib/mock-data'

export interface SolutionProps {
    imageAlt?: string,
    img: string,
    title: string, 
    description: string
}

const SolutionFindOutMoreLink = () => {
    return (<a href="#" className='inline-flex text-bosch_blue hover:cursor-pointer' aria-label="Tìm hiểu về giải pháp thiết bị điện gia dụng của Bosch">
        <span className='mb-2 underline'>Tìm hiểu về giải pháp</span>&nbsp;<ExternalLink className='mt-1 size-4' />
    </a>)
}

const Solution = ({description, img, title, imageAlt} : SolutionProps) => {
    return <article className='flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between even:lg:flex-row-reverse'>
        <Image
            alt={imageAlt ?? 'Bosch hydrogen energy solutions - clean energy for the future'}
            src={img}
            width={550}
            height={300}
            unoptimized
            className='w-full lg:flex-1 2xl:w-1/2 3xl:flex-1'
        />
        <div className='flex flex-col gap-2 md:gap-6 md:px-12 lg:flex-1 lg:gap-8 lg:px-0 2xl:mb-0'>
            <h3 className='text-2xl font-semibold tracking-wide md:text-3xl lg:text-4xl'>{title}</h3>
            <p>{description}</p>
            <SolutionFindOutMoreLink />
        </div>

    </article>
}

const OurSolutions = () => {
    
    return (
        <section className='flex flex-col gap-10 lg:gap-20' aria-labelledby="solutions-heading">
            <SectionHeader id="solutions-heading">Khám phá các giải pháp của chúng tôi</SectionHeader>
            <div className='flex flex-col gap-12 lg:gap-20'>
                {Mock.Solutions.map((sol, i) => <Solution key={i} {...sol}/>)}
            </div>
        </section>
    )
}

export default OurSolutions