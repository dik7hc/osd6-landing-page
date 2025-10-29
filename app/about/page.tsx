import AboutValuesAccordion from '@/components/about-values-accordion';
import HeroAboutSection from '@/components/hero-about';
import ServiceDetails from '@/components/service-details';

const OurLeaderSection = () => {
    return <>
        <h3 className="text-2xl font-semibold text-gray-700">Our Leader</h3>
        <div className="mt-4 h-64 w-full bg-black">
            <img src="https://res.cloudinary.com/dr9bxbmwi/image/upload/v1761670506/Hu_Qian_texgl6.jpg" alt="Head of Department" className="size-full object-cover" />
        </div>
        <h4 className="mt-4 text-3xl font-thin">Hu Qian</h4>
        <p className="text-gray-600">Head of Department</p>
        <div className="mt-2 text-sm text-gray-500">
            <p>Email: Qian.HU@vn.bosch.com</p>
            <p>Phone: (+84) 28 62857453</p>
            <p>Mobile: (+84) 96 3589727</p>
        </div>
    </>
}

const AboutUsPage = () => {
    return (
        <div className="bg-white font-sans text-gray-800">
            <main className="mx-auto max-w-7xl px-8 pt-16">
                <HeroAboutSection />
                <section className="py-16 pt-32">
                    <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
                        <div className="col-span-1 flex flex-col gap-4 text-5xl">
                            <h2>
                                <span className="font-light">Our</span>
                                <span className=" mt-4 block font-extrabold text-gray-900">
                                    VALUES
                                </span>
                            </h2>
                            <p className="mt-10 text-lg tracking-wide text-gray-600">
                                At Bosch, our values guide everything we do. In our team, we bring these principles to life through five core beliefs — driving integrity, innovation, continuous growth, transparency, and impactful results in everything we deliver.
                            </p>
                        </div>
                        <div className='col-span-2'>
                            <AboutValuesAccordion />
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="mt-8 flex flex-col gap-12 lg:flex-row">
                        <ServiceDetails />
                        <div className="w-full shrink-0 lg:w-1/4 lg:border-l lg:border-gray-300 lg:pl-8">
                            <OurLeaderSection />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};


export default AboutUsPage;