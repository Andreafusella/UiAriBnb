import CardHotel from './CardHotel';

function GrillHome() {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8 justify-items-center">
                {[...Array(30)].map((_, index) => (
                    <CardHotel key={index} />
                ))}
            </div>
        </div>
    );
}

export default GrillHome