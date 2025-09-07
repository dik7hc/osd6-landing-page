import Image from 'next/image';
import BannerStack from '../banner-stack/BannerStack';
const HeroSection = () => {
  return (
    <section className='relative'>
      <Image
        alt='GS_grey_withstars'
        src={'/images/GS_grey_withstars.png'}
        width={50}
        height={80}
        className='md:right-[6rem] md:top-0 2xl:right-[25rem] 2xl:-top-2 hidden md:absolute md:block'
        priority

      />
      <div className="flex flex-col gap-4 px-7 py-8 md:px-20 md:pb-14 2xl:px-96 3xl:px-[40rem]" >
        <h6 className="text-center text-2xl tracking-tighter sm:tracking-normal">Welcome To GS/OSD3 & GS/OSD6 Vietnam </h6>
        <div className='group'>
          <h1 className='text-center text-2xl sm:text-[3rem] md:text-[3.9rem] font-extralight md:leading-3 tracking-tighter group-hover:text-bosch_blue md:mt-10 lg:text-[4rem]'>
            Global Service
            {/* <ExternalLink className='md::h-12 -mt-4 md:w-12' /> */}
          </h1>
          <h1 className='text-center text-2xl sm:text-[3rem] md:text-[3.9rem] font-extralight md:leading-3 tracking-tighter group-hover:text-bosch_blue md:mt-12 lg:text-[4rem]'>
            Operation Source To Deliver
          </h1>
        </div>
      </div>
      <div className='md:mt-16 flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-0 lg:grid-cols-4 lg:pr-10 xl:grid-cols-12 xl:gap-0 xl:pr-0 2xl:px-96 3xl:px-[40rem]'>
        <Image
          alt='bosch-hero-section'
          src={'/images/be-likabosch.webp'}
          width={1600}
          height={900}
          className='sm:min-h-[25.5rem] md:col-span-1 lg:col-span-3 lg:shrink xl:col-span-7 xl:col-start-1 xl:w-full'
          priority

        />
        <div className="mx-auto max-w-md space-y-3 bg-transparent p-4 md:min-w-[30rem]">
          <BannerStack />
        </div>
      </div>

    </section>
  )
}

export default HeroSection
