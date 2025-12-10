import { getAllOpexCoreValues } from "@/lib/opex-mdx"
import Opex2 from "../news"

const opexValues = getAllOpexCoreValues()

const Opex = () => {
    
    return (
        <>
            <section className="overflow-hidden py-16 pb-10">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-5xl text-gray-900">
                        Our Stories in <span className="block font-extrabold">OPEX</span>
                    </h2>
                </div>
                <Opex2 coreValues={opexValues}/>
            </section>
        </>
    )
}


export default Opex