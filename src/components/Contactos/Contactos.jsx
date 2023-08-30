import { useState } from "react";
import Back from "../Header_Footer/Back";
import img from "../images/Noticias.jpg";
import './Contactos.css';
import axios from 'axios';

export function Contactos() {

    const [formulario, setFormulario] = useState({ nombre: '', correo: '', mensaje: '' });

    function enviarInformacion(e) {
        e.preventDefault();

        axios.post('http://localhost:3000/send-email', formulario) // Cambia la URL según tu servidor
            .then(response => {
                console.log(response.data);
                alert("Mensaje enviado correctamente");
            })
            .catch(error => {
                console.error("Error al enviar el correo:", error);
                alert("Error al enviar el mensaje");
            });
    }

    return (
        <>
            <section className='news-section mb'>
                <Back name='Por cualquier duda' title='Contactanos' cover={img} />
                <div className='container recent'></div>
            </section>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <form className="contact shadow p-4" onSubmit={enviarInformacion}>
                            <h4>Envia tu consulta</h4>
                            <div className="mb-3">
                                <input type='text' className='form-control' placeholder='Nombre' onChange={(e) => setFormulario({ ...formulario, nombre: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <input type='text' className='form-control' placeholder='Email' onChange={(e) => setFormulario({ ...formulario, correo: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <input type='text' className='form-control' placeholder='Asunto' />
                            </div>
                            <div className="mb-3">
                                <textarea className='form-control' cols='30' rows='10' placeholder='Mensaje' onChange={(e) => setFormulario({ ...formulario, mensaje: e.target.value })}></textarea>
                            </div>
                            <button type="submit" className='btn btn-primary'>Enviar Consulta</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactos;
