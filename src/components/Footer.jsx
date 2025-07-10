import '../App.css'
import bg from '../assets/boda_16.webp'
import linkedin from '../assets/linkedin.svg'

function Footer() {

  return (
    <div className="FooterContainer">
      <picture>
        <img src={bg} alt="bg footer" />
      </picture>
      <h2>&copy; By <a href="https://portafolio-ulisesurbina.netlify.app/" target="_blank">Ulises U.M.</a></h2>
      <a href="https://www.linkedin.com/in/ulisesurbina111/" target='_blank'><img className='ImgLinkedin' src={linkedin} alt='linkedin'/></a>
    </div>
  )
}

export default Footer