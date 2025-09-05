import Image from "next/image";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <HeaderBg />
            <header className="relative bg-background">
                <div className="flex h-5 w-full items-center justify-between gap-4 px-2 py-10 pb-7 md:h-20 md:px-20 md:py-14 2xl:px-96 3xl:px-[40rem]" >
                    <Link href={"/"}>
                        <Image
                            width={144}
                            height={96}
                            src="/images/bosch_logo_de.svg"
                            alt="Logo"
                            className="scale-75 md:scale-100"
                        />
                    </Link>
                    {/* <Divider orientation="vertical" className="bg-[#7cb305] h-8" /> */}
                    <Button variant="ghost" size="icon" className="size-9 md:hidden">
                        <Menu />
                    </Button>

                    <div className="hidden h-full items-center gap-2 md:flex ">
                        <Button variant={'link'}><Link href={'/about'}>About us</Link></Button>
                        <Button variant={'link'}><Link href={'/service-portfolio'}>Our service portfolio</Link></Button>
                    </div>
                </div>

            </header>
        </>

    )
}

const HeaderBg = () => {
    return (<div
        className="absolute left-0 top-0 z-20 h-1.5 w-full bg-[url('/images/header-cover.svg')] bg-cover bg-center bg-no-repeat"
    />)
}

export default Header