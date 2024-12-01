import { useState } from "react"
import Button from "../common/Button"
import Img from "../common/Img"
import LinkText from "../common/LinkText"

import { IUser } from "../interface/User"

interface INavbar {
  savedUser: IUser | null
  registerModalOpen : () => void
  loginModalOpen: () => void
  onEnter: () => void
}

function Navbar({onEnter, savedUser, registerModalOpen, loginModalOpen}: INavbar) {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Overlay scuro quando il menu è aperto */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden
          ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Menu Mobile Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header del Menu */}
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Img src="/imgSvg/logo.svg" alt="logo" className="size-8" />
            <h2 className="text-lg font-semibold">UI Roptin</h2>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contenuto del Menu */}
        <div className="p-4 flex flex-col gap-4">
          <LinkText 
            className="text-gray-700 hover:text-blue-500 transition duration-200 text-lg py-2 border-b" 
            href="#"
          >
            Home
          </LinkText>
          <LinkText 
            className="text-gray-700 hover:text-blue-500 transition duration-200 text-lg py-2 border-b" 
            href="#"
          >
            About
          </LinkText>
          <LinkText 
            className="text-gray-700 hover:text-blue-500 transition duration-200 text-lg py-2 border-b" 
            href="#"
          >
            Contact
          </LinkText>
        </div>

        {/* Footer del Menu con Bottoni */}
        <div className="absolute bottom-0 left-0 right-0 p-8 border-t bg-white">
          <div className="flex justify-between gap-2">
            <Button 
              className="btn-primary w-24" 
              onClick={registerModalOpen}
            >
              Registrati
            </Button>
            <Button 
              className="btn-primary w-24" 
              onClick={loginModalOpen}
            >
              Login
            </Button>
          </div>
        </div>
      </div>

      {/* Navbar principale*/}
      <div className="md:h-20 bg-slate-200 px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Img src="/imgSvg/logo.svg" alt="logo" className="size-10 md:size-14" />
          <h1 className="text-xl md:text-2xl font-bold">UI Roptin</h1>
        </div>

        {/* Hamburger Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Menu Desktop*/}
        <div className="hidden md:flex items-center gap-7">
          <LinkText className="hover:text-blue-500 transition duration-200 text-lg" href="#">Home</LinkText>
          <LinkText className="hover:text-blue-500 transition duration-200 text-lg" href="#">About</LinkText>
          <LinkText className="hover:text-blue-500 transition duration-200 text-lg" href="#">Contact</LinkText>
        </div>


        

        {/* Bottoni Desktop*/}
        <div className="hidden md:flex items-center gap-3">
          {!savedUser ?(
            <>
              <Button className="btn-primary" onClick={registerModalOpen}>Registrati</Button>
              <Button className="btn-primary" onClick={loginModalOpen}>Login</Button>
            </>
          ) : (
            
            <Button onClick={onEnter} className="btn-primary" >Entra</Button>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
