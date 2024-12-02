import { useNavigate } from "react-router-dom"
import ContentLanding from "../commonPlus/ContentLanding"
import Footer from "../commonPlus/Footer"
import Navbar from "../commonPlus/Navbar"
import { useState } from "react"
import LoginDialog from "../common/LoginDialog"
import RegisterDialog from "../common/RegisterDialog"


function LandingPage() {

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const navigate = useNavigate()

  function handlerEntra() {
    navigate("/HomePage")
  }

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  function loginModalOpen() {
    setIsRegisterModalOpen(false)
    setIsLoginModalOpen(true)
    setIsMobileMenuOpen(false)
  }

  function registerModalOpen() {
    setIsLoginModalOpen(false)
    setIsRegisterModalOpen(true)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <Navbar savedUser={user} 
              registerModalOpen={registerModalOpen} 
              loginModalOpen={loginModalOpen}
              onEnter={handlerEntra} 
      />        

      <ContentLanding 
              savedUser={user} 
              onEnter={handlerEntra} 
              onOpenModalLogin={loginModalOpen}
              onOpenModalRegister={registerModalOpen}
      />
      <Footer/>

      <LoginDialog 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
      />
      
      <RegisterDialog
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </>
  )
}

export default LandingPage