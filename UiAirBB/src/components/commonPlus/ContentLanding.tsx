import Button from "../common/Button"
import Img from "../common/Img"

function ContentLanding() {
    return (
        <>
            <div className="relative">
                <Img 
                src="/ImgNotSvg/house.jpg" 
                alt="house" 
                className="h-[700px] w-full object-cover brightness-[0.7]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <div className="flex flex-col items-center border-4 border-pink-500 rounded-3xl p-10 text-center">
                    <h1 className="text-4xl font-bold mb-4">AirBnB</h1>
                    <p className="text-xl">🥳 Scopri le migliori offerte per il tuo soggiorno 🏠</p>
                    <Button className="btn-secondary mt-5">Scopri le offerte ⭐️</Button>
                </div>
                </div>
            </div>
            <div className="m-10">
                <div className="flex flex-col md:flex-row items-center justify-center md:gap-10">
                    <Img src="/ImgBing/house.png" alt="house2" className="md:size-[400px] size-[200px]" />
                    <div className="flex flex-col items-center justify-center text-center">
                        <h2 className="md:text-2xl text-xl font-bold">🏠 Prenota ora il tuo soggiorno</h2>
                        <Button className="btn-secondary mt-5">Prenota ora 🚀</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentLanding