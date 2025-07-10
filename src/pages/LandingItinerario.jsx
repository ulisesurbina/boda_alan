import '../styles/Pages.css';

import { motion } from "framer-motion";

function LandingItinerario() {

  const events = [
  {
    title: "Ceremonia Religiosa",
    time: "15:00 - 16:00 hrs",
    mapTitle: "Parroquia de San Bernardino de Siena",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4505.964650124654!2d-98.89754769999999!3d19.477072900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e6ee8368ee63%3A0x43ce9bb80abc8574!2sParroquia%20de%20San%20Bernardino%20de%20Siena!5e1!3m2!1sen!2smx!4v1750053050182!5m2!1sen!2smx"
  },
  {
    title: "Ceremonia Cívica",
    time: "17:00 - 17:30 hrs"
  },
  {
    title: "Recepción en Jardín",
    time: "17:30 - 18:00 hrs",
    mapTitle: "Hacienda de los Ángeles",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4505.3378531744365!2d-98.92332909999999!3d19.499595799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e6788ce8df21%3A0x41a0ce88fc184fa1!2sHacienda%20de%20los%20Angeles!5e1!3m2!1sen!2smx!4v1750052896568!5m2!1sen!2smx"
  },
  {
    title: "Inicio del Evento en Jardín",
    time: "18:00 hrs"
  },
  {
    title: "Cena",
    time: "18:30 - 19:30 hrs"
  },
  {
    title: "Fiesta",
    time: "19:30 - 03:00 hrs"
  },
  {
    title: "Fin del Evento en Jardín",
    time: "03:00 hrs"
  },
  {
    title: "After Party",
    time: "03:00 hrs - ∞ hrs",
    mapTitle: "Ubicación After",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1501.882257207231!2d-98.9141162!3d19.5269288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e6055738a4c9%3A0xbe8f7e3bf16a9092!2sCorregidora%2C%20Vicente%20Riva%20Palacio%2C%2056200%20Vicente%20Riva%20Palacio%2C%20M%C3%A9x.!5e1!3m2!1sen!2smx!4v1719411144455!5m2!1sen!2smx"
  }
];

  return (
    <section className='ContainerItinerario'>
      <section className="wedding-schedule">
        <h2 className="wedding-title">Programa</h2>
        <div className="event-list">
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-time">{event.time}</p>
              {event.mapSrc && (
                <div className="map-container">
                  <iframe
                    src={event.mapSrc}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={event.mapTitle}
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}

export default LandingItinerario