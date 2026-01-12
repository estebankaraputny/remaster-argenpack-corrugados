import Logo from "../../assets/image/logoargenpacknegativo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="container-navbar">
            <nav className="navbar">
                <div className="content-logo-navbar">
                    <img src={Logo} className="logo-navbar" alt="Logo Argenpack Corrugados" />
                </div>
                <div className="content-nav">
                    <div>
                        <button
                            className="menu-toggle"
                            type="button"
                            aria-label="Toggle menu"
                            onClick={() => setOpen((v) => !v)}
                        >
                            {open ? (
                                <FontAwesomeIcon icon={faXmark} />
                            ) : (
                                <FontAwesomeIcon icon={faBars} />
                            )}
                        </button>
                    </div>
                    <ul className={`nav-links ${open ? 'open' : 'closed'}`}>
                        <li><a href="#inicio" className="nav-link" onClick={() => setOpen(false)}>Inicio</a></li>
                        <li><a href="#nosotros" className="nav-link" onClick={() => setOpen(false)}>Nosotros</a></li>
                        <li><a href="#productos" className="nav-link" onClick={() => setOpen(false)}>Productos</a></li>
                        <li><a href="#servicios" className="nav-link" onClick={() => setOpen(false)}>Servicios</a></li>
                        <li><a href="" className="nav-link" onClick={() => setOpen(false)}>Sustentabilidad</a></li>
                        <li><a href="" className="nav-link" onClick={() => setOpen(false)}>Noticias</a></li>
                        <li><a href="#contacto" className="nav-link" onClick={() => setOpen(false)}>Contacto</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;