import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

interface AccordionItemData {
    id: string;
    title: string;
    content: string;
}

const accordionItems: AccordionItemData[] = [
    {
        id: "item-1",
        title: "Lorem ipsum dolor sit amet",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh ipsum, sagittis sit amet porta eget, volutpat vitae felis. Donec a erat sit amet mi elementum porta vitae nec massa.",
    },
    { id: "item-2", title: "Lorem ipsum dolor sit amet", content: "Content for item 2." },
    { id: "item-3", title: "Lorem ipsum dolor sit amet", content: "Content for item 3." },
    { id: "item-4", title: "Lorem ipsum dolor sit amet", content: "Content for item 4." },
    { id: "item-5", title: "Lorem ipsum dolor sit amet", content: "Content for item 5." },
];

const BlackSquare: React.FC = () => <div className="mr-4 size-4 shrink-0 bg-black"></div>;

const AboutValuesAccordion = () => {
    return (
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            {accordionItems.map(item => (
                <AccordionItem key={item.id} value={item.id} className="border-b border-gray-300">
                    <AccordionTrigger className="py-4 text-left hover:no-underline">
                        <div className="flex items-center">
                            <BlackSquare />
                            <span className="grow">{item.title}</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-gray-200 p-4 text-gray-700">
                        {item.content}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default AboutValuesAccordion