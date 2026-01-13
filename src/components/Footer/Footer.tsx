import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faMapMarkerAlt, faPhone, faCertificate } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-contacto">
            <div className="footer-contacto-left">
                <div className="footer-contacto-info">
                    <h3>Sigamos conectados</h3>
                    <p>Queremos conocer sus proyectos. Contáctenos y le brindaremos más información sobre nuestros productos y soluciones.</p>
                </div>
                <div className="footer-contacto-button">
                    <a href="">Contactar</a>
                </div>
            </div>
        </div>
      <div className="footer-container">
        
        {/* Columna Marca */}
        <div className="footer-column brand-column">
            <h3 className="footer-logo">Argenpack Corrugados</h3>
            <p className="footer-text">
                Soluciones integradas de packaging. Calidad, innovación y compromiso con el medio ambiente y la industria.
            </p>
            <div className="footer-column contact-column">
            <h4>Contacto</h4>
            <ul className="contact-info">
                <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Parque Industrial, Berazategui</li>
                <li><FontAwesomeIcon icon={faPhone} /> +54 11 4200-0000</li>
                <li><FontAwesomeIcon icon={faEnvelope} /> info@argenpack.com</li>
            </ul>
            <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">F</a>
                <a href="#" className="social-link" aria-label="Instagram">Ig</a>
                <a href="#" className="social-link" aria-label="LinkedIn">In</a>
            </div>
        </div>
        </div>

        {/* Columna Navegación */}
        <div className="footer-column nav-column">
            <h4>Accesos rápidos</h4>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Sustentabilidad</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>

        {/* Columna Normas */}
        <div className="footer-column standards-column">
            <h4>Calidad Certificada</h4>
            <div className="standards-badges">
                <div className="standard-item">
                    <FontAwesomeIcon icon={faCertificate} />
                    <span>ISO 9001</span>
                </div>
                <div className="standard-item">
                    <FontAwesomeIcon icon={faCertificate} />
                    <span>IRAM</span>
                </div>
            </div>
            <p className="standards-desc">Comprometidos con la mejora continua y estándares internacionales.</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Argenpack Corrugados.</p>
      </div>
    </footer>
  )
}

export default Footer;