'use client'
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight, Quote, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { OpexCoreValue } from "@/lib/opex-mdx";



const shouldHide = (selectedId?: number, currentId?: number) => {
    if (!selectedId || !currentId) return null
    const hideMap: { [key: number]: number[] } = {
        1: [2, 3],
        2: [3, 4],
        3: [1, 2],
        4: [2, 3],
        5: [6, 7],
        6: [7, 8],
        7: [5, 6],
        8: [6, 7],
    };

    const idsToHide = hideMap[selectedId];
    return idsToHide ? idsToHide.includes(currentId) : false;
};

const Opex2 = ({ coreValues } : {coreValues :OpexCoreValue[]}) => {
    const [selectedId, setSelectedId] = useState<number | undefined>()

    const handleOnclick = (id: number) => {
        return function () {
            if (id == selectedId) {
                setSelectedId(undefined)
                return
            }
            setSelectedId(id)
        }
    }
    const selectedCoreValue = selectedId ? coreValues[selectedId - 1] : null

    return (
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-10 lg:grid-cols-4">
            {coreValues.map(({ frontmatter: { color, id, image, title, textColor, gradientColor } }) => (
                <div className={cn("relative h-96 w-full cursor-pointer overflow-hidden transition-shadow duration-300 hover:shadow-xl", {
                    "col-span-3 hover:scale-[1]": selectedId == id,
                    "hidden": shouldHide(selectedId, id),
                })} key={id} onClick={handleOnclick(id)}>
                    {
                        selectedId !== id ? (
                            <>
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-cover  opacity-90"
                                />

                                <div className={`absolute bottom-0 h-[45%] w-full bg-gradient-to-t ${gradientColor} to-transparent `}></div>

                                <div className="absolute inset-0 z-10 flex items-end justify-center p-4 pb-16">
                                    <p className={`text-xl text-white md:text-2xl ${textColor} text-center font-bold leading-tight tracking-wider drop-shadow-lg`}>
                                        {title}
                                    </p>
                                </div>
                            </>
                        ) : (
                                <OpexImageCardSelected coreValue={selectedCoreValue!} isReversed={id == 3 || id == 4 || id == 7 || id == 8} />
                        )
                    }

                </div>
            ))}
        </section>
    )
}

const OpexImageCardSelected = ({ coreValue, isReversed, }: { isReversed: boolean, coreValue: OpexCoreValue }) => {
    const { image, color, title, textColor, quote, description } = coreValue.frontmatter;

    const slug = title.split(' ').join("-").toLowerCase()

    return (
        <div className={`mx-auto flex h-[400px] w-full max-w-5xl ${isReversed && "flex-row-reverse"}`}>
            {/* Left Side: Image Area */}
            <div className="relative h-full w-[30.5%] bg-gray-900">
                <Image
                    src={image}
                    alt="Portrait"
                    fill
                    className="object-cover"
                />
            </div>

            <div className={`relative h-full w-[69.5%] ${color} flex flex-col p-10 text-white`}>
                <button className="absolute right-8 top-8 transition-opacity hover:opacity-80">
                    <X size={40} strokeWidth={1} />
                </button>

                <div className="mt-4 flex flex-col gap-8">
                    <h2 className=" text-2xl font-semibold leading-tight tracking-wide">
                        {title}
                    </h2>

                    <p className="font-light leading-snug opacity-95">
                        &ldquo;{quote}&rdquo;
                    </p>

                    <p className="font-light leading-snug opacity-95">
                        {description}
                    </p>
                    <div className=" flex gap-8">
                        <Button
                            variant={"outline"}
                            className={`border-bosch_blue bg-white ${textColor} hover:bg-transparent hover:text-white hover:border-white `}
                            asChild
                        >
                            <Link href={'/opex/' + slug}>Read Story <ChevronRight size={18} /></Link>
                        </Button>
                        <Button
                            variant={"outline"}
                            className={`border-white hover:bg-white  bg-transparent text-white hover:${textColor} `}
                            asChild
                        >
                            <Link href={'/about'}>See More <ChevronRight size={18} /></Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Opex2