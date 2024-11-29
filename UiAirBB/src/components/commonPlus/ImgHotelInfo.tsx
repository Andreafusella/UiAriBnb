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

function ImgHotelInfo() {

    function getUrlImgRandom(arrImg: string[]) {
        let i : number = 0;
        i = Math.floor(Math.random() * arrImg.length);
        return arrImg[i];
    }

    return(
        <>
            <div className="flex flex-col xl:flex-row xl:justify-between mb-5 text-center">
                <h1 className="text-3xl mb-3 xl:mb-0">Bellissima casa splendente 🏠</h1>
                <div className="flex gap-5 justify-center">
                    <Button>📲 Condividi</Button>
                    <Button>❤️ Salva</Button>
                </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-2">
                <Img src={getUrlImgRandom(arrImg)} className="w-[80%] xl:w-[560px] h-[470px] rounded-xl xl:rounded-l-xl xl:rounded-r-none object-cover m-auto"></Img>
                <div className="hidden xl:flex flex-col gap-2">
                    <div className="flex gap-2">
                        <Img src={getUrlImgRandom(arrImg)} className="w-[270px] h-[231px] object-cover"></Img>
                        <Img src={getUrlImgRandom(arrImg)} className="w-[270px] h-[231px] rounded-tr-xl object-cover"></Img>
                    </div>
                    <div className="flex gap-2">
                        <Img src={getUrlImgRandom(arrImg)} className="w-[270px] h-[231px] object-cover"></Img>
                        <Img src={getUrlImgRandom(arrImg)} className="w-[270px] h-[231px] rounded-br-xl object-cover"></Img>
                    </div>
                </div>
            </div>
        </>
        
            
    )
}

export default ImgHotelInfo