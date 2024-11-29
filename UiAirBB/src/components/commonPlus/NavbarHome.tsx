import { useState } from "react"
import Button from "../common/Button"
import Img from "../common/Img"
import LinkText from "../common/LinkText"
import { useLocation, useNavigate } from "react-router-dom"


function NavbarHome(){
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const location = useLocation();
    const isHotelPage = location.pathname.includes('/HotelInfo');

    function Logout() {
        localStorage.clear()
        navigate("/")
    }

    return(

        <>
            {!isHotelPage ? (
                <>
                    {/* Overlay scuro quando il menu è aperto */}
                    {isMenuOpen && (
                        <div 
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            onClick={toggleMenu}
                        ></div>
                    )}

                    <div className="flex justify-between items-center p-5 md:px-10 relative z-30">
                        {/* Hamburger menu per mobile */}
                        <button 
                            className="md:hidden"
                            onClick={toggleMenu}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>

                        {/* Logo */}
                        <div className="flex items-center gap-1">
                            <Img src="/imgSvg/logo.svg" alt="logo" className="w-20" />
                            <h1 className="text-2xl font-bold">AirBB</h1>
                        </div>

                        {/* Menu desktop */}
                        <div className="hidden md:flex gap-3">
                            <LinkText href="#" className="font-bold hover:bg-slate-200 rounded-3xl p-3">Soggiorni</LinkText>
                            <LinkText href="#" className="font-bold hover:bg-slate-200 rounded-3xl p-3">Esperienze</LinkText>
                        </div>

                        <div className="hidden md:block">
                            <Button onClick={Logout} className="btn-primary text-white">Logout</Button>
                        </div>
                    </div>

                    {/* Menu mobile a scomparsa */}
                    <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg 
                                    transform transition-transform duration-300 ease-in-out 
                                    ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
                                    md:hidden z-50`}>
                        <div className="p-5">
                            <button 
                                className="mb-5"
                                onClick={toggleMenu}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="flex flex-col gap-4">
                                <LinkText href="#" className="font-bold hover:bg-slate-200 rounded-3xl p-3">Soggiorni</LinkText>
                                <LinkText href="#" className="font-bold hover:bg-slate-200 rounded-3xl p-3">Esperienze</LinkText>
                            </div>
                            <div className="mt-10">
                                <Button onClick={Logout} className="btn-primary text-white">Logout</Button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div></div>
            )}

        </>
    )
}

export default NavbarHome