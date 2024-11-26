import Button from "../common/Button"
import Img from "../common/Img"
import LinkText from "../common/LinkText"



function Navbar() {
  return (
    <>
        <div className="h-20 bg-slate-200 py-4 px-8 items-center flex justify-between">
            <div className="flex items-center gap-3">
            <Img src="/imgSvg/logo.svg" alt="logo" className="size-14" />
            <h1 className="text-2xl font-bold">UI AirBnB</h1>
        </div>
        <div className="flex items-center gap-7">
            <LinkText className="hover:text-blue-500 transition duration-200 text-lg" href="#">Home</LinkText>
            <LinkText className="hover:text-blue-500 transition duration-200 text-lg" href="#">About</LinkText>
            <LinkText className="hover:text-blue-500 transition duration-200 text-lg" href="#">Contact</LinkText>
        </div>
        <div className="flex items-center gap-3">
            <Button className="btn-primary" onClick={() => {}}>Login</Button>
            <Button className="btn-primary" onClick={() => {}}>Registrati</Button>
            </div>
        </div>
        {/* inserire dialog */}
    </>
  )
}

export default Navbar
