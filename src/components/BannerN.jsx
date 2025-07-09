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
          <div className='ContenidoBanner_texto' data-aos="zoom-in">
            <h5>¡Bienvenidos a nuestra historia de amor! <span className="Heart"><svg width="100%" height="100%" viewBox="0 0 1387 1233" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M328.667 2.12299C266 10.6563 203.067 37.8563 140.267 83.5897C122.667 96.3897 106.533 111.723 93.2 128.256C43.7333 189.723 12 268.39 2 353.99C-0.666667 376.656 -0.666667 429.456 2 452.656C10.8 530.923 38.6667 605.456 86 677.323C124.267 735.323 175.333 790.923 239.333 844.256C264.133 864.923 297.467 890.79 375.333 949.99C504.8 1048.39 564.4 1096.92 619.067 1148.66C649.733 1177.59 672.267 1202.92 691.067 1229.32L693.333 1232.66L695.733 1229.32C741.067 1164.92 819.867 1095.19 1011.33 949.99C1122.53 865.59 1150 843.59 1189.6 806.923C1207.47 790.523 1237.07 759.723 1251.6 742.656C1312.67 670.656 1354.4 592.39 1373.87 513.323C1383.2 475.59 1386.67 446.123 1386.67 403.99C1386.67 352.79 1380.53 311.723 1366 265.323C1344.27 196.256 1301.33 127.323 1258 92.2563C1246.13 82.6563 1211.73 59.723 1195.33 50.3897C1108.4 1.05632 1022.8 -12.1437 941.733 11.1897C867.333 32.6563 794.533 87.5897 734.667 167.323C721.2 185.19 704.533 210.123 697.867 222.256C695.733 226.123 693.733 229.323 693.333 229.323C692.933 229.323 691.2 226.523 689.333 223.056C683.733 212.39 663.067 181.59 650.4 164.923C603.6 103.59 552.133 59.323 495.333 31.323C461.333 14.6563 430.533 5.32299 395.333 1.32299C378.933 -0.543676 344.933 -0.143677 328.667 2.12299Z" fill="currentColor"/>
            </svg></span></h5>
            <h5>"Uno solo puede ser vencido, pero dos pueden resistir. <br /> ¡La cuerda de tres hilos no se rompe fácilmente!" - Eclesiastés 4:12</h5>
            <h4>Tenemos el honor de invitarte a la celebración de nuestra unión en matrimonio el próximo:</h4>
          </div>
          <h2 data-aos="zoom-in">18 Octubre 2025</h2>
          <div className='ContenidoBanner_texto' data-aos="zoom-in">
            <h4>Agradecemos de antemano tu confirmación, esperamos verte en:</h4>
          </div>
          <Countdown />      
        </div>
      </div>
    </section>
  )
}

export default Banner