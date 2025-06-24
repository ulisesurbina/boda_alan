import '../App.css'
import bg from '../assets/boda_16.webp'

function Footer() {

  return (
    <div className="FooterContainer">
      <picture>
        <img src={bg} alt="bg footer" />
      </picture>
      <h2>&copy; 2025 Ulises Urbina - Todos los derechos reservados.</h2>
      <h2>💻 Diseñado y desarrollado por <a href="https://portafolio-ulisesurbina.netlify.app/" target="_blank">Ulises Urbina Maldonado</a></h2>
    </div>
  )
}

export default Footer