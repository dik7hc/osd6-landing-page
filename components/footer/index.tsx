import Image from 'next/image';
import BackToTopBtn from '../back-to-top-btn';
import Link from 'next/link';

const Footer = () => {
    return (<>
        <footer className="bg-gray-300" >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

                <div className="flex items-center gap-6">

                    <Image src={'/svg/Logo with GS.svg'} alt='General Service Logo' width={298} height={100} />

                    <p className="mt-6 max-w-xs text-lg leading-relaxed text-gray-700">
                        We Engineer the Routes where <br /> Commerce Flows Freely
                    </p>
                </div>
                <nav className="mt-6 block">
                    <Link href="/about" className="text-lg font-semibold text-gray-900 transition-colors hover:text-gray-700">
                        About Us
                    </Link>
                    <div className='flex items-center gap-8'>

                        <Link href="/about?activeServiceTab=OSD3#services" className="text-gray-700 transition-colors hover:text-gray-900">
                            OSD3
                        </Link>
                        <Link href="/about?activeServiceTab=OSD6#services" className="text-gray-700 transition-colors hover:text-gray-900">
                            OSD6
                        </Link>
                        <Link href="/about#services2" className="text-gray-700 transition-colors hover:text-gray-900">
                            Service Portfolio
                        </Link>
                    </div>
                </nav>
            </div>
            <BackToTopBtn />
        </footer>
    </>
    );
};



export default Footer;

