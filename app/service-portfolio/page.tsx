import Header from '@/components/header';
import Mock from '@/lib/mock-data';
import { MailIcon } from 'lucide-react';
import Image from 'next/image';

export interface SolutionProps {
    imageAlt?: string,
    img: string,
    title: string,
    description: string
}

const SolutionFindOutMoreLink = () => {
    return (<a href="#" className='inline-flex text-bosch_blue hover:cursor-pointer' aria-label="Tìm hiểu về giải pháp thiết bị điện gia dụng của Bosch">
        {/* <span className='mb-2 underline'>Tìm hiểu về giải pháp</span>&nbsp;<ExternalLink className='mt-1 size-4' /> */}
    </a>)
}

const Solution = ({ description, img, title, imageAlt }: SolutionProps) => {
    return <article className='flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between even:lg:flex-row-reverse'>
        <Image
            alt={imageAlt ?? 'Bosch hydrogen energy solutions - clean energy for the future'}
            src={img}
            width={550}
            height={300}
            unoptimized
            className='w-full shadow-lg lg:flex-1 2xl:w-1/2 3xl:flex-1'
        />
        <div className='flex flex-col gap-2 md:gap-6 md:px-12 lg:flex-1 lg:px-0 2xl:mb-0'>
            <div>
                <h3 className='text-3xl font-semibold tracking-wide'>{title}</h3>
            </div>
            <p>{description}</p>
            {/* <SolutionFindOutMoreLink /> */}
            {/* <Button variant={'secondary'} className='w-1/4 bg-bosch_blue/70 shadow-lg' >See all news</Button> */}
        </div>

    </article>
}

const LeaderCard = ({ name, title, location, imageUrl }: { name: string, title: string, location: string, imageUrl: string }) => {
    return (
        <div className="my-4 flex max-w-lg items-center space-x-6 rounded-xl bg-white p-6 shadow-md">
            <div className="shrink-0">
                <img
                    className="size-24 rounded-full object-cover"
                    src={imageUrl}
                    alt={`Portrait of ${name}`}
                />
            </div>
            <div>
                <div className="text-xl font-semibold text-gray-900">
                    <span className="border-b-2 border-gray-300">{name}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{title}</p>
                <p className="text-xs text-gray-500">{location}</p>
                <div className="mt-2">
                    <MailIcon className="size-5 text-gray-500" />
                </div>
            </div>
        </div>
    );
};

const LeaderAndOrgChart = () => {
    return <>
        <h2 className="mb-8 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Meet Our Leader & Our Team
        </h2>
        <LeaderCard
            name="Hu Qian"
            title="Head of Department GS/OSD3 & GS/OSD6 Vietnam"
            location="HCM"
            imageUrl="/images/Hu_Qian.jpg"
        />
        <Image
            alt={'OrgChart'}
            src={"/images/VN_OSD_Org_Chart.png"}
            width={1920}
            height={1080}
            unoptimized
            className='w-full'
        />
    </>
}

const ServicePortfolioPage = () => {
    return <>
        <Header />
        <div className="px-4 py-0 md:px-6 md:py-2 xl:p-20 xl:pt-6 2xl:px-96 3xl:px-[40rem]" >
            <section className='mb-20 text-left text-foreground'>
                <h1 className="mb-4 text-5xl font-extrabold leading-tight md:text-6xl">
                    Our service portfolio
                </h1>
                {/* <p className="mb-6 text-lg font-light leading-relaxed md:text-xl">
                    Boston Consulting Group is a global consulting firm that partners with leaders in business and society to tackle their most important challenges and capture their greatest opportunities.
                </p> */}
            </section>
            <div className='mb-20 flex flex-col gap-12 lg:gap-20'>
                {Mock.Solutions.map((sol, i) => <Solution key={i} {...sol} />)}
            </div>
        </div>
    </>
};

export default ServicePortfolioPage;
