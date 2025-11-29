import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

const cardData = [
    {
        title: "Lorem ipsum dolor sit amet, consectetur sit",
        date: "10/22/2025",
        tags: ["#Collaboration", "#OSD6", "#OSD3"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula ante metus odio tristique id. Sed in lorem nunc. Duis eget erat in lorem posuere velit. Morbi sed nisi sed dolor sem. Fusce placerat, lacinia et non pretium. Fusce convallis suscipit sit nec pharetra. Proin tristique, lorem id varius felis. Sed eget lacinia eget egestas. Nullam tincidunt non nunc in eros."
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur sit",
        date: "10/22/2025",
        tags: ["#Collaboration", "#OSD6", "#OSD3"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula ante metus odio tristique id. Sed in lorem nunc. Duis eget erat in lorem posuere velit. Morbi sed nisi sed dolor sem. Fusce placerat, lacinia et non pretium. Fusce convallis suscipit sit nec pharetra. Proin tristique, lorem id varius felis. Sed eget lacinia eget egestas. Nullam tincidunt non nunc in eros."
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur sit",
        date: "10/22/2025",
        tags: ["#Collaboration", "#OSD6", "#OSD3"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula ante metus odio tristique id. Sed in lorem nunc. Duis eget erat in lorem posuere velit. Morbi sed nisi sed dolor sem. Fusce placerat, lacinia et non pretium. Fusce convallis suscipit sit nec pharetra. Proin tristique, lorem id varius felis. Sed eget lacinia eget egestas. Nullam tincidunt non nunc in eros."
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur sit",
        date: "10/22/2025",
        tags: ["#Collaboration", "#OSD6", "#OSD3"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula ante metus odio tristique id. Sed in lorem nunc. Duis eget erat in lorem posuere velit. Morbi sed nisi sed dolor sem. Fusce placerat, lacinia et non pretium. Fusce convallis suscipit sit nec pharetra. Proin tristique, lorem id varius felis. Sed eget lacinia eget egestas. Nullam tincidunt non nunc in eros."
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur sit",
        date: "10/22/2025",
        tags: ["#Collaboration", "#OSD6", "#OSD3"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula ante metus odio tristique id. Sed in lorem nunc. Duis eget erat in lorem posuere velit. Morbi sed nisi sed dolor sem. Fusce placerat, lacinia et non pretium. Fusce convallis suscipit sit nec pharetra. Proin tristique, lorem id varius felis. Sed eget lacinia eget egestas. Nullam tincidunt non nunc in eros."
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur sit",
        date: "10/22/2025",
        tags: ["#Collaboration", "#OSD6", "#OSD3"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula ante metus odio tristique id. Sed in lorem nunc. Duis eget erat in lorem posuere velit. Morbi sed nisi sed dolor sem. Fusce placerat, lacinia et non pretium. Fusce convallis suscipit sit nec pharetra. Proin tristique, lorem id varius felis. Sed eget lacinia eget egestas. Nullam tincidunt non nunc in eros."
    },
];

const HighlightsCardsSection = ({
    amount
}: {
    amount?: number
}) => {
    const data = amount ? cardData.slice(0, amount) : cardData;
    return (
        <section className="bg-white py-12">
            <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3">
                {data.map((card, index) => (
                    <div key={index} className="relative flex flex-col ">
                        <div className="group relative mb-4 overflow-hidden">
                            <Image
                                alt="be-likabosch"
                                width={243}
                                height={160}
                                quality={50}
                                className="h-40 w-full object-cover transition-opacity duration-300 group-hover:opacity-30"
                                src="https://res.cloudinary.com/dr9bxbmwi/image/upload/v1757663285/be-likabosch_yet7y1.webp"
                            />

                            <div className="absolute inset-0 flex items-start justify-start bg-gray-200 p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-xs leading-relaxed text-gray-700 line-clamp-5">
                                    {card.description}
                                </p>
                            </div>
                        </div>

                        <span className="absolute right-0 top-[168px] text-xs text-gray-500">
                            {card.date}
                        </span>

                        <h3 className="mb-3 pr-20 text-2xl font-bold leading-snug text-gray-900">
                            {card.title}
                        </h3>

                        <div className="flex items-end justify-between">
                            <div className="flex gap-2 text-xs font-semibold text-gray-500">
                                {card.tags.map((tag, i) => (
                                    <span key={i}>{tag}</span>
                                ))}
                            </div>

                            <Button className="px-4 py-2 text-xs" variant={'outline'}>
                                Read More
                                <ArrowRight size={14} />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HighlightsCardsSection;