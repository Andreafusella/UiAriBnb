import Button from "../common/Button"
import Img from "../common/Img"

const arrImg: string[] = [
    "/ImgInterniCasa/interni1.png",
    "/ImgInterniCasa/interni2.jpg",
    "/ImgInterniCasa/interni3.jpg",
    "/ImgInterniCasa/interni4.avif",
    "/ImgInterniCasa/interni5.jpg",
    "/ImgInterniCasa/interni6.jpg",
    "/ImgInterniCasa/interni7.png",
    "/ImgInterniCasa/interni8.jpg",
    "/ImgInterniCasa/interni9.jpg",
    "/ImgInterniCasa/interni10.jpg",
]

function HotelInfo() {

    function getUrlImgRandom(arrImg: string[]) {
        let i : number = 0;
        i = Math.floor(Math.random() * arrImg.length);
        return arrImg[i];
    }

    return(
        <>
            <hr />
            <div className="container mx-auto px-4 my-5 max-w-[1120px]">
                <div className="flex justify-between mb-5">
                    <h1 className="text-3xl">Bellissima casa splendente 🏠</h1>
                    <div className="flex gap-5">
                        <Button>📲 Condividi</Button>
                        <Button>❤️ Salva</Button>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Img src={getUrlImgRandom(arrImg)} className="w-[560px] h-[470px] rounded-l-3xl object-cover"></Img>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <Img src={getUrlImgRandom(arrImg)} className="w-[270px] h-[231px] object-cover"></Img>
                            <Img src={getUrlImgRandom(arrImg)} className="w-[270px] h-[231px] rounded-tr-3xl object-cover"></Img>
                        </div>
                        <div className="flex gap-2">
                            <Img src={getUrlImgRandom(arrImg)} className="w-[270px] h-[231px] object-cover"></Img>
                            <Img src={getUrlImgRandom(arrImg)} className="w-[270px] h-[231px] rounded-br-3xl object-cover"></Img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotelInfo