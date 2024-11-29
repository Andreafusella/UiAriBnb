import { Outlet, useLocation } from "react-router-dom"
import GrillHome from "../commonPlus/GrillHome"
import NavbarHome from "../commonPlus/NavbarHome"
import ThreeSearchHotel from "../commonPlus/ThreeSearchHotel"
function HomePage(){
    const location = useLocation();
    const isHotelPage = location.pathname.includes('/HotelInfo');
    return(
        <>
            <NavbarHome/>
            <ThreeSearchHotel/>
            {isHotelPage ? <Outlet /> : <GrillHome />}
        </>
    )
}

export default HomePage