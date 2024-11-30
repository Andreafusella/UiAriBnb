import Img from "../common/Img"
import LinkText from "../common/LinkText"
function Footer() {
    return (
        <div className="bg-slate-200 text-white md:p-20 p-10 flex md:flex-row flex-col justify-between items-center">
            <div className="flex flex-col items-center">
                <Img src="/imgSvg/logo.svg" alt="logo" className="size-[100px]"></Img>
                <p className="text-black">© 2024 UI Roptin</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-10 text-center">
                <ul className="space-y-2 mt-2">
                    <li><LinkText href="#" className="hover:text-blue-500 text-black transition duration-200">Home</LinkText></li>
                    <li><LinkText href="#" className="hover:text-blue-500 text-black transition duration-200">About</LinkText></li>
                    <li><LinkText href="#" className="hover:text-blue-500 text-black transition duration-200">Contact</LinkText></li>
                </ul>
                <ul className="space-y-2">
                    <li><LinkText href="#" className="hover:text-blue-500 text-black transition duration-200">Privacy Policy</LinkText></li>
                    <li><LinkText href="#" className="hover:text-blue-500 text-black transition duration-200">Terms of Service</LinkText></li>
                    <li><LinkText href="#" className="hover:text-blue-500 text-black transition duration-200">Cookies</LinkText></li>
                </ul>
                <ul className="space-y-2">
                    <li><LinkText href="#" className="hover:text-blue-500 text-black transition duration-200">Privacy Policy</LinkText></li>
                    <li><LinkText href="#" className="hover:text-blue-500 text-black transition duration-200">Terms of Service</LinkText></li>
                    <li><LinkText href="#" className="hover:text-blue-500 text-black transition duration-200">Cookies</LinkText></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer