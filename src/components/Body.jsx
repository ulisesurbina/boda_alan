import '../App.css'
import Banner from './BannerN';
import Button from '../utils/Button';
import CircularGallery from '../utils/CircularGallery'
import RollingGallery from '../utils/RollingGallery'
import { useState } from 'react';
import AOS from 'aos';
import Stepper, { Step } from '../components/Stepper';
import pausa from '../assets/pausa.webp'
import play from '../assets/play.webp'
import flowers from '../assets/flowers.png'
import dress from '../assets/vestimenta.webp'
import imgBody1 from '../assets/boda_12reflec.webp'
import flowersCircle from '../assets/flowersCircle.png'
import imgBodyCircle from '../assets/boda_6.webp'
import flowers90 from '../assets/flowers90.png'
import imgBody12 from '../assets/boda_15.webp'
import flower45 from '../assets/flower45.png'
import anillos from '../assets/anillosNew.webp'
import qr_dot from '../assets/qr_dot.webp'
import qr_boda from '../assets/qr_boda.webp'
import regaloGif from '../assets/regalo.gif'
import regaloGif2 from '../assets/regalo2.gif'

function Body({ reproduciendo, toggleMusica }) {
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        telefono: '',
        correo: '',
        invitados: '',
        dudas: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const validateForm = () => {
        const required = ['nombre', 'apellidos', 'telefono', 'correo', 'invitados'];
        const invitadosCount = Number(formData.invitados || 1);
        const invitadosValidos = [...Array(invitadosCount - 1)].every((_, i) => {
        const key = `invitado_${i + 1}`;
        return formData[key] && formData[key].trim() !== '';
    });
    return required.every(field => formData[field].trim() !== '') && invitadosValidos;
    };
    const sendToGoogleSheets = async () => {
        if (!validateForm()) {
            alert("Por favor completa todos los campos obligatorios");
            return;
        }
        setIsLoading(true);
        const invitadosExtra = Object.fromEntries(
            Object.entries(formData).filter(([key]) => key.startsWith('invitado_'))
        );
        const dataToSend = {
            nombre: formData.nombre,
            apellidos: formData.apellidos,
            telefono: formData.telefono,
            correo: formData.correo,
            invitados: formData.invitados,
            dudas: formData.dudas,
            ...invitadosExtra
        };
        try {
            await fetch(`https://script.google.com/macros/s/AKfycbxNAqvEi1RtJ03gn3kpo1bdx5O9QAZDkzRziob5j0Ozu5udqcELfrd14ezM3pMUMRnW/exec`, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend),
            });
            alert("Datos enviados correctamente");
            setFormData({
                nombre: '',
                apellidos: '',
                telefono: '',
                correo: '',
                invitados: '1',
                dudas: ''
            });
        } catch (error) {
            console.error("Error al enviar datos:", error);
            alert("Hubo un problema al registrar tus datos. Intenta más tarde.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='BodyContainer'>
            <Banner />
            <button id='silenceButton' className='Container_ControlMusica' onClick={toggleMusica}>
                {reproduciendo ? <img className='ControlMusica' src={pausa} alt="Play"/> : <img className='ControlMusica' src={play} alt="Pausa"/>}
            </button>
            <section id='NuestraHistoria' className='HistoryContainer' data-aos="zoom-in">
                <picture className='HistoryContainer_anillos'>
                    <img src={anillos} alt="flores presentación" />
                </picture>
                <h2>Nuestra Historia</h2>
                <p>El amor verdadero no es solamente encontrar a la persona indicada, sino ser la persona indicada. <br /> Después de cinco años juntos, hemos decidido dar el siguiente paso.</p>
                <p>Te invitamos a ser parte de este momento único en nuestras vidas.</p>
                <h3>Queremos que este momento tan especial lo disfrutes tanto como nosotros, por eso hemos decidido que el evento sea solo para adultos.</h3>
                {/* <div className='HistoryContainer_sectionQR'>
                    <p>Ayudanos compartiendo tu recuerdo de la boda</p>
                    <picture className='HistoryContainer_qrDot'>
                        <img src={qr_dot} alt="qr dot memories" />
                    </picture>
                </div> */}
                <picture className='HistoryContainer_img'>
                    <img src={imgBody1} alt="imagen o video" />
                </picture>
                <div className='ContainerCircularImg'>
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
                <div className='LocationContainer_text' data-aos="zoom-in-up">
                    <section className='LocationContainer_text_info'>
                        <div>
                            <h3 className='LocationContainer_text_info_Web'>Araceli Zuleima Reyes Salgado &nbsp; & &nbsp; Mario Alan Albarran Guerrero</h3>
                            <h3 className='LocationContainer_text_info_Mob'>Araceli &nbsp; & &nbsp; Mario Alan</h3>
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
                    <h3><b>Padrinos de Velación:</b></h3>
                    <h3>Nadia Albarran Palacios & Rafael Fuerte Carbajal</h3>
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
                        <RollingGallery autoplay={true} pauseOnHover={true} />
                    </picture>
                </div>
                <picture className='GalleryContainer_principalImg'>
                    <img src={flowers90} alt="flores inclinadas" />
                </picture>
            </section>
            <section className='GiftTableContainer' data-aos="zoom-in">
                <h2>Tu presencia será el mejor regalo. Aún así, si te nace contribuir a nuestro nuevo capítulo, aquí está nuestra mesa de regalos</h2>
                <a className="BtnExternoGlobal" href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51711361" target='_blank'>Ver mesa de regalos</a>
                <div className='GiftTableContainer_grid'>
                    <div className='GiftTableContainer_gridItem'>
                        <section>
                            <picture>
                                <img src={regaloGif} alt="img regalo gif" />
                            </picture>
                        </section>
                        <section>
                            <picture>
                                <img src={regaloGif2} alt="img regalo gif" />
                            </picture>
                        </section>
                    </div>
                </div>
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
                    <div className="item item7" data-aos="fade-up"></div>
                    <div className="item item8" data-aos="fade-up"></div>
                    <div className="item item9" data-aos="fade-up"></div>
                </section>
                <picture className='EventGridContainer_img'>
                    <img src={flower45} alt="flores inclinada" />
                </picture>
            </section>
            <section id='FormAbsolute' className='FormContainer'>
                <h2 data-aos="zoom-in-up">Confirma tu Asistencia</h2>
                <div className='FormContainer_container' data-aos="zoom-in-up">
                    <picture>
                        <img src={qr_boda} alt="qr evento boda" />
                    </picture>
                    <section>
                        <Stepper
                            initialStep={1}
                            onStepChange={(step) => {
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
                                <p>* Los invitados serán autorizados por los novios</p>
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
                                {Number(formData.invitados) > 1 && (
                                    <>
                                        <p><b>Nombres de tus invitados:</b></p>
                                        {[...Array(Number(formData.invitados) - 1)].map((_, i) => (
                                        <input
                                            key={i}
                                            placeholder={`Nombre del invitado ${i + 1}`}
                                            name={`invitado_${i + 1}`}
                                            value={formData[`invitado_${i + 1}`] || ""}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                        />
                                        ))}
                                    </>
                                )}
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
                </div>
            </section>
        </div>
    )
}

export default Body