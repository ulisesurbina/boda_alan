import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
import LandingHistoria from './pages/LandingHistoria.jsx';
import LandingItinerario from './pages/LandingItinerario.jsx';

function App() {

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/historia" element={<LandingHistoria />} />
          <Route path="/itinerario" element={<LandingItinerario />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App