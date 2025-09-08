import Carousel from '../carousel'
import SectionHeader from '../section-header'

const Opex = () => {
    return (
        <section className='flex flex-col pb-10' aria-labelledby="opex-heading">
            <div>
                <SectionHeader id="solutions-heading">Operational Excellence</SectionHeader>
            </div>
            <Carousel />
        </section>
    )
}

export default Opex