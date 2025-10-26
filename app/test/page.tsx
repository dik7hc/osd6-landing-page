import { ChevronLeft, ChevronRight } from 'lucide-react';

// const PageBreadcrumb = () => {
//     return <Breadcrumb>
//         <BreadcrumbList>
//             <BreadcrumbItem>
//                 <BreadcrumbLink href="/">Home</BreadcrumbLink>
//             </BreadcrumbItem>
//             <BreadcrumbSeparator />
//             <BreadcrumbItem>
//                 <BreadcrumbLink href="/service-highlights">Service Highlights</BreadcrumbLink>
//             </BreadcrumbItem>
//             <BreadcrumbSeparator />
//             <BreadcrumbItem>
//                 <BreadcrumbPage>Title</BreadcrumbPage>
//             </BreadcrumbItem>
//         </BreadcrumbList>
//     </Breadcrumb>
// }
const ServiceHighlightPage = () => {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white text-gray-800 font-sans">
            <div className="text-gray-500 mb-4">
                <span>Home / Service Highlights / Title</span>
            </div>
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="text-5xl font-bold">Title</h1>
                    <p className="text-lg text-gray-600 mt-4 tracking-tight">
                        GS/OSD3 & GS/OSD6 Vietnam teams are parts of the GS/OSD organization, specialized in Global Transportation and Planning services.
                    </p>
                </div>
                <span className="text-gray-500 flex-shrink-0 pt-4">Date</span>
            </div>
            <div className="text-gray-700 leading-relaxed">
                <div className="mb-4 md:float-left md:w-1/3 md:mr-8">
                    <div className="bg-gray-200 w-full aspect-[4/3]">
                        <img src="https://placehold.co/400x300/e2e8f0/e2e8f0" alt="Service highlight" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Photo Description</p>
                </div>
                <div className="space-y-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi neque. Donec id convallis metus, id blandit mauris. Aliquam vel augue sit amet enim varius scelerisque id ut quam. Praesent nec lectus id turpis sollicitudin blandit. Quisque sed lorem sed neque tincidunt lobortis. Aliquam sodales est quis sollicitudin volutpat. Integer eget convallis ex.
                    </p>
                    <p>
                        Nunc molestie consectetur nisi quis lobortis. Duis et egestas orci, eu pellentesque est. Aliquam ultrices tempus tempus. Aenean tempor, arcu vel condimentum ullamcorper, sem neque posuere eros, vitae condimentum turpis lorem eget nisi. Praesent id tincidunt augue. Integer id elit egestas, ornare felis at, egestas massa.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi neque. Donec id convallis metus, id blandit mauris. Aliquam vel augue sit amet enim varius scelerisque id ut quam. Praesent nec lectus id turpis sollicitudin blandit. Quisque sed lorem sed neque tincidunt lobortis. Aliquam sodales est quis sollicitudin volutpat. Integer eget convallis ex.
                    </p>
                    <p>
                        Nunc molestie consectetur nisi quis lobortis. Duis et egestas orci, eu pellentesque est. Aliquam ultrices tempus tempus. Aenean tempor, arcu vel condimentum ullamcorper, sem neque posuere eros, vitae condimentum turpis lorem eget nisi. Praesent id tincidunt augue. Integer id elit egestas, ornare felis at, egestas massa. Etiam scelerisque a risus tristique placerat. Donec risus felis, bibendum vitae vehicula sed, ultricies a dolor. Fusce et mollis arcu. Praesent rhoncus dolor ac vestibulum maximus. Donec porta lorem nec diam bibendum tempus. Aenean blandit nulla eget nunc vulputate, in facilisis odio dignissim. Sed rhoncus diam at egestas sollicitudin. Mauris id porta est. Suspendisse nec est ex. Duis vulputate id arcu id finibus.
                    </p>
                    <p>
                        Cras porttitor pharetra turpis ut egestas. In hac habitasse platea dictumst. Sed consequat tortor urna, eu dapibus quam consequat tristique. Fusce iaculis faucibus magna et accumsan. Maecenas laoreet quis nibh ac venenatis. Donec in nisl id ligula lobortis consequat. Proin vitae condimentum ligula.
                    </p>
                </div>
                <div className="clear-both"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="bg-gray-200 aspect-square">
                        <img src={`https://placehold.co/300x300/e2e8f0/e2e8f0?text=Image+${i}`} alt={`Gallery image ${i}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi neque. Donec id convallis metus, id blandit mauris. Aliquam vel augue sit amet enim varius scelerisque id ut quam. Praesent nec lectus id turpis sollicitudin blandit. Quisque sed lorem sed neque tincidunt lobortis. Aliquam sodales est quis sollicitudin volutpat. Integer eget convallis ex.
            </p>
            <div className="flex justify-between items-center mt-12 border-t border-gray-200 pt-4">
                <p className="text-gray-600">Author</p>
                <div className="flex gap-4 text-gray-500">
                    <span>#hashtags</span>
                    <span>#hashtags</span>
                    <span>#hashtags</span>
                </div>
            </div>
            <div className="mt-20">
                <h2 className="text-3xl font-bold text-center mb-4">Explore More</h2>
                <div className="mt-8 flex justify-end items-center gap-4">
                    <button
                        aria-label="Previous item"
                        className="p-2 border rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        aria-label="Next item"
                        className="p-2 border rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </main>
    );
};

export default ServiceHighlightPage;