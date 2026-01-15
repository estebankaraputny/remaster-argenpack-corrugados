import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUsers, faHandshake, faLeaf, faStar, faRocket, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './CarruselValores.css';

const valores = [
    {
        icon: faLightbulb,
        title: "Innovación",
        text: "Buscamos constantemente nuevas y mejores formas de hacer las cosas."
    },
    {
        icon: faUsers,
        title: "Colaboración",
        text: "Trabajamos en equipo, sumando esfuerzos para lograr objetivos comunes."
    },
    {
        icon: faHandshake,
        title: "Compromiso",
        text: "Nos comprometemos con nuestros clientes, nuestra gente y nuestro planeta."
    },
    {
        icon: faLeaf,
        title: "Sustentabilidad",
        text: "Operamos de manera responsable con el medio ambiente."
    },
    {
        icon: faStar,
        title: "Excelencia",
        text: "Nos esforzamos por alcanzar los más altos estándares de calidad en todo lo que hacemos."
    },
    {
        icon: faRocket,
        title: "Pasión",
        text: "Nos apasiona nuestro trabajo y nos impulsa a superarnos día a día."
    }
];

const CarruselValores = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? valores.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === valores.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carrusel-valores-container">
            {valores.map((valor, index) => (
                <div
                    key={index}
                    className={`carrusel-valores-slide ${index === currentIndex ? 'active' : ''}`}
                >
                    <h3 className="carrusel-valores-title">{valor.title}</h3>
                    <div className="carrusel-valores-icon">
                        <FontAwesomeIcon icon={valor.icon} />
                    </div>
                    <p className="carrusel-valores-text">{valor.text}</p>
                </div>
            ))}
            <div className="carrusel-valores-controls">
                <button className="carrusel-valores-button" onClick={prevSlide}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="carrusel-valores-button" onClick={nextSlide}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
};

export default CarruselValores;
