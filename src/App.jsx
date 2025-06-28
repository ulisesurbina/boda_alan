import React, { useRef, useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
import LandingHistoria from './pages/LandingHistoria.jsx';
import LandingItinerario from './pages/LandingItinerario.jsx';
import audiomp3 from '../public/original.mp3';

function App() {
  const audioRef = useRef(null);
  const [reproduciendo, setReproduciendo] = useState(true);

  const toggleMusica = () => {
    if (audioRef.current) {
      if (reproduciendo) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setReproduciendo(!reproduciendo);
    }
  };

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

   useEffect(() => {
      if (audioRef.current) {
        audioRef.current.currentTime = 4;
        audioRef.current.play().catch(error => {
          console.log('No se pudo reproducir automáticamente:', error);
          setReproduciendo(false);
        });
        const audio = audioRef.current;
        
        const handlePlay = () => setReproduciendo(true);
        const handlePause = () => setReproduciendo(false);

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);

        return () => {
          audio.removeEventListener('play', handlePlay);
          audio.removeEventListener('pause', handlePause);
        };
      }
    }, []);

  return (
    <Router onClick={playMusic}>
      <Navbar />
        <Routes>
          <Route path="/" element={<Body reproduciendo={reproduciendo} toggleMusica={toggleMusica} />} />
          <Route path="/historia" element={<LandingHistoria />} />
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