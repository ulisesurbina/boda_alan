import React, { useRef, useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import Navbar from './components/Navbar.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
import Loader from './components/Loader.jsx'
import LandingItinerario from './pages/LandingItinerario.jsx';
import audiomp3 from '../public/original.mp3';

function App() {
  const audioRef = useRef(null);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [cargando, setCargando] = useState(true);

  const toggleMusica = () => {
    setReproduciendo(prev => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => setCargando(false), 3000); // 3 segundos de carga
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (reproduciendo) {
        if (!audioRef.current) {
          audioRef.current.currentTime = 4;
          audioRef.current = true;
        }
        audioRef.current.play().catch(err => console.error("Error al reproducir:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [reproduciendo]);

  const handleEnded = () => {
    if (reproduciendo && audioRef.current) {
      audioRef.current.currentTime = 4;
      audioRef.current.play();
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  return (
    <>
      {cargando ? (
        <Loader />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Body reproduciendo={reproduciendo} toggleMusica={toggleMusica} />} />
            <Route path="/itinerario" element={<LandingItinerario />} />
          </Routes>
          <Footer />
          <audio ref={audioRef} onEnded={handleEnded} loop autoPlay>
            <source src={audiomp3} type="audio/mp3" />
            Tu navegador no soporta audio HTML5.
          </audio>
        </Router>
      )}
    </>
  )
}

export default App