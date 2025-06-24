import '../App.css'
import Banner from './Banner';
import { useState } from 'react';
import Stepper, { Step } from '../components/Stepper';
import { Link } from 'react-router-dom';
import flowers from '../assets/flowers.png'
import imgBody1 from '../assets/boda_12reflec.webp'
import flowersCircle from '../assets/flowersCircle.png'
import imgBodyCircle from '../assets/boda_6.webp'
import imgBody2_8 from '../assets/imgBody2_8.png'
import flowers90 from '../assets/flowers90.png'
import imgBody9 from '../assets/boda_2.webp'
import imgBody10 from '../assets/boda_4.webp'
import imgBody11 from '../assets/boda_5.webp'
import imgBody12 from '../assets/boda_15.webp'
import flower45 from '../assets/flower45.png'

function Body() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        telefono: '',
        correo: '',
        invitados: '',
        dudas: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const sendToGoogleSheets = () => {
        fetch("https://script.google.com/macros/s/AKfycbwR8bvOtfYItXpMJOsFcnv7m9U6DOma2ycFex1HvvD6iCS35UaDFSD0Gjbr3NfHGTMz/exec", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
            "Content-Type": "application/json",
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log("Registro exitoso:", data);
            alert("Tus datos fueron registrados. ¡Gracias!");
            setFormData({
            nombre: '',
            apellidos: '',
            telefono: '',
            correo: '',
            invitados: '',
            dudas: ''
            });
        })
        .catch(err => {
            console.error("Error al registrar:", err);
            alert("Hubo un problema al registrar tus datos.");
        });
    };

  return (
    <div className='BodyContainer'>
        <Banner />
        <section className='HistoryContainer'>
            <picture className='HistoryContainer_flowers'>
                <img src={flowers} alt="flores presentación" />
            </picture>
            <h2>Nuestra Historia</h2>
            <p>El amor verdadero no es solamente encontrar a la persona indicada, sino ser la persona indicada. <br /> Después de 5 años juntos, decidimos dar el siguiente paso en nuestro camino y queremos que seas parte de este día tan especial.</p>
            <p>Te invitamos a ser parte de este momento tan especial en nuestras vidas.</p>
            <p>Tu presencia será el mejor regalo.</p>
            <picture className='HistoryContainer_img'>
                <img src={imgBody1} alt="imagen o video" />
            </picture>
            <Link to="/historia" className="ButtonHistory">Conocer más</Link>
        </section>
        <section className='LocationContainer'>
            <div className='LocationContainer_containerImg'>
                <picture className='LocationContainer_flowers'>
                    <img src={flowersCircle} alt="flowers circle" />
                </picture>
                <picture className='LocationContainer_circle'>
                    <img src={imgBodyCircle} alt="img location" />
                </picture>
            </div>
            <div className='LocationContainer_text'>
                <h2>Itinerario</h2>
                <h3>Ceremonia Religiosa: 15:00 - 16:00 hrs</h3>
                <h3>Ceremonia Cívica: 17:00 - 17:30 hrs</h3>
                <h3>Recepción en Jardín: 17:30 - 18:00 hrs</h3>
                <h3>Inicio del Evento en Jardín: 18:00 hrs</h3>
                <h3>Cena: 18:30 - 19:30 hrs</h3>
                <h3>Fiesta: 19:30 - 03:00 hrs</h3>
                <h3>Fin del Evento en Jardín: 03:00 hrs</h3>
                <h3>After Party: 03:00 - ∞ hrs</h3>
            </div>
            <Link to="/itinerario" className="ButtonItinerario">Ver detalles</Link>
        </section>
        <section className='GalleryContainer'>
            <div className='GalleryContainer_principal'>
                <div className='GalleryContainer_text'>
                    <h2>Galería</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nostrum voluptatibus eligendi et. Culpa architecto odio aut voluptates incidunt, ipsum eos, quaerat et at id assumenda quis? Quasi, quia explicabo?</p>
                    <ul>
                        <li>Non ac iaculis lobortis </li>
                        <li>Gravida ullamcorper</li>
                        <li>Sed lectus ultricies</li>
                        <li>Aenean posuere urna</li>
                    </ul>
                </div>
                <picture className='GalleryContainer_imgs'>
                    <img src={imgBody2_8} alt="img sobre otra" />
                </picture>
            </div>
            <picture className='GalleryContainer_principalImg'>
                <img src={flowers90} alt="flores inclinadas" />
            </picture>
        </section>
        <section className='GiftTableContainer'>
            <h2>Mesa de Regalos</h2>
            <div className='GiftTableContainer_grid'>
                <div className='GiftTableContainer_gridItem'>
                    <picture>
                        <img src={imgBody9} alt="img bg" />
                    </picture>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 5h-5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-2.5 7.5a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3m0-1.5A1.5 1.5 0 0 1 16 9.5A1.5 1.5 0 0 1 17.5 8A1.5 1.5 0 0 1 19 9.5a1.5 1.5 0 0 1-1.5 1.5M12 15V5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2zm-2-3H4V7h6z"/></svg>
                        <h3>Photography</h3>
                    </div>
                </div>
                <div className='GiftTableContainer_gridItem'>
                     <picture>
                        <img src={imgBody10} alt="img bg" />
                    </picture>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.95 18.35L7.4 14.8l1.45-1.45l2.1 2.1l4.2-4.2l1.45 1.45zM5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"/></svg>
                        <h3>Event Planning</h3>
                    </div>
                </div>
                <div className='GiftTableContainer_gridItem'>
                     <picture>
                        <img src={imgBody11} alt="img bg" />
                    </picture>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><g fill="currentColor"><path fillRule="evenodd" d="m10 2.702l-.354-.108A2.628 2.628 0 0 0 6.272 5.45l.19 1.442A3 3 0 0 0 9.436 9.5h1.127a3 3 0 0 0 2.974-2.609l.19-1.442a2.628 2.628 0 0 0-3.374-2.855zM8.795 4.484a.6.6 0 0 1 .265.023l.938.287l.939-.288a.628.628 0 0 1 .806.683l-.19 1.441a1 1 0 0 1-.991.87H9.436a1 1 0 0 1-.991-.87l-.19-1.441a.63.63 0 0 1 .54-.705" clipRule="evenodd"/><path fillRule="evenodd" d="M11.994 8H7.767a3 3 0 0 0-1.534.421q-2.547 1.515-3.765 3.41c-.26.404-.522.773-.768 1.117c-1.07 1.499-1.813 2.538-.495 4.041C2.825 18.84 6.26 20 9.63 20s6.726-.685 8.905-3.01c1.613-1.723.943-2.49-.1-3.685c-.366-.419-.778-.89-1.153-1.474q-1.265-1.968-3.783-3.427A3 3 0 0 0 11.994 8m3.605 4.912a11 11 0 0 0 .996 1.315c.282.334.646.764.823.99a5 5 0 0 1-.344.405C15.557 17.242 13.041 18 9.63 18c-2.908 0-5.757-1.003-6.92-2.33c-.195-.221-.21-.226-.21-.23l.001-.001c.03-.118.146-.343.394-.712l.294-.418c.27-.383.648-.918.812-1.166q.077-.116.15-.23C4.783 11.93 5.809 11 7.256 10.14a1 1 0 0 1 .512-.14h4.227a1 1 0 0 1 .502.135c1.417.821 2.442 1.75 3.102 2.777" clipRule="evenodd"/><path d="M5.804 1.279A.75.75 0 0 1 7.196.72l1 2.5a.75.75 0 0 1-1.392.558zm7-.558a.75.75 0 0 1 1.392.558l-1 2.5a.75.75 0 0 1-1.392-.558zM9.5 12.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0zm-2.447-.223a.5.5 0 1 1 .894.446l-1.5 3.008a.5.5 0 0 1-.894-.447zm5.894-.001a.5.5 0 1 0-.894.448l1.5 3a.5.5 0 1 0 .894-.448z"/></g></svg>
                        <h3>Wedding Dress</h3>
                    </div>
                </div>
            </div>
        </section>
        <section className='DressCodeContainer'>
            <h2>Código de Vestimenta</h2>
            <div className='DressCodeContainer_position'>
                <picture className='DressCodeContainer_position_img'>
                    <img src={imgBody12} alt="img referencia" />
                </picture>
                <section className='DressCodeContainer_position_text'>
                    <picture className='DressCodeContainer_position_flowers'>
                        <img src={flowers} alt="flores presentación" />
                    </picture>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis vero, mollitia numquam et quia voluptas corporis asperiores nam facere? Error, rem deserunt eius nisi rerum sed labore maiores perspiciatis eum?</p>
                </section>
            </div>
        </section>
        <section className='EventGridContainer'>
            <h2>Nuestra pasión es su evento perfecto</h2>
            <section className='EventGridContainer_imgGrid'>
                <div className="item item1"></div>
                <div className="item item2"></div>
                <div className="item item3"></div>
                <div className="item item4"></div>
                <div className="item item5"></div>
                <div className="item item6"></div>
            </section>
            <picture className='EventGridContainer_img'>
                <img src={flower45} alt="flores inclinada" />
            </picture>
        </section>
        <section id='FormAbsolute' className='FormContainer'>
            <h2>Confirma tu Asistencia</h2>
            <section>
                <Stepper
                    initialStep={1}
                    onStepChange={(step) => {
                        console.log(step);
                    }}
                    onFinalStepCompleted={sendToGoogleSheets}
                    backButtonText="Anterior"
                    nextButtonText="Siguiente"
                    >
                    <Step>
                        <h3>Agradecemos tu interes</h3>
                        <p>Sigue los siguientes pasos para tu registro</p>
                    </Step>
                    <Step>
                        <h3>El evento es privado, no se puede acceder sin registro ni invitación</h3>
                        <p>* Pueden surgir cambios sin previo aviso</p>
                        <h3>Ingresa los datos solicitados</h3>
                        {/* <img style={{ height: 'auto', width: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '1rem', marginTop: '0rem' }} src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894" /> */}
                        <input placeholder="Nombre"  name="nombre" value={formData.nombre} onChange={handleChange}/>
                        <input placeholder="Apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} />
                        <input placeholder="Número de teléfono"  name="telefono" value={formData.telefono} onChange={handleChange}/>
                        <input placeholder="Correo" name="correo" value={formData.correo} onChange={handleChange}/>
                        <input placeholder="No. invitados (Incluido tú)"  name="invitados" value={formData.invitados} onChange={handleChange}/>

                    </Step>
                    <Step>
                        <h3>¿Tienes alguna duda respecto al evento?</h3>
                        <input placeholder="Tus dudas" name="dudas" value={formData.dudas} onChange={handleChange}/>
                    </Step>
                    <Step>
                        <h3>Gracias por registrarte</h3>
                        <p>Espera próximas noticias en tu Correo o Whatsapp</p>
                    </Step>
                </Stepper>
            </section>
            <section id='VenueMaps'>
                <div className="Gmap_canvas">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4505.3378531744365!2d-98.92332909999999!3d19.499595799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e6788ce8df21%3A0x41a0ce88fc184fa1!2sHacienda%20de%20los%20Angeles!5e1!3m2!1sen!2smx!4v1750052896568!5m2!1sen!2smx" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Hacienda de los Angeles"></iframe>
                </div>
                <div className="Gmap_canvas">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4505.964650124654!2d-98.89754769999999!3d19.477072900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e6ee8368ee63%3A0x43ce9bb80abc8574!2sParroquia%20de%20San%20Bernardino%20de%20Siena!5e1!3m2!1sen!2smx!4v1750053050182!5m2!1sen!2smx" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Parroquia de San Bernardino de Siena'></iframe>
                </div>
            </section>
            {/* <section>
                <form>
                <div className='FormContainer_input'>
                <input type="text" placeholder='Nombre' />
                <input type="text" placeholder='Apellido' />
                </div>
                <div className='FormContainer_input'>
                <input type="email" placeholder='Email' />
                        <input type="tel" placeholder='Teléfono' />
                    </div>
                    <div className='FormContainer_input'>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Mensaje'></textarea>
                    </div>
                    <button>Enviar</button>
                </form>
            </section> */}
        </section>
    </div>
  )
}

export default Body