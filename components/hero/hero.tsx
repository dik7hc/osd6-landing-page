import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
const HeroSection = () => {
  return (
    <section >
      <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <Logo className="absolute left-10 top-0" />
        <div className="flex flex-col gap-6 ">
          <h1 className="text-5xl font-semibold text-gray-900">
            <div> Welcome to</div><div>GS.</div>
            
          </h1>
          <div className='pt-12'>
            <p className="text-lg text-gray-600">
              We engineer the routes where commerce flows freely.
            </p>
            <Button
              variant={"outline"}
              className="flex w-1/3 items-center gap-2 border-bosch_blue bg-white font-semibold text-bosch_blue hover:underline"
            >
              About Us <ArrowRight size={18} />
            </Button>
          </div>
        </div>
        <div className="h-80 w-full rounded-lg bg-gray-200">
          <Image
            alt='bosch-hero-section'
            src={'/images/be-likabosch.webp'}
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
      src={"/svg/Logo.svg"}
      alt="Company Logo"
       className={"h-64 w-auto " + className}
    />
  );
};
export default HeroSection