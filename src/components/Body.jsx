import '../App.css'
import Banner from './BannerN';
import Button from '../utils/Button';
import CircularGallery from '../utils/CircularGallery'
import RollingGallery from '../utils/RollingGallery'
import { useState } from 'react';
import AOS from 'aos';
import Stepper, { Step } from '../components/Stepper';
import silencio from '../assets/silencio.webp'
import volumen from '../assets/volumen.webp'
import flowers from '../assets/flowers.png'
import dress from '../assets/vestimenta.webp'
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
import anillos from '../assets/anillosNew.webp'

function Body({ reproduciendo, toggleMusica }) {
    // Estado del formulario que faltaba
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        telefono: '',
        correo: '',
        invitados: '',
        dudas: ''
    });

    // Estado para manejar la carga
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Función de validación
    const validateForm = () => {
        const required = ['nombre', 'apellidos', 'telefono', 'correo', 'invitados'];
        return required.every(field => formData[field].trim() !== '');
    };

    const sendToGoogleSheets = () => {
        // Validar antes de enviar
        if (!validateForm()) {
            alert("Por favor completa todos los campos obligatorios");
            return;
        }

        setIsLoading(true);
        
        // Método 1: Usar GET con parámetros URL (más confiable para CORS)
        const params = new URLSearchParams(formData);
        const url = `https://script.google.com/macros/s/AKfycbwR8bvOtfYItXpMJOsFcnv7m9U6DOma2ycFex1HvvD6iCS35UaDFSD0Gjbr3NfHGTMz/exec?${params}`;
        
        fetch(url, { 
            method: "GET",
            mode: 'no-cors' // Esto evita el preflight CORS
        })
        .then(() => {
            // Con no-cors no podemos leer la respuesta, asumimos éxito si no hay error
            console.log("Registro enviado");
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
            // Fallback: Intentar con POST FormData
            sendWithFormData();
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    // Método alternativo con FormData
    const sendWithFormData = () => {
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSend.append(key, formData[key]);
        });

        fetch("https://script.google.com/macros/s/AKfycbwR8bvOtfYItXpMJOsFcnv7m9U6DOma2ycFex1HvvD6iCS35UaDFSD0Gjbr3NfHGTMz/exec", {
            method: "POST",
            body: formDataToSend,
            mode: 'no-cors'
        })
        .then(() => {
            console.log("Registro enviado con FormData");
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
            alert("Hubo un problema al registrar tus datos. Por favor intenta de nuevo.");
        });
    };

    return (
        <div className='BodyContainer'>
            <Banner />
            <button id='silenceButton' className='Container_ControlMusica' onClick={toggleMusica}>
                {reproduciendo ? <img className='ControlMusica' src={silencio} alt="Silencio"/> : <img className='ControlMusica' src={volumen} alt="Volumen"/>}
            </button>
            <section id='NuestraHistoria' className='HistoryContainer' data-aos="fade-up">
                <picture className='HistoryContainer_anillos' data-aos="zoom-in">
                    <img src={anillos} alt="flores presentación" />
                </picture>
                <h2 data-aos="zoom-in">Nuestra Historia</h2>
                <p data-aos="zoom-in">El amor verdadero no es solamente encontrar a la persona indicada, sino ser la persona indicada. <br /> Después de cinco años juntos, hemos decidido dar el siguiente paso.</p>
                <p data-aos="zoom-in">Te invitamos a ser parte de este momento único en nuestras vidas.</p>
                <h3>Queremos que este momento tan especial lo disfrutes tanto como nosotros, por eso hemos decidido que el evento sea solo para adultos.</h3>
                <picture className='HistoryContainer_img'>
                    <img src={imgBody1} alt="imagen o video" />
                </picture>
                <div style={{ height: 'auto', position: 'relative' }}>
                    <CircularGallery bend={-3} textColor="#4F7A92" borderRadius={0.05} scaleFactor={1.7}/>
                </div>
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
                    <section className='LocationContainer_text_info' data-aos="zoom-in-up">
                        <div>
                            <h3>Araceli Zuleima Reyes Salgado &nbsp; & &nbsp; Mario Alan Albarran Guerrero</h3>
                        </div>
                        <div className='LocationContainer_text_info_padres'>
                            <section>
                                <h4>Padres de la novia:</h4>
                                <ul>
                                    <li>Paula Salgado Rogel</li>
                                    <li>Roberto Reyes Rojas</li>
                                </ul>
                            </section>
                            <section>
                                <h4>Padres del novio:</h4>
                                <ul>
                                    <li>María Elena Guerrero Beristain</li>
                                    <li>Martín Albarran Trujillo</li>
                                </ul>
                            </section>
                        </div>
                        <h2>Con la bendición de Dios y nuestros Padres</h2>
                    </section>
                    <h3 data-aos="zoom-in-up"><b>Padrinos de Velación:</b></h3>
                    <h3 data-aos="zoom-in-up">Nadia Albarran Palacios & Rafael Fuerte Carbajal</h3>
                </div>
            </section>
            <section className='GalleryContainer'>
                <div className='GalleryContainer_principal'>
                    <div className='GalleryContainer_text' data-aos="zoom-in-right">
                        <h2>Programa del Evento</h2>
                        <h3><b>Ceremonia Religiosa:</b> 15:00 - 16:00 hrs</h3>
                        <h3><b>Ceremonia Cívica:</b> 17:00 - 17:30 hrs</h3>
                        <h3><b>Recepción en Jardín:</b> 17:30 - 18:00 hrs</h3>
                        <h3><b>Inicio del Evento en Jardín:</b> 18:00 hrs</h3>
                        <h3><b>Cena:</b> 18:30 - 19:30 hrs</h3>
                        <h3><b>Fiesta:</b> 19:30 - 03:00 hrs</h3>
                        <h3><b>Fin del Evento en Jardín:</b> 03:00 hrs</h3>
                        <h3><b>After Party:</b> 03:00 hrs - ∞ hrs</h3>
                        <Button to="/itinerario">Ver detalles</Button>
                    </div>
                    <picture className='GalleryContainer_imgs'>
                        {/* <img src={imgBody2_8} alt="img sobre otra" /> */}
                        <RollingGallery autoplay={true} pauseOnHover={true} />
                    </picture>
                </div>
                <picture className='GalleryContainer_principalImg'>
                    <img src={flowers90} alt="flores inclinadas" />
                </picture>
            </section>
            <section className='GiftTableContainer'>
                <h2 data-aos="zoom-in">Tu presencia será el mejor regalo</h2>
                <div className='GiftTableContainer_grid' data-aos="zoom-in">
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
                <a className="BtnExternoGlobal" data-aos="zoom-in" href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51711361" target='_blank'>Ver mesa de regalos</a>
            </section>
            <section className='DressCodeContainer' >
                <h2 data-aos="fade-up">Código de Vestimenta</h2>
                <div className='DressCodeContainer_position' data-aos="fade-up">
                    <picture className='DressCodeContainer_position_img'>
                        <img src={imgBody12} alt="img referencia" />
                    </picture>
                    <section className='DressCodeContainer_position_text'>
                        <picture className='DressCodeContainer_position_flowers'>
                            <img src={flowers} alt="flores presentación" />
                            <img src={dress} alt="vestimenta" />
                        </picture>
                        <p>Formal Elegante</p>
                        <p>Favor de evitar colores:</p>
                        <h3>Blanco &nbsp; & &nbsp; Rojo </h3>
                    </section>
                </div>
            </section>
            <section className='EventGridContainer'>
                <h2 data-aos="fade-up">Momentos únicos, recuerdos eternos</h2>
                <section className='EventGridContainer_imgGrid' >
                    <div className="item item1" data-aos="fade-up"></div>
                    <div className="item item2" data-aos="fade-up"></div>
                    <div className="item item3" data-aos="fade-up"></div>
                    <div className="item item4" data-aos="fade-up"></div>
                    <div className="item item5" data-aos="fade-up"></div>
                    <div className="item item6" data-aos="fade-up"></div>
                </section>
                <picture className='EventGridContainer_img'>
                    <img src={flower45} alt="flores inclinada" />
                </picture>
            </section>
            <section id='FormAbsolute' className='FormContainer'>
                <h2 data-aos="zoom-in-up">Confirma tu Asistencia</h2>
                <section data-aos="zoom-in-up">
                    <Stepper
                        initialStep={1}
                        onStepChange={(step) => {
                            console.log(step);
                            AOS.refresh();
                        }}
                        onFinalStepCompleted={sendToGoogleSheets}
                        backButtonText="Anterior"
                        nextButtonText="Siguiente"
                        >
                        <Step>
                            <h3><b>Agradecemos tu interes</b></h3>
                            <p>Sigue los siguientes pasos para tu registro</p>
                        </Step>
                        <Step>
                            <p><b>El evento es privado, no se puede acceder sin registro ni invitación</b></p>
                            <p>* Pueden surgir cambios sin previo aviso</p>
                            <p><b>Ingresa los datos solicitados</b></p>
                            <input 
                                placeholder="Nombre"  
                                name="nombre" 
                                value={formData.nombre} 
                                onChange={handleChange}
                                disabled={isLoading}
                            />
                            <input 
                                placeholder="Apellidos" 
                                name="apellidos" 
                                value={formData.apellidos} 
                                onChange={handleChange}
                                disabled={isLoading}
                            />
                            <input 
                                placeholder="Número de teléfono"  
                                name="telefono" 
                                value={formData.telefono} 
                                onChange={handleChange}
                                disabled={isLoading}
                            />
                            <input 
                                placeholder="Correo" 
                                name="correo" 
                                type="email"
                                value={formData.correo} 
                                onChange={handleChange}
                                disabled={isLoading}
                            />
                            <input 
                                placeholder="No. invitados (Incluido tú)"  
                                name="invitados" 
                                type="number"
                                min="1"
                                value={formData.invitados} 
                                onChange={handleChange}
                                disabled={isLoading}
                            />
                        </Step>
                        <Step>
                            <h3>Gracias por registrarte</h3>
                            <p>¿Tienes alguna duda respecto al evento?</p>
                            <input 
                                placeholder="Escribe tus dudas"
                                name="dudas" 
                                value={formData.dudas} 
                                onChange={handleChange}
                                disabled={isLoading}
                            />
                            <p>Espera próximas noticias en tu Correo o Whatsapp</p>
                            {isLoading && <p>Enviando datos...</p>}
                        </Step>
                    </Stepper>
                </section>
            </section>
        </div>
    )
}

export default Body