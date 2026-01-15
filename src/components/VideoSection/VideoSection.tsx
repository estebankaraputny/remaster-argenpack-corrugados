import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./VideoSection.css";

const testimonials = [
  {
    id: 1,
    text: "La calidad del cartón corrugado superó nuestras expectativas. Los envases son muy resistentes y llegaron en el tiempo acordado.",
    author: "Carlos Méndez",
    role: "Logística - Distribuidora Norte"
  },
  {
    id: 2,
    text: "Excelente atención al cliente. Nos asesoraron con las medidas exactas para reducir costos en nuestros envíos. Muy recomendados.",
    author: "Ana Gómez",
    role: "Dueña de 'EcoTienda'"
  },
  {
    id: 3,
    text: "Necesitábamos cajas personalizadas con nuestro logo urgente y Argenpack cumplió con una velocidad impresionante.",
    author: "Roberto Fernández",
    role: "Gerente de Producción"
  },
  {
    id: 4,
    text: "Proveedores confiables y serios. Llevamos 2 años trabajando con ellos y la calidad siempre se mantiene constante.",
    author: "Estela Ruiz",
    role: "Jefa de Compras"
  }
];

const VideoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const next = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    intervalRef.current = window.setInterval(next, 4000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);


  return (
    <section className="video-testimonials-section" data-aos="fade-up"
     data-aos-duration="2000">
      <div className="vt-container">
        {/* Columna Izquierda: Video */}
        <div className="video-wrapper">
          <iframe
            className="responsive-iframe"
            src="https://www.youtube.com/embed/O_O7k83cFm8?si=zm2ju507E_sFNvJo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Columna Derecha: Carrusel */}
        <div className="carousel-wrapper">
          
          <div className="testimonial-card">
            <div className="icon-quote">
               <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
            
            <p className="testimonial-text">
              "{testimonials[currentIndex].text}"
            </p>
            
            <div className="testimonial-author">
              <h4>{testimonials[currentIndex].author}</h4>
              <span>{testimonials[currentIndex].role}</span>
            </div>
          </div>

          <div className="carousel-controls">
            
            <div className="dots">
                {testimonials.map((_, index) => (
                    <span 
                        key={index} 
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;