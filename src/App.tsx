import { useLayoutEffect } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import Home from "./components/Home"
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"
import CookieConsent from "./components/CookieConsent" // Lisätty
import Header from "./components/Header"
import "./App.css"
import "./styles/responsive.css"

function RouterScrollManager() {
  const location = useLocation()

  useLayoutEffect(() => {
    // Pakottaa välittömän skrollauksen
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", backgroundColor: "#0e223a" }}>
        <RouterScrollManager />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/palvelut" element={<Services />} />
          <Route path="/yritys" element={<About />} />
          <Route path="/yhteys" element={<Contact />} />
        </Routes>
        <CookieConsent />
      </div>
    </Router>
  )
}

export default App
