import Logo from "../../assets/image/logoargenpacknegativo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <div className={`navbar-content ${scrolled ? 'scrolled' : ''}`}>
                <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                    <div className="content-logo-navbar">
                        <Link to="/"><img src={Logo} className="logo-navbar" alt="Logo Argenpack Corrugados" /></Link>
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
                        <div className={`content-nav-links ${open ? 'open' : 'closed'}`}>
                            <ul className="nav-links">
                                <li><Link to="/" className="nav-link" onClick={() => setOpen(false)}>Inicio</Link></li>
                                <li><Link to="/nosotros" className="nav-link" onClick={() => setOpen(false)}>Nosotros</Link></li>
                                <li><Link to="/productos" className="nav-link" onClick={() => setOpen(false)}>Productos</Link></li>
                                <li><Link to="/servicios" className="nav-link" onClick={() => setOpen(false)}>Servicios</Link></li>
                                <li><Link to="/sustentabilidad" className="nav-link" onClick={() => setOpen(false)}>Sustentabilidad</Link></li>
                                <li><Link to="/noticias" className="nav-link" onClick={() => setOpen(false)}>Noticias</Link></li>
                                <li><Link to="/contacto" className="nav-link" onClick={() => setOpen(false)}>Contacto</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar; 