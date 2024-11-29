import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./components/pages/HomePage"
import LandingPage from "./components/pages/LandingPage"
import HotelInfo from "./components/pages/HotelInfo"
import ProtectedRoute from "./components/common/ProtectedRoute"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/HomePage" element=
          {
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }>
          <Route path="HotelInfo" element=
            {
              <ProtectedRoute>
                <HotelInfo />
              </ProtectedRoute>  
            } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
