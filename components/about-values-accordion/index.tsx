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
        title: "Compliance",
        content: "We ensure the highest level of compliance to any relevant Bosch and global regulations in our services and operation.",
    },
    {
        id: "item-2", title: "Customer-centric Innovation", content: "We proactively use our expertise in Planning & Transportation to create tailored solutions for our customers' needs and deliver lasting value." },
    {
        id: "item-3", title: "Continuous Improvement", content: "We are dedicated to continuously enhance every aspect of our work. Through regular performance analysis and opportunities identification, we are ensured to always deliver the highest quality and stay ahead of industry standards." },
    {
        id: "item-4", title: "Transparent Partnership", content: "We believe in open and honest communication. By providing frameworks for sharing every step of our services, we ensure our clients are always informed and confident in our collaborative work." },
    {
        id: "item-5", title: "Result focus", content: "We are the organization driven by measurable results to our customers, with focus on excellent cost savings and extra mile without compromise on our service quality." },
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