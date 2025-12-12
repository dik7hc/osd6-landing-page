import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import Svg from '../svgs';

const HeroSection = () => {
  return (
    <section >
      <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* <Logo className="absolute -top-8 left-10" /> */}
        <Svg.Logo className="absolute size-80 -top-6 left-20" />
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-semibold text-gray-900">
            <div>Welcome to</div>
            <div>GS.</div>
          </h1>

          <div className="mt-24 space-y-10">
            <div>
              <p className="text-xl tracking-wide text-gray-600">
                We engineer the routes where
              </p>
              <p className="text-xl tracking-wide text-gray-600">
                commerce flows freely.
              </p>
            </div>

            <Button
              variant={"outline"}
              className="flex w-1/3 items-center gap-2 border-bosch_purple bg-bosch_purple font-semibold text-white hover:bg-white hover:text-bosch_purple"
              asChild
            >
              <Link href={'/about'}>About Us <ArrowRight size={18} /></Link>
            </Button>
          </div>
        </div>

        <div className="h-80 w-full bg-gray-200">
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


// const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
//   return (
//     <img
//       src={"/svg/Logo without GS.svg"}
//       alt="Company Logo"
//       className={"h-64 w-auto " + className}
//     />
//   );
// };
export default HeroSection