import '../styles/Navbar.css'
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../assets/logo_sinBG.png'

function Navbar() {

  return (
    <div className="NavbarContainer">
      <section className='NavbarContainer__principal'>
        <picture>
          <img src={logo} alt="logo boda" />
        </picture>
        <div className='NavbarContainer__section'>
          <Link to="/">Inicio</Link>
        </div>
        <div className='NavbarContainer__section'>
          <Link to="/historia">Sobre nosotros</Link>
        </div>
        <div className='NavbarContainer__section'>
          <Link to="/itinerario">Itinerario</Link>
        </div>
        <div className='NavbarContainer__section'>
          <Link smooth to="/#FormAbsolute">Confirma tu asistencia</Link>
        </div>
        <div className='NavbarContainer__section'>
          <Link smooth to="/#VenueMaps">Venue</Link>
        </div>
      </section>
    </div>
  )
}

export default Navbar