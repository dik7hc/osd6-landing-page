import Image from 'next/image';

const Footer = () => {
    return (<>
        <footer className="bg-gray-300" >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

                {/* Left Section: Logo and Tagline */}
                <div className="flex items-center gap-6">
                    {/* Logo (SVG as React Component) */}
                    {/* Apply the exact dimensions from the image: 298px x 100px */}
                    <Image src={'/svg/logoWithGeneralService.svg'} alt='General Service Logo' width={298} height={100} />

                    {/* Tagline */}
                    <p className="mt-6 max-w-xs text-lg leading-relaxed text-gray-700">
                        We Engineer the Routes where <br /> Commerce Flows Freely
                    </p>
                </div>

                {/* Right Section: Navigation */}
                <nav className="mt-6 block">
                    <a href="#" className="text-lg font-semibold text-gray-900 transition-colors hover:text-gray-700">
                        About Us
                    </a>
                    <div className='flex items-center gap-8'>

                        <a href="#" className="text-gray-700 transition-colors hover:text-gray-900">
                            OSD3
                        </a>
                        <a href="#" className="text-gray-700 transition-colors hover:text-gray-900">
                            OSD6
                        </a>
                        <a href="#" className="text-gray-700 transition-colors hover:text-gray-900">
                            Service Portfolio
                        </a>
                    </div>
                </nav>
            </div>
        </footer>
    </>
    );
};



export default Footer;

