import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
const HeroAboutSection = () => {
    return (
        <section >
            <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div className="flex flex-col gap-6 ">
                    <h1 className="text-5xl font-semibold text-gray-900">
                        ABOUT US
                    </h1>
                    <Logo className='-my-20 -ml-20' />
                    <div className='pt-12'>
                        <p className="text-lg text-gray-600">
                            GS/OSD3 & GS/OSD6 Vietnam teams are parts of the GS/OSD organization, specialized in Global Transportation and Planning services.
                        </p>
                    </div>
                </div>
                <div className="h-80 w-full rounded-lg bg-gray-200">
                    <Image
                        alt='bosch-hero-section'
                        src={'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1757663285/be-likabosch_yet7y1.webp'}
                        width={1600}
                        height={900}
                        priority
                        fetchPriority='high'
                    />
                </div>
            </div>
        </section>
    );
};


const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
    return (
        <img
            src={"/svg/Logo with GS.svg"}
            alt="Company Logo"
            className={"h-64 w-auto " + className}
        />
    );
};
export default HeroAboutSection