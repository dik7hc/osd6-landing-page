import Image from "next/image";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

const Header = () => {
    return (
        <div className="sticky top-0 z-50 shadow-sm">
            <HeaderBg />
            <header className="relative mx-auto max-w-7xl bg-background ">
                <div className="flex h-5 w-full flex-row-reverse items-center justify-between gap-4 px-4 py-10 pb-7  sm:px-6 md:h-20 md:py-14 lg:px-8" >
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

                </div>

            </header>
        </div>

    )
}

const HeaderBg = () => {
    return (<div
        className="absolute left-0 top-0 z-20 h-4 w-full bg-[url('/images/header-cover.svg')] bg-cover bg-center bg-no-repeat"
    />)
}

export default Header