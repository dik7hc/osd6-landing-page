import Image from "next/image";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const Header = () => {
    return (
        <>
            <HeaderBg />
            <header className="relative bg-background">
                <div className="w-full flex items-center justify-between gap-4 h-5 md:h-20 px-2 md:px-20 2xl:px-[10rem] py-10 pb-7 md:py-14" >
                    <Image
                        width={144}
                        height={96}
                        src="/images/bosch_logo_de.svg"
                        alt="Logo"
                        className="scale-75 md:scale-100"
                    />
                    {/* <Divider orientation="vertical" className="bg-[#7cb305] h-8" /> */}
                    <Button variant="ghost" size="icon" className="size-9 md:hidden">
                        <Menu />
                    </Button>

                    <div className="hidden md:flex gap-2 items-center h-full ">
                        {/* <h2 className="text-xl text-black font-bold leading-tight tracking-wide">
                            Supplier Bundling - Bottleneck Prevention
                        </h2> */}
                        {/* <div className="flex h-full "> */}
                        {/* <IconButton icon={CircleQuestionMark} >Help</IconButton> */}
                        <Button variant={'link'} className="text-md">Sản phẩm và dịch vụ</Button>
                        <Button variant={'link'} className="text-md">Về công ty</Button>
                        <Button variant={'link'} className="text-md">Nghề nghiệp</Button>
                    </div>
                </div>

            </header>
            <h6 className=" text-right pr-4 md:pr-24 2xl:pr-[11rem] font-bold">GS/OSD6 Landing Page Demo</h6>    
        </>

    )
}

const HeaderBg = () => {
    return (<div
        className="absolute top-0 left-0 w-full h-[0.375rem] z-20 bg-no-repeat bg-cover bg-center bg-[url('/images/header-cover.svg')]"
    />)
}

export default Header