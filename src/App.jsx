import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Portfolio from '../components/Portfolio.jsx'
import Contact from '../components/Contact.jsx'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
