import Carousel from '../carousel'
import SectionHeader from '../section-header'

const Opex = () => {
    return (
        <section className='flex flex-col ' aria-labelledby="solutions-heading">
            <div>
                <SectionHeader id="solutions-heading">Operational Excellence</SectionHeader>
            </div>
            <Carousel />
        </section>
    )
}

export default Opex