import { Star } from "lucide-react"

function CardHotelInfoRecensioni() {
    return(
        <div className="my-5">
            <button className="w-full border-[1px] border-gary-300 md:px-[28px] md:py-[20px] p-4 rounded-xl flex justify-between items-center gap-8 hover:bg-slate-100 transition-all">
                <h1 className="md:text-base text-sm font-medium ml-4">Amato dagli ospiti</h1>
                <div>
                    <h1 className="text-base font-medium hidden md:block">Uno degli alloggi più amato <br /> dagli ospiti di Roptin</h1>
                    <hr className="md:hidden h-12 border-[0.5px] border-gray-200"/>
                </div>
                <div className="">
                    <h1 className="text-lg font-medium">4.94</h1>
                    <p className="flex"><Star className="size-[16px]"/>
                        <Star className="size-[16px]"/>
                        <Star className="size-[16px]"/>
                        <Star className="size-[16px]"/>
                        <Star className="size-[16px]"/>
                    </p>
                </div>
                <hr className="h-12 border-[0.5px] border-gray-200 max-[400px]:hidden"/>
                <div className="flex flex-col -space-y-2 mr-4 max-[400px]:hidden">
                    <h1 className="text-lg font-medium">120</h1>
                    <h1 className="underline">Recensioni</h1>
                </div>
            </button>
        </div>
    )
}

export default CardHotelInfoRecensioni