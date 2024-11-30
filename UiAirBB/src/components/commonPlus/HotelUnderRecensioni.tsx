import { Bath, BedDouble, House, Trophy } from "lucide-react"
import Img from "../common/Img"

function HotelUnderRecensioni() {
    return (
        <div className="my-5">
            <div className="flex gap-5">
                <Img src="../../public/ImgSvg/logoHome.svg"></Img>
                <div>
                    <h1 className="font-medium">Nome dell'host: Marco</h1>
                    <h1 className="text-gray-400">Superhost</h1>
                </div>
            </div>
            <hr className="my-5"/>
            <div className="space-y-5">
                <div className="flex gap-5 items-center">
                    <Trophy color="#c8ca36" className="size-[35px] pl-2"/>
                    <div className="pl-1">
                        <h1>Il miglior 5% degli alloggi</h1>
                        <h1 className="text-sm text-gray-500">Questo alloggio ha un'ottima reputazione in base a valutazioni, recensioni e affidabilità.</h1>
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <BedDouble strokeWidth={1.5} className="size-[35px] pl-2"/>
                    <div className="pl-1">
                        <h1>Stanza in bed and breakfast</h1>
                        <h1 className="text-sm text-gray-500">La tua stanza in un alloggio, più l'accesso agli spazi condivisi.</h1>
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <House strokeWidth={1.5} className="size-[35px] pl-2"/>
                    <div className="pl-1">
                        <h1>Aree comuni condivise</h1>
                        <h1 className="text-sm text-gray-500">Condividerai alcune aree dell'alloggio.</h1>
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <Bath strokeWidth={1.5} className="size-[35px] pl-2"/>
                    <div className="pl-1">
                        <h1>Bagno privato</h1>
                        <h1 className="text-sm text-gray-500">Questo alloggio ha un bagno a tuo uso esclusivo.</h1>
                    </div>
                </div>
            </div>

        </div>
    ) 
}

export default HotelUnderRecensioni