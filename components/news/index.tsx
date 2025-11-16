'use client'
import { cn } from "@/lib/utils";
import { useState } from "react";

const coreValues = [
    { id: 1, title: 'Continuous Improvements', image: '/images/Rectangle24.png', color: 'bg-indigo-500' },
    { id: 2, title: 'Transparency', image: '/images/Rectangle24.png', color: 'bg-green-500' },
    { id: 3, title: 'Process Orientation', image: '/images/Rectangle24.png', color: 'bg-fuchsia-500' },
    { id: 4, title: 'Service Mindset', image: '/images/Rectangle24.png', color: 'bg-teal-500' },
    { id: 5, title: 'Leadership', image: '/images/Rectangle24.png', color: 'bg-indigo-500' },
    { id: 6, title: 'Integrity', image: '/images/Rectangle24.png', color: 'bg-fuchsia-500' },
    { id: 7, title: 'Collaboration', image: '/images/Rectangle24.png', color: 'bg-green-500' },
    { id: 8, title: 'Accountability', image: '/images/Rectangle24.png', color: 'bg-teal-500' },
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
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
                
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
        return function() {
            if(id == selectedId) {
                setSelectedId(undefined)
                return
            }
            setSelectedId(id)
        }
    }

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {coreValues.map(({color, id, image, title}) => (
                <div className={cn("relative w-full h-96 overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:scale-[1.01]", {
                        "col-span-3" : selectedId == id,
                        "hidden": shouldHide(selectedId, id),
                })} key={id} onClick={handleOnclick(id)}>
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover"

                    />

                    <div className={`absolute inset-0 ${color} opacity-80 mix-blend-multiply`}></div>

                    <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
                        <p className="text-white text-xl md:text-2xl font-bold tracking-wider text-center drop-shadow-lg leading-tight">
                            {title}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Opex2