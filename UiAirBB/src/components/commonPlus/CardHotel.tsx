import { Link } from "react-router-dom";
import Img from "../common/Img";

const arrImg: string[] = [
    "/ImgNotSvg/house1.jpg",
    "/ImgNotSvg/house2.jpg",
    "/ImgNotSvg/house3.jpg",
    "/ImgNotSvg/house4.jpg",
    "/ImgNotSvg/house5.jpeg",
    "/ImgNotSvg/house6.jpg",
];

function CardHotel() {

    function getUrlImgRandom(arrImg: string[]) {
        let i : number = 0;
        i = Math.floor(Math.random() * arrImg.length);
        return arrImg[i];
    }

    return(
        <div className="w-[270px] sm:w-[260px] md:w-[220px] lg:w-[230px] 2xl:w-[270px] border-[1px] p-2 rounded-3xl hover:bg-slate-100 transition-all relative">
                <button className="absolute top-4 right-6 text-2xl z-10">❤️</button>
                <Link to="/HomePage/HotelInfo">
                    <Img src={getUrlImgRandom(arrImg)} className="w-full aspect-square rounded-3xl object-cover"></Img>
                    <div className="flex justify-between mt-2 mx-3">
                        <div>
                            <h1>Pescara, Italia</h1>
                            <h1 className="text-gray-500">Host: Marco</h1>
                            <h1 className="mt-2"><span className="font-bold">120</span> $ notte</h1>
                        </div>
                        <div>
                            <h1 className="font-bold">⭐️ 4,5</h1>
                        </div>
                    </div>
                </Link>
        </div>
    )   
}

export default CardHotel