import { Users, Euro, FlaskConical, MapPin } from 'lucide-react';
import SectionHeader from '../section-header';

const Achievements = () => {
    return (
        <section>
            <SectionHeader>Achivements</SectionHeader>

        <div className="grid grid-cols-2 gap-4 bg-gray-200 md:grid-cols-4">
            <div className="flex flex-col items-center p-6 py-16 ">
                    <Users className="mb-2 size-8 text-blue-600" />
                <div className="text-2xl md:text-4xl font-bold text-blue-600">417,900</div>
                <div className="text-center text-sm text-gray-600">
                    associates worldwide
                </div>
            </div>
            <div className="flex flex-col items-center p-6  py-16 ">
                <Euro className="mb-2 size-8 text-green-600" />
                <div className="text-2xl md:text-4xl font-bold text-green-600">90.3</div>
                <div className="text-center text-sm text-gray-600">
                    billion euros sales revenue
                </div>
            </div>
            <div className="flex flex-col items-center p-6  py-16 ">
                    <FlaskConical className="mb-2 size-8 text-purple-600" />
                <div className="text-2xl md:text-4xl font-bold text-purple-600">86,800</div>
                <div className="text-center text-sm text-gray-600">
                    associates in research and development
                </div>
            </div>
            <div className="flex flex-col items-center p-6  py-16 ">
                    <MapPin className="mb-2 size-8 text-yellow-600" />
                <div className="text-2xl md:text-4xl font-bold text-yellow-600">150+</div>
                <div className="text-center text-sm text-gray-600">
                    locations globally
                </div>
            </div>
        </div>
        </section>
    );
};

export default Achievements;