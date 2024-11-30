import CardHotelInfoRecensioni from "../commonPlus/CardHotelInfoRecensioni";
import CardPrenotationHotel from "../commonPlus/CardPrenotationHotel";
import HotelDescription from "../commonPlus/HotelDescription1";
import HotelUnderRecensioni from "../commonPlus/HotelUnderRecensioni";
import ImgHotelInfo from "../commonPlus/ImgHotelInfo";

function HotelInfo() {
    return(
        <>
            <hr />
            <div className="container mx-auto px-4 my-5 max-w-[1120px]">
                <ImgHotelInfo></ImgHotelInfo>
                <div className="flex md:flex-row flex-col justify-between mt-10">
                    <div>
                        <HotelDescription></HotelDescription>
                        <CardHotelInfoRecensioni></CardHotelInfoRecensioni>
                        <HotelUnderRecensioni></HotelUnderRecensioni>
                    </div>
                    <div className="flex justify-center">
                        <CardPrenotationHotel></CardPrenotationHotel>
                        {/* sistemare lunghezza cardprenotation */}
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default HotelInfo