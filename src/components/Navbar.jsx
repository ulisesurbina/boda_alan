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
          <Link smooth to="/#PrincipalHero">Inicio</Link>
        </div>
        <div className='NavbarContainer__section'>
          <Link smooth to="/#NuestraHistoria">Sobre nosotros</Link>
        </div>
        <div className='NavbarContainer__section'>
          <Link smooth to="/itinerario">Itinerario</Link>
        </div>
        <div className='NavbarContainer__section'>
          <Link smooth to="/#FormAbsolute">Confirma tu asistencia</Link>
        </div>
        <div className='NavbarContainer__section'>
          <Link smooth to="/itinerario/#VenueMaps">Venue</Link>
        </div>
      </section>
    </div>
  )
}

export default Navbar