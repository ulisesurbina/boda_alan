import RotatingText from '../utils/RotateText'
import Countdown from '../utils/Countdown';

import '../App.css'
import '../styles/RotatingText.css'
import bannerMano from '../assets/boda_16.webp'

function Banner({}) {

  return (
    <section id='PrincipalHero' className='ContainerBannerGeneral'>
      <div className='HeroBanner'>
        <img src={bannerMano} alt="test" />
        <div className='ContenidoBanner'>
          <h2 data-aos="zoom-out">Nuestra Boda</h2>
          <RotatingText
            data-aos="zoom-out"
            texts={['Araceli & Alan', 'Alan & Araceli']}
            mainClassName="PrincipalTitle"
            staggerFrom="last"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            staggerDuration={0.07}
            splitLevelClassName="ContainerPrincipalTitle"
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            rotationInterval={5000}
          />
          <div className='ContenidoBanner_texto' data-aos="zoom-out">
            <h5>¡Bienvenidos a nuestra historia de amor! <span className="Heart">♥</span></h5>
            <h5>"Uno solo puede ser vencido, pero dos pueden resistir. <br /> ¡La cuerda de tres hilos no se rompe fácilmente!" - Eclesiastés 4:12</h5>
            <h4>Tenemos el honor de invitarte a la celebración de nuestra unión en matrimonio el próximo:</h4>
          </div>
          <h2>18 Octubre 2025</h2>
          <div className='ContenidoBanner_texto'>
            <h4>Agradecemos de antemano tu confirmación, esperamos verte dentro de:</h4>
          </div>
          <Countdown />      
        </div>
      </div>
    </section>
  )
}

export default Banner