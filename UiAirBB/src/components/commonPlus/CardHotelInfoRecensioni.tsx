import { Star } from "lucide-react"

function CardHotelInfoRecensioni() {
    return(
        <div className="my-5">
            <button className="border-[1px] border-gray-300 p-3 px-5 rounded-xl flex justify-between items-center gap-10 hover:bg-slate-100 transition-all">
                <h1 className="text-base font-medium">Amato dagli ospiti</h1>
                <h1 className="text-base font-medium">Uno degli alloggi più amato <br /> dagli ospiti di AirBnb</h1>
                <div className="flex justify-center items-center gap-5">
                    <div className="flex flex-col">
                        <h1 className="text-lg font-medium">4.94</h1>
                        <p className="flex"><Star className="size-[16px]"/>
                            <Star className="size-[16px]"/>
                            <Star className="size-[16px]"/>
                            <Star className="size-[16px]"/>
                            <Star className="size-[16px]"/>
                        </p>
                    </div>
                    <hr className="h-12 border-[0.5px] border-gray-200"/>
                    <div className="flex flex-col">
                        <h1 className="text-lg font-medium">120</h1>
                        <h1 className="underline">Recensioni</h1>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default CardHotelInfoRecensioni