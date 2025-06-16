import RotatingText from './RotateText'
import Countdown from '../utils/Countdown';

import '../App.css'
import '../styles/RotatingText.css'
import bannerMano from '../assets/boda_16.webp'

function Banner() {

  return (
    <section className='ContainerBannerGeneral'>
      <div className='HeroBanner'>
        <img src={bannerMano} alt="test" />
        <div className='ContenidoBanner'>
          <RotatingText
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
          <h3>18 Octubre 2025</h3>
          <div className='ContenidoBanner_texto'>
            <h3>¡Bienvenidos a nuestra historia de amor! <span className="Heart">♥</span></h3>
            <h4>Nos emociona compartir con ustedes este momento tan especial. <br /> Por favor confirma tu asistencia lo antes posible, <br /> así sabremos si contamos contigo para celebrar juntos. <br /> Esperamos verte dentro de:</h4>
          </div>
          <Countdown />
        </div>
      </div>
    </section>
  )
}

export default Banner