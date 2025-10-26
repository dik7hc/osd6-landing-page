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
        <main className="mx-auto max-w-7xl bg-white px-4 py-12 font-sans text-gray-800 sm:px-6 lg:px-8">
            <div className="mb-4 text-gray-500">
                <span>Home / Service Highlights / Title</span>
            </div>
            <div className="mb-8 flex items-start justify-between">
                <div>
                    <h1 className="text-5xl font-bold">Title</h1>
                    <p className="mt-4 text-lg tracking-tight text-gray-600">
                        GS/OSD3 & GS/OSD6 Vietnam teams are parts of the GS/OSD organization, specialized in Global Transportation and Planning services.
                    </p>
                </div>
                <span className="shrink-0 pt-4 text-gray-500">Date</span>
            </div>
            <div className="leading-relaxed text-gray-700">
                <div className="mb-4 md:float-left md:mr-8 md:w-1/3">
                    <div className="aspect-[4/3] w-full bg-gray-200">
                        <img src="https://placehold.co/400x300/e2e8f0/e2e8f0" alt="Service highlight" className="size-full object-cover" />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Photo Description</p>
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
            <div className="my-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="aspect-square bg-gray-200">
                        <img src={`https://placehold.co/300x300/e2e8f0/e2e8f0?text=Image+${i}`} alt={`Gallery image ${i}`} className="size-full object-cover" />
                    </div>
                ))}
            </div>
            <p className="leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi neque. Donec id convallis metus, id blandit mauris. Aliquam vel augue sit amet enim varius scelerisque id ut quam. Praesent nec lectus id turpis sollicitudin blandit. Quisque sed lorem sed neque tincidunt lobortis. Aliquam sodales est quis sollicitudin volutpat. Integer eget convallis ex.
            </p>
            <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-4">
                <p className="text-gray-600">Author</p>
                <div className="flex gap-4 text-gray-500">
                    <span>#hashtags</span>
                    <span>#hashtags</span>
                    <span>#hashtags</span>
                </div>
            </div>
            <div className="mt-20">
                <h2 className="mb-4 text-center text-3xl font-bold">Explore More</h2>
                <div className="mt-8 flex items-center justify-end gap-4">
                    <button
                        aria-label="Previous item"
                        className="rounded-md border p-2 text-gray-600 transition-colors hover:bg-gray-100"
                    >
                        <ChevronLeft className="size-6" />
                    </button>
                    <button
                        aria-label="Next item"
                        className="rounded-md border p-2 text-gray-600 transition-colors hover:bg-gray-100"
                    >
                        <ChevronRight className="size-6" />
                    </button>
                </div>
            </div>
        </main>
    );
};

export default ServiceHighlightPage;