import '../styles/Pages.css';
import ejemplo from '../assets/itinerario.webp'

function LandingItinerario() {

  return (
    <section className='ContainerItinerario'>
        <h2>Itinerario</h2>
        <img src={ejemplo} alt="itinerario ejemplo" />
        <section id='VenueMaps'>
          <div className="Gmap_canvas">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4505.3378531744365!2d-98.92332909999999!3d19.499595799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e6788ce8df21%3A0x41a0ce88fc184fa1!2sHacienda%20de%20los%20Angeles!5e1!3m2!1sen!2smx!4v1750052896568!5m2!1sen!2smx" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Hacienda de los Angeles"></iframe>
          </div>
          <div className="Gmap_canvas">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4505.964650124654!2d-98.89754769999999!3d19.477072900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e6ee8368ee63%3A0x43ce9bb80abc8574!2sParroquia%20de%20San%20Bernardino%20de%20Siena!5e1!3m2!1sen!2smx!4v1750053050182!5m2!1sen!2smx" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Parroquia de San Bernardino de Siena'></iframe>
          </div>
          <div className="Gmap_canvas">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1501.882257207231!2d-98.9141162!3d19.5269288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e6055738a4c9%3A0xbe8f7e3bf16a9092!2sCorregidora%2C%20Vicente%20Riva%20Palacio%2C%2056200%20Vicente%20Riva%20Palacio%2C%20M%C3%A9x.!5e1!3m2!1sen!2smx!4v1719411144455!5m2!1sen!2smx" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación After" ></iframe>
          </div>
        </section>
    </section>
  )
}

export default LandingItinerario