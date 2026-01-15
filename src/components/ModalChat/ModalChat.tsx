import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faXmark, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./ModalChat.css";

const ModalChat = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="modal-chat-container">
            <button className="modal-chat-button" onClick={toggleModal} aria-label="Open contact modal">
                <FontAwesomeIcon icon={isOpen ? faXmark : faCommentDots} />
            </button>

            <div className={`modal-chat-window ${isOpen ? 'open' : ''}`}>
                <div className="modal-chat-header">
                    <h4>¿Cómo podemos ayudarte?</h4>
                    <p>Estamos en línea para responder tus consultas.</p>
                </div>
                <div className="modal-chat-body">
                    <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="contact-option">
                        <FontAwesomeIcon icon={faWhatsapp} className="contact-icon whatsapp" />
                        <span>Chateá con nosotros</span>
                    </a>
                    <a href="mailto:info@argenpack.com" className="contact-option">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon email" />
                        <span>Envianos un Email</span>
                    </a>
                    <a href="tel:+541112345678" className="contact-option">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon phone" />
                        <span>Llamanos</span>
                    </a>
                     <a href="https://www.linkedin.com/company/argenpack-corrugados-s-a-/" target="_blank" rel="noopener noreferrer" className="contact-option">
                        <FontAwesomeIcon icon={faLinkedin} className="contact-icon instagram" />
                        <span>Seguinos en Linkedin</span>
                    </a>
                    <Link to="/contacto" className="contact-option" onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon form" />
                        <span>Usá nuestro formulario</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ModalChat;