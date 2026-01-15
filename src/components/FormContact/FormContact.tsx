import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./FormContact.css";

const FormContact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [statusMessage, setStatusMessage] = useState("");

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            // Replace these with your actual EmailJS credentials
            const serviceID = 'YOUR_SERVICE_ID';
            const templateID = 'YOUR_TEMPLATE_ID';
            const publicKey = 'YOUR_PUBLIC_KEY';

            emailjs.sendForm(serviceID, templateID, form.current, publicKey)
                .then((result) => {
                    console.log(result.text);
                    setStatusMessage("¡Mensaje enviado con éxito!");
                    form.current?.reset();
                }, (error) => {
                    console.log(error.text);
                    setStatusMessage("Hubo un error al enviar el mensaje. Por favor, intentá de nuevo.");
                });
        }
    };

    return (
        <section className="contact-form-section" data-aos="zoom-in">
            <div className="contact-form-wrapper">
                <div className="contact-info">
                    <h3>Contactate con Nosotros</h3>
                    <p>
                        Estamos para ayudarte. Completá el formulario y nuestro equipo se pondrá en contacto a la brevedad.
                    </p>
                    <div className="contact-details">
                        <p><strong>Email:</strong> info@argenpack.com</p>
                        <p><strong>Teléfono:</strong> +54 11 1234-5678</p>
                        <p><strong>Dirección:</strong> Av. Siempre Viva 742, Buenos Aires, Argentina</p>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="contact-form-container">
                    <div className="form-group-contact">
                        <label htmlFor="from_name">Nombre</label>
                        <input type="text" name="from_name" id="from_name" required />
                    </div>
                    <div className="form-group-contact">
                        <label htmlFor="from_email">Email</label>
                        <input type="email" name="from_email" id="from_email" required />
                    </div>
                    <div className="form-group-contact">
                        <label htmlFor="subject">Asunto</label>
                        <input type="text" name="subject" id="subject" required />
                    </div>
                    <div className="form-group-contact">
                        <label htmlFor="message">Mensaje</label>
                        <textarea name="message" id="message" rows={4} required></textarea>
                    </div>
                    <button type="submit" className="contact-form-submit">Enviar Mensaje</button>
                    {statusMessage && <p className="status-message">{statusMessage}</p>}
                </form>
            </div>
        </section>
    );
};

export default FormContact;