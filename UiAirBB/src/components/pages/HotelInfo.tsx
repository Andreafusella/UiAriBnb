import CardHotelInfoRecensioni from "../commonPlus/CardHotelInfoRecensioni";
import CardPrenotationHotel from "../commonPlus/CardPrenotationHotel";
import ImgHotelInfo from "../commonPlus/ImgHotelInfo";

function HotelInfo() {
    return(
        <>
            <hr />
            <div className="container mx-auto px-4 my-5 max-w-[1120px]">
                <ImgHotelInfo></ImgHotelInfo>
                <div className="flex justify-between mt-10">
                    <div>
                        <div className="flex flex-col">
                            <h1 className="text-xl font-semibold">Italia. Agriturismo</h1>
                            <div>
                                <h1 className="flex items-center gap-1">
                                    2 ospiti 
                                    <span className="flex items-center">•</span> 
                                    1 camera da letto 
                                    <span className="flex items-center">•</span> 
                                    2 letto 
                                    <span className="flex items-center">•</span> 
                                    1 bagno
                                </h1>
                            </div>
                        </div>
                        <CardHotelInfoRecensioni></CardHotelInfoRecensioni>
                    </div>
                    <div className="flex justify-center items-center">
                        <CardPrenotationHotel></CardPrenotationHotel>
                        {/* sistemare input className */}
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default HotelInfo