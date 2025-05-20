import '../App.css'

function Banner() {

  return (
    <section className='ContainerBannerGeneral'>
      <div className='HeroBanner'>
        <img src="../../public/hero.png" alt="test" />
        <div className='ContenidoBanner'>
          <h2>Araceli & Alan</h2>
          <h3>18 Octubre 2025</h3>
          <div className='ContenidoBanner_texto'>
            <h3>¡Bienvenidos a nuestra historia de amor! ♥</h3>
            <h4>Nos emociona compartir con ustedes este momento tan especial. <br /> Por favor confirma tu asistencia lo antes posible, <br /> así sabremos si contamos contigo para celebrar juntos. <br /> ¡Disfruta el sitio y esperamos verte muy pronto!</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner