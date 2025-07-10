import '../styles/Navbar.css'
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../assets/logo_sinBG.png'
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className="NavbarContainer">
      <section className='NavbarContainer__principal'>
        <picture>
          <img src={logo} alt="logo boda" />
        </picture>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <button>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>

        <section className={`MenuExpandido ${menuOpen ? 'active' : ''}`}>
          <div className='NavbarContainer__section'>
            <Link smooth to="/#PrincipalHero" onClick={() => setMenuOpen(false)}>Inicio</Link>
          </div>
          <div className='NavbarContainer__section'>
            <Link smooth to="/#NuestraHistoria" onClick={() => setMenuOpen(false)}>Sobre nosotros</Link>
          </div>
          <div className='NavbarContainer__section'>
            <Link smooth to="/itinerario" onClick={() => setMenuOpen(false)}>Itinerario</Link>
          </div>
          <div className='NavbarContainer__section'>
            <Link smooth to="/#FormAbsolute" onClick={() => setMenuOpen(false)}>Confirma tu asistencia</Link>
          </div>
          <div className='NavbarContainer__section'>
            <Link smooth to="/itinerario/#VenueMaps" onClick={() => setMenuOpen(false)}>Ubicación</Link>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Navbar