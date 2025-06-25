import '../App.css'
import bg from '../assets/boda_16.webp'
import linkedin from '../assets/linkedin.svg'

function Footer() {

  return (
    <div className="FooterContainer">
      <picture>
        <img src={bg} alt="bg footer" />
      </picture>
      <h2>&copy; 2025 Ulises Urbina - Todos los derechos reservados.</h2>
      <h2>💻 Diseñado y desarrollado por <a href="https://portafolio-ulisesurbina.netlify.app/" target="_blank">Ulises Urbina Maldonado</a></h2>
      <a href=""><img className='ImgLinkedin' src={linkedin} alt='linkedin'/></a>
    </div>
  )
}

export default Footer