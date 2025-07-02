import React, { useRef, useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import Navbar from './components/Navbar.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
import LandingItinerario from './pages/LandingItinerario.jsx';
import audiomp3 from '../public/original.mp3';

function App() {
  const audioRef = useRef(null);
  const [reproduciendo, setReproduciendo] = useState(true);
  const [musicStarted, setMusicStarted] = useState(false);

  const toggleMusica = () => {
    if (audioRef.current) {
      if (reproduciendo) {
        audioRef.current.volume = 0;
      } else {
        audioRef.current.volume = 1;
      }
      setReproduciendo(!reproduciendo);
    }
  };

   useEffect(() => {
    const handleUserClick = () => {
      if (!musicStarted && audioRef.current) {
        audioRef.current.currentTime = 4;
        audioRef.current.volume = 1;
        audioRef.current.play()
          .then(() => setReproduciendo(true))
          .catch(() => setReproduciendo(false));
        setMusicStarted(true);
      }
    };
    document.addEventListener('click', handleUserClick, { once: true });
    return () => {
      document.removeEventListener('click', handleUserClick);
    };
  }, [musicStarted]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Body reproduciendo={reproduciendo} toggleMusica={toggleMusica} />} />
          <Route path="/itinerario" element={<LandingItinerario />} />
        </Routes>
      <Footer />
      <audio ref={audioRef} loop autoPlay>
        <source src={audiomp3} type="audio/mp3" />
        Tu navegador no soporta audio HTML5.
      </audio>
    </Router>
  )
}

export default App