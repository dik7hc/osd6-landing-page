import React from 'react';
import {
    Linkedin,
    Youtube,
    Facebook,
    Instagram,
    Twitter,
    ExternalLink,
    ChevronUp
} from 'lucide-react';
import BackToTopBtn from '../back-to-top-btn';

const Footer = () => {
    return (<>

        <footer className="bg-gray-800 p-8 text-white md:px-20 md:py-12 xl:px-40 2xl:px-96 3xl:px-[40rem]">
            {/* Top section with logo and social icons */}
            <div className="mb-8 flex flex-col items-start justify-between md:flex-row md:items-center">
                <div>
                    <h2 className="text-2xl font-medium">Sáng tạo vì cuộc sống</h2>
                </div>

                <div className="mt-4 flex items-center space-x-6 md:mt-0">
                    <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" aria-label="YouTube" className="hover:text-gray-300">
                        <Youtube size={20} />
                    </a>
                    <a href="#" aria-label="Facebook" className="hover:text-gray-300">
                        <Facebook size={20} />
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-gray-300">
                        <Instagram size={20} />
                    </a>
                    <a href="#" aria-label="Twitter" className="hover:text-gray-300">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>

            {/* Middle section with links */}
            <div className="mb-8">
                <ul className="flex flex-wrap gap-6 md:gap-8">
                    <li>
                        <a href="#" className="hover:underline">
                            Thông tin liên hệ chung
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center hover:underline">
                            Giấy phép và bằng sáng chế
                            <ExternalLink size={16} className="ml-1" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center hover:underline">
                            Mua hàng và hậu cần
                            <ExternalLink size={16} className="ml-1" />
                        </a>
                    </li>
                </ul>
            </div>

            {/* Divider */}
            <div className="relative mb-8 border-t border-gray-600">
                <BackToTopBtn />
            </div>

            {/* Bottom section with copyright and legal links */}
            <div className="flex flex-col-reverse flex-wrap gap-y-4 text-xs text-gray-300">
                <div className="w-full md:mr-8 md:w-auto">
                    © Công ty TNHH Bosch Việt Nam 2025, tất cả các quyền được đăng ký
                </div>
                <div className="flex flex-col flex-wrap gap-2 md:flex-row md:gap-x-6">
                    <a href="#" className="whitespace-nowrap hover:underline">
                        Điều khoản sử dụng
                    </a>
                    <a href="#" className="whitespace-nowrap hover:underline">
                        Thông báo pháp lý
                    </a>
                    <a href="#" className="whitespace-nowrap hover:underline">
                        Điều khoản về Quyền riêng tư
                    </a>
                    <a href="#" className="whitespace-nowrap hover:underline">
                        Cài đặt về Quyền riêng tư
                    </a>
                </div>
            </div>
        </footer>
    </>
    );
};

export default Footer;