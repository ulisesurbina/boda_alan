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
          <h2>18 Octubre 2025</h2>
          <div className='ContenidoBanner_texto'>
            <h3>¡Bienvenidos a nuestra historia de amor! <span className="Heart">♥</span></h3>
            <h4>Nos emociona compartir con ustedes este momento tan especial. <br /> Contar con tu presencia será un verdadero honor, y agradecemos de antemano tu confirmación. <br /> Esperamos verte dentro de:</h4>
          </div>
          <Countdown />      
        </div>
      </div>
    </section>
  )
}

export default Banner