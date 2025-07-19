import React from 'react';
import { Linkedin, Facebook, Twitter, ChevronRight, ExternalLink } from 'lucide-react';

const ContactSection = () => {
    return (
        <div className="py-6 md:px-20 lg:py-12 xl:px-40 3xl:px-[40rem]">
            {/* Contact section */}
            <div className="mb-10 bg-gray-100 lg:mb-20">
                <div className="flex flex-col md:flex-row md:px-12 md:py-10">
                    {/* Left column */}
                    <div className="p-8 md:w-1/2">
                        <h2 className="mb-4 text-2xl font-bold">Liên hệ với Bosch</h2>
                        <p className="mb-6 text-gray-700">
                            Chúng tôi mong nhận được phản hồi của bạn
                        </p>

                        <div className="flex items-center space-x-4">
                            <a href="#" aria-label="LinkedIn" className="hover:text-gray-600">
                                <Linkedin size={20} className='text-foreground hover:text-bosch_blue' />
                            </a>
                            <a href="#" aria-label="Facebook" className="hover:text-gray-600">
                                <Facebook size={20} className='text-foreground hover:text-bosch_blue' />
                            </a>
                            <a href="#" aria-label="Twitter" className="hover:text-gray-600">
                                <Twitter size={20} className='text-foreground hover:text-bosch_blue' />
                            </a>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="p-8 md:w-1/2 ">
                        <h2 className="mb-6 text-2xl font-bold">Gửi tin nhắn cho chúng tôi</h2>
                        <a href="#" className="flex items-center text-blue-600 hover:underline">
                            Đến trang biểu mẫu
                            <ChevronRight size={16} className="ml-1" />
                        </a>
                    </div>
                </div>
            </div>
            <ActionCard />
        </div>
    );
};

const ActionCard = () => {
    return <>
        <div className="grid gap-10 px-8 md:grid-cols-2 md:px-0 lg:mt-8">

            <div className="bg-bosch_blue p-8 text-white hover:bg-[#00578d]" >
                <h2 className="mb-1 text-xl font-bold lg:text-3xl ">Tìm kiếm công việc?</h2>
                <h2 className="mb-6 text-xl font-bold lg:text-3xl">Ứng tuyển ngay.</h2>
                <a href="#" className="flex items-center text-white hover:underline">
                    Cơ hội nghề nghiệp tại Bosch
                    <ChevronRight size={16} className="ml-1" />
                </a>
            </div>

            <div className="bg-bosch_blue p-8 text-white hover:bg-[#00578d] lg:pb-40" >
                <h2 className="mb-6 text-xl font-bold lg:text-3xl ">Trở thành một đối tác kinh doanh.</h2>
                {/* <h2 className="text-3xl font-bold mb-6">doanh.</h2> */}
                <a href="#" className="flex items-center text-white hover:underline">
                    Mua hàng và hậu cần
                    <ExternalLink size={16} className="ml-1" />
                </a>
            </div>
        </div ></>
}

export default ContactSection;