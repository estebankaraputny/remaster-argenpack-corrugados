import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faMapMarkerAlt, faPhone, faCertificate} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

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
                    <Link to="/contacto" className="button-contactar">
                        Contactar
                    </Link>
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
            <ul className="contact-info-footer">
                <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Parque Industrial, Berazategui</li>
                <li><FontAwesomeIcon icon={faPhone} /> +54 11 4200-0000</li>
                <li><FontAwesomeIcon icon={faEnvelope} /> info@argenpack.com</li>
            </ul>
            <div className="social-links">
                <Link to="#" className="social-link" aria-label="Facebook" target="_black">
                    <FontAwesomeIcon icon={faFacebookF} />
                </Link>
                <Link to="https://www.instagram.com/argenpackcorrugados/" className="social-link" aria-label="Instagram" target="_black">
                    <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link to="https://www.linkedin.com/company/argenpack-corrugados-s-a-/posts/?feedView=all" className="social-link" aria-label="LinkedIn" target="_black">
                   <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
            </div>
        </div>
        </div>

        {/* Columna Navegación */}
        <div className="footer-column nav-column">
            <h4>Accesos rápidos</h4>
            <ul>
                <li>
                    <Link to="/" className="nav-link-footer">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/nosotros" className="nav-link-footer">
                        Nosotros
                    </Link>
                </li>
                <li>
                    <Link to="/productos" className="nav-link-footer">
                        Productos
                    </Link>
                </li>
                <li>
                    <Link to="/servicios" className="nav-link-footer">
                        Servicios
                    </Link>
                </li>
                <li>
                    <Link to="/sustentabilidad" className="nav-link-footer">
                        Sustentabilidad
                    </Link>
                </li>
                <li>
                    <Link to="/noticias" className="nav-link-footer">
                        Noticias
                    </Link>
                </li>
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