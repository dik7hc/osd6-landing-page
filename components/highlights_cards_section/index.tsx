import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

const cardData = [
    {
        title: "Lorem ipsum dolor sit amet,",
        date: "10/25/2025",
        tags: ["#Collaboration", "#OSD6", "#OSD3"]
    },
    {
        title: "Lorem ipsum dolor sit amet,",
        date: "10/25/2025",
        tags: ["#Collaboration", "#OSD6", "#OSD3"]
    },
    // {
    //     title: "Lorem ipsum dolor sit amet,",
    //     date: "10/25/2025",
    //     tags: ["#Collaboration", "#OSD6", "#OSD3"]
    // },
];

const HighlightsCardsSection = () => {
    return (
        <section className="bg-white py-12">

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                {cardData.map((card, index) => (
                    <div key={index} className="flex flex-col">
                        {/* Card Content: Title, Date, Tags */}
                        <div className="mb-3 flex items-start justify-between">
                            <h3 className="max-w-[200px] text-xl font-bold leading-snug text-gray-900">
                                {card.title}
                            </h3>
                            <span className="shrink-0 pt-1 text-xs text-gray-500">
                                {card.date}
                            </span>
                        </div>

                        <div className="grid grid-cols-3 gap-5">
                            <div className='col-span-1 flex h-full flex-col'> <div className="my-4 flex grow flex-col gap-4 text-xs font-semibold text-gray-500"> {card.tags.map((tag, i) => (
                                <span key={i}>{tag}</span>
                            ))}
                            </div>

                                <div className='mt-[4.rem] flex items-end'> <Button
                                    className="w-32 px-4 py-2" >
                                    Read More
                                    <ArrowRight size={16} />
                                </Button>
                                </div>

                            </div>
                            <Image alt='be-likabosch' width={243} height={98} quality={50} className="col-span-2 mb-4 h-48 w-full" src="https://res.cloudinary.com/dr9bxbmwi/image/upload/v1757663285/be-likabosch_yet7y1.webp"></Image>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HighlightsCardsSection;