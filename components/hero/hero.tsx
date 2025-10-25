import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
          <Logo className="absolute top-0 left-10" />
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
              className="flex items-center gap-2 text-bosch_blue font-semibold hover:underline w-1/3 bg-white border-bosch_blue"
            >
              About Us <ArrowRight size={18} />
            </Button>
          </div>
        </div>
        <div className="w-full h-80 bg-gray-200 rounded-lg">
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