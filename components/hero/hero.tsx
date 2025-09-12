import Image from 'next/image';
import BannerStack from '../banner-stack/BannerStack';
const HeroSection = () => {
  return (
    <section className='relative'>
      <Image
        alt='GS_grey_withstars'
        src={'/images/GS_Lettering_black.png'}
        width={180}
        height={80}
        className='scale-50 -top-10 right-[3.2rem] lg:scale-100 lg:right-24 lg:top-0 2xl:right-[25rem] 3xl:right-[41rem] 2xl:-top-2 hidden md:absolute md:block'
        priority
      />
      <div className="flex flex-col gap-4 px-7 py-8 md:px-20 md:pb-14  2xl:px-96 3xl:px-[40rem]" >
        <h6 className="text-center text-sm sm:text-2xl tracking-tighter sm:tracking-normal">Welcome To GS/OSD3 & GS/OSD6 Vietnam </h6>
        <div className='text-center text-2xl md:text-[2.9rem] font-extrabold md:leading-3 tracking-tighter hover:text-bosch_blue md:mt-10 lg:text-[4rem]'>
          <h1>
            <p>
              Global Service
            </p>
            <p className='px-0 md:mt-12'>
              Operation Source To Deliver
            </p>
          </h1>
        </div>
      </div>
      <div className='flex flex-col gap-6 md:mt-16 md:grid md:grid-cols-12 md:gap-0 lg:grid-cols-12 lg:pr-10 xl:grid-cols-12 xl:gap-0 xl:pr-0 2xl:px-96 3xl:px-[40rem]'>
        <Image
          alt='bosch-hero-section'
          src={'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1757663285/be-likabosch_yet7y1.webp'}
          width={1600}
          height={900}
          className='sm:min-h-[25.5rem] md:col-span-8 lg:col-span-8 lg:col-start-1  3xl:col-span-7 3xl:col-start-1' // lg:col-span-3 lg:shrink
          priority
          fetchPriority='high'
        />
        <div className="m-auto min-w-full space-y-3 md:col-span-4 bg-transparent p-4 md:min-w-80 lg:col-span-4  2xl:pr-0">
          <BannerStack />
        </div>
      </div>

    </section>
  )
}

export default HeroSection