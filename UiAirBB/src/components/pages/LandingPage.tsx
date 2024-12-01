import { useNavigate } from "react-router-dom"
import ContentLanding from "../commonPlus/ContentLanding"
import Footer from "../commonPlus/Footer"
import Navbar from "../commonPlus/Navbar"
import { useState } from "react"
import Dialog from "../common/Dialog"


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

      <Dialog 
        label="Login" 
        idModal="loginModal" 
        idForm="loginForm" 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        inputs={[
          {id: "inputEmailLogin", name: "email", text: "Email", placeholder: "example@ex.it", type: "email"},
          {id: "inputPasswordLogin", name: "password", text: "Password", placeholder: "********", type: "password"}
        ]} 
      />

      <Dialog 
        label="Register" 
        idModal="registerModal" 
        idForm="registerForm" 
        isOpen={isRegisterModalOpen} 
        onClose={() => setIsRegisterModalOpen(false)} 
        inputs={[
          {id: "inputName", name: "name", text: "Nome", placeholder: "Mario", type: "text"},
          {id: "inputLastName", name: "lastName", text: "Cognome", placeholder: "Rossi", type: "text"},
          {id: "inputEmailRegister", name: "email", text: "Email", placeholder: "example@ex.it", type: "email"},
          {id: "inputPasswordRegister", name: "password", text: "Password", placeholder: "********", type: "password"}
        ]} 
      />
    </>
  )
}

export default LandingPage