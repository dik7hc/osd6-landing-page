import AboutValuesAccordion from '@/components/about-values-accordion';
import HeroAboutSection from '@/components/hero-about';
import ServiceDetails from '@/components/service-details';

const OurLeaderSection = () => {
    return <>
        <h3 className="text-2xl font-semibold text-gray-700">Our Leader</h3>
        <div className="mt-4 w-full h-64 bg-black">
            <img src="/images/Hu_Qian.png" alt="Head of Department" className="w-full h-full object-cover" />
        </div>
        <h4 className="mt-4 text-3xl font-thin">Hu Qian</h4>
        <p className="text-gray-600">Head of Department</p>
        <div className="text-sm text-gray-500 mt-2">
            <p>Email: Lorem.ipsum@bosch.com</p>
            <p>Phone: (+12) 123456789</p>
        </div>
    </>
}

const AboutUsPage = () => {
    return (
        <div className="bg-white font-sans text-gray-800">
            <main className="max-w-7xl mx-auto px-8 pt-16">
                <HeroAboutSection />
                <section className="py-16 pt-32">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div className="flex flex-col gap-4 text-5xl col-span-1">
                            <h2>
                                <span className=" text-brand-blue font-light">Our</span>
                                <span className=" font-extrabold text-gray-900 block mt-4">
                                    VALUES
                                </span>
                            </h2>
                            <p className="mt-10 text-lg text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh ipsum, sagittis sit amet porta eget, volutpat vitae felis.
                            </p>
                        </div>
                        <div className='col-span-2'>
                            <AboutValuesAccordion />
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="mt-8 flex flex-col lg:flex-row gap-12">
                        <ServiceDetails />
                        <div className="w-full lg:w-1/4 lg:pl-8 lg:border-l lg:border-gray-300 flex-shrink-0">
                            <OurLeaderSection />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};


export default AboutUsPage;