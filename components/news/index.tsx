'use client'
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const coreValues = [
    { id: 1, title: 'Continuous Improvements', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764055824/image-aQ_ckmp8x.jpg', color: 'bg-bosch_blue', textColor: 'text-bosch_blue', gradientColor: 'from-bosch_blue' },
    { id: 2, title: 'Leadership', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764059282/image-cH_luvvw3.jpg', color: 'bg-bosch_green', textColor: 'text-bosch_teal', gradientColor: 'from-bosch_green' },
    { id: 3, title: 'Transparency', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764059375/image-bv_oa9xpc.jpg', color: 'bg-bosch_purple', textColor: 'text-bosch_green', gradientColor: 'from-bosch_purple' },
    { id: 4, title: 'Process Orientation', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764059338/aHung_o8ookh.jpg', color: 'bg-bosch_teal', textColor: 'text-bosch_purple', gradientColor: 'from-bosch_teal' },
    { id: 5, title: 'Service Mindset', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764060051/cMy_z3vuva.jpg', color: 'bg-bosch_teal', textColor: 'text-bosch_teal', gradientColor: 'from-bosch_teal' },
    { id: 6, title: 'Standardization', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764060015/aTung_g1uep9.jpg', color: 'bg-bosch_purple', textColor: 'text-bosch_purple', gradientColor: 'from-bosch_purple' },
    { id: 7, title: 'Collaboration', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1761669712/cHan_xg3px7.jpg', color: 'bg-bosch_green', textColor: 'text-bosch_green', gradientColor: 'from-bosch_green' },
    { id: 8, title: 'Accountability', image: 'https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764059425/cDung_rsi5u9.jpg', color: 'bg-bosch_teal', textColor: 'text-bosch_teal', gradientColor: 'from-bosch_teal' },
];



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

const ValueCard = ({ title, image, color, onClick }: any) => {
    return (
        <div className="relative w-full h-96 overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:scale-[1.01]" onClick={onClick}>
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
            />

            <div className={`absolute inset-0 ${color} opacity-80 mix-blend-multiply`}></div>

            <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
                <p className="text-white text-xl md:text-2xl font-bold tracking-wider text-center drop-shadow-lg leading-tight">
                    {title}
                </p>
            </div>
        </div>
    );
};

const Opex2 = () => {
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

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {coreValues.map(({ color, id, image, title, textColor, gradientColor }) => (
                <div className={cn("relative w-full h-96 overflow-hidden transition-shadow duration-300 hover:shadow-xl cursor-pointer", {
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

                                <div className="absolute inset-0 flex items-end justify-center p-4 pb-16 z-10">
                                    <p className={`text-white text-xl md:text-2xl ${textColor} font-bold tracking-wider text-center drop-shadow-lg leading-tight`}>
                                        {title}
                                    </p>
                                </div>
                            </>
                        ) : (
                            <OpexImageCardSelected key={id} color={color} image={image} title={title} isReversed={id == 3 || id == 4 || id == 7 || id == 8} />
                        )
                    }

                </div>
            ))}
        </section>
    )
}

const OpexImageCardSelected = ({ image, color, title, isReversed }: { image: string, color: string, title: string, isReversed: boolean }) => {

    return (
        <div className={`flex w-full max-w-5xl mx-auto h-[400px] ${isReversed && "flex-row-reverse"}`}>
            {/* Left Side: Image Area */}
            <div className="relative w-[30.5%] h-full bg-gray-900">
                <Image
                    src={image}
                    alt="Portrait"
                    fill
                    className="object-cover"
                />
            </div>

            <div className={`relative w-[69.5%] h-full ${color} text-white p-10 flex flex-col`}>
                <button className="absolute top-8 right-8 hover:opacity-80 transition-opacity">
                    <X size={40} strokeWidth={1} />
                </button>

                <div className="mt-4">
                    <h2 className="text-2xl font-thin leading-tight mb-8 tracking-wide">
                        {title}
                    </h2>

                    <p className="text-xl leading-snug font-light opacity-95 pr-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla vehicula ante metus, nec tempor odio tristique ut.
                        Sed in lorem nulla. Duis eget erat in ipsum posuere
                        convallis sit amet non risus. In sollicitudin ligula a ligula
                        pellentesque, eu auctor sem semper. Nulla placerat
                        facilisis dui in porttitor. Fusce consequat suscipit elit nec
                        pharetra.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Opex2