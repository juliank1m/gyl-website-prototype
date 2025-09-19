import React from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Events from "./components/Events/Events"
import Volunteering from "./components/Volunteering/Volunteering"
import Pamphlets from "./components/Pamphlets/Pamphlets"
import Register from "./pages/Register/Register"
import Donations from "./pages/Donations/Donations"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Events />
              <Volunteering />
              <Pamphlets />
            </>
          }
        />
        {/* Subpages */}
        <Route path="/register" element={<Register />} />
        <Route path="/donations" element={<Donations />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
