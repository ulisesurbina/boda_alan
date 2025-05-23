import '../styles/Navbar.css'
import logo from '../assets/logo_sinBG.png'

function Navbar() {

  return (
    <div className="NavbarContainer">
      <section className='NavbarContainer__principal'>
        <figure>
            <img src={logo} alt="logo boda" />
        </figure>
        <div className='NavbarContainer__section'>
            <a href=''>Inicio</a>
        </div>
        <div className='NavbarContainer__section'>
            <a href=''>Sobre nosotros</a>
        </div>
        <div className='NavbarContainer__section'>
            <a href=''>Confirma tu asistencia</a>
        </div>
        <div className='NavbarContainer__section'>
            <a href=''>Itinerario</a>
        </div>
        <div className='NavbarContainer__section'>
            <a href=''>Venue</a>
        </div>
      </section>
    </div>
  )
}

export default Navbar