import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./carrusel.css";

type ImageType = string;

type Props = {
  img1: ImageType;
  img2: ImageType;
  img3: ImageType;
  titlePage: string;
  description: string;
};

const Carrusel = ({ img1, img2, img3, titlePage, description }: Props): JSX.Element => {
  const images = useMemo(() => [img1, img2, img3], [img1, img2, img3]);
  const [index, setIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  const next = useCallback(() => setIndex(i => (i + 1) % images.length), [images.length]);
  const prev = useCallback(() => setIndex(i => (i - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = window.setInterval(next, 3000);
      return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
  }, [isPaused, next]);

  return (
    <div
      className="carrusel-component"
      role="region"
      aria-roledescription="carousel"
      aria-label={titlePage}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button className="carrusel__nav carrusel__nav--prev" aria-label="Anterior" onClick={prev} type="button">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div className="carrusel__slide" tabIndex={0} onKeyDown={(e) => { if (e.key === "ArrowLeft") prev(); if (e.key === "ArrowRight") next(); }}>
        <img className="carrusel__image" src={String(images[index])} alt={`${titlePage} — imagen ${index + 1}`} />
        <div className="carrusel__overlay">
          <div className="carrusel__caption" aria-live="polite">
            <h1>{titlePage.toLocaleUpperCase()}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>

      <button className="carrusel__nav carrusel__nav--next" aria-label="Siguiente" onClick={next} type="button">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      <div className="carrusel__indicators" aria-hidden={false}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`carrusel__dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Ir a imagen ${i + 1}`}
            aria-current={i === index}
            type="button"
          />
        ))}
      </div>
    </div>
  );
};

export default Carrusel;